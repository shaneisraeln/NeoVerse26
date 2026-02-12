import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isSponsorsPage = location.pathname === '/sponsors';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-purple-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between overflow-x-hidden">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">NeoVerse</span>
          <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            26
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {!isSponsorsPage ? (
            <>
              <a href="#home" className="text-purple-200 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-purple-200 hover:text-white transition-colors">
                About
              </a>
              <a href="#tracks" className="text-purple-200 hover:text-white transition-colors">
                Tracks
              </a>
              <a href="#journey" className="text-purple-200 hover:text-white transition-colors">
                Journey
              </a>
              <a href="#register" className="text-purple-200 hover:text-white transition-colors">
                Register
              </a>
              <Link to="/sponsors" className="text-purple-200 hover:text-white transition-colors">
                Sponsors
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="text-purple-200 hover:text-white transition-colors">
                Back to Home
              </Link>
              <a href="#sponsors-details" className="text-purple-200 hover:text-white transition-colors">
                Sponsorship Details
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}