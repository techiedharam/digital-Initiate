import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'gradient' | 'bordered';
  hover?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
}) => {
  const baseStyles = 'rounded-xl overflow-hidden transition-all duration-300';
  
  const variantStyles = {
    default: 'bg-white shadow-lg',
    gradient: 'bg-gradient-to-br from-[#023153] to-[#011f35] text-white shadow-xl',
    bordered: 'bg-white border-2 border-[#EF5023] shadow-lg',
  };

  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:-translate-y-2 hover:scale-105 cursor-pointer'
    : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`;

  return <div className={combinedClassName}>{children}</div>;
};

export default Card;