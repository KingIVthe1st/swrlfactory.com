interface EyebrowLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

export default function EyebrowLabel({
  children,
  className = "",
  as: Tag = "p",
}: EyebrowLabelProps) {
  return (
    <Tag
      className={`text-xs uppercase tracking-[0.2em] text-swrl-pink font-body ${className}`}
    >
      {children}
    </Tag>
  );
}
