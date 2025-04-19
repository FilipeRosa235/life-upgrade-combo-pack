import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { BookDetailsSection } from "@/components/sections/BookDetailsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { ScienceSection } from "@/components/sections/ScienceSection";
import { CheckoutSection } from "@/components/sections/CheckoutSection";
import { FloatingCta } from "@/components/FloatingCta";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {scrolled && <FloatingCta scrollToCheckout={scrollToCheckout} />}
      
      <HeroSection scrollToCheckout={scrollToCheckout} />
      <ProblemsSection scrollToCheckout={scrollToCheckout} />
      <BookDetailsSection scrollToCheckout={scrollToCheckout} />
      <TestimonialsSection />
      <BonusSection />
      <ScienceSection />
      <CheckoutSection />
    </div>
  );
};

export default Index;
