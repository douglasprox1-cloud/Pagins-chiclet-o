import React from 'react';
import Section from './Section';
import { Layers, FileText, MonitorPlay, HelpCircle } from 'lucide-react';

const Features: React.FC = () => {
  const stats = [
    { label: "Capítulos de Tórax", count: 5 },
    { label: "Capítulos de Abdome", count: 4 },
    { label: "Capítulos Membro Superior", count: 7 },
    { label: "Capítulos Membro Inferior", count: 11 },
    { label: "Capítulos Esqueleto Axial", count: 8 },
  ];

  return (
    <Section className="bg-slate-50 border-y border-slate-200">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
            O que você vai encontrar na plataforma?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Atualmente a plataforma é uma enciclopédia viva de radiologia. Todo o conteúdo é organizado para facilitar sua jornada.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <Layers size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">+400 Estruturas Anatômicas</p>
                <p className="text-sm text-slate-500">Ilustradas e demarcadas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                <MonitorPlay size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">30 Vídeos de Treinamento</p>
                <p className="text-sm text-slate-500">Curtos e objetivos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <HelpCircle size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">+400 Perguntas de Quiz</p>
                <p className="text-sm text-slate-500">Distribuídas em 33 capítulos</p>
              </div>
            </div>
             <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
              <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                <FileText size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Material em PDF</p>
                <p className="text-sm text-slate-500">Solicite para impressão a qualquer momento</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Atlas Digital Completo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-300">{stat.label}</span>
                  <span className="font-bold text-blue-400 text-xl">{stat.count}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700 text-center">
              <p className="text-slate-300 italic mb-4">"Nós adicionamos novos conteúdos frequentemente sem custo adicional."</p>
            </div>
          </div>
          {/* Decor element */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
        </div>

      </div>
    </Section>
  );
};

export default Features;