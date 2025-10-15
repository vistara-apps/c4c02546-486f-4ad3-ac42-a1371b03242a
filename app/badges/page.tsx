'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Award, Plus, ExternalLink, CheckCircle2 } from 'lucide-react';

interface Badge {
  id: string;
  title: string;
  description: string;
  date: string;
  txHash: string;
  verified: boolean;
}

export default function BadgesPage() {
  const [badges] = useState<Badge[]>([
    {
      id: '1',
      title: 'Certified React Developer',
      description: 'Completed advanced React certification program',
      date: '2024-01-15',
      txHash: '0x1234...5678',
      verified: true,
    },
    {
      id: '2',
      title: 'AI/ML Specialist',
      description: 'Completed machine learning specialization',
      date: '2024-02-20',
      txHash: '0xabcd...efgh',
      verified: true,
    },
  ]);

  const [showMintModal, setShowMintModal] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-3">Professional Badges</h1>
            <p className="text-lg text-fg/70">
              Verifiable on-chain achievements linked to your professional identity
            </p>
          </div>
          <button
            onClick={() => setShowMintModal(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Mint Badge
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <div key={badge.id} className="glass-card p-6 hover:border-accent transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                {badge.verified && (
                  <div className="flex items-center gap-1 text-green-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{badge.title}</h3>
              <p className="text-fg/70 text-sm mb-4">{badge.description}</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-fg/60">Minted</span>
                  <span className="font-medium">{badge.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-fg/60">Transaction</span>
                  <a
                    href={`https://basescan.org/tx/${badge.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-accent hover:underline"
                  >
                    {badge.txHash}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {badges.length === 0 && (
            <div className="col-span-full glass-card p-12 text-center">
              <Award className="w-16 h-16 text-accent/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Badges Yet</h3>
              <p className="text-fg/70 mb-6">
                Start building your on-chain professional identity by minting your first badge
              </p>
              <button
                onClick={() => setShowMintModal(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Mint Your First Badge
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mint Modal */}
      {showMintModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="glass-card p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Mint Professional Badge</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Badge Title</label>
                <input
                  type="text"
                  placeholder="e.g., Certified React Developer"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  placeholder="Describe your achievement..."
                  className="input-field min-h-[100px] resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Proof URL (Optional)</label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="input-field"
                />
              </div>

              <div className="bg-surface/50 rounded-lg p-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-fg/70">Minting Cost</span>
                  <span className="font-medium">0.002 ETH (~$5.00)</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-fg/70">Gas Fee</span>
                  <span className="font-medium text-green-400">Sponsored</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowMintModal(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
              <button className="btn-primary flex-1">
                Mint Badge
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
