export interface AssessmentData {
  // =========================
  // PERSONAL DETAILS
  // =========================

  name: string;
  guardianName: string;
  phoneNumber: string;

  age: string;
  state: string;
  district: string;
  pincode: string;
  annualIncome: string;

  studentType: string; // School Student / College Student / Graduate

  // =========================
  // SCHOOL DETAILS
  // =========================

  schoolName: string;
  schoolType: string; // Govt/Govt Aided/Private
  board: string; // CBSE/State/ICSE
  medium: string;

  grade: string; // 10/11/12
  tenthPercentage: string;
  eleventhPercentage: string;
  twelfthPercentage: string;

  stream: string; // PCM/PCB/PCMB/Commerce/Arts

  // =========================
  // COLLEGE DETAILS
  // =========================

  collegeName: string;
  collegeDegree: string; // BE/BTech/BSc/BCA/BA etc

  department: string; // CSE/ECE/EEE/Mechanical

  yearOfStudy: string;
  yearOfPassout: string;

  collegeType: string; // Govt/Private/Autonomous

  internshipDone: string; // Yes/No

  placementOrHigherStudies: string; // Placement/Higher Studies

  placementGood: string; // Yes/No

  interestedInIT: string; // Yes/No

  nonCodingITRoles: string; // Yes/No

  interestedPG: string; // Yes/No

  // =========================
  // ACADEMIC PERFORMANCE
  // =========================

  percentage: string;

  highestSubject: string;
  lowestSubject: string;

  mathsComfort: string;

  learningInterest: string;

  neetInterest: string;
  alliedHealthInterest: string;

  businessBackground: string;

  artisticPerson: string;
  artisticInterest: string;

  aiAwareness: string;

  // =========================
  // SKILL ASSESSMENT
  // =========================

  coding: string;
  codingKnowledge: string;

  computerKnowledge: string;
  excel: string;

  speaking: string;
  writing: string;
  presentation: string;

  negotiation: string;
  selling: string;
  management: string;

  design: string;
  videoEditing: string;
  photography: string;

  logicalReasoning: string;
  criticalThinking: string;

  // =========================
  // PERSONALITY
  // =========================

  introvertExtrovert: string;

  leadership: string;
  decisionMaking: string;
  problemSolving: string;

  creativeSolutions: string;

  riskTaking: string;
  comfortZone: string;

  knowledgeSeeking: string;
  taskCompletion: string;

  workStyle: string;

  // =========================
  // SWOT
  // =========================

  quickLearner: string;
  persistence: string;
  teamwork: string;

  publicSpeaking: string;
  timeManagement: string;
  focusAbility: string;

  // =========================
  // SUPPORT SYSTEM
  // =========================

  familySupport: string;
  learningResources: string;
  mentorSupport: string;

  // =========================
  // CHALLENGES
  // =========================

  educationCostConcern: string;
  careerConfusion: string;
  environmentalChallenges: string;

  // =========================
  // FUTURE GOALS
  // =========================

  desiredIncome: string;
  desiredLifestyle: string;

  workPreference: string;

  riskTolerance: string;
  jobSecurity: string;

  // =========================
  // FAMILY BACKGROUND
  // =========================

  parentOccupation: string;
  parentDesignation: string;
  familyEducationLevel: string;
financialStability: string;
  firstGraduate: string;

  scholarshipRequired: string;
  educationLoan: string;

  laptopAvailable: string;
}