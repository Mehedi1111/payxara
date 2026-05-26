interface LimeAccentProps {
  width?: number;
}

export default function LimeAccent({ width = 48 }: LimeAccentProps) {
  return (
    <div
      className="bg-lime"
      style={{ width, height: 2, display: "block" }}
      aria-hidden
    />
  );
}
