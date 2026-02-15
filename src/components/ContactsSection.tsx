import { Phone, Mail, User } from 'lucide-react';

export default function ContactsSection() {
  const contacts = [
    {
      name: 'Nikhil',
      role: 'Secretary',
      phone: '+91 91489 35974'
    },
    {
      name: 'Kavi Selvan',
      role: 'Joint Secretary',
      phone: '+91 81227 97144'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100">
            Have questions? Reach out to our team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform">
                <User className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1 text-center">{contact.name}</h3>
              <p className="text-sm text-purple-300 mb-4 text-center">{contact.role}</p>
              
              <div className="space-y-2">
                <a 
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2 text-sm text-purple-100 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contact.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
