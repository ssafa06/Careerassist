// src/pages/assessment/Assessment.tsx

import { useState, useMemo, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw
} from "lucide-react";

import AssessmentSidebar from "../../components/AssessmentSidebar";
import QuestionField from "../../components/assessment/QuestionField";
import { supabase } from "../../lib/supabase";
import type { AnyQuestion } from "../../types/assessment.type";
import { assessmentSections } from "../../data/assessmentData";
import AssessmentStart from "./AssessmentStart";
import {
  collegeLayerOneSections,
  collegeLayerTwoQuestions,
  collegeLayerThreeQuestions,
  collegeLayerFourQuestions
} from "../../data/assessment/collegeQuestions";

// ======================================================
// Types
// ======================================================

interface AssessmentSection {
  id: string;
  title: string;
  subtitle: string;
  layer: number;
  questions: AnyQuestion[];
}

// ======================================================
// Component
// ======================================================

export default function Assessment() {
  const navigate = useNavigate();
  const location = useLocation();

  // ======================================================
  // Resolve Configuration (Type, Grade, Stream, Department)
  // ======================================================

  const state = location.state as {
    type?: "school" | "college";
    grade?: string;
    stream?: string;
    discipline?: "engineering" | "arts-science";
    department?: string;
    year?: string;
    semester?: string;
  } | null;

  const [assessmentConfig, setAssessmentConfig] = useState<{
    type: "school" | "college";
    grade?: string;
    stream?: string;
    discipline?: "engineering" | "arts-science";
    department?: string;
    year?: string;
    semester?: string;
  } | null>(null);

  useEffect(() => {
    if (state?.type) {
      setAssessmentConfig({
        type: state.type as "school" | "college",
        grade: state.grade,
        stream: state.stream,
        discipline: state.discipline,
        department: state.department,
        year: state.year,
        semester: state.semester
      });
      localStorage.setItem("careerassist_assessment_config", JSON.stringify(state));
      return;
    }

    const savedConfig = localStorage.getItem("careerassist_assessment_config");
    if (savedConfig) {
      try {
        setAssessmentConfig(JSON.parse(savedConfig));
      } catch (err) {
        console.warn("Unable to parse assessment config from localStorage.", err);
      }
    }
  }, [state]);

  const grade = assessmentConfig?.grade || "9-10";
  const stream = assessmentConfig?.stream || "General";

  const totalSteps = useMemo(() => {
    return assessmentConfig?.type === "college" ? 4 : 5;
  }, [assessmentConfig]);

  // ======================================================
  // State
  // ======================================================

  const [currentStep, setCurrentStep] = useState(1);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper to map raw database sections to standard frontend AssessmentSection
  const mapSection = useCallback((sec: any, layer: number, defaultSubtitle = ""): AssessmentSection => {
    return {
      id: sec.id || "",
      title: sec.title || "",
      subtitle: sec.description || sec.subtitle || defaultSubtitle,
      layer: layer,
      questions: (sec.questions || []) as AnyQuestion[],
    };
  }, []);

  // ======================================================
  // Compile Steps & Sections (Dynamic & Data-driven)
  // ======================================================

  // Step 1: Layer 1 – Personal Details & Academic Profile
  const step1Sections = useMemo(() => {
    if (assessmentConfig?.type === "college") {
      return collegeLayerOneSections.map((sec) => ({
        id: sec.id,
        title: sec.title,
        subtitle: "Fill in your personal, academic, and goals details.",
        layer: 1,
        questions: sec.questions as AnyQuestion[],
      }));
    }

    const list: AssessmentSection[] = [];
    if (Array.isArray(assessmentSections.layerOne)) {
      assessmentSections.layerOne.forEach((sec) => {
        list.push(mapSection(sec, 1, "Fill in your background details."));
      });
    }
    return list;
  }, [assessmentConfig, mapSection]);

  // Step 2: Layer 2 – Psychometric Assessment
  const step2Sections = useMemo(() => {
    if (assessmentConfig?.type === "college") {
      return [
        {
          id: "college_psychometric",
          title: "Psychometric Assessment",
          subtitle: "Understand your learning agility, adaptability, and teamwork mindset.",
          layer: 2,
          questions: collegeLayerTwoQuestions as AnyQuestion[],
        },
      ];
    }

    const list: AssessmentSection[] = [];
    const l2 = assessmentSections.layerTwo;
    const l2Keys: (keyof typeof l2)[] = [
      "bigFive",
      "careerInterest",
      "multipleIntelligence",
      "learningStyle",
      "emotionalIntelligence",
    ];
    l2Keys.forEach((key) => {
      const sec = l2[key];
      if (sec && !Array.isArray(sec)) {
        list.push(mapSection(sec, 2, "Understand your style and personality traits."));
      }
    });
    return list;
  }, [assessmentConfig, mapSection]);

  // Step 3: Layer 3 – Cognitive Assessment
  const step3Sections = useMemo(() => {
    if (assessmentConfig?.type === "college") {
      return [
        {
          id: "college_logical",
          title: "Logical & Cognitive Assessment",
          subtitle: "Test your logical reasoning, analytical thinking, and quantitative ability.",
          layer: 3,
          questions: collegeLayerThreeQuestions as AnyQuestion[],
        },
      ];
    }

    const list: AssessmentSection[] = [];
    const l3 = assessmentSections.layerThree;
    if (grade === "6-8") {
      if (l3.cognitive68) {
        list.push(mapSection(l3.cognitive68, 3, "Test your cognitive capabilities."));
      }
    } else {
      if (l3.cognitive912) {
        list.push(mapSection(l3.cognitive912, 3, "Test your cognitive capabilities."));
      }
    }
    return list;
  }, [assessmentConfig, grade, mapSection]);

  // Step 4: Layer 4 – Skill Assessment
  const step4Sections = useMemo(() => {
    if (assessmentConfig?.type === "college") {
      const dept = assessmentConfig.department || answers["department"] || "";
      let streamKey = "other";

      if (assessmentConfig.discipline === "arts-science") {
        const normDept = dept.toLowerCase();
        if (normDept.includes("commerce") || normDept.includes("business")) {
          streamKey = "commerce";
        } else if (
          normDept.includes("science") ||
          normDept.includes("math") ||
          normDept.includes("physics") ||
          normDept.includes("chemistry") ||
          normDept.includes("biology")
        ) {
          streamKey = "science";
        } else {
          streamKey = "humanities";
        }
      } else {
        const normDept = dept.toLowerCase();
        if (
          normDept.includes("computer science") ||
          normDept.includes("cyber security") ||
          normDept.includes("cybersecurity")
        ) {
          streamKey = "cse";
        } else if (normDept.includes("information technology")) {
          streamKey = "it";
        } else if (
          normDept.includes("data science") ||
          normDept.includes("artificial intelligence & data science")
        ) {
          streamKey = "aids";
        } else if (
          normDept.includes("machine learning") ||
          normDept.includes("artificial intelligence & machine learning")
        ) {
          streamKey = "aiml";
        } else if (normDept.includes("electronics") || normDept.includes("communication")) {
          streamKey = "ece";
        } else if (normDept.includes("electrical") || normDept.includes("power")) {
          streamKey = "eee";
        } else if (
          normDept.includes("mechanical") ||
          normDept.includes("automobile") ||
          normDept.includes("aeronautical")
        ) {
          streamKey = "mechanical";
        } else if (normDept.includes("civil")) {
          streamKey = "civil";
        } else if (normDept.includes("chemical")) {
          streamKey = "chemical";
        } else if (normDept.includes("biomedical")) {
          streamKey = "biomedical";
        } else if (normDept.includes("biotech") || normDept.includes("biotechnology")) {
          streamKey = "biotech";
        } else if (normDept.includes("mechatronics")) {
          streamKey = "mechatronics";
        } else if (normDept.includes("robotics")) {
          streamKey = "robotics";
        } else if (normDept.includes("business system") || normDept.includes("csbs")) {
          streamKey = "csbs";
        } else {
          streamKey = "other";
        }
      }

      const qList = collegeLayerFourQuestions[streamKey] || collegeLayerFourQuestions["other"] || [];
      return [
        {
          id: "college_technical",
          title: "Technical Stream Assessment",
          subtitle: `Assess your core technical competency and practical problem solving in ${dept}.`,
          layer: 4,
          questions: qList as AnyQuestion[],
        },
      ];
    }

    const list: AssessmentSection[] = [];
    const l4 = assessmentSections.layerFour;
    if (grade === "6-8") {
      if (l4.skills68) {
        list.push(mapSection(l4.skills68, 4, "Assess your core skills."));
      }
    } else if (grade === "9-10") {
      if (l4.skills910) {
        list.push(mapSection(l4.skills910, 4, "Assess your core skills."));
      }
    } else if (grade === "11-12") {
      if (l4.skills1112) {
        list.push(mapSection(l4.skills1112, 4, "Assess your core skills."));
      }

      const normalizedStream = stream.toLowerCase();
      if (normalizedStream.includes("science")) {
        if (l4.scienceStream) list.push(mapSection(l4.scienceStream, 4, "Explore your science stream capabilities."));
      } else if (normalizedStream.includes("commerce")) {
        if (l4.commerceStream) list.push(mapSection(l4.commerceStream, 4, "Explore your commerce stream capabilities."));
      } else if (normalizedStream.includes("arts") || normalizedStream.includes("humanities")) {
        if (l4.artsStream) list.push(mapSection(l4.artsStream, 4, "Explore your arts & humanities stream capabilities."));
      } else if (normalizedStream.includes("vocational")) {
        if (l4.vocationalStream) list.push(mapSection(l4.vocationalStream, 4, "Explore your vocational stream capabilities."));
      }
    }
    return list;
  }, [assessmentConfig, answers, grade, stream, mapSection]);

  // Step 5: Layer 5 – Behaviour Assessment
  const step5Sections = useMemo(() => {
    if (assessmentConfig?.type === "college") {
      return [];
    }

    const list: AssessmentSection[] = [];
    const l5 = assessmentSections.layerFive;
    if (l5.behaviour) {
      list.push(mapSection(l5.behaviour, 5, "Understand your behaviour patterns."));
    }
    return list;
  }, [assessmentConfig, mapSection]);

  // Map of steps to their sections
  const stepSectionsMap = useMemo(() => {
    return {
      1: step1Sections,
      2: step2Sections,
      3: step3Sections,
      4: step4Sections,
      5: step5Sections,
    };
  }, [step1Sections, step2Sections, step3Sections, step4Sections, step5Sections]);

  // All sections compiled for sidebar context
  const allSections = useMemo(() => {
    return [
      ...step1Sections,
      ...step2Sections,
      ...step3Sections,
      ...step4Sections,
      ...step5Sections,
    ];
  }, [step1Sections, step2Sections, step3Sections, step4Sections, step5Sections]);

  // Active step sections list
  const currentSections = useMemo(() => {
    return stepSectionsMap[currentStep as keyof typeof stepSectionsMap] || [];
  }, [stepSectionsMap, currentStep]);

  // Active section object
  const currentSection = useMemo(() => {
    return currentSections[currentSectionIndex] || null;
  }, [currentSections, currentSectionIndex]);

  // ======================================================
  // Progress Calculations
  // ======================================================

  const totalQuestions = useMemo(() => {
    return allSections.reduce((sum, sec) => sum + sec.questions.length, 0);
  }, [allSections]);

  const answeredQuestions = useMemo(() => {
    let count = 0;
    allSections.forEach((sec) => {
      sec.questions.forEach((q) => {
        const val = answers[q.id];
        if (val !== undefined && val !== null && val !== "" && (!Array.isArray(val) || val.length > 0)) {
          count++;
        }
      });
    });
    return count;
  }, [allSections, answers]);

  const overallProgress = useMemo(() => {
    if (totalQuestions === 0) return 0;
    return Math.round((answeredQuestions / totalQuestions) * 100);
  }, [answeredQuestions, totalQuestions]);

  const currentSectionQuestions = currentSection?.questions || [];
  const sectionAnswered = useMemo(() => {
    return currentSectionQuestions.filter((q) => {
      const val = answers[q.id];
      return val !== undefined && val !== null && val !== "" && (!Array.isArray(val) || val.length > 0);
    }).length;
  }, [currentSectionQuestions, answers]);

  const sectionProgress = useMemo(() => {
    if (currentSectionQuestions.length === 0) return 0;
    return Math.round((sectionAnswered / currentSectionQuestions.length) * 100);
  }, [sectionAnswered, currentSectionQuestions]);

  const isLastSectionOfLastStep = useMemo(() => {
    return currentStep === totalSteps && currentSectionIndex === currentSections.length - 1;
  }, [currentStep, currentSectionIndex, currentSections.length, totalSteps]);

  // ======================================================
  // Local Storage Save & Restore
  // ======================================================

  useEffect(() => {
    const loadInitialData = async () => {
      const saved = localStorage.getItem("careerassist_wizard_answers");
      if (saved) {
        try {
          setAnswers(JSON.parse(saved));
          return;
        } catch (err) {
          console.warn("Unable to restore session answers from localStorage.", err);
        }
      }

      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (user) {
          const { data } = await supabase
            .from("assessments")
            .select("assessment_data")
            .eq("user_id", user.id)
            .maybeSingle();

          if (data && data.assessment_data) {
            setAnswers(data.assessment_data);
          }
        }
      } catch (err) {
        console.warn("Unable to restore session answers from Supabase.", err);
      }
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    if (Object.keys(answers).length > 0) {
      localStorage.setItem("careerassist_wizard_answers", JSON.stringify(answers));
    }
  }, [answers]);

  // ======================================================
  // Keyboard & Window Scroll Handling
  // ======================================================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentStep, currentSectionIndex]);

  // ======================================================
  // Operations & Handlers
  // ======================================================

  const saveAnswer = useCallback((questionId: string, value: any) => {
    setAnswers((prev) => {
      const updated = {
        ...prev,
        [questionId]: value,
      };

      if (value !== undefined && value !== null && value !== "" && (!Array.isArray(value) || value.length > 0)) {
        setErrors((prevErrors) => {
          const nextErrors = { ...prevErrors };
          delete nextErrors[questionId];
          return nextErrors;
        });
      }

      return updated;
    });
  }, []);

  const validateCurrentSection = useCallback(() => {
    if (!currentSection) return true;
    const newErrors: Record<string, string> = {};
    let isValid = true;

    currentSection.questions.forEach((q) => {
      const isRequired = (q as any).required !== false;
      if (isRequired) {
        const val = answers[q.id];
        const qType = (q as any).type || (q as any).model;
        if (qType === "ranking") {
          const expectedCount = ((q as any).options || []).length;
          if (!Array.isArray(val) || val.length < expectedCount) {
            newErrors[q.id] = `Please rank all ${expectedCount} activities.`;
            isValid = false;
          }
        } else if (val === undefined || val === null || val === "" || (Array.isArray(val) && val.length === 0)) {
          newErrors[q.id] = "This question is required.";
          isValid = false;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [currentSection, answers]);

  const handleStepClick = useCallback((targetStep: number) => {
    if (targetStep < currentStep) {
      setCurrentStep(targetStep);
      setCurrentSectionIndex(0);
      setErrors({});
    } else if (targetStep > currentStep) {
      if (validateCurrentSection()) {
        setCurrentStep(targetStep);
        setCurrentSectionIndex(0);
        setErrors({});
      }
    }
  }, [currentStep, validateCurrentSection]);

  const handleBack = useCallback(() => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setErrors({});
    } else if (currentStep > 1) {
      const prevStep = currentStep - 1;
      const prevSections = stepSectionsMap[prevStep as keyof typeof stepSectionsMap] || [];
      setCurrentStep(prevStep);
      setCurrentSectionIndex(prevSections.length - 1);
      setErrors({});
    }
  }, [currentStep, currentSectionIndex, stepSectionsMap]);

  const syncProgressToSupabase = useCallback(async (currentAnswers: Record<string, any>) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const percent = Math.min(99, overallProgress);

      const { data: existing } = await supabase
        .from("assessments")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle();

      if (existing) {
        await supabase
          .from("assessments")
          .update({
            assessment_data: currentAnswers,
            completion_percentage: percent,
            status: "in_progress",
          })
          .eq("id", existing.id);
      } else {
        await supabase
          .from("assessments")
          .insert({
            user_id: user.id,
            assessment_data: currentAnswers,
            completion_percentage: percent,
            status: "in_progress",
          });
      }
    } catch (err) {
      console.warn("Failed to sync progress to database.", err);
    }
  }, [overallProgress]);

  const submitAssessment = useCallback(async () => {
    setIsSubmitting(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Session expired. Please log in again.");
        navigate("/login");
        return;
      }

      const { data: existing } = await supabase
        .from("assessments")
        .select("id")
        .eq("user_id", user.id)
        .maybeSingle();

      let error;
      if (existing) {
        const { error: err } = await supabase
          .from("assessments")
          .update({
            assessment_data: answers,
            completion_percentage: 100,
            status: "completed",
          })
          .eq("id", existing.id);
        error = err;
      } else {
        const { error: err } = await supabase
          .from("assessments")
          .insert({
            user_id: user.id,
            assessment_data: answers,
            completion_percentage: 100,
            status: "completed",
          });
        error = err;
      }

      if (error) {
        console.error(error);
        alert("Failed to submit assessment: " + error.message);
        return;
      }

      localStorage.setItem("assessmentData", JSON.stringify(answers));
      localStorage.setItem("assessmentConfig", JSON.stringify(assessmentConfig));
      localStorage.removeItem("careerassist_wizard_answers");
      localStorage.removeItem("careerassist_assessment_config");

      navigate("/report");
    } catch (err: any) {
      console.error(err);
      alert("Submission error: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  }, [answers, assessmentConfig, navigate]);

  const handleNext = useCallback(async () => {
    if (validateCurrentSection()) {
      await syncProgressToSupabase(answers);

      if (currentSectionIndex < currentSections.length - 1) {
        setCurrentSectionIndex(currentSectionIndex + 1);
      } else if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
        setCurrentSectionIndex(0);
      } else {
        await submitAssessment();
      }
    } else {
      setTimeout(() => {
        const firstErrorEl = document.querySelector(".border-red-300");
        if (firstErrorEl) {
          firstErrorEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  }, [currentStep, currentSectionIndex, currentSections.length, totalSteps, validateCurrentSection, submitAssessment, answers, syncProgressToSupabase]);

  const handleReset = useCallback(() => {
    if (window.confirm("Are you sure you want to clear your progress and start over?")) {
      setAnswers({});
      setErrors({});
      setCurrentStep(1);
      setCurrentSectionIndex(0);
      setAssessmentConfig(null);
      localStorage.removeItem("careerassist_wizard_answers");
      localStorage.removeItem("careerassist_assessment_config");
    }
  }, []);

  const handleStartSetup = (config: any) => {
    setAssessmentConfig(config);
    localStorage.setItem("careerassist_assessment_config", JSON.stringify(config));
  };

  // Render Setup if configuration is not yet active
  if (!assessmentConfig) {
    return <AssessmentStart onStart={handleStartSetup} />;
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-3">
            <AssessmentSidebar
              sections={currentSections}
              currentSection={currentSectionIndex}
              progress={overallProgress}
              onSelectSection={setCurrentSectionIndex}
            />
          </div>

          {/* Main Area */}
          <div className="col-span-9">
            {/* Step Wizard Header */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 mb-8">
              <div className="flex justify-between items-center max-w-3xl mx-auto">
                {(assessmentConfig.type === "college"
                  ? [
                      { step: 1, label: "L1: Profile" },
                      { step: 2, label: "L2: Psychometric" },
                      { step: 3, label: "L3: Logical" },
                      { step: 4, label: "L4: Technical" },
                    ]
                  : [
                      { step: 1, label: "L1: Profile" },
                      { step: 2, label: "L2: Psychometric" },
                      { step: 3, label: "L3: Cognitive" },
                      { step: 4, label: "L4: Skills" },
                      { step: 5, label: "L5: Behaviour" },
                    ]
                ).map((item) => {
                  const isCurrent = currentStep === item.step;
                  const isCompleted = currentStep > item.step;
                  return (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => handleStepClick(item.step)}
                      className="flex flex-col items-center gap-2 group focus:outline-none"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                          isCurrent
                            ? "bg-blue-600 text-white ring-4 ring-blue-100"
                            : isCompleted
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                        }`}
                      >
                        {isCompleted ? "✓" : item.step}
                      </div>
                      <span
                        className={`text-xs font-bold transition-colors ${
                          isCurrent ? "text-blue-600" : isCompleted ? "text-emerald-600" : "text-slate-500"
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section Header */}
            {currentSection && (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-blue-600 font-semibold uppercase tracking-wider text-xs">
                      Layer {currentSection.layer} · Step {currentStep} of {totalSteps}
                    </p>
                    <h1 className="text-3xl font-extrabold mt-2 text-slate-900">{currentSection.title}</h1>
                    <p className="mt-2 text-slate-500 font-medium">{currentSection.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-extrabold text-blue-600">{sectionProgress}%</div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mt-1">Section Completed</p>
                  </div>
                </div>
              </div>
            )}

            {/* Questions Container */}
            {currentSection && (
              <div className="space-y-6">
                {currentSection.questions.map((q) => (
                  <QuestionField
                    key={q.id}
                    question={q}
                    value={answers[q.id]}
                    onChange={(val) => saveAnswer(q.id, val)}
                    error={errors[q.id]}
                  />
                ))}
              </div>
            )}

            {/* Navigation Footer */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-3 rounded-xl border border-red-200 hover:bg-red-50 text-red-600 transition-all font-semibold flex items-center gap-2"
              >
                <RotateCcw size={18} />
                Reset
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 1 && currentSectionIndex === 0}
                  className="px-6 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all text-slate-600 font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all disabled:opacity-50 flex items-center gap-2 shadow-lg active:scale-95 animate-fade-in"
                >
                  {isLastSectionOfLastStep ? (
                    isSubmitting ? "Submitting..." : "Submit Assessment"
                  ) : (
                    <>
                      Next
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}