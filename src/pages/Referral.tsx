import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";

// ─── Types ────────────────────────────────────────────────────────────────────
type Referral = {
  id: string;
  referred_email: string | null;
  status: "pending" | "registered" | "successful";
  reward_amount: number;
  reward_credited: boolean;
  created_at: string;
  registered_at: string | null;
  paid_at: string | null;
};

const statusConfig = {
  pending: { label: "Pending", classes: "bg-yellow-100 text-yellow-700 border border-yellow-200" },
  registered: { label: "Registered", classes: "bg-blue-100 text-blue-700 border border-blue-200" },
  successful: { label: "Successful ✓", classes: "bg-green-100 text-green-700 border border-green-200" },
};

const Referral = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const referralLink = userId
    ? `${window.location.origin}/register?ref=${userId}`
    : "";

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate("/login"); return; }
      setUserId(user.id);
      const { data, error } = await supabase
        .from("referrals")
        .select("*")
        .eq("referrer_id", user.id)
        .order("created_at", { ascending: false });
      if (!error && data) setReferrals(data as Referral[]);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => { loadData(); }, [loadData]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
    } catch {
      const el = document.createElement("textarea");
      el.value = referralLink;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareWhatsApp = () => {
    const text = encodeURIComponent(`🎯 Join CareerAssist — India's AI career guidance platform!\nGet your personalized career roadmap: ${referralLink}`);
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const shareEmail = () => {
    const subject = encodeURIComponent("Discover your ideal career with CareerAssist");
    const body = encodeURIComponent(`Hi,\n\nI found this amazing AI-powered career platform called CareerAssist. It helped me discover the right career path with a personalized roadmap.\n\nSign up using my link and get started:\n${referralLink}\n\nBest,`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const shareTwitter = () => {
    const text = encodeURIComponent(`🚀 Discover your perfect career with CareerAssist — India's AI career guidance platform! ${referralLink} #CareerAssist #AICareer`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
  };

  const stats = {
    total: referrals.length,
    registered: referrals.filter((r) => r.status === "registered").length,
    pending: referrals.filter((r) => r.status === "pending").length,
    successful: referrals.filter((r) => r.status === "successful").length,
    rewards: referrals.filter((r) => r.reward_credited).reduce((sum, r) => sum + r.reward_amount, 0),
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex text-slate-800">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
      <div className={`fixed inset-y-0 left-0 z-30 lg:static lg:z-auto transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <Sidebar />
      </div>

      <div className="flex-1 min-w-0 overflow-auto">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center gap-4 px-5 py-4 border-b border-slate-200 sticky top-0 bg-white z-10 text-slate-800 shadow-sm">
          <button onClick={() => setSidebarOpen(true)} className="text-slate-600 hover:text-slate-900">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-slate-800 font-bold">Invite & Refer</span>
        </div>

        <div className="p-5 md:p-8 max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl shadow-md shadow-purple-200">🎁</div>
              <div>
                <h1 className="text-slate-800 text-2xl font-black">Invite & Refer</h1>
                <p className="text-slate-500 text-sm">Earn <span className="text-green-600 font-bold">₹100</span> for every friend who joins and pays</p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <>
              {/* Referral Link Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">Your Unique Referral Link</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 flex items-center overflow-hidden">
                    <span className="text-slate-700 text-sm truncate font-mono">{referralLink}</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className={`shrink-0 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center gap-2 shadow-sm ${copied ? "bg-green-600 text-white shadow-green-100" : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-100"}`}
                  >
                    {copied ? (
                      <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Copied!</>
                    ) : (
                      <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Copy Link</>
                    )}
                  </button>
                </div>

                {/* Share Buttons */}
                <div className="mt-4 flex flex-wrap gap-3">
                  <p className="text-slate-500 text-xs font-semibold self-center">Share via:</p>
                  <button onClick={shareWhatsApp} className="flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#128C7E] text-xs font-bold px-4 py-2 rounded-lg transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </button>
                  <button onClick={shareEmail} className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-lg transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email
                  </button>
                  <button onClick={shareTwitter} className="flex items-center gap-2 bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 border border-[#1DA1F2]/20 text-[#0c85d0] text-xs font-bold px-4 py-2 rounded-lg transition-all">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                    Twitter / X
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                {[
                  { label: "Total Invites", value: stats.total, icon: "👥", color: "from-blue-50 to-blue-100/30 border-blue-100 shadow-sm", text: "text-blue-600" },
                  { label: "Registered", value: stats.registered, icon: "✅", color: "from-indigo-50 to-indigo-100/30 border-indigo-100 shadow-sm", text: "text-indigo-600" },
                  { label: "Pending", value: stats.pending, icon: "⏳", color: "from-yellow-50 to-yellow-100/30 border-yellow-100 shadow-sm", text: "text-yellow-600" },
                  { label: "Successful", value: stats.successful, icon: "🏆", color: "from-green-50 to-green-100/30 border-green-100 shadow-sm", text: "text-green-600" },
                  { label: "Rewards Earned", value: `₹${stats.rewards}`, icon: "💰", color: "from-purple-50 to-purple-100/30 border-purple-100 shadow-sm", text: "text-purple-600" },
                ].map((stat) => (
                  <div key={stat.label} className={`bg-gradient-to-br ${stat.color} border rounded-2xl p-4 flex flex-col`}>
                    <span className="text-2xl mb-2">{stat.icon}</span>
                    <span className={`text-2xl font-black ${stat.text}`}>{stat.value}</span>
                    <span className="text-slate-500 text-xs font-semibold mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* How It Works */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6 shadow-sm">
                <p className="text-slate-800 font-bold mb-4">How It Works</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { step: "1", icon: "🔗", title: "Share Your Link", desc: "Copy and share with friends." },
                    { step: "2", icon: "📝", title: "Friend Registers", desc: "They click and create an account." },
                    { step: "3", icon: "💳", title: "Friend Pays", desc: "They unlock dashboard access." },
                    { step: "4", icon: "💰", title: "You Earn ₹100", desc: "Reward is auto-credited." },
                  ].map((item) => (
                    <div key={item.step} className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-xl mb-2 relative">
                        {item.icon}
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold">{item.step}</span>
                      </div>
                      <p className="text-slate-800 text-sm font-bold mb-1">{item.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* History Table */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                  <p className="text-slate-800 font-bold">Referral History</p>
                  <span className="text-slate-500 text-xs font-semibold">{referrals.length} total</span>
                </div>
                {referrals.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center px-6">
                    <span className="text-5xl mb-4">🚀</span>
                    <p className="text-slate-800 font-bold text-lg mb-2">No referrals yet</p>
                    <p className="text-slate-500 text-sm max-w-xs">Share your link above to start earning rewards when friends join CareerAssist.</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[500px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50">
                          <th className="text-left px-6 py-3 text-slate-600 text-xs font-bold uppercase tracking-wider">Friend</th>
                          <th className="text-left px-6 py-3 text-slate-600 text-xs font-bold uppercase tracking-wider">Invited On</th>
                          <th className="text-left px-6 py-3 text-slate-600 text-xs font-bold uppercase tracking-wider">Status</th>
                          <th className="text-right px-6 py-3 text-slate-600 text-xs font-bold uppercase tracking-wider">Reward</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {referrals.map((ref) => {
                          const cfg = statusConfig[ref.status];
                          return (
                            <tr key={ref.id} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs">
                                    {ref.referred_email ? ref.referred_email.charAt(0).toUpperCase() : "?"}
                                  </div>
                                  <span className="text-slate-700 text-sm">
                                    {ref.referred_email ? ref.referred_email.replace(/(.{3}).*(@.*)/, "$1***$2") : "—"}
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-slate-600 text-sm">
                                {new Date(ref.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${cfg.classes}`}>{cfg.label}</span>
                              </td>
                              <td className="px-6 py-4 text-right">
                                {ref.reward_credited ? (
                                  <span className="text-green-600 font-bold text-sm">+₹{ref.reward_amount}</span>
                                ) : (
                                  <span className="text-slate-400 text-sm">—</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Referral;

