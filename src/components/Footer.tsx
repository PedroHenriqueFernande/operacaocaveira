import { Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-caveira-black py-16 border-t border-caveira-gold/30">
      {/* Top Golden Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-caveira-gold to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 group cursor-pointer">
            <Shield className="w-16 h-16 text-caveira-gold group-hover:scale-110 transition-transform duration-300 mx-auto" />
            <div className="text-center">
              <div className="text-2xl font-black text-caveira-gold">Operação Guarda Municipal</div>
              <div className="text-sm text-caveira-gray">Direito Administrativo</div>
            </div>
          </div>

          {/* Professor Signature */}
          <div className="mb-8">
            <p className="text-caveira-white text-lg mb-2">
              Professor <span className="text-caveira-gold font-bold">Alessandro Melo</span>
            </p>
            <p className="text-caveira-gray text-sm">
              Especialista em Concursos Públicos
            </p>
          </div>

          {/* Legal */}
          <div className="mt-8 text-caveira-gray text-sm space-y-2">
            <p>© 2026. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
