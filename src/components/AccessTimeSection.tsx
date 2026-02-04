import React from "react";

export const AccessTimeSection = () => {
  return (
    <section className="relative py-24 bg-caveira-black">
      {/* Decorative Elements - Metallic Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] animate-float" style={{ background: 'var(--gradient-gold-radial)' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-caveira-red/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <span className="text-caveira-gold font-bold text-sm tracking-widest uppercase" style={{ textShadow: 'var(--shadow-gold)' }}>Detalhes do seu acesso</span>
        <h2 className="text-4xl md:text-6xl font-black mt-2 mb-6">
          TEMPO DE ACESSO <span style={{
            background: 'var(--gradient-gold)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>AO CURSO</span>
        </h2>

        <div className="bg-caveira-steel/30 border-2 border-caveira-gold/30 rounded-2xl p-10 backdrop-blur-sm max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-caveira-white leading-relaxed mb-4">
            Você terá o prazo de <span className="text-caveira-gold font-bold">6 (seis) meses</span> ou até a data da prova, o que ocorrer primeiro.
          </p>
          <p className="text-lg text-caveira-gray leading-relaxed mb-4">
            O acesso é <span className="text-caveira-gold font-bold">EXCLUSIVO</span> e <span className="text-caveira-gold font-bold">INDIVIDUAL</span>.
          </p>
          <p className="text-lg text-caveira-gray leading-relaxed">
            Liberação das aulas: O conteúdo será liberado seguindo o cronograma de aulas.
          </p>
        </div>
      </div>
    </section>
  );
};