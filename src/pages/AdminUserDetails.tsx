import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

const AdminUserDetails = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState<any>(null);
  const [assessments, setAssessments] = useState<any[]>([]);
  const [reports, setReports] = useState<any[]>([]);
  const [referrals, setReferrals] = useState<any[]>([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    if (!id) return;

    const { data: profileData } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();

    setProfile(profileData);

    const { data: assessmentData } = await supabase
      .from("assessments")
      .select("*")
      .eq("user_id", id);

    setAssessments(assessmentData || []);

    const { data: reportData } = await supabase
      .from("reports")
      .select("*")
      .eq("user_id", id);

    setReports(reportData || []);

    const { data: referralData } = await supabase
      .from("referrals")
      .select("*")
      .eq("user_id", id);

    setReferrals(referralData || []);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">

      <h1 className="text-4xl font-bold mb-8">
        User Details
      </h1>

      <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Profile
        </h2>

        <p><b>Name:</b> {profile?.full_name}</p>
        <p><b>Email:</b> {profile?.email}</p>
        <p><b>Plan:</b> {profile?.subscription_plan}</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold">
            Assessments
          </h3>

          <h1 className="text-4xl font-bold mt-3">
            {assessments.length}
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold">
            Reports
          </h3>

          <h1 className="text-4xl font-bold mt-3">
            {reports.length}
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold">
            Referrals
          </h3>

          <h1 className="text-4xl font-bold mt-3">
            {referrals.length}
          </h1>
        </div>

      </div>
    </div>
  );
};

export default AdminUserDetails;