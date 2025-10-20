import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const targetDate = new Date('2025-12-08T08:00:00+05:30');
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 md:gap-12 justify-center items-center">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Minutes' },
        { value: timeLeft.seconds, label: 'Seconds' }
      ].map((item, index) => (
        <div key={item.label} className="flex items-center gap-3 md:gap-12">
          <div className="flex flex-col items-center fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="elegant-border rounded-2xl p-4 md:p-8 shadow-2xl min-w-[70px] md:min-w-[130px] bg-white/90 backdrop-blur-sm pulse-glow">
              <span className="text-3xl md:text-6xl font-bold text-navy gold-text-shadow">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs md:text-base text-muted-foreground mt-3 uppercase tracking-[0.2em] font-light">
              {item.label}
            </span>
          </div>
          {index < 3 && (
            <span className="text-gold text-2xl md:text-4xl float">◆</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
