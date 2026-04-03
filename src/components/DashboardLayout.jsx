"use client";

import { useEffect } from "react";
import { useFinanceStore } from "@/store/useFinanceStore";

export default function DashboardLayout({ children }) {
  const { theme } = useFinanceStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <main
      className="min-h-screen p-6 transition-colors duration-300"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      {children}
    </main>
  );
}
