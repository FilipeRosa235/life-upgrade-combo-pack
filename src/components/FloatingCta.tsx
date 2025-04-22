
import { CtaButton } from "./CtaButton";

interface FloatingCtaProps {
  scrollToCheckout: () => void;
}

export function FloatingCta({ scrollToCheckout }: FloatingCtaProps) {
  const openHotmartLink = () => {
    window.open('https://pay.hotmart.com/T99347832E', '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg border-t p-4 z-50 flex justify-center items-center gap-4 animate-fade-in">
      <span className="font-bold text-purple-600">📚 4 eBooks + Bônus</span>
      <CtaButton onClick={openHotmartLink}>
        Garantir Acesso Imediato
      </CtaButton>
    </div>
  );
}
