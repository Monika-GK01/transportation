import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="pt-16 min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-transport mb-4">404</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Route Not Found
          </h1>
          <p className="text-muted-foreground text-lg">
            Looks like this ride destination doesn't exist. Let's get you back on track!
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button variant="hero" size="lg" className="w-full">
              <Home className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/booking">
            <Button variant="outline" size="lg" className="w-full">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Book a Ride
            </Button>
          </Link>
        </div>

        <div className="mt-8 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Smart Tip:</strong> Use our AI-powered booking system to find the best routes to your destination!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
