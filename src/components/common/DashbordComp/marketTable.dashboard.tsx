import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import { marketSelector } from "@/features/Market/market.selector";
import { fetchMarkets } from "@/features/Market/market.slice";
import { Button, Table, Tabs, TabsProps } from "antd";
import { useEffect, useState } from "react";

const items: TabsProps["items"] = [
  { key: "Faverites", label: "Faverites" },
  { key: "Tranding", label: "Tranding" },
  { key: "New_Listing", label: "New Listing" },
  { key: "Top_Gainer", label: "Top Gainer" },
  { key: "Volume", label: "Volume" },
];

const dataSource = [
  {
    key: "1",
    Pair: "BTC/USDT",
    Price: "3654762345",
    h24_Change: "364536",
    h4_Trend: "7676786",
    Action: "Trade",
  },
  {
    key: "2",
    Pair: "ADA/USDT",
    Price: "3654762345",
    h24_Change: "364536",
    h4_Trend: "7676786",
    Action: "Trade",
  },
  {
    key: "3",
    Pair: "XRP/USDT",
    Price: "3654762345",
    h24_Change: "364536",
    h4_Trend: "7676786",
    Action: "Trade",
  },
  {
    key: "4",
    Pair: "ETH/USDT",
    Price: "3654762345",
    h24_Change: "364536",
    h4_Trend: "7676786",
    Action: "Trade",
  },
];

const columns = [
  {
    title: "Pair",
    dataIndex: "Pair",
    key: "Pair",
    sorter: (a: any, b: any) => a.Pair.localeCompare(b.Pair),
  },
  {
    title: "Price",
    dataIndex: "Price",
    key: "Price",
    sorter: (a: any, b: any) => Number(a.Price) - Number(b.Price),
  },
  {
    title: "24h Change",
    dataIndex: "h24_Change",
    key: "h24_Change",
    sorter: (a: any, b: any) => Number(a.h24_Change) - Number(b.h24_Change),
  },
  {
    title: "4h Trend",
    dataIndex: "h4_Trend",
    key: "h4_Trend",
  },
  {
    title: "Action",
    key: "Action",
    render: () => (
      <Button size="small" type="primary" shape="round">
        Trade
      </Button>
    ),
  },
];

export default function MarketTableDashboard() {
  const [activeTab, setActiveTab] = useState("Faverites");

  const dispatch = useAppDispatch();
  const markets = useAppSelector(marketSelector);
  console.log(markets);

  const changeTab = (activeKey: string) => {
    setActiveTab(activeKey);
  };

  useEffect(() => {
    dispatch(fetchMarkets());
  }, []);
  return (
    <div className="rounded-2xl border border-(--kds-border) p-5">
      <div className="flex items-center justify-between">
        <span>Market</span>
        <span className="flex items-center gap-4 text-sm text-(--kds-text-secondary)">
          <span>View More</span>
          <span>|</span>
          <span>Help</span>
        </span>
      </div>

      <div className="w-1/2">
        <Tabs
          onChange={(activeKey) => changeTab(activeKey)}
          items={items}
          defaultActiveKey="Email"
          indicator={{ size: (origin) => origin - 20, align: "center" }}
          className="text-lg font-bold"
        />
        <div className="flex gap-4">
          <Button
            style={{ fontSize: "12px" }}
            size="small"
            color="default"
            variant="filled"
            className="text-xs"
          >
            Spot
          </Button>
          <Button
            style={{ fontSize: "12px" }}
            size="small"
            color="default"
            variant="filled"
            className="text-xs"
          >
            Futeure
          </Button>
        </div>
      </div>

      <div>
        <Table dataSource={dataSource} columns={columns} rowClassName="h-24" />
      </div>
    </div>
  );
}
