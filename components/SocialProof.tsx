import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const buyers = [
  { name: 'Maria', location: 'São Paulo, SP' },
  { name: 'João', location: 'Rio de Janeiro, RJ' },
  { name: 'Ana', location: 'Belo Horizonte, MG' },
  { name: 'Lucas', location: 'Curitiba, PR' },
  { name: 'Fernanda', location: 'Porto Alegre, RS' },
  { name: 'Rafael', location: 'Salvador, BA' },
  { name: 'Juliana', location: 'Brasília, DF' },
  { name: 'Pedro', location: 'Recife, PE' },
  { name: 'Camila', location: 'Fortaleza, CE' },
  { name: 'Bruno', location: 'Goiânia, GO' }
];

const SocialProof: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(buyers[0]);
  const [hasStarted, setHasStarted] = useState(false);
  const [imageError, setImageError] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Function to show notification
  const showNotification = () => {
    // Select random buyer
    const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
    setCurrentBuyer(randomBuyer);
    setVisible(true);

    // Hide after 4 seconds
    setTimeout(() => {
      setVisible(false);
      
      // Schedule next notification (15-20 seconds + 4 seconds hidden time)
      const nextDelay = Math.floor(Math.random() * (20000 - 15000 + 1) + 15000);
      timeoutRef.current = setTimeout(showNotification, nextDelay);
    }, 4000);
  };

  // Scroll detection to trigger the start
  useEffect(() => {
    const handleScroll = () => {
      if (hasStarted) return;

      const offerSection = document.getElementById('offer');
      if (offerSection) {
        const rect = offerSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          setHasStarted(true);
          // Start immediately upon seeing the section
          showNotification();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!hasStarted) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 border border-slate-100 max-w-xs md:max-w-sm">
        <div className="flex-shrink-0 relative">
          {!imageError ? (
            <img 
              src="/chicletao.webp" 
              alt="Product" 
              className="w-12 h-12 rounded-full object-cover bg-slate-100"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <CheckCircle size={20} />
            </div>
          )}
          
          <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
            <CheckCircle size={10} strokeWidth={3} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-slate-900 truncate">
            {currentBuyer.name} de {currentBuyer.location}
          </p>
          <p className="text-xs text-slate-600 leading-tight mt-0.5">
            acabou de comprar <span className="font-bold text-blue-600">Método Chicletão</span>
          </p>
          <p className="text-[10px] text-slate-400 mt-1">Agora mesmo</p>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;