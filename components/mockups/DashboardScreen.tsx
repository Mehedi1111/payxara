const stats = [
  { label: "Total AUM", value: "£4.2M", change: "+8.4%" },
  { label: "YTD Return", value: "+12.3%", change: "↑" },
  { label: "Active Clients", value: "24", change: "+3" },
];

const transactions = [
  { name: "Hartley Family Office", amount: "+£120,000", date: "Nov 12" },
  { name: "Peterson Capital", amount: "–£8,400", date: "Nov 11" },
];

export default function DashboardScreen() {
  return (
    <div className="bg-white rounded-2xl shadow-mockup w-full max-w-xl overflow-hidden">
      {/* Top bar */}
      <div className="bg-ink px-5 py-3 flex items-center justify-between">
        <span className="text-[14px] font-bold text-white">Payxara</span>
        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-[11px] font-bold text-white">JH</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-5">
        <p className="text-[20px] font-extrabold text-ink leading-tight">Good morning, James.</p>
        <p className="text-[13px] text-ink-muted mt-1">Your wealth summary — November 2025</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-canvas rounded-xl p-4">
              <p className="text-[11px] font-medium text-ink-faint uppercase tracking-wide leading-tight">
                {s.label}
              </p>
              <p className="text-[20px] font-extrabold text-ink mt-1 leading-tight">{s.value}</p>
              <p className="text-[12px] font-semibold text-green mt-0.5">{s.change}</p>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div className="mt-5">
          <svg width="100%" height="80" viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#33E529" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#33E529" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 62 C16 58 30 50 50 44 C70 38 82 52 100 40 C118 28 132 36 150 24 C168 12 188 28 210 18 C232 8 260 14 280 10 L280 80 L0 80 Z"
              fill="url(#greenFill)"
            />
            <path
              d="M0 62 C16 58 30 50 50 44 C70 38 82 52 100 40 C118 28 132 36 150 24 C168 12 188 28 210 18 C232 8 260 14 280 10"
              stroke="#33E529"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0 66 C16 64 30 62 50 58 C70 54 82 60 100 56 C118 52 132 54 150 50 C168 46 188 52 210 48 C232 44 260 46 280 44"
              stroke="#E2E2DD"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Transactions */}
        <p className="text-[13px] font-semibold text-ink mt-4 mb-2">Recent transactions</p>
        {transactions.map((t, i) => (
          <div key={i} className={`flex items-center justify-between py-2 ${i < transactions.length - 1 ? "border-b border-line" : ""}`}>
            <span className="text-[12px] text-ink-muted">{t.name}</span>
            <div className="flex items-center gap-3">
              <span className={`text-[12px] font-semibold ${t.amount.startsWith("+") ? "text-green" : "text-ink"}`}>
                {t.amount}
              </span>
              <span className="text-[11px] text-ink-faint">{t.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
