import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import Gallery from './components/Gallery';
import Contact from './components/Contact';


const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <CaseStudies />
    <Gallery />
    <Contact />
  </>
);

const ServicesPage = () => <Services />;
const CaseStudiesPage = () => <CaseStudies />;
const TestimonialsPage = () => <Testimonials />;
const CareersPage = () => (
  <div className="min-h-screen flex items-center justify-center text-2xl">Careers Coming Soon</div>
);
const ContactPage = () => <Contact />;

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white font-inter overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
