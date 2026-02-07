import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Flame } from "lucide-react";

export const OfferSection = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(353 85% 44% / 0.2) 0%, hsl(0 0% 4%) 30%, hsl(0 0% 4%) 100%)' }}>
      {/* Dramatic Background Effects - Luxury */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] animate-pulse-soft" style={{ background: 'var(--gradient-gold-radial)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[150px] animate-pulse-soft" style={{ background: 'radial-gradient(circle, hsl(353 85% 44% / 0.3) 0%, transparent 70%)', animationDelay: "1s" }}></div>
      </div>

      {/* Sparks Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-caveira-gold rounded-full animate-ping"></div>
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-caveira-gold rounded-full animate-ping" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-caveira-gold rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Alert Banner */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-caveira-red/30 border-2 border-caveira-red px-8 py-4 rounded-lg animate-pulse-soft">
            <AlertTriangle className="w-8 h-8 text-caveira-red" />
            <span className="text-caveira-white font-bold text-xl tracking-wider">
              ÚLTIMA CHAMADA DA TROPA
            </span>
            <AlertTriangle className="w-8 h-8 text-caveira-red" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Offer Box - Premium Luxury */}
          <div className="relative backdrop-blur-sm rounded-2xl p-12 animate-fade-in overflow-hidden" style={{ 
            background: 'linear-gradient(135deg, hsl(0 0% 17% / 0.8) 0%, hsl(0 0% 10% / 0.9) 100%)',
            boxShadow: 'var(--shadow-gold-intense)'
          }}>
            {/* Metallic Border Effect */}
            <div className="absolute inset-0 rounded-2xl" style={{ 
              background: 'var(--gradient-gold)',
              padding: '4px'
            }}>
              <div className="w-full h-full bg-transparent rounded-2xl"></div>
            </div>
            
            {/* Luxury Background Overlay */}
            <div className="absolute inset-0 rounded-2xl" style={{ background: 'var(--gradient-luxury)', opacity: 0.5 }}></div>
            
            {/* Animated Shine */}
            <div className="absolute inset-0 opacity-30 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-caveira-gold/10 to-transparent animate-metallic-shine" style={{ backgroundSize: '200% 200%' }}></div>
            </div>
            
            {/* Corner Decorations - Luxury */}
            <div className="absolute -top-2 -left-2 w-16 h-16">
              <div className="w-full h-full border-t-4 border-l-4 border-caveira-gold" style={{ filter: 'drop-shadow(0 0 10px hsl(43 88% 38% / 0.5))' }}></div>
            </div>
            <div className="absolute -top-2 -right-2 w-16 h-16">
              <div className="w-full h-full border-t-4 border-r-4 border-caveira-gold" style={{ filter: 'drop-shadow(0 0 10px hsl(43 88% 38% / 0.5))' }}></div>
            </div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16">
              <div className="w-full h-full border-b-4 border-l-4 border-caveira-gold" style={{ filter: 'drop-shadow(0 0 10px hsl(43 88% 38% / 0.5))' }}></div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16">
              <div className="w-full h-full border-b-4 border-r-4 border-caveira-gold" style={{ filter: 'drop-shadow(0 0 10px hsl(43 88% 38% / 0.5))' }}></div>
            </div>

            {/* Content */}
            <div className="text-center mb-8 relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-4">
                ENTRE PARA A <span style={{ 
                  background: 'var(--gradient-gold)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>TROPA</span>
              </h2>
              <p className="text-xl text-caveira-gray mb-8">
                Garanta sua vaga no Curso para Guarda Municipal de Direito Administrativo
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="text-caveira-gray text-xl line-through mb-2">
                  De R$ 197,00
                </div>
                <div className="text-5xl md:text-7xl font-black mb-2 animate-glow-pulse" style={{ 
                  background: 'var(--gradient-gold)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'var(--shadow-gold)'
                }}>
                  R$ 147,00
                </div>
                <div className="text-caveira-white text-lg">
                  ou 12x de R$ 15,20
                </div>
              </div>

              {/* Bonus List */}
              <div className="text-left max-w-md mx-auto mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-caveira-gold mt-1 flex-shrink-0" />
                  <span className="text-caveira-white">Acesso vitalício a todas as aulas</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-caveira-gold mt-1 flex-shrink-0" />
                  <span className="text-caveira-white">Material em PDF exclusivo</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-caveira-gold mt-1 flex-shrink-0" />
                  <span className="text-caveira-white">Suporte direto com o professor</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-caveira-gold mt-1 flex-shrink-0" />
                  <span className="text-caveira-white">Certificado de conclusão</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-caveira-gold mt-1 flex-shrink-0" />
                  <span className="text-caveira-white">Atualizações gratuitas</span>
                </div>
              </div>

              {/* CTA Button - Premium Luxury */}
              <button className="w-full group relative px-12 py-10 rounded-xl font-bold text-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 overflow-hidden" style={{ boxShadow: 'var(--shadow-gold-intense)' }}>
                <div className="absolute inset-0 transition-all duration-500" style={{ background: 'var(--gradient-gold)' }}></div>
                <div className="absolute inset-0" style={{ boxShadow: 'var(--shadow-inset-luxury)' }}></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
                </div>
                <Flame className="w-8 h-8 animate-pulse-soft relative z-10 text-caveira-black" />
                <span className="relative z-10 text-caveira-black uppercase tracking-wider" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Garantir Minha Vaga Agora</span>
                <Flame className="w-8 h-8 animate-pulse-soft relative z-10 text-caveira-black" />
              </button>

              {/* Urgency Text */}
              <p className="text-caveira-red font-bold text-lg mt-6 animate-pulse-soft">
                Oferta válida por tempo limitado
              </p>
            </div>
          </div>

          {/* Security Badges */}
          <div className="flex justify-center items-center gap-8 mt-12 text-caveira-gray text-sm animate-fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-caveira-gold" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-caveira-gold" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-caveira-gold" />
              <span>Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
