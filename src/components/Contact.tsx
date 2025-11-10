import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-primary text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Create Something Amazing</h3>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? I'm always interested in hearing about new opportunities
                and collaborations. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:hello@hevill.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@hevill.com</span>
                </a>
                
                <div className="flex gap-4 mt-6">
                  <a
                    href="#"
                    className="glass p-3 rounded-lg hover:border-primary/50 transition-all"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="glass p-3 rounded-lg hover:border-primary/50 transition-all"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="glass p-3 rounded-lg hover:border-primary/50 transition-all"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-card border-border"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
