import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GalleryAdminPage from './pages/GalleryAdminPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/gallery" element={<GalleryAdminPage />} />
      </Routes>
    </Router>
  );
}
