import { useMemo, useState } from "react";

interface Props {
  payments: any[];
}

const PaymentsTab = ({ payments }: Props) => {
  const [statusFilter, setStatusFilter] =
    useState("All");

  const filteredPayments = useMemo(() => {
    if (statusFilter === "All")
      return payments;

    return payments.filter(
      (p) => p.status === statusFilter
    );
  }, [payments, statusFilter]);

  const totalRevenue = payments.reduce(
    (sum, item) =>
      sum + Number(item.amount || 0),
    0
  );

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>
          <h2 className="text-2xl font-bold">
            Payment Management
          </h2>

          <p className="text-slate-500">
            Revenue and transactions
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="border rounded-xl px-4 py-2"
        >
          <option>All</option>
          <option>success</option>
          <option>pending</option>
          <option>failed</option>
        </select>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white rounded-3xl p-6 border">
          <p>Total Revenue</p>
          <h2 className="text-4xl font-bold mt-2">
            ₹{totalRevenue}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border">
          <p>Transactions</p>
          <h2 className="text-4xl font-bold mt-2">
            {payments.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border">
          <p>Successful</p>
          <h2 className="text-4xl font-bold mt-2">
            {
              payments.filter(
                (x) => x.status === "success"
              ).length
            }
          </h2>
        </div>

      </div>

      <div className="bg-white rounded-3xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>
              <th className="p-4 text-left">
                User
              </th>

              <th className="p-4 text-left">
                Amount
              </th>

              <th className="p-4 text-left">
                Status
              </th>

              <th className="p-4 text-left">
                Date
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredPayments.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >

                <td className="p-4">
                  {item.user_id}
                </td>

                <td className="p-4">
                  ₹{item.amount}
                </td>

                <td className="p-4">
                  {item.status}
                </td>

                <td className="p-4">
                  {new Date(
                    item.created_at
                  ).toLocaleDateString()}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default PaymentsTab;