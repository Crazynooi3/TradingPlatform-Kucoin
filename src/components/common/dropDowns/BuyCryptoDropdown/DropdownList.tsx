import Fiat_Deposit from "@/assets/images/Fiat_Deposit.png";
import P2PTrading from "@/assets/images/P2PTrading.png";
import Third_Party from "@/assets/images/Third_Party.png";
import {
  ExpandAltOutlined,
  LineChartOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

export const DROPDOWN_BuyCrypto_ITEMS = [
  {
    key: "P2P_Tradin",
    label: "P2P Trading",
    icon: P2PTrading,
    disc: "From verified merchants using a range of local payment methods",
  },
  {
    key: "Fiat_Deposit",
    label: "Fiat Deposit",
    icon: Fiat_Deposit,
    disc: "Top up fiat balance with bank transfer",
  },
  {
    key: "Third_Party",
    label: "Third-Party",
    icon: Third_Party,
    disc: "Banxa, Simplex, BTC Direct, Onramp",
  },
];

export const DROPDOWN_Assets: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Funding Account
      </a>
    ),
    icon: <WalletOutlined />,
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Trading Account
      </a>
    ),
    icon: <ExpandAltOutlined />,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Futures Account
      </a>
    ),
    icon: <LineChartOutlined />,
  },
];
