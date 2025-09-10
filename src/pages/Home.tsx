import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Brain, 
  DollarSign, 
  Users, 
  Shield,
  TrendingUp,
  Clock,
  Bell
} from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Auto Booking & Tracking",
      description: "Smart GPS tracking with live updates. Know exactly when your ride arrives and track your journey in real-time.",
      accent: true
    },
    {
      icon: Brain,
      title: "AI Demand Prediction",
      description: "Machine learning algorithms predict holiday rush vs. off-peak times, optimizing ride availability when you need it most."
    },
    {
      icon: DollarSign,
      title: "Fair & Transparent Pricing Algorithm",
      description: "Dynamic but fair pricing based on demand, distance, and time. No surge pricing surprises - just transparent, student-friendly rates."
    },
    {
      icon: Users,
      title: "Ride Sharing for Cost Savings",
      description: "Match with fellow students heading the same direction. Split costs and reduce your carbon footprint together."
    },
    {
      icon: Shield,
      title: "Night-time Ride Assurance 🚖",
      description: "Safe, reliable transportation even during late hours. Special safety protocols for night rides with verified drivers."
    }
  ];

  const stats = [
    { label: "Active Students", value: "2,500+", icon: Users },
    { label: "Monthly Rides", value: "15,000+", icon: TrendingUp },
    { label: "Avg. Wait Time", value: "3 mins", icon: Clock },
    { label: "Safety Score", value: "99.8%", icon: Shield }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-transport/90" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Smart Rides. <br />
                <span className="text-transport">Fair Fares.</span> <br />
                Anytime. 🚦
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                AI-powered ride booking for MBU students & drivers. 
                Get where you need to go with intelligent routing, fair pricing, and real-time tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/booking">
                  <Button variant="transport" size="lg" className="text-lg px-8 py-4">
                    Book a Ride Now
                  </Button>
                </Link>
                <Link to="/insights">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                    View Insights
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-transport/20 rounded-2xl blur-3xl transform rotate-6" />
              <img 
                src={heroImage} 
                alt="Smart Campus Transportation" 
                className="relative rounded-2xl shadow-custom-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary rounded-lg mb-3">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Smart Campus Rides?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built by students, for students. Our AI-powered platform makes campus transportation 
              smarter, safer, and more affordable than ever before.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                accent={feature.accent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Notification Preview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay Informed with Smart Notifications
              </h2>
              <p className="text-lg text-muted-foreground">
                Get real-time updates about demand, pricing, and optimal booking times.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-custom-md border border-warning/20">
              <div className="flex items-start space-x-4">
                <div className="bg-warning/10 p-2 rounded-lg">
                  <Bell className="h-5 w-5 text-warning" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-card-foreground mb-1">
                    Holiday Rush Expected Tomorrow
                  </h4>
                  <p className="text-muted-foreground mb-3">
                    Our AI predicts high demand for Tirupati routes tomorrow evening. 
                    Pre-book your ride now to secure your spot and save 15% on regular fares.
                  </p>
                  <Button variant="warning" size="sm">
                    Pre-book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Smart Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of MBU students already using Smart Campus Rides 
            for convenient, affordable transportation.
          </p>
          <Link to="/booking">
            <Button variant="transport" size="lg" className="text-lg px-8 py-4">
              Book Your First Ride
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;