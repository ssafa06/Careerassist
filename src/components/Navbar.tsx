import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { supabase } from "../lib/supabase";
import { Menu, X, ArrowRight, LogOut, Home } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check current session
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setMobileMenuOpen(false);
      navigate("/");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  const startAssessment = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/register");
        return;
      }

      const { data: assessment } = await supabase
        .from("assessments")
        .select("id,status")
        .eq("user_id", user.id)
        .eq("status", "completed")
        .maybeSingle();

      if (!assessment) {
        navigate("/dashboard/assessment");
        return;
      }

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const isLandingPage = location.pathname === "/";

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
            <img src={logo} loading="lazy" className="w-11 h-11 object-contain" alt="CareerAssist" />
            <div>
              <h2 className="font-black text-2xl tracking-tight text-slate-900">CareerAssist</h2>
              <p className="text-xs text-slate-500 font-semibold">AI Career Guidance</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {isLandingPage ? (
              <>
                {[
                  ["#features", "Features"],
                  ["#engine", "AI Engine"],
                  ["#careers", "Domains"],
                  ["#compare", "Why Us"],
                  ["#how", "How It Works"],
                  ["#faq", "FAQ"],
                ].map(([href, label]) => (
                  <a key={label} href={href} className="text-slate-600 hover:text-blue-600 font-semibold transition">
                    {label}
                  </a>
                ))}
              </>
            ) : location.pathname === "/dashboard/assessment" ? null : (
              <button
                onClick={() => navigate("/")}
                className="text-slate-600 hover:text-blue-600 font-semibold transition flex items-center gap-1.5 cursor-pointer"
              >
                <Home className="w-4 h-4" /> Home
              </button>
            )}
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-4">
                {!location.pathname.startsWith("/dashboard") && (
                  <button
                    onClick={startAssessment}
                    className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-sm transition active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs animate-fade-in"
                  >
                    Go to Dashboard <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold shadow-sm transition active:scale-95 cursor-pointer flex items-center gap-1.5 text-xs"
                >
                  <LogOut className="w-3.5 h-3.5" /> Log Out
                </button>
              </div>
            ) : (
              <>
                <button onClick={() => navigate("/login")} className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-blue-500 font-semibold transition active:scale-95 cursor-pointer">
                  Sign In
                </button>
                <button onClick={startAssessment} className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition active:scale-95 cursor-pointer">
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile drawer toggle */}
          <button className="lg:hidden p-2 text-slate-500 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 py-4 px-6 space-y-3">
          {isLandingPage ? (
            <>
              {[
                ["#features", "Features"],
                ["#engine", "AI Engine"],
                ["#careers", "Domains"],
                ["#compare", "Why Us"],
                ["#how", "How It Works"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 hover:text-blue-600 font-semibold py-2">
                  {label}
                </a>
              ))}
            </>
          ) : location.pathname === "/dashboard/assessment" ? null : (
            <button
              onClick={() => { setMobileMenuOpen(false); navigate("/"); }}
              className="w-full text-left text-slate-700 hover:text-blue-600 font-semibold py-2 flex items-center gap-1.5 cursor-pointer"
            >
              <Home className="w-4 h-4" /> Home
            </button>
          )}

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            {user ? (
              <>
                {!location.pathname.startsWith("/dashboard") && (
                  <button onClick={() => { setMobileMenuOpen(false); startAssessment(); }} className="w-full text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg py-2 text-center cursor-pointer">
                    Go to Dashboard
                  </button>
                )}
                <button onClick={handleLogout} className="w-full text-xs font-bold bg-red-600 text-white rounded-lg py-2 text-center cursor-pointer flex items-center justify-center gap-1.5">
                  <LogOut className="w-3.5 h-3.5" /> Log Out
                </button>
              </>
            ) : (
              <div className="flex gap-3">
                <button onClick={() => { setMobileMenuOpen(false); navigate("/login"); }} className="flex-1 text-sm font-semibold border border-slate-300 rounded-xl py-2.5 text-center cursor-pointer">Sign In</button>
                <button onClick={() => { setMobileMenuOpen(false); startAssessment(); }} className="flex-1 text-sm font-bold bg-blue-600 text-white rounded-xl py-2.5 text-center cursor-pointer">Get Started</button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
