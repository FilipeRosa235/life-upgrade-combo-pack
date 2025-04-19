
import { BadgeCheck, BookIcon, LayoutPanelTop, User } from "lucide-react";

export function ScienceSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BadgeCheck className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Conteúdo 100% Embasado em <span className="text-primary">Ciência</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Cada técnica, método e estratégia é fundamentada em pesquisas científicas, estudos acadêmicos e evidências confiáveis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <BookIcon className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Pesquisa Acadêmica</h3>
            <p className="text-gray-600">Baseado em mais de 150 estudos acadêmicos e publicações científicas revisadas por pares</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <User className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Especialistas</h3>
            <p className="text-gray-600">Conteúdo revisado por psicólogos, neurocientistas e especialistas em desenvolvimento pessoal</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <LayoutPanelTop className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Métodos Testados</h3>
            <p className="text-gray-600">Cada técnica foi validada em ambientes reais com resultados mensuráveis e comprovados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
