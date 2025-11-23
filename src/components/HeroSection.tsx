import { Flame, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-caveira-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
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

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge - Luxury Metallic */}
        <div className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 animate-fade-in overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-caveira-gold/20 via-caveira-gold/30 to-caveira-gold/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 border border-caveira-gold/50" style={{ boxShadow: 'var(--shadow-metallic)' }}></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-caveira-gold/20 to-transparent animate-shine"></div>
          </div>
          <Shield className="w-5 h-5 text-caveira-gold relative z-10" />
          <span className="text-caveira-gold font-bold tracking-wider uppercase text-sm relative z-10" style={{ textShadow: '0 0 10px hsl(43 88% 38% / 0.5)' }}>
            Operação Caveira
          </span>
        </div>

        {/* Main Title - Luxury Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          CURSO <span className="text-caveira-gold relative inline-block" style={{ 
            textShadow: 'var(--shadow-gold)',
            background: 'var(--gradient-gold)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>CAVEIRA</span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-7xl">DE DIREITO</span>
          <br />
          <span className="text-caveira-gold relative inline-block" style={{ 
            textShadow: 'var(--shadow-gold)',
            background: 'var(--gradient-gold)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>ADMINISTRATIVO</span>
        </h1>

        <p className="text-xl md:text-2xl text-caveira-gray max-w-3xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          O treinamento definitivo para <span className="text-caveira-gold font-bold">Guardas Municipais de Manaus</span> e concurseiros de segurança pública.
        </p>

        <p className="text-lg text-caveira-white mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Ministrado por <span className="text-caveira-gold font-bold">Alessandro Melo</span>, especialista em concursos públicos e Direito Administrativo.
        </p>

        {/* CTA Button - Luxury Metallic */}
        <button className="group relative px-12 py-6 rounded-lg font-black text-xl uppercase tracking-wider transition-all duration-300 animate-fade-in flex items-center gap-3 mx-auto overflow-hidden" style={{ animationDelay: '0.6s', boxShadow: 'var(--shadow-gold-intense)' }}>
          <div className="absolute inset-0 bg-gradient-to-r from-caveira-gold via-yellow-400 to-caveira-gold group-hover:from-yellow-400 group-hover:via-caveira-gold group-hover:to-yellow-400 transition-all duration-500" style={{ background: 'var(--gradient-gold)' }}></div>
          <div className="absolute inset-0" style={{ boxShadow: 'var(--shadow-inset-luxury)' }}></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
          </div>
          <Flame className="w-6 h-6 animate-pulse relative z-10 text-caveira-black" />
          <span className="relative z-10 text-caveira-black" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Entrar na Operação</span>
          <Flame className="w-6 h-6 animate-pulse relative z-10 text-caveira-black" />
        </button>

        {/* Warning Banner - Metallic Alert */}
        <div className="relative mt-12 inline-flex items-center gap-3 px-8 py-4 rounded-lg animate-pulse overflow-hidden">
          <div className="absolute inset-0 bg-caveira-red/20 backdrop-blur-sm"></div>
          <div className="absolute inset-0 border border-caveira-red/60" style={{ boxShadow: 'var(--shadow-red)' }}></div>
          <span className="text-caveira-red font-bold text-lg tracking-wider relative z-10" style={{ textShadow: '0 0 10px hsl(353 85% 44% / 0.5)' }}>
            VAGAS LIMITADAS | INÍCIO IMEDIATO
          </span>
        </div>
      </div>

      {/* Diagonal Accent - Metallic */}
      <div className="absolute bottom-0 left-0 w-full h-32 transform -skew-y-2 overflow-hidden">
        <div className="w-full h-full" style={{ background: 'var(--gradient-gold)', opacity: 0.2 }}></div>
      </div>
    </section>
  );
};
