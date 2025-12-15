import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-bold text-white text-lg mb-4">Método Chicletão » Radiologia é o Poder</p>
        <p className="text-sm mb-6">
          "Boooraa Chicletar 🦙"
        </p>
        <div className="text-xs space-y-2">
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p>
            Este site não faz parte do site do Facebook ou Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;