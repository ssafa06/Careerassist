import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

// ── Capture referral param from URL and persist to localStorage ──
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref");
  if (ref && ref.trim()) {
    localStorage.setItem("ca_referrer_id", ref.trim());
  }
}, []);

const handleRegister = async () => {
  if (!name.trim()) {
    setError("Please enter your full name");
    return;
  }

  if (!email.trim()) {
    setError("Please enter your email");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }
  try {
    setLoading(true);
    setError("");
    setSuccess("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    // ── Link referral if a referrer ID was stored ──
    const referrerId = localStorage.getItem("ca_referrer_id");
    const newUserId = data?.user?.id;

    if (referrerId && newUserId && referrerId !== newUserId) {
      // Insert referral row (ignore errors silently — don't block registration)
      await supabase.from("referrals").insert({
        referrer_id: referrerId,
        referred_id: newUserId,
        referred_email: email,
        status: "registered",
        registered_at: new Date().toISOString(),
      });
      localStorage.removeItem("ca_referrer_id");
    }

   setSuccess(
"Account created successfully. Please verify your email before signing in."
);

setTimeout(() => {
navigate("/login");
},2500);

  } catch (err) {
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};


const handleGoogleLogin = async () => {
  try {
    setLoading(true);
    setError("");
    const redirectUrl = import.meta.env.VITE_REDIRECT_URL || "https://careerassist.in/dashboard";
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl,
      },
    });
    if (error) {
      setError(error.message);
    }
  } catch (err) {
    setError("Failed to sign in with Google");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Left Panel — Brand */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">

        {/* Background texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-indigo-400 rounded-full blur-3xl opacity-20 pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
         <img
  src={logo}
  alt="CareerAssist"
  className="w-10 h-10 object-contain"
/>

<span className="text-white font-bold text-xl tracking-tight">
  CareerAssist
</span>
        </div>

        {/* Center copy */}
        <div className="relative z-10">
          <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">
            Trusted by 50,000+ students
          </p>
          <h2 className="text-white text-4xl font-bold leading-tight mb-6">
            Discover the career<br />
            that fits <span className="italic font-light text-blue-200">you</span>.
          </h2>
          <p className="text-blue-100 text-base leading-relaxed max-w-xs">
            Answer a few questions and get a personalized roadmap — degrees, skills, and a step-by-step plan.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mt-10">
            {[
              { value: "92%", label: "Match accuracy" },
              { value: "15+", label: "Career paths" },
              { value: "Free", label: "Always" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-white text-2xl font-bold">{s.value}</p>
                <p className="text-blue-200 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
          <p className="text-white text-sm leading-relaxed">
            "CareerPath showed me I was suited for AI engineering — I never would have considered it on my own."
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
              <span className="text-blue-800 font-bold text-xs">A</span>
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Arjun K.</p>
              <p className="text-blue-200 text-xs">B.Tech CSE, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-12">

        {/* Mobile logo */}
        <div className="flex items-center gap-2 mb-10 lg:hidden">
         <img
  src={logo}
  alt="CareerAssist"
  className="w-8 h-8 object-contain"
/>

<span className="text-white font-bold text-lg">
  CareerAssist
</span>
        </div>

        <div className="max-w-sm w-full mx-auto">

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-white text-3xl font-bold tracking-tight">Create your account</h1>
           
          </div>

          {/* Form fields */}
          <div className="space-y-4">

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Full Name
              </label>
             <input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Riya Sharma"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Email Address
              </label>
           <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="riya@example.com"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-1.5">
                Password
              </label>
              <div className="relative">
              <input
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 characters"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 text-xs transition-colors"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

          </div>

          {/* Terms */}
          <p className="text-slate-500 text-xs mt-5 leading-relaxed">
            By creating an account you agree to our{" "}
            <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Terms of Service</span>{" "}
            and{" "}
            <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Privacy Policy</span>.
          </p>
         {error && (
  <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm mb-4">
    {error}
  </div>
)}

{success && (
  <div className="bg-green-500/10 border border-green-500 text-green-400 p-3 rounded-lg text-sm mb-4">
    {success}
  </div>
)}
          {/* CTA */}
        <button
  onClick={handleRegister}
  disabled={loading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-blue-600/20 cursor-pointer"
          >
            {loading ? "Creating Account..." : "Create Account →"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-slate-800" />
            <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Or</span>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800/80 text-white font-semibold py-3 rounded-xl text-sm transition-all duration-300 active:scale-98 border border-slate-800 hover:border-slate-700 shadow-md hover:shadow-lg shadow-black/30 cursor-pointer"
          >
            <FcGoogle className="text-xl" />
            <span>Continue with Google</span>
          </button>

          {/* Login link */}
          <p className="text-center text-slate-500 text-sm mt-8">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
          <button
  onClick={() => navigate("/")}
  className="w-full mt-3 text-slate-400 hover:text-slate-200 text-sm transition-colors"
>
  ← Back to Home
</button>

        </div>
      </div>

    </div>
  );
};

export default Register;