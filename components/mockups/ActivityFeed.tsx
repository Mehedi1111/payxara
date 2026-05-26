const rows = [
  {
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    desc: "Dividend received",
    cat: "Equities",
    amount: "+£3,240",
    positive: true,
  },
  {
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5A5A5A" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    desc: "Portfolio rebalance",
    cat: "Auto",
    amount: "—",
    positive: null,
  },
  {
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#5A5A5A" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    desc: "Advisory fee",
    cat: "Monthly",
    amount: "–£850",
    positive: false,
  },
  {
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    desc: "New deposit",
    cat: "Transfer",
    amount: "+£50,000",
    positive: true,
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl p-5 w-72 shadow-mockup">
      <p className="text-[13px] font-semibold text-ink mb-1">Recent Activity</p>
      <div>
        {rows.map((r, i) => (
          <div key={i} className={`flex items-center gap-3 py-3 ${i < rows.length - 1 ? "border-b border-line" : ""}`}>
            <div className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center flex-shrink-0">
              {r.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-medium text-ink leading-tight">{r.desc}</p>
              <p className="text-[11px] text-ink-faint">{r.cat}</p>
            </div>
            <span
              className={`text-[13px] font-semibold flex-shrink-0 ${
                r.positive === true ? "text-green" : r.positive === false ? "text-ink-muted" : "text-ink-faint"
              }`}
            >
              {r.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
