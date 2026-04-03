"use client";

import { useState } from "react";
import { useFinanceStore } from "@/store/useFinanceStore";

export default function TransactionTable() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");
  const categories = ["Food", "Travel", "Shopping"];

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
  });

  const { transactions, role, addTransaction, deleteTransaction, theme } =
    useFinanceStore();

  const filteredData = transactions.filter((txn) => {
    const matchesSearch = txn.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filterType === "all" || txn.type === filterType;

    return matchesSearch && matchesFilter;
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
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Transactions</h2>

        {/* Add Button (Admin Only) */}
        {role === "admin" && (
          <div className="mb-4 flex flex-col md:flex-row gap-2">
            <input
              type="number"
              placeholder="Amount"
              className="border p-2 rounded"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />

            <input
              type="text"
              placeholder="Category"
              className="border p-2 rounded"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <select
              className="border p-2 rounded"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => {
                if (!form.amount || !form.category) return;

                addTransaction({
                  date: new Date().toISOString().split("T")[0],
                  amount: Number(form.amount),
                  category: form.category,
                  type: form.type,
                });

                // reset form
                setForm({
                  amount: "",
                  category: "",
                  type: "expense",
                });
              }}
            >
              Add
            </button>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left dark:text-white">
          <thead>
            <tr className="text-gray-500 dark:text-gray-300 text-sm border-b">
              <th className="pb-2">Date</th>
              <th>Category</th>
              <th>Type</th>
              <th className="text-right">Amount</th>
              {role === "admin" && <th className="text-right">Action</th>}
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="py-2">{txn.date}</td>

                  <td>{txn.category}</td>

                  <td
                    className={
                      txn.type === "income" ? "text-green-600" : "text-red-500"
                    }
                  >
                    {txn.type}
                  </td>

                  <td className="text-right font-medium">₹ {txn.amount}</td>

                  {role === "admin" && (
                    <td className="text-right">
                      <button
                        onClick={() => deleteTransaction(txn.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={role === "admin" ? 5 : 4}
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
