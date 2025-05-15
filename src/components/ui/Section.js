'use client';

import { motion } from 'framer-motion';

export default function Section({ 
  children, 
  className = '', 
  id,
  fullHeight = false,
  ...props 
}) {
  const heightClass = fullHeight ? 'min-h-screen' : 'py-16 md:py-24';
  const classes = `relative ${heightClass} ${className}`;
  
  return (
    <section id={id} className={classes} {...props}>
      {children}
    </section>
  );
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = false,
  className = '',
  ...props 
}) {
  const alignment = centered ? 'text-center mx-auto' : '';
  const classes = `max-w-3xl mb-12 ${alignment} ${className}`;
  
  return (
    <motion.div 
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-white/70">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
