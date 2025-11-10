import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div
        className={`text-center z-10 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-glow">
          HEVILL
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto px-6">
          Creative Developer & Digital Artist
          <br />
          Crafting Immersive Digital Experiences
        </p>
        <div className="flex gap-4 justify-center px-6">
          <Button
            onClick={scrollToWork}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View Work
          </Button>
          <Button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
