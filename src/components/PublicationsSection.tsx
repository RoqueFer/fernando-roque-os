import { TerminalWindow } from './TerminalWindow';
import { BookOpen, Calendar, ExternalLink, Users } from 'lucide-react';

const publications = [
  {
    id: 'PUB_001',
    title: 'Automação de Processos em Engenharia de Software: Uma Abordagem Prática',
    authors: ['Fernando D. Roque', 'Prof. Dr. João Silva'],
    venue: 'Revista Brasileira de Engenharia de Software',
    date: '2024-02-15',
    type: 'JOURNAL_ARTICLE',
    status: 'PUBLISHED',
    url: 'https://example.com/pub1',
    abstract: 'Este artigo apresenta uma análise abrangente sobre técnicas de automação de processos aplicadas ao desenvolvimento de software, com foco em metodologias ágeis e DevOps.'
  },
  {
    id: 'PUB_002',
    title: 'Impacto do Software Livre na Educação Tecnológica',
    authors: ['Fernando D. Roque'],
    venue: 'Anais do Congresso Brasileiro de Informática na Educação',
    date: '2023-11-20',
    type: 'CONFERENCE_PAPER',
    status: 'PUBLISHED',
    url: 'https://example.com/pub2',
    abstract: 'Investigação sobre como o uso de software livre influencia o aprendizado e desenvolvimento de competências em cursos de tecnologia.'
  },
  {
    id: 'PUB_003',
    title: 'Visão Computacional Aplicada a Sistemas de Autoatendimento: Caso AI-Totem',
    authors: ['Fernando D. Roque', 'Equipe de Pesquisa UTFPR'],
    venue: 'Workshop de Inteligência Artificial - UTFPR',
    date: '2024-04-10',
    type: 'WORKSHOP_PAPER',
    status: 'UNDER_REVIEW',
    url: '#',
    abstract: 'Apresentação do desenvolvimento e implementação do sistema AI-Totem, explorando técnicas de YOLO para detecção de produtos em ambientes comerciais.'
  },
  {
    id: 'PUB_004',
    title: 'Cloud Computing e SaaS: Perspectivas para Pequenas e Médias Empresas',
    authors: ['Fernando D. Roque'],
    venue: 'Medium - Publicação Técnica',
    date: '2024-01-08',
    type: 'BLOG_POST',
    status: 'PUBLISHED',
    url: 'https://medium.com/@FDroque/cloud-saas-pme',
    abstract: 'Análise das vantagens e desafios da adoção de soluções em nuvem por PMEs, com foco em custos e escalabilidade.'
  }
];

export const PublicationsSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PUBLISHED':
        return 'status-operational';
      case 'UNDER_REVIEW':
        return 'terminal-glow-primary';
      case 'DRAFT':
        return 'terminal-glow';
      default:
        return 'terminal-glow-accent';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'JOURNAL_ARTICLE':
        return 'terminal-glow-secondary';
      case 'CONFERENCE_PAPER':
        return 'terminal-glow-primary';
      case 'WORKSHOP_PAPER':
        return 'terminal-glow';
      case 'BLOG_POST':
        return 'terminal-glow-accent';
      default:
        return 'terminal-glow';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="max-w-7xl w-full space-y-8">
        <TerminalWindow title="PUBLICATION_ARCHIVE:/PUB/" glowColor="accent">
          <div className="space-y-6">
            <div className="font-terminal text-sm terminal-glow">
              SCANNING_PUBLICATION_DATABASE... | ENTRIES_FOUND: {publications.length}
            </div>
            
            <div className="space-y-6">
              {publications.map((pub) => (
                <div key={pub.id} className="terminal-panel terminal-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <BookOpen className="w-5 h-5 terminal-glow-accent" />
                        <span className="text-lg font-terminal terminal-glow-accent">
                          {pub.id}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-terminal ${getStatusColor(pub.status)}`}>
                          [{pub.status}]
                        </span>
                        <span className={`text-xs font-terminal ${getTypeColor(pub.type)}`}>
                          {pub.type}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-terminal terminal-glow-primary mb-3">
                        {pub.title}
                      </h3>
                      
                      <div className="space-y-2 text-sm font-terminal">
                        <div className="flex items-center space-x-2">
                          <Users className="w-3 h-3 terminal-glow" />
                          <span className="terminal-glow">
                            AUTHORS: {pub.authors.join(', ')}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3 terminal-glow" />
                            <span className="terminal-glow">
                              PUBLISHED: {new Date(pub.date).toLocaleDateString('pt-BR')}
                            </span>
                          </div>
                          
                          <span className="text-muted-foreground">
                            VENUE: {pub.venue}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/20 p-3 terminal-border">
                      <div className="text-xs font-terminal terminal-glow-secondary mb-2">
                        ABSTRACT:
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">
                        {pub.abstract}
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      {pub.status === 'PUBLISHED' && pub.url !== '#' && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-terminal-accent text-xs font-terminal inline-flex items-center"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          ESTABLISH_CONNECTION_TO:[{pub.venue.split(' ')[0].toUpperCase()}]
                        </a>
                      )}
                      
                      {pub.status === 'UNDER_REVIEW' && (
                        <span className="btn-terminal text-xs font-terminal opacity-50">
                          PEER_REVIEW_IN_PROGRESS
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="terminal-panel terminal-border-secondary p-4">
                <div className="text-sm font-terminal terminal-glow-secondary mb-2">
                  TOTAL_PUBLICATIONS:
                </div>
                <div className="text-2xl font-terminal terminal-glow-primary">
                  {publications.length}
                </div>
              </div>

              <div className="terminal-panel terminal-border-primary p-4">
                <div className="text-sm font-terminal terminal-glow-primary mb-2">
                  PUBLISHED:
                </div>
                <div className="text-2xl font-terminal terminal-glow-secondary">
                  {publications.filter(p => p.status === 'PUBLISHED').length}
                </div>
              </div>

              <div className="terminal-panel terminal-border p-4">
                <div className="text-sm font-terminal terminal-glow mb-2">
                  UNDER_REVIEW:
                </div>
                <div className="text-2xl font-terminal terminal-glow-accent">
                  {publications.filter(p => p.status === 'UNDER_REVIEW').length}
                </div>
              </div>

              <div className="terminal-panel terminal-border-accent p-4">
                <div className="text-sm font-terminal terminal-glow-accent mb-2">
                  H-INDEX:
                </div>
                <div className="text-2xl font-terminal terminal-glow">
                  {Math.max(1, Math.floor(publications.filter(p => p.status === 'PUBLISHED').length / 2))}
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <div className="font-terminal text-sm terminal-glow">
                ARCHIVE_SCAN_COMPLETE | CONTINUOUS_RESEARCH_ACTIVE
              </div>
              <a 
                href="https://medium.com/@FDroque"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal-accent font-terminal mt-4 inline-block"
              >
                ACCESS_FULL_RESEARCH_ARCHIVE
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};