import {
  FaChartBar,
  FaUsers,
  FaClipboardList,
  FaFileAlt,
  FaMoneyBillWave,
  FaShareAlt,
  FaArrowLeft,
} from "react-icons/fa";

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AdminSidebar = ({
  activeTab,
  setActiveTab,
}: Props) => {
  const menu = [
    {
      name: "Overview",
      icon: <FaChartBar />,
    },
    {
      name: "Users",
      icon: <FaUsers />,
    },
    {
      name: "Assessments",
      icon: <FaClipboardList />,
    },
    {
      name: "Reports",
      icon: <FaFileAlt />,
    },
    {
      name: "Payments",
      icon: <FaMoneyBillWave />,
    },
    {
      name: "Referrals",
      icon: <FaShareAlt />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800">

      <div className="p-6 border-b border-slate-800">

        <h1 className="text-2xl font-bold text-white">
          CareerNavigator
        </h1>

        <p className="text-slate-400 text-sm">
          Admin Console
        </p>

      </div>

      <div className="p-4">

        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all

            ${
              activeTab === item.name
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}

      </div>

      <div className="p-4 mt-auto">

        <a
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-800"
        >
          <FaArrowLeft />
          Back To Site
        </a>

      </div>

    </aside>
  );
};

export default AdminSidebar;