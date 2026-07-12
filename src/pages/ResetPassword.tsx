import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.png";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordReset = async () => {
    setError("");
    setSuccess("");

    if (!password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.updateUser({
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      setSuccess("Password updated successfully. Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="CareerNavigator"
              className="w-10 h-10 object-contain"
            />

            <h1 className="text-white text-2xl font-bold">CareerNavigator</h1>
          </div>
        </div>

        {/* Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <h2 className="text-white text-3xl font-bold mb-2">Reset Password</h2>

          <p className="text-slate-400 mb-8">
            Create a new secure password for your account.
          </p>

          {/* New Password */}
          <div className="mb-5">
            <label className="block text-slate-300 text-sm mb-2">
              New Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 pr-20 focus:outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-slate-300 text-sm mb-2">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 pr-20 focus:outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-xl text-sm mb-4">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="bg-green-500/10 border border-green-500 text-green-400 p-3 rounded-xl text-sm mb-4">
              {success}
            </div>
          )}

          {/* Button */}
          <button
            onClick={handlePasswordReset}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white font-semibold py-3 rounded-xl transition-all"
          >
            {loading ? "Updating Password..." : "Update Password"}
          </button>

          {/* Back */}
          <button
            onClick={() => navigate("/login")}
            className="w-full mt-4 text-slate-400 hover:text-white transition-colors"
          >
            Back to Login
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full mt-2 text-slate-500 hover:text-slate-300 text-sm transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
