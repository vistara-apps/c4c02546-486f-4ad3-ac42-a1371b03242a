'use client';

import { Sparkles, Award, Users, Target } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Sparkles,
    title: 'AI Resume Tailor',
    description: 'Upload your resume and job description to receive AI-optimized content with keyword matching and ATS compatibility.',
    link: '/optimize',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Professional Badges',
    description: 'Mint verifiable on-chain achievements linked to your Basename. Build your professional reputation on Base.',
    link: '/badges',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Peer Feedback',
    description: 'Share your resume with your Farcaster network and receive structured feedback through interactive Frames.',
    link: '/feedback',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Target,
    title: 'Keyword Analyzer',
    description: 'Analyze job postings for key phrases and get a compatibility score with suggested improvements.',
    link: '/analyze',
    color: 'from-orange-500 to-red-500',
  },
];

export function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Career Tools</h2>
          <p className="text-xl text-fg/70 max-w-2xl mx-auto">
            Everything you need to stand out in your job search and build a verifiable professional identity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link}>
              <div className="feature-card group cursor-pointer h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-fg/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
