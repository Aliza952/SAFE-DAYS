import React, { useState } from 'react';
import { 
  Users, AlertTriangle, Shield, Phone, Heart, Car, 
  MapPin, Clock, Activity, TrendingUp, Filter 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const statsData = [
    { 
      label: 'Active Tourists', 
      value: '2,847', 
      change: '+12%', 
      icon: Users, 
      color: 'primary' 
    },
    { 
      label: 'Active Incidents', 
      value: '3', 
      change: '-25%', 
      icon: AlertTriangle, 
      color: 'emergency' 
    },
    { 
      label: 'Safe Zones', 
      value: '47', 
      change: '+2%', 
      icon: Shield, 
      color: 'secondary' 
    },
    { 
      label: 'Response Teams', 
      value: '18', 
      change: '0%', 
      icon: Phone, 
      color: 'primary' 
    }
  ];

  const recentIncidents = [
    {
      id: 1,
      type: 'Medical Emergency',
      location: 'Times Square, Manhattan',
      time: '2 min ago',
      priority: 'Critical',
      status: 'Responding',
      icon: Heart
    },
    {
      id: 2,
      type: 'Theft Report',
      location: 'Central Park West',
      time: '15 min ago',
      priority: 'High',
      status: 'Investigating',
      icon: AlertTriangle
    },
    {
      id: 3,
      type: 'Traffic Accident',
      location: 'Brooklyn Bridge',
      time: '32 min ago',
      priority: 'Medium',
      status: 'Resolved',
      icon: Car
    }
  ];

  const crowdData = [
    { area: 'Times Square', density: 'High', count: 1247, risk: 'Medium' },
    { area: 'Central Park', density: 'Medium', count: 892, risk: 'Low' },
    { area: 'Financial District', density: 'Low', count: 234, risk: 'Low' },
    { area: 'Brooklyn Bridge', density: 'High', count: 1089, risk: 'Medium' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">SAFE-DAYS</h1>
                <p className="text-sm text-muted-foreground">Emergency Response Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                <Activity className="w-3 h-3 mr-1" />
                System Online
              </Badge>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <Card key={stat.label} className="p-6 bg-gradient-subtle shadow-card border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <TrendingUp className="w-3 h-3 text-secondary" />
                    <span className="text-xs text-secondary font-medium">{stat.change}</span>
                  </div>
                </div>
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center
                  ${stat.color === 'emergency' ? 'bg-emergency/20' : 
                    stat.color === 'secondary' ? 'bg-secondary/20' : 'bg-primary/20'}
                `}>
                  <stat.icon className={`
                    w-6 h-6 
                    ${stat.color === 'emergency' ? 'text-emergency' : 
                      stat.color === 'secondary' ? 'text-secondary' : 'text-primary'}
                  `} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Real-time Map */}
          <Card className="p-6 bg-gradient-subtle shadow-card border-0 animate-fade-in">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Real-time Tourist Tracking
            </h3>
            
            {/* Map Placeholder */}
            <div className="h-80 bg-gradient-to-br from-primary-soft to-secondary-soft rounded-lg relative overflow-hidden mb-4">
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
                    linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }} />
              </div>

              {/* Tourist Markers */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"
                  style={{
                    top: `${20 + (i * 10)}%`,
                    left: `${15 + (i * 8)}%`
                  }}
                />
              ))}

              {/* Incident Markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-emergency rounded-full animate-pulse-glow" />
              <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-muted-foreground">Tourists (2,847)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emergency rounded-full" />
                <span className="text-muted-foreground">Critical Incidents (1)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-400 rounded-full" />
                <span className="text-muted-foreground">Alerts (2)</span>
              </div>
            </div>
          </Card>

          {/* Recent Incidents */}
          <Card className="p-6 bg-gradient-subtle shadow-card border-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-emergency" />
                Active Incidents
              </h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>

            <div className="space-y-4">
              {recentIncidents.map((incident, index) => (
                <div key={incident.id} className="p-4 bg-card rounded-lg border border-border/50 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start gap-3">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      ${incident.priority === 'Critical' ? 'bg-emergency/20' : 
                        incident.priority === 'High' ? 'bg-orange-100' : 'bg-primary/20'}
                    `}>
                      <incident.icon className={`
                        w-5 h-5 
                        ${incident.priority === 'Critical' ? 'text-emergency' : 
                          incident.priority === 'High' ? 'text-orange-600' : 'text-primary'}
                      `} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">{incident.type}</h4>
                        <Badge className={`
                          ${incident.priority === 'Critical' ? 'bg-emergency/20 text-emergency border-emergency/30' :
                            incident.priority === 'High' ? 'bg-orange-100 text-orange-600 border-orange-200' :
                            'bg-primary/20 text-primary border-primary/30'}
                        `}>
                          {incident.priority}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{incident.location}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{incident.time}</span>
                        </div>
                        
                        <Button 
                          size="sm" 
                          variant={incident.priority === 'Critical' ? 'emergency' : 'default'}
                          className="h-8"
                        >
                          {incident.status === 'Resolved' ? 'View Report' : 'Respond'}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Crowd Analytics */}
        <Card className="p-6 bg-gradient-subtle shadow-card border-0 mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-secondary" />
            Crowd Density Analytics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {crowdData.map((area, index) => (
              <div key={area.area} className="p-4 bg-card rounded-lg border border-border/50 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="font-semibold text-foreground mb-2">{area.area}</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Density</span>
                    <Badge className={`
                      ${area.density === 'High' ? 'bg-orange-100 text-orange-600 border-orange-200' :
                        area.density === 'Medium' ? 'bg-primary/20 text-primary border-primary/30' :
                        'bg-secondary/20 text-secondary border-secondary/30'}
                    `}>
                      {area.density}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Count</span>
                    <span className="text-sm font-medium text-foreground">{area.count}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Risk</span>
                    <div className={`w-2 h-2 rounded-full ${
                      area.risk === 'Medium' ? 'bg-orange-400' : 'bg-secondary'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;