import { Button } from './ui/button';
import { Users, Clock, Wallet, Award, CheckCircle, FileText, Calendar } from 'lucide-react';

export default function RegistrationSection() {
  const details = [
    {
      icon: Users,
      title: 'Eligibility',
      description: 'Open to all college students across India'
    },
    {
      icon: Users,
      title: 'Team Size',
      description: '2-4 members per team. Solo participants can team up at the event'
    },
    {
      icon: Clock,
      title: 'Duration',
      description: '24-hour non-stop hackathon'
    },
    {
      icon: Wallet,
      title: 'Registration Fee',
      description: 'Early Bird: ₹400/person • Regular: ₹500/person'
    },
    {
      icon: CheckCircle,
      title: 'Selection Process',
      description: 'Idea submission round followed by team shortlisting'
    },
    {
      icon: FileText,
      title: 'What You Get',
      description: '₹30K prizes, swag, certificates, workshops & networking'
    }
  ];

  const importantDates = [
    {
      icon: Calendar,
      label: 'Early Bird Registration',
      date: 'Feb 8 - 22, 2025',
      highlight: false
    },
    {
      icon: Calendar,
      label: 'Regular Registration',
      date: 'Feb 23 - Mar 5, 2025',
      highlight: true
    },
    {
      icon: Calendar,
      label: 'Team Shortlisting',
      date: 'March 10, 2025',
      highlight: false
    },
    {
      icon: Calendar,
      label: 'Hackathon Event',
      date: 'March 14-15, 2025',
      highlight: true
    }
  ];

  return (
    <section id="register" className="py-20 px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Registration Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100">
            Everything you need to know before you register
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform">
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

        <div className="text-center mb-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-12 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all border-2 border-purple-400/50 hover:scale-105"
          >
            Register Now
          </Button>
        </div>

        {/* Important Dates */}
        <div className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-8 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Important Dates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantDates.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                    item.highlight 
                      ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30 border-2 border-purple-400/50' 
                      : 'bg-white/5 border border-purple-500/30'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.highlight 
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]' 
                      : 'bg-purple-500/20'
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-200 mb-1">{item.label}</p>
                    <p className={`font-bold ${item.highlight ? 'text-white text-lg' : 'text-purple-300'}`}>
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
