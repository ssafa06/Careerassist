import { useMemo, useState } from "react";

import type {
  AnyQuestion,
  AnswerMap,
  AnswerRecord,
  GradeBand,
} from "../types/assessment.type";

interface UseAssessmentProps {
  questions: AnyQuestion[];
  grade: GradeBand;
  stream?: string;
}

export interface AssessmentProgress {
  answered: number;
  unanswered: number;
  total: number;
  percentage: number;
}

export default function useAssessment({
  questions,
  grade,
  stream,
}: UseAssessmentProps) {

  // --------------------------------------------------
  // State
  // --------------------------------------------------

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState<AnswerMap>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  // --------------------------------------------------
  // Current Question
  // --------------------------------------------------

  const currentQuestion =
    questions[currentQuestionIndex];

  // --------------------------------------------------
  // Save Answer
  // --------------------------------------------------

  function saveAnswer(
    questionId: string,
    value: string | number
  ) {

    const record: AnswerRecord = {

      questionId,

      value,

      answeredAt: Date.now(),

    };

    setAnswers((prev) => ({

      ...prev,

      [questionId]: record,

    }));

  }

  // --------------------------------------------------
  // Answer Lookup
  // --------------------------------------------------

  function getAnswer(
    questionId: string
  ) {

    return answers[questionId];

  }

  // --------------------------------------------------
  // Progress
  // --------------------------------------------------

  const progress: AssessmentProgress =
    useMemo(() => {

      const answered =
        Object.keys(answers).length;

      const total =
        questions.length;

      return {

        answered,

        unanswered: total - answered,

        total,

        percentage:
          total === 0
            ? 0
            : Math.round(
                (answered / total) * 100
              ),

      };

    }, [answers, questions]);
  // --------------------------------------------------
  // Navigation
  // --------------------------------------------------

  const isFirstQuestion = currentQuestionIndex === 0;

  const isLastQuestion =
    currentQuestionIndex === questions.length - 1;

  function nextQuestion() {
    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }

  function previousQuestion() {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }

  function jumpToQuestion(index: number) {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  }

  // --------------------------------------------------
  // Current Answer
  // --------------------------------------------------

  const currentAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;

  // --------------------------------------------------
  // Completion
  // --------------------------------------------------

  const isCompleted =
    progress.answered === progress.total;

  // --------------------------------------------------
  // Reset Assessment
  // --------------------------------------------------

  function resetAssessment() {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitting(false);
  }

  // --------------------------------------------------
  // Submit Assessment
  // --------------------------------------------------

  async function submitAssessment() {

    setIsSubmitting(true);

    try {

      // TODO:
      // Save answers to Supabase
      // Generate scores
      // Navigate to report page

      console.log("Assessment Submitted");

      console.log({
        grade,
        stream,
        answers,
      });

    } catch (error) {

      console.error(error);

    } finally {

      setIsSubmitting(false);

    }

  }

  // --------------------------------------------------
  // Helper Functions
  // --------------------------------------------------

  function isAnswered(questionId: string) {
    return !!answers[questionId];
  }

  function getAnsweredCount() {
    return Object.keys(answers).length;
  }

  function getRemainingCount() {
    return questions.length - getAnsweredCount();
  }

  // --------------------------------------------------
  // Return
  // --------------------------------------------------

  return {

    // Current

    currentQuestion,

    currentQuestionIndex,

    currentAnswer,

    // Questions

    questions,

    totalQuestions: questions.length,

    // Answers

    answers,

    saveAnswer,

    getAnswer,

    isAnswered,

    // Navigation

    nextQuestion,

    previousQuestion,

    jumpToQuestion,

    isFirstQuestion,

    isLastQuestion,

    // Progress

    progress,

    getAnsweredCount,

    getRemainingCount,

    isCompleted,

    // Student

    grade,

    stream,

    // Submit

    submitAssessment,

    isSubmitting,

    // Reset

    resetAssessment,

  };

}