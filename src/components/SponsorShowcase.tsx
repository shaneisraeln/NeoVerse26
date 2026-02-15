import { useState, useEffect } from 'react';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

interface SponsorData {
  title: Sponsor[];
  internship: Sponsor[];
  bronze: Sponsor[];
  wellWisher: Sponsor[];
}

export default function SponsorShowcase() {
  const defaultSponsors: SponsorData = {
    title: [
      { id: '1', name: 'SurveySparrow', logo: 'https://surveysparrow.com/wp-content/uploads/2023/08/surveysparrow-logo.svg' }
    ],
    internship: [
      { id: '2', name: 'TechCorp', logo: 'https://img.icons8.com/color/96/google-logo.png' }
    ],
    bronze: [
      { id: '3', name: 'StartupXYZ', logo: 'https://img.icons8.com/color/96/amazon.png' }
    ],
    wellWisher: [
      { id: '4', name: 'Company A', logo: 'https://img.icons8.com/color/96/github.png' },
      { id: '5', name: 'Company B', logo: 'https://img.icons8.com/color/96/discord-logo.png' }
    ]
  };

  const [sponsorTiers, setSponsorTiers] = useState<SponsorData>(defaultSponsors);

  useEffect(() => {
    const savedData = localStorage.getItem('sponsorData');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Map old structure to new if needed
        if (parsed.gold) {
          setSponsorTiers({
            title: parsed.gold || [],
            internship: parsed.silver || [],
            bronze: parsed.bronze || [],
            wellWisher: parsed.wellWisher || []
          });
        } else {
          setSponsorTiers(parsed);
        }
      } catch (e) {
        setSponsorTiers(defaultSponsors);
      }
    }
  }, []);

  const TitleSponsor = ({ sponsor }: { sponsor: Sponsor }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#FFD700' }}>
        Title Sponsor
      </h3>
      <div className="max-w-md mx-auto">
        <div className="group bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-md border-4 border-yellow-500/50 rounded-lg p-12 hover:border-yellow-400/80 hover:shadow-[0_0_60px_rgba(251,191,36,0.6)] transition-all duration-300 hover:-translate-y-2 flex items-center justify-center min-h-[200px]">
          <div style={{ width: '200px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={sponsor.logo} 
              alt={sponsor.name}
              style={{ 
                maxWidth: '200px', 
                maxHeight: '100px', 
                width: 'auto', 
                height: 'auto', 
                objectFit: 'contain' 
              }}
              className="grayscale-0 group-hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const TierSection = ({ 
    title, 
    sponsors, 
    tierColor,
    logoSize = 'medium'
  }: { 
    title: string; 
    sponsors: Sponsor[]; 
    tierColor: string;
    logoSize?: 'large' | 'medium' | 'small';
  }) => {
    if (sponsors.length === 0) return null;

    const sizeClasses = {
      large: { width: '150px', height: '75px', maxW: '150px', maxH: '75px' },
      medium: { width: '120px', height: '60px', maxW: '120px', maxH: '60px' },
      small: { width: '80px', height: '40px', maxW: '80px', maxH: '40px' }
    };

    const size = sizeClasses[logoSize];
    const gridCols = logoSize === 'small' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: tierColor }}>
          {title}
        </h3>
        <div className={`grid ${gridCols} gap-6 max-w-5xl mx-auto`}>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="group bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-2 flex items-center justify-center min-h-[120px]"
            >
              <div style={{ width: size.width, height: size.height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  style={{ 
                    maxWidth: size.maxW, 
                    maxHeight: size.maxH, 
                    width: 'auto', 
                    height: 'auto', 
                    objectFit: 'contain' 
                  }}
                  className="grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-white font-bold text-sm">${sponsor.name}</span>`;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Powered by industry leaders who believe in innovation
          </p>
        </div>

        {sponsorTiers.title.length > 0 && <TitleSponsor sponsor={sponsorTiers.title[0]} />}
        
        <TierSection 
          title="Internship Offer Sponsor" 
          sponsors={sponsorTiers.internship} 
          tierColor="#4FC3F7"
          logoSize="large"
        />
        
        <TierSection 
          title="Bronze Sponsor" 
          sponsors={sponsorTiers.bronze} 
          tierColor="#CD7F32"
          logoSize="medium"
        />
        
        <TierSection 
          title="Well Wishers" 
          sponsors={sponsorTiers.wellWisher} 
          tierColor="#8b5cf6"
          logoSize="small"
        />
      </div>
    </section>
  );
}
