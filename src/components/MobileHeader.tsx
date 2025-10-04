import React from 'react';
import { Wifi, Battery, Signal, Menu, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileHeaderProps {
  title?: string;
  showMenu?: boolean;
  className?: string;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ 
  title = "SAFE-DAYS", 
  showMenu = true,
  className = ""
}) => {
  return (
    <header className={`${className} flex items-center justify-between p-4 bg-card/80 backdrop-blur-sm border-b border-border/50`}>
      {/* Left side - Menu or back */}
      <div className="flex items-center gap-3">
        {showMenu && (
          <Button variant="ghost" size="sm" className="p-2">
            <Menu className="w-5 h-5" />
          </Button>
        )}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">S</span>
          </div>
          <span className="font-bold text-foreground tracking-wide">{title}</span>
        </div>
      </div>

      {/* Right side - Status icons */}
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4 text-muted-foreground" />
        <Wifi className="w-4 h-4 text-muted-foreground" />
        <Battery className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground ml-2">9:41</span>
      </div>
    </header>
  );
};

export default MobileHeader;