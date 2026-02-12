import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-black">NeoVerse</span>
              <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-bold rounded">
                26
              </span>
            </div>
            <p className="text-gray-400">
              A National Level Hackathon organized by Student Developers Cell, CIT
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Location</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <a 
                    href="https://maps.app.goo.gl/oXDPwZKL2MhkWShR9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-purple-300 transition-colors underline"
                  >
                    Coimbatore Institute of Technology<br />
                    Coimbatore, Tamil Nadu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:genesis@pce.ac.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                  sdc@cit.edu.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +91 91489 35974
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 NeoVerse 26 All rights reserved. | Developed with 💜 by SDC, CIT
          </p>
        </div>
      </div>
    </footer>
  );
}
