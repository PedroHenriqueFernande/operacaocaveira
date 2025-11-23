import { HeroSection } from "@/components/HeroSection";
import { ProfessorSection } from "@/components/ProfessorSection";
import { CourseSection } from "@/components/CourseSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferSection } from "@/components/OfferSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-caveira-black text-foreground">
      <HeroSection />
      <ProfessorSection />
      <CourseSection />
      <BenefitsSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <Footer />
    </main>
  );
};

export default Index;
