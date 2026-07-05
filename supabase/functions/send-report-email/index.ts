import "@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailPayload {
  email: string;
  name: string;
  topCareer: string;
  careerFit: number;
  pdfUrl: string;
  recommendations?: Array<{
    role: string;
    score: number;
    degree: string;
    demand: string;
    salary?: string;
  }>;
  swot?: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }

  try {
    const resendKey = Deno.env.get("RESEND_API_KEY");
    const fromEmail = Deno.env.get("RESEND_FROM_EMAIL") || "CareerAssist <onboarding@resend.dev>";

    if (!resendKey) {
      return Response.json(
        { error: "Missing RESEND_API_KEY environment variable" },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    const payload: EmailPayload = await req.json();
    const { email, name, topCareer, careerFit, pdfUrl, recommendations, swot } = payload;

    if (!email) {
      return Response.json(
        { error: "Recipient email is required" },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Build SWOT sections HTML
    let strengthsHtml = "";
    if (swot?.strengths && swot.strengths.length > 0) {
      strengthsHtml = swot.strengths.map(s => `<li>• ${s}</li>`).join("");
    } else {
      strengthsHtml = "<li>• Continuous Learning Mindset</li><li>• Analytical Problem Solving</li>";
    }

    let weaknessesHtml = "";
    if (swot?.weaknesses && swot.weaknesses.length > 0) {
      weaknessesHtml = swot.weaknesses.map(w => `<li>• ${w}</li>`).join("");
    } else {
      weaknessesHtml = "<li>• Building presentation confidence</li><li>• Fine-tuning time distribution</li>";
    }

    // Build Careers HTML
    let careersHtml = "";
    if (recommendations && recommendations.length > 0) {
      careersHtml = recommendations.slice(0, 3).map(rec => `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px; font-weight: bold; color: #1e3a8a;">${rec.role}</td>
          <td style="padding: 10px; color: #64748b;">${rec.degree}</td>
          <td style="padding: 10px; font-weight: bold; color: #10b981; text-align: right;">${rec.score}% Match</td>
        </tr>
      `).join("");
    }

    // Build HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Your Professional Career Report - CareerAssist</title>
  <style>
    body {
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #f8fafc;
      padding: 20px 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border: 1px solid #e2e8f0;
    }
    .header {
      background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
      padding: 30px 24px;
      text-align: center;
      color: #ffffff;
    }
    .header h1 {
      margin: 10px 0 0 0;
      font-size: 24px;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .content {
      padding: 32px 24px;
      color: #334155;
    }
    .content p {
      font-size: 16px;
      line-height: 1.6;
      margin-top: 0;
      margin-bottom: 20px;
    }
    .card-grid {
      margin: 24px 0;
      border-collapse: collapse;
      width: 100%;
    }
    .card {
      background-color: #f1f5f9;
      border-radius: 12px;
      padding: 16px;
      text-align: center;
      border: 1px solid #e2e8f0;
    }
    .card-value {
      font-size: 28px;
      font-weight: 800;
      color: #2563eb;
      margin: 4px 0;
    }
    .card-label {
      font-size: 11px;
      text-transform: uppercase;
      font-weight: bold;
      color: #64748b;
      letter-spacing: 0.5px;
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: #1e3a8a;
      margin-top: 28px;
      margin-bottom: 12px;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 6px;
    }
    .table-careers {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
    }
    .table-careers th {
      text-align: left;
      padding: 8px 10px;
      font-size: 12px;
      color: #64748b;
      border-bottom: 2px solid #e2e8f0;
    }
    .swot-box {
      margin-bottom: 16px;
      padding: 14px;
      border-radius: 10px;
    }
    .swot-strengths {
      background-color: #f0fdf4;
      border-left: 4px solid #16a34a;
    }
    .swot-weaknesses {
      background-color: #fffbeb;
      border-left: 4px solid #d97706;
    }
    .swot-title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 6px;
    }
    .swot-strengths .swot-title { color: #14532d; }
    .swot-weaknesses .swot-title { color: #78350f; }
    .swot-list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      font-size: 13px;
      line-height: 1.5;
    }
    .swot-strengths .swot-list { color: #166534; }
    .swot-weaknesses .swot-list { color: #92400e; }
    .btn-container {
      text-align: center;
      margin: 32px 0 20px 0;
    }
    .btn {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: #ffffff !important;
      padding: 14px 28px;
      font-weight: bold;
      text-decoration: none;
      border-radius: 12px;
      display: inline-block;
      box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);
    }
    .footer {
      background-color: #f1f5f9;
      padding: 24px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
      line-height: 1.5;
    }
    .footer a {
      color: #2563eb;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h2 style="margin:0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #93c5fd; font-weight: 700;">Career Assessment</h2>
        <h1>CareerAssist</h1>
      </div>
      <div class="content">
        <p>Dear <strong>${name}</strong>,</p>
        <p>Congratulations on completing your Career Assessment! Based on our psychometric and skill assessment analysis, we have prepared your personalized career report.</p>
        
        <table class="card-grid">
          <tr>
            <td width="50%" style="padding-right: 8px;">
              <div class="card">
                <div class="card-label">Recommended Path</div>
                <div class="card-value" style="font-size: 20px; line-height: 1.2; padding: 6px 0; min-height: 48px; display: flex; align-items: center; justify-content: center;">${topCareer}</div>
              </div>
            </td>
            <td width="50%" style="padding-left: 8px;">
              <div class="card">
                <div class="card-label">Career Fit Score</div>
                <div class="card-value">${careerFit}%</div>
              </div>
            </td>
          </tr>
        </table>

        ${careersHtml ? `
        <div class="section-title">Top Recommended Careers</div>
        <table class="table-careers">
          <thead>
            <tr>
              <th>Career Role</th>
              <th>Recommended Degree</th>
              <th style="text-align: right;">Fit Score</th>
            </tr>
          </thead>
          <tbody>
            ${careersHtml}
          </tbody>
        </table>
        ` : ''}

        <div class="section-title">SWOT Assessment Highlights</div>
        <div class="swot-box swot-strengths">
          <div class="swot-title">Key Strengths Found:</div>
          <ul class="swot-list">
            ${strengthsHtml}
          </ul>
        </div>
        <div class="swot-box swot-weaknesses">
          <div class="swot-title">Development Opportunities:</div>
          <ul class="swot-list">
            ${weaknessesHtml}
          </ul>
        </div>

        <p style="margin-top: 28px;">To view your detailed roadmap, academic milestones, skill gap analysis, and certified learning path recommendations, download your full PDF assessment report below:</p>

        <div class="btn-container">
          <a href="${pdfUrl}" target="_blank" class="btn">View Full PDF Report</a>
        </div>
      </div>
      <div class="footer">
        <p>If you have any questions or require custom guidance, email us at <a href="mailto:careerassistcontact@gmail.com">careerassistcontact@gmail.com</a>.</p>
        <p style="margin-top: 16px; font-size: 10px;">&copy; 2026 CareerAssist. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
`;

    // Make the API request to Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: email,
        subject: `CareerAssist: Professional Career Assessment Report for ${name}`,
        html: htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      return Response.json(
        { error: data.message || "Failed to send email via Resend" },
        {
          status: res.status,
          headers: corsHeaders,
        }
      );
    }

    return Response.json(
      { success: true, data },
      {
        headers: corsHeaders,
      }
    );
  } catch (err) {
    return Response.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Unknown error",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
});
