import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Smartphone, Monitor, Globe, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-soft via-background to-secondary-soft">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-5xl font-bold text-foreground">SAFE-DAYS</h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Smart Tourist Safety & Incident Response System
            </p>
            
            <p className="text-lg text-foreground mb-12 max-w-3xl mx-auto">
              A modern, intuitive platform that keeps travelers safe with real-time monitoring, 
              instant emergency response, and blockchain-secured digital identity.
            </p>
          </div>

          {/* Demo Links */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-subtle shadow-glow border-0 animate-scale-in">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Mobile App</h3>
                  <p className="text-muted-foreground mb-6">
                    Experience the tourist-friendly interface with live location tracking, 
                    SOS button, and digital ID passport.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Link to="/mobile">
                    <Button className="w-full" size="lg">
                      <Smartphone className="w-5 h-5 mr-2" />
                      View Mobile App
                    </Button>
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <Link to="/mobile/alert">
                      <Button variant="outline" size="sm" className="w-full">
                        Alert Screen
                      </Button>
                    </Link>
                    <Link to="/mobile/profile">
                      <Button variant="outline" size="sm" className="w-full">
                        Digital ID
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-subtle shadow-glow border-0 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Monitor className="w-8 h-8 text-secondary" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Authorities Dashboard</h3>
                  <p className="text-muted-foreground mb-6">
                    Real-time monitoring dashboard for police, medical, and emergency services 
                    with incident response controls.
                  </p>
                </div>
                
                <Link to="/dashboard">
                  <Button variant="secondary" size="lg" className="w-full">
                    <Monitor className="w-5 h-5 mr-2" />
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card-soft">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Coverage",
                description: "Works worldwide with local emergency services integration"
              },
              {
                icon: Shield,
                title: "Blockchain Security",
                description: "Tamper-proof digital identity with immutable verification"
              },
              {
                icon: Users,
                title: "Real-time Monitoring",
                description: "Live location tracking and crowd density analytics"
              },
              {
                icon: Heart,
                title: "Instant Response",
                description: "One-tap emergency alerts directly to local authorities"
              },
              {
                icon: Smartphone,
                title: "Mobile First",
                description: "Intuitive mobile interface designed for stressed situations"
              },
              {
                icon: Monitor,
                title: "Authority Dashboard",
                description: "Comprehensive control panel for emergency response teams"
              }
            ].map((feature, index) => (
              <Card key={feature.title} className="p-6 bg-card shadow-card border-0 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">SAFE-DAYS</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Smart Tourist Safety & Incident Response System - Keeping travelers safe worldwide
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
