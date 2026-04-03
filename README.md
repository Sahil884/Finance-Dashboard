# 💸 Finance Dashboard UI

A modern, responsive finance dashboard built to visualize and manage financial data with an intuitive user experience. This project demonstrates frontend architecture, state management, UI design, and interactive data handling.

---

## 🚀 Live Demo

👉 _Add your deployed link here_
👉 _Add GitHub repository link here_

---

## 📌 Overview

This project simulates a personal finance dashboard where users can:

- Track income and expenses
- View financial summaries
- Analyze spending patterns
- Interact with transactions
- Experience role-based UI behavior

The focus is on **clean UI, consistent data handling, and thoughtful UX design**, rather than backend complexity.

---

## ✨ Features

### 📊 Dashboard Overview

- Summary cards for:
  - Total Balance
  - Income
  - Expenses

- Dynamic calculations based on transactions
- Time-based visualization (Balance Trend)
- Category-based visualization (Spending Breakdown)

---

### 💳 Transactions Management

- View all transactions with:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)

- Features:
  - 🔍 Search
  - 🎯 Filtering
  - ➕ Add transaction (Admin only)
  - ❌ Delete transaction (Admin only)

- Graceful empty state handling

---

### 🔐 Role-Based UI (Simulated)

- **Viewer**
  - Can only view data

- **Admin**
  - Can add and delete transactions

👉 Role switching via dropdown for demonstration

---

### 📈 Insights Section

- Highest spending category
- Income vs Expense comparison
- Smart observations derived from data

---

### 🌙 Dark Mode

- Toggle between Light and Dark themes
- Fully responsive UI in both modes
- Custom color palette for better visual hierarchy

---

### 🧠 State Management

- Built using **Zustand**
- Centralized store for:
  - Transactions
  - Role
  - Theme

- Ensures single source of truth across components

---

### 📱 Responsive Design

- Works across:
  - Desktop
  - Tablet
  - Mobile

- Adaptive layouts and scroll handling

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **State Management:** Zustand
- **Language:** JavaScript (ES6+)

---

## 🧩 Project Structure

```
src/
 ├── app/
 │   ├── page.js
 │   ├── layout.js
 │
 ├── components/
 │   ├── Header.jsx
 │   ├── SummaryCard.jsx
 │   ├── TransactionTable.jsx
 │   ├── LineChartComponent.jsx
 │   ├── PieChartComponent.jsx
 │   ├── Insights.jsx
 │
 ├── store/
 │   ├── useFinanceStore.js
```

---

## ⚙️ Setup Instructions

```bash
# Clone repository
git clone <your-repo-link>

# Navigate into project
cd finance-dashboard

# Install dependencies
npm install

# Run development server
npm run dev
```

👉 Open: `http://localhost:3000`

---

## 🧠 Key Implementation Decisions

### 1. Single Source of Truth

All financial data is managed through a centralized Zustand store, ensuring:

- Consistency across UI
- No data mismatch between components

---

### 2. Dynamic Data Rendering

- Summary cards, charts, and insights all derive from transactions
- Avoided hardcoded values

---

### 3. Role Simulation

- Implemented frontend-only RBAC for demonstration
- Clean separation of permissions

---

### 4. Dark Mode Architecture

- Implemented using CSS variables + Tailwind
- Ensures scalable theming without conflicts

---

### 5. Component-Based Design

- Reusable and modular components
- Clean separation of concerns

---

## 🎯 Future Improvements

- Edit transactions
- Persistent storage (localStorage / backend)
- Advanced filtering (date range, category)
- Export data (CSV/JSON)
- Authentication system

---

## 📸 Screenshots

👉 _Add screenshots here (light + dark mode recommended)_

---

## 🙌 Conclusion

This project reflects my approach to:

- Building scalable frontend systems
- Designing clean and intuitive UIs
- Managing application state effectively
- Paying attention to detail and UX polish

---

## 📬 Contact

Feel free to reach out:

- LinkedIn: _Add your link_
- Email: _Add your email_

---

⭐ If you found this project interesting, feel free to star the repository!
