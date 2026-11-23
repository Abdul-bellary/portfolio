import type { Metadata } from 'next';
import { clashDisplay } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} h-full bg-black`}>
      <body className="font-clash flex min-h-full flex-col bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
