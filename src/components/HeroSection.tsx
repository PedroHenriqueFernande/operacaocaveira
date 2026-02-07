import { Flame, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-caveira-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/hero-background.jpg" 
          alt="Tactical background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-caveira-black via-caveira-black/50 to-caveira-black"></div>
        {/* Metallic Gradient Overlay */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-luxury)' }}></div>
      </div>

      {/* Decorative Elements - Metallic Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-[120px] animate-float" style={{ background: 'var(--gradient-gold-radial)' }}></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-caveira-red/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 50%, hsl(43 88% 38% / 0.1) 0%, transparent 50%)', filter: 'blur(60px)' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col">
        {/* Badge Centralizado no Topo */}
        <div className="w-full flex justify-center pt-8 animate-fade-in">
          <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-caveira-gold/20 via-caveira-gold/30 to-caveira-gold/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0 border border-caveira-gold/50" style={{ boxShadow: 'var(--shadow-metallic)' }}></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-caveira-gold/20 to-transparent animate-shine"></div>
            </div>
            <Shield className="w-15 h-5 text-caveira-gold relative z-10" />
            <span className="text-caveira-gold font-bold tracking-wider uppercase text-sm relative z-10" style={{ textShadow: '0 0 10px hsl(43 88% 38% / 0.5)' }}>
              Operação Guarda Municipal
            </span>
          </div>
        </div>

        {/* Conteúdo Principal - Duas Colunas */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center py-8">
          {/* Left Column (60%) */}
          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left md:pr-8">
            <div className="max-w-3xl animate-fade-in">
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ animationDelay: '0.2s' }}>
                CONQUISTE SUA VAGA NA <span className="text-caveira-gold relative inline-block" style={{
                  textShadow: 'var(--shadow-gold)',
                  background: 'var(--gradient-gold)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>GUARDA MUNICIPAL</span> DE MANAUS ESTUDANDO COM <span className="text-caveira-gold relative inline-block" style={{
                  textShadow: 'var(--shadow-gold)',
                  background: 'var(--gradient-gold)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>MÉTODO</span>, <span className="text-caveira-gold relative inline-block" style={{
                  textShadow: 'var(--shadow-gold)',
                  background: 'var(--gradient-gold)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>FOCO</span> E <span className="text-caveira-gold relative inline-block" style={{
                  textShadow: 'var(--shadow-gold)',
                  background: 'var(--gradient-gold)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>ESTRATÉGIA</span>.
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-caveira-gray max-w-full mb-4" style={{ animationDelay: '0.4s' }}>
                Tudo o que você precisa para se tornar um Guarda Municipal aprovado
              </p>

              {/* Instructor Info */}
              <p className="text-lg text-caveira-white mb-8 max-w-full" style={{ animationDelay: '0.5s' }}>
                Ministrado por <span className="text-caveira-gold font-bold">Alessandro Melo</span>, especialista em concursos públicos e Direito Administrativo.
              </p>
            </div>
          </div>

          {/* Right Column (40%) - Imagem do Professor */}
          <div className="w-full md:w-2/5 flex items-center justify-center mt-8 md:mt-0 md:pl-4 animate-fade-in-right">
            <div className="relative w-full max-w-sm rounded-lg overflow-hidden" style={{ boxShadow: 'var(--shadow-deep)' }}>
              <img
                src="/1.jpg"
                alt="Professor Alessandro Melo"
                className="w-full h-auto object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-caveira-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <p className="text-caveira-white text-xl font-bold">Professor Alessandro Melo</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA e Banner Centralizados na parte inferior */}
        <div className="w-full flex flex-col items-center pb-16 animate-fade-in">
          {/* CTA Button */}
          <button className="group relative px-12 py-6 rounded-lg font-black text-xl uppercase tracking-wider transition-all duration-300 flex items-center gap-3 overflow-hidden" style={{ animationDelay: '0.6s', boxShadow: 'var(--shadow-gold-intense)' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-caveira-gold via-yellow-400 to-caveira-gold group-hover:from-yellow-400 group-hover:via-caveira-gold group-hover:to-yellow-400 transition-all duration-500" style={{ background: 'var(--gradient-gold)' }}></div>
            <div className="absolute inset-0" style={{ boxShadow: 'var(--shadow-inset-luxury)' }}></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
            </div>
            <Flame className="w-6 h-6 animate-pulse-soft relative z-10 text-caveira-black" />
            <span className="relative z-10 text-caveira-black" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Entrar na Operação</span>
            <Flame className="w-6 h-6 animate-pulse-soft relative z-10 text-caveira-black" />
          </button>

          {/* Warning Banner */}
          <div className="relative mt-6 inline-flex items-center gap-3 px-8 py-4 rounded-lg animate-pulse-soft overflow-hidden">
            <div className="absolute inset-0 bg-caveira-red/20 backdrop-blur-sm"></div>
            <div className="absolute inset-0 border border-caveira-red/60" style={{ boxShadow: 'var(--shadow-red)' }}></div>
            <span className="text-caveira-red font-bold text-lg tracking-wider relative z-10" style={{ textShadow: '0 0 10px hsl(353 85% 44% / 0.5)' }}>
              VAGAS LIMITADAS | INÍCIO IMEDIATO
            </span>
          </div>
        </div>
      </div>

      {/* Diagonal Accent - Metallic */}
      <div className="absolute bottom-0 left-0 w-full h-32 transform -skew-y-2 overflow-hidden">
        <div className="w-full h-full" style={{ background: 'var(--gradient-gold)', opacity: 0.2 }}></div>
      </div>
    </section>
  );
};
