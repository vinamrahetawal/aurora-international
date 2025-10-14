'use client';

import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import Link from 'next/link';
import { Linkedin, User } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

function TeamMemberCard({ member, isCofounder = false }: { member: typeof teamMembers[0], isCofounder?: boolean }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={cn(
      "w-full",
      isCofounder ? "sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]" : "sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
    )}>
      <Card className="group relative overflow-hidden text-center border-0 bg-gradient-to-br from-primary/90 to-primary backdrop-blur-sm text-primary-foreground shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full hover:from-primary hover:to-primary">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
        <CardContent className="p-6 flex flex-col items-center relative z-10">
          <div className="relative w-32 h-32 mb-4 rounded-full border-4 border-white/30 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/50 transition-all duration-300 flex items-center justify-center bg-white/20 backdrop-blur-sm overflow-hidden">
            {imageError ? (
              <User className="h-16 w-16 text-primary-foreground" />
            ) : (
              <Image
                src={member.photoPath}
                alt={`Photo of ${member.name}`}
                fill
                className={cn("object-cover", {
                  'object-top': member.name === 'Vinamra Hetawal',
                })}
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <h3 className="font-headline text-xl font-semibold text-primary-foreground">{member.name}</h3>
          <p className="text-primary-foreground/90 font-medium">{member.position}</p>
          <p className="text-primary-foreground/80 text-sm mt-1">{member.university}</p>
          <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default function TeamPage() {
  const coFounders = teamMembers.filter(member => member.position === 'Co-Founder');
  const seniorConsultants = teamMembers.filter(member => member.position === 'Senior Consultant');

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              A diverse group of innovators, strategists, and leaders from top universities across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="pb-8 md:pb-12">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">Co-Founders</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {coFounders.map((member) => (
              <TeamMemberCard key={member.name} member={member} isCofounder={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Senior Consultants Section */}
      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">Senior Consultants</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {seniorConsultants.map((member) => (
              <TeamMemberCard key={member.name} member={member} isCofounder={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
