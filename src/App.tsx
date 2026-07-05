import { BrowserRouter, Routes, Route } from "react-router-dom";import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/assessment/Assessment";
import Report from "./pages/Report";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./pages/ResetPassword";
import PublicRoute from "./components/PublicRoute";
import Landing from './pages/Landing';
import Profile from "./pages/Profile";
import AdminDashboard from './pages/AdminDashboard';
import AdminUserDetails from './pages/AdminUserDetails';
import Referral from './pages/Referral';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
           <Route
  path="/login"
  element={
    <PublicRoute>
      <Login />
    </PublicRoute>
  }
/>
<Route
  path="/dashboard/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
<Route
  path="/register"
  element={
    <PublicRoute>
      <Register />
    </PublicRoute>
  }
/>

<Route
  path="/forgot-password"
  element={
    <PublicRoute>
      <ForgotPassword />
    </PublicRoute>
  }
/>
        <Route
  path="/reset-password"
  element={<ResetPassword />}
/>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/assessment"
          element={
            <ProtectedRoute>
              <Assessment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/report"
          element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }
        />
       <Route
  path="/admin"
  element={<AdminDashboard />}
/>

<Route
  path="/admin/user/:id"
  element={<AdminUserDetails />}
/>

        <Route
          path="/dashboard/referral"
          element={
            <ProtectedRoute>
              <Referral />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
