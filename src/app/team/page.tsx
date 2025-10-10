'use client';

import { Card, CardContent } from "@/components/ui/card";
import { teamMembers } from "@/lib/data";
import Link from 'next/link';
import { Linkedin, User } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.5rem)] lg:w-[calc(25%-1.5rem)]">
      <Card className="group relative overflow-hidden text-center bg-background border shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 h-full">
        <CardContent className="p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4 rounded-full border-4 border-transparent group-hover:border-primary transition-colors duration-300 flex items-center justify-center bg-muted overflow-hidden">
            {imageError ? (
              <User className="h-16 w-16 text-muted-foreground" />
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
          <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
          <p className="text-primary font-medium">{member.position}</p>
          <p className="text-muted-foreground text-sm mt-1">{member.university}</p>
          <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">
              Meet Our <span className="text-primary">Team</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              A diverse group of innovators, strategists, and leaders from top universities across the globe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
