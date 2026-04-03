"use client";
import Header from "@/components/Header";
import DashboardLayout from "@/components/DashboardLayout";
import SummaryCard from "@/components/SummaryCard";
import LineChartComponent from "@/components/Charts/LineChartComponent";
import PieChartComponent from "@/components/Charts/PieChartComponent";
import TransactionTable from "@/components/TransactionTable";
import Insights from "@/components/Insights";

import { useFinanceStore } from "@/store/useFinanceStore";

export default function Home() {
  const { transactions } = useFinanceStore();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <DashboardLayout>
      <Header />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <SummaryCard title="Total Balance" amount={balance} />
        <SummaryCard title="Income" amount={income} />
        <SummaryCard title="Expenses" amount={expenses} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LineChartComponent />
        <PieChartComponent />
      </div>

      <TransactionTable />
      <Insights />
    </DashboardLayout>
  );
}
