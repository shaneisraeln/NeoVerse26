import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Plus, Trash2, Save, Lock, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundEffect from '../components/BackgroundEffect';

interface Sponsor {
  id: string;
  name: string;
  logo: string;
}

interface SponsorData {
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
  wellWisher: Sponsor[];
}

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'neoverse2026';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [sponsors, setSponsors] = useState<SponsorData>({
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
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('sponsorData');
    if (savedData) {
      setSponsors(JSON.parse(savedData));
    }
    
    const authStatus = sessionStorage.getItem('adminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleSave = () => {
    localStorage.setItem('sponsorData', JSON.stringify(sponsors));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const addSponsor = (tier: keyof SponsorData) => {
    const newId = Date.now().toString();
    const newSponsors = {
      ...sponsors,
      [tier]: [...sponsors[tier], { id: newId, name: '', logo: '' }]
    };
    setSponsors(newSponsors);
  };

  const removeSponsor = (tier: keyof SponsorData, id: string) => {
    const newSponsors = {
      ...sponsors,
      [tier]: sponsors[tier].filter((s) => s.id !== id)
    };
    setSponsors(newSponsors);
  };

  const updateSponsorName = (tier: keyof SponsorData, id: string, value: string) => {
    const newSponsors = {
      ...sponsors,
      [tier]: sponsors[tier].map(s => 
        s.id === id ? { ...s, name: value } : s
      )
    };
    setSponsors(newSponsors);
  };

  const updateSponsorLogo = (tier: keyof SponsorData, id: string, value: string) => {
    const newSponsors = {
      ...sponsors,
      [tier]: sponsors[tier].map(s => 
        s.id === id ? { ...s, logo: value } : s
      )
    };
    setSponsors(newSponsors);
  };

  const handleFileUpload = (tier: keyof SponsorData, id: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      updateSponsorLogo(tier, id, base64String);
    };
    reader.readAsDataURL(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black relative">
        <BackgroundEffect />
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="w-full max-w-md">
            <Link to="/" className="inline-flex items-center text-purple-300 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <div className="bg-white/5 border-2 border-purple-500/40 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-black text-white mb-2">Admin Login</h1>
                <p className="text-base text-purple-200">Manage sponsors</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-purple-500/50 rounded text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                    placeholder="Enter username"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-black/40 border border-purple-500/50 rounded text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                    placeholder="Enter password"
                    required
                  />
                </div>

                {loginError && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded p-3 text-red-200 text-sm font-medium">
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-500 text-white text-base font-bold rounded transition-colors"
                >
                  Login
                </button>
              </form>

              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded text-center">
                <p className="text-xs font-medium text-blue-200">admin / neoverse2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black relative">
      <BackgroundEffect />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-purple-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Sponsor Management</h1>
              <p className="text-purple-200">Add, edit, or remove sponsors</p>
            </div>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded transition-colors flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              {saved ? 'Saved!' : 'Save'}
            </button>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="bg-white/5 border border-purple-500/40 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: '#FFD700' }}>Gold Sponsors</h3>
            <button
              onClick={() => addSponsor('gold')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sponsors.gold.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                tier="gold"
                onNameChange={updateSponsorName}
                onLogoChange={updateSponsorLogo}
                onRemove={removeSponsor}
                onFileUpload={handleFileUpload}
              />
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="bg-white/5 border border-purple-500/40 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: '#C0C0C0' }}>Silver Sponsors</h3>
            <button
              onClick={() => addSponsor('silver')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sponsors.silver.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                tier="silver"
                onNameChange={updateSponsorName}
                onLogoChange={updateSponsorLogo}
                onRemove={removeSponsor}
                onFileUpload={handleFileUpload}
              />
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="bg-white/5 border border-purple-500/40 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: '#CD7F32' }}>Bronze Sponsors</h3>
            <button
              onClick={() => addSponsor('bronze')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sponsors.bronze.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                tier="bronze"
                onNameChange={updateSponsorName}
                onLogoChange={updateSponsorLogo}
                onRemove={removeSponsor}
                onFileUpload={handleFileUpload}
              />
            ))}
          </div>
        </div>

        {/* Well Wishers */}
        <div className="bg-white/5 border border-purple-500/40 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold" style={{ color: '#8b5cf6' }}>Well Wishers</h3>
            <button
              onClick={() => addSponsor('wellWisher')}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sponsors.wellWisher.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                tier="wellWisher"
                onNameChange={updateSponsorName}
                onLogoChange={updateSponsorLogo}
                onRemove={removeSponsor}
                onFileUpload={handleFileUpload}
              />
            ))}
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <p className="text-sm text-blue-200">
            • Enter sponsor name and logo URL, or upload a local file<br/>
            • Click Save to store changes<br/>
            • Changes persist in browser localStorage
          </p>
        </div>
      </div>
    </div>
  );
}

function SponsorCard({
  sponsor,
  tier,
  onNameChange,
  onLogoChange,
  onRemove,
  onFileUpload
}: {
  sponsor: Sponsor;
  tier: keyof SponsorData;
  onNameChange: (tier: keyof SponsorData, id: string, value: string) => void;
  onLogoChange: (tier: keyof SponsorData, id: string, value: string) => void;
  onRemove: (tier: keyof SponsorData, id: string) => void;
  onFileUpload: (tier: keyof SponsorData, id: string, file: File) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-black/40 border border-purple-500/30 rounded-lg p-4">
      <div className="space-y-3">
        <input
          type="text"
          value={sponsor.name}
          onChange={(e) => onNameChange(tier, sponsor.id, e.target.value)}
          className="w-full px-3 py-2 bg-black/60 border border-purple-500/40 rounded text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
          placeholder="Sponsor name"
        />

        <input
          type="text"
          value={sponsor.logo}
          onChange={(e) => onLogoChange(tier, sponsor.id, e.target.value)}
          className="w-full px-3 py-2 bg-black/60 border border-purple-500/40 rounded text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
          placeholder="Logo URL"
        />

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onFileUpload(tier, sponsor.id, file);
          }}
          className="hidden"
        />
        
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded transition-colors flex items-center justify-center gap-2"
        >
          <Upload className="w-4 h-4" />
          Upload File
        </button>

        {sponsor.logo && (
          <div className="bg-white/5 rounded p-3 flex items-center justify-center min-h-[80px]">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name}
              className="max-w-full max-h-16 object-contain"
            />
          </div>
        )}

        <button
          onClick={() => onRemove(tier, sponsor.id)}
          className="w-full px-3 py-2 bg-red-600 hover:bg-red-500 text-white text-sm rounded transition-colors flex items-center justify-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Remove
        </button>
      </div>
    </div>
  );
}
