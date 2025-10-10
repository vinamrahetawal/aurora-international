
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CircleCheckBig, Target, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { highlights } from '@/lib/data';
import { InteractiveHero } from '@/components/interactive-hero';
import { Badge } from '@/components/ui/badge';

export default function Home() {

  const servicesOffered = [
    'Market Research & Insights',
    'Strategy & Business Consulting',
    'Sustainability & Social Impact Projects',
    'Data & Digital Solutions',
  ];

  const companies = [
    'ITC', 'Flurno', 'FICCI', 'ICF International', 'EY', 'NITI Aayog', 
    'EaseMyTrip', 'Elegancia Gifts LLP', 'Anand Rathi', 'India Foundation', 
    'BharatPe', 'Airtel Digital', 'Urban Company', 'Invest India', 
    'Honasa Consumer Ltd', 'Dow Jones', 'Kisaan se Kitchen Tak', 'TARC Ltd.', 
    'Orka Advisory, Australia', 'PwC Malaysia', 'WWF Malaysia', 'Lythe, Singapore'
  ];

  return (
    <div className="flex flex-col">
      <InteractiveHero />
      
      <section id="highlights" className="relative z-10 py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {highlights.slice(0, 2).map((highlight) => (
              <Card key={highlight.title} className="text-center bg-card border shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{highlight.desc}</p>
                </CardContent>
              </Card>
            ))}
             <div className="md:col-span-2 flex justify-center">
                <Card className="text-center bg-card border shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">{highlights[2].title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{highlights[2].desc}</p>
                    </CardContent>
                </Card>
             </div>
          </div>
        </div>
      </section>

      <section id="services-preview" className="pt-8 md:pt-12 pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="space-y-16 max-w-4xl mx-auto">
            <Card className="border-primary border-2">
              <CardContent className="p-8 md:p-12 text-center">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold transition-colors hover:text-primary mb-12">What do we do?</h2>
                  <div className="space-y-10 text-left">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-extrabold text-primary/30">01.</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Global Collaboration</h3>
                        <p className="text-muted-foreground">
                          We bring together top students from leading universities across India and abroad to work on live projects in consulting, marketing, finance, technology, design, and more, delivering real-world solutions for startups and growing businesses.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-extrabold text-primary/30">02.</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Student-Led Expertise</h3>
                        <p className="text-muted-foreground">
                          Each project is powered by a diverse, multidisciplinary team, supported by experienced mentors. Our structure ensures that businesses receive fresh, research-driven, and actionable insights.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-extrabold text-primary/30">03.</div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">Impact-Focused Engagements</h3>
                        <p className="text-muted-foreground">
                          From solving pressing business challenges to creating go-to-market strategies and research reports, our initiatives are designed to generate measurable value and long-term impact.
                        </p>
                      </div>
                    </div>
                  </div>
              </CardContent>
            </Card>

            <Card className="border-primary border-2">
              <CardContent className="p-8 text-center">
                 <div className="flex flex-col justify-center items-center gap-4 mb-4">
                    <h3 className="font-headline text-3xl font-bold tracking-tight transition-colors hover:text-primary">
                    Service We Offer
                    </h3>
                </div>
                <div className="mt-12 max-w-lg mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
                    {servicesOffered.map((item) => (
                      <div key={item} className="flex items-center">
                        <CircleCheckBig className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                 <div className="text-center mt-20">
                    <Button asChild size="lg" className="group bg-primary text-primary-foreground font-bold transition-transform hover:scale-105 rounded-md">
                    <Link href="/services">
                        See detailed overview <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
        </div>
        </div>
      </section>

      <section id="recruiters" className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-center text-3xl font-bold font-headline text-muted-foreground mb-12">
            Where Our Members Have Worked
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((company, index) => (
              <div key={index} className="flex-shrink-0 p-2">
                <div className="bg-muted/50 rounded-lg p-4 text-center h-full flex items-center justify-center group hover:bg-primary/10 transition-colors">
                  <p className="text-muted-foreground font-semibold truncate group-hover:text-primary transition-colors">{company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
