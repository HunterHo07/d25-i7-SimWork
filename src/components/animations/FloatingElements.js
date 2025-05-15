'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingElements({ 
  count = 10, 
  minSize = 10, 
  maxSize = 50,
  minDuration = 15,
  maxDuration = 30,
  className = '',
  shapes = ['circle', 'square', 'triangle'],
  colors = ['#0ea5e9', '#8b5cf6', '#10b981', '#3b82f6'],
  ...props 
}) {
  const containerRef = useRef(null);
  
  const generateElements = () => {
    const elements = [];
    
    for (let i = 0; i < count; i++) {
      const size = Math.floor(Math.random() * (maxSize - minSize) + minSize);
      const duration = Math.floor(Math.random() * (maxDuration - minDuration) + minDuration);
      const delay = Math.random() * 10;
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const xStart = Math.random() * 100;
      const yStart = Math.random() * 100;
      const xEnd = Math.random() * 100;
      const yEnd = Math.random() * 100;
      const rotation = Math.random() * 360;
      const rotationEnd = rotation + (Math.random() * 360 - 180);
      
      elements.push(
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: `${xStart}%`, 
            y: `${yStart}%`,
            rotate: rotation,
            opacity: 0.1 + Math.random() * 0.3
          }}
          animate={{ 
            x: `${xEnd}%`, 
            y: `${yEnd}%`,
            rotate: rotationEnd,
          }}
          transition={{ 
            duration, 
            repeat: Infinity, 
            repeatType: 'reverse',
            delay,
            ease: 'easeInOut'
          }}
        >
          {shape === 'circle' && (
            <div 
              className="rounded-full" 
              style={{ 
                width: size, 
                height: size, 
                backgroundColor: `${color}33` // 20% opacity
              }}
            />
          )}
          {shape === 'square' && (
            <div 
              className="rounded-md" 
              style={{ 
                width: size, 
                height: size, 
                backgroundColor: `${color}33` // 20% opacity
              }}
            />
          )}
          {shape === 'triangle' && (
            <div 
              style={{ 
                width: 0,
                height: 0,
                borderLeft: `${size / 2}px solid transparent`,
                borderRight: `${size / 2}px solid transparent`,
                borderBottom: `${size}px solid ${color}33` // 20% opacity
              }}
            />
          )}
        </motion.div>
      );
    }
    
    return elements;
  };
  
  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      {...props}
    >
      {generateElements()}
    </div>
  );
}
