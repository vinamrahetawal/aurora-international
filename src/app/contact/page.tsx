import { ContactForm } from '@/components/contact-form';
import { Mail, Linkedin, MapPin, User, Phone } from 'lucide-react';

export default function ContactPage() {
  const contacts = [
    {
      name: 'Gauri Gaur',
      phone: '+91 8750342342',
      email: 'gaurigaur0207@gmail.com',
    },
    {
      name: 'Vanshika Jain',
      phone: '+91 9654179860',
      email: 'vanshika.23552@sscbs.du.ac.in',
    },
    {
      name: 'Kavy Rastogi',
      phone: '+91 82992 03974',
      email: 'kavyrastogi@gmail.com',
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
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
              We’d love to hear from you. Whether you’re a student, startup, or potential partner, let’s connect.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <h2 className="font-headline text-3xl font-bold mb-8">Send us a message</h2>
              <ContactForm />
            </div>
            <div className="md:col-span-2">
              <h2 className="font-headline text-3xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-10">
                {contacts.map((contact) => (
                  <div key={contact.name}>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <User className="mr-3 h-6 w-6 text-primary" />
                      {contact.name}
                    </h3>
                    <div className="space-y-4 pl-9">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                           <Phone className="h-5 w-5 text-primary/80" />
                        </div>
                        <div>
                          <p className="text-muted-foreground">{contact.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                           <Mail className="h-5 w-5 text-primary/80" />
                        </div>
                        <div>
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
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
