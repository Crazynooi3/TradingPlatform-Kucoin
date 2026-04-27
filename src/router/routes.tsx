import AppLayout from "@/components/layout/AppLayout";
import LoginPage from "@/pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Public - <Landing /> */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<></>} />
        <Route path="/auth/login" element={<LoginPage />} />
        {/* <Route path="/auth/register" element={<RegisterPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
