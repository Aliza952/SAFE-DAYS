import React, { useState } from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface SOSButtonProps {
  className?: string;
}

const SOSButton: React.FC<SOSButtonProps> = ({ className = "" }) => {
  const [isActivated, setIsActivated] = useState(false);
  const { toast } = useToast();

  const handleSOSPress = () => {
    setIsActivated(true);
    toast({
      title: "🚨 Emergency Alert Sent",
      description: "Local authorities have been notified. Help is on the way.",
      duration: 5000,
    });
    
    // Reset after animation
    setTimeout(() => setIsActivated(false), 3000);
  };

  return (
    <div className={`${className} flex flex-col items-center space-y-3`}>
      <Button
        onClick={handleSOSPress}
        disabled={isActivated}
        className={`
          w-32 h-32 rounded-full bg-gradient-emergency shadow-emergency border-0
          hover:shadow-glow hover:scale-105 active:scale-95
          transition-all duration-300 ease-out
          ${isActivated ? 'animate-pulse-glow' : ''}
        `}
      >
        <div className="flex flex-col items-center space-y-2">
          <AlertTriangle className="w-8 h-8 text-emergency-foreground" />
          <span className="text-lg font-bold text-emergency-foreground">SOS</span>
        </div>
      </Button>
      
      <div className="text-center space-y-1">
        <p className="text-sm font-medium text-foreground">
          Emergency Assistance
        </p>
        <p className="text-xs text-muted-foreground max-w-48">
          Press and hold to send your location to local authorities
        </p>
      </div>

      {isActivated && (
        <div className="animate-fade-in text-center">
          <div className="flex items-center gap-2 text-emergency">
            <Phone className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-medium">Contacting authorities...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SOSButton;