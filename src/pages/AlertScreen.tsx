import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle, Heart, Shield, Car, UserX, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const AlertScreen = () => {
  const [selectedIncident, setSelectedIncident] = useState<string | null>(null);
  const { toast } = useToast();

  const incidentTypes = [
    {
      id: 'medical',
      icon: Heart,
      title: 'Medical Emergency',
      description: 'Injury, illness, or health crisis',
      color: 'emergency',
      urgency: 'Critical'
    },
    {
      id: 'theft',
      icon: UserX,
      title: 'Theft / Crime',
      description: 'Robbery, theft, or suspicious activity',
      color: 'emergency',
      urgency: 'High'
    },
    {
      id: 'accident',
      icon: Car,
      title: 'Accident',
      description: 'Traffic accident or injury',
      color: 'emergency',
      urgency: 'High'
    },
    {
      id: 'safety',
      icon: Shield,
      title: 'Safety Concern',
      description: 'Feeling unsafe or threatened',
      color: 'primary',
      urgency: 'Medium'
    }
  ];

  const handleIncidentSelect = (incidentId: string) => {
    setSelectedIncident(incidentId);
  };

  const handleSendAlert = () => {
    if (!selectedIncident) return;
    
    const incident = incidentTypes.find(i => i.id === selectedIncident);
    toast({
      title: "🚨 Alert Sent Successfully",
      description: `${incident?.title} reported. Authorities dispatched to your location.`,
      duration: 5000,
    });
    
    // Reset selection
    setSelectedIncident(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur-sm border-b border-border/50">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-bold text-foreground">Report Incident</h1>
      </header>

      <main className="p-4 space-y-6 max-w-md mx-auto">
        {/* Emergency Notice */}
        <Card className="p-4 bg-gradient-to-r from-emergency/10 to-emergency/5 border-emergency/20 animate-fade-in">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-emergency mt-1" />
            <div>
              <h2 className="font-semibold text-foreground mb-1">
                Emergency Reporting
              </h2>
              <p className="text-sm text-muted-foreground">
                Your location will be shared with local authorities. 
                Choose the type of incident below.
              </p>
            </div>
          </div>
        </Card>

        {/* Incident Types */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Select Incident Type
          </h3>
          
          {incidentTypes.map((incident, index) => (
            <Card
              key={incident.id}
              className={`
                p-4 cursor-pointer transition-all duration-300 border-2 animate-scale-in
                ${selectedIncident === incident.id 
                  ? 'border-emergency shadow-emergency bg-emergency/5' 
                  : 'border-border hover:border-border/70 hover:shadow-card'
                }
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleIncidentSelect(incident.id)}
            >
              <div className="flex items-center gap-4">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${incident.color === 'emergency' ? 'bg-emergency/20' : 'bg-primary/20'}
                `}>
                  <incident.icon className={`
                    w-6 h-6 
                    ${incident.color === 'emergency' ? 'text-emergency' : 'text-primary'}
                  `} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">
                      {incident.title}
                    </h4>
                    <span className={`
                      text-xs px-2 py-1 rounded-full font-medium
                      ${incident.urgency === 'Critical' ? 'bg-emergency/20 text-emergency' :
                        incident.urgency === 'High' ? 'bg-orange-100 text-orange-600' :
                        'bg-primary/20 text-primary'}
                    `}>
                      {incident.urgency}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {incident.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        {selectedIncident && (
          <div className="space-y-3 animate-fade-in">
            <Button
              onClick={handleSendAlert}
              variant="emergency"
              className="w-full h-14 text-lg font-bold"
            >
              <AlertTriangle className="w-6 h-6 mr-2" />
              Send Emergency Alert
            </Button>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setSelectedIncident(null)}
            >
              Cancel
            </Button>
          </div>
        )}

        {/* Emergency Contacts */}
        <Card className="p-4 bg-gradient-subtle shadow-card border-0">
          <h3 className="font-semibold text-foreground mb-3">
            Emergency Contacts
          </h3>
          <div className="space-y-2">
            <Button variant="soft" className="w-full justify-start">
              <Phone className="w-4 h-4 mr-3" />
              <div className="text-left">
                <p className="font-medium">Local Police</p>
                <p className="text-xs text-muted-foreground">911 (US) / 112 (EU)</p>
              </div>
            </Button>
            
            <Button variant="soft" className="w-full justify-start">
              <Heart className="w-4 h-4 mr-3" />
              <div className="text-left">
                <p className="font-medium">Medical Emergency</p>
                <p className="text-xs text-muted-foreground">Ambulance Services</p>
              </div>
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default AlertScreen;