'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import GlowingButton from '@/components/animations/GlowingButton';
import AuroraBackground from '@/components/animations/AuroraBackground';

export default function CtaSection() {
  return (
    <Section className="py-20 md:py-32 relative overflow-hidden">
      <AuroraBackground 
        intensity={50}
        speed={0.1}
        colors={['#3b82f6', '#8b5cf6', '#06b6d4']}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Training?
            </h2>
            <p className="text-xl text-white/80">
              Experience the future of skill development with SimWork's immersive simulations.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <GlowingButton href="/demo" size="lg">
              Try Demo
            </GlowingButton>
            <GlowingButton href="/pitch-deck" variant="secondary" size="lg">
              View Pitch Deck
            </GlowingButton>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <StatCard 
            value="85%" 
            label="Higher Engagement" 
            description="Compared to traditional training methods"
          />
          <StatCard 
            value="3x" 
            label="Better Retention" 
            description="Skills learned through simulation are retained longer"
          />
          <StatCard 
            value="40%" 
            label="Faster Onboarding" 
            description="New hires become productive more quickly"
          />
        </motion.div>
      </div>
    </Section>
  );
}

function StatCard({ value, label, description }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{value}</div>
      <div className="text-xl font-semibold mb-2">{label}</div>
      <p className="text-white/70">{description}</p>
    </div>
  );
}
