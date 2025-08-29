import { TerminalWindow } from './TerminalWindow';

const skills = [
  { name: 'HTML', level: 95, category: 'FRONTEND' },
  { name: 'CSS', level: 90, category: 'FRONTEND' },
  { name: 'JavaScript', level: 85, category: 'FRONTEND' },
  { name: 'React', level: 80, category: 'FRONTEND' },
  { name: 'Python', level: 88, category: 'BACKEND' },
  { name: 'SQL', level: 82, category: 'DATABASE' },
  { name: 'Git', level: 85, category: 'TOOLS' },
  { name: 'Linux', level: 78, category: 'SYSTEMS' },
  { name: 'Oracle Cloud', level: 75, category: 'CLOUD' },
  { name: 'C', level: 70, category: 'SYSTEMS' },
];

const categories = [
  { name: 'FRONTEND', color: 'terminal-glow-primary' },
  { name: 'BACKEND', color: 'terminal-glow-secondary' },
  { name: 'DATABASE', color: 'terminal-glow-accent' },
  { name: 'TOOLS', color: 'terminal-glow' },
  { name: 'SYSTEMS', color: 'terminal-glow-primary' },
  { name: 'CLOUD', color: 'terminal-glow-secondary' },
];

export const SkillsSection = () => {
  const getSkillColor = (level: number) => {
    if (level >= 90) return 'terminal-glow-secondary';
    if (level >= 80) return 'terminal-glow-primary';
    if (level >= 70) return 'terminal-glow';
    return 'terminal-glow-accent';
  };

  const getProgressBarColor = (level: number) => {
    if (level >= 90) return 'bg-secondary';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-foreground';
    return 'bg-accent';
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-16">
      <div className="max-w-7xl w-full space-y-8">
        <TerminalWindow title="DIAGNOSTICS:/SKILLS/" glowColor="secondary">
          <div className="space-y-8">
            <div className="font-terminal text-sm terminal-glow">
              RUNNING_SKILL_DIAGNOSTICS... | PROFICIENCY_ANALYSIS_COMPLETE
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-terminal terminal-glow-primary uppercase">
                  TECHNICAL_PROFICIENCY:
                </h3>
                
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-terminal text-sm terminal-glow">
                          {skill.name.toUpperCase()}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs font-terminal ${getSkillColor(skill.level)}`}>
                            {skill.level}%
                          </span>
                          <span className="text-xs font-terminal text-muted-foreground">
                            [{skill.category}]
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-muted h-2 terminal-border">
                        <div 
                          className={`h-full transition-all duration-1000 ${getProgressBarColor(skill.level)}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-terminal terminal-glow-secondary uppercase">
                  CATEGORY_BREAKDOWN:
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {categories.map((category) => {
                    const categorySkills = skills.filter(skill => skill.category === category.name);
                    const avgLevel = categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length;
                    
                    return (
                      <div key={category.name} className="terminal-panel terminal-border p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className={`font-terminal text-sm ${category.color}`}>
                            {category.name}
                          </span>
                          <span className="font-terminal text-xs terminal-glow">
                            AVG: {Math.round(avgLevel)}%
                          </span>
                        </div>
                        
                        <div className="text-xs font-terminal text-muted-foreground">
                          SKILLS: {categorySkills.map(s => s.name).join(', ')}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="terminal-panel terminal-border-primary p-4 mt-6">
                  <h4 className="font-terminal text-sm terminal-glow-primary mb-3">
                    SYSTEM_STATUS:
                  </h4>
                  <div className="space-y-1 text-xs font-terminal">
                    <p className="status-operational">LEARNING_MODE: ACTIVE</p>
                    <p className="terminal-glow">SKILL_ACQUISITION: CONTINUOUS</p>
                    <p className="terminal-glow-primary">ADAPTATION_RATE: HIGH</p>
                    <p className="status-operational">PERFORMANCE: OPTIMAL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
};