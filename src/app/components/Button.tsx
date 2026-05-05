import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({ children, variant = 'primary', to, onClick, className = '', type = 'button' }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full transition-all duration-300';
  const variantStyles = {
    primary: 'bg-[#B85C38] text-[#F5ECD7] hover:bg-[#a04d2f] hover:shadow-[0_4px_20px_rgba(184,92,56,0.4)]',
    ghost: 'border-2 border-[rgba(255,255,255,0.25)] text-[#F5ECD7] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.4)]',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
