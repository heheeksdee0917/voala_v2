import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StandardButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  showArrow?: boolean;
}

const StandardButton: React.FC<StandardButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  showArrow = false,
}) => {
  const baseClasses = 'inline-flex items-center gap-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg font-linik rounded-lg';
  
  const variantClasses = {
    primary: 'bg-voala-secondary text-voala-off-white hover:bg-voala-accent hover:text-voala-secondary',
    secondary: 'bg-white text-voala-secondary border border-gray-300 hover:bg-gray-50',
    outline: 'bg-transparent text-voala-secondary border-2 border-voala-secondary hover:bg-voala-secondary hover:text-voala-off-white',
  };
  
  const sizeClasses = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
      {showArrow && <ArrowRight size={20} />}
    </button>
  );
};

export default StandardButton;