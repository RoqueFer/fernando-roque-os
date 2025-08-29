import { TerminalWindow } from './TerminalWindow';

export const AboutSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="max-w-6xl w-full space-y-8">
        <TerminalWindow title="USER_PROFILE_DATA" glowColor="secondary">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex justify-center">
              <div className="terminal-border-primary p-2">
                <img 
                  src="https://avatars.githubusercontent.com/u/170758286?v=4"
                  alt="Fernando D. Roque - Foto de Perfil"
                  className="w-48 h-48 object-cover terminal-glow-primary"
                />
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6 font-terminal">
              <div>
                <h3 className="text-xl terminal-glow-primary mb-4 uppercase">
                  BIOGRAPHICAL_DATA:
                </h3>
                <div className="space-y-2 text-foreground">
                  <p className="command-line">NOME: Fernando D. Roque</p>
                  <p className="command-line">FUNÇÃO: Desenvolvedor Fullstack | Estudante Eng. Software</p>
                  <p className="command-line">LOCALIZAÇÃO: Curitiba, Paraná, Brasil</p>
                  <p className="command-line">STATUS: Ativo</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl terminal-glow-secondary mb-4 uppercase">
                  MISSION_STATEMENT:
                </h3>
                <p className="text-foreground leading-relaxed">
                  Cursando Engenharia de Software, pesquisando Software Livre e atuando como 
                  Arquiteto de Soluções. Minha paixão reside em otimizar processos e criar 
                  soluções eficientes, com foco em tecnologias SaaS, Cloud, Redes e Infraestrutura. 
                  Sou motivado pelo desafio de aplicar meus conhecimentos em automação para 
                  melhorar a eficiência operacional, combinando uma visão analítica como 
                  pesquisador com a inovação constante do setor de tecnologia.
                </p>
              </div>

              <div>
                <h3 className="text-xl terminal-glow-accent mb-4 uppercase">
                  CURRENT_OBJECTIVES:
                </h3>
                <div className="space-y-1 text-foreground">
                  <p className="command-line">Otimização de processos automatizados</p>
                  <p className="command-line">Pesquisa em Software Livre</p>
                  <p className="command-line">Desenvolvimento de soluções SaaS</p>
                  <p className="command-line">Arquitetura de sistemas Cloud</p>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TerminalWindow title="SYSTEM_PREFERENCES" glowColor="primary">
            <div className="space-y-4 font-terminal text-sm">
              <div>
                <span className="terminal-glow-primary">STACK_PREFERRED:</span>
                <div className="ml-4 mt-2 space-y-1">
                  <p className="command-line">Frontend: React, JavaScript, HTML5, CSS3</p>
                  <p className="command-line">Backend: Python, SQL</p>
                  <p className="command-line">Cloud: Oracle Cloud Infrastructure</p>
                  <p className="command-line">Tools: Git, Linux, C</p>
                </div>
              </div>
            </div>
          </TerminalWindow>

          <TerminalWindow title="RESEARCH_INTERESTS" glowColor="secondary">
            <div className="space-y-4 font-terminal text-sm">
              <div>
                <span className="terminal-glow-secondary">FOCUS_AREAS:</span>
                <div className="ml-4 mt-2 space-y-1">
                  <p className="command-line">Software Livre & Open Source</p>
                  <p className="command-line">Automação de Processos</p>
                  <p className="command-line">Infraestrutura de TI</p>
                  <p className="command-line">Soluções SaaS Escaláveis</p>
                </div>
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </div>
  );
};