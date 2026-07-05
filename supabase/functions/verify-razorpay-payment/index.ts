import "@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { user_id, payment_id, order_id, signature } = await req.json();

    const razorpaySecret = Deno.env.get("RAZORPAY_KEY_SECRET");

    if (!razorpaySecret) {
      return Response.json(
        { error: "Missing Razorpay secret" },
        { status: 500, headers: corsHeaders }
      );
    }

    const body = `${order_id}|${payment_id}`;
    const encoder = new TextEncoder();

    const key = await crypto.subtle.importKey(
      "raw",
      encoder.encode(razorpaySecret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );

    const signatureBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      encoder.encode(body)
    );

    const generatedSignature = Array.from(new Uint8Array(signatureBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    if (generatedSignature !== signature) {
      return Response.json(
        { error: "Invalid signature" },
        { status: 400, headers: corsHeaders }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SERVICE_ROLE_KEY")!
    );

    console.log("PAYMENT VERIFIED — user_id:", user_id, "order_id:", order_id);

    // ── 1. Record subscription ─────────────────────────────────────────────
    const { error: subError } = await supabase
      .from("subscriptions")
      .insert({
        user_id,
        payment_id,
        order_id,
        amount: 699,
        plan_name: "dashboard_lifetime",
        payment_status: "paid",
        is_active: true,
        purchased_at: new Date().toISOString(),
      });

    if (subError) {
      return Response.json(
        { error: subError.message },
        { status: 500, headers: corsHeaders }
      );
    }

    // ── 2. Mark referral as successful (if this user was referred) ─────────
    try {
      const { data: referralRow } = await supabase
        .from("referrals")
        .select("id")
        .eq("referred_id", user_id)
        .eq("status", "registered")
        .maybeSingle();

      if (referralRow) {
        await supabase
          .from("referrals")
          .update({
            status: "successful",
            reward_credited: true,
            paid_at: new Date().toISOString(),
          })
          .eq("id", referralRow.id);

        console.log("Referral marked successful — referral_id:", referralRow.id);
      }
    } catch (refErr) {
      // Referral update failure must NOT block payment success response
      console.error("Referral update error (non-fatal):", refErr);
    }

    return Response.json({ success: true }, { headers: corsHeaders });

  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500, headers: corsHeaders }
    );
  }
});