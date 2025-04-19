
import { ArrowRight, CheckCircle } from "lucide-react";
import { BookCover } from "@/components/BookCover";
import { CtaButton } from "@/components/CtaButton";

interface BookDetailsSectionProps {
  scrollToCheckout: () => void;
}

export function BookDetailsSection({ scrollToCheckout }: BookDetailsSectionProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          O Que Você Vai <span className="font-extrabold">Descobrir</span> Em Cada eBook
        </h2>
        
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <BookCover 
              image="/lovable-uploads/a0d199ea-bb2e-4665-ab25-50f66e590172.png"
              title="Produtividade & Organização"
              className="w-48 flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Produtividade & Organização</h3>
              <p className="text-lg text-gray-700 mb-4">
                Descubra o sistema prático de organização pessoal baseado em estudos científicos sobre foco, atenção e desempenho ótimo do cérebro.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Técnica de priorização que elimina 80% da procrastinação, desenvolvida por neurocientistas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">O método dos "blocos de foco" que amplia sua capacidade de concentração em 3X</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Estratégia de organização de ambiente que reduz o estresse mental e o tempo perdido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8 md:flex-row-reverse">
            <BookCover 
              image="/lovable-uploads/cec96a43-700d-4e92-bca9-eef1a689e0ec.png"
              title="Mindfulness & Redução de Estresse"
              className="w-48 flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mindfulness & Redução de Estresse</h3>
              <p className="text-lg text-gray-700 mb-4">
                Práticas validadas cientificamente para diminuir a ansiedade, melhorar a concentração e encontrar calma interior, mesmo nos dias mais caóticos.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Exercícios de 3 minutos que provocam uma resposta imediata de relaxamento, comprovados por pesquisas em neuroimagem</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Técnica de "desconexão do piloto automático" que reduz pensamentos ruminantes em 60%</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">O protocolo de 8 semanas que demonstrou diminuir fisicamente o centro de estresse no cérebro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <BookCover 
              image="/lovable-uploads/cbd48b96-0b1d-4c70-8af2-3f627906c122.png"
              title="Hábitos Positivos"
              className="w-48 flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Hábitos Positivos & Transformação Pessoal</h3>
              <p className="text-lg text-gray-700 mb-4">
                A ciência definitiva por trás da formação e manutenção de novos hábitos que realmente duram, baseada nos mais recentes estudos sobre neuroplasticidade.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">A fórmula "gatilho-rotina-recompensa" que programa seu cérebro para mudanças automáticas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Como superar o "platô de hábitos" que faz 92% das pessoas desistirem após 2 semanas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Sistema de "encadeamento de hábitos" que torna a mudança quase inevitável, mesmo para os mais resistentes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8 md:flex-row-reverse">
            <BookCover 
              image="/lovable-uploads/ad92b1f9-a651-4360-9a9f-ca970828c5cc.png"
              title="Inteligência Emocional"
              className="w-48 flex-shrink-0"
            />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Inteligência Emocional</h3>
              <p className="text-lg text-gray-700 mb-4">
                Domine as habilidades sociais e emocionais que determinam 58% do sucesso profissional e 80% da satisfação nos relacionamentos pessoais.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Os 4 pilares da inteligência emocional que transformam conflitos em oportunidades de conexão</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Técnica de "pausa emocional" que impede reações impulsivas em momentos de pressão</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Como desenvolver empatia genuína que fortalece relacionamentos pessoais e profissionais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <CtaButton onClick={scrollToCheckout}>
            Quero Todos os 4 eBooks Agora! <ArrowRight className="ml-2 w-5 h-5" />
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
