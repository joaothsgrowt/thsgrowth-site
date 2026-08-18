import { ArrowRight } from 'lucide-react';

interface EditorialBlocksProps {
  onOpenArchitectModal: () => void;
  onOpenAssessmentModal: () => void;
}

export default function EditorialBlocks({
  onOpenArchitectModal,
  onOpenAssessmentModal
}: EditorialBlocksProps) {
  return (
    <div className="space-y-0 border-b border-[#E5E5E5]">
      
      {/* Bloco 1: [ TEXTO | IMAGEM ] */}
      <section className="py-24 lg:py-32 border-b border-[#E5E5E5] relative">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Texto à Esquerda (6 colunas) */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block">
                01 / ESTRATÉGIA & ARQUITETURA
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.15] tracking-tight">
                Engenharia de dados e processos antes da tecnologia.
              </h2>

              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                Grande parte das iniciativas de CRM falham não por limitação do software, mas pela ausência de uma arquitetura que conecte regras de negócio complexas, fluxos de validação e a taxonomia da empresa à base de dados.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenArchitectModal}
                  className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#1952BE] hover:text-[#144299] transition-all group cursor-pointer"
                >
                  <span className="border-b-2 border-[#1952BE] pb-0.5 group-hover:border-[#144299]">
                    Conhecer nossa abordagem arquitetural
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Imagem à Direita com Gradiente Azul Sofisticado (6 colunas) */}
            <div className="lg:col-span-6">
              <div className="relative rounded overflow-hidden shadow-lg border border-[#E5E5E5] group">
                <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                    alt="Reunião Estratégica de Diretoria e Alinhamento de Arquitetura"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Camadas de Gradiente Azul */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#001D4E]/80 via-[#1952BE]/35 to-transparent mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001438]/70 via-transparent to-[#002D80]/20 pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bloco 2: [ IMAGEM | TEXTO ] */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Imagem à Esquerda com Gradiente Azul Sofisticado (6 colunas) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded overflow-hidden shadow-lg border border-[#E5E5E5] group">
                <div className="aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
                    alt="Integração de Sistemas em Nuvem e Redes de Dados Corporativos"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Camadas de Gradiente Azul */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#001D4E]/80 via-[#1952BE]/35 to-transparent mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001438]/70 via-transparent to-[#002D80]/20 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Texto à Direita (6 colunas) */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block">
                02 / INTEGRAÇÃO & CONTINUIDADE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.15] tracking-tight">
                Conexão contínua entre o front comercial e o core transacional.
              </h2>

              <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
                Eliminamos ilhas de informação conectando o CRM diretamente ao ERP, faturamento e Data Warehouse corporativo. Pedidos, propostas, alçadas e históricos financeiros sincronizados em tempo real com tolerância a falhas.
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenAssessmentModal}
                  className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#1952BE] hover:text-[#144299] transition-all group cursor-pointer"
                >
                  <span className="border-b-2 border-[#1952BE] pb-0.5 group-hover:border-[#144299]">
                    Avaliar maturidade das integrações
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
