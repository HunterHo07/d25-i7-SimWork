'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';
import Section, { SectionTitle } from '@/components/ui/Section';
import Button from '@/components/ui/Button';

const roles = [
  {
    id: 'developer',
    title: 'Developer',
    description: 'Take on coding challenges, debug issues, and build features in a simulated development environment.',
    image: '/images/developer-station.jpg',
    skills: ['JavaScript', 'React', 'API Integration', 'Debugging', 'Performance Optimization'],
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'designer',
    title: 'Designer',
    description: 'Create UI designs, improve user experiences, and develop visual assets for various projects.',
    image: '/images/design-station.jpg',
    skills: ['UI/UX Design', 'Visual Design', 'Accessibility', 'Design Systems', 'Prototyping'],
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'data-entry',
    title: 'Data Entry',
    description: 'Process information, validate data, and maintain records with accuracy and attention to detail.',
    image: '/images/data-entry.jpg',
    skills: ['Data Processing', 'Attention to Detail', 'Form Handling', 'Data Verification', 'Record Management'],
    color: 'from-green-500 to-green-700',
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    description: 'Design prompts, create AI systems, and develop solutions using artificial intelligence.',
    image: '/images/ai-engineer.jpg',
    skills: ['Prompt Engineering', 'NLP', 'Sentiment Analysis', 'Recommendation Systems', 'AI Strategy'],
    color: 'from-red-500 to-red-700',
  },
];

export default function RolesSection() {
  const [activeRole, setActiveRole] = useState(roles[0]);

  return (
    <Section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Multiple Roles, One Platform"
          subtitle="SimWork offers training simulations for various roles and departments, all in one immersive environment."
          centered
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 p-6">
              <h3 className="text-xl font-semibold mb-6">Available Roles</h3>
              <div className="space-y-3">
                {roles.map((role) => (
                  <RoleButton
                    key={role.id}
                    role={role}
                    isActive={activeRole.id === role.id}
                    onClick={() => setActiveRole(role)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden h-full"
              >
                <div className="relative h-64">
                  <AppImage
                    src={activeRole.image}
                    alt={activeRole.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${activeRole.color} opacity-40`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold">{activeRole.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-white/80 mb-6">{activeRole.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeRole.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button href="/demo" variant="primary">
                    Try {activeRole.title} Simulation
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}

function RoleButton({ role, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
        isActive
          ? `bg-gradient-to-r ${role.color} text-white`
          : 'bg-white/5 hover:bg-white/10 text-white/80'
      }`}
    >
      <div className="font-medium">{role.title}</div>
    </button>
  );
}
