import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Lightbulb, 
  Users, 
  Target,
  Zap,
  Award,
  Calendar
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Arjun Kumar",
      role: "Full Stack Developer & Team Lead",
      description: "Final year CSE student passionate about AI/ML and web development. Led the technical architecture and AI model integration.",
      avatar: "👨‍💻",
      skills: ["React", "Node.js", "Python", "Machine Learning"],
      github: "arjunkumar",
      linkedin: "arjun-kumar-dev"
    },
    {
      name: "Priya Sharma", 
      role: "AI/ML Engineer & Data Analyst",
      description: "Specialized in demand prediction algorithms and data analysis. Built the core ML models for route optimization.",
      avatar: "👩‍🔬",
      skills: ["Python", "TensorFlow", "Data Science", "Statistics"],
      github: "priyasharma",
      linkedin: "priya-sharma-ml"
    },
    {
      name: "Rahul Patel",
      role: "Backend Developer & System Architect", 
      description: "Expert in scalable backend systems and real-time tracking. Designed the microservices architecture.",
      avatar: "👨‍🔧",
      skills: ["Node.js", "MongoDB", "AWS", "System Design"],
      github: "rahulpatel",
      linkedin: "rahul-patel-backend"
    },
    {
      name: "Sneha Reddy",
      role: "UI/UX Designer & Frontend Developer",
      description: "Created the intuitive user interface and seamless user experience. Focused on mobile-first design principles.",
      avatar: "👩‍🎨", 
      skills: ["React", "Figma", "UI/UX", "Design Systems"],
      github: "snehareddy",
      linkedin: "sneha-reddy-design"
    }
  ];

  const projectHighlights = [
    {
      icon: Zap,
      title: "AI-Powered Demand Prediction",
      description: "Machine learning algorithms analyze historical data, weather patterns, and campus events to predict ride demand with 94% accuracy."
    },
    {
      icon: Target,
      title: "Smart Route Optimization", 
      description: "Real-time traffic analysis and GPS tracking optimize routes to reduce travel time by 25% and fuel consumption by 30%."
    },
    {
      icon: Users,
      title: "Community-Driven Platform",
      description: "Built by students for students, with features specifically designed for campus life and student budget constraints."
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "React, Node.js, Python ML models, real-time WebSocket connections, and cloud-native architecture for scalability."
    }
  ];

  const achievements = [
    "🏆 Best Innovation Award - MBU TechFest 2025",
    "🚀 Reduced average wait time from 12 to 3 minutes", 
    "💰 Saved students over ₹50,000 in transportation costs",
    "🌱 Reduced carbon footprint by 40% through ride sharing",
    "📱 Achieved 4.8/5 user satisfaction rating",
    "⚡ 99.8% system uptime since launch"
  ];

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-transport text-transport-foreground">
            🏆 Hackathon 2025 Winner
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About Smart Campus Rides
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Born from innovation and driven by student needs, Smart Campus Rides represents 
            the future of university transportation. Our hackathon project has evolved into 
            a real solution that's transforming how MBU students commute.
          </p>
        </div>

        {/* Project Story */}
        <Card className="p-8 mb-12 shadow-custom-lg border-transport/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-card-foreground mb-6 flex items-center gap-2">
                <Lightbulb className="h-8 w-8 text-transport" />
                Our Innovation Story
              </h2>
              <p className="text-muted-foreground mb-4">
                It all started during a rainy evening when our team member waited 2 hours for transportation 
                from MBU to Tirupati. We realized students deserved better - predictable, affordable, 
                and reliable rides.
              </p>
              <p className="text-muted-foreground mb-6">
                Within 48 hours of the hackathon, we built an AI-powered platform that not only solves 
                transportation woes but also creates a sustainable ecosystem for student drivers and passengers.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-transport">48hrs</div>
                  <div className="text-sm text-muted-foreground">Development Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">94%</div>
                  <div className="text-sm text-muted-foreground">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2500+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Key Achievements</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <span className="text-sm text-card-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Project Highlights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectHighlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-custom-md hover:shadow-custom-lg transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Four passionate computer science students from MBU who turned a weekend hackathon 
            idea into a campus-wide transportation revolution.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 shadow-custom-md text-center hover:shadow-custom-lg transition-smooth group">
                <div className="text-4xl mb-4">{member.avatar}</div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{member.name}</h3>
                <p className="text-sm text-transport font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center gap-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <Card className="p-8 mb-12 shadow-custom-lg">
          <h2 className="text-3xl font-bold text-card-foreground text-center mb-8 flex items-center justify-center gap-2">
            <Code className="h-8 w-8 text-primary" />
            Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Frontend</h3>
              <div className="space-y-2">
                {["React", "TypeScript", "Tailwind CSS", "Vite", "Recharts"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="block">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Backend & AI</h3>
              <div className="space-y-2">
                {["Node.js", "Python", "TensorFlow", "WebSockets", "MongoDB"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="block">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Infrastructure</h3>
              <div className="space-y-2">
                {["AWS", "Docker", "Redis", "GPS APIs", "Real-time DB"].map((tech, index) => (
                  <Badge key={index} variant="outline" className="block">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center shadow-custom-lg bg-gradient-card border-transport/20">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-transport mr-2" />
            <Badge className="bg-transport text-transport-foreground">
              Built at Hackathon 2025 ✨
            </Badge>
          </div>
          <h2 className="text-2xl font-bold text-card-foreground mb-4">
            Want to Collaborate or Learn More?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always excited to connect with fellow innovators, potential collaborators, 
            or anyone interested in the intersection of AI and transportation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="transport" size="lg">
              <Github className="h-5 w-5 mr-2" />
              View Source Code
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="h-5 w-5 mr-2" />
              Contact Team
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;