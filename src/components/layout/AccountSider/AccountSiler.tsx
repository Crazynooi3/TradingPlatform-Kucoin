// pages/Account/components/AccountSider.tsx
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  ApiOutlined,
  AppstoreOutlined,
  AuditOutlined,
  DownloadOutlined,
  GiftOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const menuItems = [
  { key: "dashboard", icon: <AppstoreOutlined />, label: "Dashboard" },
  { key: "security", icon: <SafetyOutlined />, label: "Security" },
  {
    key: "identify-verification",
    icon: <AuditOutlined />,
    label: "Identify Verification",
  },
  { key: "api-management", icon: <ApiOutlined />, label: "API Management" },
  {
    key: "export-history",
    icon: <DownloadOutlined />,
    label: "Export History",
  },
  { key: "my-reward", icon: <GiftOutlined />, label: "My Reward" },
];

interface Props {
  selectedKey: string;
  onSelect: (key: string) => void;
}

export default function AccountSider({ selectedKey, onSelect }: Props) {
  return (
    <Sider
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        insetInlineStart: 0,
        scrollbarWidth: "thin",
        scrollbarGutter: "stable",
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        onSelect={({ key }) => onSelect(key)}
        style={{ border: 0, padding: "0 12px" }}
        className="font-medium [&_.ant-menu-item-icon]:text-2xl!"
        items={menuItems}
      />
    </Sider>
  );
}
