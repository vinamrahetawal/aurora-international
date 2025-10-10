'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function InteractiveHero() {
  return (
    <section
      className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4 pt-0">
        <div className="text-center mb-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary text-base px-4 py-2 transition-all duration-300 hover:shadow-md hover:shadow-primary/40 cursor-pointer">
                student-led global organization
            </Badge>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-lg text-foreground">
          Aurora International
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl font-light text-muted-foreground">
          Aurora International is a student-led global organization bringing together ambitious minds from leading universities across the world. We are a multidisciplinary hub offering solutions in consulting, marketing, finance, technology, policy, design, and more powered entirely by students with a passion for impact.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group font-bold text-lg px-8 py-7 transition-all duration-300 rounded-md bg-secondary text-primary border-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link href="/contact">
              Get In Touch
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group font-bold text-lg px-8 py-7 transition-all duration-300 rounded-md hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <Link href="/about">
              Know More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
