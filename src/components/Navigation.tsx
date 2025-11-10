import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass' : ''
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Hevill</h1>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <Button
          onClick={() => scrollToSection('contact')}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Get in Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
