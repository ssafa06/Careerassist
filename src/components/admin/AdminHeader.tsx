const AdminHeader = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-8 py-5">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Admin Dashboard
          </h1>

          <p className="text-slate-500">
            Manage CareerAssist Platform
          </p>
        </div>

        <div className="flex items-center gap-3">

          <div className="text-right">
            <p className="font-semibold">
              Admin
            </p>

            <p className="text-sm text-slate-500">
              CareerAssist
            </p>
          </div>

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            A
          </div>

        </div>

      </div>

    </header>
  );
};

export default AdminHeader;