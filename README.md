
# NeoVerse 26 - Hackathon Landing Page

A modern, interactive landing page for NeoVerse 26, a national-level hackathon organized by Student Developers Cell, CIT. Built with React, TypeScript, and Vite, featuring stunning 3D animations and a futuristic design.

## 🚀 Features

### Interactive Design
- **3D Tilt Animations**: Interactive track cards with mouse-responsive 3D tilt effects
- **Horizontal Scroll Animation**: Smooth horizontal scrolling for idea tracks section
- **Glassmorphism UI**: Modern glass-effect design with purple/blue gradient theme
- **Responsive Design**: Optimized for all devices from mobile to desktop

### Sections
- **Hero Section**: Eye-catching introduction with animated elements
- **About Section**: Information about NeoVerse 26 hackathon
- **Idea Tracks**: Interactive showcase of 5 hackathon tracks with 3D animations
- **Sponsor Showcase**: Visual display of sponsor logos organized by tier
- **Journey Timeline**: Event timeline and important dates
- **Registration Details**: Comprehensive registration information
- **Sponsor Packages**: Detailed sponsorship tiers and benefits

### Technical Features
- **Multi-page Routing**: Separate pages for landing and sponsor details
- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Animation Libraries**: Framer Motion for smooth animations
- **Icon Integration**: Lucide React icons and Icons8 logos
- **Build Optimization**: Fast builds and optimized production bundles

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React, React Icons, Icons8
- **UI Components**: Radix UI primitives

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hackathon-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── HeroSection.tsx  # Landing hero section
│   ├── AboutSection.tsx # About hackathon
│   ├── TracksSection.tsx # Interactive tracks with 3D animations
│   ├── SponsorShowcase.tsx # Sponsor logos display
│   ├── SponsorsSection.tsx # Detailed sponsorship packages
│   ├── JourneySection.tsx # Event timeline
│   ├── RegistrationSection.tsx # Registration details
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   └── BackgroundEffect.tsx # Animated background
├── pages/               # Page components
│   ├── LandingPage.tsx  # Main landing page
│   └── SponsorsPage.tsx # Sponsor details page
├── styles/              # Global styles
└── App.tsx             # Main app with routing
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple (#8b5cf6) to Blue (#3b82f6) gradients
- **Background**: Dark theme with glassmorphism effects
- **Text**: White primary, purple-100 secondary
- **Accents**: Glowing purple shadows and borders

### Animations
- **3D Tilt Cards**: Mouse-responsive tilt effects on track cards
- **Horizontal Scroll**: Smooth horizontal scrolling animation
- **Hover Effects**: Glowing borders and smooth transitions
- **Background**: Animated gradient background effects

### Typography
- **Headers**: Bold, large fonts with drop shadows
- **Body**: Clean, readable typography with proper hierarchy
- **Monospace**: Azeret Mono for technical elements

## 🌐 Pages

### Landing Page (`/`)
- Hero section with hackathon branding
- About section with feature highlights
- Interactive tracks section with 3D animations
- Sponsor showcase with company logos
- Journey timeline and registration details

### Sponsors Page (`/sponsors`)
- Detailed sponsorship packages
- Tier-based pricing (Gold, Silver, Bronze, Well Wisher)
- Contact information and benefits
- Professional presentation for potential sponsors

## 🎪 Hackathon Details

- **Event**: NeoVerse 26
- **Organizer**: Student Developers Cell, CIT
- **Type**: National-level hackathon
- **Prize Pool**: ₹30,000
- **Duration**: 24-hour hackathon
- **Tracks**: 5 specialized domains (AI, OpenStack, CyberSec, Privacy, DeepTech)

## 🤝 Sponsorship Tiers

- **Gold Sponsor**: ₹35,000 - Premium benefits and branding
- **Silver Sponsor**: ₹20,000 - Dedicated exhibition space
- **Bronze Sponsor**: ₹10,000 - Marketing materials inclusion
- **Well Wisher**: Contact us - Social media promotion

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Configure routing for single-page application

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Environment Setup
- Node.js 16+ required
- npm or yarn package manager
- Modern browser with ES6+ support

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is created for NeoVerse 26 hackathon. All rights reserved by Student Developers Cell, CIT.

## 📞 Contact

For hackathon inquiries and sponsorship opportunities:
- **Phone**: +91 98765 43210
- **Organization**: Student Developers Cell, CIT
- **Event**: NeoVerse 26

---

Built with ❤️ for NeoVerse 26 by Student Developers Cell, CIT