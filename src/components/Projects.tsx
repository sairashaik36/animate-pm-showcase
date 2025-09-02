import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Bot, ShoppingCart, TestTube, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Conversational Agents Suite",
      description: "Comprehensive suite of AI agents including Voice Agent, Data Analyst Agent, Research Agent, and CX Automation Agent deployed across enterprise clients.",
      icon: <Bot className="h-6 w-6" />,
      achievements: [
        "20% improvement in automation containment",
        "50% reduction in reporting turnaround time",
        "30% boost in accuracy and traceability",
        "30% reduction in human support tickets"
      ],
      technologies: ["AI/ML", "Natural Language Processing", "Voice Recognition", "Analytics"],
      metrics: "6 Enterprise Clients",
      category: "AI SaaS"
    },
    {
      title: "ONDC Network Participant Platform",
      description: "End-to-end ONDC-compliant platform enabling buyer, seller, logistics, and financial nodes for seamless digital commerce operations.",
      icon: <ShoppingCart className="h-6 w-6" />,
      achievements: [
        "Onboarded 6 enterprise clients successfully",
        "Processing thousands of daily orders",
        "100% compliance with ONDC protocols",
        "Integrated IGM & RSP modules for dispute resolution"
      ],
      technologies: ["ONDC Protocol", "Digital Commerce", "API Integration", "Compliance"],
      metrics: "Thousands of Orders Daily",
      category: "Digital Commerce"
    },
    {
      title: "Automated Testing Framework",
      description: "Comprehensive testing suite for ONDC retail and logistics platforms with regression testing and UAT automation capabilities.",
      icon: <TestTube className="h-6 w-6" />,
      achievements: [
        "35% improvement in defect detection",
        "20% reduction in reconciliation exceptions",
        "Automated order flows testing",
        "Built comprehensive UAT scripts"
      ],
      technologies: ["Selenium", "Test Automation", "Regression Testing", "UAT"],
      metrics: "35% Detection Improvement",
      category: "Quality Assurance"
    },
    {
      title: "Enterprise Client Onboarding System",
      description: "Streamlined onboarding system for enterprise clients with certification workflows, validation suites, and compliance monitoring.",
      icon: <Users className="h-6 w-6" />,
      achievements: [
        "6 enterprise clients onboarded",
        "100% compliance achievement",
        "Automated certification workflows",
        "Real-time compliance monitoring"
      ],
      technologies: ["Workflow Automation", "Compliance Management", "Client Portals", "Analytics"],
      metrics: "100% Compliance Rate",
      category: "Client Management"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI SaaS": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Digital Commerce": "bg-green-500/10 text-green-600 border-green-500/20",
      "Quality Assurance": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Client Management": "bg-orange-500/10 text-orange-600 border-orange-500/20"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Projects & Case Studies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transforming businesses through innovative AI solutions and digital commerce platforms
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`animate-bounce-in animate-stagger-${index + 1} group`}
            >
              <Card className="portfolio-card h-full flex flex-col transition-all duration-300 hover:scale-105">
                <div className="p-6 flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {project.icon}
                      </div>
                      <div>
                        <Badge className={getCategoryColor(project.category)}>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-primary">{project.metrics}</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Key Results</h4>
                    <div className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer - Hidden for now since no external links available */}
                <div className="px-6 pb-6 pt-0">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="outline" size="sm" disabled className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="animate-fade-in animate-stagger-5">
            <p className="text-muted-foreground mb-6">
              Interested in learning more about these projects?
            </p>
            <Button 
              size="lg" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glow-primary"
            >
              Let's Discuss
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;