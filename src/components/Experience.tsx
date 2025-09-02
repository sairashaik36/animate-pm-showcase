import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Adya AI",
      role: "Associate Product Manager",
      duration: "Apr 2023 – Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading product management for AI SaaS solutions and ONDC digital commerce platforms",
      achievements: [
        "Onboarded 6 enterprise clients as ONDC Network Participants",
        "Launched AI Voice Agent improving automation by 20%",
        "Built AI Data Analyst Agent reducing reporting turnaround by 50%",
        "Designed AI Research Agent boosting accuracy by 30%",
        "Deployed CX Automation Agent reducing support tickets by 30%",
        "Successfully enabled clients to process thousands of daily orders seamlessly"
      ],
      domains: ["ONDC Product Management", "AI SaaS Product Management", "Go-To-Market Strategy"],
      animationClass: "animate-slide-left"
    },
    {
      company: "Eunimart",
      role: "Software QA Intern",
      duration: "Aug 2022 – Apr 2023",
      location: "Hyderabad",
      type: "Internship",
      description: "Quality assurance and testing for ONDC retail and logistics platforms",
      achievements: [
        "Tested ONDC retail & logistics platforms for order flows and settlements",
        "Built regression & UAT test suites improving defect detection by 35%",
        "Reduced reconciliation exceptions by 20% in go-live releases",
        "Awarded 'Intern of the Month' for quality deliverables"
      ],
      domains: ["Quality Assurance", "ONDC Testing", "Test Automation"],
      animationClass: "animate-slide-right"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey building innovative AI products and ONDC solutions
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`${exp.animationClass} animate-stagger-${index + 1}`}>
              <Card className="portfolio-card overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="h-5 w-5 text-primary" />
                        <h3 className="text-2xl font-bold">{exp.company}</h3>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                      
                      <h4 className="text-xl font-semibold text-primary mb-3">{exp.role}</h4>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{exp.description}</p>
                    </div>
                  </div>

                  {/* Domains */}
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Key Domains
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.domains.map((domain, idx) => (
                        <Badge key={idx} variant="outline" className="text-primary border-primary/20">
                          {domain}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="font-semibold mb-4">Key Achievements</h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;