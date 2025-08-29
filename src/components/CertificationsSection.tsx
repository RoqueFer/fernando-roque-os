import { TerminalWindow } from './TerminalWindow';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 'AUTH_001',
    name: 'Oracle Cloud Infrastructure Foundations',
    issuer: 'Oracle University',
    date: '2024-01-15',
    status: 'VALIDATED',
    level: 'FOUNDATION',
    credentialId: 'OCI-FOUND-2024-001',
    url: '#'
  },
  {
    id: 'AUTH_002',
    name: 'Git e GitHub Essentials',
    issuer: 'DIO - Digital Innovation One',
    date: '2023-11-20',
    status: 'VALIDATED',
    level: 'INTERMEDIATE',
    credentialId: 'DIO-GIT-2023-456',
    url: '#'
  },
  {
    id: 'AUTH_003',
    name: 'Python para Data Science',
    issuer: 'FIAP',
    date: '2023-09-10',
    status: 'VALIDATED',
    level: 'ADVANCED',
    credentialId: 'FIAP-PY-DS-2023',
    url: '#'
  },
  {
    id: 'AUTH_004',
    name: 'Fundamentos de Engenharia de Software',
    issuer: 'Universidade Tecnológica Federal do Paraná',
    date: '2024-03-01',
    status: 'IN_PROGRESS',
    level: 'ACADEMIC',
    credentialId: 'UTFPR-ES-2024',
    url: '#'
  },
  {
    id: 'AUTH_005',
    name: 'Linux System Administration',
    issuer: 'Linux Foundation',
    date: '2023-12-05',
    status: 'VALIDATED',
    level: 'INTERMEDIATE',
    credentialId: 'LF-ADMIN-2023-789',
    url: '#'
  }
];

export const CertificationsSection = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'VALIDATED':
        return 'status-operational';
      case 'IN_PROGRESS':
        return 'terminal-glow-primary';
      case 'EXPIRED':
        return 'terminal-glow-accent';
      default:
        return 'terminal-glow';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'FOUNDATION':
        return 'terminal-glow';
      case 'INTERMEDIATE':
        return 'terminal-glow-primary';
      case 'ADVANCED':
        return 'terminal-glow-secondary';
      case 'ACADEMIC':
        return 'terminal-glow-accent';
      default:
        return 'terminal-glow';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="max-w-6xl w-full space-y-8">
        <TerminalWindow title="SYSTEM_AUTHORIZATIONS:/CLEARANCE_LEVELS/" glowColor="secondary">
          <div className="space-y-6">
            <div className="font-terminal text-sm terminal-glow">
              SCANNING_CREDENTIALS... | AUTHORIZATIONS_FOUND: {certifications.length}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="terminal-panel terminal-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 terminal-glow-secondary" />
                        <span className="text-sm font-terminal terminal-glow-secondary">
                          {cert.id}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-terminal ${getStatusColor(cert.status)}`}>
                          [{cert.status}]
                        </span>
                        <span className={`text-xs font-terminal ${getLevelColor(cert.level)}`}>
                          {cert.level}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-terminal terminal-glow-primary mb-2">
                        {cert.name}
                      </h3>
                      <p className="text-sm font-terminal text-foreground">
                        ISSUER: {cert.issuer}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs font-terminal">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-3 h-3 terminal-glow" />
                        <span className="terminal-glow">
                          ISSUED: {new Date(cert.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      
                      <div className="text-muted-foreground">
                        CREDENTIAL_ID: {cert.credentialId}
                      </div>
                    </div>

                    {cert.status === 'VALIDATED' && cert.url !== '#' && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-terminal-secondary text-xs font-terminal inline-flex items-center"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        VERIFY_CREDENTIAL
                      </a>
                    )}

                    {cert.status === 'IN_PROGRESS' && (
                      <div className="text-xs font-terminal terminal-glow-primary">
                        PROGRESS: ONGOING | COMPLETION_PENDING
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="terminal-panel terminal-border-secondary p-4">
                <div className="text-sm font-terminal terminal-glow-secondary mb-2">
                  TOTAL_CREDENTIALS:
                </div>
                <div className="text-2xl font-terminal terminal-glow-primary">
                  {certifications.length}
                </div>
              </div>

              <div className="terminal-panel terminal-border-primary p-4">
                <div className="text-sm font-terminal terminal-glow-primary mb-2">
                  VALIDATED_CERTS:
                </div>
                <div className="text-2xl font-terminal terminal-glow-secondary">
                  {certifications.filter(c => c.status === 'VALIDATED').length}
                </div>
              </div>

              <div className="terminal-panel terminal-border p-4">
                <div className="text-sm font-terminal terminal-glow mb-2">
                  IN_PROGRESS:
                </div>
                <div className="text-2xl font-terminal terminal-glow-accent">
                  {certifications.filter(c => c.status === 'IN_PROGRESS').length}
                </div>
              </div>
            </div>

            <div className="text-center pt-6">
              <div className="font-terminal text-sm terminal-glow">
                CREDENTIAL_SCAN_COMPLETE | CONTINUOUS_LEARNING_ACTIVE
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};