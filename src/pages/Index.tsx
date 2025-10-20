import { Calendar, MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CountdownTimer from '@/components/CountdownTimer';
import RSVPForm from '@/components/RSVPForm';
import GoldDivider from '@/components/GoldDivider';
import StructuredData from '@/components/StructuredData';
import { generateCalendarFile } from '@/utils/calendar';
import mandalaWatermark from '@/assets/mandala-watermark.png';

const Index = () => {
  const venueAddress = "Gayathri bhavan, 9th Main Road, Siddanna Layout, thyaganagar, Basavanagudi, Bengaluru, 560070";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;

  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-cream">
        {/* Preheader */}
        <div className="text-center py-3 text-xs md:text-sm text-muted-foreground tracking-widest">
          Sri Venkateshay namaha
        </div>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
          <img 
            src={mandalaWatermark} 
            alt="" 
            aria-hidden="true"
            className="mandala-watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          />
          
          <div className="container mx-auto max-w-4xl relative z-10 text-center fade-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-navy mb-8 leading-tight">
              Anusha Kalyani<br />
              <span className="text-gold">&</span><br />
              Pavan Kumar
            </h1>
            
            <div className="space-y-2 text-ink/80 text-base md:text-lg mb-12">
              <p>We, K B Ramesh and Suman B H,</p>
              <p>invite you to our daughter's engagement.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-navy hover:bg-navy/90 text-cream px-8"
                onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
              >
                RSVP Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-gold text-navy hover:bg-gold/10 px-8"
                onClick={generateCalendarFile}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Add to Calendar
              </Button>
            </div>
          </div>

          {/* Side decorative rails */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent hidden md:block ml-8" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent hidden md:block mr-8" />
        </section>

        <GoldDivider />

        {/* Countdown Timer */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl text-center text-navy mb-8 font-bold">
              Counting Down
            </h2>
            <CountdownTimer />
          </div>
        </section>

        <GoldDivider />

        {/* Event Details */}
        <section className="py-16 px-4 bg-white/50" id="details">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl text-center text-navy mb-12 font-bold">
              Event Details
            </h2>
            
            <Card className="p-8 md:p-12 shadow-xl border-gold/30">
              <div className="space-y-6 text-center">
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                    Monday <span className="text-gold mx-2">•</span> December <span className="text-gold mx-2">•</span> 8 <span className="text-gold mx-2">•</span> 8 AM
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-navy">December 8, 2025</p>
                  <p className="text-xl text-gold mt-2">8:00 AM IST</p>
                </div>

                <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-8" />

                <div>
                  <p className="text-lg md:text-xl font-semibold text-navy mb-2">Gayathri Bhavan</p>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    9th Main Road, Siddanna Layout, Thyaganagar<br />
                    Basavanagudi, Bengaluru, 560070
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button 
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy/5"
                    onClick={() => window.open(googleMapsUrl, '_blank')}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Open in Maps
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-navy text-navy hover:bg-navy/5"
                    onClick={() => window.open(googleMapsUrl, '_blank')}
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <GoldDivider />

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl text-center text-navy mb-8 font-bold">
              Our Story
            </h2>
            <p className="text-center text-muted-foreground text-lg leading-relaxed">
              Two hearts, two families, coming together in a beautiful union. Anusha and Pavan's journey 
              began with friendship and blossomed into a love that will last a lifetime. We are overjoyed 
              to celebrate this special milestone with our family and friends.
            </p>
          </div>
        </section>

        <GoldDivider />

        {/* Schedule */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl text-center text-navy mb-12 font-bold">
              Schedule
            </h2>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              {[
                { time: '8:00 AM', event: 'Guest Arrival & Welcome' },
                { time: '8:30 AM', event: 'Engagement Ceremony' },
                { time: '9:30 AM', event: 'Blessings & Photography' },
                { time: '10:30 AM', event: 'Breakfast & Celebration' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6 p-6 bg-card rounded-lg border border-gold/20 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-gold rounded-full" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-gold font-semibold">{item.time}</p>
                    <p className="text-lg text-navy">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* Gallery Placeholder */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl text-center text-navy mb-12 font-bold">
              Gallery
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={i}
                  className="aspect-square bg-gradient-to-br from-cream to-muted rounded-lg border border-gold/20 flex items-center justify-center"
                >
                  <p className="text-muted-foreground text-sm">Photo {i + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* FAQ */}
        <section className="py-16 px-4 bg-white/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl text-center text-navy mb-12 font-bold">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 shadow-lg border-gold/20">
                <h3 className="text-xl font-bold text-navy mb-3">Dress Code</h3>
                <p className="text-muted-foreground">
                  Traditional Indian attire is recommended. Please feel comfortable in elegant ethnic wear.
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg border-gold/20">
                <h3 className="text-xl font-bold text-navy mb-3">Parking</h3>
                <p className="text-muted-foreground">
                  Ample parking space is available at the venue. Valet service will be provided for your convenience.
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg border-gold/20">
                <h3 className="text-xl font-bold text-navy mb-3">Contact</h3>
                <p className="text-muted-foreground">
                  For any queries, please reach out to the family. Contact details available upon RSVP.
                </p>
              </Card>
              
              <Card className="p-6 shadow-lg border-gold/20">
                <h3 className="text-xl font-bold text-navy mb-3">Gifts</h3>
                <p className="text-muted-foreground">
                  Your presence is the greatest gift. However, blessings and good wishes are always cherished.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* RSVP Form */}
        <section className="py-16 px-4 relative" id="rsvp">
          <img 
            src={mandalaWatermark} 
            alt="" 
            aria-hidden="true"
            className="mandala-watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          />
          
          <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-5xl text-center text-navy mb-4 font-bold">
              RSVP
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Please let us know if you can join us for this special celebration. 
              We look forward to celebrating with you!
            </p>
            
            <Card className="p-8 md:p-12 shadow-xl border-gold/30">
              <RSVPForm />
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-navy text-cream">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-2xl font-bold">A ♥ P</span>
              </div>
            </div>
            
            <p className="text-sm text-cream/70">
              December 8, 2025 • Bengaluru, India
            </p>
            
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
            
            <p className="text-xs text-cream/50">
              © 2025 Anusha & Pavan. With love and gratitude.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
