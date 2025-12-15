import React from 'react';
import Section from './Section';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Quem avaliou?</h2>
        <div className="flex justify-center items-center gap-1 mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <p className="text-2xl font-bold text-slate-800 mt-2">4.7 / 5.0</p>
        <p className="text-slate-500">Média baseada em avaliações reais na Hotmart</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm relative">
           <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-br-xl rounded-tl-xl shadow-lg">
             <span className="text-2xl font-serif">"</span>
           </div>
           <p className="text-slate-700 italic mb-6 relative z-10">
             "O método chicletão facilita muito o aprendizado da anatomia. É excelente para a memorização pois temos a possibilidade de focar em uma estrutura de cada vez, e nos vídeos de treinamento vemos elas repetidamente..."
           </p>
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg">
               A
             </div>
             <div>
               <p className="font-bold text-slate-900">Ana</p>
               <p className="text-xs text-slate-500">Aluna Verificada</p>
             </div>
           </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center">
          <h3 className="font-bold text-slate-900 text-lg mb-2">Transparência Total</h3>
          <p className="text-slate-600 text-sm">
            Todas as avaliações mostradas são coletadas automaticamente pela Hotmart de alunos que compraram e consumiram o conteúdo.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;