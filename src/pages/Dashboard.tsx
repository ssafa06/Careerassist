import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.png";

// ─── Types ────────────────────────────────────────────────────────────────────
type Report = {
  id: string;
  report_id: string;
  created_at: string;
  overall_score: number;
  confidence_score: number;
  assessment_id: string;
  report_data: any;
  career_matches: any[];
};

// ─── Dashboard Component ──────────────────────────────────────────────────────
const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [activeTab, setActiveTab] = useState<
    "overview" | "reports" | "career" | "financial"
  >("overview");

  useEffect(() => {
    const init = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }
      setUser(user);

      // Verify assessment completion status
      const { data: assessment } = await supabase
        .from("assessments")
        .select("id,status")
        .eq("user_id", user.id)
        .eq("status", "completed")
        .maybeSingle();

      if (!assessment) {
        navigate("/assessment");
        return;
      }
      await fetchReports(user.id);
      setLoading(false);
    };
    init();
  }, []);

  const fetchReports = async (userId: string) => {
    const { data } = await supabase
      .from("reports")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    if (data) {
      const uniqueReports = Array.from(
  new Map(
    data.map((r: any) => [r.assessment_id, r])
  ).values()
);

setReports(uniqueReports as Report[]);
   if (uniqueReports.length > 0)
  setSelectedReport(uniqueReports[0] as Report);    }
  };

  if (loading)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#f1f5f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "32px",
              marginBottom: "12px",
              animation: "spin 1s linear infinite",
            }}
          >
            🔄
          </div>
          <p style={{ color: "#64748b" }}>Loading your dashboard...</p>
        </div>
      </div>
    );

  const latestReport = selectedReport || reports[0];
 
  const topCareer = latestReport?.report_data?.topCareer || "Data Scientist";
  const careerFit = latestReport?.overall_score || 85;
  const confidence = latestReport?.confidence_score || 82;
  const topRecs = latestReport?.report_data?.recommendations?.slice(0, 3) || [];

  // ── Dashboard Main (Paid Access) ──────────────────────────────────────────
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        fontFamily: "'Inter','Segoe UI',sans-serif",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: "220px",
          background: "#1e3a8a",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
        }}
      >
       <div
  style={{
    padding: "20px 16px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  }}
>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img src={logo} alt="" style={{ width: "24px", height: "24px" }} />
    <span style={{ color: "white", fontWeight: 700, fontSize: "14px" }}>
      CareerNavigator
    </span>
  </div>
  <div style={{ color: "#93c5fd", fontSize: "10px", marginTop: "2px" }}>
    Dashboard
  </div>
</div>

        <nav style={{ flex: 1, padding: "16px 12px" }}>
          {[
            { id: "overview", icon: "🏠", label: "Overview" },
            { id: "reports", icon: "📋", label: "My Reports" },
            { id: "career", icon: "🎯", label: "Career Analysis" },
            { id: "financial", icon: "💰", label: "Financial Plan" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                marginBottom: "4px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                background:
                  activeTab === item.id
                    ? "rgba(255,255,255,0.15)"
                    : "transparent",
                color: activeTab === item.id ? "white" : "#93c5fd",
                fontSize: "13px",
                fontWeight: activeTab === item.id ? 700 : 400,
              }}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>

        <div
          style={{
            padding: "16px 12px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <button
            onClick={() => navigate("/report")}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.1)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            View Latest Report
          </button>
          <button
            onClick={() => navigate("/assessment")}
            style={{
              width: "100%",
              background: "transparent",
              color: "#93c5fd",
              border: "none",
              marginTop: "6px",
              cursor: "pointer",
              fontSize: "12px",
            }}
          >
            + New Assessment
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
  style={{
    marginLeft: "220px",
    padding: "24px",
    position: "relative",
  }}
>
    {/* Header */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  }}
>
  <div>
    <h1 style={{ fontSize: "24px", fontWeight: 800, color: "#1e293b", margin: 0 }}>
      Welcome back,{" "}
      {user?.user_metadata?.full_name?.split(" ")[0] || "Student"} 👋
    </h1>
    <p style={{ color: "#64748b", marginTop: "4px", fontSize: "13px" }}>
      Here's your career intelligence dashboard
    </p>
  </div>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
    <button
      onClick={() => navigate("/report")}
      style={{
        background: "linear-gradient(135deg,#2563eb,#7c3aed)",
        color: "white",
        border: "none",
        borderRadius: "12px",
        padding: "12px 28px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 700,
        boxShadow: "0 4px 12px rgba(37,99,235,0.3)",
      }}
    >
      📄 View Latest Report
    </button>
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <span style={{ background: "#dcfce7", color: "#166534", borderRadius: "100px", padding: "4px 12px", fontSize: "11px", fontWeight: 700 }}>
        ✓ Dashboard Access
      </span>
      <span style={{ fontSize: "12px", color: "#64748b" }}>
        {reports.length} Report{reports.length !== 1 ? "s" : ""} saved
      </span>
    </div>
  </div>
</div>
        {activeTab === "overview" && (
          <>
            {/* KPI Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "14px",
                marginBottom: "20px",
              }}
            >
              {[
                {
                  label: "Career Fit Score",
                  value: `${careerFit}%`,
                  sub: "Latest assessment",
                  color: "#2563eb",
                  bg: "#eff6ff",
                  icon: "🎯",
                },
                {
                  label: "Career Confidence",
                  value: `${confidence}%`,
                  sub: "Based on skills",
                  color: "#7c3aed",
                  bg: "#f5f3ff",
                  icon: "💡",
                },
                {
                  label: "Reports Generated",
                  value: String(reports.length),
                  sub: "Total reports",
                  color: "#059669",
                  bg: "#f0fdf4",
                  icon: "📋",
                },
                {
                  label: "Top Career Match",
                  value: topCareer.split(" ").slice(0, 2).join(" "),
                  sub: "Best fit role",
                  color: "#0891b2",
                  bg: "#f0f9ff",
                  icon: "🚀",
                },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    padding: "16px",
                    border: "1px solid #e2e8f0",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontSize: "11px", color: "#64748b" }}>
                      {kpi.label}
                    </span>
                    <span style={{ fontSize: "18px" }}>{kpi.icon}</span>
                  </div>
                  <div
                    style={{
                      fontSize: "26px",
                      fontWeight: 800,
                      color: kpi.color,
                      marginBottom: "4px",
                    }}
                  >
                    {kpi.value}
                  </div>
                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>
                    {kpi.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Top Careers + Recent Reports */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 300px",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              {/* Top Career Matches */}
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "16px",
                  }}
                >
                  Top Career Matches
                </h3>
                {topRecs.map((rec: any, i: number) => (
                  <div
                    key={rec.role}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background:
                          i === 0 ? "#eff6ff" : i === 1 ? "#f5f3ff" : "#f0fdf4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                      }}
                    >
                      {["💻", "🤖", "🧠", "📈", "🩺"][i] || "💼"}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1e293b",
                          }}
                        >
                          {rec.role}
                        </span>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: i === 0 ? "#2563eb" : "#64748b",
                          }}
                        >
                          {rec.score}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: "6px",
                          background: "#f1f5f9",
                          borderRadius: "4px",
                        }}
                      >
                        <div
                          style={{
                            height: "6px",
                            borderRadius: "4px",
                            width: `${rec.score}%`,
                            background:
                              i === 0
                                ? "linear-gradient(90deg,#2563eb,#7c3aed)"
                                : i === 1
                                  ? "#7c3aed"
                                  : "#059669",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#94a3b8",
                          marginTop: "2px",
                        }}
                      >
                        {rec.degree}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Reports */}
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "16px",
                  }}
                >
                  Assessment History
                </h3>
                {reports.length === 0 ? (
                  <div
                    style={{
                      textAlign: "center",
                      color: "#94a3b8",
                      fontSize: "13px",
                      padding: "24px 0",
                    }}
                  >
                    No reports yet.
                    <br />
                    Complete an assessment to get started.
                  </div>
                ) : (
                  reports.slice(0, 5).map((rep) => (
                    <div
                      key={rep.id}
                      onClick={() => setSelectedReport(rep)}
                      style={{
                        cursor: "pointer",
                        padding: "10px",
                        borderRadius: "10px",
                        border: "1px solid #e2e8f0",
                        marginBottom: "8px",
                        background:
                          selectedReport?.id === rep.id ? "#eff6ff" : "white",
                        transition: "all 0.15s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: "12px",
                              fontWeight: 600,
                              color: "#1e293b",
                            }}
                          >
                            {rep.report_data?.topCareer || "Career Report"}
                          </div>
                          <div
                            style={{
                              fontSize: "10px",
                              color: "#94a3b8",
                              marginTop: "2px",
                            }}
                          >
                            {rep.report_id} ·{" "}
                            {new Date(rep.created_at).toLocaleDateString(
                              "en-IN",
                            )}
                          </div>
                        </div>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "#2563eb",
                          }}
                        >
                          {rep.overall_score}%
                        </span>
                      </div>
                    </div>
                  ))
                )}
              
              </div>
            </div>

            {/* SWOT Preview */}
            {latestReport?.report_data?.swot && (
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "16px",
                  }}
                >
                  SWOT Analysis – Latest Report
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: "12px",
                  }}
                >
                  {[
                    {
                      title: "Strengths",
                      items: latestReport.report_data.swot.strengths,
                      bg: "#dcfce7",
                      tc: "#166534",
                      ic: "#16a34a",
                    },
                    {
                      title: "Weaknesses",
                      items: latestReport.report_data.swot.weaknesses,
                      bg: "#fee2e2",
                      tc: "#991b1b",
                      ic: "#dc2626",
                    },
                    {
                      title: "Opportunities",
                      items: latestReport.report_data.swot.opportunities,
                      bg: "#dbeafe",
                      tc: "#1e40af",
                      ic: "#2563eb",
                    },
                    {
                      title: "Threats",
                      items: latestReport.report_data.swot.threats,
                      bg: "#fef3c7",
                      tc: "#92400e",
                      ic: "#d97706",
                    },
                  ].map((q) => (
                    <div
                      key={q.title}
                      style={{
                        background: q.bg,
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: q.tc,
                          marginBottom: "8px",
                        }}
                      >
                        {q.title}
                      </div>
                      {(q.items || []).slice(0, 3).map((item: string) => (
                        <div
                          key={item}
                          style={{
                            fontSize: "11px",
                            color: "#374151",
                            marginBottom: "4px",
                          }}
                        >
                          • {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === "reports" && (
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              border: "1px solid #e2e8f0",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "20px",
              }}
            >
              All Assessment Reports
            </h3>
            {reports.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "48px",
                  color: "#94a3b8",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>📋</div>
                <div style={{ fontWeight: 600, marginBottom: "8px" }}>
                  No reports yet
                </div>
                <button
                  onClick={() => navigate("/assessment")}
                  style={{
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  Take Assessment Now
                </button>
              </div>
            ) : (
              reports.map((rep) => (
                <div
                  key={rep.id}
                  style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "16px",
                    marginBottom: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "#eff6ff",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    📊
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#1e293b",
                        marginBottom: "2px",
                      }}
                    >
                      {rep.report_data?.topCareer || "Career Report"}
                    </div>
                    <div style={{ fontSize: "11px", color: "#94a3b8" }}>
                      Report ID: {rep.report_id} ·{" "}
                      {new Date(rep.created_at).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: 800,
                        color: "#2563eb",
                      }}
                    >
                      {rep.overall_score}%
                    </div>
                    <div style={{ fontSize: "10px", color: "#94a3b8" }}>
                      Career Fit
                    </div>
                  </div>
                  
                  <button
                  onClick={() => {
  console.log("REPORT CLICKED", rep);

  setSelectedReport(rep);

  localStorage.setItem(
    "selectedReport",
    JSON.stringify(rep)
  );

  navigate("/report");
}}
                    style={{
                      background: "#2563eb",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      cursor: "pointer",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    View / Download
                  </button>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "career" && latestReport?.report_data && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1e293b",
                  marginBottom: "16px",
                }}
              >
                Career Roadmap
              </h3>
              {(latestReport.report_data.roadmap || []).map(
                (step: any, i: number) => (
                  <div
                    key={step.title}
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: i === 0 ? "#2563eb" : "#e2e8f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          flexShrink: 0,
                        }}
                      >
                        {step.icon}
                      </div>
                      {i <
                        (latestReport.report_data.roadmap || []).length - 1 && (
                        <div
                          style={{
                            width: "2px",
                            flex: 1,
                            background: "#e2e8f0",
                            margin: "4px 0",
                          }}
                        />
                      )}
                    </div>
                    <div style={{ paddingBottom: "8px" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#1e293b",
                        }}
                      >
                        {step.title}
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>
                        {step.sub}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid #e2e8f0",
              }}
            >
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#1e293b",
                  marginBottom: "16px",
                }}
              >
                Recommended Certifications
              </h3>
              {(latestReport.report_data.certs || []).map((cert: any) => (
                <div
                  key={cert.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px",
                    borderRadius: "8px",
                    background: "#f8fafc",
                    marginBottom: "6px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#1e293b",
                      }}
                    >
                      {cert.name}
                    </div>
                    <div style={{ fontSize: "10px", color: "#94a3b8" }}>
                      {cert.platform}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "2px 8px",
                      borderRadius: "6px",
                      background:
                        cert.priority === "High" ? "#dbeafe" : "#f5f3ff",
                      color: cert.priority === "High" ? "#1d4ed8" : "#7c3aed",
                    }}
                  >
                    {cert.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "financial" && latestReport?.report_data?.financial && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "16px",
            }}
          >
            {[
              {
                title: "Financial Feasibility",
                value: `${latestReport.report_data.financial.feasibility}%`,
                sub: "Based on family income",
                color: "#2563eb",
              },
              {
                title: "Scholarship Eligibility",
                value: latestReport.report_data.financial.schElig,
                sub: "Government & private schemes",
                color: "#059669",
              },
              {
                title: "Estimated Education Cost",
                value: latestReport.report_data.financial.costRange,
                sub: "Depending on institution",
                color: "#7c3aed",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "20px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: item.color,
                    marginBottom: "4px",
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: "11px", color: "#94a3b8" }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
