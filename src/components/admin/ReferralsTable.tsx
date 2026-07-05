import { useMemo } from "react";

interface Props {
  referrals: any[];
}

const ReferralsTable = ({
  referrals,
}: Props) => {

  const totalRevenue = useMemo(() => {
    return referrals.reduce(
      (sum, r) =>
        sum +
        Number(
          r.revenue_generated || 0
        ),
      0
    );
  }, [referrals]);

  return (
    <div>

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Referral Management
        </h2>

        <p className="text-slate-500">
          Track referral performance
        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-3xl p-6 border">
          <p>Total Referrals</p>

          <h2 className="text-4xl font-bold mt-2">
            {referrals.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border">
          <p>Paid Referrals</p>

          <h2 className="text-4xl font-bold mt-2">
            {referrals.reduce(
              (sum, r) =>
                sum +
                Number(
                  r.paid_users || 0
                ),
              0
            )}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border">
          <p>Revenue Generated</p>

          <h2 className="text-4xl font-bold mt-2">
            ₹{totalRevenue}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 border">
          <p>Registrations</p>

          <h2 className="text-4xl font-bold mt-2">
            {referrals.reduce(
              (sum, r) =>
                sum +
                Number(
                  r.registrations || 0
                ),
              0
            )}
          </h2>
        </div>

      </div>

      <div className="bg-white rounded-3xl border overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="p-4 text-left">
                Referral Code
              </th>

              <th className="p-4 text-left">
                Clicks
              </th>

              <th className="p-4 text-left">
                Registrations
              </th>

              <th className="p-4 text-left">
                Paid Users
              </th>

              <th className="p-4 text-left">
                Revenue
              </th>

            </tr>

          </thead>

          <tbody>

            {referrals.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >

                <td className="p-4 font-semibold">
                  {item.referral_code}
                </td>

                <td className="p-4">
                  {item.clicks}
                </td>

                <td className="p-4">
                  {item.registrations}
                </td>

                <td className="p-4">
                  {item.paid_users}
                </td>

                <td className="p-4">
                  ₹
                  {item.revenue_generated}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ReferralsTable;