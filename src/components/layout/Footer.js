'use client';

import GithubPagesLink from '@/components/ui/GithubPagesLink';
import GithubPagesImage from '@/components/ui/GithubPagesImage';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Get the base path based on environment
  const basePath = process.env.NODE_ENV === 'production' ? '/d25-i7-SimWork' : '';

  return (
    <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <GithubPagesLink href="/" className="flex items-center space-x-2 mb-4">
              <GithubPagesImage src="/images/logo-icon.svg" alt="" width={32} height={32} className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                SimWork
              </span>
            </GithubPagesLink>
            <p className="text-white/60 mb-4">
              Revolutionizing skill development through immersive simulation.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://twitter.com/SimWorkAI">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/company/simwork">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:info@simwork.ai">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <FooterLink href="/demo">Demo</FooterLink>
              <FooterLink href="/showcase">Showcase</FooterLink>
              <FooterLink href="/roadmap">Roadmap</FooterLink>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="/why-us">Why Us</FooterLink>
              <FooterLink href="/pitch-deck">Pitch Deck</FooterLink>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/60">info@simwork.ai</li>
            </ul>
          </div>
        </div>

        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <div className="text-center text-white/40 text-sm">
          <p>&copy; {currentYear} SimWork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/60 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <GithubPagesLink
        href={href}
        className="text-white/60 hover:text-white transition-colors duration-300"
      >
        {children}
      </GithubPagesLink>
    </li>
  );
}
