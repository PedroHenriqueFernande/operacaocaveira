import { CheckCircle } from "lucide-react";
import React from "react";

const audiencePoints = [
  {
    icon: CheckCircle,
    text: "Vai prestar o concurso da Guarda Municipal de Manaus"
  },
  {
    icon: CheckCircle,
    text: "Sente dificuldade em Direito Administrativo"
  },
  {
    icon: CheckCircle,
    text: "Não é formado em Direito e precisa de explicação clara"
  },
  {
    icon: CheckCircle,
    text: "Já estudou, mas não consegue transformar estudo em acerto de questão"
  },
  {
    icon: CheckCircle,
    text: "Deseja estudar o que realmente cai"
  },
  {
    icon: CheckCircle,
    text: "Quer estudar com foco, método e estratégia sem perder tempo"
  }
];

export const TargetAudienceSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'var(--gradient-steel)' }}>
      {/* Background Tactical Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, hsl(var(--caveira-gold)) 50px, hsl(var(--caveira-gold)) 51px)`
      }}></div>

      {/* Smoke Effect - Luxury */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] animate-float" style={{ background: 'radial-gradient(circle, hsl(353 85% 44% / 0.15) 0%, transparent 70%)' }}></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[150px] animate-float" style={{ background: 'var(--gradient-gold-radial)', animationDelay: "1s" }}></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-caveira-gold font-bold text-sm tracking-widest uppercase" style={{ textShadow: 'var(--shadow-gold)' }}>Alcance seu objetivo</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-4">
            PARA QUEM <span style={{
              background: 'var(--gradient-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>ESTE CURSO É?</span>
          </h2>
          <p className="text-caveira-gray text-lg max-w-2xl mx-auto">
            Descubra se este treinamento é a chave para sua aprovação
          </p>
          <div className="relative w-24 h-1 mx-auto mt-4 overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'var(--gradient-gold)' }}></div>
            <div className="absolute inset-0 animate-metallic-shine" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%'
            }}></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audiencePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group relative backdrop-blur-sm p-8 rounded-lg transition-all duration-300 cursor-pointer animate-fade-in hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  background: 'linear-gradient(135deg, hsl(0 0% 17% / 0.4) 0%, hsl(0 0% 12% / 0.6) 100%)',
                  boxShadow: 'var(--shadow-deep)'
                }}
              >
                {/* Metallic Border Effect */}
                <div className="absolute inset-0 rounded-lg opacity-40 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: 'linear-gradient(135deg, hsl(43 88% 38% / 0.4) 0%, transparent 50%, hsl(43 88% 38% / 0.4) 100%)',
                  padding: '2px'
                }}>
                  <div className="w-full h-full bg-transparent rounded-lg"></div>
                </div>

                {/* 3D Effect Background */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--gradient-luxury)' }}></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-caveira-gold/10 to-transparent animate-shine"></div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-xl transition-all duration-300 group-hover:scale-110 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(43 88% 38% / 0.15) 0%, hsl(43 88% 38% / 0.05) 100%)' }}>
                    <Icon className="w-10 h-10 text-caveira-gold relative z-10" style={{ filter: 'drop-shadow(0 0 10px hsl(43 88% 38% / 0.5))' }} />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--gradient-gold-radial)' }}></div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-xl mb-3 text-caveira-white group-hover:text-caveira-gold transition-colors duration-300 relative z-10">
                  {point.text}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};