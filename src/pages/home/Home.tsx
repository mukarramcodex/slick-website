import Navbar from '@/components/global/navbar/Navbar';
import Hero from '@/components/hero/Hero';
import Intro from '@/components/about/Intro';
import Footer from '@/components/global/footer/Footer';
import { navbarData } from '@/components/global/navbar/NavbarData';
import { footerData } from '@/components/global/footer/FooterData';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar data={navbarData} />
      <main>
        <Hero />
        <Intro />
        {/* Additional sections will be added here */}
      </main>
      <Footer data={footerData} />
    </div>
  );
}