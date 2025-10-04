import React from 'react';
import { Shield, Bell, User, Heart, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface QuickActionsProps {
  className?: string;
  style?: React.CSSProperties;
}

const quickActions = [
  { 
    icon: Bell, 
    label: "Alerts", 
    count: 2, 
    variant: "secondary" as const,
    description: "Safety updates"
  },
  { 
    icon: User, 
    label: "Profile", 
    variant: "outline" as const,
    description: "Digital ID"
  },
  { 
    icon: Heart, 
    label: "Medical", 
    variant: "outline" as const,
    description: "Health info"
  },
  { 
    icon: Phone, 
    label: "Contacts", 
    variant: "outline" as const,
    description: "Emergency"
  }
];

const QuickActions: React.FC<QuickActionsProps> = ({ className = "", style }) => {
  return (
    <Card className={`${className} p-4 bg-gradient-subtle shadow-card border-0`} style={style}>
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Quick Access</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action, index) => (
          <Button
            key={action.label}
            variant={action.variant}
            className={`
              h-20 flex flex-col items-center gap-2 p-3 relative
              transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5
              animate-scale-in
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {action.count && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-emergency rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-emergency-foreground">
                  {action.count}
                </span>
              </div>
            )}
            
            <action.icon className="w-6 h-6" />
            <div className="text-center">
              <p className="text-xs font-medium">{action.label}</p>
              <p className="text-xs opacity-70">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default QuickActions;