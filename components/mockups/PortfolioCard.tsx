const bars = [40, 60, 45, 80, 55, 70, 100];

export default function PortfolioCard() {
  return (
    <div className="bg-white rounded-2xl p-5 w-64 shadow-mockup">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-ink">Portfolio Overview</span>
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-green"
            aria-hidden="true"
          />
          <span className="text-[11px] font-medium text-green">Live</span>
        </div>
      </div>

      <p className="text-[26px] font-extrabold text-ink mt-3 leading-none tracking-tight">
        £2,847,320
      </p>
      <p className="text-[13px] font-semibold text-green mt-1">+4.2% this month</p>

      <div className="flex items-end gap-1 h-10 mt-4">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-green" : "bg-canvas-2"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="flex gap-2 mt-3">
        <span className="bg-canvas rounded-full px-2 py-1 text-[11px] font-medium text-ink-muted">
          Equities 64%
        </span>
        <span className="bg-canvas rounded-full px-2 py-1 text-[11px] font-medium text-ink-muted">
          Bonds 28%
        </span>
      </div>
    </div>
  );
}
