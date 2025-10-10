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

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight">
              DETAILED SERVICE OVERVIEW
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detailedServices.map((service) => (
                <Card key={service.title} className="border-t-4 border-primary bg-card text-card-foreground shadow-lg flex flex-col transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105">
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="bg-primary/10 rounded-full h-14 w-14 flex items-center justify-center">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="font-headline text-xl text-center">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start">
                          <CircleCheckBig className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
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
