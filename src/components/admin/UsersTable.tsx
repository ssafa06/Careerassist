import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

interface UsersTableProps {
  users: any[];
}

const UsersTable = ({
  users,
}: UsersTableProps) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchMatch =
        user?.full_name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        user?.email
          ?.toLowerCase()
          .includes(search.toLowerCase());

      if (filter === "All") {
        return searchMatch;
      }

      return (
        searchMatch &&
        user?.student_type === filter
      );
    });
  }, [users, search, filter]);

  return (
    <div>

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            User Management
          </h2>

          <p className="text-slate-500">
            Manage all registered users
          </p>

        </div>

        <div className="bg-blue-50 px-5 py-3 rounded-2xl">

          <p className="text-sm text-slate-500">
            Total Users
          </p>

          <h3 className="text-2xl font-bold text-blue-600">
            {users.length}
          </h3>

        </div>

      </div>

      {/* Search + Filters */}

      <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-6">

        <div className="grid lg:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Search by Name or Email..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border border-slate-300 rounded-xl px-4 py-3 w-full"
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="border border-slate-300 rounded-xl px-4 py-3"
          >
            <option>All</option>
            <option>School</option>
            <option>College</option>
            <option>Graduate</option>
          </select>

        </div>

      </div>

      {/* Empty State */}

      {filteredUsers.length === 0 && (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center">

          <h3 className="text-xl font-semibold">
            No Users Found
          </h3>

          <p className="text-slate-500 mt-2">
            Try changing filters or search.
          </p>

        </div>
      )}

      {/* Desktop Table */}

      {filteredUsers.length > 0 && (
        <>
          <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200 bg-white">

            <table className="w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="text-left p-5">
                    User
                  </th>

                  <th className="text-left p-5">
                    Email
                  </th>

                  <th className="text-left p-5">
                    Student Type
                  </th>

                  <th className="text-left p-5">
                    Plan
                  </th>

                  <th className="text-left p-5">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >

                    <td className="p-5">

                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                          {user?.full_name
                            ?.charAt(0)
                            ?.toUpperCase()}

                        </div>

                        <div>

                          <p className="font-semibold">
                            {user.full_name}
                          </p>

                          <p className="text-sm text-slate-500">
                            {user.id?.slice(0, 8)}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td className="p-5">
                      {user.email}
                    </td>

                    <td className="p-5">
                      {user.student_type || "-"}
                    </td>

                    <td className="p-5">

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                        {user.subscription_plan ||
                          "Free"}

                      </span>

                    </td>

                    <td className="p-5">

                      <button
                        onClick={() =>
                          navigate(
                            `/admin/user/${user.id}`
                          )
                        }
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
                      >
                        View Profile
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile Cards */}

          <div className="lg:hidden space-y-4">

            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white border border-slate-200 rounded-2xl p-5"
              >

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">

                    {user?.full_name
                      ?.charAt(0)
                      ?.toUpperCase()}

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {user.full_name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {user.email}
                    </p>

                  </div>

                </div>

                <div className="space-y-2 text-sm">

                  <p>
                    <span className="font-medium">
                      Type:
                    </span>{" "}
                    {user.student_type || "-"}
                  </p>

                  <p>
                    <span className="font-medium">
                      Plan:
                    </span>{" "}
                    {user.subscription_plan ||
                      "Free"}
                  </p>

                </div>

                <button
                  onClick={() =>
                    navigate(
                      `/admin/user/${user.id}`
                    )
                  }
                  className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl"
                >
                  View Profile
                </button>

              </div>
            ))}

          </div>
        </>
      )}

    </div>
  );
};

export default UsersTable;