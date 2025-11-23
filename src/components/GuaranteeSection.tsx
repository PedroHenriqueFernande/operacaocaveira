import { Shield } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="relative py-24 bg-caveira-steel">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="w-[800px] h-[800px]" />
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex mb-12 relative">
            <div className="absolute inset-0 bg-caveira-gold/30 blur-2xl animate-glow-pulse"></div>
            <div className="relative bg-caveira-gold/20 border-4 border-caveira-gold rounded-full p-8 animate-float">
              <Shield className="w-32 h-32 text-caveira-gold" />
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            GARANTIA <span className="text-caveira-gold">CAVEIRA</span>
          </h2>

          <div className="bg-caveira-black/50 border-2 border-caveira-gold/30 rounded-2xl p-10 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-caveira-white leading-relaxed mb-6">
              Você tem <span className="text-caveira-gold font-bold text-3xl">7 dias</span> de garantia incondicional.
            </p>
            
            <p className="text-lg text-caveira-gray leading-relaxed mb-6">
              Se por qualquer motivo você não ficar satisfeito com o curso, 
              basta solicitar o reembolso completo dentro deste prazo. 
              Sem perguntas, sem burocracia.
            </p>

            <div className="pt-6 border-t border-caveira-gold/20">
              <p className="text-caveira-white font-bold text-xl">
                O risco é todo nosso. A aprovação é toda sua.
              </p>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-caveira-black/30 rounded-lg border border-caveira-gold/20">
              <div className="text-4xl font-black text-caveira-gold mb-2">100%</div>
              <div className="text-caveira-gray">Garantia de Satisfação</div>
            </div>
            <div className="p-6 bg-caveira-black/30 rounded-lg border border-caveira-gold/20">
              <div className="text-4xl font-black text-caveira-gold mb-2">7 Dias</div>
              <div className="text-caveira-gray">Para Testar Sem Risco</div>
            </div>
            <div className="p-6 bg-caveira-black/30 rounded-lg border border-caveira-gold/20">
              <div className="text-4xl font-black text-caveira-gold mb-2">Zero</div>
              <div className="text-caveira-gray">Burocracia no Reembolso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
