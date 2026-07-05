import type { AnyQuestion } from "../../types/assessment.type";

interface Props {
  question: AnyQuestion | any; // Supports custom Layer 1 schemas as well
  value: any;
  onChange: (value: any) => void;
  error?: string;
}

export default function QuestionField({ question, value, onChange, error }: Props) {
  const label = question.question || question.prompt || "";
  const scenario = question.scenario || "";
  const context = question.context || "";
  const options = question.options || [];

  const inputId = `q-${question.id}`;

  return (
    <div className={`p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border transition-all ${error ? "border-red-300 bg-red-50/10 shadow-sm" : "border-slate-200 bg-white"}`}>
      {/* Question context if available */}
      {context && (
        <div className="mb-3 md:mb-4 rounded-lg md:rounded-xl bg-blue-50 border border-blue-200 p-3 md:p-4 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
          {context}
        </div>
      )}

      {/* Scenario text if available */}
      {scenario && (
        <div className="mb-3 md:mb-4 rounded-lg md:rounded-xl bg-indigo-50 border border-indigo-200 p-4 md:p-5 text-xs md:text-sm text-slate-800 leading-relaxed">
          <p className="text-[10px] md:text-xs uppercase tracking-wide text-indigo-600 font-bold mb-1.5 md:mb-2">Scenario</p>
          <p className="font-medium">{scenario}</p>
        </div>
      )}

      {/* Question Prompt */}
      <label htmlFor={inputId} className="block text-sm md:text-lg font-bold text-slate-900 leading-snug mb-3 md:mb-4">
        {label}
        {question.required && <span className="text-red-500 ml-1 font-bold">*</span>}
      </label>

      {/* Dynamic input field based on type */}
      <div className="mt-2">
        {renderInputField()}
      </div>

      {error && (
        <p className="text-sm font-semibold text-red-600 mt-3 flex items-center gap-1.5 animate-pulse">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600"></span>
          {error}
        </p>
      )}
    </div>
  );

  function renderInputField() {
    const qType = question.type || question.model || "text";

    switch (qType) {
      case "text":
        return (
          <input
            id={inputId}
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 md:px-5 py-2.5 md:py-3.5 bg-white border border-slate-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium placeholder-slate-400 text-slate-800 text-sm md:text-base"
            placeholder="Type your answer here..."
          />
        );

      case "date":
        return (
          <input
            id={inputId}
            type="date"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="px-3 md:px-5 py-2.5 md:py-3.5 bg-white border border-slate-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-slate-800 text-sm md:text-base"
          />
        );

      case "number":
        return (
          <input
            id={inputId}
            type="number"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value === "" ? "" : Number(e.target.value))}
            className="w-full sm:w-48 px-3 md:px-5 py-2.5 md:py-3.5 bg-white border border-slate-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-slate-800 text-sm md:text-base"
            placeholder="e.g. 15"
          />
        );

      case "radio":
      case "forced-choice":
      case "knowledge-mcq":
      case "scenario-likert":
        // RIASEC forced choice has statementA and statementB
        if (qType === "forced-choice") {
          const stmtA = question.statementA || "";
          const stmtB = question.statementB || "";
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <button
                type="button"
                onClick={() => onChange("A")}
                className={`p-3 md:p-5 rounded-xl md:rounded-2xl border text-left transition-all hover:scale-[1.01] active:scale-95 duration-200 flex flex-col justify-between ${
                  value === "A"
                    ? "border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-500/20"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                }`}
              >
                <span className="text-[10px] md:text-sm font-semibold text-slate-400 mb-1.5 md:mb-2">Option A</span>
                <span className="font-semibold text-slate-800 text-sm md:text-base">{stmtA}</span>
              </button>
              <button
                type="button"
                onClick={() => onChange("B")}
                className={`p-3 md:p-5 rounded-xl md:rounded-2xl border text-left transition-all hover:scale-[1.01] active:scale-95 duration-200 flex flex-col justify-between ${
                  value === "B"
                    ? "border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-500/20"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                }`}
              >
                <span className="text-[10px] md:text-sm font-semibold text-slate-400 mb-1.5 md:mb-2">Option B</span>
                <span className="font-semibold text-slate-800 text-sm md:text-base">{stmtB}</span>
              </button>
            </div>
          );
        }

        // Standard Radio selection
        return (
          <div className="space-y-2 md:space-y-3">
            {options.map((opt: any) => {
              const optId = opt.id || opt;
              const optLabel = opt.label || opt.text || optId;
              const active = value === optId;

              return (
                <button
                  key={optId}
                  type="button"
                  onClick={() => onChange(optId)}
                  className={`w-full p-3 md:p-4 rounded-lg md:rounded-xl border text-left font-semibold transition-all duration-200 flex items-center justify-between active:scale-[0.99] text-xs md:text-sm ${
                    active
                      ? "border-blue-600 bg-blue-50/70 text-blue-700 shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    {/* Circle Indicator */}
                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border flex items-center justify-center transition-all ${
                      active ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"
                    }`}>
                      {active && <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white" />}
                    </div>
                    <span>{optLabel}</span>
                  </div>
                  {opt.score && active && (
                    <span className="text-[10px] md:text-xs font-bold bg-blue-100 text-blue-800 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full">
                      Selected
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        );

      case "checkbox":
        // If it has predefined options, it is a multi-select list
        if (options.length > 0) {
          const selectedValues = Array.isArray(value) ? value : (value ? [value] : []);

          return (
            <div className="space-y-2 md:space-y-3">
              {options.map((opt: any) => {
                const optId = opt.id || opt;
                const optLabel = opt.label || opt.text || optId;
                const active = selectedValues.includes(optId);

                const handleChecked = () => {
                  if (selectedValues.includes(optId)) {
                    onChange(selectedValues.filter((val: any) => val !== optId));
                  } else {
                    onChange([...selectedValues, optId]);
                  }
                };

                return (
                  <button
                    key={optId}
                    type="button"
                    onClick={handleChecked}
                    className={`w-full p-3 md:p-4 rounded-lg md:rounded-xl border text-left font-semibold transition-all duration-200 flex items-center gap-2 md:gap-3 active:scale-[0.99] text-xs md:text-sm ${
                      active
                        ? "border-blue-600 bg-blue-50/70 text-blue-700 shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50/50"
                    }`}
                  >
                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded border flex items-center justify-center transition-all ${
                      active ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"
                    }`}>
                      {active && (
                        <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span>{optLabel}</span>
                  </button>
                );
              })}
            </div>
          );
        }

        // Single Checkbox
        return (
          <button
            type="button"
            onClick={() => onChange(!value)}
            className={`w-full p-3 md:p-4 rounded-lg md:rounded-xl border text-left font-semibold transition-all duration-200 flex items-center gap-2 md:gap-3 active:scale-[0.99] text-xs md:text-sm ${
              value
                ? "border-blue-600 bg-blue-50/70 text-blue-700 shadow-sm"
                : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50/50"
            }`}
          >
            <div className={`w-4 h-4 md:w-5 md:h-5 rounded border flex items-center justify-center transition-all ${
              value ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"
            }`}>
              {value && (
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span>Check this box to confirm.</span>
          </button>
        );

      case "rating":
      case "likert-scale":
      case "likert":
        // 1 to 5 rating scale
        const min = question.min || 1;
        const max = question.max || 5;
        const scaleOptions = [];
        for (let i = min; i <= max; i++) {
          scaleOptions.push(i);
        }

        return (
          <div className="flex flex-col gap-2.5 md:gap-4">
            <div className="grid grid-cols-5 gap-1.5 md:gap-2.5">
              {scaleOptions.map((rating) => {
                const active = Number(value) === rating;
                return (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => onChange(rating)}
                    className={`py-2 md:py-4 rounded-lg md:rounded-xl font-bold border transition-all text-center text-sm md:text-lg active:scale-90 ${
                      active
                        ? "bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-500/20"
                        : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                    }`}
                  >
                    {rating}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between text-[10px] md:text-xs font-bold text-slate-400 px-1">
              <span>Strongly Disagree</span>
              <span>Strongly Agree</span>
            </div>
          </div>
        );

      case "dropdown":
      case "search-dropdown":
        if (!options || options.length === 0) {
          return (
            <input
              id={inputId}
              type="text"
              value={value || ""}
              onChange={(e) => onChange(e.target.value)}
              className="w-full px-3 md:px-5 py-2 md:py-3.5 bg-white border border-slate-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium placeholder-slate-400 text-slate-800 text-xs md:text-base"
              placeholder="Type your answer here..."
            />
          );
        }
        return (
          <select
            id={inputId}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-3 md:px-5 py-2 md:py-3.5 bg-white border border-slate-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium text-slate-800 cursor-pointer text-xs md:text-base"
          >
            <option value="" disabled>Select an option...</option>
            {options.map((opt: any) => {
              const optId = opt.id || opt;
              const optLabel = opt.label || opt.text || optId;
              return (
                <option key={optId} value={optId}>
                  {optLabel}
                </option>
              );
            })}
          </select>
        );

      case "textarea":
        return (
          <textarea
            id={inputId}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className="w-full px-3 md:px-5 py-2 md:py-3 bg-white border border-slate-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium placeholder-slate-400 text-slate-800 resize-y text-xs md:text-base"
            placeholder="Write your response here..."
          />
        );

      case "image-choice":
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {options.map((opt: any) => {
              const optId = opt.id || opt;
              const optLabel = opt.label || opt.text || optId;
              const active = value === optId;

              return (
                <button
                  key={optId}
                  type="button"
                  onClick={() => onChange(optId)}
                  className={`p-2.5 md:p-4 rounded-xl md:rounded-2xl border text-center transition-all hover:scale-[1.02] active:scale-95 duration-200 flex flex-col items-center gap-2 md:gap-3 ${
                    active
                      ? "border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-500/20"
                      : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                  }`}
                >
                  {opt.image && (
                    <img
                      src={opt.image}
                      alt={optLabel}
                      className="w-full h-16 md:h-24 object-contain rounded-lg bg-slate-50 p-1 md:p-2"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  )}
                  <span className="font-semibold text-xs md:text-sm text-slate-800">{optLabel}</span>
                </button>
              );
            })}
          </div>
        );

      case "ranking":
        const rankedIds = Array.isArray(value) ? value : [];

        const handleRank = (optId: string) => {
          if (rankedIds.includes(optId)) {
            onChange(rankedIds.filter((id: string) => id !== optId));
          } else {
            onChange([...rankedIds, optId]);
          }
        };

        return (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-500 mb-2 italic">
              Click options in order of preference (first click = 1st preference, click again to remove).
            </p>
            <div className="space-y-3">
              {options.map((opt: any) => {
                const optId = opt.id || opt;
                const optLabel = opt.label || opt.text || optId;
                const rankIndex = rankedIds.indexOf(optId);
                const isRanked = rankIndex !== -1;

                return (
                  <button
                    key={optId}
                    type="button"
                    onClick={() => handleRank(optId)}
                    className={`w-full p-3.5 md:p-4.5 rounded-lg md:rounded-xl border text-left font-semibold transition-all duration-200 flex items-center justify-between active:scale-[0.99] text-sm md:text-base ${
                      isRanked
                        ? "border-blue-600 bg-blue-50/70 text-blue-700 shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50/50"
                    }`}
                  >
                    <span>{optLabel}</span>
                    <div className="flex items-center gap-2">
                      {isRanked ? (
                        <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 text-white font-extrabold text-xs md:text-sm flex items-center justify-center shadow-sm">
                          {rankIndex + 1}
                        </span>
                      ) : (
                        <span className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-dashed border-slate-300 text-slate-400 font-bold text-xs md:text-sm flex items-center justify-center">
                          +
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            {rankedIds.length > 0 && rankedIds.length < options.length && (
              <p className="text-xs text-amber-600 font-semibold italic mt-2">
                Please select all options to complete the ranking.
              </p>
            )}
          </div>
        );

      default:
        return null;
    }
  }
}
