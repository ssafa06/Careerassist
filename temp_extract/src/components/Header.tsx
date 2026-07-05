import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

const Header = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setUserEmail(user.email || "");

      // Get full name from signup metadata
      const fullName =
        user.user_metadata?.full_name ||
        user.email?.split("@")[0] ||
        "User";

      setUserName(fullName);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Welcome Back 👋
        </h2>

        <p className="text-slate-500">
          Continue building your career roadmap
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* <button className="px-4 py-2 rounded-xl border border-slate-300">
          Help
        </button> */}

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-semibold text-slate-800">
              {userName}
            </p>

            <p className="text-sm text-slate-500">
              {userEmail}
            </p>
          </div>

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            {userName.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;