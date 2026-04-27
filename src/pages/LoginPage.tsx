import OmpfinexLogin from "@/assets/images/OmpfinexLogin.png";
import LoginForm from "@/features/Auth/Login/LoginForm";
import { UserOutlined } from "@ant-design/icons";
import { Button, Divider, Tabs, TabsProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const items: TabsProps["items"] = [
  { key: "Email", label: "Email/Phone Number" },
  { key: "Token", label: "Your OMPFinex Token" },
];

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("Email");

  const changeTab = (activeKey: string) => {
    setActiveTab(activeKey);
  };

  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <img
          src={OmpfinexLogin}
          alt="LoginImg"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-0 justify-center bg-(--kds-background) md:flex-1">
        <div className="mt-50 w-1/2">
          <div className="mb-5 text-4xl font-bold text-(--kds-text-primary)">
            Log In
          </div>
          <Tabs
            onChange={(activeKey) => changeTab(activeKey)}
            items={items}
            defaultActiveKey="Email"
            indicator={{ size: (origin) => origin - 20, align: "center" }}
            className="text-lg font-bold"
          />
          <LoginForm activeTab={activeTab} />
          <Divider size="large">
            <span className="tw-text-[var(--kds-text-disabled)]">
              or continue with
            </span>
          </Divider>
          <Button
            block
            icon={<UserOutlined />}
            className="tw-font-bold tw-h-12"
            shape="round"
            size="large"
          >
            Log In with Passkey
          </Button>
          <div className="mt-3 text-sm font-semibold text-(--kds-text-primary)">
            Don't have an account?
            <Link to={""} className="font-semibold">
              {" "}
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
