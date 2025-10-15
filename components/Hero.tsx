'use client';

import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI-Powered Career Tools</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Optimize Your Resume with{' '}
            <span className="text-accent">AI Intelligence</span>
          </h1>

          <p className="text-xl text-fg/70 mb-8 leading-relaxed">
            Transform your career materials with AI-powered optimization, build verifiable 
            on-chain credentials, and get instant feedback from your professional network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/optimize">
              <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
                Start Optimizing
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/badges">
              <button className="btn-secondary w-full sm:w-auto">
                View Badges
              </button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm text-fg/60">ATS Pass Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">10k+</div>
              <div className="text-sm text-fg/60">Resumes Optimized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">5k+</div>
              <div className="text-sm text-fg/60">Badges Minted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
