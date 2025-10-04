import React from 'react';
import { ArrowLeft, Shield, QrCode, Globe, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  const userData = {
    name: "Alex Johnson",
    id: "TD-2024-001847",
    nationality: "United States",
    issueDate: "March 15, 2024",
    expiryDate: "March 15, 2025",
    currentLocation: "New York City, NY",
    verificationLevel: "Verified",
    emergencyContact: "+1 (555) 123-4567",
    email: "alex.johnson@email.com"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center gap-3 p-4 bg-card/80 backdrop-blur-sm border-b border-border/50">
        <Button variant="ghost" size="sm" className="p-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-bold text-foreground">Digital ID</h1>
      </header>

      <main className="p-4 space-y-6 max-w-md mx-auto">
        {/* Digital ID Card */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-soft to-secondary shadow-glow border-0 animate-scale-in">
          {/* Passport-style pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} />
          </div>
          
          <div className="relative p-6 text-primary-foreground">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span className="font-bold text-lg">SAFE-DAYS</span>
              </div>
              <QrCode className="w-8 h-8" />
            </div>

            {/* Main Info */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">{userData.name}</h2>
                <p className="text-primary-foreground/80 text-sm">
                  Tourist Digital ID
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-primary-foreground/70">ID Number</p>
                  <p className="font-mono font-semibold">{userData.id}</p>
                </div>
                <div>
                  <p className="text-primary-foreground/70">Status</p>
                  <Badge className="bg-secondary text-secondary-foreground mt-1">
                    {userData.verificationLevel}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-primary-foreground/70">Issue Date</p>
                  <p className="font-semibold">{userData.issueDate}</p>
                </div>
                <div>
                  <p className="text-primary-foreground/70">Expires</p>
                  <p className="font-semibold">{userData.expiryDate}</p>
                </div>
              </div>
            </div>

            {/* Blockchain verification */}
            <div className="mt-6 pt-4 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-primary-foreground/80">
                  Blockchain Verified • Immutable Record
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Personal Information */}
        <Card className="p-4 bg-gradient-subtle shadow-card border-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Personal Information
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Nationality</p>
                <p className="text-sm text-muted-foreground">{userData.nationality}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Current Location</p>
                <p className="text-sm text-muted-foreground">{userData.currentLocation}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Emergency Contacts */}
        <Card className="p-4 bg-gradient-subtle shadow-card border-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-emergency" />
            Emergency Information
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Emergency Contact</p>
                <p className="text-sm text-muted-foreground">{userData.emergencyContact}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">{userData.email}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="default" className="w-full">
            <QrCode className="w-4 h-4 mr-2" />
            Show QR Code
          </Button>
          
          <Button variant="outline" className="w-full">
            Edit Profile
          </Button>
          
          <Button variant="soft" className="w-full">
            <Shield className="w-4 h-4 mr-2" />
            Security Settings
          </Button>
        </div>

        {/* Verification Info */}
        <Card className="p-4 bg-secondary/10 border-secondary/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-secondary mt-0.5" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">
                Blockchain Secured
              </h4>
              <p className="text-xs text-muted-foreground">
                Your digital identity is secured using blockchain technology, 
                ensuring tamper-proof verification and global recognition by 
                authorities and emergency services.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Profile;