import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SponsorsPage from './pages/SponsorsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
      </Routes>
    </Router>
  );
}