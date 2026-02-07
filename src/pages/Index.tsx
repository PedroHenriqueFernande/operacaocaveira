import { HeroSection } from "@/components/HeroSection";
import { ProfessorSection } from "@/components/ProfessorSection";
import { CourseSection } from "@/components/CourseSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { OfferSection } from "@/components/OfferSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { BonusSection } from "@/components/BonusSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { AccessTimeSection } from "@/components/AccessTimeSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-caveira-black text-foreground overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <CourseSection />
      <BonusSection />
      <TargetAudienceSection />
      <InvestmentSection />
      <AccessTimeSection />
      <ProfessorSection />
      <TestimonialsSection />
      <OfferSection />
      <GuaranteeSection />
      <FaqSection />
      <Footer />
    </main>
  );
};

export default Index;
