import React from 'react';
import Section from './Section';
import { BookOpen, Video, Target, UserCheck } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Teoria Dinâmica",
      subtitle: "Atlas de Anatomia Radiográfica",
      description: "Um atlas ilustrado e dinâmico, sempre atualizado com novas ilustrações para garantir que você tenha o material mais completo.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 2,
      title: "Vídeos de Treinamento",
      subtitle: "Memorização Rápida",
      description: "Estude rapidinho assistindo vídeos curtos e divertidos (30-40s). O jeito mais fácil de fazer as estruturas entrarem na sua cabeça.",
      icon: Video,
      color: "bg-purple-100 text-purple-600"
    },
    {
      id: 3,
      title: "Prática & Direcionamento",
      subtitle: "Inspetora Nazaré",
      description: "Responda aos Quizzes e receba relatórios personalizados da 'Inspetora Nazaré' apontando exatamente onde você precisa focar.",
      icon: Target,
      color: "bg-pink-100 text-pink-600"
    }
  ];

  return (
    <Section className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">O Segredo do Sucesso</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
          Como funciona o Método Chicletão?
        </h2>
        <p className="text-slate-600 text-lg">
          Estruturado em 3 pilares para garantir que o conteúdo realmente "grude" no seu hall da sabedoria.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.id} className="relative group p-8 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300">
            <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <step.icon size={28} />
            </div>
            
            <div className="absolute top-8 right-8 text-6xl font-black text-gray-100 -z-10 select-none">
              {step.id}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
            <h4 className="text-sm font-semibold text-blue-600 mb-4">{step.subtitle}</h4>
            <p className="text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Methodology;