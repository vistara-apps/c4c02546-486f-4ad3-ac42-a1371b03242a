import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Career Catalyst - AI Resume Optimization',
  description: 'AI-powered resume optimization and professional networking for Farcaster',
  openGraph: {
    title: 'Career Catalyst',
    description: 'AI-powered resume optimization and professional networking',
    images: ['/icon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
