import { CheckCircle, Gift, HeartHandshake, ShieldCheck } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";

export function CheckoutSection() {
  const openHotmartLink = () => {
    window.open('https://pay.hotmart.com/T99347832E', '_blank');
  };

  return (
    <section id="checkout" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white pricing-gradient">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-purple-100">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/mesh-gradient.png')] opacity-20 mix-blend-overlay"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              Transforme Sua Vida Hoje Mesmo!
            </h2>
            <p className="text-xl relative z-10">Acesso imediato aos 4 eBooks + Todos os Bônus</p>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Pacote Completo (4 eBooks)</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Produtividade & Organização</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Mindfulness & Redução de Estresse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Hábitos Positivos & Transformação</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Inteligência Emocional</span>
                  </li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500 line-through">R$ 133,40</p>
                <p className="text-3xl font-bold text-primary">R$ 47,00</p>
              </div>
            </div>
            
            <div className="mb-8 border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-highlight" />
                <span>Bônus Exclusivos Incluídos:</span>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Checklist Diário de Produtividade</span>
                  <span className="ml-auto text-sm text-gray-500 line-through">R$ 5,90</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Modelo Prático de Planejamento Semanal</span>
                  <span className="ml-auto text-sm text-gray-500 line-through">R$ 5,90</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Checklist de Práticas Rápidas de Mindfulness</span>
                  <span className="ml-auto text-sm text-gray-500 line-through">R$ 5,90</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Planner de Acompanhamento de 30 Dias</span>
                  <span className="ml-auto text-sm text-gray-500 line-through">R$ 5,90</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
              <div>
                <p className="text-lg font-bold mb-1">Valor Total:</p>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-500 line-through">R$ 157,00</p>
                  <p className="text-3xl font-bold text-success">R$ 47,00</p>
                  <p className="text-sm text-success font-medium">Economize R$ 110,00 (Mais de 70% de desconto)</p>
                  <div className="mt-2 bg-primary/5 rounded-lg p-3 text-center">
                    <p className="text-primary font-semibold">
                      Em até 6x de R$ 7,82
                    </p>
                    <p className="text-sm text-gray-600">
                      ou R$ 47,00 à vista
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <CtaButton large className="w-full py-6" onClick={openHotmartLink}>
                GARANTIR ACESSO IMEDIATO
              </CtaButton>
              
              <div className="grid grid-cols-3 gap-2 items-center">
                <div className="flex items-center justify-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <img src="/pix.svg" alt="PIX" className="h-5" />
                  <span className="text-sm font-medium">PIX</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <img src="/card.svg" alt="Cartão" className="h-5" />
                  <span className="text-sm font-medium">Cartão</span>
                </div>
                <div className="flex items-center justify-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <img src="/boleto.svg" alt="Boleto" className="h-5" />
                  <span className="text-sm font-medium">Boleto</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm">Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <HeartHandshake className="w-5 h-5" />
                <span className="text-sm">Satisfação Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
