import { Button } from './ui/button';
import { Users, Clock, Wallet, Award, CheckCircle, FileText } from 'lucide-react';

export default function RegistrationSection() {
  const details = [
    {
      icon: Users,
      title: 'Eligibility',
      description: 'Open to all college students (individual or teams of up to 4 members)'
    },
    {
      icon: Users,
      title: 'Team Size',
      description: 'Form a team of 2 - 4 members. Duo or a squad, teams can join forces during the event!'
    },
    {
      icon: Clock,
      title: 'Duration',
      description: 'A non-stop 24-hour hackathon filled with innovation, learning, and fun!'
    },
    {
      icon: Wallet,
      title: 'Registration Fee',
      description: 'Early Bird: ₹400/person • Regular: ₹500/person'
    },
    {
      icon: CheckCircle,
      title: 'Selection Process',
      description: 'All teams go through an idea submission round. Top teams will be shortlisted!'
    },
    {
      icon: FileText,
      title: 'Prizes & Perks',
      description: '₹30K prize pool, exciting swag, certificates, workshops & networking!'
    }
  ];

  return (
    <section id="register" className="py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Registration Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100">
            Everything you need to know before you register
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{detail.title}</h3>
                    <p className="text-purple-100 text-sm leading-relaxed">{detail.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-12 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all border-2 border-purple-400/50"
          >
            Register Now
          </Button>
        </div>

        {/* Important Dates */}
        <div className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-8 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Important Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm text-purple-200 mb-1">Registration Opens</p>
              <p className="text-lg font-bold text-purple-300">December 1st</p>
            </div>
            <div>
              <p className="text-sm text-purple-200 mb-1">Early Bird Ends</p>
              <p className="text-lg font-bold text-blue-300">January 15th</p>
            </div>
            <div>
              <p className="text-sm text-purple-200 mb-1">Final Registrations</p>
              <p className="text-lg font-bold text-white">March 1st, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}