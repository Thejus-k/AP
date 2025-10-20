export const generateCalendarFile = () => {
  const event = {
    title: 'Engagement Ceremony - Anusha Kalyani & Pavan Kumar',
    description: 'Join us for the engagement ceremony of Anusha Kalyani and Pavan Kumar at Gayathri Bhavan, Basavanagudi, Bengaluru.',
    location: 'Gayathri Bhavan, 9th Main Road, Siddanna Layout, Thyaganagar, Basavanagudi, Bengaluru, 560070',
    startDate: '20251208T080000',
    endDate: '20251208T120000',
    timezone: 'Asia/Kolkata'
  };

  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Anusha & Pavan Engagement//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTART;TZID=${event.timezone}:${event.startDate}
DTEND;TZID=${event.timezone}:${event.endDate}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = 'anusha-pavan-engagement.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
