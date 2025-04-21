
import { Testimonial } from "@/components/Testimonial";
import { Users } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          O Que As Pessoas Estão <span className="text-primary">Dizendo</span>
        </h2>
        
        
        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial 
            name="Carlos S."
            text="Eu sempre fui bagunçado com meus horários, mas depois que comecei a aplicar algumas dicas dos eBooks, consegui finalmente criar uma rotina que funciona pra mim. Não foi do dia pra noite, mas hoje me sinto muito mais produtivo."
          />
          <Testimonial 
            name="Mariana L."
            text="As práticas de mindfulness do material me ajudaram a desacelerar e a me sentir mais presente. Gostei porque são coisas simples de aplicar no dia a dia."
          />
          <Testimonial 
            name="Roberto M."
            text="Me surpreendi, usei algumas técnicas com meu time no trabalho e percebi que o clima ficou mais leve"
          />
        </div>
        
        
      </div>
    </section>
  );
}
