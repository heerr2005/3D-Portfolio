import SplineBackground from '@/components/SplineBackground';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <SplineBackground />
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
};

export default Index;
