# Career Catalyst - AI Resume Optimization

AI-powered resume optimization and professional networking for Farcaster on Base.

## Features

- 🤖 **AI Resume Tailor**: Upload resume and job description for AI-powered optimization
- 🏆 **Professional Badges**: Mint verifiable on-chain achievements
- 👥 **Peer Feedback**: Get structured feedback from your network via Frames
- 🎯 **Keyword Analyzer**: Analyze job postings for ATS compatibility

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Frame SDK
- **Styling**: Tailwind CSS with Coinbase theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`: WalletConnect project ID

## Deployment

Deploy to Vercel:

```bash
vercel deploy
```

## License

MIT
