import { Code2, Users, Lightbulb, Rocket } from 'lucide-react';

export default function SDCSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Development Focus',
      description: 'Building real-world projects and solutions'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Fostering a culture of collaboration and learning'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Encouraging creative problem-solving'
    },
    {
      icon: Rocket,
      title: 'Tech Initiatives',
      description: 'Workshops, hackathons, and tech events'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            About Student Developers Cell
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-purple-100 leading-relaxed mb-4">
            The <span className="font-bold text-white">Student Developers Cell (SDC)</span> is a student-run technical club at <span className="font-bold text-blue-300">Coimbatore Institute of Technology</span>, dedicated to fostering a vibrant community of developers, innovators, and tech enthusiasts.
          </p>
          <p className="text-lg text-purple-100 leading-relaxed mb-4">
            We focus on empowering students through hands-on development experience, organizing hackathons, conducting technical workshops, and creating platforms for innovation. SDC is where ideas transform into reality, and students grow into skilled builders and problem solvers.
          </p>
          <p className="text-lg text-purple-100 leading-relaxed">
            From beginner-friendly coding sessions to advanced tech initiatives, SDC supports every student's journey in technology. We believe in learning by building, collaborating with peers, and making a real-world impact through code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-sm text-purple-100">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
