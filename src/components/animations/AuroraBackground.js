'use client';

import { useRef, useEffect } from 'react';

export default function AuroraBackground({ 
  className = '',
  intensity = 30,
  speed = 0.2,
  colors = ['#0ea5e9', '#8b5cf6', '#10b981'],
  ...props 
}) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 30, 0.5)');
      gradient.addColorStop(1, 'rgba(10, 10, 30, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw aurora waves
      for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        const waveHeight = canvas.height / 2;
        const waveWidth = canvas.width;
        const frequency = 0.001 + (i * 0.0005);
        const amplitude = intensity + (i * 5);
        const yOffset = canvas.height * 0.3 + (i * 50);
        
        ctx.beginPath();
        ctx.moveTo(0, yOffset);
        
        for (let x = 0; x < waveWidth; x += 5) {
          const y = Math.sin(x * frequency + time) * amplitude + yOffset;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(waveWidth, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        
        const auroraGradient = ctx.createLinearGradient(0, yOffset - amplitude, 0, yOffset + waveHeight);
        auroraGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        auroraGradient.addColorStop(0.5, `${color}33`); // 20% opacity
        auroraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = auroraGradient;
        ctx.fill();
      }
      
      time += speed;
      animationFrameId = requestAnimationFrame(drawAurora);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    drawAurora();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity, speed, colors]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 -z-10 ${className}`}
      {...props}
    />
  );
}
