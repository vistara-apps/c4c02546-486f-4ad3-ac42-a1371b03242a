'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Users, Share2, ThumbsUp, MessageSquare, TrendingUp } from 'lucide-react';

interface FeedbackItem {
  id: string;
  type: string;
  count: number;
  percentage: number;
}

export default function FeedbackPage() {
  const [feedbackData] = useState<FeedbackItem[]>([
    { id: '1', type: 'Strong Intro', count: 24, percentage: 45 },
    { id: '2', type: 'Needs Keywords', count: 18, percentage: 34 },
    { id: '3', type: 'Good Flow', count: 32, percentage: 60 },
    { id: '4', type: 'Overall Improvement', count: 15, percentage: 28 },
  ]);

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Peer Feedback</h1>
          <p className="text-lg text-fg/70">
            Get constructive feedback from your professional network
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">127</div>
                <div className="text-sm text-fg/60">Total Reviewers</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">89</div>
                <div className="text-sm text-fg/60">Positive Feedback</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm text-fg/60">Approval Rate</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Request Feedback Section */}
          <div className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Share2 className="w-6 h-6 text-accent" />
              Request Feedback
            </h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Resume Section</label>
                <textarea
                  placeholder="Paste the section you want feedback on..."
                  className="input-field min-h-[150px] resize-none"
                />
              </div>

              <div className="bg-surface/50 rounded-lg p-4">
                <h3 className="font-medium mb-3">Feedback Options</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm">Strong Intro</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm">Needs Keywords</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm">Good Flow</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" defaultChecked />
                    <span className="text-sm">Overall Improvement</span>
                  </label>
                </div>
              </div>
            </div>

            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <Share2 className="w-5 h-5" />
              Share for Feedback
            </button>
          </div>

          {/* Feedback Results Section */}
          <div className="glass-card p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-accent" />
              Feedback Summary
            </h2>

            <div className="space-y-4">
              {feedbackData.map((item) => (
                <div key={item.id} className="bg-surface/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.type}</span>
                    <span className="text-sm text-fg/60">{item.count} responses</span>
                  </div>
                  <div className="w-full bg-surface rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <div className="text-right text-sm text-fg/60 mt-1">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                Top Suggestion
              </h3>
              <p className="text-sm text-fg/70">
                Most reviewers suggest improving keyword density in your professional summary. 
                Consider adding more industry-specific terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
