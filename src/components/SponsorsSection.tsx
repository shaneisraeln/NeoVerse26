import { Phone } from 'lucide-react';
import { useState } from 'react';

export default function SponsorsSection() {
  const [showContact, setShowContact] = useState(false);

  const sponsorTiers = [
    {
      tier: 'GOLD SPONSOR',
      price: '₹35,000',
      emoji: '👑',
      perks: [
        'COMPANY-DEFINED PROBLEM STATEMENT',
        'WINNING SOLUTIONS SHARED WITH SPONSOR',
        'PREMIUM BOOTH + MAIN LED LOGO DISPLAY',
        'EXCLUSIVE PRODUCT/TECH SHOWCASE',
        'SOCIAL MEDIA PROMOTIONS',
        'DIRECT MENTORSHIP & INTERACTION WITH FINALISTS'
      ]
    },
    {
      tier: 'SILVER SPONSOR',
      price: '₹20,000',
      emoji: '🥈',
      perks: [
        'INDUSTRY-ALIGNED PROBLEM STATEMENT',
        'DEDICATED EXHIBITION SPACE',
        'ACCESS TO WINNING IDEAS & SUMMARIES',
        'SOCIAL MEDIA MENTIONS & TAGS',
        'LOGO ON EVENT BANNERS'
      ]
    },
    {
      tier: 'BRONZE SPONSOR',
      price: '₹10,000',
      emoji: '🥉',
      perks: [
        'ACKNOWLEDGEMENT AT OPENING & CLOSING',
        'LOGO IN MARKETING MATERIALS',
        'NETWORKING & DEMO SESSION ACCESS'
      ]
    },
    {
      tier: 'WELL WISHER',
      price: 'Contact Us',
      emoji: '💜',
      perks: [
        'LOGO IN PROMOTIONS & RECAP VIDEOS',
        'COUPON/VISITING CARD DISTRIBUTION',
        'SOCIAL MEDIA SHOUTOUTS'
      ]
    }
  ];

  return (
    <section id="sponsors-details" className="py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Sponsorship Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Partner with us to shape the future of innovation and connect with the brightest minds in tech!
          </p>
        </div>

        {/* Sponsor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sponsorTiers.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Tier Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{sponsor.emoji}</div>
                <h3 className="text-xl font-black text-white mb-2">
                  {sponsor.tier}
                </h3>
                <div className="text-2xl font-black mb-4 text-purple-300">
                  {sponsor.price}
                </div>
              </div>

              {/* Perks List */}
              <div className="space-y-3">
                {sponsor.perks.map((perk, perkIndex) => (
                  <div key={perkIndex} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(168,85,247,0.6)]"></div>
                    <p className="text-sm font-medium leading-tight text-purple-100">
                      {perk}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Common Contact Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowContact(!showContact)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-black py-4 px-8 text-lg rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 mx-auto border-2 border-purple-400/50"
          >
            <Phone className="w-5 h-5" />
            {showContact ? 'Contact: +91 98765 43210' : 'Get Sponsorship Details'}
          </button>
        </div>

        {/* Contact Info */}
        {showContact && (
          <div className="text-center p-6 bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <h3 className="text-2xl font-black text-white mb-4">Ready to Partner With Us?</h3>
            <p className="text-lg text-purple-100 mb-4">
              Contact us to discuss sponsorship opportunities and customize your package!
            </p>
            <div className="flex items-center justify-center gap-2 text-xl font-black text-purple-300">
              <Phone className="w-6 h-6" />
              +91 91489 35974
            </div>
          </div>
        )}
      </div>
    </section>
  );
}