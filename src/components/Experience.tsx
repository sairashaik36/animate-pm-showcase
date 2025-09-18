import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, TrendingUp, Award, Target, Users, Zap } from 'lucide-react';

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
      icon: Building,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
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
      icon: Target,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              My journey building innovative AI products and ONDC solutions that drive real business impact
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 hidden lg:block"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-primary to-primary/60 rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                  
                  {/* Experience Card */}
                  <div className={`ml-0 lg:ml-20 ${index % 2 === 0 ? 'lg:mr-20' : 'lg:ml-20'}`}>
                    <Card className={`${exp.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden`}>
                      <div className="p-8 lg:p-10">
                        {/* Header Section */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                                <IconComponent className="h-6 w-6" />
                              </div>
                              <div>
                                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                                  {exp.company}
                                </h3>
                                <Badge 
                                  variant="secondary" 
                                  className="mt-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                                >
                                  {exp.type}
                                </Badge>
                              </div>
                            </div>
                            
                            <h4 className="text-2xl font-semibold text-primary mb-4 group-hover:text-primary/80 transition-colors">
                              {exp.role}
                            </h4>
                            
                            <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                              <div className="flex items-center gap-2 bg-background/50 px-3 py-2 rounded-lg">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span className="font-medium">{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 bg-background/50 px-3 py-2 rounded-lg">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="font-medium">{exp.location}</span>
                              </div>
                            </div>
                            
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                              {exp.description}
                            </p>
                          </div>
                        </div>

                        {/* Domains Section */}
                        <div className="mb-8">
                          <h5 className="font-bold text-lg mb-4 flex items-center gap-3 text-foreground">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            Key Domains
                          </h5>
                          <div className="flex flex-wrap gap-3">
                            {exp.domains.map((domain, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="px-4 py-2 text-sm font-medium bg-background/50 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all"
                              >
                                {domain}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements Section */}
                        <div>
                          <h5 className="font-bold text-lg mb-6 flex items-center gap-3 text-foreground">
                            <Award className="h-5 w-5 text-primary" />
                            Key Achievements
                          </h5>
                          <div className="grid md:grid-cols-2 gap-4">
                            {exp.achievements.map((achievement, idx) => (
                              <div 
                                key={idx} 
                                className="flex items-start gap-4 p-4 rounded-xl bg-background/60 hover:bg-background/80 transition-all group/achievement"
                              >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center group-hover/achievement:from-primary/30 group-hover/achievement:to-primary/20 transition-all">
                                  <Zap className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-muted-foreground leading-relaxed group-hover/achievement:text-foreground transition-colors">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;