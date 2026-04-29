import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import AppLayout from "@/components/layout/AppLayout";
import LoginPage from "@/pages/LoginPage";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Account from "@/pages/Account";
import { rehydrateUser } from "@/features/User/user.slice";
import { Spin } from "antd";
import Dashboard from "@/pages/Dashboard";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Public routes */}
      <Route path="/auth/login" element={<LoginPage />} />

      {/* Protected routes  */}
      <Route
        path="/"
        element={
          <Auth>
            <AppLayout />
          </Auth>
        }
      >
        <Route index element={<Navigate to="/account" replace />} />

        <Route path="account" element={<Account />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="security"              element={<Security />} /> */}
          {/* <Route path="identify-verification" element={<IdentifyVerification />} /> */}
          {/* <Route path="api-management"        element={<ApiManagement />} /> */}
          {/* <Route path="export-history"        element={<ExportHistory />} /> */}
          {/* <Route path="my-reward"             element={<MyReward />} /> */}
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

const Auth = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const { userInfo, loading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login", { replace: true });
    } else {
      dispatch(rehydrateUser()).finally(() => setReady(true));
    }
  }, []);

  if (!ready || loading) return <Spin fullscreen />;
  if (!userInfo) return null;

  return <>{children}</>;
};
