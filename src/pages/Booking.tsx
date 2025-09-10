import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, DollarSign, Zap, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [passengers, setPassengers] = useState("");
  const [rideType, setRideType] = useState("");
  const { toast } = useToast();

  const destinations = [
    { value: "tirupati-city", label: "Tirupati City Center", eta: "25 mins", demand: "high" },
    { value: "tirupati-railway", label: "Tirupati Railway Station", eta: "20 mins", demand: "medium" },
    { value: "tirupati-bus", label: "Tirupati Bus Station", eta: "18 mins", demand: "medium" },
    { value: "chandragiri", label: "Chandragiri", eta: "35 mins", demand: "low" },
    { value: "shopping-mall", label: "Sapthagiri Shopping Mall", eta: "22 mins", demand: "high" },
    { value: "temple", label: "Tirumala Temple", eta: "45 mins", demand: "very-high" },
    { value: "airport", label: "Tirupati Airport", eta: "40 mins", demand: "low" },
  ];

  const rideOptions = [
    { 
      value: "shared", 
      label: "Shared Ride", 
      price: "₹45-65", 
      description: "Share with 2-3 students",
      savings: "Save 40%"
    },
    { 
      value: "express", 
      label: "Express Ride", 
      price: "₹80-120", 
      description: "Direct route, minimal stops",
      time: "20% faster"
    },
    { 
      value: "premium", 
      label: "Premium Ride", 
      price: "₹150-200", 
      description: "AC vehicle, comfortable seats",
      comfort: "Max comfort"
    }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "very-high": return "bg-red-500";
      case "high": return "bg-transport";
      case "medium": return "bg-warning";
      case "low": return "bg-success";
      default: return "bg-muted";
    }
  };

  const getAISuggestedTime = () => {
    const now = new Date();
    const suggested = new Date(now.getTime() + 15 * 60000); // 15 minutes from now
    return suggested.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const handleBookRide = () => {
    if (!fromLocation || !toLocation || !passengers || !rideType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your ride.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Ride Booked Successfully! 🚗",
      description: `Your ${rideType} ride from ${fromLocation} to ${toLocation} has been confirmed. Driver will arrive in 3 minutes.`,
    });
  };

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Book Your Smart Ride
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered booking with real-time pricing and demand prediction. 
              Get the best ride options tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-custom-lg border border-border/50">
                <div className="space-y-8">
                  {/* Route Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Select Your Route
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">From</label>
                        <Select value={fromLocation} onValueChange={setFromLocation}>
                          <SelectTrigger className="shadow-custom-sm">
                            <SelectValue placeholder="MBU Campus (Default)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mbu-main">MBU Main Gate</SelectItem>
                            <SelectItem value="mbu-hostel">MBU Hostel Block</SelectItem>
                            <SelectItem value="mbu-library">MBU Library</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-muted-foreground mb-2 block">To</label>
                        <Select value={toLocation} onValueChange={setToLocation}>
                          <SelectTrigger className="shadow-custom-sm">
                            <SelectValue placeholder="Choose destination" />
                          </SelectTrigger>
                          <SelectContent>
                            {destinations.map((dest) => (
                              <SelectItem key={dest.value} value={dest.value}>
                                <div className="flex items-center justify-between w-full">
                                  <span>{dest.label}</span>
                                  <div className="flex items-center gap-2 ml-4">
                                    <Badge variant="outline" className="text-xs">
                                      {dest.eta}
                                    </Badge>
                                    <div className={`w-2 h-2 rounded-full ${getDemandColor(dest.demand)}`} />
                                  </div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Ride Type Selection */}
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Choose Ride Type
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {rideOptions.map((option) => (
                        <div
                          key={option.value}
                          className={`border rounded-lg p-4 cursor-pointer transition-all ${
                            rideType === option.value
                              ? "border-transport bg-transport/5 shadow-transport"
                              : "border-border hover:border-primary hover:shadow-custom-sm"
                          }`}
                          onClick={() => setRideType(option.value)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3">
                                <div className={`w-4 h-4 rounded-full border-2 ${
                                  rideType === option.value 
                                    ? "border-transport bg-transport" 
                                    : "border-muted-foreground"
                                }`} />
                                <h4 className="font-medium text-card-foreground">{option.label}</h4>
                                <span className="font-bold text-primary">{option.price}</span>
                              </div>
                              <p className="text-sm text-muted-foreground ml-7 mt-1">{option.description}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              {option.savings && (
                                <Badge variant="outline" className="text-success border-success">
                                  {option.savings}
                                </Badge>
                              )}
                              {option.time && (
                                <Badge variant="outline" className="text-transport border-transport">
                                  {option.time}
                                </Badge>
                              )}
                              {option.comfort && (
                                <Badge variant="outline" className="text-primary border-primary">
                                  {option.comfort}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Passengers */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Passengers</label>
                      <Select value={passengers} onValueChange={setPassengers}>
                        <SelectTrigger className="shadow-custom-sm">
                          <SelectValue placeholder="How many?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Passenger</SelectItem>
                          <SelectItem value="2">2 Passengers</SelectItem>
                          <SelectItem value="3">3 Passengers</SelectItem>
                          <SelectItem value="4">4+ Passengers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        AI Suggested Time
                      </label>
                      <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md border">
                        <Zap className="h-4 w-4 text-transport" />
                        <span className="font-medium text-foreground">{getAISuggestedTime()}</span>
                        <Badge variant="outline" className="text-xs text-success border-success">
                          Optimal
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full text-lg py-6"
                    onClick={handleBookRide}
                  >
                    Book Smart Ride Now
                  </Button>
                </div>
              </Card>
            </div>

            {/* Live Info Panel */}
            <div className="space-y-6">
              {/* Live Stats */}
              <Card className="p-6 shadow-custom-md">
                <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-transport" />
                  Live Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Available Drivers</span>
                    <Badge variant="outline" className="text-success border-success">12 Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Avg Wait Time</span>
                    <span className="font-medium text-foreground">3 mins</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Demand</span>
                    <Badge className="bg-transport text-transport-foreground">High</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Price Factor</span>
                    <span className="font-medium text-foreground">1.2x</span>
                  </div>
                </div>
              </Card>

              {/* AI Insights */}
              <Card className="p-6 shadow-custom-md border-transport/20">
                <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-transport" />
                  AI Insights
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-transport/10 rounded-lg">
                    <p className="text-sm text-card-foreground">
                      🎯 Best time to travel: Next 15 minutes for minimal wait
                    </p>
                  </div>
                  <div className="p-3 bg-warning/10 rounded-lg">
                    <p className="text-sm text-card-foreground">
                      📈 High demand to Tirupati expected at 6 PM
                    </p>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg">
                    <p className="text-sm text-card-foreground">
                      💰 Choose shared ride to save ₹30-50
                    </p>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6 shadow-custom-md">
                <h3 className="font-semibold text-card-foreground mb-4">Quick Book</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    MBU → Tirupati Station
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    MBU → Shopping Mall
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule for Tomorrow
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;