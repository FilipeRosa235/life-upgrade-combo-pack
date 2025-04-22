
import { BookCover } from "@/components/BookCover";
import { CtaButton } from "@/components/CtaButton";
import { Users } from "lucide-react";

interface HeroSectionProps {
  scrollToCheckout: () => void;
}

export function HeroSection({ scrollToCheckout }: HeroSectionProps) {
  const openHotmartLink = () => {
    window.open('https://pay.hotmart.com/T99347832E', '_blank');
  };

  return (
    <section className="relative overflow-hidden hero-gradient pt-20 pb-16 px-4 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] opacity-30 mix-blend-overlay"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <span
  className="inline-block backdrop-blur-md bg-secondary-purple/60 border border-white/20 text-white py-2 px-5 rounded-full text-xs md:text-sm font-bold mb-4 animate-fade-in tracking-wider uppercase shadow-xl drop-shadow-md"
  style={{ boxShadow: '0 4px 24px 0 rgba(110,89,165,0.20)' }}
>
  SUA JORNADA DE TRANSFORMAÇÃO PESSOAL
</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
  <span
    className="block mb-2 bg-gradient-to-r from-[#8f7ada] via-[#6E59A5] to-[#5C258D] bg-clip-text text-transparent drop-shadow-xl"
    style={{
      textShadow: '0 4px 20px rgba(110,89,165,0.14), 0 1px 0 #fff',
      letterSpacing: '0.01em',
    }}
  >
    Transforme Sua Vida
  </span>
  <span className="block text-gray-800 dark:text-gray-100/90 drop-shadow-sm">
    Com 4 Poderosos eBooks Baseados em Ciência
  </span>
</h1>
            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200/90 mb-8 max-w-prose drop-shadow-sm">
  De organização à inteligência emocional: o pacote completo para quem quer resultados reais em todas as áreas da vida
</p>
            <div className="mb-8">
              <CtaButton large onClick={openHotmartLink}>
                Quero Transformar Minha Vida Agora!
              </CtaButton>
            </div>
            
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <BookCover 
                image="/lovable-uploads/a0d199ea-bb2e-4665-ab25-50f66e590172.png"
                title="Produtividade & Organização"
                className="animate-float"
              />
              <BookCover 
                image="/lovable-uploads/cec96a43-700d-4e92-bca9-eef1a689e0ec.png"
                title="Mindfulness & Redução de Estresse" 
                className="translate-y-6 animate-float" 
                style={{ animationDelay: "0.2s" }}
              />
              <BookCover 
                image="/lovable-uploads/cbd48b96-0b1d-4c70-8af2-3f627906c122.png"
                title="Hábitos Positivos" 
                className="translate-y-[-1rem] animate-float"
                style={{ animationDelay: "0.4s" }}
              />
              <BookCover 
                image="/lovable-uploads/ad92b1f9-a651-4360-9a9f-ca970828c5cc.png"
                title="Inteligência Emocional"
                className="translate-y-4 animate-float" 
                style={{ animationDelay: "0.6s" }}
              />
            </div>
            <div className="absolute -top-8 -right-4 bg-highlight text-white text-sm font-bold py-2 px-4 rounded-full rotate-12 shadow-lg">
              + Bônus exclusivos!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

