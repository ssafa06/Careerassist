import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    setAuthenticated(!!session);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return authenticated ? <Navigate to="/assessment" /> : children;
};

export default PublicRoute;
