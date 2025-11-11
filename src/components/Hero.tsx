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
    <section className="min-h-screen flex items-end justify-end relative pb-20 pr-6 md:pb-32 md:pr-16">
      <div
        className={`text-right z-10 transition-all duration-1000 max-w-md ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 text-glow">
          HEVILL
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
          Creative Developer & Digital Artist
          <br />
          Crafting Immersive Digital Experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-end">
          <Button
            onClick={scrollToWork}
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
          >
            View Work
          </Button>
          <Button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
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
