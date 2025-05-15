'use client';

import { motion } from 'framer-motion';
import GithubPagesLink from '@/components/ui/GithubPagesLink';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 relative overflow-hidden';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700',
    secondary: 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/10',
    ghost: 'bg-transparent text-white hover:bg-white/10'
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 0.4 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <GithubPagesLink href={href} className={classes} {...props}>
        {buttonContent}
      </GithubPagesLink>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
}
