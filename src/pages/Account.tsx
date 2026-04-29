// pages/Account/index.tsx
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import AccountSider from "@/components/layout/AccountSider/AccountSiler";

export default function Account() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedKey = location.pathname.split("/").pop() || "dashboard";

  return (
    <main className="flex min-h-dvh bg-(--kds-background)">
      <AccountSider
        selectedKey={selectedKey}
        onSelect={(key) => navigate(`/account/${key}`)}
      />
      <div className="flex-1 px-16 py-10">
        <Outlet /> {/* ← زیرصفحه‌ها اینجا render میشن */}
      </div>
    </main>
  );
}
