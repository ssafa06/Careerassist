// =============================================================================
// CareerAssist — Core Assessment Type Definitions
// =============================================================================
// Shared types used across Layer 2 (Personality/RIASEC/EI), Layer 3 (Cognitive
// & Aptitude), Layer 4 (Skills & Competencies), and Layer 5 (Academic).
// =============================================================================

/** Grade bands supported across the platform. */
export type GradeBand = "6-8" | "9-10" | "11-12";

/** The five assessment layers in the CareerAssist pipeline. */
export type LayerId = "layer1" | "layer2" | "layer3" | "layer4" | "layer5";

/** Top-level kind of question/answer model. Drives which renderer + scorer is used. */
export type QuestionModel =
  | "knowledge-mcq" // Layer 3 / Layer 5: single correct answer, right/wrong scoring
  | "scenario-likert" // Layer 4: 4 behavioural options, each pre-scored 1–5, no "wrong" answer
  | "likert-scale" // Layer 2: agreement scale (e.g. Big Five)
  | "forced-choice"; // Layer 2: RIASEC-style forced pick between two statements

// -----------------------------------------------------------------------------
// Layer 3 — Cognitive & Aptitude (knowledge-mcq)
// -----------------------------------------------------------------------------

export type CognitiveSectionId =
  | "logical-reasoning"
  | "numerical-ability"
  | "verbal-ability"
  | "critical-thinking"
  | "problem-solving"
  | "analytical-thinking"
  | "spatial-ability"
  | "memory"
  | "attention"
  | "scientific-aptitude";

export interface CognitiveOption {
  id: "A" | "B" | "C" | "D";
  text: string;
}

export interface CognitiveQuestion {
  id: string; // e.g. "L3-9-10-Q01"
  model: "knowledge-mcq";
  section: CognitiveSectionId;
  questionNumber: number;
  /** Optional reading passage / data table the question refers to. */
  context?: string;
  prompt: string;
  options: CognitiveOption[];
  correctOptionId: "A" | "B" | "C" | "D";
  explanation: string;
}

export interface CognitiveSection {
  id: CognitiveSectionId;
  title: string;
  questionCount: number;
  skillsTested: string[];
}

// -----------------------------------------------------------------------------
// Layer 4 — Skills & Competencies (scenario-likert)
// -----------------------------------------------------------------------------

export type CompetencyId =
  | "communication"
  | "leadership"
  | "teamwork"
  | "creativity"
  | "innovation"
  | "decision-making"
  | "time-management"
  | "discipline"
  | "adaptability"
  | "digital-literacy"
  | "entrepreneurship"
  | "presentation";

export interface ScenarioOption {
  id: "A" | "B" | "C" | "D";
  text: string;
  /** Human-readable behavioural indicator shown only to assessment developers / reports. */
  indicator: string;
  /** Score 1–5 awarded toward the PRIMARY competency if this option is chosen. */
  primaryScore: number;
}

export interface ScenarioQuestion {
  id: string; // e.g. "L4-6-8-Q01"
  model: "scenario-likert";
  /** The competency this question is officially measuring / reported against. */
  primaryCompetency: CompetencyId;
  /** Competencies silently logged from the same response, used for the full behavioural profile. */
  hiddenCompetencies: string[];
  questionNumber: number;
  scenario: string;
  prompt: string; // usually "What would you most likely do?"
  options: ScenarioOption[];
}

export interface CompetencyMeta {
  id: CompetencyId;
  label: string;
  questionCount: number;
  maxScore: number;
}

// -----------------------------------------------------------------------------
// Layer 2 — Personality / RIASEC / EI (stub — content not yet authored)
// -----------------------------------------------------------------------------

export interface LikertQuestion {
  id: string;
  model: "likert-scale";
  trait: string;
  prompt: string;
  /** 1 = Strongly Disagree ... 5 = Strongly Agree (configurable) */
  scaleMin: number;
  scaleMax: number;
  reverseScored?: boolean;
}

export interface ForcedChoiceQuestion {
  id: string;
  model: "forced-choice";
  /** RIASEC code or sub-trait this statement maps to. */
  dimension: string;
  statementA: string;
  statementB: string;
}

// -----------------------------------------------------------------------------
// Layer 5 — Academic / Subject Strength (knowledge-mcq, stream-aware)
// -----------------------------------------------------------------------------

export type AcademicStream = "PCM" | "PCB" | "Commerce" | "Humanities";

export interface AcademicQuestion {
  id: string;
  model: "knowledge-mcq";
  stream: AcademicStream;
  subject: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Moderately Hard" | "Hard";
  prompt: string;
  options: CognitiveOption[];
  correctOptionId: "A" | "B" | "C" | "D";
  explanation: string;
}

// -----------------------------------------------------------------------------
// Generic union types used by shared rendering / navigation / scoring code
// -----------------------------------------------------------------------------

export type AnyQuestion =
  | CognitiveQuestion
  | ScenarioQuestion
  | LikertQuestion
  | ForcedChoiceQuestion
  | AcademicQuestion;

/** A single recorded answer, keyed by question id. */
export interface AnswerRecord {
  questionId: string;
  /** For knowledge-mcq / scenario-likert: the option id chosen. For likert: numeric value. */
  value: string | number;
  answeredAt: number; // epoch ms
  timeSpentMs?: number;
}

export type AnswerMap = Record<string, AnswerRecord>;

/** Result of scoring a single knowledge-mcq question. */
export interface KnowledgeScoreEntry {
  questionId: string;
  section: string;
  isCorrect: boolean;
  chosenOptionId: string | null;
  correctOptionId: string;
}

/** Result of scoring a single scenario-likert question. */
export interface ScenarioScoreEntry {
  questionId: string;
  primaryCompetency: CompetencyId;
  hiddenCompetencies: string[];
  chosenOptionId: string | null;
  primaryScore: number; // 0 if unanswered
}