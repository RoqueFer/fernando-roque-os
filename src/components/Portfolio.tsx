import { useState, useEffect } from 'react';
import { StatusBar } from './StatusBar';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';
import { ContactSection } from './ContactSection';
import { BlogSection } from './BlogSection';
import { CertificationsSection } from './CertificationsSection';
import { PublicationsSection } from './PublicationsSection';
import { Footer } from './Footer';

export const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    // Boot sequence simulation
    const bootTimer = setTimeout(() => {
      setIsBooting(false);
    }, 2000);

    return () => clearTimeout(bootTimer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HeroSection onNavigate={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection />;
      case 'blog':
        return <BlogSection />;
      case 'certifications':
        return <CertificationsSection />;
      case 'publications':
        return <PublicationsSection />;
      default:
        return <HeroSection onNavigate={setActiveSection} />;
    }
  };

  if (isBooting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4 boot-sequence">
          <div className="text-4xl font-terminal terminal-glow-primary">
            FERNANDO_ROQUE_OS
          </div>
          <div className="text-lg font-terminal terminal-glow">
            INITIALIZING_SYSTEM...
          </div>
          <div className="flex justify-center space-x-1">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-8 bg-primary terminal-glow-primary animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-sm font-terminal text-muted-foreground">
            LOADING_PORTFOLIO_DATA... 
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background crt-screen">
      <StatusBar />
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="pt-28 pb-20">
        {renderSection()}
      </main>
      
      <Footer />
    </div>
  );
};