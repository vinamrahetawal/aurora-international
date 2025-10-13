
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getImageById } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  const universities = [
    'University of Manchester',
    'University of Warwick',
    'University of Sydney',
    'Lasalle College of the Arts',
    'Monash University',
    'Shaheed Sukhdev College of Business Studies (SSCBS)',
    'Delhi Technological University (DTU)',
    'University of Delhi',
    'IIM Mumbai',
    'IIM Lucknow',
    'Acropolis Institute',
  ];

  const whyAurora = [
    {
      number: '01',
      title: 'Global Student Network',
      description: 'Aurora unites ambitious students from top universities across India and abroad including the University of Manchester, Warwick, Sydney, Monash, SSCBS, DTU, DU, and more. This global footprint ensures our projects are backed by diverse cultural insights and international perspectives.',
    },
    {
      number: '02',
      title: 'Multidisciplinary Powerhouse',
      description: 'Unlike traditional student clubs or narrowly focused consultancies, Aurora covers all major domains from consulting, marketing, and finance to design, technology, and policy. Clients don’t just get solutions in silos; they get holistic, future-ready strategies.',
    },
    {
      number: '03',
      title: 'Fresh & Future-Ready Thinking',
      description: 'Being student-led gives us an edge: we bring youth-driven creativity, digital-first instincts, and bold ideas that established firms often overlook. Aurora teams think like consumers of tomorrow, not consultants of yesterday.',
    },
    {
      number: '04',
      title: 'Agile, Affordable, Impactful',
      description: 'We are designed for startups and growing businesses delivering cost-effective, research-driven, and actionable solutions without the bureaucracy or overhead of traditional firms.',
    },
    {
      number: '05',
      title: 'Learning + Real Impact',
      description: 'Aurora bridges the gap between academia and industry. Every project is a real-world learning lab for students and a tangible growth driver for businesses. This dual mission makes our work sustainable, innovative, and high-impact.',
    },
    {
      number: '06',
      title: 'Professional Delivery, Student Energy',
      description: 'Our dedicated project teams, guided by experienced leaders and mentors, ensure that clients get professional-grade deliverables while benefiting from the energy, adaptability, and global mindset of our student network.',
    },
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
    { name: 'IIM Mumbai', path: '/Institutions/image (5).png' },
    { name: 'IIM Lucknow', path: '/Institutions/image (6).png' },
  ];

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">
              A <span className="text-primary">Global Collective</span> of Ambitious Minds
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-6 md:px-8">
          <div className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-12">
                About Aurora International
              </h2>
              <div className="space-y-6 text-primary-foreground/90 text-lg">
                <p>
                  Aurora International is a student-led global organization bringing together ambitious minds from leading universities across the world. We are a multidisciplinary hub offering solutions in consulting, marketing, finance, technology, policy, design, and more powered entirely by students with a passion for impact.
                </p>
                <p>
                  We specialize in helping early-stage startups and growing businesses tackle their most pressing challenges through in-depth research, strategic insights, and actionable solutions. By bridging academia with industry, Aurora creates a platform where young talent delivers real-world, creative, and future-ready impact on a global scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-foreground tracking-tight">
              WHY <span className="text-primary">AURORA?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyAurora.map((item) => (
              <Card key={item.number} className="bg-primary border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl font-extrabold text-primary-foreground/40 -mt-2">{item.number}.</div>
                    <CardTitle className="font-headline text-xl text-primary-foreground">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-primary-foreground/90">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
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

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {universities.map((uni) => (
              <div key={uni} className="bg-background border rounded-full px-5 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer">
                {uni}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto text-center px-6 md:px-8">
            <h2 className="font-headline text-4xl font-bold text-foreground">Join Our Vision</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Become part of a network that&apos;s shaping the future of innovation and leadership.
            </p>
            <div className="mt-8">
                <Button asChild size="lg" className="group text-primary-foreground font-bold transition-transform hover:scale-105 rounded-md">
                    <Link href="/contact">
                        Get In Touch <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
