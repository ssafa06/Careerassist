import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.png";
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleResetPassword = async () => {
  try {
    setLoading(true);
    setError("");
    setSuccess("");

    const { error } = await supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          "http://localhost:5173/reset-password",
      }
    );

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(
      "Password reset email sent successfully."
    );
  } catch (err) {
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6">
      
      {/* Logo line placeholder */}
      <div className="w-full max-w-sm mb-8 border-b border-slate-700 pb-3 flex items-center justify-center gap-3">

  <img
    src={logo}
    alt="CareerAssist"
    className="w-10 h-10 object-contain"
  />

  <span className="text-white font-bold text-lg">
    CareerAssist
  </span>

</div>

      <div className="w-full max-w-sm bg-slate-900 rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h1 className="text-white text-2xl font-bold mb-2">Reset Password</h1>
        <p className="text-slate-400 text-sm mb-6">
          Enter your email address and we’ll send you a reset link.
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
        {/* Email field */}
      <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter your email"
          className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all mb-4"
        />

        {/* CTA */}
      <button
  onClick={handleResetPassword}
  disabled={loading}
  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-blue-600/20 disabled:opacity-50"
>
  {loading ? "Sending..." : "Send Reset Link →"}
</button>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 text-slate-400 hover:text-slate-200 text-sm transition-colors"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
