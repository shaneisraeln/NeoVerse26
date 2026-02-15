import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PrizePoolSection from '../components/PrizePoolSection';
import EventGallery from '../components/EventGallery';
import SDCSection from '../components/SDCSection';
import TracksSection from '../components/TracksSection';
import SponsorShowcase from '../components/SponsorShowcase';
import JourneySection from '../components/JourneySection';
import RegistrationSection from '../components/RegistrationSection';
import ContactsSection from '../components/ContactsSection';
import Footer from '../components/Footer';
import BackgroundEffect from '../components/BackgroundEffect';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <BackgroundEffect />
      <div className="relative z-10 overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PrizePoolSection />
        <EventGallery />
        <SDCSection />
        <TracksSection />
        <SponsorShowcase />
        <JourneySection />
        <RegistrationSection />
        <div id="contact">
          <ContactsSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
