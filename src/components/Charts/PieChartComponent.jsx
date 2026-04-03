"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useFinanceStore } from "@/store/useFinanceStore";

const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b"];

export default function PieChartComponent() {
  const { transactions, theme } = useFinanceStore();

  // Group expenses by category
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const data = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div
      className="p-5 rounded-2xl shadow"
      style={{
        backgroundColor: "var(--card-background)",
        color: "var(--card-foreground)",
        border: "1px solid var(--border-color)",
      }}
    >
      <h2 className="mb-4 font-semibold">Spending Breakdown</h2>

      {data.length === 0 ? (
        <p className="text-gray-500">No expense data available</p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={data} dataKey="value" outerRadius={80} label>
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
