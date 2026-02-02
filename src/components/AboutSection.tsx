import { Lightbulb, Rocket, Users, Zap } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Lightbulb,
      title: 'National Level',
      description: 'Compete with the brightest minds from colleges across India in this prestigious hackathon.'
    },
    {
      icon: Zap,
      title: 'Innovation Driven',
      description: 'Showcase your creativity and problem-solving skills to build solutions that matter.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work with your team to brainstorm, develop, and present innovative solutions.'
    },
    {
      icon: Rocket,
      title: 'Launch Your Ideas',
      description: 'Get the platform to transform your concepts into reality and make a lasting impact.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            About NeoVerse 26
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-white">NeoVerse 26</span> is the second edition of our <span className="font-bold text-purple-300">national-level hackathon</span>, organized by <span className="font-bold text-blue-300">Student Developers Cell, CIT</span> After a hugely successful first edition, NeoVerse returns bigger and bolder, continuing its mission to empower student innovators and problem solvers.
          </p>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto mt-4 leading-relaxed">
            This event is where <span className="font-bold text-purple-300">innovation meets execution</span>, bringing together talented students from across the country to tackle real-world problems through technology. With a strong focus on creativity, problem-solving, and collaboration, NeoVerse 26 aims to spark groundbreaking ideas and transform them into impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-8 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-purple-100 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}