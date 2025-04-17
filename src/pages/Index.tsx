
import { BookCover } from "@/components/BookCover";
import { BenefitCard } from "@/components/BenefitCard";
import { Testimonial } from "@/components/Testimonial";
import { CtaButton } from "@/components/CtaButton";
import { CountdownTimer } from "@/components/CountdownTimer";
import { 
  Brain, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Download, 
  FileText, 
  Gift, 
  Heart, 
  LightbulbIcon, 
  ListChecks, 
  BarChart3, 
  Sparkles, 
  Users, 
  ArrowRight, 
  BadgeCheck,
  BookIcon,
  User,
  LayoutPanelTop,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  // Estado para rastrear se o usuário rolou para baixo
  const [scrolled, setScrolled] = useState(false);
  
  // Monitora o scroll para mostrar o sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para ir até a seção de compra
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Sticky CTA que aparece ao rolar */}
      {scrolled && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 flex justify-center items-center gap-4 animate-fade-in">
          <span className="font-bold text-green-600">📚 4 eBooks + Bônus</span>
          <CtaButton onClick={scrollToCheckout}>
            Garantir Acesso Imediato
          </CtaButton>
        </div>
      )}
      
      {/* Seção Hero */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <span className="inline-block bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-semibold mb-4 animate-fade-in">
                COMBO COMPLETO DE DESENVOLVIMENTO PESSOAL
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
                <span className="text-primary">Transforme Sua Vida</span> Com 4 Poderosos eBooks Baseados em Ciência
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8">
                De organização à inteligência emocional: o pacote completo para quem quer resultados reais em todas as áreas da vida
              </p>
              <div className="mb-8">
                <CtaButton large onClick={scrollToCheckout}>
                  Quero Transformar Minha Vida Agora!
                </CtaButton>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                <Users className="w-5 h-5 text-primary" />
                <p className="font-medium">Mais de 1.000 pessoas já transformaram suas vidas</p>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <BookCover 
                  color="linear-gradient(135deg, #1a73e8, #3a46e8)" 
                  title="Produtividade & Organização" 
                  className="animate-float"
                />
                <BookCover 
                  color="linear-gradient(135deg, #239d60, #0ab68b)" 
                  title="Mindfulness & Redução de Estresse" 
                  className="translate-y-6 animate-float" 
                  style={{ animationDelay: "0.2s" }}
                />
                <BookCover 
                  color="linear-gradient(135deg, #e84a3f, #ff7e4a)" 
                  title="Hábitos Positivos" 
                  className="translate-y-[-1rem] animate-float"
                  style={{ animationDelay: "0.4s" }}
                />
                <BookCover 
                  color="linear-gradient(135deg, #8f4bde, #b54bec)" 
                  title="Inteligência Emocional"
                  className="translate-y-4 animate-float" 
                  style={{ animationDelay: "0.6s" }}
                />
              </div>
              <div className="absolute -top-8 -right-4 bg-highlight text-white text-sm font-bold py-2 px-4 rounded-full rotate-12 shadow-md">
                + Bônus exclusivos!
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção de Problema/Solução */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
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
      
      {/* Seção de Benefícios dos eBooks */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            O Que Você Vai <span className="text-primary">Descobrir</span> Em Cada eBook
          </h2>
          
          {/* eBook 1 - Produtividade */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <BookCover 
                color="linear-gradient(135deg, #1a73e8, #3a46e8)" 
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
          
          {/* eBook 2 - Mindfulness */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8 md:flex-row-reverse">
              <BookCover 
                color="linear-gradient(135deg, #239d60, #0ab68b)" 
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
          
          {/* eBook 3 - Hábitos */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <BookCover 
                color="linear-gradient(135deg, #e84a3f, #ff7e4a)" 
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
          
          {/* eBook 4 - Inteligência Emocional */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8 md:flex-row-reverse">
              <BookCover 
                color="linear-gradient(135deg, #8f4bde, #b54bec)" 
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
      
      {/* Seção de Prova Social */}
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
      
      {/* Seção de Bônus */}
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
      
      {/* Seção de Autoridade/Credibilidade */}
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
      
      {/* Seção de Checkout/Oferta */}
      <section id="checkout" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary text-white p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transforme Sua Vida Hoje Mesmo!
              </h2>
              <p className="text-xl">Acesso imediato aos 4 eBooks + Todos os Bônus</p>
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
                  <p className="text-sm text-gray-500 line-through">R$ 397,00</p>
                  <p className="text-3xl font-bold text-primary">R$ 97,00</p>
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
                    <span>Planners Semanais e Diários</span>
                    <span className="ml-auto text-sm text-gray-500 line-through">R$ 47,00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Checklists de Hábitos</span>
                    <span className="ml-auto text-sm text-gray-500 line-through">R$ 47,00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Rastreadores de Progresso</span>
                    <span className="ml-auto text-sm text-gray-500 line-through">R$ 47,00</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Cartões de Reflexão</span>
                    <span className="ml-auto text-sm text-gray-500 line-through">R$ 56,00</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-8">
                <div>
                  <p className="text-lg font-bold mb-1">Valor Total:</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-gray-500 line-through">R$ 594,00</p>
                    <p className="text-3xl font-bold text-success">R$ 97,00</p>
                  </div>
                  <p className="text-sm text-success font-medium">Economize R$ 497,00 (83% de desconto)</p>
                </div>
                
                <CountdownTimer />
              </div>
              
              <div className="flex flex-col gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <p className="text-red-600 font-bold">
                    ATENÇÃO: Oferta por tempo limitado para apenas 50 pessoas!
                  </p>
                  <p className="text-red-600 text-sm">
                    (Restam apenas 7 vagas)
                  </p>
                </div>
                
                <CtaButton large className="w-full py-6">
                  GARANTIR ACESSO IMEDIATO
                </CtaButton>
                
                <div className="flex items-center justify-center gap-3">
                  <Download className="w-5 h-5 text-gray-600" />
                  <p className="text-gray-600">Acesso imediato após o pagamento</p>
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
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Como recebo os eBooks e materiais?</h3>
              <p className="text-gray-700">
                Imediatamente após a confirmação do pagamento, você receberá um email com os links para download de todos os eBooks e materiais do bônus em formato PDF.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Em quais dispositivos posso ler os eBooks?</h3>
              <p className="text-gray-700">
                Os eBooks estão em formato PDF, compatível com praticamente todos os dispositivos: computadores, tablets, smartphones e e-readers. Você pode imprimir também, se preferir.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Preciso ter conhecimento prévio nos temas?</h3>
              <p className="text-gray-700">
                Não! Os conteúdos foram criados pensando em iniciantes. Cada conceito é explicado de forma clara, com linguagem acessível e exemplos práticos para facilitar o entendimento.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Quanto tempo tenho para consumir o material?</h3>
              <p className="text-gray-700">
                Não há prazo! Uma vez comprado, o acesso é permanente. Você pode estudar no seu próprio ritmo e revisitar os materiais sempre que precisar de inspiração ou recordar técnicas.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">E se eu não gostar do conteúdo?</h3>
              <p className="text-gray-700">
                Oferecemos garantia de satisfação. Se você não ficar satisfeito com o conteúdo, basta entrar em contato conosco em até 7 dias após a compra para um reembolso completo.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <CtaButton onClick={scrollToCheckout}>
              Quero Transformar Minha Vida Agora!
            </CtaButton>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-600 text-sm mb-4">
            © 2025 Life Upgrade Combo Pack. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-primary">Termos de Uso</a>
            <a href="#" className="text-gray-600 hover:text-primary">Política de Privacidade</a>
            <a href="#" className="text-gray-600 hover:text-primary">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
