export default function JourneySection() {
  const steps = [
    {
      number: 1,
      title: 'Registration Begins',
      description: 'Let\'s get innovating for a change',
      date: 'February 16 2025',
      icon: '✓'
    },
    {
      number: 2,
      title: 'Registration Ends',
      description: 'Final chance to register for the hackathon. Don\'t miss out!',
      date: 'February 24 2025',
      icon: '📝'
    },
    {
      number: 3,
      title: 'Team Shortlisting',
      description: 'Selected teams will be notified via email. Check your inbox!',
      date: 'March 01 2025',
      icon: '○'
    },
    {
      number: 4,
      title: 'Hackathon Day',
      description: 'Opening ceremony, team check-in, and hacking begins!',
      date: 'March 07 2025',
      icon: '○'
    }
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
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
          {/* Visible Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 -translate-x-1/2 shadow-[0_0_20px_rgba(168,85,247,1)] z-0" style={{ boxShadow: '0 0 20px rgba(168,85,247,1), 0 0 40px rgba(168,85,247,0.6)' }}></div>

          {steps.map((step, index) => {
            const isLeft = index % 2 !== 0;
            
            return (
              <div 
                key={index}
                className="relative mb-16 h-auto"
                style={{ minHeight: '140px' }}
              >
                {/* Number Circle on the line */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-2xl z-20 shadow-[0_0_25px_rgba(168,85,247,0.9)] border-4 border-black">
                  {step.number}
                </div>

                {/* Card Container */}
                <div className="relative w-full">
                  <div 
                    className="absolute top-0"
                    style={{
                      width: 'calc(50% - 50px)',
                      [isLeft ? 'right' : 'left']: 'calc(50% + 50px)'
                    }}
                  >
                    <div className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                          <span className="text-white text-lg">
                            {step.icon}
                          </span>
                        </div>
                        <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                          <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                          <p className="text-sm text-purple-300 font-semibold">{step.date}</p>
                        </div>
                      </div>
                      <p className={`text-purple-100 text-sm leading-relaxed ${isLeft ? 'text-right' : 'text-left'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
