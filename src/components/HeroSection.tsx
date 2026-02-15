import { Button } from './ui/button';
import { Calendar, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-20 relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-20 right-10 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        {/* SurveySparrow Presents */}
        <div className="mb-6">
          <p className="text-lg md:text-xl text-purple-200 font-medium">
            <span className="font-black text-2xl md:text-3xl text-yellow-300 drop-shadow-[0_0_30px_rgba(251,191,36,0.9)]">
              SurveySparrow
            </span>
            {' '}presents
          </p>
        </div>

        {/* Main Title - Glowing White */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.8)] [text-shadow:_0_0_60px_rgb(255_255_255_/_60%)]">
              NeoVerse
            </h1>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-black rounded-lg text-3xl shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              '26
            </span>
          </div>

          {/* Tagline */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Where Innovation Meets Execution
            </h2>
            <p className="text-xl md:text-2xl text-purple-200 font-semibold tracking-wide">
              A National-Level Hackathon
            </p>
          </div>
          
          {/* Event Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-300" />
              <span className="font-semibold tracking-wide">March 14-15, 2025</span>
            </div>
            <div className="w-px h-6 bg-purple-400/50"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-300" />
              <span className="font-semibold tracking-wide">CIT, Coimbatore</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-black px-12 py-6 text-lg rounded-lg shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:shadow-[0_0_60px_rgba(168,85,247,0.8)] transition-all hover:scale-105 border-2 border-purple-400/50"
        >
          Register Now
        </Button>

        {/* Organizer */}
        <p className="mt-8 text-purple-200">
          Organized by <span className="font-bold text-white">Student Developers Cell, CIT</span>
        </p>
      </div>
    </section>
  );
}
