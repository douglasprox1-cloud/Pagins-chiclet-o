import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold tracking-wide uppercase">
              Método Chicletão
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Radiologia é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Poder</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
              Faça o conteúdo grudar na sua mente feito chiclete. O método definitivo para aprender anatomia radiográfica com teoria, vídeos divertidos e prática validada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToOffer} className="group">
                Quero Acesso Vitalício
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <a 
                href="https://www.radiologiaeopoder.com/pratica" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors font-semibold"
              >
                Testar Gratuitamente
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 overflow-hidden">
                    <img src={`https://picsum.photos/32/32?random=${i}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="font-medium text-white">4.7/5.0</span>
                <span className="hidden sm:inline">(Avaliações reais)</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
             {/* Mascot Image Positioned relative to video */}
             <div className="hidden md:block absolute -top-24 -right-12 z-20 w-40 animate-bounce-slow">
                <img 
                  src="/chicletao.jpg" 
                  alt="Mascote No Prob Llama" 
                  className="w-full rounded-xl shadow-2xl border-4 border-white/10 transform rotate-12"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
             </div>

             {/* YouTube Video Embed */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 aspect-video group">
              <iframe 
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/amWt8Tm_Ens" 
                title="Método Chicletão - Vídeo de Apresentação" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl hidden md:block z-20">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-green-400 w-8 h-8" />
                <div>
                  <p className="font-bold text-white">+400 Estruturas</p>
                  <p className="text-xs text-slate-400">Anatomia detalhada</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;