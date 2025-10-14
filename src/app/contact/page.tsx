import { ContactForm } from '@/components/contact-form';
import { Mail, Linkedin, MapPin, User, Phone } from 'lucide-react';

export default function ContactPage() {
  const contacts = [
    {
      name: 'Gauri Gaur',
      phone: '+91 8750342342',
      email: 'gauri.gaur@auroraint.org',
    },
    {
      name: 'Vanshika Jain',
      phone: '+91 9654179860',
      email: 'vanshika.jain@auroraint.org',
    },
    {
      name: 'Kavy Rastogi',
      phone: '+91 82992 03974',
      email: 'kavy.rastogi@auroraint.org',
    },
  ];

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              We&apos;d love to hear from you. Whether you&apos;re a student, startup, or potential partner, let&apos;s connect.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <h2 className="font-headline text-3xl font-bold mb-8">Send us a message</h2>
              <ContactForm />
            </div>
            <div className="md:col-span-2 bg-primary text-primary-foreground rounded-2xl p-8">
              <h2 className="font-headline text-3xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-10">
                {contacts.map((contact) => (
                  <div key={contact.name}>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <User className="mr-3 h-6 w-6 text-primary-foreground/90" />
                      {contact.name}
                    </h3>
                    <div className="space-y-4 pl-9">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                           <Phone className="h-5 w-5 text-primary-foreground/80" />
                        </div>
                        <div>
                          <p className="text-primary-foreground/90">{contact.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                           <Mail className="h-5 w-5 text-primary-foreground/80" />
                        </div>
                        <div>
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                          >
                            {contact.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
