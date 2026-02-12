import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

export default function SponsorShowcase() {
  // Default sponsor data
  const defaultSponsors = {
    gold: [
      { id: '1', name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png' },
      { id: '2', name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png' }
    ],
    silver: [
      { id: '3', name: 'Amazon', logo: 'https://img.icons8.com/color/96/amazon.png' },
      { id: '4', name: 'Meta', logo: 'https://img.icons8.com/color/96/meta.png' },
      { id: '5', name: 'Netflix', logo: 'https://img.icons8.com/color/96/netflix.png' }
    ],
    bronze: [
      { id: '6', name: 'Adobe', logo: 'https://img.icons8.com/color/96/adobe-creative-cloud.png' },
      { id: '7', name: 'Spotify', logo: 'https://img.icons8.com/color/96/spotify.png' },
      { id: '8', name: 'Slack', logo: 'https://img.icons8.com/color/96/slack-new.png' },
      { id: '9', name: 'Dropbox', logo: 'https://img.icons8.com/color/96/dropbox.png' }
    ],
    wellWisher: [
      { id: '10', name: 'GitHub', logo: 'https://img.icons8.com/color/96/github.png' },
      { id: '11', name: 'Discord', logo: 'https://img.icons8.com/color/96/discord-logo.png' },
      { id: '12', name: 'Figma', logo: 'https://img.icons8.com/color/96/figma.png' },
      { id: '13', name: 'Notion', logo: 'https://img.icons8.com/color/96/notion.png' },
      { id: '14', name: 'Canva', logo: 'https://img.icons8.com/color/96/canva.png' },
      { id: '15', name: 'Zoom', logo: 'https://img.icons8.com/color/96/zoom.png' }
    ]
  };

  const [sponsorTiers, setSponsorTiers] = useState(defaultSponsors);

  useEffect(() => {
    const savedData = localStorage.getItem('sponsorData');
    if (savedData) {
      setSponsorTiers(JSON.parse(savedData));
    }
  }, []);

  const TierSection = ({ title, sponsors, tierColor }: { title: string; sponsors: any[]; tierColor: string }) => {
    // Auto-align based on sponsor count - always centered
    const sponsorCount = sponsors.length;
    const gridClass = sponsorCount === 0 
      ? 'hidden' 
      : sponsorCount === 1
      ? 'grid-cols-1 max-w-xs mx-auto'
      : sponsorCount === 2 
      ? 'grid-cols-2 max-w-md mx-auto' 
      : sponsorCount <= 4 
      ? 'grid-cols-2 md:grid-cols-4 max-w-4xl mx-auto' 
      : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';

    if (sponsorCount === 0) return null;

    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ color: tierColor }}>
          {title}
        </h3>
        <div className={`grid gap-6 ${gridClass}`}>
          {sponsors.map((sponsor) => {
            // Check if it's a base64 image (uploaded file)
            const isBase64 = sponsor.logo?.startsWith('data:image');
            
            return (
              <div
                key={sponsor.id || sponsor.name}
                className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-6 hover:border-purple-400/80 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center min-h-[120px]"
              >
                <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    style={{ 
                      maxWidth: '64px', 
                      maxHeight: '64px', 
                      width: 'auto', 
                      height: 'auto', 
                      objectFit: 'contain' 
                    }}
                    className={`${isBase64 ? 'opacity-90' : 'filter brightness-0 invert opacity-80'} hover:opacity-100 transition-opacity`}
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement?.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-white font-bold text-sm">${sponsor.name}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-6xl mx-auto overflow-x-hidden">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
            We're proud to partner with these incredible organizations who make NeoVerse 26 possible
          </p>
        </div>

        {/* Sponsors by Tier */}
        <TierSection 
          title="Gold Sponsors" 
          sponsors={sponsorTiers.gold} 
          tierColor="#FFD700" 
        />
        
        <TierSection 
          title="Silver Sponsors" 
          sponsors={sponsorTiers.silver} 
          tierColor="#C0C0C0" 
        />
        
        <TierSection 
          title="Bronze Sponsors" 
          sponsors={sponsorTiers.bronze} 
          tierColor="#CD7F32" 
        />
        
        <TierSection 
          title="Well Wishers" 
          sponsors={sponsorTiers.wellWisher} 
          tierColor="#8b5cf6" 
        />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-purple-100 mb-6">
            Interested in sponsoring NeoVerse 26?
          </p>
          <Link to="/sponsors">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-12 py-6 text-lg rounded-lg shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all border-2 border-purple-400/50"
            >
              Become a Sponsor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}