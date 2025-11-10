const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 text-primary">About Me</h2>
          
          <div className="glass rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a creative developer passionate about pushing the boundaries of web experiences.
              With a focus on 3D design, interactive interfaces, and cutting-edge technologies,
              I create digital experiences that captivate and inspire.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              My work combines technical expertise with artistic vision, resulting in projects
              that are not only functional but also visually stunning. From immersive 3D environments
              to sleek web applications, I bring ideas to life with precision and creativity.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass rounded-xl p-6 border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="glass rounded-xl p-6 border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="glass rounded-xl p-6 border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-2">∞</h3>
                <p className="text-muted-foreground">Creative Ideas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
