import { useState } from 'react';
import titleSponsorImg from '../assets/sponsors/titlesponsor.jpeg';
import internSponsorImg from '../assets/sponsors/InternshipSponsor.jpeg';
import bronzeSponsorImg from '../assets/sponsors/bronze-sponsor.jpeg';
import wellWisher1Img from '../assets/sponsors/wellwisher-1.jpeg';
import wellWisher2Img from '../assets/sponsors/wellwisher-2.png';

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
      { id: '1', name: 'Title Sponsor', logo: titleSponsorImg }
    ],
    internship: [
      { id: '2', name: 'Internship Sponsor', logo: internSponsorImg }
    ],
    bronze: [
      { id: '3', name: 'Bronze Sponsor', logo: bronzeSponsorImg }
    ],
    wellWisher: [
      { id: '4', name: 'Well Wisher', logo: wellWisher1Img },
      { id: '5', name: 'Well Wisher', logo: wellWisher2Img }
    ]
  };

  const [sponsorTiers] = useState<SponsorData>(defaultSponsors);

  const TitleSponsor = ({ sponsor }: { sponsor: Sponsor }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-center mb-8 text-purple-400">
        Title Sponsor
      </h3>
      <div className="flex justify-center">
        <div className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-8 hover:border-purple-400/60 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 inline-block">
          <img 
            src={sponsor.logo} 
            alt={sponsor.name}
            className="h-28 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );

  const TierSection = ({ 
    title, 
    sponsors, 
    tierColor,
    columns = 1,
    imageSize = 'h-16'
  }: { 
    title: string; 
    sponsors: Sponsor[]; 
    tierColor: string;
    columns?: number;
    imageSize?: string;
  }) => {
    if (sponsors.length === 0) return null;

    const gridClass = columns === 2 ? 'grid-cols-2' : 'grid-cols-1';

    return (
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8" style={{ color: tierColor }}>
          {title}
        </h3>
        <div className={`grid ${gridClass} gap-6 max-w-2xl mx-auto`}>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-white/5 backdrop-blur-md border-2 border-purple-500/40 rounded-lg p-8 hover:border-purple-400/60 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center justify-center"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className={`${imageSize} w-auto object-contain max-w-full`}
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
          columns={1}
          imageSize="h-24"
        />
        
        <TierSection 
          title="Bronze Sponsor" 
          sponsors={sponsorTiers.bronze} 
          tierColor="#CD7F32"
          columns={1}
          imageSize="h-20"
        />
        
        <TierSection 
          title="Well Wishers" 
          sponsors={sponsorTiers.wellWisher} 
          tierColor="#8b5cf6"
          columns={2}
          imageSize="h-16"
        />
      </div>
    </section>
  );
}
