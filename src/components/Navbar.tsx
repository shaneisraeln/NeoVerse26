import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
        : 'bg-black/40 backdrop-blur-md border-b border-purple-500/20'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:text-purple-300 transition-colors">
            NeoVerse
          </span>
          <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            26
          </span>
        </Link>
        
        {isHomePage && (
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-purple-200 hover:text-white transition-colors font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-purple-200 hover:text-white transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="#tracks" 
              onClick={(e) => scrollToSection(e, 'tracks')}
              className="text-purple-200 hover:text-white transition-colors font-medium"
            >
              Tracks
            </a>
            <a 
              href="#journey" 
              onClick={(e) => scrollToSection(e, 'journey')}
              className="text-purple-200 hover:text-white transition-colors font-medium"
            >
              Timeline
            </a>
            <a 
              href="#register" 
              onClick={(e) => scrollToSection(e, 'register')}
              className="text-purple-200 hover:text-white transition-colors font-medium"
            >
              Register
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-purple-200 hover:text-white transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
