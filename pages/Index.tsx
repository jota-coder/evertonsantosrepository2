import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";

import MethodSection from "@/components/landing/MethodSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TeamSection from "@/components/landing/TeamSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <MethodSection />
      <HowItWorksSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      
    </div>
  );
};

export default Index;
