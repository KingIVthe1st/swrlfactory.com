interface BenefitTileProps {
  number?: string;
  icon?: string;
  title: string;
  body: string;
}

export default function BenefitTile({
  number,
  icon,
  title,
  body,
}: BenefitTileProps) {
  return (
    <div className="relative rounded-2xl border border-swrl-pink/20 bg-swrl-white/[0.02] p-8 hover:border-swrl-pink/40 transition-colors duration-300 h-full">
      {number && (
        <span className="absolute top-6 right-6 text-xs font-body text-swrl-pink/60 tracking-widest">
          {number}
        </span>
      )}
      {icon && <div className="text-3xl mb-4">{icon}</div>}
      <h3 className="font-display text-2xl text-swrl-white mb-3 leading-tight">
        {title}
      </h3>
      <p className="font-body text-swrl-white/60 text-sm leading-relaxed">
        {body}
      </p>
    </div>
  );
}
