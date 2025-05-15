'use client';

import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hoverEffect = true,
  ...props 
}) {
  const baseClasses = 'rounded-xl overflow-hidden';
  
  const variantClasses = {
    default: 'bg-white/5 backdrop-blur-md border border-white/10',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
    dark: 'bg-black/40 backdrop-blur-md border border-white/5',
    gradient: 'bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md border border-white/10'
  };
  
  const hoverClasses = hoverEffect ? 'transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;
  
  return (
    <motion.div 
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
