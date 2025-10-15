'use client';

import { Upload, Sparkles, Download, Share2 } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Resume',
    description: 'Upload your current resume and paste the job description you\'re targeting.',
  },
  {
    icon: Sparkles,
    title: 'AI Optimization',
    description: 'Our AI analyzes both documents and optimizes your resume for maximum impact.',
  },
  {
    icon: Download,
    title: 'Download & Apply',
    description: 'Get your optimized resume with keyword analysis and ATS compatibility score.',
  },
  {
    icon: Share2,
    title: 'Get Feedback',
    description: 'Share with your network for peer review and mint achievement badges.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-fg/70 max-w-2xl mx-auto">
            Four simple steps to transform your career materials
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-accent/20 -z-10 hidden md:block" 
                     style={{ display: index === steps.length - 1 ? 'none' : 'block' }} />
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-fg/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
