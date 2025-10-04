import React from 'react';
import MobileHeader from '@/components/MobileHeader';
import SafetyMap from '@/components/SafetyMap';
import SOSButton from '@/components/SOSButton';
import QuickActions from '@/components/QuickActions';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <MobileHeader />
      
      <main className="p-4 space-y-6 max-w-md mx-auto">
        {/* Status Card */}
        <Card className="p-4 bg-gradient-subtle shadow-card border-0 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="font-semibold text-foreground">Safety Status</span>
            </div>
            <Badge className="bg-secondary/20 text-secondary border-secondary/30">
              Safe Zone
            </Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">Last Check</p>
              <p className="text-sm font-medium text-foreground">2 min ago</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <Users className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">Nearby</p>
              <p className="text-sm font-medium text-foreground">247 travelers</p>
            </div>
            
            <div className="space-y-1">
              <div className="w-4 h-4 bg-secondary rounded-full mx-auto" />
              <p className="text-xs text-muted-foreground">Risk Level</p>
              <p className="text-sm font-medium text-secondary">Low</p>
            </div>
          </div>
        </Card>

        {/* Map Component */}
        <SafetyMap className="animate-fade-in" style={{ animationDelay: '0.1s' }} />

        {/* SOS Button */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <SOSButton />
        </div>

        {/* Quick Actions */}
        <QuickActions className="animate-fade-in" style={{ animationDelay: '0.3s' }} />

        {/* Recent Activity */}
        <Card className="p-4 bg-gradient-subtle shadow-card border-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="font-semibold text-foreground mb-3">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  Entered safe zone: Central Park Area
                </p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div className="flex-1">
                <p className="text-sm text-foreground">
                  Safety check completed successfully
                </p>
                <p className="text-xs text-muted-foreground">15 minutes ago</p>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Home;