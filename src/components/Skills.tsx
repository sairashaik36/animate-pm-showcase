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
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill set spanning product management, AI technologies, and digital commerce
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`animate-bounce-in animate-stagger-${index + 1}`}
            >
              <Card className="portfolio-card h-full group hover:scale-[1.02] hover:shadow-xl transition-all duration-500 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <div className="p-8 h-full flex flex-col">
                  {/* Icon and Title Section */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`inline-flex p-4 rounded-xl ${category.bgColor} flex-shrink-0`}>
                      <div className={category.color}>
                        {category.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Skills Section */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary" 
                          className="text-sm px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default font-medium border border-border/50 hover:border-primary/50"
                        >
                          {skill}
                        </Badge>
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

export default Skills;