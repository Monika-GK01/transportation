import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { TrendingUp, Users, MapPin, Clock, Zap, Calendar } from "lucide-react";

const Insights = () => {
  // Sample data for charts
  const hourlyData = [
    { hour: '6 AM', rides: 45, demand: 'Low' },
    { hour: '7 AM', rides: 120, demand: 'High' },
    { hour: '8 AM', rides: 180, demand: 'Peak' },
    { hour: '9 AM', rides: 95, demand: 'Medium' },
    { hour: '10 AM', rides: 60, demand: 'Low' },
    { hour: '11 AM', rides: 75, demand: 'Medium' },
    { hour: '12 PM', rides: 110, demand: 'High' },
    { hour: '1 PM', rides: 85, demand: 'Medium' },
    { hour: '2 PM', rides: 70, demand: 'Low' },
    { hour: '3 PM', rides: 90, demand: 'Medium' },
    { hour: '4 PM', rides: 140, demand: 'High' },
    { hour: '5 PM', rides: 200, demand: 'Peak' },
    { hour: '6 PM', rides: 220, demand: 'Peak' },
    { hour: '7 PM', rides: 160, demand: 'High' },
    { hour: '8 PM', rides: 100, demand: 'Medium' },
    { hour: '9 PM', rides: 80, demand: 'Medium' },
    { hour: '10 PM', rides: 45, demand: 'Low' }
  ];

  const destinationData = [
    { destination: 'Tirupati Railway', rides: 2800, percentage: 35, color: '#ea580c' },
    { destination: 'Tirupati City', rides: 2200, percentage: 27.5, color: '#2563eb' },
    { destination: 'Shopping Mall', rides: 1600, percentage: 20, color: '#16a34a' },
    { destination: 'Bus Station', rides: 800, percentage: 10, color: '#eab308' },
    { destination: 'Airport', rides: 400, percentage: 5, color: '#8b5cf6' },
    { destination: 'Others', rides: 200, percentage: 2.5, color: '#6b7280' }
  ];

  const weeklyTrend = [
    { day: 'Mon', rides: 850, drivers: 45, utilization: 85 },
    { day: 'Tue', rides: 920, drivers: 48, utilization: 88 },
    { day: 'Wed', rides: 780, drivers: 42, utilization: 82 },
    { day: 'Thu', rides: 1100, drivers: 52, utilization: 92 },
    { day: 'Fri', rides: 1350, drivers: 58, utilization: 95 },
    { day: 'Sat', rides: 650, drivers: 38, utilization: 75 },
    { day: 'Sun', rides: 450, drivers: 32, utilization: 68 }
  ];

  const aiPredictions = [
    { 
      title: "Weekend Rush Prediction",
      description: "High demand expected this Saturday 2-6 PM for temple visits",
      confidence: 94,
      impact: "High",
      suggestion: "Pre-book rides or increase driver incentives"
    },
    {
      title: "Weather Impact Alert", 
      description: "Rain forecast Monday may increase ride demand by 40%",
      confidence: 87,
      impact: "Medium",
      suggestion: "Position more drivers near campus"
    },
    {
      title: "Holiday Traffic Analysis",
      description: "Festival period approaching - 3x normal demand expected",
      confidence: 96,
      impact: "Very High", 
      suggestion: "Activate surge pricing and recruit temporary drivers"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case 'very high': return 'bg-red-500';
      case 'high': return 'bg-transport';
      case 'medium': return 'bg-warning';
      case 'low': return 'bg-success';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Data Insights Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-powered analytics showing real-time usage patterns, demand predictions, 
            and optimization opportunities for Smart Campus Rides.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 shadow-custom-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Rides Today</p>
                <p className="text-2xl font-bold text-foreground">1,247</p>
                <p className="text-sm text-success">+15% from yesterday</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-custom-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Drivers</p>
                <p className="text-2xl font-bold text-foreground">48</p>
                <p className="text-sm text-transport">92% utilization</p>
              </div>
              <div className="bg-transport/10 p-3 rounded-lg">
                <Users className="h-6 w-6 text-transport" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-custom-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
                <p className="text-2xl font-bold text-foreground">2.8min</p>
                <p className="text-sm text-success">-30% from last week</p>
              </div>
              <div className="bg-success/10 p-3 rounded-lg">
                <Clock className="h-6 w-6 text-success" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-custom-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Revenue Today</p>
                <p className="text-2xl font-bold text-foreground">₹89,240</p>
                <p className="text-sm text-warning">Peak hours active</p>
              </div>
              <div className="bg-warning/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-warning" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Hourly Demand Chart */}
          <Card className="p-6 shadow-custom-lg">
            <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Busiest Hours Analysis
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="hour" 
                    stroke="#64748b"
                    fontSize={12}
                  />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar 
                    dataKey="rides" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Popular Destinations */}
          <Card className="p-6 shadow-custom-lg">
            <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-transport" />
              Popular Destinations
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={destinationData}
                    dataKey="rides"
                    nameKey="destination"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ percentage }) => `${percentage}%`}
                  >
                    {destinationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-2">
              {destinationData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-muted-foreground">{item.destination}</span>
                  </div>
                  <span className="font-medium text-foreground">{item.rides} rides</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Weekly Trends & Driver Utilization */}
        <Card className="p-6 shadow-custom-lg mb-12">
          <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            Weekly Trends & Driver Utilization
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="rides" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  name="Total Rides"
                />
                <Line 
                  type="monotone" 
                  dataKey="utilization" 
                  stroke="hsl(var(--transport))" 
                  strokeWidth={2}
                  name="Utilization %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* AI Predictions */}
        <Card className="p-6 shadow-custom-lg">
          <h3 className="text-xl font-semibold text-card-foreground mb-6 flex items-center gap-2">
            <Zap className="h-5 w-5 text-transport" />
            AI Demand Predictions & Insights
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {aiPredictions.map((prediction, index) => (
              <div 
                key={index}
                className="p-4 border border-border rounded-lg hover:shadow-custom-md transition-smooth"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-medium text-card-foreground">{prediction.title}</h4>
                  <Badge 
                    className={`text-xs ${getImpactColor(prediction.impact)} text-white`}
                  >
                    {prediction.impact}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {prediction.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Confidence:</span>
                    <span className="font-medium text-success">{prediction.confidence}%</span>
                  </div>
                  <div className="p-2 bg-muted/50 rounded text-xs text-card-foreground">
                    💡 {prediction.suggestion}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Insights;