import { Award, BookOpen, Flame, Target, Users } from "lucide-react";

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
          <span className="text-caveira-gold font-bold text-sm tracking-widest uppercase" style={{ textShadow: 'var(--shadow-gold)' }}>Olá! Eu sou o Alessandro Melo</span>
          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-4">
            Professor de Direito Administrativo, especialista em concursos públicos e apaixonado por <span className="relative inline-block" style={{ 
              background: 'var(--gradient-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none'
            }}>ensinar</span>.
          </h2>
          <div className="flex justify-center my-8">
            <img 
              src="/ex1.png" 
              alt="Professor Alessandro Melo - Tactical" 
              className="w-full max-w-lg h-auto rounded-lg shadow-lg border-2 border-caveira-gold/50"
            />
          </div>
          <div className="relative w-24 h-1 mx-auto overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'var(--gradient-gold)' }}></div>
            <div className="absolute inset-0 animate-metallic-shine" style={{ 
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              backgroundSize: '200% 100%'
            }}></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 text-center animate-fade-in">
          <p className="text-xl text-caveira-white leading-relaxed mb-6">
            Há mais de 10 anos, ajudo alunos a transformar o Direito Administrativo em uma matéria simples, lógica e fácil de entender.
          </p>
          <p className="text-lg text-caveira-gray leading-relaxed mb-6">
            Minha didática já fez milhares de concurseiros alcançarem o tão sonhado cargo público e agora chegou a sua vez.
          </p>
          <p className="text-lg text-caveira-gray leading-relaxed mb-8">
            Já ajudei milhares de alunos a conquistarem sua vaga no serviço público.
          </p>

          <p className="text-xl text-caveira-gold font-bold leading-relaxed mb-12">
            Se você quer estudar de forma direcionada, sem perder tempo com o que não cai na prova, e finalmente conquistar sua aprovação, clique agora no botão abaixo e descubra como meu método pode te levar direto à sua vaga!
          </p>
          
          {/* CTA Button - Luxury Metallic */}
          <a href="#oferta">
            <button className="group relative px-12 py-6 rounded-lg font-black text-xl uppercase tracking-wider transition-all duration-300 animate-fade-in flex items-center gap-3 mx-auto overflow-hidden" style={{ boxShadow: 'var(--shadow-gold-intense)' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-caveira-gold via-yellow-400 to-caveira-gold group-hover:from-yellow-400 group-hover:via-caveira-gold group-hover:to-yellow-400 transition-all duration-500" style={{ background: 'var(--gradient-gold)' }}></div>
              <div className="absolute inset-0" style={{ boxShadow: 'var(--shadow-inset-luxury)' }}></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
              </div>
              <Flame className="w-6 h-6 relative z-10 text-caveira-black" />
              <span className="relative z-10 text-caveira-black" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>QUERO SER APROVADO</span>
              <Flame className="w-6 h-6 relative z-10 text-caveira-black" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
