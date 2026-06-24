import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

interface ProfileData {
  full_name: string;
  email: string;
  avatar_url: string;
  subscription_plan: string;
  created_at: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      setProfile(data);
      setFullName(data.full_name || "");
      setAvatarUrl(data.avatar_url || "");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          avatar_url: avatarUrl,
          updated_at: new Date(),
        })
        .eq("id", user.id);

      if (error) throw error;

      alert("Profile updated successfully");
      fetchProfile();
    } catch (error) {
      console.error(error);
      alert("Failed to update profile");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-600">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-10 space-y-10">
          {/* HERO */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-lg">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-blue-700 text-5xl font-bold shadow-xl ring-4 ring-white/30">
                {profile?.avatar_url ? (
                  <img
                    src={profile.avatar_url}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  profile?.full_name?.charAt(0).toUpperCase()
                )}
              </div>

              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  {profile?.full_name}
                </h1>
                <p className="text-blue-100 mt-2">{profile?.email}</p>
                <div className="mt-5 inline-flex bg-white/20 px-5 py-2 rounded-xl text-sm font-medium">
                  Plan: {profile?.subscription_plan || "Free"}
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow hover:shadow-md transition">
              <h3 className="text-slate-500 text-sm font-medium">
                Subscription Plan
              </h3>
              <h2 className="text-3xl font-bold mt-3 text-slate-800">
                {profile?.subscription_plan || "Free"}
              </h2>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow hover:shadow-md transition">
              <h3 className="text-slate-500 text-sm font-medium">
                Account Created
              </h3>
              <h2 className="text-xl font-semibold mt-3 text-slate-800">
                {new Date(profile?.created_at || "").toLocaleDateString()}
              </h2>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow hover:shadow-md transition">
              <h3 className="text-slate-500 text-sm font-medium">
                Reports Saved
              </h3>
              <h2 className="text-3xl font-bold mt-3 text-slate-800">--</h2>
            </div>
          </div>

          {/* EDIT PROFILE */}
          <div className="bg-white rounded-3xl p-10 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">
              Edit Profile
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-600">
                  Full Name
                </label>
                <input
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-600">
                  Avatar URL
                </label>
                <input
                  className="w-full border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={avatarUrl}
                  onChange={(e) => setAvatarUrl(e.target.value)}
                />
              </div>
            </div>

            <button
              onClick={updateProfile}
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Update Profile
            </button>
          </div>

          {/* SECURITY */}
          <div className="bg-white rounded-3xl p-10 shadow hover:shadow-md transition">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Security</h2>
            <button
              onClick={() => (window.location.href = "/forgot-password")}
              className="border px-6 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
