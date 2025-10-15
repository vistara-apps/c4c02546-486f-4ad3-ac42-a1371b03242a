'use client';

import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name, Identity } from '@coinbase/onchainkit/identity';
import { Briefcase } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 glass-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-fg">Career Catalyst</h1>
              <p className="text-xs text-fg/60">AI Resume Optimization</p>
            </div>
          </div>

          <Wallet>
            <ConnectWallet>
              <Identity>
                <Avatar className="w-8 h-8" />
                <Name className="text-sm font-medium" />
              </Identity>
            </ConnectWallet>
          </Wallet>
        </div>
      </div>
    </header>
  );
}
