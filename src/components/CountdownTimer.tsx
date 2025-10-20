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
    <div className="flex gap-4 md:gap-8 justify-center items-center">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Minutes' },
        { value: timeLeft.seconds, label: 'Seconds' }
      ].map((item, index) => (
        <div key={item.label} className="flex items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-card rounded-lg p-3 md:p-6 shadow-lg border border-gold/20 min-w-[60px] md:min-w-[100px]">
              <span className="text-2xl md:text-5xl font-bold text-navy">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
              {item.label}
            </span>
          </div>
          {index < 3 && (
            <span className="text-gold text-xl md:text-3xl">•</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
