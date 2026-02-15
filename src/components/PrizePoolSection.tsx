export default function PrizePoolSection() {
  return (
    <section id="prizes" className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-wider drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-6">
            PRIZE POOL
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100 mb-16">Total worth ₹30,000</p>
        </div>

        {/* Prize Cards - All Same Size */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* 1st Place - Winner (LEFT) */}
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-sm border-2 border-purple-500/40 rounded-2xl p-8 text-center hover:border-purple-400/60 transition-all duration-300 shadow-xl">
              {/* Emoji Icon */}
              <div className="text-7xl mb-6">
                🏆
              </div>

              {/* Title */}
              <h3 className="text-white text-3xl font-black mb-6 uppercase">
                Winner
              </h3>

              {/* Amount */}
              <p className="text-6xl font-black text-white">
                ₹15,000
              </p>
            </div>
          </div>

          {/* 2nd Place - Runner Up (CENTER) */}
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300">
              {/* Emoji Icon */}
              <div className="text-7xl mb-6">
                🥈
              </div>

              {/* Title */}
              <h3 className="text-white text-3xl font-black mb-6 uppercase">
                Runner Up
              </h3>

              {/* Amount */}
              <p className="text-6xl font-black text-white">
                ₹10,000
              </p>
            </div>
          </div>

          {/* 3rd Place - 2nd Runner Up (RIGHT) */}
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300">
              {/* Emoji Icon */}
              <div className="text-7xl mb-6">
                🥉
              </div>

              {/* Title */}
              <h3 className="text-white text-3xl font-black mb-6 uppercase">
                2nd Runner Up
              </h3>

              {/* Amount */}
              <p className="text-6xl font-black text-white">
                ₹5,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
