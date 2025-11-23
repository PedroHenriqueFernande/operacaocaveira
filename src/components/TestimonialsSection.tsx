import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Guarda Municipal - Aprovado em 1º lugar",
    text: "O método Caveira mudou minha vida. A didática do professor Alessandro é incomparável. Consegui entender Direito Administrativo de forma clara e objetiva.",
    rating: 5
  },
  {
    name: "Juliana Santos",
    role: "Guarda Municipal - Aprovada",
    text: "Finalmente encontrei um curso que fala a nossa língua. Material direto, sem enrolação. Me senti parte de uma tropa de verdade!",
    rating: 5
  },
  {
    name: "Ricardo Oliveira",
    role: "Concurseiro - Aprovado PM",
    text: "Estudei por vários cursos, mas o Caveira foi o diferencial. As questões comentadas foram essenciais para minha aprovação.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 bg-caveira-black">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--caveira-gray)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--caveira-gray)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-caveira-gold"></div>
            <Quote className="w-8 h-8 text-caveira-gold animate-pulse" />
            <div className="w-8 h-1 bg-caveira-gold"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mt-2 mb-4">
            MISSÃO <span className="text-caveira-gold">CUMPRIDA</span>
          </h2>
          <p className="text-caveira-gray text-lg max-w-2xl mx-auto">
            Depoimentos de soldados que alcançaram a aprovação
          </p>
          <div className="w-24 h-1 bg-caveira-gold mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group relative bg-caveira-steel/50 backdrop-blur-sm border-2 border-caveira-gold/20 p-8 hover:border-caveira-gold transition-all duration-500 animate-fade-in hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-12 h-12 text-caveira-gold/10 group-hover:text-caveira-gold/20 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-caveira-gold text-caveira-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-caveira-white mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-caveira-gold/20 pt-4">
                <p className="font-bold text-caveira-gold">{testimonial.name}</p>
                <p className="text-sm text-caveira-gray">{testimonial.role}</p>
              </div>

              {/* Corner Accent Lines */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-caveira-gold/30 group-hover:border-caveira-gold transition-colors duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-caveira-gold/30 group-hover:border-caveira-gold transition-colors duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
