import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FitForge',
  description: 'Fitness transformation app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen`}>{children}</body>
    </html>
  );
}
