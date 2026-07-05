import { useState } from "react";

interface Props {
  reports: any[];
}

const ReportsTable = ({
  reports,
}: Props) => {
  const [selectedReport, setSelectedReport] =
    useState<any>(null);

  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Report Management
          </h2>

          <p className="text-slate-500">
            View generated career reports
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl px-5 py-3">

          <p className="text-sm text-slate-500">
            Total Reports
          </p>

          <h3 className="text-2xl font-bold text-green-600">
            {reports.length}
          </h3>

        </div>

      </div>

      <div className="space-y-4">

        {reports.map((report) => (

          <div
            key={report.id}
            className="bg-white border border-slate-200 rounded-3xl p-6"
          >

            <div className="grid lg:grid-cols-5 gap-4 items-center">

              <div>

                <p className="text-xs text-slate-500">
                  Report ID
                </p>

                <p className="font-semibold">
                  {report.id?.slice(0, 8)}
                </p>

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  User ID
                </p>

                <p>
                  {report.user_id?.slice(0, 8)}
                </p>

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Career Match
                </p>

                <p>
                  {report.career_match ||
                    "Not Available"}
                </p>

              </div>

              <div>

                <p className="text-xs text-slate-500">
                  Score
                </p>

                <p>
                  {report.fit_score || "-"}
                </p>

              </div>

              <div>

                <button
                  onClick={() =>
                    setSelectedReport(report)
                  }
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl"
                >
                  View Report
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

      {selectedReport && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-auto">

            <div className="flex justify-between mb-6">

              <h2 className="text-2xl font-bold">
                Report Preview
              </h2>

              <button
                onClick={() =>
                  setSelectedReport(null)
                }
              >
                ✕
              </button>

            </div>

            <pre className="text-sm whitespace-pre-wrap">
              {JSON.stringify(
                selectedReport,
                null,
                2
              )}
            </pre>

          </div>

        </div>

      )}

    </div>
  );
};

export default ReportsTable;