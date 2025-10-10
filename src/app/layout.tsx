import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { AuroraBackground } from '@/components/aurora-background';
import { CursorGlow } from '@/components/cursor-glow';

const lexend = Lexend({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Aurora International | Global Student Consulting & Innovation',
  description:
    'Aurora International is a student-led global hub uniting ambitious students from leading universities to deliver consulting, marketing, finance, tech and design solutions for startups and businesses.',
  keywords: ['student consulting', 'Aurora International', 'global student network', 'startup strategy', 'student-led innovation'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", lexend.variable)} style={{colorScheme: 'dark'}} suppressHydrationWarning>
      <body className={cn('font-body antialiased', 'bg-background')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <CursorGlow />
          <AuroraBackground />
          <Header />
          <main className="min-h-screen relative z-10">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
