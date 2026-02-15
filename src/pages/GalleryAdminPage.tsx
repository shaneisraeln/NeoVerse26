import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Plus, Trash2, Save, Lock, Upload, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundEffect from '../components/BackgroundEffect';

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'neoverse2026';

export default function GalleryAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [saved, setSaved] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('galleryImages');
    if (savedData) {
      setImages(JSON.parse(savedData));
    }
    
    const authStatus = sessionStorage.getItem('galleryAdminAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('galleryAdminAuth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleSave = () => {
    localStorage.setItem('galleryImages', JSON.stringify(images));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadProgress(true);
    
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const newImage: GalleryImage = {
          id: Date.now().toString() + Math.random(),
          url: base64String,
          alt: file.name
        };
        setImages(prev => [...prev, newImage]);
        setUploadProgress(false);
      };
      reader.readAsDataURL(file);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDelete = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
    setDeleteConfirm(null);
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
                <h1 className="text-3xl font-black text-white mb-2">Gallery Admin</h1>
                <p className="text-base text-purple-200">Manage event gallery</p>
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
              <h1 className="text-4xl font-bold text-white mb-2">Gallery Management</h1>
              <p className="text-purple-200">Upload and manage event gallery images</p>
            </div>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded transition-colors flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              {saved ? 'Saved!' : 'Save Changes'}
            </button>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white/5 border border-purple-500/40 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Upload Images</h2>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploadProgress}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white font-bold rounded transition-colors flex items-center gap-2"
          >
            <Upload className="w-5 h-5" />
            {uploadProgress ? 'Uploading...' : 'Upload Images'}
          </button>
          <p className="text-sm text-purple-300 mt-2">You can select multiple images at once</p>
        </div>

        {/* Gallery Grid */}
        <div className="bg-white/5 border border-purple-500/40 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Gallery Images ({images.length})</h2>
          
          {images.length === 0 ? (
            <p className="text-purple-200 text-center py-8">No images uploaded yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <div key={image.id} className="relative group">
                  <div className="aspect-video rounded-lg overflow-hidden border-2 border-purple-500/30">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {deleteConfirm === image.id ? (
                    <div className="absolute inset-0 bg-black/80 rounded-lg flex flex-col items-center justify-center gap-3 p-4">
                      <p className="text-white text-sm text-center">Delete this image?</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDelete(image.id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-sm rounded"
                        >
                          Yes, Delete
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(image.id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4 text-white" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
          <p className="text-sm text-blue-200">
            • Upload images to add them to the gallery<br/>
            • Click the delete button on any image to remove it<br/>
            • Click "Save Changes" to persist your updates<br/>
            • Images are stored in browser localStorage
          </p>
        </div>
      </div>
    </div>
  );
}
