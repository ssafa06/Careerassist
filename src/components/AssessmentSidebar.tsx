
interface AssessmentSection {
  id: string;
  title: string;
  subtitle: string;
  layer: number;
  questions: unknown[];
}

interface Props {
  sections: AssessmentSection[];
  currentSection: number;
  progress: number;
}

const layerColors: Record<number, string> = {
  1: "bg-indigo-500",
  2: "bg-blue-500",
  3: "bg-purple-500",
  4: "bg-emerald-500",
  5: "bg-orange-500",
};

export default function AssessmentSidebar({
  sections,
  currentSection,
  progress,
}: Props) {
  return (
    <div className="sticky top-6">

      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

        {/* Header */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">

          <h2 className="text-xl font-bold">
            CareerAssist
          </h2>

          <p className="text-sm text-blue-100 mt-1">
            Assessment Progress
          </p>

          <div className="mt-5">

            <div className="flex justify-between text-sm mb-2">

              <span>Overall Progress</span>

              <span>{progress}%</span>

            </div>

            <div className="h-2 rounded-full bg-blue-300">

              <div
                className="h-2 rounded-full bg-white transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

          </div>

        </div>

        {/* Sections */}

        <div className="p-5 hidden lg:block">

          <div className="space-y-3">

            {sections.map((section, index) => {
              const active = currentSection === index;

              const completed = currentSection > index;

              return (
                <div
                  key={section.id}
                  className={`w-full rounded-2xl border p-4 transition-all duration-300 text-left ${
                    active
                      ? "border-blue-600 bg-blue-50 shadow-sm"
                      : completed
                      ? "border-emerald-200 bg-emerald-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3">

                    {/* Circle */}

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                        completed
                          ? "bg-emerald-500"
                          : active
                          ? "bg-blue-600"
                          : layerColors[section.layer]
                      }`}
                    >
                      {completed ? "✓" : section.layer}
                    </div>

                    {/* Text */}

                    <div className="flex-1">

                      <h3
                        className={`font-semibold ${
                          active
                            ? "text-blue-700"
                            : "text-slate-800"
                        }`}
                      >
                        {section.title}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1">
                        {section.subtitle}
                      </p>

                      <div className="mt-3 flex justify-between text-xs">

                        <span className="text-slate-400">
                          Layer {section.layer}
                        </span>

                        <span className="text-slate-400">
                          {section.questions.length} Questions
                        </span>

                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-slate-200 p-5 hidden lg:block">

          <div className="rounded-2xl bg-slate-50 p-4">

            <p className="text-xs uppercase tracking-wide text-slate-400">
              Assessment Status
            </p>

            <p className="mt-2 font-semibold text-slate-800">
              {progress === 100
                ? "Completed"
                : "Assessment In Progress"}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Complete all sections to unlock your
              personalized CareerAssist report.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}