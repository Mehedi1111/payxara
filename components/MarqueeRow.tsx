interface MarqueeRowProps {
  items: string[];
}

export default function MarqueeRow({ items }: MarqueeRowProps) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 font-sans text-[13px] tracking-[0.05em] text-ink-faint"
          >
            {item}
            <span className="text-lime text-[8px]">■</span>
          </span>
        ))}
      </div>
    </div>
  );
}
