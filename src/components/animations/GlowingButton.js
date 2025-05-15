'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function GlowingButton({ 
  children, 
  href, 
  className = '',
  glowColor = 'rgba(56, 189, 248, 0.6)',
  ...props 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [buttonRef, setButtonRef] = useState(null);
  
  useEffect(() => {
    if (buttonRef) {
      const rect = buttonRef.getBoundingClientRect();
      setButtonPosition({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      });
    }
  }, [buttonRef]);
  
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  // Calculate glow position relative to button
  const glowX = mousePosition.x - buttonPosition.x;
  const glowY = mousePosition.y - buttonPosition.y;
  
  return (
    <div 
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={setButtonRef}
    >
      {isHovered && (
        <motion.div
          className="absolute rounded-full blur-xl pointer-events-none"
          style={{
            background: glowColor,
            width: 100,
            height: 100,
            x: glowX - 50,
            y: glowY - 50,
            opacity: 0.7,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
      <Button 
        href={href} 
        className={`relative z-10 ${className}`}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
}
