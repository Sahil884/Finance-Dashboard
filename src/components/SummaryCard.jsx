export default function SummaryCard({ title, amount }) {
  return (
    <div
      className="rounded-2xl shadow p-5 hover:shadow-lg transition"
      style={{
        backgroundColor: "var(--card-background)",
        color: "var(--card-foreground)",
        border: "1px solid var(--border-color)",
      }}
    >
      <h2 className="text-sm ">{title}</h2>
      <p className="text-2xl font-semibold mt-2 ">
        ₹ {amount.toLocaleString()}
      </p>
    </div>
  );
}
