interface Props {
  items: string[];
  speed?: string;
  gap?: string;
}

export default function MarqueeRow({ items }: Props) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-12 text-[15px] font-bold text-ink/30 hover:text-ink/60 transition-colors cursor-default"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-line flex-shrink-0" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
