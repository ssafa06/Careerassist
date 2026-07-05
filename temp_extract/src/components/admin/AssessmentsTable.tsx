import { useState } from "react";

interface Props {
  assessments: any[];
}

const AssessmentsTable = ({
  assessments,
}: Props) => {
  const [expandedId, setExpandedId] =
    useState<string | null>(null);

  return (
    <div>

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Assessment Management
          </h2>

          <p className="text-slate-500">
            View all submitted assessments
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl px-5 py-3">

          <p className="text-sm text-slate-500">
            Total Assessments
          </p>

          <h3 className="text-2xl font-bold text-blue-600">
            {assessments.length}
          </h3>

        </div>

      </div>

      <div className="space-y-4">

        {assessments.map((assessment) => {
          const data =
            assessment.assessment_data || {};

          return (
            <div
              key={assessment.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden"
            >

              <div className="p-6">

                <div className="grid lg:grid-cols-6 gap-4 items-center">

                  <div>
                    <p className="text-xs text-slate-500">
                      Student
                    </p>

                    <p className="font-semibold">
                      {data.name || "Unknown"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Type
                    </p>

                    <p>
                      {data.studentType || "-"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Interest
                    </p>

                    <p>
                      {data.learningInterest || "-"}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Completion
                    </p>

                    <p>
                      {assessment.completion_percentage}%
                    </p>
                  </div>

                  <div>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {assessment.status}
                    </span>

                  </div>

                  <div>

                    <button
                      onClick={() =>
                        setExpandedId(
                          expandedId ===
                            assessment.id
                            ? null
                            : assessment.id
                        )
                      }
                      className="bg-blue-600 text-white px-4 py-2 rounded-xl"
                    >
                      {expandedId ===
                      assessment.id
                        ? "Hide"
                        : "View"}
                    </button>

                  </div>

                </div>

              </div>

              {expandedId === assessment.id && (

                <div className="border-t bg-slate-50 p-6">

                  <div className="grid lg:grid-cols-3 gap-6">

                    <div>

                      <h4 className="font-bold mb-3">
                        Personal Details
                      </h4>

                      <p>
                        Name: {data.name}
                      </p>

                      <p>
                        Age: {data.age}
                      </p>

                      <p>
                        Phone:
                        {" "}
                        {data.phoneNumber}
                      </p>

                      <p>
                        State:
                        {" "}
                        {data.state}
                      </p>

                    </div>

                    <div>

                      <h4 className="font-bold mb-3">
                        Academic
                      </h4>

                      <p>
                        Grade:
                        {" "}
                        {data.grade}
                      </p>

                      <p>
                        Stream:
                        {" "}
                        {data.stream}
                      </p>

                      <p>
                        Percentage:
                        {" "}
                        {data.percentage}
                      </p>

                      <p>
                        Interest:
                        {" "}
                        {data.learningInterest}
                      </p>

                    </div>

                    <div>

                      <h4 className="font-bold mb-3">
                        Skills
                      </h4>

                      <p>
                        Coding:
                        {" "}
                        {data.coding}
                      </p>

                      <p>
                        Communication:
                        {" "}
                        {data.speaking}
                      </p>

                      <p>
                        Logical:
                        {" "}
                        {data.logicalReasoning}
                      </p>

                      <p>
                        Leadership:
                        {" "}
                        {data.leadership}
                      </p>

                    </div>

                  </div>

                </div>

              )}

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default AssessmentsTable;