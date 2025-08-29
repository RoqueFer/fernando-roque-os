import { TerminalWindow } from './TerminalWindow';
import { Calendar, Tag, ExternalLink } from 'lucide-react';

const blogPosts = [
  {
    id: 'LOG_001',
    title: 'Implementando Visão Computacional em Sistemas de Autoatendimento',
    date: '2024-01-15',
    tags: ['AI/ML', 'Python', 'YOLO', 'Computer Vision'],
    excerpt: 'Explorando o desenvolvimento do AI-Totem, um sistema revolucionário que utiliza detecção de objetos para substituir códigos de barras tradicionais.',
    url: 'https://medium.com/@FDroque/ai-totem-vision',
    status: 'PUBLISHED'
  },
  {
    id: 'LOG_002', 
    title: 'Modernizando Interfaces Web: Do Design Ultrapassado ao Responsivo',
    date: '2024-02-20',
    tags: ['Web Design', 'UX/UI', 'Responsive Design'],
    excerpt: 'Relato do processo de repaginação completa do website BPG Brasil, enfrentando desafios de responsividade e experiência do usuário.',
    url: 'https://medium.com/@FDroque/web-modernization',
    status: 'PUBLISHED'
  },
  {
    id: 'LOG_003',
    title: 'Software Livre na Engenharia: Uma Perspectiva Acadêmica',
    date: '2024-03-10',
    tags: ['Open Source', 'Research', 'Software Engineering'],
    excerpt: 'Análise da importância do software livre no desenvolvimento acadêmico e profissional, com foco em soluções sustentáveis.',
    url: 'https://medium.com/@FDroque/open-source-engineering',
    status: 'DRAFT'
  }
];

export const BlogSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PUBLISHED':
        return 'status-operational';
      case 'DRAFT':
        return 'terminal-glow-primary';
      default:
        return 'terminal-glow';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="max-w-6xl w-full space-y-8">
        <TerminalWindow title="SYSTEM_LOGS:/BLOG/" glowColor="primary">
          <div className="space-y-6">
            <div className="font-terminal text-sm terminal-glow">
              SCANNING_LOG_DIRECTORY... | ENTRIES_FOUND: {blogPosts.length}
            </div>
            
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <div key={post.id} className="terminal-panel terminal-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-lg font-terminal terminal-glow-primary">
                            {post.id}
                          </h3>
                          <span className={`text-xs font-terminal ${getStatusColor(post.status)}`}>
                            [{post.status}]
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-terminal terminal-glow mb-3">
                          {post.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 text-sm font-terminal text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>CREATED: {new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Tag className="w-3 h-3" />
                        <span>TAGS: {post.tags.length}</span>
                      </div>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs font-terminal px-2 py-1 terminal-border terminal-glow"
                          >
                            #{tag.toUpperCase()}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        {post.status === 'PUBLISHED' && (
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-terminal-primary text-xs font-terminal inline-flex items-center"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            ESTABLISH_CONNECTION_TO:[{post.url.split('/').pop()?.toUpperCase()}]
                          </a>
                        )}
                        
                        {post.status === 'DRAFT' && (
                          <span className="btn-terminal text-xs font-terminal opacity-50">
                            DRAFT_MODE | PUBLICATION_PENDING
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <div className="font-terminal text-sm terminal-glow">
                END_OF_LOG_SCAN | MORE_ENTRIES_LOADING...
              </div>
              <a 
                href="https://medium.com/@FDroque"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal-secondary font-terminal mt-4 inline-block"
              >
                ACCESS_FULL_ARCHIVE
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};