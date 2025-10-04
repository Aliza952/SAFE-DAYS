import React from 'react';
import { MapPin, Shield, Users, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface SafetyMapProps {
  className?: string;
  style?: React.CSSProperties;
}

// Mock data for demonstration
const mockLocation = { lat: 40.7128, lng: -74.0060, city: "New York City" };
const mockSafeZones = [
  { id: 1, name: "Times Square", risk: "low", people: 1200 },
  { id: 2, name: "Central Park", risk: "low", people: 800 },
  { id: 3, name: "Financial District", risk: "medium", people: 600 },
];

const SafetyMap: React.FC<SafetyMapProps> = ({ className = "", style }) => {
  return (
    <Card className={`${className} relative overflow-hidden bg-gradient-subtle shadow-card border-0`} style={style}>
      {/* Map Placeholder with Grid Pattern */}
      <div className="h-64 bg-gradient-to-br from-primary-soft to-secondary-soft relative overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Current Location Indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-6 h-6 bg-primary rounded-full animate-pulse-glow flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-foreground rounded-full" />
            </div>
            {/* Ripple Effect */}
            <div className="absolute inset-0 w-6 h-6 border-2 border-primary rounded-full animate-ping opacity-50" />
          </div>
        </div>

        {/* Safe Zone Indicators */}
        {mockSafeZones.map((zone, index) => (
          <div
            key={zone.id}
            className="absolute animate-scale-in"
            style={{
              top: `${20 + index * 15}%`,
              left: `${25 + index * 20}%`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
              zone.risk === 'low' ? 'bg-secondary' : 'bg-orange-400'
            }`}>
              <div className="w-2 h-2 bg-card rounded-full" />
            </div>
          </div>
        ))}

        {/* Geo-fence Boundary */}
        <div className="absolute inset-8 border-2 border-dashed border-primary opacity-40 rounded-lg" />
      </div>

      {/* Location Info */}
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            {mockLocation.city}
          </span>
          <Shield className="w-4 h-4 text-secondary ml-auto" />
        </div>

        {/* Safety Zones */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Nearby Safe Zones
          </h4>
          {mockSafeZones.slice(0, 2).map((zone) => (
            <div key={zone.id} className="flex items-center justify-between text-sm">
              <span className="text-foreground">{zone.name}</span>
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{zone.people}</span>
                <div className={`w-2 h-2 rounded-full ${
                  zone.risk === 'low' ? 'bg-secondary' : 'bg-orange-400'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SafetyMap;