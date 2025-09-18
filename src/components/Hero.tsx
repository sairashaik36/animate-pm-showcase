import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowRight } from 'lucide-react';
import profileImage from "../asserts/saira_profile.jpeg"
import resumtLink from "../asserts/Saira_Bhanu_PM_Resume.pdf"

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
    link.href = resumtLink;
    link.download = 'Saira_Bhanu_Shaik_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Hero Content - Clean 2-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="animate-fade-in">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">
                    Saira Bhanu Shaik
                  </span>
                </h1>
              </div>
              
              <div className="animate-fade-in animate-stagger-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                  Product Manager & AI SaaS Expert
                </h2>
              </div>
              
              <div className="animate-fade-in animate-stagger-2">
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
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
                    className="group glow-primary text-base px-8 py-6"
                  >
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                  
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    size="lg"
                    className="group text-base px-8 py-6"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="order-1 lg:order-2 animate-slide-up animate-stagger-2">
              <div className="relative mx-auto w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 hero-gradient rounded-full opacity-20 blur-3xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-3">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
                    <img
                      src={profileImage}
                      alt="Saira Bhanu Shaik - Product Manager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights - Clean 3-column grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Expertise */}
            <div className="animate-fade-in animate-stagger-3">
              <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Key Expertise</h3>
                  <p className="text-muted-foreground text-sm">Core competencies</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/15 to-primary/5 rounded-xl p-4 text-center border border-primary/20 hover:border-primary/30 transition-colors">
                    <p className="font-semibold text-primary">Product Strategy</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/15 to-primary/5 rounded-xl p-4 text-center border border-primary/20 hover:border-primary/30 transition-colors">
                    <p className="font-semibold text-primary">AI/ML Integration</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/15 to-primary/5 rounded-xl p-4 text-center border border-primary/20 hover:border-primary/30 transition-colors">
                    <p className="font-semibold text-primary">Digital Commerce</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="animate-fade-in animate-stagger-4">
              <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Experience</h3>
                  <p className="text-muted-foreground text-sm">Professional journey</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-accent/15 to-accent/5 rounded-xl p-5 text-center border border-accent/20 hover:border-accent/30 transition-colors">
                    <p className="font-bold text-2xl text-accent mb-1">3+ Years</p>
                    <p className="text-sm text-muted-foreground font-medium">Product Management</p>
                  </div>
                  <div className="bg-gradient-to-r from-accent/15 to-accent/5 rounded-xl p-5 text-center border border-accent/20 hover:border-accent/30 transition-colors">
                    <p className="font-bold text-lg text-accent mb-1">Enterprise Scale</p>
                    <p className="text-sm text-muted-foreground font-medium">Implementations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialization */}
            <div className="animate-fade-in animate-stagger-5 sm:col-span-2 lg:col-span-1">
              <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Specialization</h3>
                  <p className="text-muted-foreground text-sm">Focus areas</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-4 text-center border border-primary/30 hover:border-primary/40 transition-colors">
                    <p className="font-semibold text-foreground">ONDC Solutions</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-4 text-center border border-primary/30 hover:border-primary/40 transition-colors">
                    <p className="font-semibold text-foreground">AI-Powered Products</p>
                  </div>
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-4 text-center border border-primary/30 hover:border-primary/40 transition-colors">
                    <p className="font-semibold text-sm text-foreground">Saas Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;