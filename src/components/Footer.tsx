import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Zap,
  Code
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Book Ride", href: "/booking" },
    { name: "Data Insights", href: "/insights" },
    { name: "About Team", href: "/about" },
    { name: "Safety Guidelines", href: "#" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Contact Support", href: "#" },
    { name: "Driver Registration", href: "#" },
    { name: "Student Verification", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:team@smartcampusrides.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <span className="text-primary-foreground font-bold text-xl">🚦</span>
              </div>
              <span className="font-bold text-xl text-card-foreground">Smart Campus Rides</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered ride booking platform built by MBU students for the campus community. 
              Making transportation smarter, safer, and more affordable.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-primary/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-card-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">
                  Mohan Babu University<br />
                  Tirupati, Andhra Pradesh
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a 
                  href="mailto:team@smartcampusrides.com"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  team@smartcampusrides.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">+91 9876543210</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code className="h-4 w-4" />
            <span>Built at Hackathon 2025 ✨</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="#" className="hover:text-primary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-smooth">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-primary transition-smooth">
              Cookie Policy
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 Smart Campus Rides. All rights reserved.
          </div>
        </div>

        {/* Hackathon Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-hero rounded-full text-primary-foreground text-sm font-medium">
            <Zap className="h-4 w-4" />
            <span>Proudly developed during MBU TechFest Hackathon 2025</span>
            <Zap className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;