import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TracksSection from '../components/TracksSection';
import SponsorShowcase from '../components/SponsorShowcase';
import JourneySection from '../components/JourneySection';
import RegistrationSection from '../components/RegistrationSection';
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
        <TracksSection />
        <SponsorShowcase />
        <JourneySection />
        <RegistrationSection />
        <Footer />
      </div>
    </div>
  );
}