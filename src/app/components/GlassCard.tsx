import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  return (
    <div
      className={`bg-[rgba(255,255,255,0.06)] backdrop-blur-lg border border-[rgba(255,255,255,0.15)] rounded-[20px] transition-all duration-300 ${
        hover ? 'hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(184,92,56,0.15)]' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
