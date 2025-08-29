import { TerminalWindow } from './TerminalWindow';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 'PROJ_001',
    name: 'Website Boletim Paranaense de Geologia',
    description: 'O projeto consiste na repaginação completa do site da BPG Brasil, resolvendo problemas como design ultrapassado, falta de responsividade e má diagramação. A reestruturação visa modernizar a aparência do site, melhorar a usabilidade e a experiência do usuário, e otimizar sua função como principal "cartão de visita" do grupo de pesquisa.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
    github: 'https://github.com/RoqueFer/bpgbrasil',
    status: 'PRODUCTION',
    completion: 95
  },
  {
    id: 'PROJ_002',
    name: 'AI-Totem',
    description: 'O AI-Totem é um sistema de autoatendimento (self-checkout) baseado em visão computacional que substitui os tradicionais leitores de código de barras, utilizando a detecção de objetos com YOLO para identificar produtos de supermercado automaticamente.',
    technologies: ['Python', 'YOLO', 'Computer Vision', 'AI/ML'],
    github: 'https://github.com/RoqueFer/TotemAI',
    status: 'DEVELOPMENT',
    completion: 75
  },
  {
    id: 'PROJ_003',
    name: 'Portfolio Terminal OS',
    description: 'Interface de portfólio inspirada em terminal CRT com estética retrofuturista. Desenvolvido com React e TypeScript, implementa animações de scanlines, efeitos de brilho e navegação estilo sistema operacional dos anos 80.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: '#',
    status: 'ACTIVE',
    completion: 100
  }
];

export const ProjectsSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PRODUCTION':
        return 'terminal-glow-secondary';
      case 'DEVELOPMENT':
        return 'terminal-glow-primary';
      case 'ACTIVE':
        return 'terminal-glow-accent';
      default:
        return 'terminal-glow';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="max-w-7xl w-full space-y-8">
        <TerminalWindow title="ARCHIVES:/PROJECTS/" glowColor="primary">
          <div className="space-y-6">
            <div className="font-terminal text-sm terminal-glow">
              TOTAL_PROJECTS: {projects.length} | STATUS: SCANNING_REPOSITORY...
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="terminal-panel terminal-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-terminal terminal-glow-primary uppercase">
                          {project.id}
                        </h3>
                        <p className="text-sm font-terminal terminal-glow mt-1">
                          {project.name}
                        </p>
                      </div>
                      <div className={`text-xs font-terminal ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </div>

                    <p className="text-sm text-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-terminal terminal-glow-secondary">
                        TECH_STACK:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="text-xs font-terminal px-2 py-1 terminal-border text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-terminal">
                        <span className="terminal-glow">COMPLETION:</span>
                        <span className="terminal-glow-primary">{project.completion}%</span>
                      </div>
                      <div className="w-full bg-muted h-1 terminal-border">
                        <div 
                          className="h-full bg-primary terminal-glow-primary transition-all duration-500"
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      {project.github !== '#' && (
                        <Button
                          size="sm"
                          className="btn-terminal-primary text-xs"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          REPOSITORY
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className="btn-terminal-secondary text-xs"
                        onClick={() => {/* TODO: Modal with project details */}}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        DETAILS
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <div className="font-terminal text-sm terminal-glow">
                END_OF_ARCHIVE_SCAN | MORE_PROJECTS_LOADING...
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};