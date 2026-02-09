import { CheckCircle } from "lucide-react";
import React from "react"; // Explicitly import React if using JSX in older React versions or if types are needed

const bonuses = [
  {
    icon: CheckCircle,
    title: "30 Dicas em Vídeo",
    description: ""
  },
  {
    icon: CheckCircle,
    title: "10 Simulados Desafiadores",
    description: ""
  },
  {
    icon: CheckCircle,
    title: "Edital Verticalizado",
    description: "(quando publicado)"
  },

  {
    icon: CheckCircle,
    title: "Legislação em PDF",
    description: ""
  },
  {
    icon: CheckCircle,
    title: "50 Questões da Banca",
    description: ""
  },
  {
    icon: CheckCircle,
    title: "Acesso ao Grupo Exclusivo de WhatsApp",
    description: ""
  },

];

export const BonusSection = () => {
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

          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-4">
            BÔNUS <span style={{
              background: 'var(--gradient-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>EXCLUSIVOS</span>
          </h2>
          <p className="text-caveira-gray text-lg max-w-2xl mx-auto">
            Benefícios adicionais para impulsionar sua aprovação
          </p>
          <div className="relative w-24 h-1 mx-auto mt-4 overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'var(--gradient-gold)' }}></div>
            <div className="absolute inset-0 animate-metallic-shine" style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%'
            }}></div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon;
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
                    {bonus.title}
                  </h3>
                  <p className="text-caveira-gray group-hover:text-caveira-white transition-colors duration-300 relative z-10">
                    {bonus.description}
                  </p>

                  {/* Corner Accent - Luxury */}
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-tr-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <div className="absolute inset-0 border-t-2 border-r-2 border-caveira-gold"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 rounded-bl-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                    <div className="absolute inset-0 border-b-2 border-l-2 border-caveira-gold"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};