'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionTitle } from '@/components/ui/Section';

export default function ComparisonSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };
  
  return (
    <Section className="py-20 md:py-32 bg-gradient-to-b from-black/50 to-blue-950/30">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="See the Difference" 
          subtitle="Compare traditional training methods with SimWork's immersive approach."
          centered
        />
        
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
            {/* Traditional side */}
            <div 
              className="absolute inset-0 bg-gray-900 flex flex-col items-center justify-center p-8 text-center"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-red-400">Traditional Training</h3>
              <ul className="space-y-3 text-left max-w-md">
                <ComparisonItem negative>Passive learning through lectures and reading</ComparisonItem>
                <ComparisonItem negative>Generic content not tailored to individual needs</ComparisonItem>
                <ComparisonItem negative>Low engagement and high dropout rates</ComparisonItem>
                <ComparisonItem negative>Theoretical knowledge without practical application</ComparisonItem>
                <ComparisonItem negative>Limited feedback on performance</ComparisonItem>
              </ul>
            </div>
            
            {/* SimWork side */}
            <div 
              className="absolute inset-0 bg-blue-950 flex flex-col items-center justify-center p-8 text-center"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">SimWork Training</h3>
              <ul className="space-y-3 text-left max-w-md">
                <ComparisonItem>Active learning through hands-on challenges</ComparisonItem>
                <ComparisonItem>Personalized content adapted to your skill level</ComparisonItem>
                <ComparisonItem>High engagement through gamification</ComparisonItem>
                <ComparisonItem>Real-world tasks that build practical skills</ComparisonItem>
                <ComparisonItem>Detailed analytics and personalized feedback</ComparisonItem>
              </ul>
            </div>
            
            {/* Slider control */}
            <div className="absolute inset-0 pointer-events-none">
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white"
                style={{ left: `${sliderPosition}%` }}
              ></div>
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer pointer-events-auto"
                style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <input 
              type="range" 
              min="10" 
              max="90" 
              value={sliderPosition} 
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
          </div>
          
          <div className="mt-8 text-center text-white/70">
            <p>Drag the slider to compare traditional training with SimWork's approach</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ComparisonItem({ children, negative = false }) {
  return (
    <motion.li 
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: negative ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className={`mt-1 ${negative ? 'text-red-400' : 'text-green-400'}`}>
        {negative ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )}
      </span>
      <span className={negative ? 'text-white/60' : 'text-white'}>{children}</span>
    </motion.li>
  );
}
