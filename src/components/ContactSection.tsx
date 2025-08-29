import { useState } from 'react';
import { TerminalWindow } from './TerminalWindow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [transmissionStatus, setTransmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTransmissionStatus('sending');
    
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setTransmissionStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setTransmissionStatus('idle');
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const connections = [
    {
      name: 'EMAIL',
      value: 'fdestriroque@gmail.com',
      icon: Mail,
      href: 'mailto:fdestriroque@gmail.com',
      status: 'DIRECT_LINK'
    },
    {
      name: 'LINKEDIN',
      value: '/in/fernandodestriroque',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/fernandodestriroque/',
      status: 'CONN_ESTABLISHED'
    },
    {
      name: 'GITHUB',
      value: '/RoqueFer',
      icon: Github,
      href: 'https://github.com/RoqueFer',
      status: 'REPOSITORY_ACTIVE'
    },
    {
      name: 'MEDIUM',
      value: '/@FDroque',
      icon: BookOpen,
      href: 'https://medium.com/@FDroque',
      status: 'PUBLICATION_CHANNEL'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="max-w-7xl w-full space-y-8">
        <TerminalWindow title="COMMS:/CONTACT.MSG/" glowColor="accent">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Connection Status Panel */}
            <div className="space-y-6">
              <h3 className="text-xl font-terminal terminal-glow-accent uppercase">
                CONNECTION_CHANNELS:
              </h3>
              
              <div className="space-y-4">
                {connections.map((conn) => (
                  <div key={conn.name} className="terminal-panel terminal-border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <conn.icon className="w-4 h-4 terminal-glow-primary" />
                        <span className="font-terminal text-sm terminal-glow-primary">
                          {conn.name}:
                        </span>
                      </div>
                      <span className="text-xs font-terminal status-operational">
                        {conn.status}
                      </span>
                    </div>
                    
                    <a
                      href={conn.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-terminal text-sm text-foreground hover:text-primary transition-colors command-line"
                    >
                      {conn.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="terminal-panel terminal-border-secondary p-4">
                <h4 className="font-terminal text-sm terminal-glow-secondary mb-3">
                  AVAILABILITY_STATUS:
                </h4>
                <div className="space-y-1 text-xs font-terminal">
                  <p className="status-operational">RESPONSE_TIME: 24-48H</p>
                  <p className="terminal-glow">TIMEZONE: UTC-3 (BR)</p>
                  <p className="status-operational">COLLABORATION: OPEN</p>
                  <p className="terminal-glow-primary">HIRING_STATUS: AVAILABLE</p>
                </div>
              </div>
            </div>

            {/* Message Composition Terminal */}
            <div className="space-y-6">
              <h3 className="text-xl font-terminal terminal-glow-primary uppercase">
                MESSAGE_COMPOSER:
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-terminal terminal-glow">
                    SENDER_NAME:
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="terminal-input font-terminal"
                    placeholder="Digite seu nome..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-terminal terminal-glow">
                    SENDER_EMAIL:
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="terminal-input font-terminal"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-terminal terminal-glow">
                    MESSAGE_SUBJECT:
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="terminal-input font-terminal"
                    placeholder="Assunto da mensagem..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-terminal terminal-glow">
                    MESSAGE_BODY:
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="terminal-input font-terminal min-h-32"
                    placeholder="Digite sua mensagem aqui..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={transmissionStatus === 'sending'}
                  className="btn-terminal-accent w-full font-terminal"
                >
                  {transmissionStatus === 'sending' 
                    ? 'TRANSMITTING_DATA...' 
                    : 'EXECUTE_TRANSMISSION'
                  }
                </Button>

                {transmissionStatus === 'success' && (
                  <div className="terminal-panel terminal-border-secondary p-3">
                    <p className="text-xs font-terminal status-operational">
                      // TRANSMISSION_SUCCESSFUL | MESSAGE_QUEUED_FOR_DELIVERY
                    </p>
                  </div>
                )}

                {transmissionStatus === 'error' && (
                  <div className="terminal-panel terminal-border p-3">
                    <p className="text-xs font-terminal terminal-glow-accent">
                      // TRANSMISSION_FAILED | RETRY_REQUIRED
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};