import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-caveira-black py-16 border-t border-caveira-gold/30">
      {/* Top Golden Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-caveira-gold to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="inline-flex items-center gap-4 mb-8 group cursor-pointer">
            <Shield className="w-16 h-16 text-caveira-gold group-hover:scale-110 transition-transform duration-300" />
            <div className="text-left">
              <div className="text-2xl font-black text-caveira-gold">CAVEIRA</div>
              <div className="text-sm text-caveira-gray">Direito Administrativo</div>
            </div>
          </div>

          {/* Professor Signature */}
          <div className="mb-8">
            <p className="text-caveira-white text-lg mb-2">
              Professor <span className="text-caveira-gold font-bold">Alessandro Melo</span>
            </p>
            <p className="text-caveira-gray text-sm">
              Especialista em Concursos Públicos e Direito Administrativo
            </p>
          </div>

          {/* Motto */}
          <div className="max-w-2xl mx-auto py-8 border-y border-caveira-gold/20">
            <p className="text-2xl md:text-3xl font-black text-caveira-gold animate-shimmer bg-gradient-to-r from-caveira-gold via-caveira-white to-caveira-gold bg-[length:200%_auto] bg-clip-text text-transparent">
              "Caveira não desiste. Caveira cumpre. Caveira é aprovado."
            </p>
          </div>

          {/* Legal */}
          <div className="mt-8 text-caveira-gray text-sm space-y-2">
            <p>© 2024 Curso Caveira de Direito Administrativo. Todos os direitos reservados.</p>
            <div className="flex justify-center gap-6 text-xs">
              <a href="#" className="hover:text-caveira-gold transition-colors duration-300">Termos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-caveira-gold transition-colors duration-300">Política de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-caveira-gold transition-colors duration-300">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
