
import { CtaButton } from "./CtaButton";

interface FloatingCtaProps {
  scrollToCheckout: () => void;
}

export function FloatingCta({ scrollToCheckout }: FloatingCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg border-t p-4 z-50 flex justify-center items-center gap-4 animate-fade-in">
      <span className="font-bold text-purple-600">📚 4 eBooks + Bônus</span>
      <CtaButton onClick={scrollToCheckout}>
        Garantir Acesso Imediato
      </CtaButton>
    </div>
  );
}
