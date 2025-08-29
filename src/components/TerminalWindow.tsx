import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'accent';
}

export const TerminalWindow = ({ 
  title, 
  children, 
  className,
  glowColor = 'primary' 
}: TerminalWindowProps) => {
  const borderClass = {
    primary: 'terminal-border-primary',
    secondary: 'terminal-border-secondary',
    accent: 'border-accent'
  }[glowColor];

  const textClass = {
    primary: 'terminal-glow-primary',
    secondary: 'terminal-glow-secondary', 
    accent: 'terminal-glow-accent'
  }[glowColor];

  return (
    <div className={cn(
      'terminal-panel terminal-flicker',
      borderClass,
      className
    )}>
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-current">
        <h2 className={cn(
          'font-terminal text-lg uppercase tracking-wider',
          textClass
        )}>
          [{title}]
        </h2>
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full terminal-glow-accent"></div>
          <div className="w-2 h-2 bg-primary rounded-full terminal-glow-primary"></div>
          <div className="w-2 h-2 bg-secondary rounded-full terminal-glow-secondary"></div>
        </div>
      </div>
      {children}
    </div>
  );
};