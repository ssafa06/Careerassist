import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { supabase } from "../lib/supabase";
import Navbar from "../components/Navbar";
import careerPerson from "../assets/career-person.jpeg";
import {
  Laptop,
  TrendingUp,
  Stethoscope,
  Landmark,
  Palette,
  Brain,
  Cpu,
  GraduationCap,
  FileText,
  IndianRupee,
  Map,
  Star,
  Plus,
  Minus,
  Check,
  ChevronRight,
  ShieldCheck,
  Users,
  Building2,
  X,
  ArrowRight,
  Scale,
  Sparkles,
  BookOpen,
  Briefcase,
  Compass,
  ArrowUpRight,
  Target,
  BarChart3
} from "lucide-react";

// ─── Scroll Animation Component ───────────────────────────────────────────────
interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimate = ({ children, className = "", delay = 0 }: ScrollAnimateProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-98"
      } ${className}`}
    >
      {children}
    </div>
  );
};

// ─── Count Up Animation Component ─────────────────────────────────────────────
interface CountUpProps {
  end: number | string;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ end, duration = 1500, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const endNum = typeof end === "string" ? parseInt(end.replace(/[^0-9]/g, ""), 10) : end;
          if (isNaN(endNum)) {
            setCount(0);
            return;
          }
          const totalFrames = 60;
          const frameDuration = duration / totalFrames;
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeProgress = progress * (2 - progress); // easeOutQuad
            const currentCount = Math.round(easeProgress * endNum);
            
            setCount(currentCount);

            if (frame === totalFrames) {
              clearInterval(counter);
              setCount(endNum);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

const Landing = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "CareerAssist | AI Career Guidance Platform";
  }, []);

  const startAssessment = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/register");
        return;
      }

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

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
    }
  };

  const gradeLevels = [
    { title: "Grade 6–8", icon: BookOpen, desc: "Discover talents early through fun aptitude and personality assessments." },
    { title: "Grade 9–10", icon: Sparkles, desc: "Choose the right stream and explore future careers." },
    { title: "Grade 11–12", icon: GraduationCap, desc: "Get stream-specific AI recommendations and college guidance." },
    { title: "College", icon: Building2, desc: "Find internships, higher studies and career opportunities." },
    { title: "Graduate", icon: Briefcase, desc: "Career transition, job matching and professional growth roadmap." },
  ];

  const domains = [
    { name: "Technology", icon: Laptop, desc: "Software, AI, Data Science, Cyber Security & Infrastructure." },
    { name: "Healthcare", icon: Stethoscope, desc: "Medicine, Pharmacy, Physiotherapy, Nursing & Healthcare Admin." },
    { name: "Business", icon: TrendingUp, desc: "Management, Marketing, Finance, Product & Entrepreneurship." },
    { name: "Law", icon: Scale, desc: "Corporate Law, Criminal Law, Cyber Law & Legal Advisory." },
    { name: "Government", icon: Landmark, desc: "Civil Services, Public Administration, Defense & Banking PO." },
    { name: "Creative", icon: Palette, desc: "UI/UX, Graphic Design, Filmmaking, Writing & Digital Arts." },
  ];

  const steps = [
    { step: 1, title: "Register", icon: Users, desc: "Create your student account." },
    { step: 2, title: "Assessment", icon: FileText, desc: "Answer simple interest & aptitude questions." },
    { step: 3, title: "AI Analysis", icon: Brain, desc: "Engine evaluates your academic & personality metrics." },
    { step: 4, title: "Roadmap", icon: Map, desc: "Receive your customized career blueprint." },
  ];

  const features = [
    { icon: Cpu, title: "AI Career Match", desc: "Get smart career suggestions using advanced AI analysis." },
    { icon: Brain, title: "Psychometric Profile", desc: "Understand your strengths, behaviors, and core interests." },
    { icon: TrendingUp, title: "Skill Gap Analysis", desc: "Identify exact skills and certifications required for your goal." },
    { icon: GraduationCap, title: "College Recommendations", desc: "Explore colleges matching your criteria and streams." },
    { icon: IndianRupee, title: "Scholarship Finder", desc: "Discover active government and private financial aid options." },
    { icon: FileText, title: "PDF Report", desc: "Download and print your comprehensive assessment roadmap." },
  ];

  const careerShowcase = [
    { role: "AI Engineer", pay: "₹12–25 LPA", growth: "High Demand (+35%)", icon: Cpu, color: "from-blue-500 to-indigo-600" },
    { role: "Data Scientist", pay: "₹8–18 LPA", growth: "Steady Rise (+22%)", icon: BarChart3, color: "from-purple-500 to-pink-600" },
    { role: "Product Manager", pay: "₹10–22 LPA", growth: "Highly Valued (+18%)", icon: Target, color: "from-emerald-500 to-teal-600" },
    { role: "UX Designer", pay: "₹6–15 LPA", growth: "Growing Track (+25%)", icon: Palette, color: "from-amber-500 to-orange-600" },
  ];

  const aiProcessingSteps = [
    { name: "Academic Alignment", icon: BookOpen, desc: "Grades, streams, and subject affinities." },
    { name: "Cognitive Mapping", icon: Brain, desc: "Aptitude, problem-solving, and logic levels." },
    { name: "Financial Context", icon: IndianRupee, desc: "Tuition budget filters and scholarship matches." },
    { name: "Market Intelligence", icon: TrendingUp, desc: "Real-time industry requirements and salary forecasts." },
  ];

  const testimonials = [
    { name: "Arun Kumar", role: "Class 12 · Chennai", text: "CareerAssist changed my career direction. I planned Mechanical Engineering, but my assessment showed Data Science suited me much better." },
    { name: "Priya Sharma", role: "B.Tech Student", text: "The report was extremely detailed. It explained my strengths, weaknesses, career options, and scholarships all in one place." },
    { name: "Rahul N", role: "Parent", text: "As a parent, I finally understood what career best suits my child. The report answered questions that career counselors couldn't." },
  ];

  const faqs = [
    { q: "Who can use CareerAssist?", a: "Students from Grade 6 to Graduates can use CareerAssist." },
    { q: "Is the assessment free?", a: "Yes. Taking the assessment is completely free. Dashboard access requires a one-time payment." },
    { q: "How long does the assessment take?", a: "Usually between 15 and 25 minutes." },
    { q: "Can parents use this report?", a: "Yes. The report includes a dedicated Parent Insights section." },
    { q: "Does AI generate the recommendations?", a: "Yes. Recommendations are generated based on academics, personality, aptitude, interests, and goals." },
    { q: "Can I download the report?", a: "Yes. After dashboard access, you can download the report unlimited times." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-5 md:px-8 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #dbeafe 0%, #f8faff 40%, #ede9fe 100%)" }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimate className="text-left max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-6">
                The AI that finds <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  your right career
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 mb-8">
                Answer simple questions to receive a personalized career report with detailed analysis, deep skill insights, and a step‑by‑step roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button onClick={startAssessment} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition active:scale-95 cursor-pointer flex items-center gap-2">
                  Start Free Assessment <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex flex-col text-sm text-slate-500">
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> Free PDF Report
                  </span>
                  <span>Takes less than 15 mins</span>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={200} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <img src={careerPerson} alt="Career guidance illustration" className="rounded-2xl shadow-xl w-full object-cover max-h-[380px]" />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold">Match Accuracy</p>
                    <p className="text-lg font-bold text-slate-900">92% AI Verified</p>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ─── HIRING PARTNERS MARQUEE ──────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8 text-center">
          <span className="inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Hiring Partners
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            Careers at India's Top Companies
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto font-medium">
            Our career roadmaps are aligned with real hiring expectations at leading organisations across sectors.
          </p>
        </div>

        <style>{`
          @keyframes marquee-left {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0%   { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-track-left  { animation: marquee-left  28s linear infinite; }
          .marquee-track-right { animation: marquee-right 28s linear infinite; }
          .marquee-track-left:hover,
          .marquee-track-right:hover { animation-play-state: paused; }
          @media (max-width: 640px) {
            .marquee-track-left  { animation-duration: 14s; }
            .marquee-track-right { animation-duration: 14s; }
          }
        `}</style>

        {/* Row 1 — IT & Software + Product & SaaS */}
        <div className="relative mb-3" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
          <div className="flex marquee-track-left whitespace-nowrap gap-2 sm:gap-4">
            {[
              { name: "TCS",          domain: "tcs.com" },
              { name: "Infosys",      domain: "infosys.com" },
              { name: "Wipro",        domain: "wipro.com" },
              { name: "HCL Tech",     domain: "hcltech.com" },
              { name: "Tech Mahindra",domain: "techmahindra.com" },
              { name: "Accenture",    domain: "accenture.com" },
              { name: "Capgemini",    domain: "capgemini.com" },
              { name: "Cognizant",    domain: "cognizant.com" },
              { name: "LTIMindtree", domain: "ltimindtree.com" },
              { name: "IBM",          domain: "ibm.com" },
              { name: "Microsoft",    domain: "microsoft.com" },
              { name: "Google",       domain: "about.google" },
              { name: "Amazon",       domain: "amazon.com" },
              { name: "Oracle",       domain: "oracle.com" },
              { name: "Adobe",        domain: "adobe.com" },
              { name: "Zoho",         domain: "zoho.com" },
              { name: "Freshworks",   domain: "freshworks.com" },
              { name: "Salesforce",   domain: "salesforce.com" },
              // duplicate for seamless loop
              { name: "TCS",          domain: "tcs.com" },
              { name: "Infosys",      domain: "infosys.com" },
              { name: "Wipro",        domain: "wipro.com" },
              { name: "HCL Tech",     domain: "hcltech.com" },
              { name: "Tech Mahindra",domain: "techmahindra.com" },
              { name: "Accenture",    domain: "accenture.com" },
              { name: "Capgemini",    domain: "capgemini.com" },
              { name: "Cognizant",    domain: "cognizant.com" },
              { name: "LTIMindtree", domain: "ltimindtree.com" },
              { name: "IBM",          domain: "ibm.com" },
              { name: "Microsoft",    domain: "microsoft.com" },
              { name: "Google",       domain: "about.google" },
              { name: "Amazon",       domain: "amazon.com" },
              { name: "Oracle",       domain: "oracle.com" },
              { name: "Adobe",        domain: "adobe.com" },
              { name: "Zoho",         domain: "zoho.com" },
              { name: "Freshworks",   domain: "freshworks.com" },
              { name: "Salesforce",   domain: "salesforce.com" },
            ].map((co, i) => (
              <div
                key={`r1-${i}`}
                className="inline-flex items-center gap-1.5 sm:gap-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-5 sm:py-3 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 cursor-default shrink-0"
                style={{ minWidth: 100 }}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${co.domain}&sz=32`}
                  alt={co.name}
                  className="w-4 h-4 sm:w-6 sm:h-6 object-contain rounded"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap">{co.name}</span>
              </div>
            ))}
          </div>
        </div>


        {/* Row 2 — Core Engineering + Automotive + Energy — scrolls right */}
        <div className="relative" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
          <div className="flex marquee-track-right whitespace-nowrap gap-2 sm:gap-4">
            {[
              { name: "L&T",              domain: "larsentoubro.com" },
              { name: "Siemens",          domain: "siemens.com" },
              { name: "ABB",              domain: "global.abb" },
              { name: "Schneider Electric",domain: "se.com" },
              { name: "Bosch",            domain: "bosch.in" },
              { name: "BEL",              domain: "bel-india.in" },
              { name: "Tata Motors",      domain: "tatamotors.com" },
              { name: "Mahindra",         domain: "mahindra.com" },
              { name: "Maruti Suzuki",    domain: "marutisuzuki.com" },
              { name: "Hyundai",          domain: "hyundai.com" },
              { name: "Ashok Leyland",    domain: "ashokleyland.com" },
              { name: "Reliance",         domain: "ril.com" },
              { name: "NTPC",             domain: "ntpc.co.in" },
              { name: "IOCL",             domain: "iocl.com" },
              { name: "Power Grid",       domain: "powergrid.in" },
              { name: "Adani Green",      domain: "adanigreenenergy.com" },
              // duplicate for seamless loop
              { name: "L&T",              domain: "larsentoubro.com" },
              { name: "Siemens",          domain: "siemens.com" },
              { name: "ABB",              domain: "global.abb" },
              { name: "Schneider Electric",domain: "se.com" },
              { name: "Bosch",            domain: "bosch.in" },
              { name: "BEL",              domain: "bel-india.in" },
              { name: "Tata Motors",      domain: "tatamotors.com" },
              { name: "Mahindra",         domain: "mahindra.com" },
              { name: "Maruti Suzuki",    domain: "marutisuzuki.com" },
              { name: "Hyundai",          domain: "hyundai.com" },
              { name: "Ashok Leyland",    domain: "ashokleyland.com" },
              { name: "Reliance",         domain: "ril.com" },
              { name: "NTPC",             domain: "ntpc.co.in" },
              { name: "IOCL",             domain: "iocl.com" },
              { name: "Power Grid",       domain: "powergrid.in" },
              { name: "Adani Green",      domain: "adanigreenenergy.com" },
            ].map((co, i) => (
              <div
                key={`r2-${i}`}
                className="inline-flex items-center gap-1.5 sm:gap-3 bg-white border border-slate-200 rounded-lg sm:rounded-xl px-3 py-1.5 sm:px-5 sm:py-3 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-200 cursor-default shrink-0"
                style={{ minWidth: 110 }}
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${co.domain}&sz=32`}
                  alt={co.name}
                  className="w-4 h-4 sm:w-6 sm:h-6 object-contain rounded"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 whitespace-nowrap">{co.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sector labels row */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-8 flex flex-wrap gap-2 justify-center">
          {[
            { label: "IT & Software", color: "bg-blue-100 text-blue-700" },
            { label: "Product & SaaS", color: "bg-indigo-100 text-indigo-700" },
            { label: "Core Engineering", color: "bg-slate-200 text-slate-700" },
            { label: "Automotive", color: "bg-orange-100 text-orange-700" },
            { label: "Energy & Infrastructure", color: "bg-green-100 text-green-700" },
          ].map(s => (
            <span key={s.label} className={`${s.color} text-xs font-bold px-3 py-1 rounded-full`}>{s.label}</span>
          ))}
        </div>
      </section>

      {/* STATS SECTION (WITH COUNT-UP ANIMATION) */}
      <section className="py-12 bg-white px-5 md:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 10000, suffix: "+", label: "Students Guided", desc: "Across India", icon: GraduationCap },
              { value: 500, suffix: "+", label: "Career Paths", desc: "Mapped in Database", icon: Compass },
              { value: 92, suffix: "%", label: "Match Accuracy", desc: "Verified suggestions", icon: Cpu },
              { value: 25, suffix: "+", label: "Analysis Layers", desc: "Multidimensional data", icon: Brain },
            ].map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <ScrollAnimate key={i} delay={i * 100} className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </h3>
                  <p className="font-bold text-slate-700 text-sm mt-1">{stat.label}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{stat.desc}</p>
                </ScrollAnimate>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION LEVEL SELECTOR (GRADE CARDS) */}
      <section className="py-16 bg-slate-50 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Choose Your Education Level</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium">Select your current stage to start a tailored assessment matching your academic scope.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {gradeLevels.map((level, i) => {
              const IconComponent = level.icon;
              return (
                <ScrollAnimate key={level.title} delay={i * 100} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-500 cursor-pointer flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-slate-900 mb-2">{level.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{level.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                    Start Assessment <ChevronRight className="w-4 h-4" />
                  </div>
                </ScrollAnimate>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: FEATURED CAREERS SALARY SHOWCASE */}
      <section className="py-16 bg-white px-5 md:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Salary & Market Insights</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4">In-Demand Careers Mapped</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium">Explore average entry compensation packages and growth trends for major careers.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerShowcase.map((job, i) => {
              const IconComponent = job.icon;
              return (
                <ScrollAnimate key={job.role} delay={i * 100} className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500 transition-all flex flex-col justify-between overflow-hidden">
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${job.color} opacity-5 rounded-full blur-xl`} />
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">{job.role}</h3>
                    <p className="text-slate-400 text-xs mt-1">Starting Salary Range</p>
                    <p className="text-2xl font-black text-blue-600 mt-0.5">{job.pay}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-semibold">{job.growth}</span>
                    <span className="text-blue-500 flex items-center font-bold gap-0.5 hover:underline cursor-pointer" onClick={startAssessment}>
                      View Road <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </ScrollAnimate>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: AI PROCESSING LOGIC ANIMATION */}
      <section id="engine" className="py-16 bg-slate-50 px-5 md:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">AI Platform Engine</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-4">How Our Matching Engine Computes Paths</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium">Instead of simple aptitude tests, we map four core vectors to find your fit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {aiProcessingSteps.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <ScrollAnimate key={item.name} delay={i * 150} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition relative flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-8 flex justify-between items-center text-xs font-bold text-indigo-600">
                    <span>Vector Layer {i + 1}</span>
                    <span className="px-2 py-0.5 bg-indigo-50 rounded">Processed</span>
                  </div>
                </ScrollAnimate>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-16 bg-white px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">How It Works</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium">Get your roadmap in four simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <ScrollAnimate key={item.step} delay={i * 100} className="text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl relative mb-4">
                    <IconComponent className="w-7 h-7" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center shadow-md">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm max-w-xs">{item.desc}</p>
                </ScrollAnimate>
              );
            })}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section id="features" className="py-16 bg-slate-50 border-t border-slate-100 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Features Built For Your Success</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium">Everything you need to navigate your academic and professional options.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const IconComponent = feature.icon;
              return (
                <ScrollAnimate key={feature.title} delay={i * 100} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </ScrollAnimate>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAREER DOMAINS */}
      <section id="careers" className="py-16 bg-white px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Explore Key Career Domains</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium">Discover pathways across multiple high-demand industries mapped in our AI database.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain, i) => {
              const IconComponent = domain.icon;
              return (
                <ScrollAnimate key={domain.name} delay={i * 100} className="group bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-500 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl text-slate-900">{domain.name}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{domain.desc}</p>
                  <span className="text-xs text-blue-600 font-bold group-hover:underline cursor-pointer flex items-center gap-1" onClick={startAssessment}>
                    Explore roadmap <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </ScrollAnimate>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="compare" className="py-16 bg-slate-50 border-y border-slate-100 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Why Choose CareerAssist?</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto font-medium">Compare us with traditional assessment platforms.</p>
          </div>
          <ScrollAnimate className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="text-left p-4 font-bold text-slate-700">Features</th>
                  <th className="p-4 font-bold text-blue-600 text-center">CareerAssist</th>
                  <th className="p-4 font-bold text-slate-500 text-center">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ["AI Career Match Engine", true, "Limited"],
                  ["Psychometric & Stream Fit", true, false],
                  ["Scholarship & Financial Aid suggestions", true, false],
                  ["Continuous Progress Tracking Dashboard", true, false],
                  ["Detailed Skill Gap & Training Roadmap", true, "Limited"],
                  ["Comprehensive PDF Reports", true, "Paid Add-on"],
                ].map(([feat, isUs, isOthers], idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-medium text-slate-800">{feat}</td>
                    <td className="p-4 text-center">
                      {isUs ? <Check className="w-5 h-5 text-green-600 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
                    </td>
                    <td className="p-4 text-center text-sm text-slate-500 font-semibold">
                      {typeof isOthers === "boolean" ? (
                        isOthers ? <Check className="w-5 h-5 text-slate-400 mx-auto" /> : <X className="w-5 h-5 text-slate-400 mx-auto" />
                      ) : (
                        isOthers
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollAnimate>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-16 bg-white px-5 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Simple, Honest Pricing</h2>
            <p className="text-slate-500 mt-3 font-medium">Start for free. Unlock premium features at a transparent cost.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Free */}
            <ScrollAnimate className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Basic Access</p>
                <p className="text-4xl font-black text-slate-900 mb-4">₹0</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">Everything you need to discover initial domains.</p>
                <ul className="space-y-3 mb-8">
                  {["Full assessment questions", "AI career matching options", "Basic SWOT review", "Standard web preview"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-600 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => navigate("/register")} className="w-full border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 font-bold py-3 rounded-xl transition active:scale-95 cursor-pointer text-sm">
                Get Started Free
              </button>
            </ScrollAnimate>
            {/* Pro */}
            <ScrollAnimate className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 flex flex-col justify-between relative shadow-lg">
              <div className="absolute top-4 right-4 bg-white/20 px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current text-yellow-300" /> Popular
              </div>
              <div>
                <p className="text-xs font-black text-blue-200 uppercase tracking-widest mb-2">Lifetime Access</p>
                <div className="flex items-end gap-2 mb-4">
                  <p className="text-4xl font-black">₹699</p>
                  <p className="text-blue-200 text-xs font-semibold pb-1">one-time payment</p>
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">Unlock persistent dashboard storage, progress logs, and advanced roadmaps.</p>
                <ul className="space-y-3 mb-8">
                  {["Everything in Free access", "Dashboard storage forever", "Download PDF reports unlimited", "Compare multi-attempt history", "Skill gap training map", "Priority support"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-blue-100">
                      <Check className="w-4 h-4 text-white/80 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => navigate("/register")} className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 rounded-xl transition active:scale-95 cursor-pointer text-sm shadow-md">
                Get Lifetime Access
              </button>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-slate-50 border-t border-slate-100 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">What Students Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <ScrollAnimate key={item.name} delay={i * 100} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-400 font-semibold">{item.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{item.text}"</p>
                <div className="flex gap-1 mt-4 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 bg-white px-5 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <ScrollAnimate key={i} delay={i * 50} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  {openFaq === i ? <Minus className="w-4 h-4 text-blue-600 shrink-0" /> : <Plus className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {item.a}
                  </div>
                )}
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-16 px-5 md:px-8 bg-slate-50 border-t border-slate-100">
        <ScrollAnimate className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Start Your Assessment Now</h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto font-medium">Discover your potential, access specialized stream guidance, and structure a custom career roadmap.</p>
          <button onClick={startAssessment} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition active:scale-95 cursor-pointer">
            Start Free Assessment
          </button>
        </ScrollAnimate>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} className="w-10 h-10 object-contain" alt="CareerAssist logo" />
                <h2 className="text-white text-2xl font-black">CareerAssist</h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                CareerAssist is an AI-powered career counseling platform that evaluates personality, aptitude, interest levels, and metrics to chart your custom education map.
              </p>
              <div className="space-y-2">
                {[
                  { color: "bg-blue-500", label: "AI Powered Recommendation Engine" },
                  { color: "bg-yellow-500", label: "Built for Indian Students" },
                ].map((tag) => (
                  <div key={tag.label} className="flex items-center gap-2 text-xs">
                    <span className={`w-2.5 h-2.5 rounded-full ${tag.color}`} />
                    <span className="text-slate-300 font-semibold">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <div className="space-y-2 text-sm">
                {["About Features", "Career Domains", "Compare Plans", "Pricing Details"].map((item) => (
                  <a key={item} href="#" className="block hover:text-white transition">{item}</a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contact</h3>
              <p className="text-sm leading-relaxed mb-1">Email support:</p>
              <p className="text-white text-sm font-semibold mb-4">careerassistcontact@gmail.com</p>
              <p className="text-slate-500 text-xs">Mon – Sat · 9 AM to 6 PM IST</p>
            </div>
          </div>

          <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-slate-600">© 2026 CareerAssist. All rights reserved.</p>
            <div className="text-center md:text-right">
              <p className="text-slate-500">Platform Developed & Maintained By</p>
              <p className="text-white font-bold text-sm">ZETSPACE LABS PVT LTD</p>
              <p className="text-slate-600 text-[10px]">Technology Partner</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;