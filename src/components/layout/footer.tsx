import Link from 'next/link';
import { AuroraLogo } from '@/components/ui/aurora-logo';
import { navLinks } from '@/lib/data';
import { Globe } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'Website', href: 'https://www.auroraint.org', icon: Globe },
  ];
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col space-y-4">
            <AuroraLogo className="h-8 w-auto" />
            <p className="text-muted-foreground text-sm max-w-xs">
              Empowering tomorrow’s leaders to solve today’s challenges.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="mailto:contact@auroraint.org" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@auroraint.org
                </a>
              </li>
              <li className="text-muted-foreground">Global Student Network, Remote-first</li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold tracking-wider text-foreground">Connect</h3>
            <div className="flex mt-4 space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Aurora International. All rights reserved.</p>
          <p className="mt-2">
            website by{' '}
            <a 
              href="https://www.linkedin.com/in/vinamra-hetawal-0573521b7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline font-medium"
            >
              Vinamra Hetawal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
