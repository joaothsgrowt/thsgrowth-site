import { ArrowRight, Layers, Cpu, ShieldCheck, Database } from 'lucide-react';

interface SpotlightSectionProps {
  onOpenArchitectModal: () => void;
}

export default function SpotlightSection({ onOpenArchitectModal }: SpotlightSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-[#EDF2F7] border-b border-[#D8DFE8] relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        
        {/* Header Centralizado / Editorial */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block mb-3">
            DESTAQUE ARQUITETURAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
            O Framework THS de Engenharia Comercial Enterprise
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed mb-8">
            Uma abordagem modular e estruturada que garante que cada camada da sua operação — da ingestão de dados ao forecast executivo — funcione de forma harmoniosa, auditável e resiliente.
          </p>
          <button
            onClick={onOpenArchitectModal}
            className="bg-[#1952BE] hover:bg-[#144299] text-white px-7 py-3.5 rounded text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Solicitar Sessão Técnica de Arquitetura</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Grande Área Visual / Gráfica & Esquema Corporativo */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna 1: Fotografia / Grande Imagem de Engenharia com Gradiente Azul (7 colunas) */}
          <div className="lg:col-span-7 rounded overflow-hidden shadow-lg border border-[#D8DFE8] bg-slate-900 relative">
            <div className="aspect-[16/10] w-full h-full min-h-[380px] relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Engenharia de Sistemas e Centro de Operações Tecnológicas"
                className="w-full h-full object-cover object-center"
              />
              {/* Gradiente Azul Sofisticado */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001D4E]/85 via-[#1952BE]/40 to-[#002D80]/20 mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001438]/90 via-[#001D4E]/30 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-sky-300 mb-1">
                  Arquitetura de Dados em Tempo Real
                </div>
                <div className="text-lg font-bold">
                  Sincronização Bidirecional com Latência Mínima
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Pilares da Estrutura (5 colunas) */}
          <div className="lg:col-span-5 bg-white rounded border border-[#D8DFE8] p-8 flex flex-col justify-between shadow-xs text-left">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#111111] pb-3 border-b border-[#E5E5E5]">
                Pilares Fundamentais do Framework
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0 mt-0.5">
                    <Database className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">01. Single Source of Truth</h4>
                    <p className="text-xs text-[#666666] mt-0.5 leading-relaxed">
                      Unificação cadastral e transacional entre CRM e ERP sem divergência de números.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0 mt-0.5">
                    <Layers className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">02. Modelagem Orientada a Negócio</h4>
                    <p className="text-xs text-[#666666] mt-0.5 leading-relaxed">
                      Campos, objetos e entidades que refletem a complexidade do modelo B2B enterprise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">03. Governança e Blindagem LGPD</h4>
                    <p className="text-xs text-[#666666] mt-0.5 leading-relaxed">
                      Matriz de acessos, logs de auditoria e travas automáticas contra perda de qualidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111111] uppercase tracking-wider">04. Sustentação sob SLA Garantido</h4>
                    <p className="text-xs text-[#666666] mt-0.5 leading-relaxed">
                      Operação contínua N2/N3 sem dependência de profissionais isolados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#666666]">
              <span>Padrão Corporativo THS Growth</span>
              <span className="font-semibold text-[#1952BE]">Certificação N2/N3</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
