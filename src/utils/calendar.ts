export const generateCalendarFile = () => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: 'Engagement Ceremony - Anusha Kalyani & Pavan Kumar',
    dates: '20251208T023000Z/20251208T063000Z',
    details: 'Join us for the engagement ceremony of Anusha Kalyani and Pavan Kumar at Gayathri Bhavan, Basavanagudi, Bengaluru.',
    location: 'Gayathri Bhavan, 9th Main Road, Siddanna Layout, Thyagaragar, Basavanagudi, Bengaluru, 560070',
    sf: 'true',
    output: 'xml',
  });
  window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, '_blank');
};

