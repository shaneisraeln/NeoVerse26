import Navbar from '../components/Navbar';
import SponsorsSection from '../components/SponsorsSection';
import Footer from '../components/Footer';
import BackgroundEffect from '../components/BackgroundEffect';

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundEffect />
      <div className="relative z-10">
        <Navbar />
        <SponsorsSection />
        <Footer />
      </div>
    </div>
  );
}