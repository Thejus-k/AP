import { Calendar, MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CountdownTimer from '@/components/CountdownTimer';
import GoldDivider from '@/components/GoldDivider';
import StructuredData from '@/components/StructuredData';
import { generateCalendarFile } from '@/utils/calendar';
import mandalaWatermark from '@/assets/mandala-watermark.png';

const Index = () => {
  const venueAddress = "Gayathri bhavan, 9th Main Road, Siddanna Layout, thyaganagar, Basavanagudi, Bengaluru, 560070";
  const googleMapsUrl = `https://maps.app.goo.gl/bcTLzKymu257Zyey8`;
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7777.351220596262!2d77.5613984!3d12.9285587!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1585d1aedfbb%3A0xea99b0db5361ca23!2sGayathri%20Bhavan%2C%209th%20Main%20Rd%2C%20Siddanna%20Layout%2C%20Thyagaraja%20Nagar%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560070!5e0!3m2!1sen!2sin!4v1760975920225!5m2!1sen!2sin`;

  return (
    <>
      <StructuredData />
      <div className="min-h-screen luxury-gradient">
        {/* Preheader */}
        <div className="text-center py-4 text-xs md:text-sm text-muted-foreground tracking-[0.3em] font-light">
          ॐ Sri Venkateshay namaha ॐ
        </div>

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 overflow-hidden">
          <img 
            src={mandalaWatermark} 
            alt="" 
            aria-hidden="true"
            className="mandala-watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
          />
          
          {/* Ornate corner decorations */}
          <div className="absolute top-8 left-8 text-gold text-6xl opacity-20 hidden lg:block">✦</div>
          <div className="absolute top-8 right-8 text-gold text-6xl opacity-20 hidden lg:block">✦</div>
          <div className="absolute bottom-8 left-8 text-gold text-6xl opacity-20 hidden lg:block">✦</div>
          <div className="absolute bottom-8 right-8 text-gold text-6xl opacity-20 hidden lg:block">✦</div>
          
          <div className="container mx-auto max-w-5xl relative z-10 text-center">
            <div className="fade-up space-y-8">
              <div className="inline-block px-8 py-3 border-2 border-gold/30 rounded-full mb-6">
                <p className="text-sm tracking-[0.2em] text-gold uppercase">Save the Date</p>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-navy mb-4 leading-[0.9] gold-text-shadow">
                Anusha Kalyani
              </h1>
              
              <div className="flex items-center justify-center gap-6 my-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
                <span className="text-5xl md:text-6xl text-gold float">✦</span>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-navy leading-[0.9] gold-text-shadow">
                Pavan Kumar
              </h1>
            </div>
            
            <div className="space-y-3 text-ink/70 text-lg md:text-xl mt-16 mb-12 fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="font-light">Together with our families, we</p>
              <p className="font-light">request the honor of your presence at the engagement ceremony</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 fade-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                className="bg-navy hover:bg-navy/90 text-cream px-12 py-6 text-lg pulse-glow shadow-2xl"
                onClick={generateCalendarFile}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Add to Calendar
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-gold text-navy hover:bg-gold/10 px-12 py-6 text-lg elegant-border"
                onClick={() => window.open(googleMapsUrl, '_blank')}
              >
                <MapPin className="mr-2 h-5 w-5" />
                View Location
              </Button>
            </div>
          </div>

          {/* Side decorative rails with diamonds */}
          <div className="absolute left-0 top-0 bottom-0 hidden md:flex flex-col items-center justify-around ml-6">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            <div className="absolute top-1/4 text-gold text-xl">◆</div>
            <div className="absolute top-1/2 text-gold text-xl">◆</div>
            <div className="absolute top-3/4 text-gold text-xl">◆</div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 hidden md:flex flex-col items-center justify-around mr-6">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            <div className="absolute top-1/4 text-gold text-xl">◆</div>
            <div className="absolute top-1/2 text-gold text-xl">◆</div>
            <div className="absolute top-3/4 text-gold text-xl">◆</div>
          </div>
        </section>

        <GoldDivider />

        {/* Countdown Timer */}
        <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-4xl fade-up">
            <div className="text-center mb-12 ornate-border py-8">
              <h2 className="text-4xl md:text-5xl text-navy font-bold gold-text-shadow">
                Counting Every Moment
              </h2>
              <p className="text-muted-foreground mt-3 text-lg">Until we celebrate together</p>
            </div>
            <CountdownTimer />
          </div>
        </section>

        <GoldDivider />

        {/* Event Details */}
        <section className="py-20 px-4" id="details">
          <div className="container mx-auto max-w-5xl fade-up">
            <div className="text-center mb-16 ornate-border py-8">
              <h2 className="text-4xl md:text-6xl text-navy font-bold gold-text-shadow">
                Celebration Details
              </h2>
            </div>
            
            <Card className="p-10 md:p-16 shadow-2xl elegant-border bg-white/90 backdrop-blur-sm">
              <div className="space-y-10 text-center">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                    <span>Monday</span>
                    <span className="text-gold">◆</span>
                    <span>December 8</span>
                    <span className="text-gold">◆</span>
                    <span>8 AM</span>
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-navy gold-text-shadow">December 8, 2025</p>
                  <p className="text-2xl md:text-3xl text-gold font-semibold mt-4">8:00 AM IST</p>
                </div>

                <div className="flex items-center justify-center gap-4 my-10">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-gold" />
                  <span className="text-gold text-2xl">✦</span>
                  <div className="h-px w-24 bg-gradient-to-l from-transparent via-gold to-gold" />
                </div>

                <div className="space-y-3">
                  <p className="text-2xl md:text-3xl font-bold text-navy">Gayathri Bhavan</p>
                  <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                    9th Main Road, Siddanna Layout, Thyaganagar<br />
                    Basavanagudi, Bengaluru, Karnataka 560070
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <Button 
                    size="lg"
                    className="bg-navy hover:bg-navy/90 text-cream px-10 py-6 text-base shadow-xl"
                    onClick={() => window.open(googleMapsUrl, '_blank')}
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Open in Maps
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-gold text-navy hover:bg-gold/10 px-10 py-6 text-base"
                    onClick={() => window.open(googleMapsUrl, '_blank')}
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <GoldDivider />

        {/* Google Maps Location */}
        <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl fade-up">
            <div className="text-center mb-12 ornate-border py-8">
              <h2 className="text-4xl md:text-6xl text-navy font-bold gold-text-shadow mb-4">
                Find Us Here
              </h2>
              <p className="text-muted-foreground text-lg">Gayathri Bhavan, Basavanagudi, Bengaluru</p>
            </div>
            
            <div className="elegant-border rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Location - Gayathri Bhavan"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <GoldDivider />

        {/* Our Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl fade-up">
            <div className="text-center mb-12 ornate-border py-8">
              <h2 className="text-4xl md:text-6xl text-navy font-bold gold-text-shadow">
                Our Journey
              </h2>
            </div>
            
            <Card className="p-10 md:p-16 shadow-2xl elegant-border bg-white/90 backdrop-blur-sm">
              <p className="text-center text-muted-foreground text-xl md:text-2xl leading-relaxed font-light">
                Two hearts, two families, coming together in a beautiful union blessed by tradition and love. 
                Anusha and Pavan's journey began with friendship and blossomed into a bond that will last a lifetime. 
                We are overjoyed to celebrate this sacred milestone surrounded by the warmth and blessings of our 
                cherished family and friends.
              </p>
              
              <div className="flex justify-center mt-12">
                <div className="text-gold text-4xl">✦ ◆ ✦</div>
              </div>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 bg-navy text-cream mt-20">
          <div className="container mx-auto max-w-4xl text-center space-y-8">
            <div className="flex justify-center float">
              <div className="w-28 h-28 rounded-full border-4 border-gold flex items-center justify-center pulse-glow shadow-2xl bg-navy">
                <span className="text-3xl font-bold tracking-wide">A ♥ P</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-lg text-cream/90 tracking-wide">
                December 8, 2025
              </p>
              <p className="text-sm text-cream/70">
                Basavanagudi, Bengaluru, India
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="text-gold text-xl">◆</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            
            <p className="text-xs text-cream/40 tracking-wider">
              © 2025 • Created with love and blessings
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
