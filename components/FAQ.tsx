import React, { useState } from 'react';
import Section from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions: FaqItem[] = [
    {
      question: "Como funciona o 'Prazo de Garantia'?",
      answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo você não gostar do conteúdo, basta solicitar o reembolso na plataforma da Hotmart e devolvemos 100% do seu investimento."
    },
    {
      question: "Como acesso meu produto?",
      answer: "Você receberá o acesso por email. O conteúdo pode ser acessado via computador, celular ou tablet. Você também pode acessar através da sua conta Hotmart em 'Minhas Compras'."
    },
    {
      question: "Tem certificado de conclusão?",
      answer: "Sim! Após completar o curso, você pode emitir um certificado digital que pode ser compartilhado em redes sociais como o LinkedIn e inserido em seu currículo."
    },
    {
      question: "O acesso é realmente vitalício?",
      answer: "Sim. Comprando nesta fase promocional, você garante acesso vitalício à plataforma e a todas as futuras atualizações sem pagar nenhuma mensalidade futura."
    }
  ];

  return (
    <Section className="bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-800">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-500" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;