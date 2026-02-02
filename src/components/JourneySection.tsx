import { Button } from './ui/button';

export default function JourneySection() {
  const steps = [
    {
      number: 1,
      title: 'Early Bird Begins',
      description: 'The clock is ticking: Join the early bird sale NOW!',
      date: 'Febuary 8',
      button: 'Register Early'
    },
    {
      number: 2,
      title: 'Early Bird Ends',
      description: 'Last chance for discounted registration! Regular pricing takes effect after this date. ',
      date: 'Febuary 22',
      button: 'Register Soon'
    },
    {
      number: 3,
      title: 'Early Bird Results',
      description: 'Our Early Bird registrations closed with an amazing response!, To everyone who registered early, your enthusiasm didn’t go unnoticed',
      date: 'March 1',
      button: 'Sign Up Now'
    },
    {
      number: 4,
      title: 'Final Registrations Close',
      description: 'This is your last opportunity to register for the hackathon. Don\'t miss out!',
      date: 'March 5',
      button: 'Register Now'
    },
    {
      number: 5,
      title: 'Shortlist Announcement',
      description: 'Selected teams will be notified via email. Check your inbox for confirmation!',
      date: 'March 10',
      button: 'Check Status'
    },
    {
      number: 6,
      title: 'Offline Hackathon',
      description: 'The main event! 24 hours of hacking, innovation, and collaboration at the venue.',
      date: 'March 14 & March 15',
      button: 'View Schedule'
    }
  ];

  return (
    <section id="journey" className="py-20 px-6 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            The Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100">
            From registration to victory, here's your roadmap to GENESIS 2.0
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 -translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.6)]"></div>

          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Number Circle */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-xl z-10 shadow-[0_0_20px_rgba(168,85,247,0.8)]">
                {step.number}
              </div>

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-purple-300 font-bold mb-2">{step.date}</p>
                    </div>
                  </div>
                  <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                  >
                    {step.button}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}