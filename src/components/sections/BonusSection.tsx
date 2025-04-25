import { Calendar, FileText, LightbulbIcon, ListChecks } from "lucide-react";
import { CtaButton } from "../CtaButton";

export function BonusSection() {
  const openHotmartLink = () => {
    window.open('https://pay.hotmart.com/T99347832E', '_blank');
  };

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-28 md:h-28 bg-highlight rounded-full flex items-center justify-center text-white font-bold text-sm md:text-3xl z-10 shadow-xl animate-pulse-slow">
            BÔNUS!
          </div>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pacote Completo de Materiais Imprimíveis <span className="text-highlight">GRÁTIS</span>
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                Para cada eBook, você receberá planners, checklists e materiais práticos que vão potencializar seus resultados!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <ListChecks className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Checklist Diário de Produtividade</h3>
                  <p className="text-gray-200">Use esse checklist no início e no final de cada dia útil. Ele ajuda a manter o foco, priorizar com clareza e ajustar sua rotina com consistência.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <FileText className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Modelo Prático de Planejamento Semanal</h3>
                  <p className="text-gray-200">Planeje sua semana em 30 minutos. Use este modelo no domingo à noite ou na manhã de segunda-feira.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <LightbulbIcon className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Checklist de Práticas Rápidas de Mindfulness</h3>
                  <p className="text-gray-200">Nem sempre é possível parar por 10 minutos ou sentar para meditar. Por isso, este checklist traz práticas rápidas e poderosas, que cabem em qualquer rotina, inclusive nos dias mais caóticos.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <FileText className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Guia de Perguntas para Autoconhecimento Emocional e Checklist Diário de Emoções</h3>
                  <p className="text-gray-200">Use essas perguntas semanalmente para aprofundar sua reflexão.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <ListChecks className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Modelo de Diário de Hábitos</h3>
                  <p className="text-gray-200">Use para refletir, registrar e fortalecer a construção de novos comportamentos.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Calendar className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Planner de Acompanhamento de 30 Dias</h3>
                  <p className="text-gray-200">Simples, visual, direto — ideal para imprimir e deixar visível.</p>
                </div>
              </div>
              
              <div className="bg-highlight/20 border border-highlight rounded-xl p-6 text-center">
                <p className="text-lg font-bold mb-2">Valor do Bônus: <span className="line-through">R$ 40,00</span></p>
                <p className="text-2xl font-bold text-highlight">VOCÊ GANHA TOTALMENTE GRÁTIS!</p>
              </div>

              <div className="flex justify-center mt-10">
                <CtaButton
                  large
                  onClick={openHotmartLink}
                >
                  Quero Garantir Meu Pacote Completo Agora!
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
