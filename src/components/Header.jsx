"use client";

import { useFinanceStore } from "@/store/useFinanceStore";

export default function Header() {
  const { role, setRole, theme, toggleTheme } = useFinanceStore();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold dark:text-white">Finance Dashboard</h1>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-1 border rounded dark:text-white"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Role Badge */}
        <span className=" border rounded text-xs  dark:bg-gray-800 dark:text-white px-2 py-1 rounded capitalize ">
          {role}
        </span>

        {/* Role Switch */}
        <select
          className="border rounded px-2 py-1 dark:bg-gray-800 dark:text-white"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
}
