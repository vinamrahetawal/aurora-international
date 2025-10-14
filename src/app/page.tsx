
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

  const universityLogos = [
    { name: 'University of Manchester', path: '/Institutions/University_Manchester.png' },
    { name: 'University of Warwick', path: '/Institutions/University_of_Warwick_logo.png' },
    { name: 'University of Sydney', path: '/Institutions/image (8).png' },
    { name: 'Lasalle College of the Arts', path: '/Institutions/lasalle logo.png' },
    { name: 'Monash University', path: '/Institutions/image (7).png' },
    { name: 'IIM Mumbai', path: '/Institutions/image (5).png' },
    { name: 'IIM Lucknow', path: '/Institutions/image (6).png' },
    { name: 'SSCBS', path: '/Institutions/image.png' },
    { name: 'DTU', path: '/Institutions/image (4).png' },
    { name: 'Miranda House', path: '/Institutions/image (3).png' },
    { name: 'Acropolis Institute', path: '/Institutions/image (1).png' },
  ];

  const companyLogos = [
    { name: 'ITC', path: '/companies/itc.png', large: false },
    { name: 'FICCI', path: '/companies/ficci.png', large: false },
    { name: 'EY', path: '/companies/ey.png', large: false },
    { name: 'NITI Aayog', path: '/companies/niti.png', large: false },
    { name: 'EaseMyTrip', path: '/companies/easemytrip.png', large: false },
    { name: 'BharatPe', path: '/companies/bharatpe.png', large: true },
    { name: 'Airtel Digital', path: '/companies/airtel.png', large: false },
    { name: 'Urban Company', path: '/companies/urbancompany.png', large: false },
    { name: 'Invest India', path: '/companies/investindia.png', large: true },
    { name: 'PwC', path: '/companies/pwc.png', large: false },
    { name: 'Lythe', path: '/companies/lythe.png', large: false },
    { name: 'BNC', path: '/companies/bnc.png', large: false },
  ];

  return (
    <div className="flex flex-col">
      <InteractiveHero />
      
      {/* Our Global Reach Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold text-foreground">Our Global Reach</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Our network includes students from prestigious institutions such as the University of Manchester, University of Warwick, University of Sydney, Lasalle College of the Arts, Monash University, Shaheed Sukhdev College of Business Studies (SSCBS), Delhi Technological University (DTU), University of Delhi, and many more.
            </p>
          </div>

          <div className="relative w-full overflow-hidden mt-12">
            <div className="flex gap-0">
              <div className="flex animate-marquee-normal gap-0">
                {universityLogos.map((logo, index) => (
                    <div key={`first-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center">
                        <div className="bg-white p-2 rounded-md h-full w-full flex items-center justify-center">
                           <Image src={logo.path} alt={`${logo.name} logo`} width={160} height={60} className="object-contain w-full h-full" />
                        </div>
                    </div>
                ))}
              </div>
              <div className="flex animate-marquee-normal gap-0">
                {universityLogos.map((logo, index) => (
                    <div key={`second-${index}`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center">
                        <div className="bg-white p-2 rounded-md h-full w-full flex items-center justify-center">
                           <Image src={logo.path} alt={`${logo.name} logo`} width={160} height={60} className="object-contain w-full h-full" />
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="relative z-10 py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {highlights.slice(0, 2).map((highlight) => (
              <Card key={highlight.title} className="relative overflow-hidden text-center border-0 bg-gradient-to-br from-primary/90 to-primary backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="font-headline text-2xl text-primary-foreground">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-primary-foreground/90">{highlight.desc}</p>
                </CardContent>
              </Card>
            ))}
             <div className="md:col-span-2 flex justify-center">
                <Card className="relative overflow-hidden text-center border-0 bg-gradient-to-br from-primary/90 to-primary backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 w-full max-w-md">
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
                    <CardHeader className="relative z-10">
                        <CardTitle className="font-headline text-2xl text-primary-foreground">{highlights[2].title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                        <p className="text-primary-foreground/90">{highlights[2].desc}</p>
                    </CardContent>
                </Card>
             </div>
          </div>
        </div>
      </section>

      {/* What do we do - Dark Green */}
      <section id="services-preview" className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="space-y-16 max-w-4xl mx-auto">
            <div className="p-8 md:p-12 text-center">
                <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary-foreground mb-12">What do we do?</h2>
                <div className="space-y-10 text-left">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-extrabold text-primary-foreground/40">01.</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-2">Global Collaboration</h3>
                      <p className="text-primary-foreground/90">
                        We bring together top students from leading universities across India and abroad to work on live projects in consulting, marketing, finance, technology, design, and more, delivering real-world solutions for startups and growing businesses.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-extrabold text-primary-foreground/40">02.</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-2">Student-Led Expertise</h3>
                      <p className="text-primary-foreground/90">
                        Each project is powered by a diverse, multidisciplinary team, supported by experienced mentors. Our structure ensures that businesses receive fresh, research-driven, and actionable insights.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="text-4xl font-extrabold text-primary-foreground/40">03.</div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-foreground mb-2">Impact-Focused Engagements</h3>
                      <p className="text-primary-foreground/90">
                        From solving pressing business challenges to creating go-to-market strategies and research reports, our initiatives are designed to generate measurable value and long-term impact.
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section id="services-list" className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 text-center">
               <div className="flex flex-col justify-center items-center gap-4 mb-4">
                  <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-foreground">
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
                  <Button asChild size="lg" className="group bg-primary text-primary-foreground font-bold transition-all hover:scale-105 hover:shadow-xl rounded-md">
                  <Link href="/services">
                      See detailed overview <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  </Button>
              </div>
            </div>
        </div>
        </div>
      </section>

      {/* Where Our Members Have Worked */}
      <section id="recruiters" className="pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold font-headline text-foreground mb-12">
            Where Our Members Have Worked
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {companyLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 w-full h-24 flex items-center justify-center shadow-md hover:shadow-xl transition-all border border-border/50 hover:border-primary/30">
                  <Image 
                    src={logo.path} 
                    alt={`${logo.name} logo`} 
                    width={logo.large ? 180 : 120} 
                    height={logo.large ? 90 : 60} 
                    className="object-contain w-full h-full" 
                    style={{ transform: logo.large ? 'scale(1.2)' : 'scale(1)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
