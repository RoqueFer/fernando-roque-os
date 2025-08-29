import { useState, useEffect } from 'react';

export const StatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background terminal-border-primary h-12 flex items-center justify-between px-4 font-terminal text-sm">
      <div className="flex items-center space-x-6">
        <span className="terminal-glow-primary">
          USER: FERNANDO_D_ROQUE
        </span>
        <span className="status-operational">
          STATUS: OPERATIONAL
        </span>
      </div>
      
      <div className="flex items-center space-x-6">
        <span className="terminal-glow">
          SYSTEM_TIME: {currentTime.toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </span>
      </div>
    </div>
  );
};