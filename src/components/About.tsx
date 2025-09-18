import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mail, Phone, Linkedin, User, Award, GraduationCap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                About{' '}
                <span className="gradient-text">Me</span>
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Passionate Product Manager driving innovation in AI SaaS and digital commerce
              </p>
            </div>
          </div>

          {/* Main Content - 2-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-16">
            {/* Left Column - Story */}
            <div className="animate-slide-left space-y-6">
              <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold gradient-text">My Journey</h3>
                </div>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-base lg:text-lg">
                    As a Product Manager with 3+ years of experience, I specialize in building 
                    AI-powered SaaS solutions and ONDC (Open Network for Digital Commerce) 
                    products that transform how businesses operate in the digital economy.
                  </p>
                  <p className="text-base lg:text-lg">
                    At Adya AI, I've successfully onboarded 6 enterprise clients and launched 
                    multiple AI conversational agents, including voice agents that improved 
                    automation by 20% and reduced reporting turnaround by 50%.
                  </p>
                  <p className="text-base lg:text-lg">
                    My expertise spans the entire product lifecycle - from strategy and roadmapping 
                    to client onboarding and compliance. I'm passionate about leveraging technology 
                    to solve complex business challenges and drive scalable growth.
                  </p>
                  <p className="text-base lg:text-lg">
                    With a strong technical background in QA and automation, I bridge the gap 
                    between technical teams and business stakeholders, ensuring products not 
                    only meet market needs but exceed user expectations.
                  </p>
                </div>
              </div>

              {/* Leadership Highlights */}
              <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold">Leadership & Recognition</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-medium">ONDC Domain Expert</div>
                      <div className="text-sm text-muted-foreground">
                        Onboarded 6 enterprise clients across multiple business domains
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-medium">Cross-Functional Leader</div>
                      <div className="text-sm text-muted-foreground">
                        Directed product delivery across engineering, QA, design, and client stakeholders
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                    <div>
                      <div className="font-medium">Intern of the Month</div>
                      <div className="text-sm text-muted-foreground">
                        Recognized at Eunimart for exceptional quality deliverables (2022)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact & Stats */}
            <div className="animate-slide-right space-y-6 flex flex-col">
              {/* Contact Card */}
              <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold">Contact Information</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/30 transition-colors">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Ongole, Andhra Pradesh, India</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/30 transition-colors">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="mailto:sairashaik36@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      sairashaik36@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/30 transition-colors">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href="tel:+917569316623" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 7569316623
                    </a>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20 hover:border-primary/30 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary flex-shrink-0" />
                    <a 
                      href="https://linkedin.com/in/sairabhanu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/sairabhanu
                    </a>
                  </div>
                </div>
              </div>

              {/* Key Stats */}
              <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold">Key Achievements</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-primary/15 to-primary/5 rounded-xl p-5 text-center border border-primary/20 hover:border-primary/30 transition-colors">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">6+</div>
                    <div className="text-sm text-muted-foreground font-medium">Enterprise Clients</div>
                  </div>
                  <div className="bg-gradient-to-r from-primary/15 to-primary/5 rounded-xl p-5 text-center border border-primary/20 hover:border-primary/30 transition-colors">
                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">3+</div>
                    <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-r from-accent/15 to-accent/5 rounded-xl p-5 text-center border border-accent/20 hover:border-accent/30 transition-colors">
                    <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">50%</div>
                    <div className="text-sm text-muted-foreground font-medium">Reporting Improvement</div>
                  </div>
                  <div className="bg-gradient-to-r from-accent/15 to-accent/5 rounded-xl p-5 text-center border border-accent/20 hover:border-accent/30 transition-colors">
                    <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-muted-foreground font-medium">Compliance Rate</div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold">Education</h3>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20 hover:border-primary/30 transition-colors">
                  <div className="font-semibold text-lg mb-2">B.Tech, Electronics & Communication Engineering</div>
                  <div className="text-muted-foreground mb-1">PACE Institute of Technology and Sciences</div>
                  <div className="text-sm text-muted-foreground">2019 – 2023 | 80%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;