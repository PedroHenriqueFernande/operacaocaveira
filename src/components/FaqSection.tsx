import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que é o Operação Guarda Municipal?",
    answer:
      "Curso direto ao ponto, criado para quem vai fazer o concurso da GUARDA MUNICIPAL DE MANAUS no cargo TÉCNICO MUNICIPAL I – GUARDA MUNICIPAL.",
  },
  {
    question: "Operação Guarda Municipal é online ou presencial?",
    answer:
      "Curso online, pois você poderá assistir quando e onde quiser, pelo celular, tablet ou computador.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "6 meses completos OU até a data da sua prova (o que acontecer primeiro).",
  },
  {
    question: "As aulas são ao vivo ou gravadas?",
    answer:
      "As aulas dos módulos são gravadas (para você assistir quando puder). As lives dos bônus são semanais e ao vivo, mas ficam gravadas.",
  },
  {
    question: "E se eu tiver dúvidas?",
    answer: "Você terá acesso ao grupo exclusivo do WhatsApp e suporte direto com o professor.",
  },
  {
    question: "O curso é atualizado?",
    answer: "Sim! Sempre que houver mudança legislativa relevante, o curso é atualizado.",
  },
];

export const FaqSection = () => {
  return (
    <section className="relative py-24 bg-caveira-black">
      {/* Decorative Elements - Metallic Glows */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] animate-float"
        style={{ background: "var(--gradient-gold-radial)" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-caveira-red/10 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <span
          className="text-caveira-gold font-bold text-sm tracking-widest uppercase"
          style={{ textShadow: "var(--shadow-gold)" }}
        >
          Tire suas dúvidas
        </span>
        <h2 className="text-4xl md:text-6xl font-black mt-2 mb-6">
          PERGUNTAS <span
            style={{
              background: "var(--gradient-gold)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FREQUENTES
          </span>
        </h2>

        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg md:text-xl text-caveira-white hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-caveira-gray text-base md:text-lg text-left">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};