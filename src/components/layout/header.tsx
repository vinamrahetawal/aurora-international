
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AuroraLogo } from '@/components/ui/aurora-logo';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

function HeaderMenu() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {navLinks.map((link) => (
          <div key={link.name} className="h-6 w-20 rounded-md bg-muted/50 animate-pulse" />
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            'transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary' : 'text-foreground/80'
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 mr-auto">
          <AuroraLogo className="h-8 w-auto" />
        </Link>
        
        <div className="hidden md:flex md:mx-auto">
          <HeaderMenu />
        </div>
        
        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">
            <Link href="/contact">Contact Us</Link>
          </Button>
            {mounted && (
              <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0 bg-background w-[280px]">
                  <SheetHeader className="pl-6 pt-6">
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <Link href="/" className="flex items-center mb-8" onClick={() => setMenuOpen(false)}>
                      <AuroraLogo className="h-7 w-auto text-xl" />
                    </Link>
                  </SheetHeader>
                  <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-6">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            'text-xl font-semibold transition-colors hover:text-primary',
                            pathname === link.href ? 'text-primary' : 'text-foreground'
                          )}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    <Button asChild size="sm" className="mt-10 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 px-6 py-2">
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            )}
            {!mounted && (
              <div className="md:hidden">
                <Button variant="ghost" size="icon" disabled>
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            )}
        </div>
      </div>
    </header>
  );
}
