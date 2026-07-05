import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Brain,
  Clock3,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  FileText,
  CheckCircle2,
  BookOpen,
  Briefcase
} from "lucide-react";

type StartStep =
  | "welcome"
  | "instructions"
  | "ready";

interface AssessmentStartProps {
  onStart: (config: {
    type: "school" | "college" | "graduated";
    grade?: string;
    stream?: string;
    discipline?: "engineering" | "arts-science";
    department?: string;
    year?: string;
    semester?: string;
    passedOutYear?: string;
  }) => void;
}

export default function AssessmentStart({ onStart }: AssessmentStartProps) {
  const [step, setStep] = useState<StartStep>("welcome");
  const [agree, setAgree] = useState(false);

  // Student Type flow
  const [studentType, setStudentType] = useState<"school" | "college" | "graduated" | null>(null);
  
  // School options
  const [showStreamSelect, setShowStreamSelect] = useState(false);

  // College options
  const [discipline, setDiscipline] = useState<"engineering" | "arts-science" | null>(null);
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [passedOutYear, setPassedOutYear] = useState("");

  const engineeringDepts = [
    "Computer Science Engineering",
    "Information Technology",
    "Artificial Intelligence & Data Science",
    "Artificial Intelligence & Machine Learning",
    "Electronics & Communication Engineering",
    "Electrical & Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Biotechnology",
    "Mechatronics",
    "Aeronautical Engineering",
    "Automobile Engineering",
    "Robotics & Automation",
    "Cyber security",
    "Computer science and business system",
    "Other"
  ];

  const artsScienceDepts = [
    "Commerce & Business",
    "Pure Sciences (Physics, Chemistry, Maths, Biology)",
    "Humanities & Social Sciences",
    "Computer Science / IT (B.Sc, BCA)",
    "Other"
  ];

  const handleGradeSelect = (chosenGrade: string) => {
    if (chosenGrade === "11-12") {
      setShowStreamSelect(true);
    } else {
      onStart({
        type: "school",
        grade: chosenGrade,
        stream: "General"
      });
    }
  };

  const handleStreamSelect = (chosenStream: string) => {
    onStart({
      type: "school",
      grade: "11-12",
      stream: chosenStream
    });
  };

  const handleCollegeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!discipline || !department || !year || !semester) return;
    onStart({
      type: "college",
      discipline,
      department,
      year,
      semester
    });
  };

  const handleGraduateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!discipline || !department || !passedOutYear) return;
    onStart({
      type: "graduated",
      discipline,
      department,
      passedOutYear
    });
  };

  function next() {
    if (step === "welcome") {
      setStep("instructions");
      return;
    }
    if (step === "instructions") {
      setStep("ready");
      return;
    }
  }

  function previous() {
    if (step === "ready") {
      if (showStreamSelect) {
        setShowStreamSelect(false);
        return;
      }
      if (studentType !== null) {
        setStudentType(null);
        setDiscipline(null);
        return;
      }
      setStep("instructions");
      return;
    }
    if (step === "instructions") {
      setStep("welcome");
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center py-12 px-6">
      <div className="max-w-4xl mx-auto w-full">
        {/* Progress indicators */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <StepCircle active={step === "welcome"} completed={step !== "welcome"} number={1} />
            <Line active={step !== "welcome"} />
            <StepCircle active={step === "instructions"} completed={step === "ready"} number={2} />
            <Line active={step === "ready"} />
            <StepCircle active={step === "ready"} completed={false} number={3} />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl transition-all duration-500">
          {/* Welcome Step */}
          {step === "welcome" && (
            <div className="grid lg:grid-cols-2 animate-fade-in">
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-blue-600 font-semibold text-xs border border-blue-100">
                    <Sparkles size={14} />
                    AI Powered Career Guidance
                  </div>
                  <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                    Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Perfect Career Path</span>
                  </h1>
                  <p className="mt-6 text-slate-500 text-sm lg:text-base leading-relaxed font-semibold">
                    CareerAssist combines scientific psychometric analysis, cognitive evaluation, behavioural assessments, and stream-specific competency mapping to curate your personalized career roadmap.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <FeatureCard icon={<Brain size={20} />} title="Smart Assessment" subtitle="Scientific Questions" />
                    <FeatureCard icon={<Clock3 size={20} />} title="35-45 Minutes" subtitle="One Sitting" />
                    <FeatureCard icon={<GraduationCap size={20} />} title="Discipline Aware" subtitle="School & College" />
                    <FeatureCard icon={<FileText size={20} />} title="AI Report" subtitle="Actionable Insights" />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={next}
                  className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-750 text-white font-bold rounded-xl shadow-lg shadow-blue-600/10 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  Continue to Guidelines
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-800 text-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[size:24px_24px]" />
                <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h2 className="text-xl lg:text-2xl font-bold mb-4">What You'll Receive</h2>
                  <div className="space-y-4">
                    <Benefit text="Mindset & Psychometric Mapping" />
                    <Benefit text="Logical & Cognitive Ability Score" />
                    <Benefit text="Stream Competency Evaluation" />
                    <Benefit text="Placement & Job Readiness Assessment" />
                    <Benefit text="Personalized Upskilling Roadmap" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-8 text-center relative z-10">
                  <Stat value="10K+" label="Students" />
                  <Stat value="95%" label="Accuracy" />
                  <Stat value="4.9★" label="Rating" />
                </div>
              </div>
            </div>
          )}

          {/* Instructions Step */}
          {step === "instructions" && (
            <div className="p-8 lg:p-12 animate-fade-in text-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 text-blue-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-wider">Step 2 of 3</p>
                  <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Guidelines & Instructions</h1>
                </div>
              </div>
              <p className="mt-6 text-slate-500 leading-relaxed text-sm lg:text-base font-semibold">
                Please read the following guidelines carefully. This ensures that the assessment results are accurate and truly representative of your capabilities.
              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4">
                <Rule text="Answer all questions honestly. There are no right or wrong answers in the behavioral and psychometric sections." />
                <Rule text="The cognitive and technical sections have multiple-choice questions with correct answers." />
                <Rule text="Your progress is automatically saved to local storage." />
                <Rule text="Ensure a stable internet connection and try to complete it in one session." />
              </div>

              <div className="mt-8 flex items-center gap-3 bg-blue-50 border border-blue-100 p-4 rounded-xl">
                <input
                  type="checkbox"
                  id="agree-checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-300 bg-white text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="agree-checkbox" className="text-slate-700 text-sm font-semibold cursor-pointer">
                  I agree to the guidelines and will take the assessment independently.
                </label>
              </div>

              <div className="flex justify-between mt-10">
                <button
                  onClick={previous}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-350 text-slate-700 hover:bg-slate-50 transition font-bold"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                <button
                  disabled={!agree}
                  onClick={next}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition cursor-pointer ${
                    agree
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/10 hover:scale-[1.02]"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                  }`}
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Ready Step (branching between School and College) */}
          {step === "ready" && (
            <div className="p-8 lg:p-12 animate-fade-in text-slate-800">
              {studentType === null ? (
                // Branching Selection
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4 border border-blue-100 text-blue-600 animate-pulse">
                    <GraduationCap size={28} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900">Select Your Education Level</h2>
                  <p className="text-slate-500 mt-2 text-sm max-w-md mx-auto font-semibold">
                    Choose your current academic level to start a guidance workflow specifically designed for you.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <button
                      type="button"
                      onClick={() => setStudentType("school")}
                      className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-blue-500/50 hover:bg-blue-50/20 transition text-left group active:scale-[0.99] duration-300 cursor-pointer shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition mb-4 border border-blue-100">
                        <BookOpen size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">School Student</h3>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed font-semibold">
                        For Grades 6–12. Identifies learning styles, academic interests, logical intelligence, and subject strengths.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStudentType("college")}
                      className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-indigo-500/50 hover:bg-indigo-50/20 transition text-left group active:scale-[0.99] duration-300 cursor-pointer shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-100 transition mb-4 border border-indigo-100">
                        <Briefcase size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition">College Student</h3>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed font-semibold">
                        For higher education. Evaluates professional competencies, logical modeling, technical streams, and placement readiness.
                      </p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStudentType("graduated")}
                      className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-emerald-500/50 hover:bg-emerald-50/20 transition text-left group active:scale-[0.99] duration-300 cursor-pointer shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition mb-4 border border-emerald-100">
                        <GraduationCap size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition">Graduated</h3>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed font-semibold">
                        For college graduates & job seekers. Evaluates career transition readiness, specialized technical streams, and aptitude.
                      </p>
                    </button>
                  </div>
                </div>
              ) : studentType === "school" ? (
                // School flow - Grade & Stream selector
                <div className="py-4">
                  {showStreamSelect ? (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 text-center">Select your stream</h2>
                      <p className="text-slate-500 text-sm text-center mt-2 max-w-sm mx-auto font-semibold">
                        Grade 11 & 12 is stream-specific. Choose your course stream.
                      </p>
                      <div className="mt-8 grid sm:grid-cols-2 gap-4">
                        {[
                          { stream: "Science", label: "Science Stream" },
                          { stream: "Commerce", label: "Commerce Stream" },
                          { stream: "Arts", label: "Arts & Humanities" },
                          { stream: "Vocational", label: "Vocational Stream" }
                        ].map((item) => (
                          <button
                            key={item.stream}
                            type="button"
                            onClick={() => handleStreamSelect(item.stream)}
                            className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-blue-500/50 hover:bg-blue-50/20 text-left font-semibold text-slate-800 flex items-center justify-between group transition active:scale-[0.99] cursor-pointer shadow-sm"
                          >
                            <span>{item.label}</span>
                            <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 text-center">Select your grade</h2>
                      <p className="text-slate-500 text-sm text-center mt-2 max-w-sm mx-auto font-semibold">
                        Choose your school grade to load corresponding questions.
                      </p>
                      <div className="mt-8 grid sm:grid-cols-3 gap-4">
                        {[
                          { grade: "6-8", label: "Grade 6 – 8", sub: "Cognitive + Skills" },
                          { grade: "9-10", label: "Grade 9 – 10", sub: "Cognitive + Skills" },
                          { grade: "11-12", label: "Grade 11 – 12", sub: "Stream Specific" }
                        ].map((item) => (
                          <button
                            key={item.grade}
                            type="button"
                            onClick={() => handleGradeSelect(item.grade)}
                            className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-blue-500/50 hover:bg-blue-50/20 text-left transition active:scale-[0.99] group flex flex-col justify-between h-32 cursor-pointer shadow-sm"
                          >
                            <span className="font-bold text-slate-900 text-lg group-hover:text-blue-650 transition">{item.label}</span>
                            <div className="flex items-center justify-between w-full mt-4 text-xs text-slate-500 group-hover:text-blue-600">
                              <span className="font-semibold">{item.sub}</span>
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : studentType === "college" ? (
                // College flow - form selector
                <form onSubmit={handleCollegeSubmit} className="space-y-6 max-w-xl mx-auto py-2">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-extrabold text-slate-900">College Assessment Setup</h2>
                    <p className="text-slate-500 text-sm mt-1 font-semibold">Configure your department details to build your dynamic stream tests.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Discipline select */}
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Select Stream/Discipline</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => { setDiscipline("engineering"); setDepartment(""); }}
                          className={`p-4 rounded-xl border font-bold text-center transition cursor-pointer ${
                            discipline === "engineering"
                              ? "border-blue-500 bg-blue-50 text-blue-600"
                              : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"
                          }`}
                        >
                          Engineering
                        </button>
                        <button
                          type="button"
                          onClick={() => { setDiscipline("arts-science"); setDepartment(""); }}
                          className={`p-4 rounded-xl border font-bold text-center transition cursor-pointer ${
                            discipline === "arts-science"
                              ? "border-indigo-500 bg-indigo-55/60 text-indigo-650"
                              : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"
                          }`}
                        >
                          Arts & Science
                        </button>
                      </div>
                    </div>

                    {/* Department dropdown */}
                    {discipline && (
                      <div className="col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Select Your Department</label>
                        <select
                          required
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-semibold"
                        >
                          <option value="">-- Choose Department --</option>
                          {discipline === "engineering"
                            ? engineeringDepts.map((d) => (
                                <option key={d} value={d}>{d}</option>
                              ))
                            : artsScienceDepts.map((d) => (
                                <option key={d} value={d}>{d}</option>
                              ))
                          }
                        </select>
                      </div>
                    )}

                    {/* Academic Year */}
                    {discipline && (
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Current Year</label>
                        <select
                          required
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-semibold"
                        >
                          <option value="">-- Select Year --</option>
                          <option value="1st Year">1st Year</option>
                          <option value="2nd Year">2nd Year</option>
                          <option value="3rd Year">3rd Year</option>
                          {discipline === "engineering" && <option value="Final Year">Final Year</option>}
                        </select>
                      </div>
                    )}

                    {/* Current Semester */}
                    {discipline && (
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Current Semester</label>
                        <select
                          required
                          value={semester}
                          onChange={(e) => setSemester(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-semibold"
                        >
                          <option value="">-- Select Semester --</option>
                          {discipline === "engineering"
                            ? Array.from({ length: 8 }, (_, i) => (
                                <option key={i + 1} value={`Semester ${i + 1}`}>Semester {i + 1}</option>
                              ))
                            : Array.from({ length: 6 }, (_, i) => (
                                <option key={i + 1} value={`Semester ${i + 1}`}>Semester {i + 1}</option>
                              ))
                          }
                        </select>
                      </div>
                    )}
                  </div>

                  {discipline && (
                    <button
                      type="submit"
                      disabled={!department || !year || !semester}
                      className="w-full py-4 mt-6 bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-bold rounded-xl hover:from-blue-750 hover:to-indigo-750 transition active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/10"
                    >
                      Assemble Technical Assessment
                      <ArrowRight size={18} />
                    </button>
                  )}
                </form>
              ) : (
                // Graduate flow - form selector
                <form onSubmit={handleGraduateSubmit} className="space-y-6 max-w-xl mx-auto py-2 animate-fade-in">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-extrabold text-slate-900">Graduate Setup</h2>
                    <p className="text-slate-500 text-sm mt-1 font-semibold">Configure your specialization details to customize your transition roadmap.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Discipline select */}
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Select Specialization/Discipline</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => { setDiscipline("engineering"); setDepartment(""); }}
                          className={`p-4 rounded-xl border font-bold text-center transition cursor-pointer ${
                            discipline === "engineering"
                              ? "border-blue-500 bg-blue-55/60 text-blue-700"
                              : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"
                          }`}
                        >
                          Engineering
                        </button>
                        <button
                          type="button"
                          onClick={() => { setDiscipline("arts-science"); setDepartment(""); }}
                          className={`p-4 rounded-xl border font-bold text-center transition cursor-pointer ${
                            discipline === "arts-science"
                              ? "border-indigo-500 bg-indigo-55/60 text-indigo-750"
                              : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300"
                          }`}
                        >
                          Arts & Science
                        </button>
                      </div>
                    </div>

                    {/* Department dropdown */}
                    {discipline && (
                      <div className="col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Select Your Department</label>
                        <select
                          required
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-semibold"
                        >
                          <option value="">-- Choose Department --</option>
                          {discipline === "engineering"
                            ? engineeringDepts.map((d) => (
                                <option key={d} value={d}>{d}</option>
                              ))
                            : artsScienceDepts.map((d) => (
                                <option key={d} value={d}>{d}</option>
                              ))
                          }
                        </select>
                      </div>
                    )}

                    {/* Passed out year */}
                    {discipline && (
                      <div className="col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Passed Out Year</label>
                        <select
                          required
                          value={passedOutYear}
                          onChange={(e) => setPassedOutYear(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-slate-250 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 font-semibold"
                        >
                          <option value="">-- Select Year --</option>
                          <option value="2026">2026</option>
                          <option value="2025">2025</option>
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="Before 2022">Before 2022</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {discipline && (
                    <button
                      type="submit"
                      disabled={!department || !passedOutYear}
                      className="w-full py-4 mt-6 bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-bold rounded-xl hover:from-blue-750 hover:to-indigo-750 transition active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/10"
                    >
                      Assemble Technical Assessment
                      <ArrowRight size={18} />
                    </button>
                  )}
                </form>
              )}
            </div>
          )}
        </div>

        {/* Previous Button Footer */}
        {step !== "welcome" && (
          <div className="flex justify-between mt-6">
            <button
              onClick={previous}
              className="px-6 py-3 rounded-xl flex items-center gap-2 border border-slate-300 bg-white hover:bg-slate-50 transition text-slate-600 font-bold cursor-pointer"
            >
              <ArrowLeft size={16} />
              {step === "ready" && showStreamSelect ? "Back to Grades" : "Previous Step"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function StepCircle({
  number,
  active,
  completed,
}: {
  number: number;
  active: boolean;
  completed: boolean;
}) {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
        completed
          ? "bg-emerald-500 text-white"
          : active
          ? "bg-blue-600 text-white ring-4 ring-blue-100"
          : "bg-slate-200 text-slate-400"
      }`}
    >
      {completed ? "✓" : number}
    </div>
  );
}

function Line({ active }: { active: boolean }) {
  return <div className={`w-16 h-[2px] ${active ? "bg-blue-600" : "bg-slate-200"}`} />;
}

function FeatureCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 flex items-start gap-3">
      <div className="text-blue-650 mt-0.5">{icon}</div>
      <div>
        <h3 className="font-bold text-slate-900 text-sm">{title}</h3>
        <p className="text-slate-500 text-xs mt-0.5 font-semibold">{subtitle}</p>
      </div>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={16} className="text-emerald-300 shrink-0" />
      <span className="text-sm text-white/95 font-semibold">{text}</span>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/10 border border-white/10 p-3">
      <div className="text-lg lg:text-xl font-black text-white">{value}</div>
      <div className="text-[10px] text-white/60 font-bold uppercase mt-0.5">{label}</div>
    </div>
  );
}

function Rule({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-left">
      <CheckCircle2 size={16} className="text-emerald-500 mt-1 shrink-0" />
      <p className="text-slate-700 text-sm font-semibold leading-relaxed">{text}</p>
    </div>
  );
}
