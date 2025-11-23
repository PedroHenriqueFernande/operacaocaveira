import { BookOpen, CheckCircle, FileText, Shield, Target, Video } from "lucide-react";
import { Card } from "@/components/ui/card";

const missions = [
  {
    icon: Target,
    title: "Módulo 1: Princípios Fundamentais",
    description: "Base sólida dos princípios constitucionais e administrativos",
    items: ["LIMPE", "Supremacia do Interesse Público", "Regime Jurídico"]
  },
  {
    icon: Shield,
    title: "Módulo 2: Organização Administrativa",
    description: "Estrutura, órgãos públicos e administração indireta",
    items: ["Autarquias", "Fundações", "Empresas Públicas", "Sociedades de Economia Mista"]
  },
  {
    icon: FileText,
    title: "Módulo 3: Atos Administrativos",
    description: "Teoria completa e questões de concursos",
    items: ["Conceito e Elementos", "Atributos", "Classificação", "Extinção"]
  },
  {
    icon: BookOpen,
    title: "Módulo 4: Licitações e Contratos",
    description: "Nova Lei 14.133/21 descomplicada",
    items: ["Modalidades", "Dispensa e Inexigibilidade", "Contratos Administrativos"]
  },
  {
    icon: CheckCircle,
    title: "Módulo 5: Agentes Públicos",
    description: "Regime jurídico, direitos e deveres",
    items: ["Classificação", "Regime Estatutário", "Direitos e Deveres", "Responsabilidade"]
  },
  {
    icon: Video,
    title: "Módulo 6: Resolução de Questões",
    description: "Bateria intensiva com questões de concursos reais",
    items: ["FCC", "CESPE/CEBRASPE", "FGV", "Vunesp"]
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
            Treinamento completo em módulos estratégicos para dominar Direito Administrativo
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

                {/* Items */}
                <ul className="space-y-2 relative z-10">
                  {mission.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-caveira-white">
                      <CheckCircle className="w-4 h-4 text-caveira-gold mt-0.5 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 5px hsl(43 88% 38% / 0.5))' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Border Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
                  <div className="w-full h-full" style={{ background: 'var(--gradient-gold)' }}></div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Extra Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-caveira-steel/30 rounded-lg border border-caveira-gold/20 animate-fade-in">
            <Video className="w-12 h-12 text-caveira-gold mx-auto mb-4" />
            <h4 className="font-bold text-caveira-white mb-2">Videoaulas HD</h4>
            <p className="text-caveira-gray text-sm">Acesso vitalício às aulas</p>
          </div>
          <div className="text-center p-6 bg-caveira-steel/30 rounded-lg border border-caveira-gold/20 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <FileText className="w-12 h-12 text-caveira-gold mx-auto mb-4" />
            <h4 className="font-bold text-caveira-white mb-2">Material PDF</h4>
            <p className="text-caveira-gray text-sm">Apostilas e resumos exclusivos</p>
          </div>
          <div className="text-center p-6 bg-caveira-steel/30 rounded-lg border border-caveira-gold/20 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Shield className="w-12 h-12 text-caveira-gold mx-auto mb-4" />
            <h4 className="font-bold text-caveira-white mb-2">Suporte Direto</h4>
            <p className="text-caveira-gray text-sm">Tire dúvidas com o professor</p>
          </div>
        </div>
      </div>
    </section>
  );
};
