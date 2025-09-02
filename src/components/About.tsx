import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate Product Manager driving innovation in AI SaaS and digital commerce
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="animate-slide-left">
            <Card className="portfolio-card p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a Product Manager with 3+ years of experience, I specialize in building 
                  AI-powered SaaS solutions and ONDC (Open Network for Digital Commerce) 
                  products that transform how businesses operate in the digital economy.
                </p>
                <p>
                  At Adya AI, I've successfully onboarded 6 enterprise clients and launched 
                  multiple AI conversational agents, including voice agents that improved 
                  automation by 20% and reduced reporting turnaround by 50%.
                </p>
                <p>
                  My expertise spans the entire product lifecycle - from strategy and roadmapping 
                  to client onboarding and compliance. I'm passionate about leveraging technology 
                  to solve complex business challenges and drive scalable growth.
                </p>
                <p>
                  With a strong technical background in QA and automation, I bridge the gap 
                  between technical teams and business stakeholders, ensuring products not 
                  only meet market needs but exceed user expectations.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Info & Stats */}
          <div className="animate-slide-right space-y-6">
            {/* Contact Card */}
            <Card className="portfolio-card p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Ongole, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:sairashaik36@gmail.com" className="hover:text-primary transition-colors">
                    sairashaik36@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+917569316623" className="hover:text-primary transition-colors">
                    +91 7569316623
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a 
                    href="https://linkedin.com/in/sairabhanu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/sairabhanu
                  </a>
                </div>
              </div>
            </Card>

            {/* Key Stats */}
            <Card className="portfolio-card p-6">
              <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50%</div>
                  <div className="text-sm text-muted-foreground">Reporting Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Compliance Rate</div>
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="portfolio-card p-6">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-2">
                <div className="font-medium">B.Tech, Electronics & Communication Engineering</div>
                <div className="text-muted-foreground">PACE Institute of Technology and Sciences</div>
                <div className="text-muted-foreground">2019 – 2023 | 80%</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;