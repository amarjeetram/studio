
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
         <section className="py-20 md:py-28 text-center bg-gradient-to-b from-background to-indigo-50 dark:from-background dark:to-primary/10">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary dark:text-white">Get in Touch</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help. Contact us with any questions or concerns.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold font-headline mb-6">Contact Form</h2>
              <Card className="shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your Email" />
                    </div>
                  </div>
                   <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Question about plans" />
                    </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message..." rows={5} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
               <h2 className="text-3xl font-bold font-headline mb-6">Our Information</h2>
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-full text-accent"><Mail className="h-6 w-6"/></div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">support@starrise.network</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                   <div className="p-3 bg-accent/10 rounded-full text-accent"><Phone className="h-6 w-6"/></div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                   <div className="p-3 bg-accent/10 rounded-full text-accent"><MapPin className="h-6 w-6"/></div>
                  <div>
                    <h3 className="font-semibold text-lg">Office</h3>
                    <p className="text-muted-foreground">123 Success Ave, Growth City, 90210</p>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
