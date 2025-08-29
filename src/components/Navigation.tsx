import { cn } from '@/lib/utils';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'home', label: '[HOME]', command: '/root' },
  { id: 'about', label: '[/ABOUT]', command: '/user/profile' },
  { id: 'projects', label: '[/PROJECTS]', command: '/archives' },
  { id: 'skills', label: '[/SKILLS]', command: '/diagnostics' },
  { id: 'contact', label: '[/CONTACT.MSG]', command: '/comms' },
  { id: 'blog', label: '[/LOG]', command: '/system/logs' },
  { id: 'certifications', label: '[/AUTH]', command: '/clearance' },
  { id: 'publications', label: '[/PUB]', command: '/archive' },
];

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="fixed top-12 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm terminal-border h-16 flex items-center justify-center">
      <div className="flex items-center space-x-8 font-terminal text-sm">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              'transition-all duration-200 hover:scale-105',
              'command-line uppercase tracking-wider',
              activeSection === item.id 
                ? 'terminal-glow-primary text-primary' 
                : 'terminal-glow text-foreground hover:text-primary'
            )}
            title={item.command}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};