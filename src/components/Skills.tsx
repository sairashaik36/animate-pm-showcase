import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  ShoppingCart,
  TestTube, 
  BarChart3, 
  Users, 
  Settings,
  Code,
  Palette,
  Database,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management & Strategy",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Roadmapping", "Agile/Scrum", "GTM Strategy", "Stakeholder Alignment", "Product Analytics"],
      color: "text-blue-600",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "ONDC Expertise",
      icon: <ShoppingCart className="h-6 w-6" />,
      skills: ["Buyer & Seller NP", "Logistics NP", "IGM & RSP", "Compliance Management", "Digital Commerce"],
      color: "text-green-600",
      bgColor: "bg-green-500/10"
    },
    {
      title: "AI SaaS Products",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Conversational Agents", "Analytics Agents", "Healthcare Virtual Agents", "Enterprise Knowledge Agents", "Voice Agents"],
      color: "text-purple-600",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Technical & QA",
      icon: <TestTube className="h-6 w-6" />,
      skills: ["Selenium", "JMeter", "SQL", "API Validation", "UAT Design", "Regression Testing"],
      color: "text-red-600",
      bgColor: "bg-red-500/10"
    },
    {
      title: "UX & Research",
      icon: <Palette className="h-6 w-6" />,
      skills: ["Wireframing (Figma)", "Prototyping", "Usability Testing", "User Research", "Design Systems"],
      color: "text-pink-600",
      bgColor: "bg-pink-500/10"
    },
    {
      title: "Analytics & Tools",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ["Jira", "Google Sheets", "Excel", "Git", "Postman", "Data Analysis"],
      color: "text-orange-600",
      bgColor: "bg-orange-500/10"
    }
  ];

  const certifications = [
    {
      title: "Product Management with Generative AI",
      issuer: "Physics Wallah",
      year: "2025",
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "Selenium Certification",
      issuer: "Udemy",
      year: "2023",
      icon: <Code className="h-5 w-5" />
    }
  ];

  const languages = ["English", "Hindi", "Telugu"];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive skill set spanning product management, AI technologies, and digital commerce
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`animate-bounce-in animate-stagger-${index + 1}`}
            >
              <Card className="portfolio-card h-full group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg ${category.bgColor} mb-4`}>
                    <div className={category.color}>
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="animate-slide-left">
            <Card className="portfolio-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="text-primary mt-1">
                        {cert.icon}
                      </div>
                      <div>
                        <div className="font-medium">{cert.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Languages & Highlights */}
          <div className="animate-slide-right space-y-6">
            {/* Languages */}
            <Card className="portfolio-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <Badge key={index} variant="outline" className="text-primary border-primary/20">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Leadership Highlights */}
            <Card className="portfolio-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Leadership & Recognition
                </h3>
                <div className="space-y-3">
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;