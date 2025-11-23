import { Award, BookOpen, Target, Users } from "lucide-react";
import professorImage from "@/assets/professor-alessandro.jpg";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Award,
    title: "Especialista Reconhecido",
    description: "Anos de experiência em Direito Administrativo"
  },
  {
    icon: Target,
    title: "Foco em Aprovação",
    description: "Metodologia direcionada para concursos"
  },
  {
    icon: Users,
    title: "Milhares de Alunos",
    description: "Aprovados em todo o Brasil"
  },
  {
    icon: BookOpen,
    title: "Didática Exclusiva",
    description: "Ensino objetivo e direto ao ponto"
  }
];

export const ProfessorSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'var(--gradient-steel)' }}>
      {/* Background Decoration - Metallic */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px]" style={{ background: 'var(--gradient-gold-radial)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-caveira-red rounded-full blur-[150px]"></div>
      </div>
      {/* Metallic Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'linear-gradient(hsl(0 0% 100% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-caveira-gold font-bold text-sm tracking-widest uppercase" style={{ textShadow: 'var(--shadow-gold)' }}>O Comandante</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-4">
            PROFESSOR <span className="relative inline-block" style={{ 
              background: 'var(--gradient-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none'
            }}>ALESSANDRO MELO</span>
          </h2>
          <div className="relative w-24 h-1 mx-auto overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'var(--gradient-gold)' }}></div>
            <div className="absolute inset-0 animate-metallic-shine" style={{ 
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%'
            }}></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Professor Image - Luxury Frame */}
          <div className="relative group animate-fade-in">
            <div className="absolute inset-0 blur-xl group-hover:blur-2xl transition-all duration-500" style={{ background: 'var(--gradient-gold-radial)' }}></div>
            <div className="relative overflow-hidden rounded-lg h-96 bg-caveira-steel/50">
              {/* Metallic Border Effect */}
              <div className="absolute inset-0 rounded-lg" style={{ 
                background: 'var(--gradient-metallic)',
                padding: '2px'
              }}>
                <div className="w-full h-full bg-caveira-steel/80 rounded-lg"></div>
              </div>
              {/* Inner Glow */}
              <div className="absolute inset-0" style={{ background: 'var(--gradient-luxury)' }}></div>
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-caveira-gold/10 to-transparent animate-shine"></div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="group relative backdrop-blur-sm p-6 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    background: 'linear-gradient(135deg, hsl(0 0% 17% / 0.5) 0%, hsl(0 0% 12% / 0.8) 100%)',
                    boxShadow: 'var(--shadow-deep)'
                  }}
                >
                  {/* Metallic Border */}
                  <div className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ 
                    background: 'linear-gradient(135deg, hsl(43 88% 38% / 0.3) 0%, transparent 50%, hsl(43 88% 38% / 0.3) 100%)',
                    padding: '1px'
                  }}>
                    <div className="w-full h-full bg-transparent rounded-lg"></div>
                  </div>
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full overflow-hidden">
                    <div style={{ background: 'var(--gradient-gold)', opacity: 0.1 }} className="w-full h-full"></div>
                  </div>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-caveira-gold/5 to-transparent animate-shine"></div>
                  </div>
                  <Icon className="w-10 h-10 text-caveira-gold mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10" style={{ filter: 'drop-shadow(0 0 10px hsl(43 88% 38% / 0.5))' }} />
                  <h3 className="font-bold text-lg mb-2 text-caveira-white relative z-10">{item.title}</h3>
                  <p className="text-caveira-gray text-sm relative z-10">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto animate-fade-in">
          <p className="text-caveira-white text-lg leading-relaxed">
            Com vasta experiência na preparação de candidatos para concursos públicos na área de segurança, 
            Alessandro Melo desenvolveu o método <span className="font-bold" style={{ 
              background: 'var(--gradient-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>CAVEIRA</span>, 
            focado em <span className="font-bold" style={{ 
              background: 'var(--gradient-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>resultados concretos</span> e aprovação.
          </p>
        </div>
      </div>
    </section>
  );
};
