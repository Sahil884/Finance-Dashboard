"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useFinanceStore } from "@/store/useFinanceStore";

export default function LineChartComponent() {
  const { transactions, theme } = useFinanceStore();

  const textColor = theme === "dark" ? "#e5e7eb" : "#374151";
  const gridColor = theme === "dark" ? "#374151" : "#e5e7eb";
  const tooltipBg = theme === "dark" ? "#1f2937" : "#ffffff";

  const grouped = {};

  transactions.forEach((t) => {
    if (!grouped[t.date]) grouped[t.date] = 0;

    grouped[t.date] += t.type === "income" ? t.amount : -t.amount;
  });

  const data = Object.entries(grouped).map(([date, balance]) => ({
    date,
    balance,
  }));

  return (
    <div
      className="p-5 rounded-2xl shadow transition-colors"
      style={{
        backgroundColor: "var(--card-background)",
        color: "var(--card-foreground)",
        border: "1px solid var(--border-color)",
      }}
    >
      <h2 className="mb-4 font-semibold">Balance Trend</h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} key={theme}>
          <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />

          <XAxis dataKey="date" stroke={textColor} />
          <YAxis stroke={textColor} />

          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              border: "none",
              color: textColor,
            }}
          />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
