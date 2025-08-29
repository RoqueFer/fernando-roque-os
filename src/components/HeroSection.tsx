import { TerminalWindow } from './TerminalWindow';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <TerminalWindow title="SYSTEM_INITIALIZATION" className="max-w-4xl w-full boot-sequence">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-terminal terminal-glow-primary uppercase tracking-wider">
              FERNANDO_D_ROQUE
            </h1>
            <p className="text-xl md:text-2xl font-terminal terminal-glow-secondary uppercase">
              DESENVOLVEDOR FULLSTACK | ESTUDANTE DE ENGENHARIA DE SOFTWARE
            </p>
            <p className="text-lg font-terminal terminal-glow">
              LOCALIZAÇÃO: CURITIBA_PR_BRASIL
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-xl font-terminal terminal-glow-accent uppercase tracking-wide">
              "CONSTRUINDO CÓDIGO PARA MUDAR O MUNDO"
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button 
                onClick={() => onNavigate('projects')}
                className="btn-terminal-primary font-terminal"
              >
                EXECUTE: VIEW_PROJECTS
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                className="btn-terminal-secondary font-terminal"
              >
                ESTABLISH_CONNECTION
              </Button>
              <a 
                href="/cv_fernando_roque.pdf" 
                download
                className="btn-terminal-accent font-terminal inline-flex items-center justify-center"
              >
                DOWNLOAD: CV_DATA.PDF
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 font-terminal text-sm">
            <div className="terminal-panel terminal-border-secondary p-4">
              <div className="terminal-glow-secondary mb-2">STATUS_CODE: 200</div>
              <div className="text-foreground">SYSTEM_ONLINE</div>
            </div>
            <div className="terminal-panel terminal-border-primary p-4">
              <div className="terminal-glow-primary mb-2">UPTIME: 24/7</div>
              <div className="text-foreground">READY_FOR_DEPLOYMENT</div>
            </div>
            <div className="terminal-panel terminal-border p-4">
              <div className="terminal-glow mb-2">LOCATION: BR_SOUTH</div>
              <div className="text-foreground">TIMEZONE: UTC-3</div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
};