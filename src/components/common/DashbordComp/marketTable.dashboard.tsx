import { useAppDispatch, useAppSelector } from "@/app/Redux/hooks";
import { marketSelector } from "@/features/Market/market.selector";
import { fetchMarkets } from "@/features/Market/market.slice";
import { Button, Table, Tabs, TabsProps } from "antd";
import Decimal from "decimal.js";
import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, YAxis } from "recharts";
// @ts-ignore
import toFormat from "toformat";

const items: TabsProps["items"] = [
  { key: "Faverites", label: "Faverites" },
  { key: "Tranding", label: "Tranding" },
  { key: "New_Listing", label: "New Listing" },
  { key: "Top_Gainer", label: "Top Gainer" },
  { key: "Volume", label: "Volume" },
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
    render: (value: string) => (
      <span
        style={{
          color: Number(value) >= 0 ? "#00B47D" : "#F65454",
          fontSize: "16px",
        }}
      >
        {Number(value) >= 0 ? "+" : ""}
        {value} %
      </span>
    ),
  },
  {
    title: "4h Trend",
    key: "h4_Trend",
    render: (_: any, record: any) => {
      const trendData = record.h4_Trend || [];
      if (!Array.isArray(trendData) || trendData.length === 0)
        return <div>-</div>;

      const chartData = trendData.map((value: number) => ({ value }));
      const firstValue = trendData[0];
      const lastValue = trendData[trendData.length - 1];
      const isPositive = lastValue >= firstValue;
      const color = isPositive ? "#00B47D" : "#F65454";
      const minValue = Math.min(...trendData);
      const maxValue = Math.max(...trendData);
      const padding = (maxValue - minValue) * 0.1;

      return (
        <ResponsiveContainer width={120} height={50}>
          <AreaChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id={`gradient-${record.key}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis domain={[minValue - padding, maxValue + padding]} hide />
            <Area
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={1.5}
              fill={`url(#gradient-${record.key})`}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    },
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
  const { markets, loading } = useAppSelector(marketSelector);

  const dataSource2 = markets?.map((market) => {
    const DecimalWithFormat = toFormat(Decimal);
    const priceNum = new DecimalWithFormat(market.last_price);
    const price =
      market.quote_currency.id != "IRR" ? priceNum : priceNum.dividedBy(10);

    return {
      key: market.id,
      Pair: `${market.base_currency.id} / ${market.quote_currency.id}`,
      Price: price.toFormat(),
      h24_Change: market.day_change_percent,
      h4_Trend: Array.isArray(market.history) ? market.history : [],
    };
  });

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
        <Table
          className="mt-5"
          dataSource={dataSource2}
          columns={columns}
          rowClassName="h-20"
          loading={loading}
        />
      </div>
    </div>
  );
}
