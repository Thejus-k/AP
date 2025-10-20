import { Helmet } from 'react-helmet';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Engagement Ceremony of Anusha Kalyani and Pavan Kumar",
    "description": "Join us for the engagement of Anusha Kalyani and Pavan Kumar",
    "startDate": "2025-12-08T08:00:00+05:30",
    "endDate": "2025-12-08T12:00:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Gayathri Bhavan",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "9th Main Road, Siddanna Layout, Thyaganagar",
        "addressLocality": "Basavanagudi, Bengaluru",
        "postalCode": "560070",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Person",
      "name": "K B Ramesh and Suman B H"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
