import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: boolean;
}

const FeatureCard = ({ icon: Icon, title, description, accent = false }: FeatureCardProps) => {
  return (
    <div className={`relative group p-6 rounded-xl transition-bounce hover:scale-105 ${
      accent 
        ? "bg-gradient-card border-2 border-transport/20 shadow-transport" 
        : "bg-card border border-border shadow-custom-md"
    } hover:shadow-custom-lg`}>
      {/* Icon */}
      <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${
        accent 
          ? "bg-gradient-transport text-transport-foreground shadow-transport" 
          : "bg-primary text-primary-foreground shadow-custom-sm"
      }`}>
        <Icon className="h-6 w-6" />
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      
      {/* Accent glow effect */}
      {accent && (
        <div className="absolute inset-0 rounded-xl bg-gradient-transport opacity-5 group-hover:opacity-10 transition-smooth pointer-events-none" />
      )}
    </div>
  );
};

export default FeatureCard;