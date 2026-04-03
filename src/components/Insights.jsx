"use client";

import { useFinanceStore } from "@/store/useFinanceStore";

export default function Insights() {
  const { transactions, theme } = useFinanceStore();

  // Separate income & expenses
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const savings = income - expenses;

  // Category breakdown
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let highestCategory = "N/A";
  let highestAmount = 0;

  Object.entries(categoryMap).forEach(([cat, amt]) => {
    if (amt > highestAmount) {
      highestCategory = cat;
      highestAmount = amt;
    }
  });

  return (
    <div
      className="rounded-2xl shadow p-5 mt-6"
      style={{
        backgroundColor: "var(--card-background)",
        color: "var(--card-foreground)",
        border: "1px solid var(--border-color)",
      }}
    >
      <h2 className="text-lg font-semibold mb-4">Insights</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No data available to generate insights.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Highest Spending */}
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: "var(--panel-background)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border-color)",
            }}
          >
            <p className="text-sm ">Highest Spending</p>
            <p className="font-semibold mt-1 ">
              {highestCategory} (₹ {highestAmount})
            </p>
          </div>

          {/* Income vs Expense */}
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: "var(--panel-background)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border-color)",
            }}
          >
            <p className="text-sm ">Income vs Expenses</p>
            <p className="font-semibold mt-1 ">
              ₹ {income} / ₹ {expenses}
            </p>
          </div>

          {/* Savings */}
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: "var(--panel-background)",
              color: "var(--card-foreground)",
              border: "1px solid var(--border-color)",
            }}
          >
            <p className="text-sm ">Net Savings</p>
            <p
              className={`font-semibold mt-1 ${
                savings >= 0
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-500 dark:text-red-400"
              }`}
            >
              ₹ {savings}
            </p>
          </div>
        </div>
      )}

      {/* Smart Insight Message */}
      {transactions.length > 0 && (
        <div className="mt-4 text-sm text-gray-600">
          💡 You spent the most on{" "}
          <span className="font-medium">{highestCategory}</span>. Try optimizing
          this category to improve savings.
        </div>
      )}
    </div>
  );
}
