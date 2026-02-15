export default function JourneySection() {
  const steps = [
    {
      number: 1,
      title: 'Early Bird Registration',
      description: 'Get discounted registration rates. Limited slots available!',
      date: 'February 8 - 22, 2025',
      status: 'completed'
    },
    {
      number: 2,
      title: 'Regular Registration',
      description: 'Final chance to register for the hackathon. Don\'t miss out!',
      date: 'February 23 - March 5, 2025',
      status: 'active'
    },
    {
      number: 3,
      title: 'Team Shortlisting',
      description: 'Selected teams will be notified via email. Check your inbox!',
      date: 'March 10, 2025',
      status: 'upcoming'
    },
    {
      number: 4,
      title: 'Hackathon Day 1',
      description: 'Opening ceremony, team check-in, and hacking begins!',
      date: 'March 14, 2025',
      status: 'upcoming'
    },
    {
      number: 5,
      title: 'Hackathon Day 2',
      description: 'Final submissions, presentations, judging, and prize distribution.',
      date: 'March 15, 2025',
      status: 'upcoming'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'from-green-500 to-emerald-500';
      case 'active': return 'from-purple-500 to-blue-500';
      case 'upcoming': return 'from-gray-500 to-gray-600';
      default: return 'from-purple-500 to-blue-500';
    }
  };

  return (
    <section id="journey" className="py-20 px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-5xl mx-auto overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Event Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100">
            Your roadmap to NeoVerse 26
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 -translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Number Circle */}
              <div className={`md:absolute md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br ${getStatusColor(step.status)} rounded-full flex items-center justify-center text-white font-black text-2xl z-10 shadow-[0_0_20px_rgba(168,85,247,0.8)]`}>
                {step.number}
              </div>

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="group bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1">
                  <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-10 h-10 bg-gradient-to-br ${getStatusColor(step.status)} rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.6)]`}>
                      <span className="text-white text-lg">
                        {step.status === 'completed' ? '✓' : step.status === 'active' ? '●' : '○'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-purple-300 font-bold mb-2">{step.date}</p>
                    </div>
                  </div>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  {step.status === 'completed' && (
                    <div className="mt-3 inline-block px-3 py-1 bg-green-500/20 border border-green-500/50 rounded text-green-300 text-xs font-bold">
                      Completed
                    </div>
                  )}
                  {step.status === 'active' && (
                    <div className="mt-3 inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/50 rounded text-purple-300 text-xs font-bold animate-pulse">
                      Active Now
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
