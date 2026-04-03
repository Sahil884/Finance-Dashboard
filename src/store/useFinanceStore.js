"use client";

import { create } from "zustand";

export const useFinanceStore = create((set) => ({
  role: "viewer",
  theme: "light",

  transactions: [
    {
      id: 1,
      date: "2026-04-01",
      amount: 5000,
      category: "Food",
      type: "expense",
    },
    {
      id: 2,
      date: "2026-04-02",
      amount: 20000,
      category: "Salary",
      type: "income",
    },
  ],

  setRole: (role) => set({ role }),

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),

  addTransaction: (txn) =>
    set((state) => ({
      transactions: [...state.transactions, { ...txn, id: Date.now() }],
    })),

  deleteTransaction: (id) =>
    set((state) => ({
      transactions: state.transactions.filter((t) => t.id !== id),
    })),
}));
