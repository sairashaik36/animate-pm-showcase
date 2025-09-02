import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Send, 
  Download,
  ExternalLink 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Saira_Bhanu_Shaik_Resume.pdf';
    link.click();
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sairashaik36@gmail.com",
      href: "mailto:sairashaik36@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 7569316623",
      href: "tel:+917569316623"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Ongole, Andhra Pradesh, India",
      href: null
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sairabhanu",
      href: "https://linkedin.com/in/sairabhanu"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to discuss your next product challenge or explore collaboration opportunities? I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-left">
            <Card className="portfolio-card">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="Tell me about your project or how we can work together..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group glow-primary"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          {/* Contact Info & Resume */}
          <div className="animate-slide-right space-y-6">
            {/* Contact Information */}
            <Card className="portfolio-card">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                            {info.href.startsWith('http') && (
                              <ExternalLink className="inline ml-1 h-3 w-3" />
                            )}
                          </a>
                        ) : (
                          <div className="font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Resume Download */}
            <Card className="portfolio-card">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive overview of my experience, skills, and achievements.
                </p>
                <Button
                  onClick={downloadResume}
                  size="lg"
                  className="w-full group glow-primary"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download PDF Resume
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="portfolio-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">6+</div>
                    <div className="text-xs text-muted-foreground">Enterprise Clients</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">50%</div>
                    <div className="text-xs text-muted-foreground">Efficiency Improvement</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-primary/5">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-muted-foreground">Compliance Rate</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;