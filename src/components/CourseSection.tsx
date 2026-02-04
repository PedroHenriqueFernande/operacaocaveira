import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const missions = [
  {
    icon: BookOpen,
    title: "MÓDULO 1 – Conceito",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 2 – Fontes",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 3 – Sistema administrativo.",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 4 – Direito público x Direito privado",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 5 – Princípios Explícitos da Administração pública",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 6 – Princípios Implícitos da Administração pública",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 7 – Poderes Administrativos",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 8 – Ato Administrativo",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 9 – Improbidade Administrativa",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 10 – Agentes públicos",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 11 – Noções de organização administrativa. Administração direta e indireta, centralizada e descentralizada. Desconcentração. Autarquia, Fundação, Empresa Pública e Sociedade de Economia Mista. Órgãos Públicos",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 12 – Bens públicos",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 13 – Responsabilidade Civil do Estado",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 14 – Lei 12.527/2011 - Lei de Acesso à Informação",
    description: ""
  },
  {
    icon: BookOpen,
    title: "MÓDULO 15 – Lei 13.709/2018 - Lei Geral de Proteção de Dados",
    description: ""
  }
];

export const CourseSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Diagonal Lines Decoration - Metallic */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-2 transform -skew-y-2 overflow-hidden">
          <div className="w-full h-full" style={{ background: 'var(--gradient-gold)' }}></div>
        </div>
        <div className="absolute top-1/3 right-0 w-full h-2 transform skew-y-2 overflow-hidden">
          <div className="w-full h-full" style={{ background: 'var(--gradient-gold)' }}></div>
        </div>
        <div className="absolute bottom-1/3 left-0 w-full h-2 transform -skew-y-2 overflow-hidden">
          <div className="w-full h-full" style={{ background: 'var(--gradient-gold)' }}></div>
        </div>
      </div>
      {/* Metallic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'linear-gradient(hsl(0 0% 100% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.05) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-caveira-gold font-bold text-sm tracking-widest uppercase" style={{ textShadow: 'var(--shadow-gold)' }}>O Arsenal</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-4">
            MISSÕES <span style={{ 
              background: 'var(--gradient-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>CAVEIRA</span>
          </h2>
          <p className="text-caveira-gray text-lg max-w-2xl mx-auto">
            Você terá acesso aos principais pontos cobrados no edital:
          </p>
          <div className="relative w-24 h-1 mx-auto mt-4 overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'var(--gradient-gold)' }}></div>
            <div className="absolute inset-0 animate-metallic-shine" style={{ 
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%'
            }}></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <Card 
                key={index}
                className="group relative backdrop-blur-sm p-6 transition-all duration-300 cursor-pointer animate-fade-in overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: 'linear-gradient(135deg, hsl(0 0% 8% / 0.8) 0%, hsl(0 0% 4% / 0.9) 100%)',
                  boxShadow: 'var(--shadow-deep)'
                }}
              >
                {/* Metallic Border Effect */}
                <div className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ 
                  background: 'linear-gradient(135deg, hsl(43 88% 38% / 0.3) 0%, transparent 50%, hsl(43 88% 38% / 0.3) 100%)',
                  padding: '1px'
                }}>
                  <div className="w-full h-full bg-transparent rounded-lg"></div>
                </div>
                
                {/* Metallic Texture Overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full overflow-hidden">
                  <div style={{ background: 'var(--gradient-gold)', opacity: 0.1 }} className="w-full h-full"></div>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-caveira-gold/5 to-transparent animate-shine"></div>
                </div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="inline-flex p-3 rounded-lg transition-all duration-300 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(43 88% 38% / 0.15) 0%, hsl(43 88% 38% / 0.05) 100%)' }}>
                    <Icon className="w-8 h-8 text-caveira-gold group-hover:scale-110 transition-transform duration-300 relative z-10" style={{ filter: 'drop-shadow(0 0 10px hsl(43 88% 38% / 0.5))' }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-3 text-caveira-white group-hover:text-caveira-gold transition-colors duration-300 relative z-10">
                  {mission.title}
                </h3>

                {/* Description */}
                <p className="text-caveira-gray text-sm mb-4 relative z-10">
                  {mission.description}
                </p>



                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                  <div className="w-full h-full" style={{ background: 'var(--gradient-gold)' }}></div>
                </div>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
};
