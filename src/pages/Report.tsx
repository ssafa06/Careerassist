import { collegeLayerTwoQuestions, collegeLayerThreeQuestions, collegeLayerFourQuestions } from "../data/assessment/collegeQuestions";
import { useEffect, useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { supabase } from "../lib/supabase";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
// ─── Rating Score Map ─────────────────────────────────────────────────────────
const RS: Record<string, number> = {
  Poor: 1,
  Fair: 2,
  Good: 3,
  "Very Good": 4,
  Excellent: 5,
};
const r = (data: any, field: string) => RS[data?.[field]] ?? 0;

// ─── Domain Score Engine ──────────────────────────────────────────────────────
const generateDomainScores = (data: any) => {
  const s = {
    technology: 0,
    business: 0,
    medicine: 0,
    government: 0,
    creative: 0,
  };
  const grade = Number(data.grade || 0);
  const pct = Number(data.percentage || 0);

  const academicBonus = (
    techW: number,
    medW: number,
    bizW: number,
    govW: number,
    creW: number,
  ) => {
    const t = pct >= 90 ? 1 : pct >= 75 ? 0.75 : pct >= 60 ? 0.5 : 0.2;
    s.technology += techW * t;
    s.medicine += medW * t;
    s.business += bizW * t;
    s.government += govW * t;
    s.creative += creW * t;
  };

  const applyInterest = (weight: number) => {
    const map: Record<string, keyof typeof s> = {
      Technology: "technology",
      Business: "business",
      Medicine: "medicine",
      "Civil Services": "government",
      Government: "government",
      Arts: "creative",
    };
    const key = map[data.learningInterest];
    if (key) s[key] += weight;
  };

  const applySkills = (mult: number) => {
    s.technology +=
      (r(data, "coding") * 2 +
        r(data, "logicalReasoning") * 2 +
        r(data, "computerKnowledge")) *
      mult;
    s.business +=
      (r(data, "management") * 2 +
        r(data, "negotiation") * 2 +
        r(data, "selling")) *
      mult;
    s.medicine +=
      (r(data, "quickLearner") * 3 + r(data, "criticalThinking") * 2) * mult;
    s.government +=
      (r(data, "logicalReasoning") * 2 +
        r(data, "writing") * 2 +
        r(data, "criticalThinking")) *
      mult;
    s.creative +=
      (r(data, "design") * 2 +
        r(data, "creativeSolutions") * 2 +
        r(data, "videoEditing")) *
      mult;
  };

  const applyPersonality = (mult: number) => {
    s.technology +=
      (r(data, "focusAbility") + r(data, "timeManagement")) * mult;
    s.business += (r(data, "leadership") + r(data, "publicSpeaking")) * mult;
    s.medicine += (r(data, "teamwork") + r(data, "focusAbility")) * mult;
    s.government += (r(data, "timeManagement") + r(data, "leadership")) * mult;
    s.creative += (r(data, "presentation") + r(data, "publicSpeaking")) * mult;
  };

  if (grade < 10) {
    applyInterest(40);
    applySkills(1);
    applyPersonality(2);
    const goalMap: Record<string, keyof typeof s> = {
      Technology: "technology",
      Business: "business",
      Medicine: "medicine",
      Government: "government",
      Arts: "creative",
    };
    const gk = goalMap[data.futureGoal];
    if (gk) s[gk] += 15;
  } else if (grade === 10) {
    applyInterest(35);
    academicBonus(25, 25, 25, 25, 25);
    applySkills(1);
    applyPersonality(1.5);
  } else {
    academicBonus(30, 30, 28, 28, 25);
    if (data.stream === "PCM") s.technology += 20;
    if (data.stream === "PCB") s.medicine += 20;
    if (data.stream === "Commerce") s.business += 20;
    if (data.stream === "Arts") {
      s.creative += 20;
      s.government += 10;
    }
    if (data.stream === "PCMB") {
      s.technology += 10;
      s.medicine += 10;
    }
    applyInterest(20);
    applySkills(0.6);
    applyPersonality(1);
    const goalMap2: Record<string, keyof typeof s> = {
      Technology: "technology",
      Business: "business",
      Medicine: "medicine",
      Government: "government",
      Arts: "creative",
    };
    const gk2 = goalMap2[data.futureGoal];
    if (gk2) s[gk2] += 5;
  }

  if (data.neetInterest === "Yes") s.medicine += 15;
  if (data.businessBackground === "Yes") s.business += 10;
  if (data.aiAwareness === "Yes") s.technology += 8;
  if (data.artisticPerson === "Yes") s.creative += 10;
  if (data.interestedInIT === "Yes") s.technology += 12;
  if (data.codingKnowledge === "Advanced") s.technology += 15;
  if (data.codingKnowledge === "Intermediate") s.technology += 8;

  const max = Math.max(...Object.values(s), 1);
  return Object.fromEntries(
    Object.entries(s).map(([k, v]) => [
      k,
      Math.min(Math.round((v / max) * 100), 100),
    ]),
  ) as typeof s;
};

// ─── Career Catalog ───────────────────────────────────────────────────────────
type CareerEntry = {
  role: string;
  degree: string;
  domain: string;
  demand: string;
  salary: string;
  growth: string;
};

const careerCatalog: Record<string, CareerEntry[]> = {
  PCM: [
    {
      role: "Software Engineer",
      degree: "B.Tech Computer Science",
      domain: "technology",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth Outlook",
    },
    {
      role: "AI Engineer",
      degree: "B.Tech AI & ML",
      domain: "technology",
      demand: "Very High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Data Scientist",
      degree: "B.Sc Data Science",
      domain: "technology",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth Outlook",
    },
    {
      role: "Cyber Security Analyst",
      degree: "B.Tech Cyber Security",
      domain: "technology",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Data Engineer",
      degree: "B.Tech Computer Science",
      domain: "technology",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth",
    },
    {
      role: "Architect",
      degree: "B.Arch",
      domain: "creative",
      demand: "Steady Demand",
      salary: "Moderate-High Salary",
      growth: "Stable Growth",
    },
    {
      role: "Civil Engineer",
      degree: "B.Tech Civil",
      domain: "technology",
      demand: "Steady Demand",
      salary: "Moderate Salary",
      growth: "Stable Growth",
    },
    {
      role: "Mechanical Engineer",
      degree: "B.Tech Mechanical",
      domain: "technology",
      demand: "Steady Demand",
      salary: "Moderate Salary",
      growth: "Stable Growth",
    },
  ],
  PCB: [
    {
      role: "Doctor",
      degree: "MBBS",
      domain: "medicine",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Dentist",
      degree: "BDS",
      domain: "medicine",
      demand: "Steady Demand",
      salary: "High Salary Potential",
      growth: "Stable Growth",
    },
    {
      role: "Nurse",
      degree: "B.Sc Nursing",
      domain: "medicine",
      demand: "High Demand",
      salary: "Moderate Salary",
      growth: "Strong Growth",
    },
    {
      role: "Physiotherapist",
      degree: "BPT",
      domain: "medicine",
      demand: "Growing Demand",
      salary: "Moderate Salary",
      growth: "Strong Growth",
    },
    {
      role: "Pharmacist",
      degree: "B.Pharm",
      domain: "medicine",
      demand: "Steady Demand",
      salary: "Moderate Salary",
      growth: "Stable Growth",
    },
    {
      role: "Biotechnologist",
      degree: "B.Sc Biotechnology",
      domain: "medicine",
      demand: "Growing Demand",
      salary: "Moderate-High Salary",
      growth: "Strong Growth",
    },
  ],
  Commerce: [
    {
      role: "Chartered Accountant",
      degree: "CA (ICAI)",
      domain: "business",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Business Analyst",
      degree: "BBA",
      domain: "business",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth Outlook",
    },
    {
      role: "Marketing Manager",
      degree: "B.Com + MBA",
      domain: "business",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth",
    },
    {
      role: "Financial Analyst",
      degree: "B.Com Finance",
      domain: "business",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Entrepreneur",
      degree: "BBA + MBA",
      domain: "business",
      demand: "Always Relevant",
      salary: "Unlimited Potential",
      growth: "High Risk-High Reward",
    },
    {
      role: "CMA",
      degree: "CMA (ICMAI)",
      domain: "business",
      demand: "Steady Demand",
      salary: "High Salary Potential",
      growth: "Stable Growth",
    },
    {
      role: "Bank PO",
      degree: "B.Com",
      domain: "government",
      demand: "High Demand",
      salary: "Moderate-High Salary",
      growth: "Stable Growth",
    },
  ],
  Arts: [
    {
      role: "Graphic Designer",
      degree: "B.Des",
      domain: "creative",
      demand: "High Demand",
      salary: "Moderate-High Salary",
      growth: "Strong Growth",
    },
    {
      role: "UI UX Designer",
      degree: "B.Des",
      domain: "creative",
      demand: "Very High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Journalist",
      degree: "B.A. Journalism",
      domain: "creative",
      demand: "Steady Demand",
      salary: "Moderate Salary",
      growth: "Stable Growth",
    },
    {
      role: "Psychologist",
      degree: "B.A. Psychology",
      domain: "creative",
      demand: "Growing Demand",
      salary: "Moderate Salary",
      growth: "Strong Growth",
    },
    {
      role: "Lawyer",
      degree: "LLB",
      domain: "government",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth",
    },
    {
      role: "IAS Officer",
      degree: "Any Degree + UPSC",
      domain: "government",
      demand: "Prestigious Role",
      salary: "Moderate + Benefits",
      growth: "Strong Career",
    },
    {
      role: "Photographer",
      degree: "Visual Arts Diploma",
      domain: "creative",
      demand: "Steady Demand",
      salary: "Variable Salary",
      growth: "Moderate Growth",
    },
  ],
  PCMB: [
    {
      role: "Doctor",
      degree: "MBBS",
      domain: "medicine",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Software Engineer",
      degree: "B.Tech Computer Science",
      domain: "technology",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth Outlook",
    },
    {
      role: "AI Engineer",
      degree: "B.Tech AI & ML",
      domain: "technology",
      demand: "Very High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Biotechnologist",
      degree: "B.Sc Biotechnology",
      domain: "medicine",
      demand: "Growing Demand",
      salary: "Moderate-High Salary",
      growth: "Strong Growth",
    },
    {
      role: "Data Scientist",
      degree: "B.Sc Data Science",
      domain: "technology",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth",
    },
    {
      role: "Pharmacist",
      degree: "B.Pharm",
      domain: "medicine",
      demand: "Steady Demand",
      salary: "Moderate Salary",
      growth: "Stable Growth",
    },
  ],
  General: [
    {
      role: "Software Engineer",
      degree: "B.Tech Computer Science",
      domain: "technology",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth Outlook",
    },
    {
      role: "AI Engineer",
      degree: "B.Tech AI & ML",
      domain: "technology",
      demand: "Very High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "Data Scientist",
      degree: "B.Sc Data Science",
      domain: "technology",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth Outlook",
    },
    {
      role: "Business Analyst",
      degree: "BBA",
      domain: "business",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth Outlook",
    },
    {
      role: "Marketing Manager",
      degree: "B.Com + MBA",
      domain: "business",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth",
    },
    {
      role: "Doctor",
      degree: "MBBS",
      domain: "medicine",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Excellent Growth",
    },
    {
      role: "IAS Officer",
      degree: "Any Degree + UPSC",
      domain: "government",
      demand: "Prestigious Role",
      salary: "Moderate + Benefits",
      growth: "Strong Career",
    },
    {
      role: "Graphic Designer",
      degree: "B.Des",
      domain: "creative",
      demand: "High Demand",
      salary: "Moderate-High Salary",
      growth: "Strong Growth",
    },
    {
      role: "Journalist",
      degree: "B.A. Journalism",
      domain: "creative",
      demand: "Steady Demand",
      salary: "Moderate Salary",
      growth: "Stable Growth",
    },
    {
      role: "Entrepreneur",
      degree: "BBA + MBA",
      domain: "business",
      demand: "Always Relevant",
      salary: "Unlimited Potential",
      growth: "High Reward",
    },
    {
      role: "Nurse",
      degree: "B.Sc Nursing",
      domain: "medicine",
      demand: "High Demand",
      salary: "Moderate Salary",
      growth: "Strong Growth",
    },
    {
      role: "Lawyer",
      degree: "LLB",
      domain: "government",
      demand: "High Demand",
      salary: "High Salary Potential",
      growth: "Strong Growth",
    },
  ],
};

// ─── Recommendation Engine ────────────────────────────────────────────────────
const generateRecommendations = (
  data: any,
): (CareerEntry & { score: number; matchLabel: string })[] => {
  const domainScores = generateDomainScores(data);
  const grade = Number(data.grade || 0);
  const stream = data.stream || "General";
  let catalog = careerCatalog[stream] ?? careerCatalog["General"];

  if (grade < 10) catalog = careerCatalog["General"];

  if (
    stream === "PCB" &&
    data.coding === "Excellent" &&
    data.learningInterest === "Technology"
  ) {
    catalog = [
      ...catalog,
      {
        role: "Software Engineer",
        degree: "B.Tech Computer Science",
        domain: "technology",
        demand: "High Demand",
        salary: "High Salary Potential",
        growth: "Strong Growth",
      },
    ];
  }

  const scored = catalog.map((career) => {
    const base = domainScores[career.domain as keyof typeof domainScores] ?? 50;
    let bonus = 0;
    if (career.domain === "technology" && data.codingKnowledge === "Advanced")
      bonus += 8;
    if (career.domain === "medicine" && data.neetInterest === "Yes")
      bonus += 10;
    if (career.domain === "business" && data.businessBackground === "Yes")
      bonus += 8;
    if (career.domain === "creative" && data.artisticPerson === "Yes")
      bonus += 8;
    if (
      career.domain === "government" &&
      data.desiredLifestyle === "Government Job"
    )
      bonus += 10;
    const jitter = career.role.length % 5;
    const score = Math.min(Math.max(base + bonus - jitter, 35), 100);
    const matchLabel =
      score >= 95
        ? "Best Match"
        : score >= 85
          ? "Excellent Match"
          : score >= 75
            ? "Great Match"
            : "Good Match";
    return { ...career, score, matchLabel };
  });

  return scored.sort((a, b) => b.score - a.score).slice(0, 4);
};

// ─── Career Icons ─────────────────────────────────────────────────────────────
const careerIcons: Record<string, string> = {
  "Software Engineer": "💻",
  "AI Engineer": "🤖",
  "Data Scientist": "🧠",
  "Data Engineer": "📊",
  "Cyber Security Analyst": "🔐",
  "Business Analyst": "📈",
  "Marketing Manager": "📣",
  Entrepreneur: "🚀",
  "Chartered Accountant": "📑",
  CMA: "📑",
  "Financial Analyst": "💰",
  Doctor: "🩺",
  Dentist: "🦷",
  Nurse: "💊",
  Physiotherapist: "🏥",
  Pharmacist: "💉",
  Biotechnologist: "🔬",
  "IAS Officer": "🏛️",
  "Bank PO": "🏦",
  "Graphic Designer": "🎨",
  "UI UX Designer": "🖌️",
  Photographer: "📷",
  Journalist: "📰",
  Psychologist: "🧘",
  Lawyer: "⚖️",
  Architect: "🏗️",
  "Civil Engineer": "🏗️",
  "Mechanical Engineer": "⚙️",
};

// ─── Personality Strengths ────────────────────────────────────────────────────
const getPersonalityStrengths = (data: any) => {
  const traits: { label: string; level: string; color: string }[] = [];
  const add = (label: string, field: string) => {
    const val = RS[data?.[field]] ?? 0;
    const level =
      val >= 4 ? "High" : val >= 3 ? "Medium" : val >= 2 ? "Low" : "";
    const color =
      val >= 4
        ? "text-green-600"
        : val >= 3
          ? "text-orange-500"
          : "text-red-500";
    if (val >= 2) traits.push({ label, level, color });
  };
  add("Learning Agility", "quickLearner");
  add("Logical Reasoning", "logicalReasoning");
  add("Curiosity", "knowledgeSeeking");
  add("Persistence", "persistence");
  add("Emotional Intelligence", "teamwork");
  add("Risk Taking Ability", "riskTaking");
  add("Creative Thinking", "creativeSolutions");
  add("Leadership", "leadership");
  return traits.slice(0, 6);
};

// ─── Skills Radar Data ────────────────────────────────────────────────────────
const getRadarData = (data: any) => [
  { label: "Analytical Thinking", value: r(data, "criticalThinking") },
  {
    label: "Problem Solving",
    value: r(data, "problemSolving") || r(data, "logicalReasoning"),
  },
  { label: "Creativity", value: r(data, "creativeSolutions") },
  { label: "Communication", value: r(data, "publicSpeaking") },
  { label: "Team Collaboration", value: r(data, "teamwork") },
  { label: "Leadership", value: r(data, "leadership") },
];

// ─── SWOT ─────────────────────────────────────────────────────────────────────
const generateSWOT = (data: any) => {
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const opportunities: string[] = [];
  const threats: string[] = [];

  if (r(data, "quickLearner") >= 4) strengths.push("Willingness to Learn");
  if (r(data, "logicalReasoning") >= 4) strengths.push("Analytical Thinking");
  if (r(data, "teamwork") >= 4) strengths.push("Team Collaboration");
  if (r(data, "leadership") >= 4) strengths.push("Leadership Potential");
  if (r(data, "criticalThinking") >= 4) strengths.push("Critical Thinking");
  if (r(data, "coding") >= 4) strengths.push("Technical / Coding Skills");
  if (r(data, "creativeSolutions") >= 4)
    strengths.push("Creative Problem Solving");

  if (r(data, "publicSpeaking") <= 2) weaknesses.push("Communication Skills");
  if (r(data, "timeManagement") <= 2) weaknesses.push("Time Management");
  if (r(data, "focusAbility") <= 2) weaknesses.push("Focus & Concentration");
  if (r(data, "presentation") <= 2) weaknesses.push("Presentation Skills");

  if (data.familySupport === "Strong")
    opportunities.push("Strong Family Support");
  if (data.learningResources === "Excellent")
    opportunities.push("Good Learning Resources");
  if (data.mentorSupport === "Available")
    opportunities.push("Mentor Guidance Available");
  if (data.scholarshipRequired === "Yes")
    opportunities.push("Scholarship Eligible");
  if (data.firstGraduate === "Yes")
    opportunities.push("First Graduate Advantage");
  opportunities.push("High Demand Careers");
  if (data.aiAwareness === "Yes" || data.learningInterest === "Technology")
    opportunities.push("AI & Tech Growth");

  if (
    data.annualIncome === "Less than 3 LPA" ||
    data.annualIncome === "3-5 LPA"
  )
    threats.push("Financial Constraints");
  threats.push("Competitive Environment");
  threats.push("Rapid Skill Evolution");
  if (data.careerConfusion === "Very High")
    threats.push("Career Path Uncertainty");

  if (strengths.length === 0) strengths.push("Willingness to Learn");
  if (weaknesses.length === 0) weaknesses.push("Areas being assessed");

  return {
    strengths: strengths.slice(0, 4),
    weaknesses: weaknesses.slice(0, 3),
    opportunities: opportunities.slice(0, 4),
    threats: threats.slice(0, 3),
  };
};

// ─── Roadmap ──────────────────────────────────────────────────────────────────
const getRoadmap = (data: any, topCareer: string) => {
  const grade = data.grade || "10";
  const current = {
    icon: "🎒",
    title: "Current Stage",
    sub: `Grade ${grade}`,
    age: "Age 15–16",
    step: "Current Stage",
  };

  const maps: Record<string, any[]> = {
    "Software Engineer": [
      current,
      {
        icon: "🎓",
        title: "Degree Program",
        sub: "B.Tech / B.Sc CS",
        age: "Age 17–20",
        step: "Step 1",
      },
      {
        icon: "🏢",
        title: "Internship",
        sub: "Industry Experience",
        age: "Age 20–21",
        step: "Step 2",
      },
      {
        icon: "💻",
        title: "Entry Level",
        sub: "Junior Professional",
        age: "Age 21–23",
        step: "Step 3",
      },
      {
        icon: "⭐",
        title: "Senior Level",
        sub: "3–5 Years Exp.",
        age: "Age 24–27",
        step: "Step 4",
      },
      {
        icon: "👑",
        title: "Leadership",
        sub: "Team Lead / Manager",
        age: "Age 27+",
        step: "Step 5",
      },
    ],
    "AI Engineer": [
      current,
      {
        icon: "🎓",
        title: "Degree Program",
        sub: "B.Tech AI & ML",
        age: "Age 17–20",
        step: "Step 1",
      },
      {
        icon: "🏢",
        title: "Internship",
        sub: "AI/ML Research",
        age: "Age 20–21",
        step: "Step 2",
      },
      {
        icon: "🤖",
        title: "Entry Level",
        sub: "Junior AI Developer",
        age: "Age 21–23",
        step: "Step 3",
      },
      {
        icon: "⭐",
        title: "Senior Engineer",
        sub: "3–5 Years Exp.",
        age: "Age 24–27",
        step: "Step 4",
      },
      {
        icon: "👑",
        title: "AI Research Lead",
        sub: "Principal Engineer",
        age: "Age 27+",
        step: "Step 5",
      },
    ],
    "Data Scientist": [
      current,
      {
        icon: "🎓",
        title: "Degree Program",
        sub: "B.Sc Data Science",
        age: "Age 17–20",
        step: "Step 1",
      },
      {
        icon: "🏢",
        title: "Internship",
        sub: "Industry Experience",
        age: "Age 20–21",
        step: "Step 2",
      },
      {
        icon: "🧠",
        title: "Entry Level",
        sub: "Junior Data Scientist",
        age: "Age 21–23",
        step: "Step 3",
      },
      {
        icon: "⭐",
        title: "Senior Level",
        sub: "3–5 Years Exp.",
        age: "Age 24–27",
        step: "Step 4",
      },
      {
        icon: "👑",
        title: "Leadership",
        sub: "Team Lead / Manager",
        age: "Age 27+",
        step: "Step 5",
      },
    ],
    Doctor: [
      current,
      {
        icon: "📚",
        title: "12th PCB",
        sub: "Biology Stream",
        age: "Age 15–17",
        step: "Step 1",
      },
      {
        icon: "✏️",
        title: "NEET Prep",
        sub: "National Entrance Test",
        age: "Age 17–18",
        step: "Step 2",
      },
      {
        icon: "🎓",
        title: "MBBS Degree",
        sub: "5.5-Year Program",
        age: "Age 18–24",
        step: "Step 3",
      },
      {
        icon: "🏥",
        title: "Resident Doctor",
        sub: "1 Year Internship",
        age: "Age 24–25",
        step: "Step 4",
      },
      {
        icon: "🩺",
        title: "Specialist",
        sub: "MD / MS Specialisation",
        age: "Age 27+",
        step: "Step 5",
      },
    ],
    "IAS Officer": [
      current,
      {
        icon: "🎓",
        title: "Bachelor's Degree",
        sub: "Any Stream",
        age: "Age 17–20",
        step: "Step 1",
      },
      {
        icon: "📚",
        title: "UPSC Prep",
        sub: "1–3 Years Study",
        age: "Age 20–23",
        step: "Step 2",
      },
      {
        icon: "✏️",
        title: "UPSC Exam",
        sub: "Prelims→Mains→Interview",
        age: "Age 23–24",
        step: "Step 3",
      },
      {
        icon: "🏛️",
        title: "IAS Officer",
        sub: "Admin Service",
        age: "Age 24–25",
        step: "Step 4",
      },
      {
        icon: "👑",
        title: "Senior IAS",
        sub: "Collector / Secretary",
        age: "Age 30+",
        step: "Step 5",
      },
    ],
    "Chartered Accountant": [
      current,
      {
        icon: "🎓",
        title: "B.Com Degree",
        sub: "3-Year Program",
        age: "Age 17–20",
        step: "Step 1",
      },
      {
        icon: "📋",
        title: "CA Foundation",
        sub: "ICAI Registration",
        age: "Age 20–21",
        step: "Step 2",
      },
      {
        icon: "🏢",
        title: "CA Intermediate",
        sub: "Articleship 3 Yrs",
        age: "Age 21–24",
        step: "Step 3",
      },
      {
        icon: "✓",
        title: "CA Final Exam",
        sub: "Final Examination",
        age: "Age 24–25",
        step: "Step 4",
      },
      {
        icon: "👑",
        title: "CA Professional",
        sub: "Senior CA / Partner",
        age: "Age 25+",
        step: "Step 5",
      },
    ],
  };

  const defaultMap = [
    current,
    {
      icon: "🎓",
      title: "Degree Program",
      sub: "Choose your stream",
      age: "Age 17–20",
      step: "Step 1",
    },
    {
      icon: "🏢",
      title: "Internship",
      sub: "Industry Experience",
      age: "Age 20–21",
      step: "Step 2",
    },
    {
      icon: "🚀",
      title: "Entry Level",
      sub: "Junior Professional",
      age: "Age 21–23",
      step: "Step 3",
    },
    {
      icon: "⭐",
      title: "Senior Level",
      sub: "3–5 Years Exp.",
      age: "Age 24–27",
      step: "Step 4",
    },
    {
      icon: "👑",
      title: "Leadership",
      sub: "Team Lead / Manager",
      age: "Age 27+",
      step: "Step 5",
    },
  ];

  return (maps[topCareer] ?? defaultMap).slice(0, 6);
};

// ─── Certifications ───────────────────────────────────────────────────────────
const certMap: Record<
  string,
  {
    name: string;
    platform: string;
    priority: "High" | "Medium" | "Low";
    icon: string;
  }[]
> = {
  Technology: [
    {
      name: "Python Programming",
      platform: "Coursera",
      priority: "High",
      icon: "🐍",
    },
    {
      name: "SQL & Databases",
      platform: "Udemy",
      priority: "High",
      icon: "🗄️",
    },
    {
      name: "Data Structures",
      platform: "HackerRank",
      priority: "High",
      icon: "🏗️",
    },
    {
      name: "Power BI",
      platform: "Microsoft Learn",
      priority: "Medium",
      icon: "📊",
    },
    {
      name: "Excel Advanced",
      platform: "LinkedIn Learning",
      priority: "Medium",
      icon: "📗",
    },
    {
      name: "Problem Solving",
      platform: "HackerRank",
      priority: "High",
      icon: "🧩",
    },
  ],
  Business: [
    {
      name: "Digital Marketing",
      platform: "Google",
      priority: "High",
      icon: "📣",
    },
    {
      name: "Financial Modelling",
      platform: "Coursera",
      priority: "High",
      icon: "💰",
    },
    {
      name: "Excel Advanced",
      platform: "LinkedIn Learning",
      priority: "Medium",
      icon: "📗",
    },
    {
      name: "Business Communication",
      platform: "edX",
      priority: "Medium",
      icon: "💬",
    },
    {
      name: "Project Management",
      platform: "PMI",
      priority: "High",
      icon: "📋",
    },
    {
      name: "Leadership Skills",
      platform: "Udemy",
      priority: "Medium",
      icon: "⭐",
    },
  ],
  Medicine: [
    {
      name: "First Aid & CPR",
      platform: "Red Cross",
      priority: "High",
      icon: "❤️",
    },
    {
      name: "Medical Terminology",
      platform: "Coursera",
      priority: "High",
      icon: "🩺",
    },
    { name: "Anatomy Basics", platform: "edX", priority: "High", icon: "🔬" },
    {
      name: "Biology Advanced",
      platform: "Khan Academy",
      priority: "Medium",
      icon: "🧬",
    },
    {
      name: "Research Methods",
      platform: "Udemy",
      priority: "Medium",
      icon: "📑",
    },
    {
      name: "NEET Preparation",
      platform: "Vedantu",
      priority: "High",
      icon: "✏️",
    },
  ],
  "Civil Services": [
    {
      name: "General Knowledge",
      platform: "Unacademy",
      priority: "High",
      icon: "🌏",
    },
    {
      name: "UPSC Preparation",
      platform: "Byju's",
      priority: "High",
      icon: "📚",
    },
    {
      name: "English Grammar",
      platform: "edX",
      priority: "Medium",
      icon: "✍️",
    },
    {
      name: "Aptitude & Reasoning",
      platform: "Testbook",
      priority: "High",
      icon: "🧠",
    },
    {
      name: "Current Affairs",
      platform: "Jagran Josh",
      priority: "High",
      icon: "📰",
    },
    {
      name: "Essay Writing",
      platform: "Coursera",
      priority: "Medium",
      icon: "📝",
    },
  ],
  Arts: [
    {
      name: "Adobe Photoshop",
      platform: "Adobe Learn",
      priority: "High",
      icon: "🎨",
    },
    {
      name: "Figma UI Design",
      platform: "Coursera",
      priority: "High",
      icon: "🖌️",
    },
    {
      name: "Video Editing",
      platform: "Udemy",
      priority: "Medium",
      icon: "🎬",
    },
    {
      name: "Photography Basics",
      platform: "Skillshare",
      priority: "Medium",
      icon: "📷",
    },
    {
      name: "Canva Pro Design",
      platform: "Canva",
      priority: "High",
      icon: "✨",
    },
    {
      name: "Illustration",
      platform: "Skillshare",
      priority: "Medium",
      icon: "🖼️",
    },
  ],
};

const defaultCerts = [
  {
    name: "Communication Skills",
    platform: "edX",
    priority: "High" as const,
    icon: "💬",
  },
  {
    name: "Problem Solving",
    platform: "HackerRank",
    priority: "High" as const,
    icon: "🧩",
  },
  {
    name: "Microsoft Office",
    platform: "Microsoft Learn",
    priority: "Medium" as const,
    icon: "📗",
  },
  {
    name: "Time Management",
    platform: "Coursera",
    priority: "Medium" as const,
    icon: "⏰",
  },
  {
    name: "Critical Thinking",
    platform: "edX",
    priority: "High" as const,
    icon: "🧠",
  },
  {
    name: "English Communication",
    platform: "British Council",
    priority: "Medium" as const,
    icon: "🌐",
  },
];

// ─── Skill Gap ────────────────────────────────────────────────────────────────
const getSkillGap = (data: any) => {
  const strengths: string[] = [];
  const improve: string[] = [];

  if (r(data, "logicalReasoning") >= 4) strengths.push("Logical Reasoning");
  if (r(data, "criticalThinking") >= 4) strengths.push("Critical Thinking");
  if (data.learningInterest)
    strengths.push(`${data.learningInterest} Interest`);
  if (r(data, "leadership") >= 4) strengths.push("Leadership");
  if (r(data, "quickLearner") >= 4) strengths.push("Learning Agility");
  if (r(data, "coding") >= 4) strengths.push("Coding Skills");

  if (r(data, "publicSpeaking") <= 3) improve.push("Communication Skills");
  if (r(data, "publicSpeaking") <= 2) improve.push("Public Speaking");
  if (r(data, "presentation") <= 3) improve.push("Presentation Skills");
  if (r(data, "timeManagement") <= 3) improve.push("Time Management");

  if (strengths.length === 0)
    strengths.push("Willingness to Learn", "Positive Outlook");
  if (improve.length === 0) improve.push("Industry Certifications");

  return { strengths: strengths.slice(0, 4), improve: improve.slice(0, 3) };
};

// ─── Financial ────────────────────────────────────────────────────────────────
const getFinancial = (data: any) => {
  const income = data.annualIncome || "";
  const feasibility =
    income === "15+ LPA"
      ? 95
      : income === "10-15 LPA"
        ? 90
        : income === "5-10 LPA"
          ? 82
          : income === "3-5 LPA"
            ? 74
            : 68;
  const schScore =
    (data.firstGraduate === "Yes" ? 30 : 0) +
    (data.scholarshipRequired === "Yes" ? 40 : 0) +
    (income === "Less than 3 LPA" ? 30 : 0);
  const schElig = schScore >= 70 ? "High" : schScore >= 40 ? "Medium" : "Low";
  const loanStatus = data.educationLoan === "Yes" ? "Recommended" : "Optional";

  const costRange =
    data.stream === "PCB"
      ? "₹15 – ₹60 Lakhs"
      : data.stream === "PCM"
        ? "₹8 – ₹25 Lakhs"
        : data.stream === "Commerce"
          ? "₹3 – ₹12 Lakhs"
          : "₹5 – ₹20 Lakhs";

  return { feasibility, schElig, loanStatus, costRange };
};

// ─── 90-Day Action Plan ───────────────────────────────────────────────────────
const getActionPlan = (data: any, topCareer: string) => {
  const base = [
    { icon: "🗺️", label: "Explore Careers" },
    { icon: "🏫", label: "Research Colleges" },
  ];
  if (
    data.learningInterest === "Technology" ||
    topCareer.includes("Engineer") ||
    topCareer === "Data Scientist"
  ) {
    return [
      ...base,
      { icon: "🐍", label: "Learn Python" },
      { icon: "🗄️", label: "SQL Course" },
      { icon: "🏗️", label: "Mini Projects" },
      { icon: "🏢", label: "Internships" },
      { icon: "💬", label: "Communication" },
      { icon: "📊", label: "Track Progress" },
    ];
  }
  if (topCareer === "Doctor") {
    return [
      ...base,
      { icon: "📚", label: "Start NEET Prep" },
      { icon: "🔬", label: "Study Biology" },
      { icon: "✏️", label: "Mock Tests" },
      { icon: "🏥", label: "Hospital Visit" },
      { icon: "💬", label: "Communication" },
      { icon: "📊", label: "Track Progress" },
    ];
  }
  return [
    ...base,
    { icon: "📚", label: "Certification" },
    { icon: "📋", label: "Domain Study" },
    { icon: "🏗️", label: "Build Portfolio" },
    { icon: "🔗", label: "Networking" },
    { icon: "💬", label: "Communication" },
    { icon: "📊", label: "Track Progress" },
  ];
};

// ─── Future Demand Score ──────────────────────────────────────────────────────
const getFutureDemand = (career: string): number => {
  const high = [
    "AI Engineer",
    "Data Scientist",
    "Software Engineer",
    "Cyber Security Analyst",
    "UI UX Designer",
  ];

  const med = [
    "Doctor",
    "Chartered Accountant",
    "Financial Analyst",
    "Business Analyst",
    "Biotechnologist",
    "Marketing Manager",
  ];

  if (high.includes(career)) return 95;
  if (med.includes(career)) return 85;

  return 75;
};

// ─── SVG Radar Chart ─────────────────────────────────────────────────────────
const RadarChart = ({
  data: chartData,
}: {
  data: { label: string; value: number }[];
}) => {
  const cx = 110,
    cy = 110,
    r_max = 80;
  const n = chartData.length;
  const angle = (i: number) => (i * 2 * Math.PI) / n - Math.PI / 2;
  const pt = (i: number, radius: number) => ({
    x: cx + radius * Math.cos(angle(i)),
    y: cy + radius * Math.sin(angle(i)),
  });
  const gridLevels = [0.25, 0.5, 0.75, 1];
  const userPoints = chartData.map((d, i) => pt(i, (d.value / 5) * r_max));
  const avgPoints = chartData.map((_, i) => pt(i, 0.55 * r_max));
  const toPath = (pts: { x: number; y: number }[]) =>
    pts
      .map(
        (p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`,
      )
      .join(" ") + " Z";

  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      style={{ maxWidth: "100%", height: "auto" }}
    >
      {gridLevels.map((lvl) => (
        <polygon
          key={lvl}
          points={chartData
            .map((_, i) => {
              const p = pt(i, lvl * r_max);
              return `${p.x},${p.y}`;
            })
            .join(" ")}
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1"
        />
      ))}
      {chartData.map((_, i) => {
        const outer = pt(i, r_max);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={outer.x}
            y2={outer.y}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        );
      })}
      <path
        d={toPath(avgPoints)}
        fill="#94a3b8"
        fillOpacity="0.15"
        stroke="#94a3b8"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      <path
        d={toPath(userPoints)}
        fill="#2563eb"
        fillOpacity="0.2"
        stroke="#2563eb"
        strokeWidth="2"
      />
      {userPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#2563eb" />
      ))}
      {chartData.map((d, i) => {
        const lp = pt(i, r_max + 18);
        return (
          <text
            key={i}
            x={lp.x}
            y={lp.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="8.5"
            fill="#475569"
            fontFamily="Inter, sans-serif"
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
};

// ─── Report ID Generator ──────────────────────────────────────────────────────
const genReportId = () =>
  `CA-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 100000)).padStart(6, "0")}`;


// ─── College Report Engine ──────────────────────────────────────────────────
const getStreamKey = (dept: any, discipline: any) => {
  if (!dept) return "other";
  const normDept = String(dept).toLowerCase();
  
  if (discipline === "arts-science") {
    if (normDept.includes("commerce") || normDept.includes("business")) return "commerce";
    if (normDept.includes("science") || normDept.includes("math") || normDept.includes("physics") || normDept.includes("chemistry") || normDept.includes("biology")) return "science";
    return "humanities";
  }
  
  if (normDept.includes("computer science") || normDept.includes("cyber security") || normDept.includes("cybersecurity")) return "cse";
  if (normDept.includes("information technology")) return "it";
  if (normDept.includes("data science") || normDept.includes("artificial intelligence & data science")) return "aids";
  if (normDept.includes("machine learning") || normDept.includes("artificial intelligence & machine learning")) return "aiml";
  if (normDept.includes("electronics") || normDept.includes("communication")) return "ece";
  if (normDept.includes("electrical") || normDept.includes("power")) return "eee";
  if (normDept.includes("mechanical") || normDept.includes("automobile") || normDept.includes("aeronautical")) return "mechanical";
  if (normDept.includes("civil")) return "civil";
  if (normDept.includes("chemical")) return "chemical";
  if (normDept.includes("biomedical")) return "biomedical";
  if (normDept.includes("biotech") || normDept.includes("biotechnology")) return "biotech";
  if (normDept.includes("mechatronics")) return "mechatronics";
  if (normDept.includes("robotics")) return "robotics";
  if (normDept.includes("business system") || normDept.includes("csbs")) return "csbs";
  return "other";
};

const getCollegeTechnicalScore = (answers: any, streamKey: string) => {
  const questions = collegeLayerFourQuestions[streamKey] || [];
  if (questions.length === 0) return 65; // fallback
  let correct = 0;
  let answered = 0;
  questions.forEach(q => {
    if (answers && answers[q.id] !== undefined) {
      answered++;
      if (answers[q.id] === q.correctOptionId) {
        correct++;
      }
    }
  });
  if (answered === 0) return 65; // fallback
  return Math.round((correct / questions.length) * 100);
};

const getCollegeLogicalScore = (answers: any) => {
  if (!answers) return 70; // fallback
  let correct = 0;
  let answered = 0;
  collegeLayerThreeQuestions.forEach(q => {
    if (answers[q.id] !== undefined) {
      answered++;
      if (answers[q.id] === q.correctOptionId) {
        correct++;
      }
    }
  });
  if (answered === 0) return 70; // fallback
  return Math.round((correct / collegeLayerThreeQuestions.length) * 100);
};

const getCollegePsychometricScore = (answers: any) => {
  if (!answers) return 75; // fallback
  let totalScore = 0;
  let count = 0;
  collegeLayerTwoQuestions.forEach(q => {
    const val = answers[q.id];
    if (val) {
      const option = q.options.find(opt => opt.id === val);
      if (option) {
        totalScore += (option.score || 3);
        count++;
      }
    }
  });
  if (count === 0) return 75; // fallback
  return Math.round((totalScore / (count * 5)) * 100);
};

const getPlacementReadinessScore = (answers: any) => {
  if (!answers) return 50;
  let score = 30; // base score
  if (answers.has_certifications === "Yes") score += 15;
  if (answers.has_internships === "Yes") score += 20;
  if (answers.has_projects === "Yes") score += 15;
  
  if (answers.hackathon_participation === "College Level") score += 5;
  else if (answers.hackathon_participation === "State Level") score += 10;
  else if (answers.hackathon_participation === "National Level") score += 15;
  else if (answers.hackathon_participation === "International Level") score += 20;
  
  if (answers.symposium_participation === "Frequently") score += 10;
  else if (answers.symposium_participation === "Occasionally") score += 5;
  
  if (answers.has_research_papers === "Yes") score += 10;
  
  return Math.min(score, 100);
};

const getCollegeCareerMatches = (streamKey: string) => {
  const catalog = {
    cse: [
      { role: "Software Developer", degree: "B.Tech Computer Science", domain: "technology", demand: "High Demand", salary: "₹8–22 LPA", growth: "Strong Growth" },
      { role: "AI/ML Engineer", degree: "B.Tech AI & ML", domain: "technology", demand: "Very High Demand", salary: "₹12–30 LPA", growth: "Excellent Growth" },
      { role: "Data Scientist", degree: "B.Sc Data Science", domain: "technology", demand: "High Demand", salary: "₹10–25 LPA", growth: "Strong Growth" },
      { role: "Cybersecurity Analyst", degree: "B.Tech Cybersecurity", domain: "technology", demand: "Growing Demand", salary: "₹8–18 LPA", growth: "Very Strong" }
    ],
    it: [
      { role: "DevOps Engineer", degree: "B.Tech Information Technology", domain: "technology", demand: "High Demand", salary: "₹8–20 LPA", growth: "Strong Growth" },
      { role: "Full Stack Engineer", degree: "B.Tech / MCA", domain: "technology", demand: "High Demand", salary: "₹7–18 LPA", growth: "Strong Growth" },
      { role: "Cloud Architect", degree: "B.Tech / Cloud Certifications", domain: "technology", demand: "Very High Demand", salary: "₹12–28 LPA", growth: "Excellent Growth" }
    ],
    aids: [
      { role: "Data Scientist", degree: "B.Tech AI & Data Science", domain: "technology", demand: "High Demand", salary: "₹10–25 LPA", growth: "Strong Growth" },
      { role: "Data Engineer", degree: "B.Tech CSE", domain: "technology", demand: "High Demand", salary: "₹9–20 LPA", growth: "Strong Growth" },
      { role: "Business Intelligence Analyst", degree: "B.Sc Data Science", domain: "business", demand: "Growing Demand", salary: "₹6–15 LPA", growth: "Stable" }
    ],
    aiml: [
      { role: "Machine Learning Engineer", degree: "B.Tech AI & ML", domain: "technology", demand: "Very High Demand", salary: "₹11–28 LPA", growth: "Excellent Growth" },
      { role: "NLP Scientist", degree: "B.Tech AI / CS", domain: "technology", demand: "Very High Demand", salary: "₹13–32 LPA", growth: "Strong Growth" }
    ],
    ece: [
      { role: "Embedded Systems Developer", degree: "B.Tech ECE", domain: "technology", demand: "High Demand", salary: "₹6–18 LPA", growth: "Strong Growth" },
      { role: "VLSI Design Engineer", degree: "B.Tech Microelectronics", domain: "technology", demand: "High Demand", salary: "₹8–25 LPA", growth: "Excellent Growth" },
      { role: "IoT Solutions Architect", degree: "B.Tech ECE", domain: "technology", demand: "Growing Demand", salary: "₹7–16 LPA", growth: "Strong Growth" }
    ],
    eee: [
      { role: "Power Systems Engineer", degree: "B.Tech EEE", domain: "technology", demand: "Steady Demand", salary: "₹5–14 LPA", growth: "Stable" },
      { role: "Control Systems Specialist", degree: "B.Tech EEE", domain: "technology", demand: "Growing Demand", salary: "₹6–15 LPA", growth: "Stable" },
      { role: "Renewable Energy Consultant", degree: "B.Tech Energy Systems", domain: "technology", demand: "High Demand", salary: "₹7–18 LPA", growth: "Strong Growth" }
    ],
    mechanical: [
      { role: "CAD Design Engineer", degree: "B.Tech Mechanical", domain: "technology", demand: "Steady Demand", salary: "₹5–12 LPA", growth: "Stable" },
      { role: "Automobile Design Engineer", degree: "B.Tech Automobile", domain: "technology", demand: "Steady Demand", salary: "₹6–15 LPA", growth: "Stable" },
      { role: "Robotics Design Engineer", degree: "B.Tech Mechatronics", domain: "technology", demand: "Growing Demand", salary: "₹7–18 LPA", growth: "Strong Growth" }
    ],
    commerce: [
      { role: "Financial Analyst", degree: "B.Com Finance", domain: "business", demand: "High Demand", salary: "₹6–15 LPA", growth: "Strong Growth" },
      { role: "Business Consultant", degree: "BBA / MBA", domain: "business", demand: "High Demand", salary: "₹7–18 LPA", growth: "Strong Growth" },
      { role: "Chartered Accountant", degree: "CA (ICAI)", domain: "business", demand: "Very High Demand", salary: "₹8–25 LPA", growth: "Excellent Growth" }
    ],
    science: [
      { role: "Research Associate", degree: "B.Sc Pure Sciences", domain: "medicine", demand: "Steady Demand", salary: "₹4–10 LPA", growth: "Stable" },
      { role: "Data Analyst", degree: "B.Sc Maths / Stats", domain: "technology", demand: "High Demand", salary: "₹6–14 LPA", growth: "Strong Growth" }
    ],
    humanities: [
      { role: "Public Relations Specialist", degree: "B.A. Communication", domain: "creative", demand: "Growing Demand", salary: "₹5–12 LPA", growth: "Stable" },
      { role: "Social Researcher", degree: "B.A. Psychology / Sociology", domain: "government", demand: "Steady Demand", salary: "₹4–10 LPA", growth: "Stable" }
    ]
  };
  return (catalog as Record<string, any[]>)[streamKey] || catalog["cse"];
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const Report = () => {
  console.log("REPORT PAGE LOADED");
  const selectedReport = localStorage.getItem("selectedReport");
   console.log(
  "LOCAL STORAGE REPORT",
  selectedReport
);
  const dashboardReport = selectedReport ? JSON.parse(selectedReport) : null;
  const [data, setData] = useState<any>(null);
  const [assessmentConfig, setAssessmentConfig] = useState<any>(null);
  
  useEffect(() => {
    const savedConfig = localStorage.getItem("assessmentConfig") || localStorage.getItem("careerassist_assessment_config");
    if (savedConfig) {
      try {
        setAssessmentConfig(JSON.parse(savedConfig));
      } catch (e) {
        console.warn(e);
      }
    }
  }, []);

  const [, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [reportId, setReportId] = useState(genReportId());
  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);

  // Email Sharing States
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [emailLoading, setEmailLoading] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showFallbackModal, setShowFallbackModal] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [autoEmailed, setAutoEmailed] = useState(false);
  const [notification, setNotification] = useState<{ type: 'info' | 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    if (dashboardReport) {
     setData(
  dashboardReport?.report_data?.assessmentData ||
  dashboardReport?.assessment_data ||
  null
); setReportId(dashboardReport.report_id);
      setSaved(true);

      localStorage.removeItem("selectedReport");

      return;
    }

    const savedData = localStorage.getItem("assessmentData");

    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const recommendations = generateRecommendations(data || {});
  const swot = generateSWOT(data || {});
  const topCareer = recommendations[0]?.role ?? "Data Scientist";
  const roadmap = getRoadmap(data || {}, topCareer);
  const certs = certMap[data?.learningInterest] || defaultCerts;
  const personalityTraits = getPersonalityStrengths(data || {});
  const radarData = getRadarData(data || {});
  const skillGap = getSkillGap(data || {});
  const financial = getFinancial(data || {});
  const actionPlan = getActionPlan(data || {}, topCareer);

  const RS2: Record<string, number> = {
    Poor: 20,
    Fair: 40,
    Good: 60,
    "Very Good": 80,
    Excellent: 100,
  };
  const skillFields = [
    "coding",
    "computerKnowledge",
    "excel",
    "speaking",
    "writing",
    "presentation",
    "negotiation",
    "selling",
    "management",
    "design",
    "videoEditing",
    "photography",
    "logicalReasoning",
    "criticalThinking",
  ];
  const skillScores = skillFields
    .map((f) => RS2[data?.[f]] ?? 0)
    .filter((v) => v > 0);
  const avgSkillScore = skillScores.length
    ? Math.round(skillScores.reduce((a, b) => a + b, 0) / skillScores.length)
    : 61;
  const careerFit = Math.min((recommendations[0]?.score ?? 85) + 5, 100);
  const careerConfidence = Math.round(
    (careerFit + avgSkillScore + (data?.learningInterest ? 90 : 65)) / 3,
  );
  const futureDemand = getFutureDemand(topCareer);

  const fitLabel =
    careerFit >= 95
      ? "Excellent Fit"
      : careerFit >= 85
        ? "Great Fit"
        : careerFit >= 75
          ? "Good Fit"
          : "Developing Fit";
  const fitColor = careerFit >= 85 ? "#16a34a" : "#2563eb";

  const aiInsightText = `You show excellent potential in analytical thinking, problem solving and ${data?.learningInterest || "technology"}. ${topCareer} aligns perfectly with your interests and skills.`;

  // ── Save to Supabase ──────────────────────────────────────────────────────
  const saveReport = async () => {
    if (saved) return;
    setSaving(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Please login again");
        return;
      }

      const { data: assessments, error: assessmentError } = await supabase
        .from("assessments")
        .select("id")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (assessmentError) {
        console.error("ASSESSMENT ERROR:", assessmentError);
        return;
      }

      if (!assessments) {
        console.error("Assessment not found");
        return;
      }
      const { data: existing } = await supabase
        .from("reports")
        .select("id, report_id")
        .eq("user_id", user.id)
        .eq("assessment_id", assessments?.id)
        .limit(1);

      if (existing && existing.length > 0) {
        console.log("Report already exists");

        setReportId(existing[0].report_id);

        setSaved(true);

        return;
      }
      const { data: insertedReport, error } = await supabase
        .from("reports")
        .insert({
          user_id: user.id,
          assessment_id: assessments?.id,
          report_id: reportId,
          career_matches: recommendations,
          swot_analysis: swot,
          roadmap: roadmap,
          financial_analysis: financial,
          overall_score: careerFit,
          confidence_score: careerConfidence,
          report_data: {
            pdf_url: null,
            assessmentData: data,
            assessmentConfig: assessmentConfig,
            topCareer,
            recommendations,
            swot,
            roadmap,
            financial,
            avgSkillScore,
            careerFit,
            careerConfidence,
            futureDemand,
            personalityTraits,
            skillGap,
            certs,
            actionPlan,
            reportId,
          },
        })
        .select();

      console.log("INSERT RESULT:", insertedReport);
      console.log("INSERT ERROR:", error);

      if (error) {
        alert(`Report Save Error: ${error.message}`);
        return;
      }

      console.log("REPORT SAVED SUCCESSFULLY");

      setSaved(true);
    } catch (err) {
      console.error("SAVE REPORT ERROR:", err);
    } finally {
      setSaving(false);
    }
  };
  useEffect(() => {
    if (dashboardReport) {
      if (dashboardReport?.report_data?.assessmentConfig) {
        setAssessmentConfig(dashboardReport.report_data.assessmentConfig);
      }
      return;
    }

    if (data && !saved) {
      saveReport();
    }
  }, [data, saved, dashboardReport, assessmentConfig]);

  // Payment access verification
  useEffect(() => {
    const checkAccess = async () => {
      // If we are currently executing the auto-download flow, skip checks because they just paid
      if (location.state?.autoDownload) return;

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }
      
      const { data: subData } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", user.id)
        .eq("is_active", true)
        .limit(1);

      if (!subData || subData.length === 0) {
        // Redirect to dashboard where payment triggers
        navigate("/dashboard");
      }
    };
    checkAccess();
  }, [location.state, navigate]);

  // Automated PDF generation and redirection on completion
  useEffect(() => {
    if (data && saved && location.state?.autoDownload) {
      const handleAutoFlow = async () => {
        try {
          const url = await generateAndUploadPDF();
          if (url) {
            window.open(url, "_blank");
          }
        } catch (err) {
          console.error("Auto download failed:", err);
        } finally {
          navigate(location.state?.redirect || "/dashboard", { replace: true });
        }
      };
      handleAutoFlow();
    }
  }, [data, saved, location.state, navigate]);

  // ── PDF Export & Upload Helper ────────────────────────────────────────────
  const generateAndUploadPDF = async (): Promise<string | null> => {
    if (pdfUrl) return pdfUrl;
    if (dashboardReport?.pdf_url) {
      setPdfUrl(dashboardReport.pdf_url);
      return dashboardReport.pdf_url;
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const pageW = 210,
      pageH = 297;

    if (page1Ref.current) {
      const canvas1 = await html2canvas(page1Ref.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      pdf.addImage(canvas1.toDataURL("image/png"), "PNG", 0, 0, pageW, pageH);
    }
    if (page2Ref.current) {
      pdf.addPage();
      const canvas2 = await html2canvas(page2Ref.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      pdf.addImage(canvas2.toDataURL("image/png"), "PNG", 0, 0, pageW, pageH);
    }

    const pdfBlob = pdf.output("blob");
    const fileName = `${reportId}.pdf`;

    const { error: uploadError } = await supabase.storage
      .from("reports")
      .upload(fileName, pdfBlob, {
        upsert: true,
        contentType: "application/pdf",
      });

    if (uploadError) {
      console.error("PDF upload error:", uploadError);
      throw uploadError;
    }

    const { data: publicUrlData } = supabase.storage
      .from("reports")
      .getPublicUrl(fileName);

    const uploadedUrl = publicUrlData.publicUrl;

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      await supabase
        .from("reports")
        .update({
          pdf_url: uploadedUrl,
        })
        .eq("user_id", user.id)
        .eq("report_id", reportId);
    }

    setPdfUrl(uploadedUrl);
    return uploadedUrl;
  };

  const downloadPDF = async () => {
    setPdfLoading(true);

    try {
      console.log("DOWNLOAD PDF CLICKED");
      if (dashboardReport?.pdf_url) {
        window.open(dashboardReport.pdf_url, "_blank");
        return;
      }
      if (pdfUrl) {
        window.open(pdfUrl, "_blank");
        return;
      }

      const url = await generateAndUploadPDF();
      if (url) {
        window.open(url, "_blank");
      }
    } catch (err) {
      console.error("Failed to generate PDF:", err);
      alert("Error generating report PDF.");
    } finally {
      setPdfLoading(false);
    }
  };

  // ── Share Report Email ──────────────────────────────────────────────────
  const sendEmailReport = async (emailAddr: string) => {
    if (!emailAddr) return;
    setEmailLoading(true);
    try {
      let currentPdfUrl = pdfUrl || dashboardReport?.pdf_url;
      if (!currentPdfUrl) {
        currentPdfUrl = await generateAndUploadPDF();
      }

      if (!currentPdfUrl) {
        throw new Error("Could not compile report PDF URL.");
      }

      const payload = {
        email: emailAddr,
        name: data?.name || "Student",
        topCareer,
        careerFit,
        pdfUrl: currentPdfUrl,
        recommendations,
        swot
      };

      const { data: resData, error: invokeError } = await supabase.functions.invoke("send-report-email", {
        body: payload
      });

      if (invokeError) {
        throw invokeError;
      }

      if (resData?.error) {
        throw new Error(resData.error);
      }

      setNotification({ type: 'success', message: `Career report successfully emailed to ${emailAddr}!` });
    } catch (err: any) {
      console.warn("Real email dispatch failed, opening dev preview fallback:", err);
      setNotification({ type: 'error', message: "Could not email report. Opening draft preview." });
      setShowFallbackModal(true);
    } finally {
      setEmailLoading(false);
    }
  };

  // Pre-fill recipient email with authenticated user email
  useEffect(() => {
    const fetchUserEmail = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        setRecipientEmail(user.email);
      }
    };
    fetchUserEmail();
  }, []);

  // Automatically trigger email dispatch on mount after successful save
  useEffect(() => {
    if (saved && !dashboardReport && !autoEmailed && data && recipientEmail) {
      setAutoEmailed(true);
      const runAutoEmail = async () => {
        try {
          setNotification({ type: 'info', message: `Sending career report to ${recipientEmail} in the background...` });
          await sendEmailReport(recipientEmail);
        } catch (e) {
          console.warn("Automatic email failed:", e);
        }
      };
      // Allow DOM to settle for canvas accuracy
      setTimeout(runAutoEmail, 1500);
    }
  }, [saved, dashboardReport, autoEmailed, data, recipientEmail]);

  // Auto-dismiss notifications after 6 seconds
  useEffect(() => {
    if (notification && (notification.type === 'success' || notification.type === 'error')) {
      const timer = setTimeout(() => setNotification(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const today = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const PageHeader = ({ page }: { page: number }) => (
    <div className="report-header">
      <div className="header-left">
        <img src={logo} alt="CareerAssist" className="header-logo" />
        <div>
          <div className="header-title">CareerAssist</div>
          <div className="header-subtitle">Your Future, Our Guidance</div>
        </div>
      </div>
      <div className="header-page">PAGE {page} OF 2</div>
    </div>
  );


  const isCollege = assessmentConfig?.type === "college" || assessmentConfig?.type === "graduated" || !!data?.degree || !!data?.college || !!data?.passedOutYear;

  if (isCollege) {
    const colDept = assessmentConfig?.department || data?.department || "Engineering";
    const colDiscipline = assessmentConfig?.discipline || (String(colDept).includes("Commerce") ? "arts-science" : "engineering");
    const colStreamKey = getStreamKey(colDept, colDiscipline);
    const colTechScore = getCollegeTechnicalScore(data, colStreamKey);
    const colLogicalScore = getCollegeLogicalScore(data);
    const colPsychScore = getCollegePsychometricScore(data);
    const colReadinessScore = getPlacementReadinessScore(data);
    const colCareerMatches = getCollegeCareerMatches(colStreamKey);
    const colTopCareer = colCareerMatches[0]?.role || "Technical Lead";
    
    // Dynamic SWOT
    const colSWOT = {
      strengths: [
        colTechScore >= 80 ? "Core Technical Competency" : "Fundamental Technical Knowledge",
        colLogicalScore >= 80 ? "Advanced Logical Reasoning" : "Solid Problem Solving",
        colReadinessScore >= 75 ? "Practical Exposure & Projects" : "Eager to Upskill & Practice",
        "Continuous Learning Mindset"
      ],
      weaknesses: [
        colTechScore < 60 ? "Stream Specific Practical Concepts" : null,
        colLogicalScore < 60 ? "Complex Analytical Modeling" : null,
        colReadinessScore < 50 ? "Industry Practical Exposure & Projects" : null,
        "Practical Interview Mock Confidence"
      ].filter(Boolean),
      opportunities: [
        "Specialized Engineering Roles",
        "High-Growth Startup Ecosystem",
        "Global Technical Certifications",
        "Campus & Placement Opportunities"
      ],
      threats: [
        "Rapidly Evolving Tech Stacks",
        "Intense Entry-Level Competition",
        "Automation of Basic Coding Tasks"
      ]
    };

    return (
      <div className="report-wrapper bg-slate-50 min-h-screen text-slate-800 font-sans antialiased">
        {/* Action Bar */}
        <div className="action-bar bg-blue-900 border-b border-slate-200 px-6 py-4 flex flex-row items-center justify-between sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg text-white">CareerAssist</span>
            <span className="text-xs font-semibold bg-white/10 text-blue-200 px-2.5 py-1 rounded-full border border-white/20">
              College AI Career Report
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-blue-200 hover:text-white transition text-sm mr-2 font-bold">
              ← Home
            </a>
            {saved && <span className="text-emerald-400 font-bold text-sm">✓ Saved to Cloud</span>}
            <button
              onClick={downloadPDF}
              className="bg-white hover:bg-slate-100 text-blue-900 font-black px-4 py-2 rounded-xl transition text-sm shadow-md active:scale-95 cursor-pointer"
            >
              Download PDF
            </button>
            <button
              disabled={!saved}
              onClick={() => navigate("/dashboard")}
              className="bg-blue-800 hover:bg-blue-750 disabled:opacity-40 text-blue-100 font-bold px-4 py-2 rounded-xl transition text-sm active:scale-95 cursor-pointer"
            >
              View Dashboard
            </button>
          </div>
        </div>

        {/* ════ COLLEGE PAGE 1 ════ */}
        <div ref={page1Ref} className="report-page bg-white text-slate-800 p-8 mx-auto my-6 border border-slate-200 relative flex flex-col justify-between" style={{ width: '800px', height: '1130px', boxSizing: 'border-box' }}>
          <div>
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-black text-slate-900">CareerAssist</h2>
                  <p className="text-[10px] uppercase font-extrabold text-blue-650 tracking-wider">AI Career Guidance Report</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-bold">Report ID: {reportId}</p>
                <p className="text-[10px] text-slate-500 font-bold">Date: {today}</p>
              </div>
            </div>

            {/* Profile Section */}
            <div className="grid grid-cols-3 gap-6 bg-slate-50 border border-slate-200 p-5 rounded-2xl mb-6">
              {/* Left col - Details */}
              <div className="col-span-2 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 text-blue-755 flex items-center justify-center font-black text-lg">
                    {data.full_name?.[0]?.toUpperCase() || data.name?.[0]?.toUpperCase() || "C"}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-snug">{data.full_name || data.name || "College Student"}</h3>
                    <p className="text-xs text-slate-500 font-bold">{data.college || data.collegeName || "Engineering Institution"}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs font-semibold text-slate-700">
                  <div>🎓 Degree: <span className="text-slate-900 font-extrabold">{data.degree || "B.Tech"}</span></div>
                  <div>⚙️ Dept: <span className="text-slate-900 font-extrabold">{colDept}</span></div>
                  {assessmentConfig?.type === "graduated" || !!data?.passedOutYear ? (
                    <div>🎓 Graduated: <span className="text-slate-900 font-extrabold">{assessmentConfig?.passedOutYear || data?.passedOutYear || "Passed Out"}</span></div>
                  ) : (
                    <div>📅 Year: <span className="text-slate-900 font-extrabold">{data.year || "3rd Year"}</span></div>
                  )}
                  <div>📊 CGPA: <span className="text-slate-900 font-extrabold">{data.cgpa || "8.50"} / 10.00</span></div>
                  <div>📚 Active Backlogs: <span className="text-slate-900 font-extrabold">{data.backlogs || "None"}</span></div>
                  <div>⌛ Attendance: <span className="text-slate-900 font-extrabold">{data.attendance || "Above 90%"}</span></div>
                </div>
              </div>

              {/* Right col - Readiness Score */}
              <div className="flex flex-col items-center justify-center border-l border-slate-200 pl-4">
                <svg width="85" height="85" viewBox="0 0 85 85">
                  <circle cx="42.5" cy="42.5" r="34" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="6" />
                  <circle
                    cx="42.5"
                    cy="42.5"
                    r="34"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeDasharray={`s${(colReadinessScore / 100) * 213.6} 213.6`}
                    strokeLinecap="round"
                    transform="rotate(-90 42.5 42.5)"
                  />
                  <text x="42.5" y="39" textAnchor="middle" fontSize="13" fontWeight="900" fill="#1e293b">
                    {colReadinessScore}%
                  </text>
                  <text x="42.5" y="52" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#64748b">
                    READINESS
                  </text>
                  <text x="42.5" y="60" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#64748b">
                    SCORE
                  </text>
                </svg>
                <div className="text-[9px] font-black text-center text-blue-650 mt-2 tracking-wide uppercase">
                  {colReadinessScore >= 80 ? "Placement Ready" : colReadinessScore >= 60 ? "Developing Profile" : "Action Needed"}
                </div>
              </div>
            </div>

            {/* Core Competency Heatmap */}
            <div className="mb-6">
              <h3 className="text-xs uppercase font-extrabold text-blue-600 mb-3 tracking-wider">I. Core Technical & Cognitive Assessment</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col justify-between">
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase">Technical Score</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">{colTechScore}%</div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${colTechScore}%` }}></div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col justify-between">
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase">Logical reasoning</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">{colLogicalScore}%</div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${colLogicalScore}%` }}></div>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col justify-between">
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase">Psychometric Profile</span>
                  <div className="text-2xl font-black text-slate-900 mt-1">{colPsychScore}%</div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-purple-600 h-full rounded-full" style={{ width: `${colPsychScore}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Psychometric Traits */}
            <div className="mb-6">
              <h3 className="text-xs uppercase font-extrabold text-blue-600 mb-3 tracking-wider">II. Mindset & Psychometric Characteristics</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Learning Agility", desc: "Measures willingness to explore frameworks and technology stacks outside college syllabus.", score: data["col-psy-q1"] === "Always" || data["col-psy-q1"] === "Often" ? "High" : "Medium" },
                  { label: "Team Collaboration", desc: "Reflects comfort level working on collaborative engineering systems.", score: data["col-psy-q3"] === "Always" || data["col-psy-q3"] === "Often" ? "High" : "Medium" },
                  { label: "Adaptability", desc: "Gauges speed of adopting new IDE software, tools, and technical constraints.", score: data["col-psy-q8"] === "Very Easily" || data["col-psy-q8"] === "Easily" ? "High" : "Medium" },
                  { label: "Ethics & Integrity", desc: "Evaluates compliance with plagiarism guidelines and standards.", score: data["col-psy-q9"] === "Always" || data["col-psy-q9"] === "Often" ? "High" : "Medium" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex justify-between items-start">
                    <div className="max-w-[80%]">
                      <h4 className="text-xs font-bold text-slate-900">{item.label}</h4>
                      <p className="text-[10px] text-slate-500 font-semibold mt-1 leading-normal">{item.desc}</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{item.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive AI Career recommendation summary */}
            <div className="bg-blue-50 border border-blue-105 p-5 rounded-2xl">
              <h4 className="text-xs uppercase font-extrabold text-blue-600 mb-2 tracking-wider">Executive Recommendation Match</h4>
              <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                Based on your technical stream competency score of <span className="text-blue-600 font-bold">{colTechScore}%</span>, logical thinking rating of <span className="text-blue-600 font-bold">{colLogicalScore}%</span>, and profile readiness score of <span className="text-blue-600 font-bold">{colReadinessScore}%</span>, your primary recommended career role is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-650 font-black">{colTopCareer}</span>. Your engineering mindset shows high compatibility with modular modeling and structural execution.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-slate-200 pt-4 mt-6 text-[10px] font-bold text-slate-400">
            <span>CareerAssist • Dynamic Report Page 1</span>
            <span>Page 1 of 2</span>
          </div>
        </div>

        {/* ════ COLLEGE PAGE 2 ════ */}
        <div ref={page2Ref} className="report-page bg-white text-slate-800 p-8 mx-auto my-6 border border-slate-200 relative flex flex-col justify-between" style={{ width: '800px', height: '1130px', boxSizing: 'border-box' }}>
          <div>
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="w-10 h-10" />
                <div>
                  <h2 className="text-xl font-black text-slate-900">CareerAssist</h2>
                  <p className="text-[10px] uppercase font-extrabold text-blue-650 tracking-wider">AI Career Guidance Report</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-bold">Report ID: {reportId}</p>
                <p className="text-[10px] text-slate-500 font-bold">Date: {today}</p>
              </div>
            </div>

            {/* SWOT Section */}
            <div className="mb-6">
              <h3 className="text-xs uppercase font-extrabold text-blue-600 mb-3 tracking-wider">III. SWOT Analysis Profile</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { title: "Strengths", items: colSWOT.strengths, color: "text-emerald-800 border-emerald-200 bg-emerald-50/50", icon: "S" },
                  { title: "Weaknesses", items: colSWOT.weaknesses, color: "text-red-800 border-red-200 bg-red-50/50", icon: "W" },
                  { title: "Opportunities", items: colSWOT.opportunities, color: "text-blue-800 border-blue-200 bg-blue-50/50", icon: "O" },
                  { title: "Threats", items: colSWOT.threats, color: "text-amber-800 border-amber-200 bg-amber-50/50", icon: "T" }
                ].map((s, idx) => (
                  <div key={idx} className={`border p-4 rounded-xl flex flex-col ${s.color}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-5 h-5 rounded flex items-center justify-center font-black text-xs text-white bg-black/10 shrink-0">
                        {s.icon}
                      </div>
                      <span className="text-xs font-black uppercase">{s.title}</span>
                    </div>
                    <ul className="space-y-2 text-[9px] font-bold leading-relaxed grow">
                      {s.items.map((item, i) => (
                        <li key={i} className="flex gap-1.5 items-start">
                          <span className="opacity-70 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Career Matches */}
            <div className="mb-6">
              <h3 className="text-xs uppercase font-extrabold text-blue-600 mb-3 tracking-wider">IV. Target Career Recommendations</h3>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs font-semibold">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-extrabold text-[10px] uppercase">
                    <tr>
                      <th className="p-3 pl-4">Target Role</th>
                      <th className="p-3">Average Entry Salary</th>
                      <th className="p-3">Market Demand</th>
                      <th className="p-3 pr-4">Profile Fit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {colCareerMatches.map((career: any, idx: number) => {
                      const fitVal = idx === 0 ? 98 : idx === 1 ? 88 : idx === 2 ? 78 : 70;
                      return (
                        <tr key={idx} className="hover:bg-slate-50/50 transition">
                          <td className="p-3 pl-4">
                            <span className="font-extrabold text-slate-900 block">{career.role}</span>
                            <span className="text-[10px] text-slate-500 block font-semibold mt-0.5">{career.description}</span>
                          </td>
                          <td className="p-3 font-extrabold text-slate-800">{career.salary}</td>
                          <td className="p-3">
                            <span className="inline-block bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-extrabold border border-blue-100">
                              {career.demand}
                            </span>
                          </td>
                          <td className="p-3 pr-4">
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-slate-900">{fitVal}%</span>
                              <div className="w-12 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${fitVal}%` }}></div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Actions / Upskilling Roadmap */}
            <div>
              <h3 className="text-xs uppercase font-extrabold text-blue-600 mb-3 tracking-wider">V. Tailored Academic & Professional Roadmap</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <div className="text-xs font-bold text-blue-600 mb-2">🎓 Certifications to Pursue</div>
                  <ul className="space-y-2 text-[10px] font-semibold text-slate-600 leading-normal">
                    {colDiscipline === "engineering" ? (
                      <>
                        <li>• Advanced Programming (AWS/HackerRank)</li>
                        <li>• Cloud Foundations & Database Systems</li>
                        <li>• Agile Software Development & Git</li>
                      </>
                    ) : (
                      <>
                        <li>• Financial Analysis & Modeling</li>
                        <li>• Business Communication (edX)</li>
                        <li>• Advanced Analytics & Excel</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <div className="text-xs font-bold text-blue-600 mb-2">💻 Targeted Project Domains</div>
                  <ul className="space-y-2 text-[10px] font-semibold text-slate-600 leading-normal">
                    {colDiscipline === "engineering" ? (
                      <>
                        <li>• Modular Full Stack/Embedded APIs</li>
                        <li>• Database Grids & Scalable Infrastructure</li>
                        <li>• Machine Learning Models & Pipelines</li>
                      </>
                    ) : (
                      <>
                        <li>• Financial Audit Scenarios</li>
                        <li>• Commercial Market Research Models</li>
                        <li>• Business Strategy Case Studies</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                  <div className="text-xs font-bold text-blue-600 mb-2">🏢 Placements & Networking</div>
                  <ul className="space-y-2 text-[10px] font-semibold text-slate-600 leading-normal">
                    <li>• Apply to 3-6 month core domain internships</li>
                    <li>• Optimize LinkedIn and register on GitHub</li>
                    <li>• Participate in State & National hackathons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-slate-200 pt-4 mt-6 text-[10px] font-bold text-slate-400">
            <span>CareerAssist • Dynamic Report Page 2</span>
            <span>Page 2 of 2</span>
          </div>
        </div>
      </div>
    );
  }

  if (!data)
    return (
      <div className="no-data-container">
        <div className="no-data-content">
          <div className="no-data-icon">📋</div>
          <h2 className="no-data-title">No Assessment Data Found</h2>
          <p className="no-data-text">Please complete the assessment first.</p>
          <a href="/assessment" className="no-data-btn">
            Start Assessment
          </a>
        </div>
      </div>
    );

  return (
    <div className="report-wrapper">
      {/* Action Bar */}
      <div className="action-bar">
        <div className="action-left">
          <img src={logo} alt="" className="action-logo" />
          <span className="action-brand">CareerAssist</span>
          <span className="action-label">• Career Assessment Report</span>
        </div>
        <div className="action-right">
          <a href="/" className="action-home">
            ← Home
          </a>

          {saved && <span className="action-saved">✓ Saved</span>}

          <button
            onClick={() => {
              console.log("BUTTON WORKING");
              downloadPDF();
            }}
            className="action-btn"
            disabled={pdfLoading}
          >
            {pdfLoading ? "Generating..." : "Download PDF"}
          </button>
          <button
            onClick={() => setShowEmailModal(true)}
            className="action-btn action-btn-email"
            disabled={!saved || emailLoading}
          >
            {emailLoading ? "Emailing..." : "Share via Email"}
          </button>
          <button
            disabled={!saved}
            onClick={() => navigate("/dashboard")}
            className="action-btn"
          >
            View In Dashboard
          </button>
        </div>
      </div>

      {/* ════ PAGE 1 ════ */}
      <div ref={page1Ref} className="report-page">
        <PageHeader page={1} />

        {/* Top Section */}
        <div className="top-section">
          <div>
            <div className="section-label">CAREER ASSESSMENT REPORT</div>
            <div className="section-sub">
              Personalized Career Insights & Roadmap
            </div>
          </div>
          <div className="report-meta">
            <div>Report ID: {reportId}</div>
            <div>Date: {today}</div>
          </div>
        </div>

        {/* Student Info + Best Match + Score */}
        <div className="student-card">
          {/* Student Card */}
          <div>
            <div className="student-avatar-row">
              <div className="student-avatar">
                {data.name?.[0]?.toUpperCase() || "S"}
              </div>
              <div>
                <div className="student-name">{data.name || "Student"}</div>
                <div className="student-school">
                  {data.schoolName || data.collegeName || "School"}
                </div>
              </div>
            </div>
            {[
              {
                icon: "🎓",
                label: `Grade: ${data.grade}th (${data.stream || "Any Stream"})`,
              },
              {
                icon: "💡",
                label: `Interest: ${data.learningInterest || "N/A"}`,
              },
              {
                icon: "₹",
                label: `Family Income: ${data.annualIncome || "N/A"}`,
              },
              { icon: "📍", label: `District: ${data.district || "N/A"}` },
            ].map((item) => (
              <div key={item.label} className="student-info-row">
                <span className="student-info-icon">{item.icon}</span>
                <span className="student-info-text">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Best Career Match */}
          <div className="best-match">
            <div className="best-match-label">BEST CAREER MATCH</div>
            <div className="best-match-title">{topCareer}</div>
            <div className="best-match-text">{aiInsightText}</div>
            <div className="best-match-tags">
              {[
                recommendations[0]?.demand,
                recommendations[0]?.salary,
                recommendations[0]?.growth,
              ]
                .filter(Boolean)
                .map((tag, i) => (
                  <span key={i} className="best-match-tag">
                    {tag}
                  </span>
                ))}
            </div>
          </div>

          {/* Career Fit Score Donut */}
          <div className="fit-score">
            <svg width="110" height="110" viewBox="0 0 110 110">
              <circle
                cx="55"
                cy="55"
                r="44"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="10"
              />
              <circle
                cx="55"
                cy="55"
                r="44"
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="10"
                strokeDasharray={`${(careerFit / 100) * 276.5} 276.5`}
                strokeLinecap="round"
                transform="rotate(-90 55 55)"
              />
              <text
                x="55"
                y="50"
                textAnchor="middle"
                fontSize="18"
                fontWeight="800"
                fill="#1e3a8a"
              >
                {careerFit}%
              </text>
              <text
                x="55"
                y="64"
                textAnchor="middle"
                fontSize="8"
                fill="#64748b"
              >
                Career Fit
              </text>
            </svg>
            <div className="fit-label" style={{ color: fitColor }}>
              {fitLabel}
            </div>
          </div>
        </div>

        {/* KPI Row */}
        <div className="kpi-grid">
          {[
            {
              label: "Skills Score",
              value: `${avgSkillScore}%`,
              sub: avgSkillScore >= 80 ? "Above Average" : "Average Level",
              color: "#2563eb",
              barVal: avgSkillScore,
            },
            {
              label: "Financial Match",
              value: `${financial.feasibility}%`,
              sub:
                financial.feasibility >= 85
                  ? "Strong Feasibility"
                  : "Moderate Feasibility",
              color: "#059669",
              barVal: financial.feasibility,
            },
            {
              label: "Career Confidence",
              value: `${careerConfidence}%`,
              sub:
                careerConfidence >= 80
                  ? "Ready to Proceed"
                  : "Building Confidence",
              color: "#7c3aed",
              barVal: careerConfidence,
            },
            {
              label: "Future Demand",
              value: `${futureDemand}/100`,
              sub: "Excellent Outlook",
              color: "#0891b2",
              barVal: futureDemand,
            },
          ].map((kpi) => (
            <div key={kpi.label} className="kpi-item">
              <div className="kpi-label">{kpi.label}</div>
              <div className="kpi-value" style={{ color: kpi.color }}>
                {kpi.value}
              </div>
              <div className="kpi-bar">
                <div
                  className="kpi-bar-fill"
                  style={{ background: kpi.color, width: `${kpi.barVal}%` }}
                />
              </div>
              <div className="kpi-sub">{kpi.sub}</div>
            </div>
          ))}
        </div>

        {/* Top 3 Recommended Careers */}
        <div className="careers-section">
          <div className="careers-title">TOP 3 RECOMMENDED CAREERS</div>
          <div className="careers-grid">
            {recommendations.slice(0, 3).map((career, i) => (
              <div key={career.role} className="career-item">
                <div className="career-header">
                  <div className={`career-icon career-icon-${i}`}>
                    {careerIcons[career.role] || "💼"}
                  </div>
                  <div>
                    <div className="career-role">{career.role}</div>
                    <div className="career-degree">{career.degree}</div>
                  </div>
                </div>
                <div className="career-score">
                  <div className="career-score-bar">
                    <div
                      className={`career-score-fill career-score-fill-${i}`}
                      style={{ width: `${career.score}%` }}
                    />
                  </div>
                  <span className={`career-score-text career-score-text-${i}`}>
                    {career.score}%
                  </span>
                </div>
                <div className={`career-match career-match-${i}`}>
                  {career.matchLabel}
                </div>
                {[career.demand, career.salary, career.growth].map((t) => (
                  <div key={t} className="career-detail">
                    ↗ {t}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Radar + Personality */}
        <div className="radar-personality-grid">
          {/* Radar */}
          <div className="radar-container">
            <div className="radar-title">SKILLS RADAR</div>
            <RadarChart data={radarData} />
            <div className="radar-legend">
              <div className="radar-legend-item">
                <div className="radar-legend-line radar-legend-line-user" />
                <span className="radar-legend-text">Your Score</span>
              </div>
              <div className="radar-legend-item">
                <div className="radar-legend-line radar-legend-line-avg" />
                <span className="radar-legend-text">Average Student</span>
              </div>
            </div>
          </div>

          {/* Personality + AI Insight */}
          <div className="personality-container">
            <div className="personality-card">
              <div className="personality-title">PERSONALITY & STRENGTHS</div>
              <div className="personality-list">
                {personalityTraits.map((trait) => (
                  <div key={trait.label} className="personality-item">
                    <div className="personality-label">
                      <div
                        className={`personality-dot personality-dot-${trait.level === "High" ? "high" : trait.level === "Medium" ? "medium" : "low"}`}
                      />
                      <span className="personality-text">{trait.label}</span>
                    </div>
                    <span
                      className={`personality-level personality-level-${trait.level === "High" ? "high" : trait.level === "Medium" ? "medium" : "low"}`}
                    >
                      {trait.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ai-insight">
              <div className="ai-insight-header">
                <span className="ai-insight-icon">🤖</span>
                <span className="ai-insight-label">AI INSIGHT</span>
              </div>
              <div className="ai-insight-text">
                You are a curious and analytical learner with strong problem
                solving ability and leadership potential. Focus on communication
                skills and practical projects to unlock your full potential.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════ PAGE 2 ════ */}
      <div ref={page2Ref} className="report-page">
        <PageHeader page={2} />

        {/* Career Roadmap */}
        <div className="roadmap-section">
          <div className="roadmap-title">
            YOUR CAREER ROADMAP – {topCareer.toUpperCase()}
          </div>
          <div className="roadmap-grid">
            {roadmap.map((step, i) => (
              <>
                <div key={`step-${i}`} className="roadmap-step">
                  <div
                    className={`roadmap-circle ${i === 0 ? "roadmap-circle-active" : ""}`}
                  >
                    {step.icon}
                  </div>
                  <div className="roadmap-step-title">{step.title}</div>
                  <div className="roadmap-step-sub">{step.sub}</div>
                  <div className="roadmap-step-age">
                    {(step as any).age || ""}
                  </div>
                  {i > 0 && (
                    <div className="roadmap-step-number">{step.step}</div>
                  )}
                </div>
                {i < roadmap.length - 1 && (
                  <div key={`arrow-${i}`} className="roadmap-arrow">
                    <div className="roadmap-arrow-line">
                      <span className="roadmap-arrow-icon">›</span>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>

        {/* Education Path + Skill Gap */}
        <div className="edu-skill-grid">
          {/* Education Path */}
          <div className="edu-card">
            <div className="edu-title">RECOMMENDED EDUCATION PATH</div>
            {recommendations.slice(0, 4).map((rec, i) => (
              <div key={`${rec.degree}-${i}`} className="edu-item">
                <div
                  className={`edu-number edu-number-${i === 0 ? "active" : ""}`}
                >
                  {i + 1}
                </div>
                <div className="edu-content">
                  <div className="edu-degree">{rec.degree}</div>
                  <div className="edu-domain">
                    {rec.domain.charAt(0).toUpperCase() + rec.domain.slice(1)} ·{" "}
                    {rec.degree.includes("B.Tech") ||
                    rec.degree.includes("MBBS")
                      ? "4–5 Years"
                      : "3 Years"}
                  </div>
                </div>
                <div
                  className={`edu-score edu-score-${i === 0 ? "active" : ""}`}
                >
                  <div>{rec.score}%</div>
                  {i === 0 && <div className="edu-best">Best Match</div>}
                </div>
              </div>
            ))}
          </div>

          {/* Skill Gap */}
          <div className="skill-gap-card">
            <div className="skill-gap-title">SKILL GAP ANALYSIS</div>
            <div className="skill-gap-section">
              <div className="skill-gap-strengths-title">Your Strengths</div>
              {skillGap.strengths.map((s) => (
                <div key={s} className="skill-gap-item">
                  <div className="skill-gap-check">
                    <span className="skill-gap-check-icon">✓</span>
                  </div>
                  <span className="skill-gap-text">{s}</span>
                </div>
              ))}
            </div>
            <div className="skill-gap-section">
              <div className="skill-gap-improve-title">Areas to Improve</div>
              {skillGap.improve.map((s) => (
                <div key={s} className="skill-gap-item">
                  <div className="skill-gap-improve-icon">
                    <span className="skill-gap-improve-symbol">⚡</span>
                  </div>
                  <span className="skill-gap-text">{s}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="skill-gap-focus-title">Recommended Focus</div>
              <div className="skill-gap-focus-tags">
                {[
                  "Improve Communication",
                  "Build Real World Projects",
                  "Gain Industry Certifications",
                ].map((focus) => (
                  <div key={focus} className="skill-gap-focus-tag">
                    {focus}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications + Financial + SWOT */}
        <div className="certs-fin-swot-grid">
          {/* Certifications */}
          <div className="certs-card">
            <div className="certs-title">TOP CERTIFICATION RECOMMENDATIONS</div>
            {certs.slice(0, 5).map((cert) => (
              <div key={cert.name} className="cert-item">
                <span className="cert-icon">{cert.icon}</span>
                <div className="cert-content">
                  <div className="cert-name">{cert.name}</div>
                  <div className="cert-platform">{cert.platform}</div>
                </div>
                <span
                  className={`cert-priority cert-priority-${cert.priority.toLowerCase()}`}
                >
                  {cert.priority}
                </span>
              </div>
            ))}
          </div>

          {/* Financial */}
          <div className="financial-card">
            <div className="financial-title">
              SCHOLARSHIP & FINANCIAL SUMMARY
            </div>
            {[
              {
                label: "Financial Feasibility",
                value: `${financial.feasibility}%`,
                color: "#2563eb",
              },
              {
                label: "Scholarship Eligibility",
                value: financial.schElig,
                color:
                  financial.schElig === "High"
                    ? "#16a34a"
                    : financial.schElig === "Medium"
                      ? "#ea580c"
                      : "#dc2626",
              },
              {
                label: "Education Loan",
                value: financial.loanStatus,
                color:
                  financial.loanStatus === "Recommended"
                    ? "#ea580c"
                    : "#64748b",
              },
            ].map((item) => (
              <div key={item.label} className="financial-item">
                <span className="financial-label">{item.label}</span>
                <span className="financial-value" style={{ color: item.color }}>
                  {item.value}
                </span>
              </div>
            ))}
            <div className="financial-cost">
              <div className="financial-cost-label">
                Estimated Education Cost
              </div>
              <div className="financial-cost-value">{financial.costRange}</div>
              <div className="financial-cost-note">
                (Depending on courses & colleges)
              </div>
            </div>
          </div>

          {/* SWOT */}
          <div className="swot-card">
            <div className="swot-title">SWOT ANALYSIS</div>
            <div className="swot-grid">
              {[
                {
                  title: "Strengths",
                  items: swot.strengths,
                  bg: "#dcfce7",
                  tc: "#166534",
                  ic: "#16a34a",
                  emoji: "S",
                },
                {
                  title: "Weaknesses",
                  items: swot.weaknesses,
                  bg: "#fee2e2",
                  tc: "#991b1b",
                  ic: "#dc2626",
                  emoji: "W",
                },
                {
                  title: "Opportunities",
                  items: swot.opportunities,
                  bg: "#dbeafe",
                  tc: "#1e40af",
                  ic: "#2563eb",
                  emoji: "O",
                },
                {
                  title: "Threats",
                  items: swot.threats,
                  bg: "#fef3c7",
                  tc: "#92400e",
                  ic: "#d97706",
                  emoji: "T",
                },
              ].map((q) => (
                <div
                  key={q.title}
                  className="swot-item"
                  style={{ background: q.bg }}
                >
                  <div className="swot-header">
                    <div className="swot-icon" style={{ background: q.ic }}>
                      {q.emoji}
                    </div>
                    <span className="swot-title-text" style={{ color: q.tc }}>
                      {q.title}
                    </span>
                  </div>
                  {q.items.slice(0, 3).map((item) => (
                    <div key={item} className="swot-text">
                      • {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 90-Day Action Plan */}
        <div className="action-plan">
          <div className="action-plan-title">NEXT 90 DAYS ACTION PLAN</div>
          <div className="action-plan-grid">
            {actionPlan.slice(0, 8).map((step, i) => (
              <>
                <div key={`action-${i}`} className="action-plan-step">
                  <div className="action-plan-circle">{step.icon}</div>
                  <div className="action-plan-label">{step.label}</div>
                </div>
                {i < actionPlan.slice(0, 8).length - 1 && (
                  <div key={`action-arrow-${i}`} className="action-plan-arrow">
                    <span className="action-plan-arrow-icon">›</span>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ─── Base Styles ───────────────────────────────────────────────────── */
        .report-wrapper {
          min-height: 100vh;
          background: #f1f5f9;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          padding: 0 16px;
        }

        /* ─── Action Bar ───────────────────────────────────────────────────── */
        .action-bar {
          background: #1e3a8a;
          padding: 12px 16px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 -16px;
          padding-left: 16px;
          padding-right: 16px;
        }

        .action-left {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .action-logo {
          width: 28px;
          height: 28px;
        }

        .action-brand {
          color: white;
          font-weight: 700;
          font-size: 16px;
        }

        .action-label {
          color: #93c5fd;
          font-size: 12px;
          margin-left: 8px;
        }

        .action-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .action-home {
          color: #93c5fd;
          font-size: 13px;
          text-decoration: none;
        }

        .action-saved {
          color: #86efac;
          font-size: 12px;
        }

        .action-btn {
          background: white;
          color: #1e3a8a;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-size: 13px;
        }

        .action-btn-email {
          background: #3b82f6 !important;
          color: white !important;
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
          transition: all 0.2s ease-in-out;
        }

        .action-btn-email:hover {
          background: #2563eb !important;
        }

        .action-btn-email:disabled {
          background: #93c5fd !important;
          cursor: not-allowed;
        }

        /* ─── Email Sharing Modal & Components ─────────────────────────────── */
        .toast-notification {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: #1e293b;
          color: #ffffff;
          padding: 16px 20px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-width: 320px;
          max-width: 450px;
          font-size: 13px;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .toast-success {
          border-left: 4px solid #10b981;
        }

        .toast-error {
          border-left: 4px solid #ef4444;
        }

        .toast-info {
          border-left: 4px solid #3b82f6;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-grow: 1;
        }

        .toast-icon {
          font-size: 16px;
        }

        .toast-message {
          font-weight: 500;
        }

        .toast-close {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 20px;
          cursor: pointer;
          line-height: 1;
          padding: 0 4px;
        }

        .toast-close:hover {
          color: #ffffff;
        }

        .email-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .email-modal-card {
          background: #ffffff;
          border-radius: 16px;
          width: 100%;
          max-width: 440px;
          padding: 24px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .email-modal-title {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px 0;
        }

        .email-modal-desc {
          font-size: 13px;
          color: #64748b;
          margin: 0 0 20px 0;
          line-height: 1.5;
        }

        .email-input-group {
          margin-bottom: 20px;
        }

        .email-input-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }

        .email-input-field {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid #cbd5e1;
          font-size: 14px;
          color: #0f172a;
          background: #f8fafc;
          box-sizing: border-box;
        }

        .email-input-field:focus {
          outline: none;
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        .email-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .email-modal-btn {
          padding: 10px 18px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          border: none;
        }

        .email-modal-btn-cancel {
          background: #e2e8f0;
          color: #475569;
        }

        .email-modal-btn-cancel:hover {
          background: #cbd5e1;
        }

        .email-modal-btn-send {
          background: #3b82f6;
          color: white;
        }

        .email-modal-btn-send:hover {
          background: #2563eb;
        }

        .email-modal-btn-send:disabled {
          background: #93c5fd;
          cursor: not-allowed;
        }

        .fallback-modal-card {
          background: #ffffff;
          border-radius: 16px;
          width: 100%;
          max-width: 650px;
          max-height: 85vh;
          overflow-y: auto;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          gap: 16px;
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fallback-warning-banner {
          background: #fffbeb;
          border: 1px solid #fef3c7;
          border-left: 4px solid #d97706;
          border-radius: 8px;
          padding: 14px;
          text-align: left;
        }

        .fallback-warning-title {
          font-weight: 800;
          color: #78350f;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .fallback-warning-text {
          font-size: 12px;
          color: #92400e;
          margin: 0 0 8px 0;
          line-height: 1.4;
        }

        .fallback-warning-tip {
          font-size: 11px;
          color: #b45309;
          margin: 0;
          background: rgba(255, 255, 255, 0.5);
          padding: 8px;
          border-radius: 6px;
          line-height: 1.5;
        }

        .fallback-preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 10px;
        }

        .fallback-preview-header h4 {
          margin: 0;
          font-size: 14px;
          color: #475569;
        }

        .fallback-close-btn {
          background: none;
          border: none;
          color: #ef4444;
          font-weight: 700;
          cursor: pointer;
          font-size: 13px;
        }

        .email-sandbox {
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          overflow: hidden;
          background: #f8fafc;
        }

        .email-sandbox-header {
          background: #f1f5f9;
          padding: 10px 14px;
          border-bottom: 1px solid #e2e8f0;
          font-size: 11px;
          color: #64748b;
          line-height: 1.6;
          text-align: left;
        }

        .email-sandbox-body {
          max-height: 400px;
          overflow-y: auto;
        }

        .pdf-loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 16px;
          gap: 16px;
        }

        .pdf-loading-overlay::before {
          content: "";
          width: 40px;
          height: 40px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* ─── Report Pages ──────────────────────────────────────────────────── */
        .report-page {
          max-width: 794px;
          width: 100%;
          min-height: 1123px;
          background: white;
          margin: 24px auto 0;
          padding: 20px 16px;
          box-sizing: border-box;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          border-radius: 8px;
        }

        .report-page:last-child {
          margin-bottom: 32px;
        }

        /* ─── Page Header ──────────────────────────────────────────────────── */
        .report-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          flex-wrap: wrap;
          gap: 8px;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .header-logo {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }

        .header-title {
          font-size: 13px;
          font-weight: 700;
          color: #1e3a8a;
        }

        .header-subtitle {
          font-size: 8px;
          color: #64748b;
        }

        .header-page {
          background: #1e3a8a;
          color: white;
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 9px;
          font-weight: 700;
        }

        /* ─── Top Section ──────────────────────────────────────────────────── */
        .top-section {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 8px;
        }

        .section-label {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .section-sub {
          font-size: 11px;
          color: #94a3b8;
        }

        .report-meta {
          text-align: right;
          font-size: 10px;
          color: #64748b;
          align-self: flex-start;
        }

        /* ─── Student Card ─────────────────────────────────────────────────── */
        .student-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 14px;
          background: #f8fafc;
          border-radius: 16px;
          padding: 16px;
        }

        .student-avatar-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .student-avatar {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 18px;
          flex-shrink: 0;
        }

        .student-name {
          font-size: 15px;
          font-weight: 700;
          color: #1e293b;
          word-break: break-word;
        }

        .student-school {
          font-size: 10px;
          color: #64748b;
          word-break: break-word;
        }

        .student-info-row {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          margin-bottom: 5px;
        }

        .student-info-icon {
          font-size: 11px;
          width: 16px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .student-info-text {
          font-size: 10px;
          color: #475569;
          word-break: break-word;
          line-height: 1.4;
        }

        .best-match {
          border-top: 1px solid #e2e8f0;
          padding-top: 12px;
        }

        .best-match-label {
          font-size: 9px;
          font-weight: 700;
          color: #7c3aed;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .best-match-title {
          font-size: 22px;
          font-weight: 800;
          color: #1e3a8a;
          line-height: 1.1;
          margin-bottom: 8px;
          word-break: break-word;
        }

        .best-match-text {
          font-size: 10px;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .best-match-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .best-match-tag {
          font-size: 9px;
          background: #eff6ff;
          color: #1d4ed8;
          border-radius: 6px;
          padding: 2px 7px;
          font-weight: 600;
        }

        .fit-score {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-top: 1px solid #e2e8f0;
          padding-top: 12px;
        }

        .fit-label {
          font-size: 10px;
          font-weight: 700;
          text-align: center;
        }

        /* ─── KPI Grid ─────────────────────────────────────────────────────── */
        .kpi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 14px;
        }

        .kpi-item {
          background: #f8fafc;
          border-radius: 12px;
          padding: 10px 12px;
          border: 1px solid #e2e8f0;
        }

        .kpi-label {
          font-size: 10px;
          color: #64748b;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .kpi-value {
          font-size: 20px;
          font-weight: 800;
        }

        .kpi-bar {
          width: 100%;
          height: 4px;
          background: #e2e8f0;
          border-radius: 4px;
          margin-top: 4px;
          margin-bottom: 4px;
        }

        .kpi-bar-fill {
          height: 4px;
          border-radius: 4px;
        }

        .kpi-sub {
          font-size: 9px;
          color: #64748b;
          line-height: 1.3;
        }

        /* ─── Careers Section ──────────────────────────────────────────────── */
        .careers-section {
          margin-bottom: 14px;
        }

        .careers-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .careers-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .career-item {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
        }

        .career-header {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 6px;
        }

        .career-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
        }

        .career-icon-0 {
          background: #dbeafe;
        }
        .career-icon-1 {
          background: #ede9fe;
        }
        .career-icon-2 {
          background: #dcfce7;
        }

        .career-role {
          font-size: 11px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.3;
        }

        .career-degree {
          font-size: 9px;
          color: #64748b;
          line-height: 1.3;
        }

        .career-score {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .career-score-bar {
          height: 5px;
          flex: 1;
          background: #e2e8f0;
          border-radius: 4px;
        }

        .career-score-fill {
          height: 5px;
          border-radius: 4px;
        }

        .career-score-fill-0 {
          background: #2563eb;
        }
        .career-score-fill-1 {
          background: #7c3aed;
        }
        .career-score-fill-2 {
          background: #059669;
        }

        .career-score-text {
          font-size: 9px;
          font-weight: 700;
          white-space: nowrap;
        }

        .career-score-text-0 {
          color: #2563eb;
        }
        .career-score-text-1 {
          color: #7c3aed;
        }
        .career-score-text-2 {
          color: #059669;
        }

        .career-match {
          font-size: 9px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .career-match-0 {
          color: #2563eb;
        }
        .career-match-1 {
          color: #7c3aed;
        }
        .career-match-2 {
          color: #059669;
        }

        .career-detail {
          display: flex;
          align-items: flex-start;
          gap: 4px;
          margin-bottom: 2px;
          font-size: 9px;
          color: #64748b;
          line-height: 1.4;
        }

        /* ─── Radar + Personality Grid ────────────────────────────────────── */
        .radar-personality-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .radar-container {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .radar-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
          width: 100%;
        }

        .radar-legend {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 4px;
          flex-wrap: wrap;
        }

        .radar-legend-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .radar-legend-line {
          width: 12px;
          height: 2px;
        }

        .radar-legend-line-user {
          background: #2563eb;
        }

        .radar-legend-line-avg {
          background: #94a3b8;
          border-top: 2px dashed #94a3b8;
        }

        .radar-legend-text {
          font-size: 8px;
          color: #64748b;
        }

        .personality-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .personality-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
          flex: 1;
        }

        .personality-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .personality-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .personality-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .personality-label {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .personality-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .personality-dot-high {
          background: #16a34a;
        }
        .personality-dot-medium {
          background: #ea580c;
        }
        .personality-dot-low {
          background: #dc2626;
        }

        .personality-text {
          font-size: 10px;
          color: #374151;
        }

        .personality-level {
          font-size: 10px;
          font-weight: 700;
          margin-left: 8px;
        }

        .personality-level-high {
          color: #16a34a;
        }
        .personality-level-medium {
          color: #ea580c;
        }
        .personality-level-low {
          color: #dc2626;
        }

        .ai-insight {
          background: linear-gradient(135deg, #1e3a8a, #4338ca);
          border-radius: 12px;
          padding: 12px;
          color: white;
        }

        .ai-insight-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 5px;
        }

        .ai-insight-icon {
          font-size: 14px;
        }

        .ai-insight-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #bfdbfe;
        }

        .ai-insight-text {
          font-size: 10px;
          color: #e0e7ff;
          line-height: 1.5;
        }

        /* ─── Roadmap ──────────────────────────────────────────────────────── */
        .roadmap-section {
          margin-bottom: 16px;
        }

        .roadmap-title {
          font-size: 11px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }

        .roadmap-grid {
          display: grid;
          grid-template-columns: repeat(11, 1fr);
          align-items: start;
          gap: 4px 0;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .roadmap-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-column: span 1;
          min-width: 60px;
        }

        .roadmap-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: white;
          border: 2px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          margin-bottom: 6px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          flex-shrink: 0;
        }

        .roadmap-circle-active {
          background: #1e3a8a;
          border: none;
        }

        .roadmap-step-title {
          font-size: 9px;
          font-weight: 700;
          color: #1e293b;
          text-align: center;
          margin-bottom: 2px;
          line-height: 1.3;
          word-break: break-word;
          width: 100%;
          padding: 0 2px;
        }

        .roadmap-step-sub {
          font-size: 8px;
          color: #64748b;
          text-align: center;
          margin-bottom: 3px;
          line-height: 1.3;
          word-break: break-word;
          width: 100%;
          padding: 0 2px;
        }

        .roadmap-step-age {
          font-size: 8px;
          color: #7c3aed;
          font-weight: 600;
          text-align: center;
        }

        .roadmap-step-number {
          font-size: 8px;
          color: #1e3a8a;
          font-weight: 700;
          margin-top: 2px;
          text-align: center;
        }

        .roadmap-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 16px;
          grid-column: span 1;
        }

        .roadmap-arrow-line {
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #bfdbfe, #7c3aed);
          border-radius: 2px;
          position: relative;
        }

        .roadmap-arrow-icon {
          position: absolute;
          right: -6px;
          top: -7px;
          color: #7c3aed;
          font-size: 10px;
        }

        /* ─── Education + Skill Gap Grid ──────────────────────────────────── */
        .edu-skill-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .edu-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
        }

        .edu-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .edu-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          padding: 8px;
          background: white;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .edu-number {
          width: 22px;
          height: 22px;
          background: #e2e8f0;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #475569;
          font-weight: 700;
          font-size: 10px;
          flex-shrink: 0;
        }

        .edu-number-active {
          background: #2563eb;
          color: white;
        }

        .edu-content {
          flex: 1;
          min-width: 0;
        }

        .edu-degree {
          font-size: 10px;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.4;
          word-break: break-word;
        }

        .edu-domain {
          font-size: 9px;
          color: #64748b;
          margin-top: 1px;
        }

        .edu-score {
          font-size: 10px;
          font-weight: 700;
          color: #64748b;
          flex-shrink: 0;
          text-align: right;
        }

        .edu-score-active {
          color: #2563eb;
        }

        .edu-best {
          font-size: 8px;
          color: #059669;
          margin-top: 2px;
        }

        .skill-gap-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
        }

        .skill-gap-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .skill-gap-section {
          margin-bottom: 10px;
        }

        .skill-gap-strengths-title {
          font-size: 10px;
          font-weight: 700;
          color: #16a34a;
          margin-bottom: 5px;
        }

        .skill-gap-improve-title {
          font-size: 10px;
          font-weight: 700;
          color: #ea580c;
          margin-bottom: 5px;
        }

        .skill-gap-item {
          display: flex;
          align-items: flex-start;
          gap: 5px;
          margin-bottom: 5px;
        }

        .skill-gap-check {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #dcfce7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .skill-gap-check-icon {
          font-size: 8px;
          color: #16a34a;
        }

        .skill-gap-improve-icon {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fff7ed;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .skill-gap-improve-symbol {
          font-size: 8px;
          color: #ea580c;
        }

        .skill-gap-text {
          font-size: 10px;
          color: #374151;
          line-height: 1.4;
        }

        .skill-gap-focus-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 5px;
        }

        .skill-gap-focus-tags {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .skill-gap-focus-tag {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 6px;
          padding: 3px 7px;
          font-size: 9px;
          color: #1d4ed8;
          font-weight: 600;
        }

        /* ─── Certs + Financial + SWOT Grid ───────────────────────────────── */
        .certs-fin-swot-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }

        .certs-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
        }

        .certs-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
          padding: 6px 8px;
          background: white;
          border-radius: 7px;
          border: 1px solid #e2e8f0;
        }

        .cert-icon {
          font-size: 13px;
          flex-shrink: 0;
        }

        .cert-content {
          flex: 1;
          min-width: 0;
        }

        .cert-name {
          font-size: 10px;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.4;
          word-break: break-word;
        }

        .cert-platform {
          font-size: 8px;
          color: #64748b;
        }

        .cert-priority {
          font-size: 8px;
          font-weight: 700;
          padding: 2px 5px;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .cert-priority-high {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .cert-priority-medium {
          background: #ede9fe;
          color: #7c3aed;
        }

        .cert-priority-low {
          background: #f1f5f9;
          color: #64748b;
        }

        .financial-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
        }

        .financial-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .financial-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 7px 0;
          border-bottom: 1px solid #e2e8f0;
        }

        .financial-label {
          font-size: 10px;
          color: #374151;
          line-height: 1.4;
        }

        .financial-value {
          font-size: 10px;
          font-weight: 700;
          margin-left: 6px;
          flex-shrink: 0;
        }

        .financial-cost {
          margin-top: 10px;
          background: linear-gradient(135deg, #eff6ff, #f0f9ff);
          border-radius: 8px;
          padding: 8px;
          text-align: center;
        }

        .financial-cost-label {
          font-size: 9px;
          color: #64748b;
          margin-bottom: 2px;
        }

        .financial-cost-value {
          font-size: 15px;
          font-weight: 800;
          color: #1e3a8a;
        }

        .financial-cost-note {
          font-size: 8px;
          color: #64748b;
          line-height: 1.4;
        }

        .swot-card {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px;
          border: 1px solid #e2e8f0;
        }

        .swot-title {
          font-size: 10px;
          font-weight: 700;
          color: #1e3a8a;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .swot-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .swot-item {
          border-radius: 8px;
          padding: 7px;
        }

        .swot-header {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 5px;
        }

        .swot-icon {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 9px;
          font-weight: 800;
          flex-shrink: 0;
        }

        .swot-title-text {
          font-size: 9px;
          font-weight: 700;
        }

        .swot-text {
          font-size: 8.5px;
          color: #374151;
          margin-bottom: 3px;
          padding-left: 4px;
          line-height: 1.4;
          word-break: break-word;
        }

        /* ─── Action Plan ──────────────────────────────────────────────────── */
        .action-plan {
          background: linear-gradient(135deg, #1e3a8a, #4338ca);
          border-radius: 12px;
          padding: 14px;
        }

        .action-plan-title {
          font-size: 10px;
          font-weight: 700;
          color: #bfdbfe;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }

        .action-plan-grid {
          display: grid;
          grid-template-columns: repeat(15, 1fr);
          align-items: start;
          gap: 4px 0;
          overflow-x: auto;
          padding-bottom: 8px;
        }

        .action-plan-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-column: span 1;
          min-width: 50px;
        }

        .action-plan-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          margin-bottom: 5px;
        }

        .action-plan-label {
          font-size: 8px;
          color: white;
          text-align: center;
          font-weight: 600;
          line-height: 1.3;
          word-break: break-word;
          width: 100%;
          padding: 0 2px;
        }

        .action-plan-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 15px;
          grid-column: span 1;
        }

        .action-plan-arrow-icon {
          color: rgba(255,255,255,0.5);
          font-size: 16px;
        }

        /* ─── No Data ──────────────────────────────────────────────────────── */
        .no-data-container {
          min-height: 100vh;
          background: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .no-data-content {
          text-align: center;
          max-width: 400px;
          width: 100%;
        }

        .no-data-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .no-data-title {
          font-size: 24px;
          font-weight: 700;
          color: #1e293b;
        }

        .no-data-text {
          color: #64748b;
          margin-top: 8px;
        }

        .no-data-btn {
          display: inline-block;
          margin-top: 20px;
          background: #2563eb;
          color: white;
          padding: 12px 24px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
        }

        /* ─── Responsive Breakpoints ──────────────────────────────────────── */

        /* Tablet and up */
        @media (min-width: 640px) {
          .action-label {
            display: inline;
          }

          .kpi-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .careers-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .radar-personality-grid {
            grid-template-columns: 220px 1fr;
          }

          .edu-skill-grid {
            grid-template-columns: 1fr 1fr;
          }

          .report-meta {
            align-self: flex-end;
          }

          .top-section {
            flex-direction: row;
            align-items: flex-start;
          }
        }

        /* Desktop and up */
        @media (min-width: 768px) {
          .student-card {
            grid-template-columns: 220px 1fr 160px;
          }

          .best-match {
            border-top: none;
            border-left: 1px solid #e2e8f0;
            padding-left: 16px;
            padding-top: 0;
          }

          .fit-score {
            border-top: none;
            padding-top: 0;
          }

          .certs-fin-swot-grid {
            grid-template-columns: 1.2fr 1fr 1fr;
          }
        }

        /* Small screens */
        @media (max-width: 480px) {
          .report-page {
            padding: 16px 12px;
          }

          .student-name {
            font-size: 14px;
          }

          .best-match-title {
            font-size: 18px;
          }

          .kpi-value {
            font-size: 17px;
          }

          .roadmap-grid {
            grid-template-columns: repeat(11, 80px);
          }

          .action-plan-grid {
            grid-template-columns: repeat(15, 60px);
          }

          .swot-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      {/* Loading Overlay */}
      {(pdfLoading || emailLoading) && (
        <div className="pdf-loading-overlay">
          <span>{pdfLoading ? "Generating & Uploading Professional PDF Report..." : "Sending Professional Email Report..."}</span>
        </div>
      )}

      {/* Toast Notification */}
      {notification && (
        <div className={`toast-notification toast-${notification.type}`}>
          <div className="toast-content">
            <span className="toast-icon">
              {notification.type === 'success' ? '✅' : notification.type === 'error' ? '⚠️' : '📧'}
            </span>
            <span className="toast-message">{notification.message}</span>
          </div>
          <button className="toast-close" onClick={() => setNotification(null)}>×</button>
        </div>
      )}

      {/* Share via Email Confirmation Modal */}
      {showEmailModal && (
        <div className="email-modal-overlay">
          <div className="email-modal-card">
            <h3 className="email-modal-title">Share Career Report via Email</h3>
            <p className="email-modal-desc">
              We'll send a summary of your career matches, SWOT analysis, and a secure download link for your full 2-page PDF report.
            </p>
            <div className="email-input-group">
              <label className="email-input-label">Recipient Email Address</label>
              <input
                type="email"
                className="email-input-field"
                placeholder="Enter email address"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
              />
            </div>
            <div className="email-modal-actions">
              <button 
                type="button" 
                className="email-modal-btn email-modal-btn-cancel" 
                onClick={() => setShowEmailModal(false)}
                disabled={emailLoading}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="email-modal-btn email-modal-btn-send"
                onClick={async () => {
                  setShowEmailModal(false);
                  await sendEmailReport(recipientEmail);
                }}
                disabled={emailLoading || !recipientEmail}
              >
                {emailLoading ? "Sending..." : "Send Email"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fallback Email Preview Modal */}
      {showFallbackModal && (
        <div className="email-modal-overlay">
          <div className="fallback-modal-card">
            <div className="fallback-warning-banner">
              <div className="fallback-warning-title">⚠️ Integration Sandbox Mode</div>
              <p className="fallback-warning-text">
                The career report email has been compiled successfully. However, the database/backend's <code>RESEND_API_KEY</code> environment variable is not configured.
              </p>
              <p className="fallback-warning-tip">
                <strong>Developer Notice:</strong> To enable real emails, deploy this function to your Supabase project and set the secret: <br/>
                <code>supabase secrets set RESEND_API_KEY=re_yourkey</code>
              </p>
            </div>
            
            <div className="fallback-preview-header">
              <h4>Email Draft Sent to: <span style={{ color: '#2563eb' }}>{recipientEmail}</span></h4>
              <button onClick={() => setShowFallbackModal(false)} className="fallback-close-btn">Close Preview</button>
            </div>

            {/* Email Client Simulation Sandbox */}
            <div className="email-sandbox">
              <div className="email-sandbox-header">
                <div><strong>From:</strong> CareerAssist &lt;onboarding@resend.dev&gt;</div>
                <div><strong>To:</strong> {recipientEmail}</div>
                <div><strong>Subject:</strong> CareerAssist: Professional Career Assessment Report for {data?.name || "Student"}</div>
              </div>
              <div className="email-sandbox-body">
                {/* Visual rendering of the HTML Template */}
                <div style={{ background: '#f8fafc', padding: '16px 8px', fontFamily: 'sans-serif' }}>
                  <div style={{ maxWidth: '500px', margin: '0 auto', background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                    <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', padding: '20px', color: '#ffffff', textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1.5px', opacity: 0.8 }}>Career Assessment</div>
                      <h2 style={{ margin: '4px 0 0 0', fontSize: '20px', fontWeight: 'bold' }}>CareerAssist</h2>
                    </div>
                    <div style={{ padding: '20px', color: '#334155', fontSize: '13px', lineHeight: '1.5' }}>
                      <p>Dear <strong>{data?.name || "Student"}</strong>,</p>
                      <p>Congratulations on completing your Career Assessment! Based on our analysis, we have prepared your personalized career report.</p>
                      
                      <div style={{ background: '#f1f5f9', borderRadius: '8px', padding: '12px', margin: '12px 0', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#64748b', fontWeight: 'bold' }}>Recommended Path</div>
                        <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1e3a8a', margin: '4px 0' }}>{topCareer}</div>
                        <div style={{ fontSize: '10px', textTransform: 'uppercase', color: '#64748b', fontWeight: 'bold', marginTop: '8px' }}>Fit Score: <span style={{ color: '#2563eb', fontSize: '12px' }}>{careerFit}%</span></div>
                      </div>

                      {recommendations && recommendations.length > 0 && (
                        <div>
                          <h4 style={{ color: '#1e3a8a', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', margin: '16px 0 8px 0' }}>Top Recommended Careers</h4>
                          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                            <tbody>
                              {recommendations.slice(0, 3).map((rec, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                  <td style={{ padding: '6px 0', fontWeight: 'bold', color: '#1e3a8a', textAlign: 'left' }}>{rec.role}</td>
                                  <td style={{ padding: '6px 0', color: '#64748b', textAlign: 'left' }}>{rec.degree}</td>
                                  <td style={{ padding: '6px 0', textAlign: 'right', fontWeight: 'bold', color: '#10b981' }}>{rec.score}% Match</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      <h4 style={{ color: '#1e3a8a', borderBottom: '1px solid #e2e8f0', paddingBottom: '4px', margin: '20px 0 8px 0' }}>SWOT Assessment Highlights</h4>
                      <div style={{ background: '#f0fdf4', borderLeft: '3px solid #16a34a', padding: '8px', borderRadius: '4px', marginBottom: '8px', fontSize: '11px', textAlign: 'left' }}>
                        <strong style={{ color: '#14532d' }}>Key Strengths:</strong>
                        <ul style={{ margin: '4px 0 0 0', paddingLeft: '14px', color: '#166534' }}>
                          {swot?.strengths?.map((s, idx) => <li key={idx}>{s}</li>) || <li>Continuous Learning</li>}
                        </ul>
                      </div>
                      <div style={{ background: '#fffbeb', borderLeft: '3px solid #d97706', padding: '8px', borderRadius: '4px', fontSize: '11px', textAlign: 'left' }}>
                        <strong style={{ color: '#78350f' }}>Development Areas:</strong>
                        <ul style={{ margin: '4px 0 0 0', paddingLeft: '14px', color: '#92400e' }}>
                          {swot?.weaknesses?.map((w, idx) => <li key={idx}>{w}</li>) || <li>Focus Improvement</li>}
                        </ul>
                      </div>

                      <p style={{ marginTop: '16px', textAlign: 'left' }}>To view your detailed roadmap, milestones, and certified courses, download the full PDF report:</p>
                      
                      <div style={{ textAlign: 'center', margin: '20px 0 10px 0' }}>
                        <a href={pdfUrl || '#'} target="_blank" style={{ background: '#2563eb', color: '#ffffff', padding: '10px 20px', fontSize: '12px', fontWeight: 'bold', textDecoration: 'none', borderRadius: '8px', display: 'inline-block' }}>
                          View Full PDF Report
                        </a>
                      </div>
                    </div>
                    <div style={{ background: '#f1f5f9', padding: '12px', textAlign: 'center', fontSize: '10px', color: '#64748b' }}>
                      Questions? Email us at <a href="mailto:careerassistcontact@gmail.com" style={{ color: '#2563eb' }}>careerassistcontact@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'right', marginTop: '12px' }}>
              <button onClick={() => setShowFallbackModal(false)} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
