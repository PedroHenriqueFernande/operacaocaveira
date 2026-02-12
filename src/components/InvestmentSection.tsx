import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export const InvestmentSection = () => {
  return (
    <section className="relative py-24 bg-caveira-black">
      {/* Decorative Elements - Metallic Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] animate-float" style={{ background: 'var(--gradient-gold-radial)' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-caveira-red/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <span className="text-caveira-gold font-bold text-sm tracking-widest uppercase" style={{ textShadow: 'var(--shadow-gold)' }}>Invista no seu futuro</span>
        <h2 className="text-4xl md:text-6xl font-black mt-2 mb-6">
          INVESTIMENTO <span style={{
            background: 'var(--gradient-gold)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>QUE VALE A PENA</span>
        </h2>
        <div className="text-caveira-gold text-2xl sm:text-3xl font-black tracking-widest uppercase mb-8 animate-pulse">
          OFERTA EXCLUSIVA
        </div>

        <div className="bg-caveira-steel/30 border-2 border-caveira-gold/30 rounded-2xl p-10 backdrop-blur-sm max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2 mb-8 animate-fade-in">
            <span className="text-caveira-gray text-2xl sm:text-3xl line-through mt-2">De R$ 197,00</span>
            <span className="text-caveira-white text-lg sm:text-xl">Por apenas</span>

            <div className="flex items-end gap-2 mt-2">
              <span className="text-caveira-white text-2xl sm:text-3xl mb-1">Por 12 x</span>
              <div className="flex items-baseline gap-1">
                <span className="text-caveira-gold text-2xl sm:text-3xl font-bold">R$</span>
                <span className="text-caveira-gold text-5xl sm:text-6xl font-black">15,20</span>
              </div>
            </div>

            <span className="text-caveira-white text-2xl sm:text-3xl mt-2 font-bold">ou R$147,00 à vista</span>
          </div>

          {/* CTA Button */}
          <a href="https://pay.hotmart.com/A103352371H">
            <Button className="group relative px-6 py-5 sm:px-10 sm:py-6 md:px-12 md:py-6 rounded-lg font-black text-base sm:text-lg md:text-xl uppercase tracking-wider flex items-center justify-center gap-2 md:gap-3 mx-auto overflow-hidden whitespace-nowrap animate-hero-badge-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-caveira-gold via-yellow-400 to-caveira-gold group-hover:from-yellow-400 group-hover:via-caveira-gold group-hover:to-yellow-400 transition-all duration-500" style={{ background: 'var(--gradient-gold)' }}></div>
              <div className="absolute inset-0" style={{ boxShadow: 'var(--shadow-inset-luxury)' }}></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
              </div>
              <Flame className="w-5 h-5 md:w-6 md:h-6 relative z-10 text-caveira-black hidden md:block" />
              <span className="relative z-10 text-caveira-black" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>GARANTIR MINHA VAGA</span>
              <Flame className="w-5 h-5 md:w-6 md:h-6 relative z-10 text-caveira-black hidden md:block" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};