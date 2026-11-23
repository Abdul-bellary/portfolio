import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="flex min-h-full flex-col bg-black text-white">{children}</body>
    </html>
  );
}
