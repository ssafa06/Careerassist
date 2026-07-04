import { useEffect, useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import { supabase } from "../lib/supabase";
import UsersTable from "../components/admin/UsersTable";
import AssessmentsTable from "../components/admin/AssessmentsTable";
import ReportsTable from "../components/admin/ReportsTable";
import PaymentsTab from "../components/admin/PaymentsTable";
import ReferralsTable from "../components/admin/ReferralsTable";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [users, setUsers] = useState<any[]>([]);
  const [assessments, setAssessments] = useState<any[]>([]);
  const [reports, setReports] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [referrals, setReferrals] = useState<any[]>([]);

  const [stats, setStats] = useState({
    users: 0,
    assessments: 0,
    reports: 0,
    revenue: 0,
    referrals: 0,
  });

  useEffect(() => {
    fetchStats();
    fetchAllData();
  }, []);

  const fetchStats = async () => {
    const { count: usersCount } = await supabase
      .from("profiles")
      .select("*", { count: "exact", head: true });

    const { count: assessmentsCount } = await supabase
      .from("assessments")
      .select("*", { count: "exact", head: true });

    const { count: reportsCount } = await supabase
      .from("reports")
      .select("*", { count: "exact", head: true });

    const { count: referralsCount } = await supabase
      .from("referrals")
      .select("*", { count: "exact", head: true });

    const { data: paymentsData } = await supabase
      .from("subscriptions")
      .select("amount");

    const revenue =
      paymentsData?.reduce(
        (sum, p) => sum + Number(p.amount || 0),
        0
      ) || 0;

    setStats({
      users: usersCount || 0,
      assessments: assessmentsCount || 0,
      reports: reportsCount || 0,
      referrals: referralsCount || 0,
      revenue,
    });
  };

  const fetchAllData = async () => {
    const { data: usersData } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });
    if (usersData) setUsers(usersData);

    const { data: assessmentsData } = await supabase
      .from("assessments")
      .select("*")
      .order("created_at", { ascending: false });
    if (assessmentsData) setAssessments(assessmentsData);

    const { data: reportsData } = await supabase
      .from("reports")
      .select("*")
      .order("created_at", { ascending: false });
    if (reportsData) setReports(reportsData);

    const { data: paymentsData } = await supabase
      .from("subscriptions")
      .select("*")
      .order("created_at", { ascending: false });
    if (paymentsData) setPayments(paymentsData);

    const { data: referralsData } = await supabase
      .from("referrals")
      .select("*")
      .order("created_at", { ascending: false });
    if (referralsData) setReferrals(referralsData);
  };

  return (
    <div className="flex bg-slate-50 min-h-screen">

      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1">

        <AdminHeader />

        <div className="p-8">

          {/* Stats Row */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 mb-8">

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p>Total Users</p>
              <h2 className="text-4xl font-bold mt-3">
                {stats.users}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p>Assessments</p>
              <h2 className="text-4xl font-bold mt-3">
                {stats.assessments}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p>Reports</p>
              <h2 className="text-4xl font-bold mt-3">
                {stats.reports}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p>Revenue</p>
              <h2 className="text-4xl font-bold mt-3">
                ₹{stats.revenue}
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <p>Referrals</p>
              <h2 className="text-4xl font-bold mt-3">
                {stats.referrals}
              </h2>
            </div>

          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">

        {activeTab === "Overview" && (
  <div className="space-y-8">

    {/* PLATFORM HEALTH */}

    <div>

      <h2 className="text-2xl font-bold mb-6">
        Platform Health
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-3xl p-6">
          <p className="opacity-90">
            Total Users
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {users.length}
          </h1>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-3xl p-6">
          <p className="opacity-90">
            Paid Users
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {payments.length}
          </h1>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-3xl p-6">
          <p className="opacity-90">
            Assessments
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {assessments.length}
          </h1>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-3xl p-6">
          <p className="opacity-90">
            Reports
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {reports.length}
          </h1>
        </div>

      </div>

    </div>

    {/* STUDENT DISTRIBUTION */}

    <div className="bg-white rounded-3xl p-8 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Student Distribution
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="border rounded-2xl p-6">

          <p className="text-slate-500">
            School Students
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {
              assessments.filter(
                (a) =>
                  a.assessment_data
                    ?.studentType ===
                  "School Student"
              ).length
            }
          </h2>

        </div>

        <div className="border rounded-2xl p-6">

          <p className="text-slate-500">
            College Students
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {
              assessments.filter(
                (a) =>
                  a.assessment_data
                    ?.studentType ===
                  "College Student"
              ).length
            }
          </h2>

        </div>

        <div className="border rounded-2xl p-6">

          <p className="text-slate-500">
            Graduates
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {
              assessments.filter(
                (a) =>
                  a.assessment_data
                    ?.studentType ===
                  "Graduate"
              ).length
            }
          </h2>

        </div>

      </div>

    </div>

    {/* CAREER INTERESTS */}

    <div className="bg-white rounded-3xl p-8 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Career Interest Analytics
      </h2>

      <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">

        {[
          "Technology",
          "Business",
          "Medicine",
          "Government",
          "Arts",
        ].map((interest) => (

          <div
            key={interest}
            className="border rounded-2xl p-5"
          >

            <p className="text-slate-500">
              {interest}
            </p>

            <h2 className="text-3xl font-bold mt-3">
              {
                assessments.filter(
                  (a) =>
                    a.assessment_data
                      ?.learningInterest ===
                    interest
                ).length
              }
            </h2>

          </div>

        ))}

      </div>

    </div>

    {/* REVENUE */}

    <div className="bg-white rounded-3xl p-8 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Revenue Analytics
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="border rounded-2xl p-6">
          <p>Total Revenue</p>

          <h2 className="text-3xl font-bold mt-2">
            ₹
            {payments.reduce(
              (sum, p) =>
                sum +
                Number(p.amount || 0),
              0
            )}
          </h2>
        </div>

        <div className="border rounded-2xl p-6">
          <p>Transactions</p>

          <h2 className="text-3xl font-bold mt-2">
            {payments.length}
          </h2>
        </div>

        <div className="border rounded-2xl p-6">
          <p>Reports Generated</p>

          <h2 className="text-3xl font-bold mt-2">
            {reports.length}
          </h2>
        </div>

        <div className="border rounded-2xl p-6">
          <p>Avg Revenue/User</p>

          <h2 className="text-3xl font-bold mt-2">
            ₹
            {users.length
              ? Math.round(
                  payments.reduce(
                    (sum, p) =>
                      sum +
                      Number(
                        p.amount || 0
                      ),
                    0
                  ) / users.length
                )
              : 0}
          </h2>
        </div>

      </div>

    </div>

    {/* RECENT ACTIVITY */}

    <div className="bg-white rounded-3xl p-8 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {assessments
          .slice(0, 5)
          .map((item) => (

            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >

              <div>

                <p className="font-medium">
                  Assessment Submitted
                </p>

                <p className="text-sm text-slate-500">
                  User:
                  {" "}
                  {item.user_id}
                </p>

              </div>

              <p className="text-sm text-slate-400">
                {new Date(
                  item.created_at
                ).toLocaleDateString()}
              </p>

            </div>

          ))}

      </div>

    </div>

  </div>
)}
            {activeTab === "Users" && (
              <UsersTable users={users} />
            )}

            {activeTab === "Assessments" && (
              <AssessmentsTable assessments={assessments} />
            )}

            {activeTab === "Reports" && (
              <ReportsTable reports={reports} />
            )}

            {activeTab === "Payments" && (
              <PaymentsTab payments={payments} />
            )}

            {activeTab === "Referrals" && (
              <ReferralsTable referrals={referrals} />
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;