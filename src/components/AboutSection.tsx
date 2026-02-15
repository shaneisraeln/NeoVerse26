import { Lightbulb, Rocket, Users, Zap, Trophy, Code } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            About NeoVerse 26
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
            <p className="text-purple-100">
              <span className="font-bold text-white text-xl">NeoVerse 26</span> is the <span className="font-bold text-purple-300">2nd edition</span> of the flagship hackathon conducted by the <span className="font-bold text-blue-300">Student Developers Cell (SDC)</span> at Coimbatore Institute of Technology.
            </p>
            
            <p className="text-purple-100">
              After a hugely successful first edition, NeoVerse returns bigger and bolder. This year marks a milestone — our <span className="font-bold text-yellow-300">first-ever 24-hour hackathon</span>, bringing together talented students from across the nation for an intense innovation marathon.
            </p>
            
            <p className="text-purple-100">
              This is where <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">innovation meets execution</span>. NeoVerse 26 is designed for builders, problem solvers, and innovators who want to create real-world impact through technology. Whether you're coding a breakthrough solution, designing an intuitive interface, or architecting scalable systems — this is your platform.
            </p>

            <div className="pt-4">
              <p className="text-purple-200 font-semibold text-xl">
                Join us for 24 hours of hacking, learning, and building the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
