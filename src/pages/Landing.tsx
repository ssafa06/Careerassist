import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import banner from "../assets/banner.jpeg";

const Landing = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    { icon: "🤖", title: "AI Career Matching", desc: "Scored across 5 domains — Technology, Business, Medicine, Government, Creative — every career ranked by real fit percentage.", tag: "Core Engine", bg: "bg-blue-600", tagColor: "bg-blue-100 text-blue-700" },
    { icon: "🗺️", title: "Personalized Roadmap", desc: "Step-by-step career path from your current grade to a senior role, tailored to your top match.", tag: "Roadmap", bg: "bg-indigo-600", tagColor: "bg-indigo-100 text-indigo-700" },
    { icon: "⚡", title: "SWOT Analysis", desc: "Strengths, Weaknesses, Opportunities, and Threats generated from your actual answers — not generic templates.", tag: "Self Analysis", bg: "bg-violet-600", tagColor: "bg-violet-100 text-violet-700" },
    { icon: "🎓", title: "Scholarship Guidance", desc: "Based on income, first-graduate status, and goals — we surface every scheme most likely to apply to you.", tag: "Financial Aid", bg: "bg-emerald-600", tagColor: "bg-emerald-100 text-emerald-700" },
    { icon: "📊", title: "Skill Gap Analysis", desc: "See exactly which skills are holding you back and get a prioritized 12-month plan to close those gaps.", tag: "Skill Plan", bg: "bg-orange-500", tagColor: "bg-orange-100 text-orange-700" },
    { icon: "📄", title: "Professional PDF Report", desc: "A complete, print-ready report the kind a paid counsellor would charge ₹2,000 to produce — free.", tag: "Free Download", bg: "bg-pink-600", tagColor: "bg-pink-100 text-pink-700" },
  ];

  const steps = [
    { num: "01", label: "Fill the assessment", desc: "Answer 50 questions across academics, skills, personality, and goals. Takes about 10 minutes.", detail: "Personal details → Academic profile → Skills → Personality → Goals", icon: "📝" },
    { num: "02", label: "AI scores your profile", desc: "Our engine maps every answer to 5 career domains and ranks all career paths by compatibility score.", detail: "Domain scoring → Career matching → SWOT generation → Risk analysis", icon: "🤖" },
    { num: "03", label: "Get your roadmap", desc: "Receive a full PDF report with career matches, degree suggestions, skill plan, and scholarship eligibility.", detail: "Career report → Degree list → 12-month plan → PDF download", icon: "🎯" },
  ];

  const testimonials = [
    { quote: "I had no idea AI Engineering was even a career. CareerAssist matched me at 94% and gave me a clear college and skill roadmap.", name: "Arjun K.", detail: "B.Tech CSE, NIT Trichy · 2024", initial: "A", domain: "Technology", domainColor: "bg-blue-100 text-blue-700" },
    { quote: "The scholarship section alone saved my family from taking a loan. I found three schemes I qualified for that I never knew existed.", name: "Priya M.", detail: "MBBS, JIPMER · 2023", initial: "P", domain: "Medicine", domainColor: "bg-emerald-100 text-emerald-700" },
    { quote: "Every other counsellor gave me generic advice. This report showed me exactly where my skills were lacking and what to fix first.", name: "Rahul S.", detail: "BBA, CHRIST University · 2024", initial: "R", domain: "Business", domainColor: "bg-indigo-100 text-indigo-700" },
  ];

  const faqs = [
    { q: "Is the assessment completely free?", a: "Yes. The full career assessment, AI analysis, and PDF report download are free — no credit card required, no hidden fees." },
    { q: "How accurate are the career recommendations?", a: "Our AI analyzes 50+ data points across academics, skills, personality, aspirations, and financial background. Match scores reflect genuine multi-dimensional analysis, not a personality quiz." },
    { q: "What does the paid dashboard include?", a: "The ₹699 one-time plan gives you permanent access to your saved reports, progress tracking, ability to retake the assessment, and all future feature updates." },
    { q: "Can I retake the assessment?", a: "Yes. Dashboard users can retake the assessment anytime and compare results across attempts to track growth." },
    { q: "Is my data private?", a: "All assessment data is stored securely and never shared with third parties. You own your data and can delete it anytime." },
    { q: "Who is this for?", a: "Students in grades 8–12 and early college who want clarity on which career suits them before making irreversible decisions about streams, colleges, or courses." },
  ];

  const careerDomains = [
    { name: "Technology", icon: "💻", careers: ["Software Engineer", "AI Engineer", "Data Scientist", "Cyber Security"], grad: "from-blue-600 to-blue-800", light: "bg-blue-50 border-blue-200 text-blue-700" },
    { name: "Business", icon: "📈", careers: ["Business Analyst", "Marketing Manager", "Product Manager", "Entrepreneur"], grad: "from-indigo-600 to-indigo-800", light: "bg-indigo-50 border-indigo-200 text-indigo-700" },
    { name: "Medicine", icon: "🩺", careers: ["Doctor", "Pharmacist", "Physiotherapist", "Nurse"], grad: "from-emerald-600 to-emerald-800", light: "bg-emerald-50 border-emerald-200 text-emerald-700" },
    { name: "Government", icon: "🏛️", careers: ["IAS Officer", "Bank PO", "Defence Officer", "Govt. Officer"], grad: "from-slate-700 to-slate-900", light: "bg-slate-50 border-slate-200 text-slate-700" },
    { name: "Creative", icon: "🎨", careers: ["UI/UX Designer", "Graphic Designer", "Video Editor", "Photographer"], grad: "from-violet-600 to-violet-800", light: "bg-violet-50 border-violet-200 text-violet-700" },
  ];

  const allDomains = [
    { name: "AI & Data Science", icon: "🤖", color: "bg-blue-50 border-blue-200", text: "text-blue-700", count: "12 careers" },
    { name: "Software Engineering", icon: "💻", color: "bg-indigo-50 border-indigo-200", text: "text-indigo-700", count: "18 careers" },
    { name: "Cyber Security", icon: "🔐", color: "bg-violet-50 border-violet-200", text: "text-violet-700", count: "8 careers" },
    { name: "Cloud Computing", icon: "☁️", color: "bg-sky-50 border-sky-200", text: "text-sky-700", count: "6 careers" },
    { name: "Electronics & VLSI", icon: "⚡", color: "bg-yellow-50 border-yellow-200", text: "text-yellow-700", count: "9 careers" },
    { name: "Mechanical Engg.", icon: "⚙️", color: "bg-orange-50 border-orange-200", text: "text-orange-700", count: "11 careers" },
    { name: "Civil Engineering", icon: "🏗️", color: "bg-amber-50 border-amber-200", text: "text-amber-700", count: "7 careers" },
    { name: "Healthcare", icon: "🩺", color: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", count: "15 careers" },
    { name: "Business & Management", icon: "📈", color: "bg-teal-50 border-teal-200", text: "text-teal-700", count: "14 careers" },
    { name: "Finance & Banking", icon: "🏦", color: "bg-cyan-50 border-cyan-200", text: "text-cyan-700", count: "10 careers" },
    { name: "Government Services", icon: "🏛️", color: "bg-slate-50 border-slate-300", text: "text-slate-700", count: "8 careers" },
    { name: "Creative Arts", icon: "🎨", color: "bg-pink-50 border-pink-200", text: "text-pink-700", count: "13 careers" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="CareerAssist" className="w-9 h-9 object-contain" />
            <span className="text-xl font-bold text-slate-900 tracking-tight">CareerAssist</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
            {[["#features", "Features"], ["#careers", "Career Paths"], ["#how", "How it Works"], ["#pricing", "Pricing"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-blue-600 transition-colors">{label}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/login")} className="hidden md:block text-sm font-semibold text-slate-600 hover:text-blue-600 px-4 py-2 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
              Sign in
            </button>
            <button onClick={() => navigate("/register")} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-md shadow-blue-200">
              Get Started Free
            </button>
            <button className="lg:hidden p-2 text-slate-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-1">
            {[["#features", "Features"], ["#careers", "Career Paths"], ["#how", "How it Works"], ["#pricing", "Pricing"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-slate-600 hover:text-blue-600 py-2.5 border-b border-slate-50">{label}</a>
            ))}
            <div className="pt-3 flex gap-3">
              <button onClick={() => navigate("/login")} className="flex-1 text-sm font-medium border border-slate-200 rounded-xl py-2.5">Sign in</button>
              <button onClick={() => navigate("/register")} className="flex-1 text-sm font-bold bg-blue-600 text-white rounded-xl py-2.5">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 pb-0 px-6" style={{ background: "linear-gradient(160deg, #dbeafe 0%, #f8faff 40%, #ede9fe 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8 pt-10">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 text-blue-700 px-5 py-2 rounded-full text-sm font-bold shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Trusted by Naan Mudhalvan · Free for All Students
            </div>
          </div>

          <div className="text-center max-w-5xl mx-auto mb-8">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 mb-6">
              The AI that finds<br />
              <span style={{ backgroundImage: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                your right career
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Answer 50 questions. Get a complete career report — AI-matched careers, degree suggestions, scholarship eligibility, skill plan, and a step-by-step roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button onClick={() => navigate("/register")} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-2xl shadow-blue-300 text-base">
              Start Free Assessment →
            </button>
           
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-semibold mb-14">
            {["No credit card needed", "PDF report free forever", "Results in 10 minutes", "10,000+ students trust us"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-black">✓</span>{t}
              </span>
            ))}
          </div>

          {/* Product mockup */}
          <div className="max-w-5xl mx-auto">
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

      {/* ── STATS ── */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Students Guided", sub: "and counting", color: "text-blue-400" },
              { value: "92%", label: "Match Accuracy", sub: "across all domains", color: "text-indigo-400" },
              { value: "500+", label: "Career Paths", sub: "in our engine", color: "text-violet-400" },
              { value: "₹0", label: "To Get Started", sub: "free forever", color: "text-emerald-400" },
            ].map((s) => (
              <div key={s.label}>
                <p className={`text-4xl lg:text-5xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-white font-bold text-sm mt-2">{s.label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4 border border-blue-100">
              Our Platform
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Trusted Career Guidance Ecosystem</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Helping students discover the right career path through AI-powered assessments, career roadmaps and future-ready guidance.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 shadow-lg p-4">
            <img src={banner} alt="CareerAssist Banner" className="w-full rounded-2xl shadow-md" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5">
              What You Get
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Everything in one report</h2>
            <p className="text-slate-500 text-xl max-w-xl mx-auto">Six engines working together so you never have to guess about your career again.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="group relative bg-white border-2 border-slate-100 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient reveal on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${f.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                      {f.icon}
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${f.tagColor} border-opacity-50`}>
                      {f.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREER DOMAINS DARK ── */}
      <section id="careers" className="py-24 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-900 text-blue-300 text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5 border border-blue-800">
              Career Domains
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">5 domains. 50+ careers.</h2>
            <p className="text-slate-400 text-xl max-w-xl mx-auto">Our AI scores you across every major career domain and tells you exactly where you belong.</p>
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
                <button onClick={() => navigate("/register")} className="bg-white text-blue-700 font-black px-6 py-3 rounded-2xl text-sm hover:bg-blue-50 transition-all w-fit shadow-lg">
                  Start Free →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5">
              The Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Three steps to career clarity</h2>
            <p className="text-slate-500 text-xl max-w-xl mx-auto">From blank slate to a complete career plan in under 15 minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.label} className="relative group">
                {i < 2 && (
                  <div className="hidden md:flex absolute top-10 -right-4 z-10 items-center justify-center w-8">
                    <svg className="w-5 h-5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <div className={`rounded-3xl p-8 h-full transition-all border-2 ${i === 0 ? "bg-blue-600 border-blue-500" : i === 1 ? "bg-indigo-600 border-indigo-500" : "bg-violet-600 border-violet-500"}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <span className="text-white/60 font-black text-2xl">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{step.label}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">{step.desc}</p>
                  <p className="text-xs text-white/60 bg-white/10 border border-white/20 rounded-xl px-3 py-2 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate("/register")} className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-xl shadow-blue-200 text-base">
              Start Your Assessment →
            </button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-violet-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5">
              Student Stories
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Real students. Real results.</h2>
            <p className="text-slate-500 text-xl">From 8th grade to first-year college — students who used CareerAssist.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`rounded-3xl p-8 flex flex-col justify-between border-2 hover:shadow-xl transition-all ${i === 0 ? "bg-blue-600 border-blue-500" : "bg-white border-slate-100"}`}>
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className={`w-4 h-4 ${i === 0 ? "text-yellow-300" : "text-yellow-400"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className={`text-base leading-relaxed mb-6 ${i === 0 ? "text-white font-medium" : "text-slate-700"}`}>"{t.quote}"</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black ${i === 0 ? "bg-white/20 text-white" : "bg-blue-600 text-white"}`}>
                      {t.initial}
                    </div>
                    <div>
                      <p className={`font-bold text-sm ${i === 0 ? "text-white" : "text-slate-900"}`}>{t.name}</p>
                      <p className={`text-xs ${i === 0 ? "text-blue-100" : "text-slate-400"}`}>{t.detail}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${i === 0 ? "bg-white/20 text-white border-white/30" : t.domainColor + " border-opacity-50"}`}>
                    {t.domain}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL DOMAINS GRID ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5">
              Explore Paths
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Explore Career Domains</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">CareerAssist evaluates your profile and recommends the most suitable career paths across multiple industries.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allDomains.map((domain) => (
              <div key={domain.name} className={`${domain.color} border-2 rounded-2xl p-5 hover:shadow-lg transition-all group cursor-pointer`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{domain.icon}</span>
                  <span className={`text-xs font-bold ${domain.text} opacity-70`}>{domain.count}</span>
                </div>
                <h3 className={`font-black text-sm ${domain.text}`}>{domain.name}</h3>
                <p className="text-slate-500 text-xs mt-1">Personalized roadmap & recommendations</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-600 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5">
              Pricing
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Simple, honest pricing</h2>
            <p className="text-slate-400 text-xl max-w-lg mx-auto">The report is always free. Pay only if you want to save and track your progress over time.</p>
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
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">Everything you need to understand your career — completely free.</p>
              <ul className="space-y-3 mb-10">
                {["Full 50-question assessment", "AI career recommendations", "Domain scoring (5 domains)", "SWOT analysis report", "Career roadmap", "PDF report download", "Scholarship eligibility check"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 bg-blue-900 text-blue-300 rounded-full flex items-center justify-center text-xs font-black shrink-0 border border-blue-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate("/register")} className="w-full border-2 border-slate-600 hover:border-blue-500 hover:bg-blue-600 text-white font-black py-3.5 rounded-2xl transition-all text-sm">
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
                <p className="text-blue-100 text-sm mb-8 leading-relaxed">Permanent access to your dashboard, reports, and all future features.</p>
                <ul className="space-y-3 mb-10">
                  {["Everything in Free", "Dashboard access forever", "Save unlimited reports", "Compare reports across attempts", "Progress tracking over time", "Retake assessment anytime", "Priority support", "All future feature updates"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white">
                      <span className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center text-xs font-black shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate("/register")} className="w-full bg-white text-blue-700 font-black py-3.5 rounded-2xl transition-all hover:bg-blue-50 text-sm shadow-lg">
                  Get Lifetime Access →
                </button>
                <p className="text-blue-200 text-xs text-center mt-3 font-semibold">One-time · No subscription · No renewal</p>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-slate-900 border border-slate-700 rounded-2xl p-6 text-center">
            <p className="text-slate-300 text-sm">
              💡 A career counsellor session costs <strong className="text-white">₹1,500–₹5,000</strong> and gives you one person's opinion.
              CareerAssist gives you AI analysis of 50+ data points — <strong className="text-blue-400">free</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-slate-900 text-white text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-5">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Questions we hear often</h2>
            <p className="text-slate-500 text-lg">Everything you need to know before getting started.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`border-2 rounded-2xl overflow-hidden transition-all ${openFaq === i ? "border-blue-400 shadow-md shadow-blue-50" : "border-slate-100 hover:border-slate-200"}`}>
                <button className="w-full flex items-center justify-between px-6 py-5 text-left bg-white" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-bold text-slate-900 text-sm pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-black transition-all ${openFaq === i ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                    {openFaq === i ? "−" : "+"}
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 bg-blue-50">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
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

      {/* ── CTA ── */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 100%)" }}>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-400 rounded-full blur-3xl opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 right-20 w-64 h-32 bg-violet-400 rounded-full blur-3xl opacity-15 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-600/50 text-blue-200 px-5 py-2 rounded-full text-xs font-black mb-8">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              Free for All Students
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Your career clarity<br />is 10 minutes away
            </h2>
            <p className="text-blue-200 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
              Join 10,000+ students who found their direction with CareerAssist — free, in one session.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => navigate("/register")} className="w-full sm:w-auto bg-white text-blue-700 font-black px-10 py-4 rounded-2xl transition-all hover:bg-blue-50 text-base shadow-2xl">
                Start Free Assessment →
              </button>
           
            </div>
            <p className="text-blue-400 text-xs mt-6 font-semibold">No credit card · PDF report free forever · Results in 10 minutes</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 border-t border-slate-800 text-white pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <img src={logo} alt="" className="w-9 h-9 object-contain" />
                <span className="font-black text-xl tracking-tight">CareerAssist</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xs">
                AI-powered career guidance for students in grades 8–12 and early college across India. Free assessment. Professional report. Real direction.
              </p>
              <p className="text-slate-500 text-xs mb-4">careerassistcontact@gmail.com</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-slate-400 text-xs font-semibold">Trusted by Naan Mudhalvan</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">Product</p>
              <ul className="space-y-3">
                {[["#features", "Features"], ["#careers", "Career Paths"], ["#how", "How it Works"], ["#pricing", "Pricing"], ["/report", "Sample Report"]].map(([href, label]) => (
                  <li key={label}><a href={href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">Account</p>
              <ul className="space-y-3">
                {[["/login", "Sign In"], ["/register", "Create Account"], ["/dashboard", "Dashboard"], ["/assessment", "Take Assessment"]].map(([href, label]) => (
                  <li key={label}><a href={href} className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-5">Legal</p>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Service", "Data Security", "Cookie Policy"].map((item) => (
                  <li key={item}><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors font-medium">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-10">
            <div className="flex flex-col items-center justify-center text-center">
              <img src={logo} alt="CareerAssist" className="w-14 h-14 mb-4 object-contain" />
              <h3 className="text-2xl font-black text-white">CareerAssist</h3>
              <p className="text-slate-400 mt-2 text-sm">AI Powered Career Guidance Platform</p>
              <div className="mt-6 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl shadow-blue-900/50">
                <p className="text-xs uppercase tracking-widest text-blue-100 font-bold mb-1">Powered By</p>
                <h3 className="font-black text-white text-xl">ZETSPACE LABS PVT LTD</h3>
              </div>
              <p className="text-slate-500 mt-8 text-sm">© 2026 CareerAssist. All Rights Reserved.</p>
              <p className="text-slate-600 text-xs mt-2">Made with ❤️ in India</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Landing;