
import { ArrowRight, BarChart3, Brain, Clock, Heart } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";

interface ProblemsSectionProps {
  scrollToCheckout: () => void;
}

export function ProblemsSection({ scrollToCheckout }: ProblemsSectionProps) {
  return (
    <section className="py-16 px-4 feature-gradient">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
          Você Está <span className="text-red-500">Cansado</span> de...
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Procrastinar e desperdiçar tempo</h3>
            <p className="text-gray-600">Ter uma lista interminável de tarefas que nunca são concluídas</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Estresse e ansiedade constantes</h3>
            <p className="text-gray-600">Sentir-se sobrecarregado e sem controle sobre seus pensamentos</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Dificuldades nos relacionamentos</h3>
            <p className="text-gray-600">Não conseguir expressar emoções ou entender as pessoas ao seu redor</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Falta de progresso nos objetivos</h3>
            <p className="text-gray-600">Começar projetos que nunca terminam e ciclos de motivação que desaparecem</p>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-gray-900">
          A <span className="text-primary">Solução Definitiva</span> Está Aqui!
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Um conjunto completo de conhecimentos científicos e práticos que atacam a raiz dos problemas, não apenas os sintomas.
        </p>
        
        <div className="flex justify-center mt-8">
          <CtaButton onClick={scrollToCheckout}>
            Quero Essa Solução Agora <ArrowRight className="ml-2 w-5 h-5" />
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
