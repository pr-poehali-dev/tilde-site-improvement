import { useState } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import PracticeSection from '@/components/PracticeSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactsSection from '@/components/ContactsSection';
import FooterSection from '@/components/FooterSection';
import BookingModal from '@/components/BookingModal';
import ConsultModal from '@/components/ConsultModal';

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <NavBar onBooking={() => setBookingOpen(true)} />

      <main>
        <HeroSection
          onBooking={() => setBookingOpen(true)}
          onConsult={() => setConsultOpen(true)}
        />
        <PracticeSection />
        <ServicesSection onBooking={() => setBookingOpen(true)} />
        <AboutSection />
        <ContactsSection
          onBooking={() => setBookingOpen(true)}
          onConsult={() => setConsultOpen(true)}
        />
      </main>

      <FooterSection />

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </div>
  );
};

export default Index;
