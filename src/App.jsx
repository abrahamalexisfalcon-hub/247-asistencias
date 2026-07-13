import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import AllServicesPage from './components/AllServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';

function LandingPage() {
  return (
    <>
      <Navbar variant="transparent" />
      <Hero />
      <ServicesSection />
      <BenefitsSection />
      <div id="contacto">
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#DDE3ED] text-slate-950 font-sans antialiased">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/servicios" element={<AllServicesPage />} />
          <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;