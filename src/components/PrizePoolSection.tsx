import { Trophy, Award, Medal } from 'lucide-react';

export default function PrizePoolSection() {
  return (
    <section id="prizes" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.7)] uppercase tracking-wider">
            PRIZE POOL
          </h2>
        </div>

        {/* Podium */}
        <div className="flex items-end justify-center gap-4 md:gap-8 max-w-5xl mx-auto mb-12">

          {/* SILVER */}
          <div className="flex-1 max-w-xs">
            <div className="bg-gradient-to-br from-gray-300/80 to-gray-400/60 backdrop-blur-md border-2 border-gray-200 rounded-t-lg p-6 text-center shadow-[0_0_40px_rgba(192,192,192,0.9)]">

              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(192,192,192,1)]">
                <Award className="w-8 h-8 text-white" />
              </div>

              <p className="text-base text-white font-black mb-3 uppercase tracking-widest">
                RUNNER UP
              </p>

              {/* SILVER AMOUNT */}
              <p className="text-4xl md:text-5xl font-black text-gray-100 drop-shadow-[0_0_25px_rgba(192,192,192,1)]">
                ₹10,000
              </p>

            </div>

            <div className="h-24 bg-gradient-to-b from-gray-200/40 to-gray-400/20 border-x-2 border-b-2 border-gray-200 rounded-b-lg"></div>
          </div>


          {/* GOLD */}
          <div className="flex-1 max-w-xs">
            <div className="bg-gradient-to-br from-yellow-400/80 to-amber-500/60 backdrop-blur-md border-2 border-yellow-200 rounded-t-lg p-8 text-center shadow-[0_0_60px_rgba(255,215,0,0.9)]">

              <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_60px_rgba(255,215,0,1)]">
                <Trophy className="w-10 h-10 text-white" />
              </div>

              <p className="text-lg text-white font-black mb-3 uppercase tracking-widest">
                CHAMPION
              </p>

              {/* GOLD AMOUNT */}
              <p className="text-5xl md:text-6xl font-black text-yellow-100 drop-shadow-[0_0_40px_rgba(255,215,0,1)]">
                ₹15,000
              </p>

            </div>

            <div className="h-40 bg-gradient-to-b from-yellow-200/40 to-amber-300/20 border-x-2 border-b-2 border-yellow-200 rounded-b-lg"></div>
          </div>


          {/* BRONZE */}
          <div className="flex-1 max-w-xs">
            <div className="bg-gradient-to-br from-orange-700/80 to-orange-600/60 backdrop-blur-md border-2 border-orange-300 rounded-t-lg p-6 text-center shadow-[0_0_50px_rgba(205,127,50,0.9)]">

              <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_50px_rgba(205,127,50,1)]">
                <Medal className="w-8 h-8 text-white" />
              </div>

              <p className="text-base text-white font-black mb-3 uppercase tracking-widest">
                2ND RUNNER UP
              </p>

              {/* BRONZE AMOUNT */}
              <p className="text-4xl md:text-5xl font-black text-orange-100 drop-shadow-[0_0_30px_rgba(205,127,50,1)]">
                ₹5,000
              </p>

            </div>

            <div className="h-16 bg-gradient-to-b from-orange-300/40 to-orange-500/20 border-x-2 border-b-2 border-orange-300 rounded-b-lg"></div>
          </div>

        </div>


        {/* Bottom Text */}
        <div className="text-center space-y-4 mt-12">

          <p className="text-white text-lg font-medium tracking-wide">
            Plus exciting swag, certificates, workshops, and networking opportunities!
          </p>

          <p className="text-yellow-300 text-xl font-black drop-shadow-[0_0_15px_rgba(251,191,36,0.9)] uppercase tracking-wide">
            🎯 Internship opportunities available for outstanding performers!
          </p>

        </div>

      </div>
    </section>
  );
}
