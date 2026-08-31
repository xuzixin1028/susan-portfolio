import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DAWN — Visual Design Portfolio',
  description: '品牌、包装、海报与 AI 视觉设计作品集。',
  openGraph: {
    title: 'DAWN PORTFOLIO',
    description: 'BRANDS · OBJECTS · IMAGE SYSTEMS',
    images: [{ url: '/og.png', width: 1680, height: 945, alt: 'DAWN Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAWN PORTFOLIO',
    description: 'BRANDS · OBJECTS · IMAGE SYSTEMS',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
