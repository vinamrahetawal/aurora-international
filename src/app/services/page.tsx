import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { detailedServices } from "@/lib/data";
import { CircleCheckBig } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              We help startups and growing businesses tackle pressing challenges through a range of multidisciplinary solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {detailedServices.map((service) => (
                <Card key={service.title} className="border-0 bg-gradient-to-br from-primary/90 to-primary backdrop-blur-sm text-primary-foreground shadow-xl flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:from-primary hover:to-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>
                  <CardHeader className="relative z-10">
                    <div className="mb-4 flex justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full h-14 w-14 flex items-center justify-center border border-white/30">
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                    </div>
                    <CardTitle className="font-headline text-xl text-center text-primary-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow relative z-10">
                    <ul className="space-y-4">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start">
                          <CircleCheckBig className="h-5 w-5 text-primary-foreground mr-3 mt-1 flex-shrink-0" />
                          <span className="text-primary-foreground/95">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
