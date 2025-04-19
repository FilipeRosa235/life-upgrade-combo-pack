
import { Testimonial } from "@/components/Testimonial";
import { Users } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          O Que As Pessoas Estão <span className="text-primary">Dizendo</span>
        </h2>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          Mais de 1.000 pessoas já começaram sua jornada de transformação com nossos eBooks.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial 
            name="Carlos S."
            text="Os eBooks de produtividade e hábitos mudaram completamente minha rotina. Em 3 semanas consegui resultados que não tive em anos tentando sozinho."
          />
          <Testimonial 
            name="Mariana L."
            text="O conteúdo sobre mindfulness me ajudou a reduzir a ansiedade de uma forma que nem mesmo terapia havia conseguido. As técnicas são simples e muito eficazes."
          />
          <Testimonial 
            name="Roberto M."
            text="Como gestor, o eBook de inteligência emocional foi transformador para minha equipe. A comunicação melhorou e os conflitos diminuíram drasticamente."
          />
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 p-6 bg-white rounded-xl shadow-md">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg font-medium text-gray-700">
            Junte-se a mais de <span className="font-bold text-primary">1.000 pessoas</span> que já estão transformando suas vidas com nossos conteúdos baseados em ciência!
          </p>
        </div>
      </div>
    </section>
  );
}
