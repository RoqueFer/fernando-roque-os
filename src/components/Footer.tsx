import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GITHUB',
      icon: Github,
      url: 'https://github.com/RoqueFer',
      status: 'CONN_ESTABLISHED'
    },
    {
      name: 'LINKEDIN',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/fernandodestriroque/',
      status: 'CONN_ESTABLISHED'
    },
    {
      name: 'EMAIL',
      icon: Mail,
      url: 'mailto:fdestriroque@gmail.com',
      status: 'DIRECT_LINK'
    },
    {
      name: 'MEDIUM',
      icon: BookOpen,
      url: 'https://medium.com/@FDroque',
      status: 'PUBLICATION_ACTIVE'
    }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm terminal-border-primary h-16">
      <div className="flex items-center justify-between px-6 h-full font-terminal text-xs">
        <div className="flex items-center space-x-6">
          <span className="terminal-glow">
            SYSTEM_STATUS: OPERATIONAL
          </span>
          <span className="text-muted-foreground">
            COPYRIGHT © {currentYear} FERNANDO_D_ROQUE | ALL_RIGHTS_RESERVED
          </span>
        </div>

        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 terminal-glow hover:text-primary transition-colors"
              title={`${link.name}: ${link.status}`}
            >
              <link.icon className="w-3 h-3" />
              <span className="hidden sm:inline">
                {link.name}: {link.status}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};