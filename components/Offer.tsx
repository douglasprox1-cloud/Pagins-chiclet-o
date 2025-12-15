import React from 'react';
import Section from './Section';
import Button from './Button';
import { Check, ShieldCheck, Lock } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <div id="offer" className="bg-blue-600 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12 bg-slate-50 flex flex-col justify-center relative overflow-hidden">
            {/* Mascot Image - Ensure you have chicletao.jpg in your public folder */}
            <div className="mb-6 flex justify-center md:justify-start">
               <img 
                 src="/chicletao.jpg" 
                 alt="Mascote Método Chicletão" 
                 className="w-48 rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                 onError={(e) => {
                   // Fallback if image is missing
                   e.currentTarget.style.display = 'none';
                 }}
               />
            </div>

            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-2">Oferta Especial</h3>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Acesso Vitalício <br/>
              <span className="text-lg font-normal text-slate-500">apenas nesta fase de lançamento</span>
            </h2>
            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
              Estamos nos primeiros passos da jornada. Quem entrar agora garante acesso eterno à plataforma que, no futuro, será vendida apenas por assinatura anual.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="text-green-500 w-5 h-5" /> <span>Atualizações gratuitas</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="text-green-500 w-5 h-5" /> <span>Acesso ao app e web</span>
              </li>
              <li className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="text-green-500 w-5 h-5" /> <span>Suporte direto</span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-center items-center text-center">
            <div className="mb-6">
              <span className="text-slate-400 text-sm line-through block">De: Assinatura Anual</span>
              <div className="text-5xl font-extrabold text-white mt-2 mb-1">Vitalício</div>
              <span className="text-blue-300 text-sm">Pagamento único</span>
            </div>
            
            <Button fullWidth className="animate-pulse mb-4">
              Comprar Agora
            </Button>
            
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <Lock size={12} />
              <span>Pagamento seguro via Hotmart</span>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700 w-full">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ShieldCheck className="text-green-400" size={20} />
                <span className="font-bold">Garantia de 7 Dias</span>
              </div>
              <p className="text-xs text-slate-400">
                Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;