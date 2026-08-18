import { ArrowRight } from 'lucide-react';
import { BUSINESS_CASES } from '../data/siteData';

interface EnterpriseCasesProps {
  onOpenArchitectModal: () => void;
}

export default function EnterpriseCases({ onOpenArchitectModal }: EnterpriseCasesProps) {
  const mainCase = BUSINESS_CASES[0];
  const secondaryCases = BUSINESS_CASES.slice(1, 3);

  return (
    <section id="cases" className="py-24 lg:py-36 border-b border-[#E5E5E5] relative bg-white">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block mb-3">
              CASES & PROJETOS ENTERPRISE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Transformações estruturais em grandes corporações
            </h2>
          </div>
          <button
            onClick={onOpenArchitectModal}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#1952BE] hover:text-[#144299] transition-colors cursor-pointer group"
          >
            <span>Ver todos os estudos de caso</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Layout Editorial: Case Principal + Cases Secundários com Gradiente Azul */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-8">
          
          {/* Case Principal Grande com Gradiente Azul (7 colunas) */}
          <div
            onClick={onOpenArchitectModal}
            className="lg:col-span-7 bg-[#F7F7F5] rounded border border-[#E5E5E5] overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[16/9] w-full overflow-hidden relative bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                alt="Operação Industrial e Logística Integrada"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradiente Azul */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001D4E]/80 via-[#1952BE]/35 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001438]/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 rounded text-[11px] font-semibold uppercase tracking-wider text-[#1952BE] z-10">
                {mainCase.clientSector}
              </div>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#888888] block mb-2">
                  {mainCase.clientType}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4 group-hover:text-[#1952BE] transition-colors leading-tight">
                  {mainCase.headline}
                </h3>
                <p className="text-sm text-[#555555] font-normal leading-relaxed mb-6">
                  {mainCase.context}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E5E5] flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {mainCase.stack.slice(0, 3).map((item) => (
                    <span key={item} className="text-[11px] font-medium bg-white px-2.5 py-1 rounded border border-[#E5E5E5] text-[#555555]">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="w-8 h-8 rounded-full border border-[#CCCCCC] flex items-center justify-center group-hover:border-[#1952BE] group-hover:bg-[#1952BE] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Cases Secundários com Gradiente Azul (5 colunas - 2 empilhados) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {secondaryCases.map((c, idx) => (
              <div
                key={c.id}
                onClick={onOpenArchitectModal}
                className="bg-[#F7F7F5] rounded border border-[#E5E5E5] overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-all duration-300 flex-1"
              >
                <div className="aspect-[21/9] w-full overflow-hidden relative bg-slate-900">
                  <img
                    src={
                      idx === 0
                        ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
                    }
                    alt={c.clientSector}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradiente Azul */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#001D4E]/80 via-[#1952BE]/35 to-transparent mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001438]/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 rounded text-[10px] font-semibold uppercase tracking-wider text-[#1952BE] z-10">
                    {c.clientSector}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#111111] mb-2 group-hover:text-[#1952BE] transition-colors leading-snug">
                      {c.headline}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] line-clamp-2 mb-4">
                      {c.context}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#1952BE] font-semibold uppercase tracking-wider">
                    <span>Ler estudo completo</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
