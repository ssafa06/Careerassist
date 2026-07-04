import React, { useState } from "react";
import type { AssessmentData } from "../types/assessment";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import logo from "../assets/logo.png";
const steps = [
  "Personal Details",
  "Academic Profile",
  "Academic Performance",
  "Skills Assessment",
  "Personality",
  "SWOT Analysis",
  "Future Goals",
  "Family Background",
];

const ratings = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
const RatingCard = ({
  label,
  field,
  value,
  setFormData,
}: {
  label: string;
  field: keyof AssessmentData;
  value: string;
  setFormData: React.Dispatch<React.SetStateAction<AssessmentData>>;
}) => (
  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
    <h3 className="text-lg font-semibold text-slate-800 mb-5">{label}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
      {ratings.map((rating) => (
        <button
          key={rating}
          type="button"
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              [field]: rating,
            }))
          }
          className={`py-2 px-2 rounded-xl font-medium transition-all duration-200 border
          ${
            value === rating
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
          }`}
        >
          {rating}
        </button>
      ))}
    </div>
  </div>
);
const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AssessmentData>({
    // =========================
    // PERSONAL DETAILS
    // =========================

    name: "",
    guardianName: "",
    phoneNumber: "",

    age: "",
    state: "",
    district: "",
    pincode: "",
    annualIncome: "",

    studentType: "",

    // =========================
    // SCHOOL DETAILS
    // =========================

    schoolName: "",
    schoolType: "",
    board: "",
    medium: "",

    grade: "",
    tenthPercentage: "",
    eleventhPercentage: "",
    twelfthPercentage: "",

    stream: "",

    // =========================
    // COLLEGE DETAILS
    // =========================

    collegeName: "",
    collegeDegree: "",
    department: "",

    yearOfStudy: "",
    yearOfPassout: "",

    collegeType: "",

    internshipDone: "",

    placementOrHigherStudies: "",
    placementGood: "",

    interestedInIT: "",
    nonCodingITRoles: "",

    interestedPG: "",

    // =========================
    // ACADEMIC PERFORMANCE
    // =========================

    percentage: "",

    highestSubject: "",
    lowestSubject: "",

    mathsComfort: "",
    learningInterest: "",

    neetInterest: "",
    alliedHealthInterest: "",

    businessBackground: "",

    artisticPerson: "",
    artisticInterest: "",

    aiAwareness: "",

    // =========================
    // SKILL ASSESSMENT
    // =========================

    coding: "",
    codingKnowledge: "",

    computerKnowledge: "",
    excel: "",

    speaking: "",
    writing: "",
    presentation: "",

    negotiation: "",
    selling: "",
    management: "",

    design: "",
    videoEditing: "",
    photography: "",

    logicalReasoning: "",
    criticalThinking: "",

    // =========================
    // PERSONALITY
    // =========================

    introvertExtrovert: "",

    leadership: "",
    decisionMaking: "",
    problemSolving: "",

    creativeSolutions: "",

    riskTaking: "",
    comfortZone: "",

    knowledgeSeeking: "",
    taskCompletion: "",

    workStyle: "",

    // =========================
    // SWOT
    // =========================

    quickLearner: "",
    persistence: "",
    teamwork: "",

    publicSpeaking: "",
    timeManagement: "",
    focusAbility: "",

    // =========================
    // SUPPORT SYSTEM
    // =========================

    familySupport: "",
    learningResources: "",
    mentorSupport: "",

    // =========================
    // CHALLENGES
    // =========================

    educationCostConcern: "",
    careerConfusion: "",
    environmentalChallenges: "",

    // =========================
    // FUTURE GOALS
    // =========================

    desiredIncome: "",
    desiredLifestyle: "",

    workPreference: "",

    riskTolerance: "",
    jobSecurity: "",

    // =========================
    // FAMILY BACKGROUND
    // =========================

    parentOccupation: "",
    parentDesignation: "",
    familyEducationLevel: "",
    financialStability: "",
    firstGraduate: "",

    scholarshipRequired: "",
    educationLoan: "",

    laptopAvailable: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const nextStep = () => {
    switch (currentStep) {
      case 0:
        if (
          !formData.name ||
          !formData.guardianName ||
          !formData.phoneNumber ||
          !formData.studentType ||
          !formData.state ||
          !formData.district
        ) {
          alert("Please complete all Personal Details.");
          return;
        }
        break;

      case 1:
        if (!formData.medium || !formData.percentage) {
          alert("Please complete Academic Profile.");
          return;
        }
        break;

      case 2:
        if (
          !formData.highestSubject ||
          !formData.lowestSubject ||
          !formData.mathsComfort ||
          !formData.learningInterest
        ) {
          alert("Please complete Academic Performance.");
          return;
        }
        break;

      case 3:
        if (
          !formData.coding ||
          !formData.computerKnowledge ||
          !formData.logicalReasoning
        ) {
          alert("Please complete Skills Assessment.");
          return;
        }
        break;

      case 4:
        if (
          !formData.introvertExtrovert ||
          !formData.leadership ||
          !formData.workStyle
        ) {
          alert("Please complete Personality Assessment.");
          return;
        }
        break;

      case 5:
        if (
          !formData.quickLearner ||
          !formData.publicSpeaking ||
          !formData.familySupport
        ) {
          alert("Please complete SWOT Analysis.");
          return;
        }
        break;

      case 6:
        if (
          !formData.desiredIncome ||
          !formData.desiredLifestyle ||
          !formData.workPreference
        ) {
          alert("Please complete Future Goals.");
          return;
        }
        break;

      case 7:
        if (
          !formData.parentOccupation ||
          !formData.firstGraduate ||
          !formData.scholarshipRequired
        ) {
          alert("Please complete Family Background.");
          return;
        }
        break;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className="text-3xl font-bold mb-2">Personal Details</h2>

            <p className="text-slate-500 mb-8">Tell us about yourself.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block mb-2 font-medium">Full Name *</label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Guardian */}
              <div>
                <label className="block mb-2 font-medium">
                  Parent / Guardian Name *
                </label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="guardianName"
                  value={formData.guardianName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium">Phone Number *</label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  inputMode="numeric"
                 pattern="[0-9]{10}"
                />
              </div>

              {/* Student Type */}
              <div>
                <label className="block mb-2 font-medium">Student Type *</label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="studentType"
                  value={formData.studentType}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>School Student</option>
                  <option>College Student</option>
                  <option>Graduate</option>
                </select>
              </div>

              {/* State */}
              <div>
                <label className="block mb-2 font-medium">State *</label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              {/* District */}
              <div>
                <label className="block mb-2 font-medium">District *</label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block mb-2 font-medium">Pincode *</label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>

              {/* Age */}
              <div>
                <label className="block mb-2 font-medium">Age *</label>

                <input
                  type="number"
                  min="8"
                  max="35"
                  className="w-full border rounded-xl p-3"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ================= SCHOOL STUDENT ================= */}

            {formData.studentType === "School Student" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="block mb-2 font-medium">
                    School Name *
                  </label>

                  <input
                    className="w-full border rounded-xl p-3"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    School Type *
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="schoolType"
                    value={formData.schoolType}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Government</option>
                    <option>Government Aided</option>
                    <option>Private</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Board *</label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="board"
                    value={formData.board}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>CBSE</option>
                    <option>State Board</option>
                    <option>ICSE</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Current Grade *
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>

                {Number(formData.grade) >= 11 && (
                  <div>
                    <label className="block mb-2 font-medium">
                      10th Percentage
                    </label>

                    <input
                      className="w-full border rounded-xl p-3"
                      name="tenthPercentage"
                      value={formData.tenthPercentage}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>
            )}

            {/* ================= COLLEGE ================= */}

            {(formData.studentType === "College Student" ||
              formData.studentType === "Graduate") && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="block mb-2 font-medium">
                    College Name *
                  </label>

                  <input
                    className="w-full border rounded-xl p-3"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Degree *</label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="collegeDegree"
                    value={formData.collegeDegree}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>BE</option>
                    <option>BTech</option>
                    <option>BSc</option>
                    <option>BCA</option>
                    <option>BCom</option>
                    <option>BA</option>
                    <option>BBA</option>
                    <option>Diploma</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Department *</label>

                  <input
                    className="w-full border rounded-xl p-3"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Year of Study *
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    College Type *
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="collegeType"
                    value={formData.collegeType}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Government</option>
                    <option>Private</option>
                    <option>Autonomous</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Internship Done Before?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="internshipDone"
                    value={formData.internshipDone}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            )}

            {/* Income */}

            <div className="mt-10">
              <h3 className="font-medium mb-4">Annual Family Income</h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  "Less than 3 LPA",
                  "3-5 LPA",
                  "5-10 LPA",
                  "10-15 LPA",
                  "15+ LPA",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        annualIncome: item,
                      })
                    }
                    className={`p-4 rounded-2xl border transition-all
              ${
                formData.annualIncome === item
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="text-3xl font-bold mb-2">Academic Profile</h2>

            <p className="text-slate-500 mb-8">
              Tell us about your academics and interests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Medium */}

              <div>
                <label className="block mb-2 font-medium">
                  Medium of Study *
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="medium"
                  value={formData.medium}
                  onChange={handleChange}
                >
                  <option value="">Select Medium</option>
                  <option>English</option>
                  <option>Tamil</option>
                  <option>Hindi</option>
                </select>
              </div>

              {/* Current Percentage */}

              <div>
                <label className="block mb-2 font-medium">
                  Overall Percentage *
                </label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Stream */}

            {(formData.grade === "11" || formData.grade === "12") && (
              <div className="mt-8">
                <h3 className="font-medium mb-4">Select Stream</h3>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {["PCM", "PCB", "PCMB", "Commerce", "Arts"].map((stream) => (
                    <button
                      key={stream}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          stream,
                        })
                      }
                      className={`p-4 rounded-2xl border transition-all hover:scale-105
                ${
                  formData.stream === stream
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
                    >
                      {stream}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 11th Marks */}

            {formData.grade === "12" && (
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  11th Percentage
                </label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="eleventhPercentage"
                  value={formData.eleventhPercentage}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* 12th Marks */}

            {formData.studentType !== "School Student" && (
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  12th Percentage
                </label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="twelfthPercentage"
                  value={formData.twelfthPercentage}
                  onChange={handleChange}
                />
              </div>
            )}

            {/* Biology Logic */}

            {(formData.stream === "PCB" || formData.stream === "PCMB") && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="block mb-2 font-medium">
                    Are you willing to take NEET?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="neetInterest"
                    value={formData.neetInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                {formData.neetInterest === "Yes" && (
                  <div>
                    <label className="block mb-2 font-medium">
                      Interested in Allied Health Sciences?
                    </label>

                    <select
                      className="w-full border rounded-xl p-3"
                      name="alliedHealthInterest"
                      value={formData.alliedHealthInterest}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                )}
              </div>
            )}

            {/* Commerce */}

            {formData.stream === "Commerce" && (
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  Are you from a business background?
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="businessBackground"
                  value={formData.businessBackground}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            )}

            {/* Arts */}

            {formData.stream === "Arts" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="block mb-2 font-medium">
                    Are you an artistic person?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="artisticPerson"
                    value={formData.artisticPerson}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Artistic Interests
                  </label>

                  <input
                    className="w-full border rounded-xl p-3"
                    name="artisticInterest"
                    value={formData.artisticInterest}
                    onChange={handleChange}
                    placeholder="Music, Dance, Painting..."
                  />
                </div>
              </div>
            )}

            {/* AI Awareness */}

            {(formData.stream === "PCM" || formData.stream === "PCMB") && (
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  Do you have any idea about AI?
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="aiAwareness"
                  value={formData.aiAwareness}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                  <option>Basic Knowledge</option>
                </select>
              </div>
            )}
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-3xl font-bold mb-2">Academic Performance</h2>

            <p className="text-slate-500 mb-8">
              Tell us about your academic strengths and interests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">
                  Highest Scored Subject *
                </label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="highestSubject"
                  value={formData.highestSubject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Lowest Scored Subject *
                </label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="lowestSubject"
                  value={formData.lowestSubject}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Maths Comfort */}

            <div className="mt-8">
              <h3 className="font-medium mb-4">Is Mathematics Easy For You?</h3>

              <div className="grid md:grid-cols-3 gap-4">
                {["Yes", "Average", "No"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        mathsComfort: item,
                      })
                    }
                    className={`p-4 rounded-2xl border transition-all hover:scale-105
                ${
                  formData.mathsComfort === item
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Area */}

            <div className="mt-8">
              <h3 className="font-medium mb-4">Area Of Interest</h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  "Technology",
                  "Business",
                  "Arts",
                  "Medicine",
                  "Civil Services",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        learningInterest: item,
                      })
                    }
                    className={`p-4 rounded-2xl border transition-all hover:scale-105
              ${
                formData.learningInterest === item
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Technology */}

            {formData.learningInterest === "Technology" && (
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  Do you know about Artificial Intelligence?
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="aiAwareness"
                  value={formData.aiAwareness}
                  onChange={handleChange}
                >
                  <option value="">Select</option>

                  <option>Yes</option>

                  <option>No</option>

                  <option>Basic Knowledge</option>
                </select>
              </div>
            )}

            {/* Business */}

            {formData.learningInterest === "Business" && (
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  Are you from a business background?
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="businessBackground"
                  value={formData.businessBackground}
                  onChange={handleChange}
                >
                  <option value="">Select</option>

                  <option>Yes</option>

                  <option>No</option>
                </select>
              </div>
            )}

            {/* Arts */}

            {formData.learningInterest === "Arts" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="block mb-2 font-medium">
                    Are you an artistic person?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="artisticPerson"
                    value={formData.artisticPerson}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>

                    <option>Yes</option>

                    <option>No</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Artistic Interests
                  </label>

                  <input
                    className="w-full border rounded-xl p-3"
                    name="artisticInterest"
                    value={formData.artisticInterest}
                    onChange={handleChange}
                    placeholder="Dance, Music, Painting..."
                  />
                </div>
              </div>
            )}

            {/* Medicine */}

            {formData.learningInterest === "Medicine" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="block mb-2 font-medium">
                    Are you willing to take NEET?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="neetInterest"
                    value={formData.neetInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>

                    <option>Yes</option>

                    <option>No</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Interested in Allied Health Sciences?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="alliedHealthInterest"
                    value={formData.alliedHealthInterest}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>

                    <option>Yes</option>

                    <option>No</option>
                  </select>
                </div>
              </div>
            )}
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-3xl font-bold mb-2">Skills Assessment</h2>

            <p className="text-slate-500 mb-8">
              Rate your current skill levels.
            </p>

            <div className="space-y-6">
              <RatingCard
                label="Coding"
                field="coding"
                value={formData.coding}
                setFormData={setFormData}
              />

              <RatingCard
                label="Computer Knowledge"
                field="computerKnowledge"
                value={formData.computerKnowledge}
                setFormData={setFormData}
              />

              <RatingCard
                label="Excel"
                field="excel"
                value={formData.excel}
                setFormData={setFormData}
              />

              <RatingCard
                label="Speaking"
                field="speaking"
                value={formData.speaking}
                setFormData={setFormData}
              />

              <RatingCard
                label="Writing"
                field="writing"
                value={formData.writing}
                setFormData={setFormData}
              />

              <RatingCard
                label="Presentation"
                field="presentation"
                value={formData.presentation}
                setFormData={setFormData}
              />

              <RatingCard
                label="Negotiation"
                field="negotiation"
                value={formData.negotiation}
                setFormData={setFormData}
              />

              <RatingCard
                label="Selling"
                field="selling"
                value={formData.selling}
                setFormData={setFormData}
              />

              <RatingCard
                label="Management"
                field="management"
                value={formData.management}
                setFormData={setFormData}
              />

              <RatingCard
                label="Design"
                field="design"
                value={formData.design}
                setFormData={setFormData}
              />

              <RatingCard
                label="Video Editing"
                field="videoEditing"
                value={formData.videoEditing}
                setFormData={setFormData}
              />

              <RatingCard
                label="Photography"
                field="photography"
                value={formData.photography}
                setFormData={setFormData}
              />

              <RatingCard
                label="Logical Reasoning"
                field="logicalReasoning"
                value={formData.logicalReasoning}
                setFormData={setFormData}
              />

              <RatingCard
                label="Critical Thinking"
                field="criticalThinking"
                value={formData.criticalThinking}
                setFormData={setFormData}
              />
            </div>

            {/* CSE / IT Students */}

            {(formData.department === "CSE" ||
              formData.department === "IT") && (
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  How would you rate your coding knowledge?
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="codingKnowledge"
                  value={formData.codingKnowledge}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            )}

            {/* Core Students */}

            {["ECE", "EEE", "Mechanical", "Civil", "Aeronautical"].includes(
              formData.department,
            ) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <label className="block mb-2 font-medium">
                    Are you interested in IT Sector?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="interestedInIT"
                    value={formData.interestedInIT}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                {formData.interestedInIT === "Yes" && (
                  <div>
                    <label className="block mb-2 font-medium">
                      Coding Knowledge
                    </label>

                    <select
                      className="w-full border rounded-xl p-3"
                      name="codingKnowledge"
                      value={formData.codingKnowledge}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                )}
              </div>
            )}

            {/* Non Coding IT Roles */}

            {formData.interestedInIT === "Yes" &&
              formData.codingKnowledge === "Beginner" && (
                <div className="mt-8">
                  <label className="block mb-2 font-medium">
                    Are you open to Non-Coding IT Roles?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="nonCodingITRoles"
                    value={formData.nonCodingITRoles}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              )}

            {/* Biomedical / Biotechnology */}

            {["Biomedical", "Biotechnology"].includes(formData.department) && (
              <div className="mt-8">
                <label className="block mb-2 font-medium">
                  Are you interested in Medical Coding?
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="alliedHealthInterest"
                  value={formData.alliedHealthInterest}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            )}
          </>
        );

      case 4:
        return (
          <>
            <h2 className="text-3xl font-bold mb-2">Personality Assessment</h2>

            <p className="text-slate-500 mb-8">
              Help us understand your personality and work behaviour.
            </p>

            <div className="space-y-8">
              {/* Personality Type */}

              <div>
                <h3 className="font-medium mb-4">Personality Type</h3>

                <div className="grid md:grid-cols-3 gap-4">
                  {["Introvert", "Ambivert", "Extrovert"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          introvertExtrovert: item,
                        })
                      }
                      className={`p-4 rounded-2xl border transition-all hover:scale-105
                ${
                  formData.introvertExtrovert === item
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ratings */}

              <RatingCard
                label="Leadership Ability"
                field="leadership"
                value={formData.leadership}
                setFormData={setFormData}
              />

              <RatingCard
                label="Decision Making"
                field="decisionMaking"
                value={formData.decisionMaking}
                setFormData={setFormData}
              />

              <RatingCard
                label="Problem Solving"
                field="problemSolving"
                value={formData.problemSolving}
                setFormData={setFormData}
              />

              <RatingCard
                label="Creative Thinking"
                field="creativeSolutions"
                value={formData.creativeSolutions}
                setFormData={setFormData}
              />

              <RatingCard
                label="Risk Taking"
                field="riskTaking"
                value={formData.riskTaking}
                setFormData={setFormData}
              />

              <RatingCard
                label="Coming Out Of Comfort Zone"
                field="comfortZone"
                value={formData.comfortZone}
                setFormData={setFormData}
              />

              <RatingCard
                label="Actively Seeking Knowledge"
                field="knowledgeSeeking"
                value={formData.knowledgeSeeking}
                setFormData={setFormData}
              />

              <RatingCard
                label="On Time Task Completion"
                field="taskCompletion"
                value={formData.taskCompletion}
                setFormData={setFormData}
              />

              {/* Work Style */}

              <div>
                <h3 className="font-medium mb-4">Preferred Work Style</h3>

                <div className="grid md:grid-cols-3 gap-4">
                  {["Hard Work", "Smart Work", "Balanced"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          workStyle: item,
                        })
                      }
                      className={`p-4 rounded-2xl border transition-all hover:scale-105
                ${
                  formData.workStyle === item
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Career Intelligence */}

              <div>
                <h3 className="font-medium mb-4">
                  Which statement describes you the most?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "I like leading teams",
                    "I enjoy working independently",
                    "I like helping people",
                    "I enjoy solving technical problems",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          desiredLifestyle: item,
                        })
                      }
                      className={`p-4 rounded-2xl border transition-all hover:scale-105
                ${
                  formData.desiredLifestyle === item
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        );

      case 5:
        return (
          <>
            <h2 className="text-3xl font-bold mb-2">SWOT Analysis</h2>

            <p className="text-slate-500 mb-8">
              Help us understand your strengths, weaknesses and support system.
            </p>

            <div className="space-y-10">
              {/* Strengths */}

              <div>
                <h3 className="text-xl font-semibold mb-4">🌟 Strengths</h3>

                <div className="space-y-5">
                  <RatingCard
                    label="I learn new things quickly"
                    field="quickLearner"
                    value={formData.quickLearner}
                    setFormData={setFormData}
                  />

                  <RatingCard
                    label="I complete work even when difficult"
                    field="persistence"
                    value={formData.persistence}
                    setFormData={setFormData}
                  />

                  <RatingCard
                    label="I work well with others"
                    field="teamwork"
                    value={formData.teamwork}
                    setFormData={setFormData}
                  />
                </div>
              </div>

              {/* Improvement Areas */}

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  📈 Areas To Improve
                </h3>

                <div className="space-y-5">
                  <RatingCard
                    label="Confidence in Public Speaking"
                    field="publicSpeaking"
                    value={formData.publicSpeaking}
                    setFormData={setFormData}
                  />

                  <RatingCard
                    label="Time Management"
                    field="timeManagement"
                    value={formData.timeManagement}
                    setFormData={setFormData}
                  />

                  <RatingCard
                    label="Ability To Stay Focused"
                    field="focusAbility"
                    value={formData.focusAbility}
                    setFormData={setFormData}
                  />
                </div>
              </div>

              {/* Family Support */}

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  👨‍👩‍👧 Family & Support System
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">
                      Family Support
                    </label>

                    <select
                      className="w-full border rounded-xl p-3"
                      name="familySupport"
                      value={formData.familySupport}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Strong</option>
                      <option>Moderate</option>
                      <option>Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Access To Learning Resources
                    </label>

                    <select
                      className="w-full border rounded-xl p-3"
                      name="learningResources"
                      value={formData.learningResources}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Excellent</option>
                      <option>Adequate</option>
                      <option>Limited</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Mentor Guidance Availability
                    </label>

                    <select
                      className="w-full border rounded-xl p-3"
                      name="mentorSupport"
                      value={formData.mentorSupport}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Available</option>
                      <option>Occasionally Available</option>
                      <option>Not Available</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Challenges */}

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  ⚠ Challenges Faced
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">
                      Education Cost Concern
                    </label>

                    <select
                      className="w-full border rounded-xl p-3"
                      name="educationCostConcern"
                      value={formData.educationCostConcern}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>High</option>
                      <option>Moderate</option>
                      <option>Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Career Confusion Level
                    </label>

                    <select
                      className="w-full border rounded-xl p-3"
                      name="careerConfusion"
                      value={formData.careerConfusion}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Very High</option>
                      <option>Moderate</option>
                      <option>Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium">
                      Environmental Challenges
                    </label>

                    <select
                      className="w-full border rounded-xl p-3"
                      name="environmentalChallenges"
                      value={formData.environmentalChallenges}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case 6:
        return (
          <>
            <h2 className="text-3xl font-bold mb-2">Future Goals</h2>

            <p className="text-slate-500 mb-8">
              Tell us about your future aspirations and career expectations.
            </p>

            <div className="space-y-8">
              {/* Desired Income */}

              <div>
                <h3 className="font-semibold mb-4">
                  Desired Income After 5 Years
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["₹3L", "₹5L", "₹10L", "₹20L+"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          desiredIncome: item,
                        })
                      }
                      className={`p-4 rounded-2xl border transition-all hover:scale-105
                ${
                  formData.desiredIncome === item
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lifestyle */}

              <div>
                <h3 className="font-semibold mb-4">Desired Career Lifestyle</h3>

                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    "Government Job",
                    "Corporate Career",
                    "Startup Founder",
                    "Freelancing",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          desiredLifestyle: item,
                        })
                      }
                      className={`p-4 rounded-2xl border transition-all hover:scale-105
                ${
                  formData.desiredLifestyle === item
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Placement / Higher Studies */}

              {formData.studentType === "College Student" && (
                <div>
                  <label className="block mb-2 font-medium">
                    What is your immediate plan after graduation?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="placementOrHigherStudies"
                    value={formData.placementOrHigherStudies}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>

                    <option value="Placement">Placement</option>

                    <option value="Higher Studies">Higher Studies</option>

                    <option value="Both">Both</option>
                  </select>
                </div>
              )}

              {/* Placement quality */}

              {formData.placementOrHigherStudies === "Placement" && (
                <div>
                  <label className="block mb-2 font-medium">
                    Are placements good in your college?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="placementGood"
                    value={formData.placementGood}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>

                    <option value="Yes">Yes</option>

                    <option value="No">No</option>
                  </select>
                </div>
              )}

              {/* Arts PG */}

              {(formData.stream === "Arts" ||
                formData.collegeDegree === "BA") && (
                <div>
                  <label className="block mb-2 font-medium">
                    Are you interested in pursuing PG studies?
                  </label>

                  <select
                    className="w-full border rounded-xl p-3"
                    name="interestedPG"
                    value={formData.interestedPG}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>

                    <option value="Yes">Yes</option>

                    <option value="No">No</option>
                  </select>
                </div>
              )}

              {/* Work Preference */}

              <div>
                <h3 className="font-semibold mb-4">
                  Preferred Work Environment
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {["Office", "Remote", "Field Work"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          workPreference: item,
                        })
                      }
                      className={`p-4 rounded-2xl border transition-all hover:scale-105
                ${
                  formData.workPreference === item
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Risk Tolerance */}

              <div>
                <label className="block mb-2 font-medium">
                  Risk Taking Ability
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="riskTolerance"
                  value={formData.riskTolerance}
                  onChange={handleChange}
                >
                  <option value="">Select</option>

                  <option value="High">High</option>

                  <option value="Moderate">Moderate</option>

                  <option value="Low">Low</option>
                </select>
              </div>

              {/* Job Security */}

              <div>
                <label className="block mb-2 font-medium">
                  How important is Job Security to you?
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="jobSecurity"
                  value={formData.jobSecurity}
                  onChange={handleChange}
                >
                  <option value="">Select</option>

                  <option value="Very Important">Very Important</option>

                  <option value="Important">Important</option>

                  <option value="Not Important">Not Important</option>
                </select>
              </div>
            </div>
          </>
        );
      case 7:
        return (
          <>
            <h2 className="text-3xl font-bold mb-2">Family Background</h2>

            <p className="text-slate-500 mb-8">
              Help us understand your family, financial and educational
              background.
            </p>

            {/* Parent Details */}

            <div
              className="grid grid-cols-1 md:grid-cols-2 
      gap-6"
            >
              <div>
                <label className="block mb-2 font-medium">
                  Parent / Guardian Occupation
                </label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="parentOccupation"
                  value={formData.parentOccupation}
                  onChange={handleChange}
                  placeholder="Farmer, Teacher, Business..."
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Parent / Guardian Designation
                </label>

                <input
                  className="w-full border rounded-xl p-3"
                  name="parentDesignation"
                  value={formData.parentDesignation}
                  onChange={handleChange}
                  placeholder="Manager, Clerk, Owner..."
                />
              </div>
            </div>

            {/* Financial Questions */}

            <div className="space-y-8 mt-10">
              {[
                {
                  field: "educationLoan",
                  title: "Will you require an education loan?",
                },

                {
                  field: "laptopAvailable",
                  title: "Do you have access to a Laptop / Computer?",
                },
              ].map((item) => (
                <div key={item.field}>
                  <h3 className="mb-3 font-medium">{item.title}</h3>

                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            [item.field]: option,
                          })
                        }
                        className={`px-5 py-3 rounded-xl border transition-all hover:scale-105
                  ${
                    (formData as any)[item.field] === option
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white"
                  }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Extra Family Intelligence */}

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">
                  Highest Education Level In Family
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="familyEducationLevel"
                  value={formData.familyEducationLevel}
                  onChange={handleChange}
                >
                  <option value="">Select</option>

                  <option value="Below 10th Standard">
                    Below 10th Standard
                  </option>

                  <option value="10th Standard">10th Standard</option>

                  <option value="12th Standard">12th Standard</option>

                  <option value="Diploma">Diploma</option>

                  <option value="Undergraduate Degree">
                    Undergraduate Degree
                  </option>

                  <option value="Postgraduate Degree">
                    Postgraduate Degree
                  </option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Family Financial Stability
                </label>

                <select
                  className="w-full border rounded-xl p-3"
                  name="financialStability"
                  value={formData.financialStability}
                  onChange={handleChange}
                >
                  <option value="">Select</option>

                  <option value="Stable">Stable</option>

                  <option value="Moderate">Moderate</option>

                  <option value="Financially Challenging">
                    Financially Challenging
                  </option>
                </select>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto py-6 md:py-10 px-4 md:px-6">
        <div className="mb-8">
          <img
            src={logo}
            alt="CareerAssist"
            className="w-8 h-8 object-contain"
          />
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600 text-sm font-medium mb-4 transition-colors"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold"> Career Assessment</h1>
          <p className="text-slate-500 mt-2">
            Complete all sections to generate your personalized career roadmap.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">
          <div className="flex justify-between mb-3">
            <span>
              Step {currentStep + 1} of {steps.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-3 bg-slate-200 rounded-full">
            <div
              className="h-3 bg-blue-600 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {steps.map((step, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentStep(index)}
              className={`p-4 rounded-2xl text-center text-sm transition-all hover:scale-105
              ${currentStep === index ? "bg-blue-600 text-white" : "bg-white"}`}
            >
              <div className="flex flex-col items-center">
                <div className="font-semibold">{index + 1}</div>
                <div className="text-xs mt-1">{step}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-8">
          {renderStep()}
          <div className="flex justify-between mt-10">
            <button
              onClick={previousStep}
              className="bg-slate-200 px-6 py-3 rounded-xl"
            >
              Previous
            </button>
            <div className="flex gap-4">
              {currentStep === steps.length - 1 ? (
                <button
                  onClick={async () => {
                    try {
                      const {
                        data: { user },
                      } = await supabase.auth.getUser();

                      if (!user) {
                        alert("Please login again");
                        navigate("/login");
                        return;
                      }

                      // Save assessment in Supabase
                      const { error } = await supabase
                        .from("assessments")
                      .upsert(
{
user_id:user.id,
assessment_data:formData,
completion_percentage:100,
status:"completed"
},
{
onConflict:"user_id"
}
)

                      if (error) {
                        console.error(error);
                        alert("Failed to save assessment");
                        return;
                      }

                    localStorage.setItem(
"assessmentData",
JSON.stringify(formData)
);

navigate("/dashboard");
                    } catch (err) {
                      console.error(err);
                      alert("Something went wrong");
                    }
                  }}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl"
                >
                  Submit Assessment
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
