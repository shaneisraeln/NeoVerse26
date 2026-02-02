import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-20">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">NeoVerse</h1>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-black rounded-lg text-2xl shadow-[0_0_20px_rgba(168,85,247,0.6)]">
              26
            </span>
          </div>
          
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 mb-8 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
              A NATIONAL LEVEL HACKATHON!
            </h2>
          </div>
        </div>

        <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border-2 border-purple-400/50 rounded-lg mb-12 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <p className="text-lg font-bold text-white">
            💰 Prize Pool Worth ₹30,000
          </p>
        </div>

        {/* Browser Window Mockup */}
        <div className="max-w-2xl mx-auto mb-12 bg-white/5 backdrop-blur-md border-4 border-purple-500/50 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.4)]">
          {/* Browser Header */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border-b-2 border-purple-400/30 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.6)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-bold text-purple-300">REMINDER!</span>
            </div>
          </div>
          
          {/* Browser Content */}
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm px-8 py-16">
            <h3 className="text-4xl font-black text-white mb-4 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              REGISTRATION LIVE
            </h3>
            <p className="text-purple-200 mb-2">Innovation Loading... Fasten your Seatbelts</p>
            <div className="flex justify-center gap-1">
              <div className="w-3 h-3 bg-purple-500 rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
              <div className="w-3 h-3 bg-purple-400 rounded-sm shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>
              <div className="w-12 h-3 bg-white/20 rounded-sm"></div>
            </div>
          </div>
        </div>

        <Button 
          size="lg" 
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-12 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all border-2 border-purple-400/50"
        >
          Register Now
        </Button>

        <p className="mt-8 text-purple-200">
          Organized by <span className="font-bold text-white">Student Developers Cell, CIT</span>
        </p>
      </div>
    </section>
  );
}