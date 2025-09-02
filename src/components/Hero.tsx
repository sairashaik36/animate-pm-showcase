import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This will be linked to the resume PDF in public folder
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Saira_Bhanu_Shaik_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Saira Bhanu Shaik
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in animate-stagger-1">
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                Product Manager & AI SaaS Expert
              </h2>
            </div>
            
            <div className="animate-fade-in animate-stagger-2">
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-balance">
                Specialized in ONDC digital commerce solutions and AI-powered products. 
                3+ years of experience driving product strategy, client onboarding, and 
                enterprise-scale implementations across India.
              </p>
            </div>

            <div className="animate-fade-in animate-stagger-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={downloadResume}
                  size="lg"
                  className="group glow-primary"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  size="lg"
                  className="group"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="animate-slide-up animate-stagger-2">
            <div className="relative mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 hero-gradient rounded-full opacity-20 blur-3xl" />
              <div className="relative portfolio-card rounded-full overflow-hidden">
                <img
                  src="/profile-image.jpg"
                  alt="Saira Bhanu Shaik - Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;