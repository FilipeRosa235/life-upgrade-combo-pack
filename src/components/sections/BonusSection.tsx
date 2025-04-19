
import { Calendar, FileText, LightbulbIcon, ListChecks } from "lucide-react";

export function BonusSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute -top-10 -left-10 md:-top-14 md:-left-14 w-24 h-24 md:w-32 md:h-32 bg-highlight rounded-full flex items-center justify-center text-white font-bold text-xl md:text-3xl z-10 shadow-xl animate-pulse-slow">
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
                  <FileText className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Planners Semanais e Diários</h3>
                  <p className="text-gray-200">Modelos personalizados para organizar seu tempo e tarefas com eficiência máxima</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <ListChecks className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Checklists de Hábitos</h3>
                  <p className="text-gray-200">Acompanhe seu progresso e mantenha a consistência com nossos modelos cientificamente estruturados</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <Calendar className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Rastreadores de Progresso</h3>
                  <p className="text-gray-200">Visualize sua evolução e celebre conquistas com ferramentas que estimulam a continuidade</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <LightbulbIcon className="w-8 h-8 text-highlight mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cartões de Reflexão</h3>
                  <p className="text-gray-200">Prompts de perguntas poderosas que estimulam insights transformadores e autoconhecimento</p>
                </div>
              </div>
              
              <div className="bg-highlight/20 border border-highlight rounded-xl p-6 text-center">
                <p className="text-lg font-bold mb-2">Valor do Bônus: <span className="line-through">R$ 197,00</span></p>
                <p className="text-2xl font-bold text-highlight">VOCÊ GANHA TOTALMENTE GRÁTIS!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
