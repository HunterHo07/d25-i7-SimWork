'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GlowingButton from '@/components/animations/GlowingButton';
import ParticleField from '@/components/animations/ParticleField';
import AuroraBackground from '@/components/animations/AuroraBackground';
import FloatingElements from '@/components/animations/FloatingElements';

export default function HeroSection() {
  const [idea, setIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const inputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (idea.trim() === '') return;
    
    setIsGenerating(true);
    setGenerationStep(0);
    
    // Simulate AI generation steps
    const timer1 = setTimeout(() => setGenerationStep(1), 1500);
    const timer2 = setTimeout(() => setGenerationStep(2), 3000);
    const timer3 = setTimeout(() => {
      setGenerationStep(3);
      setShowPreview(true);
    }, 4500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };
  
  const resetDemo = () => {
    setIdea('');
    setIsGenerating(false);
    setGenerationStep(0);
    setShowPreview(false);
    inputRef.current?.focus();
  };
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="" 
          fill 
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-950/50 to-black/80"></div>
      </div>
      <ParticleField count={100} color="#4f46e5" className="z-0" />
      <AuroraBackground className="z-0" />
      <FloatingElements className="z-0" />
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Experience the Future of Work Training
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 mb-8">
            SimWork is an AI-driven immersive simulation that transforms how companies train employees and assess candidates.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-black/30 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-white/10 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Try It Yourself</h2>
            <p className="text-white/70">Enter a job role or skill to generate a personalized training simulation</p>
          </div>
          
          {!showPreview ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                ref={inputRef}
                type="text"
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="e.g., Frontend Developer, UX Designer, Data Analyst..."
                className="flex-grow bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                disabled={isGenerating}
              />
              <GlowingButton
                type="submit"
                disabled={isGenerating || idea.trim() === ''}
                className="whitespace-nowrap"
              >
                {isGenerating ? 'Generating...' : 'Generate Simulation'}
              </GlowingButton>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-green-400 mb-4">Simulation generated successfully!</p>
              <div className="flex justify-center space-x-4">
                <GlowingButton href="/demo" className="whitespace-nowrap">
                  Start Simulation
                </GlowingButton>
                <button
                  onClick={resetDemo}
                  className="px-6 py-3 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  Try Another
                </button>
              </div>
            </div>
          )}
          
          {/* Generation steps */}
          {isGenerating && !showPreview && (
            <div className="mt-6">
              <div className="flex flex-col gap-4">
                <GenerationStep 
                  step={1} 
                  text="Analyzing job requirements and skills..." 
                  active={generationStep >= 0} 
                  completed={generationStep > 0}
                />
                <GenerationStep 
                  step={2} 
                  text="Creating personalized challenges..." 
                  active={generationStep >= 1} 
                  completed={generationStep > 1}
                />
                <GenerationStep 
                  step={3} 
                  text="Building interactive environment..." 
                  active={generationStep >= 2} 
                  completed={generationStep > 2}
                />
              </div>
            </div>
          )}
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <StepCard 
            number="01"
            title="Enter Your Role"
            description="Specify your job role or the skills you want to develop"
          />
          <StepCard 
            number="02"
            title="AI Builds Simulation"
            description="Our AI creates personalized, realistic work scenarios"
          />
          <StepCard 
            number="03"
            title="Practice & Improve"
            description="Complete challenges and receive feedback to enhance your skills"
          />
        </motion.div>
      </div>
    </section>
  );
}

function GenerationStep({ step, text, active, completed }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
        completed ? 'bg-green-500' : active ? 'bg-blue-500' : 'bg-white/10'
      }`}>
        {completed ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <span className="text-white text-sm">{step}</span>
        )}
      </div>
      <div className="flex-grow">
        <p className={`transition-colors ${
          active ? 'text-white' : 'text-white/50'
        }`}>
          {text}
        </p>
      </div>
      {active && !completed && (
        <div className="w-5 h-5 border-t-2 border-r-2 border-blue-500 rounded-full animate-spin"></div>
      )}
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-xs">
      <div className="text-4xl font-bold text-blue-400 mb-3">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}
