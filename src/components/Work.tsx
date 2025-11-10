import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Immersive 3D Gallery',
    description: 'Interactive 3D art gallery featuring spatial audio and real-time lighting',
    tags: ['Three.js', 'WebGL', 'React'],
  },
  {
    title: 'AI-Powered Design Tool',
    description: 'Machine learning interface for automated design generation',
    tags: ['AI/ML', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Virtual Reality Experience',
    description: 'Immersive VR environment for architectural visualization',
    tags: ['WebXR', 'A-Frame', 'Blender'],
  },
  {
    title: 'Dynamic Data Visualization',
    description: 'Real-time 3D data visualization platform for complex datasets',
    tags: ['D3.js', 'WebGL', 'Node.js'],
  },
];

const Work = () => {
  return (
    <section id="work" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-12 text-primary">Featured Work</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-6 flex items-center justify-center">
                <ExternalLink className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
