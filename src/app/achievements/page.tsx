import { Card, CardContent } from '@/components/ui/card';

const achievements = [
    "National Winner - Smart India Hackathon 2024 ( Organised by MoE's Innovation Cell, Govt. of India )",
    "National Winner - SustainaThon 2025 ( Organized by NATRAX, Ministry Of Heavy Industries, Govt. of India )",
    "National Winner – Finopoly – Indian Institute of Management, Indore",
    "National Winner: Conquonomics, Public Policy case competition: SRCC, Asia Fest",
    "National Runner Up - Godrej DEI Labs",
    "National Finalist- Winzo Games",
    "1 of 28 selected participants at JPMorgan's nationwide invite-only event: Find Your Fit in AADP",
    "President, South Asian Business Society, USYD, 200+ Members, 60+ Industry Contacts",
    "AmplifyMe Investment banking simulations in partnership with UBS and Morgan Stanley",
    "4th best speaker: The Joust: Debate Competition - IIM Lucknow"
];

export default function AchievementsPage() {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">
              Our <span className="text-primary">Achievements</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              We are proud of the diverse accomplishments of our members, showcasing their talent and dedication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-primary">
            <CardContent className="p-8 md:p-12">
              <ul className="space-y-6">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-6">
                    <div className="text-2xl md:text-3xl font-extrabold text-primary/30 mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground flex-1">{achievement}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
