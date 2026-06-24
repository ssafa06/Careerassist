import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.png";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const handleLogin = async () => {
  try {
    setLoading(true);
    setError("");

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setError(error.message);
      return;
    }

navigate("/assessment");  } catch (err) {
    setError("Something went wrong");
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

        {/* Logo line placeholder */}
        <div className="relative z-10 flex items-center gap-3 border-b border-white/30 pb-3 mb-6">
          {/* Sowmya: place your logo here */}
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
            Your roadmap is waiting
          </p>
          <h2 className="text-white text-4xl font-bold leading-tight mb-6">
            Welcome back.<br />
            Let's keep<br />
            <span className="italic font-light text-blue-200">moving forward</span>.
          </h2>
          <p className="text-blue-100 text-base leading-relaxed max-w-xs">
            Pick up right where you left off — your assessment, report, and career roadmap are all saved.
          </p>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <p className="text-blue-300 text-xs">
            © 2026 CareerAssist · Built for students across India
          </p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-12">

        {/* Logo line placeholder for mobile */}
        <div className="flex items-center gap-2 mb-10 lg:hidden border-b border-slate-700 pb-3">
          {/* Sowmya: place your logo here */}
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
            <h1 className="text-white text-3xl font-bold tracking-tight">Sign in</h1>
            <p className="text-slate-400 mt-2 text-sm">
              Good to see you again. Enter your details below.
            </p>
          </div>

          {/* Form fields */}
          <div className="space-y-4">
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
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-slate-300 text-sm font-medium">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-blue-400 hover:text-blue-300 text-xs transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
               <input
  type={showPassword ? "text" : "password"}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
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

          {/* Remember me */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-slate-600 bg-slate-800 accent-blue-500"
            />
            <label htmlFor="remember" className="text-slate-400 text-sm cursor-pointer">
              Keep me signed in
            </label>
          </div>
          {error && (
  <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm mb-4">
    {error}
  </div>
)}
          {/* CTA */}
          <button
  onClick={handleLogin}
  disabled={loading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-blue-600/20"
          >
            Sign In →
          </button>

          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="w-full mt-4 text-slate-400 hover:text-slate-200 text-sm transition-colors"
          >
            ← Back to Home
          </button>

          {/* Register link */}
          <p className="text-center text-slate-500 text-sm mt-8">
            New to CareerPath?{" "}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Create a free account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


export default Login;
