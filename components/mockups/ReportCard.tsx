export default function ReportCard() {
  return (
    <div className="bg-white rounded-2xl p-5 w-72 shadow-mockup">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green" aria-hidden="true" />
        <span className="text-[13px] font-bold text-ink">Payxara</span>
      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="text-[15px] font-semibold text-ink">Q3 Wealth Summary</p>
        <span className="bg-green text-ink text-[11px] font-bold rounded-full px-3 py-1">
          Ready
        </span>
      </div>

      <div className="border-t border-line my-3" />

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-canvas-2 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-medium text-ink truncate">Harrington Family Office</p>
          <p className="text-[12px] text-ink-faint">£8.4M</p>
        </div>
      </div>

      <button className="w-full text-center border border-line rounded-lg px-4 py-2 text-[12px] font-semibold text-ink mt-3 hover:bg-canvas transition-colors">
        View Report →
      </button>
    </div>
  );
}
