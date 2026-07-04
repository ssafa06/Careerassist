import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import banner from "../assets/banner.jpeg";
import { supabase } from "../lib/supabase";
import careerPerson from "../assets/career-person.jpeg";

// ─── Supabase import (adjust path to match your project) ───────────────────
// import { supabase } from "../lib/supabaseClient";

const Landing = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Part 7 – page title
useEffect(() => {
  document.title = "CareerAssist | AI Career Guidance Platform";

  checkUser();
}, []);
const checkUser = async () => {
  // User check logic (unused in current landing design)
};
 const startAssessment = async () => {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    // New User
    if (!user) {
      navigate("/register");
      return;
    }

    // Existing User

    const { data: assessment } = await supabase
      .from("assessments")
      .select("id,status")
      .eq("user_id", user.id)
      .eq("status", "completed")
      .maybeSingle();

    // Assessment not completed

    if (!assessment) {
      navigate("/assessment");
      return;
    }

    // Completed

    navigate("/dashboard");

  } catch (err) {
    console.error(err);
  }
};

  // ── data ──────────────────────────────────────────────────────────────────

  const careerDomains = [
    { name: "Technology", icon: "💻", careers: ["Software Engineer", "AI Engineer", "Data Scientist", "Cyber Security"], grad: "from-blue-600 to-blue-800" },
    { name: "Business", icon: "📈", careers: ["Business Analyst", "Marketing Manager", "Product Manager", "Entrepreneur"], grad: "from-indigo-600 to-indigo-800" },
    { name: "Medicine", icon: "🩺", careers: ["Doctor", "Pharmacist", "Physiotherapist", "Nurse"], grad: "from-emerald-600 to-emerald-800" },
    { name: "Government", icon: "🏛️", careers: ["IAS Officer", "Bank PO", "Defence Officer", "Govt. Officer"], grad: "from-slate-700 to-slate-900" },
    { name: "Creative", icon: "🎨", careers: ["UI/UX Designer", "Graphic Designer", "Video Editor", "Photographer"], grad: "from-violet-600 to-violet-800" },
  ];

  const testimonials = [
    { name: "Arun Kumar", role: "Class 12 • Chennai", text: "CareerAssist completely changed my career direction. I initially planned Mechanical Engineering, but after my assessment I discovered Data Science suited me much better." },
    { name: "Priya Sharma", role: "B.Tech Student", text: "The report was extremely detailed. It explained my strengths, weaknesses, career options and scholarships in one place." },
    { name: "Rahul N", role: "Parent", text: "As a parent I finally understood what career best suits my child. The report answered questions that career counsellors couldn't." },
  ];

  const faqs = [
    { q: "Who can use CareerAssist?", a: "Students from Grade 6 to Graduates can use CareerAssist." },
    { q: "Is the assessment free?", a: "Yes. Taking the assessment is completely free. Dashboard access requires a one-time payment." },
    { q: "How long does the assessment take?", a: "Usually between 15 and 25 minutes." },
    { q: "Can parents use this report?", a: "Yes. The report includes a dedicated Parent Insights section." },
    { q: "Does AI generate the recommendations?", a: "Yes. Recommendations are generated using academics, personality, aptitude, interests and goals." },
    { q: "Can I download the report?", a: "Yes. After dashboard access, you can download the report unlimited times." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ══════════════════════════════════════════════════════════════════
          NAVBAR  (Part 1)
      ══════════════════════════════════════════════════════════════════ */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="h-20 flex items-center justify-between">

            {/* Logo */}
            <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
              <img src={logo} loading="lazy" className="w-11 h-11 object-contain" alt="CareerAssist" />
              <div>
                <h2 className="font-black text-2xl tracking-tight">CareerAssist</h2>
                <p className="text-xs text-slate-500">AI Career Guidance</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                ["#features", "Features"],
                ["#careers", "Career Domains"],
                ["#compare", "Why Us"],
                ["#how", "How It Works"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a key={label} href={href} className="text-slate-600 hover:text-blue-600 font-semibold transition">
                  {label}
                </a>
              ))}
            </div>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button onClick={() => navigate("/login")} className="px-5 py-2 rounded-xl border border-slate-300 hover:border-blue-500 font-semibold transition-all duration-300 active:scale-95">
                Sign In
              </button>
              <button onClick={() => navigate("/register")} className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-lg hover:scale-105 transition-all duration-300 active:scale-95">
                Get Started
              </button>
            </div>

            {/* Mobile toggle */}
            <button className="lg:hidden p-2 text-slate-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100">
            <div className="p-6 space-y-4">
              {[
                ["#features", "Features"],
                ["#careers", "Career Domains"],
                ["#compare", "Why Us"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <a key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-blue-600 py-2 border-b border-slate-50">
                  {label}
                </a>
              ))}
              <div className="pt-3 flex gap-3">
                <button onClick={() => navigate("/login")} className="flex-1 text-sm font-medium border border-slate-200 rounded-xl py-2.5">Sign In</button>
                <button onClick={() => navigate("/register")} className="flex-1 text-sm font-bold bg-blue-600 text-white rounded-xl py-2.5">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ══════════════════════════════════════════════════════════════════
          HERO  (Part 1 + Part 2)
      ══════════════════════════════════════════════════════════════════ */}
      <section
  className="pt-24 pb-0 px-5 md:px-8 lg:px-6 relative overflow-hidden"
  style={{
    background:
      "linear-gradient(160deg, #dbeafe 0%, #f8faff 40%, #ede9fe 100%)",
  }}
>
  {/* Dot-grid background */}
  <div
    className="absolute inset-0 opacity-5 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)",
      backgroundSize: "32px 32px",
    }}
  />

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Two-column hero */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left side – text + CTA */}
      <div className="text-left max-w-2xl mx-auto lg:mx-0">
        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
          The AI that finds <br />
          <span
            style={{
              backgroundImage:
                "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            your right career
          </span>
        </h1>

        <p className="mt-6 text-lg lg:text-xl leading-relaxed text-slate-600">
          Answer 18 questions to receive a personalized career report with
          detailed analysis, deep insights, and a step‑by‑step roadmap.
        </p>

        <div className="mt-10">
          <button
            onClick={startAssessment}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
          >
            Start Free Assessment →
          </button>
          <p className="mt-3 text-sm text-slate-500">
            Takes less than 5 minutes
          </p>
        </div>

        {/* Feature highlights */}
        <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-semibold mt-8">
          {[
            "Personalized career report",
            "PDF report included",
            "Career roadmap",
            "AI-powered",
          ].map((t) => (
            <span
              key={t}
              className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm"
            >
              <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-black">
                ✓
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Right side – career match cards */}
      <div className="relative flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md">
          <img
  src={careerPerson}
  alt="Career person"
  className="rounded-xl shadow-lg w-full object-contain"
/>
          {/* Floating cards */}
         
          </div>
          </div>
          </div>


          {/* Part 2 – Grade Cards */}
          <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-5 mt-6 mb-0">
            {["Grade 6–8", "Grade 9–10", "Grade 11–12", "College", "Graduate"].map((grade) => (
              <div key={grade} onClick={startAssessment} className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer">
                <h3 className="font-bold text-xl">{grade}</h3>
                <p className="text-slate-500 mt-3 text-sm">Personalized assessment</p>
              </div>
            ))}
          </div>

          {/* Product mockup */}
          <div className="max-w-5xl mx-auto mt-10">
            <div className="bg-white rounded-t-3xl shadow-2xl border border-slate-200 border-b-0 overflow-hidden">
              <div className="bg-slate-100 border-b border-slate-200 px-5 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                  <span>🔒</span> careerassist.in/report
                </div>
              </div>
              <div className="bg-blue-600 px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={logo} alt="" className="w-6 h-6 object-contain opacity-90" />
                  <span className="text-white font-bold text-sm">CareerAssist · Career Report</span>
                </div>
                <div className="bg-white/20 border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-lg">↓ Download PDF</div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="text-white font-black text-xl">R</span>
                  </div>
                  <div>
                    <p className="font-black text-slate-900 text-lg">Riya Sharma</p>
                    <p className="text-slate-400 text-sm">11th Grade · PCM · Technology Track · Chennai</p>
                  </div>
                  <div className="ml-auto text-right hidden sm:block">
                    <p className="text-xs text-slate-400 mb-1">Career Confidence Score</p>
                    <p className="text-4xl font-black text-blue-600">91%</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Career Fit", value: "94%", bg: "bg-blue-600", text: "text-white" },
                    { label: "Skills Score", value: "88%", bg: "bg-indigo-50 border border-indigo-100", text: "text-indigo-700" },
                    { label: "Readiness", value: "85%", bg: "bg-violet-50 border border-violet-100", text: "text-violet-700" },
                    { label: "Financial Match", value: "90%", bg: "bg-emerald-50 border border-emerald-100", text: "text-emerald-700" },
                  ].map((k) => (
                    <div key={k.label} className={`${k.bg} rounded-2xl p-4`}>
                      <p className={`text-xs font-bold uppercase tracking-wide mb-1.5 ${k.text} opacity-70`}>{k.label}</p>
                      <p className={`text-3xl font-black ${k.text}`}>{k.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Top Career Matches</p>
                    <div className="space-y-3">
                      {[
                        { role: "Software Engineer", icon: "💻", score: 94, degree: "B.Tech CSE" },
                        { role: "AI Engineer", icon: "🤖", score: 91, degree: "B.Tech AI & ML" },
                        { role: "Data Engineer", icon: "📊", score: 88, degree: "B.Sc Data Science" },
                      ].map((c, i) => (
                        <div key={c.role} className={`flex items-center gap-3 p-3 rounded-xl border ${i === 0 ? "bg-blue-50 border-blue-200" : "bg-slate-50 border-slate-100"}`}>
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0 ${i === 0 ? "bg-blue-600" : "bg-white border border-slate-200"}`}>{c.icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-bold text-slate-800">{c.role}</span>
                              <span className={`text-sm font-black ${i === 0 ? "text-blue-600" : "text-slate-500"}`}>{c.score}%</span>
                            </div>
                            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                              <div className={`h-1.5 rounded-full ${i === 0 ? "bg-blue-600" : "bg-slate-400"}`} style={{ width: `${c.score}%` }} />
                            </div>
                            <p className="text-xs text-slate-400 mt-1">{c.degree}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Domain Scores</p>
                    <div className="space-y-3">
                      {[
                        { domain: "Technology", score: 94, icon: "💻", color: "bg-blue-600" },
                        { domain: "Business", score: 58, icon: "📈", color: "bg-indigo-400" },
                        { domain: "Medicine", score: 22, icon: "🩺", color: "bg-emerald-400" },
                        { domain: "Government", score: 45, icon: "🏛️", color: "bg-slate-400" },
                        { domain: "Creative", score: 38, icon: "🎨", color: "bg-violet-400" },
                      ].map((d) => (
                        <div key={d.domain} className="flex items-center gap-3">
                          <span className="text-base w-6">{d.icon}</span>
                          <span className="text-sm font-semibold text-slate-600 w-24 shrink-0">{d.domain}</span>
                          <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-2.5 rounded-full ${d.color}`} style={{ width: `${d.score}%` }} />
                          </div>
                          <span className="text-xs font-black text-slate-500 w-8 text-right">{d.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PLATFORM STATS  (Part 3 – replaces old dark stats strip)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">Career Intelligence Platform</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mt-6">Built For Every Student</h2>
            <p className="text-slate-600 text-lg leading-8 mt-5 max-w-3xl mx-auto">
              CareerAssist combines Artificial Intelligence, Psychometrics, Aptitude, Academic Performance, Financial Background, and Future Market Trends to generate personalized career roadmaps.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              { title: "10,000+", subtitle: "Students Guided", sub2: "Since 2024", color: "from-blue-500 to-indigo-600", icon: "🎓" },
              { title: "500+", subtitle: "Career Paths", sub2: "Across Industries", color: "from-green-500 to-emerald-600", icon: "🚀" },
              { title: "92%", subtitle: "AI Match Accuracy", sub2: "Across all domains", color: "from-purple-500 to-pink-600", icon: "🤖" },
              { title: "25+", subtitle: "Assessment Layers", sub2: "Deep AI analysis", color: "from-orange-500 to-red-500", icon: "📊" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <div className="p-8">
                  <div className="text-5xl">{item.icon}</div>
                  <h3 className="text-5xl font-black mt-6">{item.title}</h3>
                  <p className="text-slate-700 font-semibold mt-3">{item.subtitle}</p>
                  <p className="text-slate-400 text-sm mt-1">{item.sub2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          BANNER  (Part 2 – replaces old Banner section)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src={banner} loading="lazy" className="rounded-3xl shadow-2xl w-full" alt="CareerAssist Banner" />
            </div>
            <div>
              <div className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-6">Career Intelligence Platform</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                One Assessment.<br />Lifetime Career Direction.
              </h2>
              <p className="mt-8 text-lg leading-8 text-slate-600">
                CareerAssist combines psychology, aptitude, academics, financial background, and AI to provide one of India's most comprehensive career guidance experiences.
              </p>
              <div className="grid grid-cols-2 gap-5 mt-10">
                {[
                  ["25+", "Assessment Layers"],
                  ["500+", "Career Paths"],
                  ["AI", "Career Engine"],
                  ["100%", "Personalized"],
                ].map(([val, label]) => (
                  <div key={label} className="bg-slate-100 rounded-2xl p-5">
                    <h3 className="font-bold text-3xl">{val}</h3>
                    <p className="text-slate-600 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          GRADE CARDS (Part 2 – full version)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-6">🎯 AI Powered Career Assessment</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">Start Your Career Journey</h2>
            <p className="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
              Select your education level to begin a personalized AI-driven career assessment designed specifically for your stage of learning.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {[
              { title: "Grade 6–8", icon: "🎒", desc: "Discover talents early through fun aptitude and personality assessments." },
              { title: "Grade 9–10", icon: "📘", desc: "Choose the right stream and explore future careers." },
              { title: "Grade 11–12", icon: "🎓", desc: "Get stream-specific AI recommendations and college guidance." },
              { title: "College", icon: "🏫", desc: "Find internships, higher studies and career opportunities." },
              { title: "Graduate", icon: "💼", desc: "Career transition, job matching and professional growth roadmap." },
            ].map((item) => (
              <div key={item.title} className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-500 hover:-translate-y-3 cursor-pointer" onClick={startAssessment}>
                <div className="text-5xl">{item.icon}</div>
                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>
                <p className="text-slate-500 mt-4 leading-relaxed">{item.desc}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li>✔ Personalized Questions</li>
                  <li>✔ AI Career Matching</li>
                  <li>✔ Skill Analysis</li>
                  <li>✔ Future Roadmap</li>
                </ul>
                <button onClick={startAssessment} className="mt-8 w-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 rounded-2xl py-4 font-bold transition-all duration-300 active:scale-95 tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  Start Assessment →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CAREER DOMAINS  (Part 3)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="careers" className="py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">AI Career Engine</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mt-6">Explore Career Domains</h2>
            <p className="text-slate-600 text-lg leading-8 mt-5 max-w-3xl mx-auto">
              Our AI evaluates thousands of combinations before recommending careers perfectly suited to your strengths and interests.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {[
              ["💻", "Technology"],
              ["🩺", "Healthcare"],
              ["📈", "Business"],
              ["⚖️", "Law"],
              ["🏛️", "Government"],
              ["🎨", "Design"],
              ["📚", "Education"],
              ["🚀", "Entrepreneurship"],
            ].map(([icon, title]) => (
              <div key={title} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-2xl hover:border-blue-500 hover:-translate-y-3 transition-all duration-500">
                <div className="text-5xl">{icon}</div>
                <h3 className="font-bold text-2xl mt-6">{title}</h3>
                <p className="text-slate-500 mt-4 leading-relaxed">AI-powered recommendations, roadmap, salary insights, future demand and required skills.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TRUSTED SECTION  (Part 3)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-3xl font-bold">Trusted by Students</h3>
              <p className="mt-5 text-blue-100 leading-8">Helping students discover careers through AI-driven assessments and personalized reports.</p>
            </div>
            <div>
              <h3 className="text-5xl font-black">10K+</h3>
              <p className="mt-2 text-blue-100">Assessments Completed</p>
            </div>
            <div>
              <h3 className="text-5xl font-black">95%</h3>
              <p className="mt-2 text-blue-100">Student Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          HOW IT WORKS  (Part 3)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="how" className="py-20 md:py-24 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">How CareerAssist Works</h2>
            <p className="text-slate-600 text-lg leading-8 mt-6 max-w-2xl mx-auto">Complete one assessment and receive a comprehensive AI-powered career report.</p>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              ["1", "Register"],
              ["2", "Complete Assessment"],
              ["3", "AI Analysis"],
              ["4", "Career Roadmap"],
            ].map(([step, title]) => (
              <div key={step} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white mx-auto flex items-center justify-center text-2xl font-bold">{step}</div>
                <h3 className="text-xl font-bold mt-8">{title}</h3>
                <p className="text-slate-500 mt-4 leading-relaxed">Personalized AI-driven guidance at every stage.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          AI FEATURES  (Part 4)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="features" className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">AI Powered Platform</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mt-6">Everything You Need For Career Success</h2>
            <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
              CareerAssist combines Artificial Intelligence, Psychometrics, Aptitude, Academic Intelligence, Financial Insights and Career Market Trends into one platform.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              { icon: "🤖", title: "AI Career Recommendation", desc: "Personalized career suggestions using advanced AI." },
              { icon: "🧠", title: "Psychometric Analysis", desc: "Understand personality, behaviour and interests." },
              { icon: "📈", title: "Skill Gap Analysis", desc: "Know what skills you need for your dream career." },
              { icon: "🎓", title: "College Guidance", desc: "Best colleges and higher education roadmap." },
              { icon: "💰", title: "Scholarship Finder", desc: "Discover government and private scholarships." },
              { icon: "📄", title: "Professional Career Report", desc: "Download a detailed AI generated report." },
            ].map((feature) => (
              <div key={feature.title} className="bg-slate-50 rounded-3xl border border-slate-200 shadow-sm p-8 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                <div className="text-5xl">{feature.icon}</div>
                <h3 className="text-2xl font-bold mt-6">{feature.title}</h3>
                <p className="text-slate-500 mt-4 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          AI ENGINE FLOW  (Part 4)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">How Our AI Works</h2>
            <p className="mt-5 text-slate-600 text-lg leading-8">Our AI analyzes multiple dimensions before recommending careers.</p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            {[
              ["📚", "Academics"],
              ["🧠", "Personality"],
              ["💡", "Skills"],
              ["🎯", "Goals"],
              ["🤖", "AI Career Match"],
            ].map(([icon, title]) => (
              <div key={title} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 text-center">
                <div className="text-5xl">{icon}</div>
                <h3 className="font-bold text-xl mt-6">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          STUDENT BENEFITS  (Part 4)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">Why Students Love CareerAssist</h2>
              <p className="text-slate-600 mt-6 text-lg leading-8">A complete career ecosystem instead of just another aptitude test.</p>
              <div className="space-y-6 mt-10">
                {[
                  "Personalized AI Career Roadmap",
                  "Top Career Recommendations",
                  "College Guidance",
                  "Scholarship Suggestions",
                  "Skill Development Plan",
                  "Professional Career Report",
                  "Future Salary Insights",
                  "Market Demand Analysis",
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0">✔</div>
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[40px] p-12 text-white">
              <h3 className="text-4xl font-black">One Assessment.<br />Lifetime Guidance.</h3>
              <p className="mt-6 text-blue-100 leading-8">Get continuous recommendations as your career grows.</p>
              <button onClick={startAssessment} className="mt-10 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl hover:-translate-y-1 tracking-wide">
                Start Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PARENTS & SCHOOLS  (Part 4)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">Built For Students, Parents &amp; Schools</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Students", icon: "🎓", desc: "Know your strengths and build the right career." },
              { title: "Parents", icon: "👨‍👩‍👧", desc: "Make informed educational decisions with AI insights." },
              { title: "Schools", icon: "🏫", desc: "Provide career guidance to every student at scale." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-10 text-center">
                <div className="text-6xl">{item.icon}</div>
                <h3 className="text-3xl font-bold mt-8">{item.title}</h3>
                <p className="mt-6 text-slate-500 leading-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          WHY CAREERASSIST – COMPARISON  (Part 5)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="compare" className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-semibold">Why Choose CareerAssist</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mt-6">CareerAssist vs Other Platforms</h2>
            <p className="text-slate-600 text-lg leading-8 mt-6 max-w-4xl mx-auto">
              Compare India's leading career guidance platforms and discover why CareerAssist delivers the most comprehensive AI-powered career intelligence ecosystem.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-3xl shadow-xl overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left p-6 font-bold">Features</th>
                  <th className="p-6 font-bold">CareerAssist</th>
                  <th className="p-6 font-bold">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["AI Career Recommendation", "✅", "⚠️ Limited"],
                  ["Psychometric Assessment", "✅", "❌"],
                  ["Stream Assessment", "✅", "❌"],
                  ["Scholarship Recommendation", "✅", "❌"],
                  ["College Recommendation", "✅", "⚠️"],
                  ["Financial Analysis", "✅", "❌"],
                  ["Skill Gap Analysis", "✅", "⚠️"],
                  ["Career Roadmap", "✅", "⚠️"],
                  ["Parent Report", "✅", "❌"],
                  ["Professional PDF Report", "✅", "⚠️"],
                  ["Dashboard Access", "✅", "❌"],
                  ["Continuous Career Tracking", "✅", "❌"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b hover:bg-slate-50 transition">
                    <td className="p-6 font-semibold">{row[0]}</td>
                    <td className="text-center p-6 text-green-600 font-bold">{row[1]}</td>
                    <td className="text-center p-6 text-slate-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          AI INTELLIGENCE  (Part 5)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">AI That Understands Students</h2>
              <p className="text-blue-100 text-lg leading-8 mt-8">
                Unlike ordinary aptitude tests, CareerAssist studies every aspect of a student before making recommendations.
              </p>
              <div className="grid grid-cols-2 gap-5 mt-12">
                {["Academics", "Skills", "Behaviour", "Financial Background", "Goals", "Personality", "Interest", "Future Demand"].map((item) => (
                  <div key={item} className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm font-medium">✔ {item}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white rounded-[40px] p-10 text-slate-900">
                <h3 className="text-3xl font-black">Career Intelligence Score</h3>
                {[
                  { label: "AI Compatibility", val: "96%", w: "96%", color: "bg-blue-600" },
                  { label: "Career Readiness", val: "91%", w: "91%", color: "bg-green-600" },
                  { label: "Future Growth", val: "95%", w: "95%", color: "bg-orange-500" },
                ].map((bar) => (
                  <div key={bar.label} className="mt-8">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{bar.label}</span>
                      <span className="font-black">{bar.val}</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full">
                      <div className={`h-3 ${bar.color} rounded-full transition-all`} style={{ width: bar.w }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          EVERYTHING INCLUDED  (Part 5)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">Everything Included</h2>
          </div>
          <div className="grid lg:grid-cols-4 gap-8">
            {[
              ["📄", "Professional Report"],
              ["🎯", "Top Career Matches"],
              ["🏫", "College Suggestions"],
              ["💰", "Scholarships"],
              ["📈", "Growth Forecast"],
              ["🧠", "Skill Analysis"],
              ["🚀", "Roadmap"],
              ["🤖", "AI Insights"],
            ].map(([icon, title]) => (
              <div key={title} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
                <div className="text-5xl">{icon}</div>
                <h3 className="font-bold text-2xl mt-6">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CAREER DOMAINS DARK  (original, kept as supplemental showcase)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28 px-5 md:px-8 lg:px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-900 text-blue-300 text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5 border border-blue-800">Career Domains</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-4">5 domains. 50+ careers.</h2>
            <p className="text-slate-400 text-xl leading-8 max-w-xl mx-auto">Our AI scores you across every major career domain and tells you exactly where you belong.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {careerDomains.map((domain) => (
              <div key={domain.name} className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-slate-600 transition-all overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.grad} opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 bg-gradient-to-br ${domain.grad} rounded-2xl flex items-center justify-center text-xl`}>{domain.icon}</div>
                    <span className="font-black text-white text-lg">{domain.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {domain.careers.map((c) => (
                      <span key={c} className="text-xs text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl font-medium">{c}</span>
                    ))}
                    <span className="text-xs text-blue-400 font-bold px-2 py-1.5">+more →</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-7 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
              <div className="relative z-10">
                <p className="text-blue-100 text-xs font-black uppercase tracking-widest mb-3">Ready to find yours?</p>
                <p className="text-white font-black text-xl mb-5 leading-tight">Take the assessment and see which domain fits you best.</p>
                <button onClick={startAssessment} className="bg-white text-blue-700 font-black px-6 py-3 rounded-2xl text-sm hover:bg-blue-50 transition-all w-fit shadow-lg active:scale-95">Start Free →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-20 md:py-24 lg:py-28 px-5 md:px-8 lg:px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5">Pricing</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-4">Simple, honest pricing</h2>
            <p className="text-slate-400 text-xl leading-8 max-w-lg mx-auto">The report is always free. Pay only if you want to save and track your progress over time.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Free */}
            <div className="bg-slate-900 border-2 border-slate-700 rounded-3xl p-10 hover:border-slate-500 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Free Forever</p>
                  <p className="text-5xl font-black text-white">₹0</p>
                </div>
                <span className="text-xs bg-emerald-900 text-emerald-300 font-black px-3 py-1.5 rounded-full border border-emerald-700 mt-1">No card needed</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Everything you need to understand your career — completely free.</p>
              <ul className="space-y-3 mb-10">
                {["Full 50-question assessment", "AI career recommendations", "Domain scoring (5 domains)", "SWOT analysis report", "Career roadmap", "PDF report (preview)", "Scholarship eligibility check"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 bg-blue-900 text-blue-300 rounded-full flex items-center justify-center text-xs font-black shrink-0 border border-blue-700">✓</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate("/register")} className="w-full border-2 border-slate-600 hover:border-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-2xl transition-all duration-300 active:scale-95 tracking-wide text-sm">
                Get Started Free
              </button>
            </div>
            {/* Pro */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 relative overflow-hidden border-2 border-blue-500">
              <div className="absolute top-5 right-5 bg-white/20 text-white text-xs font-black px-3 py-1.5 rounded-full">⭐ Most Popular</div>
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />
              <div className="relative z-10">
                <div className="mb-6">
                  <p className="text-xs font-black text-blue-100 uppercase tracking-widest mb-2">Dashboard Access</p>
                  <div className="flex items-end gap-2">
                    <p className="text-5xl font-black text-white">₹699</p>
                    <p className="text-blue-200 text-sm mb-2 font-semibold">one-time</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">Permanent access to your dashboard, reports, and all future features.</p>
                <ul className="space-y-3 mb-10">
                  {["Everything in Free", "Dashboard access forever", "Save unlimited reports", "Compare reports across attempts", "Progress tracking over time", "Retake assessment anytime", "Priority support", "All future feature updates"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white">
                      <span className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center text-xs font-black shrink-0">✓</span>{item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate("/register")} className="w-full bg-white text-blue-700 font-bold py-3.5 rounded-2xl transition-all duration-300 hover:bg-blue-50 active:scale-95 text-sm shadow-lg tracking-wide">
                  Get Lifetime Access →
                </button>
                <p className="text-blue-200 text-xs text-center mt-3 font-semibold">One-time · No subscription · No renewal</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center">
            <p className="text-slate-300 text-sm leading-relaxed">
              💡 A career counsellor session costs <strong className="text-white">₹1,500–₹5,000</strong> and gives you one person's opinion.
              CareerAssist gives you AI analysis of 50+ data points — <strong className="text-blue-400">free</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          SUCCESS STORIES  (Part 6)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">Success Stories</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mt-6">Students Love CareerAssist</h2>
            <p className="text-slate-600 mt-6 text-lg leading-8 max-w-3xl mx-auto">
              Thousands of students have already discovered their ideal career using CareerAssist's AI-powered guidance platform.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div key={item.name} className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-slate-600 leading-relaxed">"{item.text}"</p>
                <div className="mt-6 text-yellow-500 text-xl">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FAQ  (Part 6)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 md:py-24 lg:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">Frequently Asked Questions</h2>
            <p className="mt-6 text-slate-600 text-lg leading-8">Everything you need to know before starting.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={item.q} className={`bg-white rounded-3xl border-2 overflow-hidden transition-all ${openFaq === i ? "border-blue-400 shadow-md shadow-blue-50" : "border-slate-100 hover:border-slate-200"}`}>
                <button className="w-full flex items-center justify-between px-8 py-6 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-bold text-xl pr-4">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-black transition-all ${openFaq === i ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                    {openFaq === i ? "−" : "+"}
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 bg-blue-50">
                    <p className="text-slate-600 leading-8">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-500 text-sm">Still have questions?
              <a href="mailto:careerassistcontact@gmail.com" className="text-blue-600 font-black ml-1 hover:text-blue-700">Email us →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          FINAL CTA  (Part 6)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="rounded-[40px] bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-600/50 text-blue-200 px-5 py-2 rounded-full text-xs font-black mb-8">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                Free for All Students
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">Your Future Starts Today</h2>
              <p className="mt-8 text-blue-100 text-xl leading-8 max-w-3xl mx-auto">
                Discover your strengths. Explore the right careers. Receive a professional AI report. Build a roadmap for success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                <button onClick={startAssessment} className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black px-10 py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95 tracking-wide">
                  Start Free Assessment →
                </button>
                <button onClick={() => navigate("/login")} className="border border-white px-10 py-5 rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300 active:scale-95 tracking-wide">
                  Login
                </button>
              </div>
              <p className="text-blue-400 text-xs mt-6 font-semibold">No credit card · PDF report free forever · Results in 10 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TRUST STRIP  (Part 6)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              ["🔒", "Secure Platform"],
              ["🤖", "AI Powered"],
              ["🎓", "Trusted by Students"],
              ["🇮🇳", "Built in India"],
            ].map(([icon, title]) => (
              <div key={title} className="text-white">
                <div className="text-4xl">{icon}</div>
                <p className="mt-4 font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ENTERPRISE FOOTER  (Part 7)
      ══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-slate-950 text-white">

        {/* Top CTA strip */}
        <section className="border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6 py-14">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-blue-400 font-semibold">Ready to build your future?</p>
                <h2 className="text-4xl font-black mt-3">Start your AI Career Journey today.</h2>
                <p className="text-slate-400 mt-4 max-w-2xl leading-8">
                  Complete one assessment and receive a personalized career roadmap, skill analysis, scholarship recommendations and professional report.
                </p>
              </div>
              <button onClick={startAssessment} className="shrink-0 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black px-10 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 active:scale-95 tracking-wide">
                Start Assessment →
              </button>
            </div>
          </div>
        </section>

        {/* Footer links */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-6 py-20">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4">
                <img src={logo} loading="lazy" className="w-14 h-14 object-contain" alt="CareerAssist" />
                <div>
                  <h2 className="text-3xl font-black">CareerAssist</h2>
                  <p className="text-slate-400">AI Powered Career Guidance Platform</p>
                </div>
              </div>
              <p className="mt-8 text-slate-400 leading-8 max-w-md">
                CareerAssist helps students discover the right career using Artificial Intelligence, Psychometric Analysis, Skill Mapping, Career Intelligence and Future Market Trends.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  { color: "bg-green-400", label: "Trusted by Naan Mudhalvan" },
                  { color: "bg-blue-400", label: "AI Powered Recommendation Engine" },
                  { color: "bg-yellow-400", label: "Built for Indian Students" },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${t.color} animate-pulse`} />
                    <span className="text-slate-300">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-bold text-lg mb-6">Platform</h3>
              <div className="space-y-4">
                {["Career Assessment", "Career Report", "Career Domains", "Scholarships", "Colleges", "Dashboard"].map((item) => (
                  <a key={item} href="#" className="block text-slate-400 hover:text-white transition">{item}</a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-lg mb-6">Company</h3>
              <div className="space-y-4">
                {["About Us", "Features", "Testimonials", "FAQ", "Contact", "Privacy Policy"].map((item) => (
                  <a key={item} href="#" className="block text-slate-400 hover:text-white transition">{item}</a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="text-white">careerassistcontact@gmail.com</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Support</p>
                  <p className="text-white">Monday – Saturday</p>
                </div>
                <div>
                  <p className="text-slate-500 text-sm">Platform</p>
                  <p className="text-green-400">● Online</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800 mt-20 pt-10">
            <div className="grid lg:grid-cols-3 gap-10 items-center">
              <div>
                <p className="text-slate-500">© 2026 CareerAssist. All Rights Reserved.</p>
                <p className="text-slate-600 text-xs mt-1">Designed &amp; Developed in India 🇮🇳</p>
              </div>
              <div className="text-center">
                <div className="text-center">
                  <p className="text-slate-500 text-sm">Platform Developed &amp; Maintained By</p>
                  <h2 className="font-black text-2xl text-white mt-2">ZETSPACE LABS PVT LTD</h2>
                  <p className="text-slate-500 mt-2">Technology Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;