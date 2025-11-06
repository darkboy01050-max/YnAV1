import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import AIIntegrationPage from './pages/AIIntegrationPage';
import BrandingPage from './pages/BrandingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/app-development" element={<AppDevelopmentPage />} />
          <Route path="/services/ai-integration" element={<AIIntegrationPage />} />
          <Route path="/services/branding" element={<BrandingPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
