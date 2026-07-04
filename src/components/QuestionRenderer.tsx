
import type {
  AnyQuestion,
  CognitiveQuestion,
  ScenarioQuestion,
  LikertQuestion,
  ForcedChoiceQuestion,
  AcademicQuestion,
} from "../types/assessment.type";

interface Props {
  question: AnyQuestion;
  value?: string | number;
  onChange: (value: string | number) => void;
}

export default function QuestionRenderer({
  question,
  value,
  onChange,
}: Props) {
  switch (question.model) {
    case "knowledge-mcq":
      return renderKnowledgeQuestion(
        question as CognitiveQuestion | AcademicQuestion,
        value,
        onChange
      );

    case "scenario-likert":
      return renderScenarioQuestion(
        question as ScenarioQuestion,
        value,
        onChange
      );

    case "likert-scale":
      return renderLikertQuestion(
        question as LikertQuestion,
        value,
        onChange
      );

    case "forced-choice":
      return renderForcedChoiceQuestion(
        question as ForcedChoiceQuestion,
        value,
        onChange
      );

    default:
      return null;
  }
}

// ======================================================
// Knowledge MCQ
// ======================================================

function renderKnowledgeQuestion(
  question: CognitiveQuestion | AcademicQuestion,
  value: string | number | undefined,
  onChange: (value: string | number) => void
) {
  return (
    <div>

      <h3 className="text-xl font-semibold text-slate-900">
        {"prompt" in question ? question.prompt : ""}
      </h3>

      {"context" in question && question.context && (
        <div className="mt-5 rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="text-sm text-slate-700">
            {question.context}
          </p>
        </div>
      )}

      <div className="mt-8 space-y-4">

        {question.options.map((option) => {

          const active = value === option.id;

          return (

            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`w-full rounded-2xl border p-5 text-left transition-all duration-200

              ${
                active
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex gap-4">

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold

                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {option.id}
                </div>

                <div className="flex-1">

                  <p className="text-slate-800">
                    {option.text}
                  </p>

                </div>

              </div>

            </button>

          );

        })}

      </div>

    </div>
  );
}
// ======================================================
// Scenario Likert (Layer 4)
// ======================================================

function renderScenarioQuestion(
  question: ScenarioQuestion,
  value: string | number | undefined,
  onChange: (value: string | number) => void
) {
  return (
    <div>

      <div className="rounded-2xl bg-indigo-50 border border-indigo-200 p-5 mb-6">

        <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold">
          Scenario
        </p>

        <p className="mt-2 text-slate-800 leading-7">
          {question.scenario}
        </p>

      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-6">
        {question.prompt}
      </h3>

      <div className="space-y-4">

        {question.options.map((option) => {

          const active = value === option.id;

          return (

            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`w-full rounded-2xl border p-5 text-left transition-all

              ${
                active
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-slate-200 hover:border-indigo-300 hover:bg-slate-50"
              }`}
            >

              <div className="flex gap-4">

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold

                  ${
                    active
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {option.id}
                </div>

                <div>

                  <p className="font-medium">
                    {option.text}
                  </p>

                </div>

              </div>

            </button>

          );

        })}

      </div>

    </div>
  );
}

// ======================================================
// Likert Scale (Layer 2)
// ======================================================

function renderLikertQuestion(
  question: LikertQuestion,
  value: string | number | undefined,
  onChange: (value: string | number) => void
) {

  const values = [];

  for (
    let i = question.scaleMin;
    i <= question.scaleMax;
    i++
  ) {
    values.push(i);
  }

  return (

    <div>

      <h3 className="text-xl font-semibold text-slate-900">
        {question.prompt}
      </h3>

      <p className="text-slate-500 mt-2">
        Select how strongly you agree.
      </p>

      <div className="grid grid-cols-5 gap-4 mt-8">

        {values.map((scale) => {

          const active = value === scale;

          return (

            <button
              key={scale}
              type="button"
              onClick={() => onChange(scale)}
              className={`rounded-2xl border p-6 transition-all

              ${
                active
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white border-slate-200 hover:border-blue-400"
              }`}
            >

              <div className="text-2xl font-bold">
                {scale}
              </div>

            </button>

          );

        })}

      </div>

      <div className="flex justify-between mt-5 text-sm text-slate-500">

        <span>Strongly Disagree</span>

        <span>Strongly Agree</span>

      </div>

    </div>

  );

}
// ======================================================
// Forced Choice (RIASEC)
// ======================================================

function renderForcedChoiceQuestion(
  question: ForcedChoiceQuestion,
  value: string | number | undefined,
  onChange: (value: string | number) => void
) {
  return (
    <div>

      <div className="mb-8">

        <h3 className="text-xl font-semibold text-slate-900">
          Choose the statement that describes you better
        </h3>

        <p className="text-slate-500 mt-2">
          Select the option that best matches your natural preference.
          There are no right or wrong answers.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Option A */}

        <button
          type="button"
          onClick={() => onChange("A")}
          className={`rounded-2xl border p-6 text-left transition-all duration-300

          ${
            value === "A"
              ? "border-blue-600 bg-blue-50"
              : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
          }`}
        >

          <div className="flex items-center justify-between">

            <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

              A

            </span>

            {value === "A" && (

              <span className="text-blue-600 font-semibold">

                ✓ Selected

              </span>

            )}

          </div>

          <p className="mt-6 leading-7">

            {question.statementA}

          </p>

        </button>

        {/* Option B */}

        <button
          type="button"
          onClick={() => onChange("B")}
          className={`rounded-2xl border p-6 text-left transition-all duration-300

          ${
            value === "B"
              ? "border-blue-600 bg-blue-50"
              : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
          }`}
        >

          <div className="flex items-center justify-between">

            <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

              B

            </span>

            {value === "B" && (

              <span className="text-blue-600 font-semibold">

                ✓ Selected

              </span>

            )}

          </div>

          <p className="mt-6 leading-7">

            {question.statementB}

          </p>

        </button>

      </div>

      <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">

        <p className="text-sm text-amber-700">

          Choose the statement that feels more natural to you. Don't spend too
          much time comparing them.

        </p>

      </div>

    </div>
  );
}