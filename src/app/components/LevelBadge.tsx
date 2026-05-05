interface LevelBadgeProps {
  level: 'Basics' | 'Intermediate' | 'Advanced';
  className?: string;
}

export function LevelBadge({ level, className = '' }: LevelBadgeProps) {
  const colors = {
    Basics: 'bg-[#4CAF50] text-[#0f1f14]',
    Intermediate: 'bg-[#FFC107] text-[#0f1f14]',
    Advanced: 'bg-[#B85C38] text-[#F5ECD7]',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-wide ${colors[level]} ${className}`}>
      {level}
    </span>
  );
}
