import { useState } from 'react';
import { 
  Check, 
  ArrowRight
} from 'lucide-react';
import { BUSINESS_CASES } from '../data/siteData';

interface BusinessCasesProps {
  onOpenArchitectModal: () => void;
}

export default function BusinessCases({ onOpenArchitectModal }: BusinessCasesProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const currentCase = BUSINESS_CASES[activeCaseIndex];

  return (
    <section className="py-24 sm:py-28 bg-[#F7F7F5]/80 backdrop-blur-xs border-b border-[#E5E5E5]" id="cases">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            ESTUDOS DE CASO E ARQUITETURA
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Engenharia comercial aplicada a cenários complexos.
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Como desenhamos, implementamos e sustentamos ecossistemas tecnológicos para empresas com operações de receita consolidadas.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {BUSINESS_CASES.map((bc, index) => {
            const isActive = index === activeCaseIndex;
            return (
              <button
                key={bc.id}
                onClick={() => setActiveCaseIndex(index)}
                className={`px-4 py-2 rounded text-xs transition-colors cursor-pointer border ${
                  isActive 
                    ? 'bg-[#003C8B] text-white border-[#003C8B] font-semibold shadow-xs' 
                    : 'bg-white text-[#111111] border-[#E5E5E5] hover:border-[#CCCCCC] font-medium'
                }`}
              >
                <span>{bc.clientSector}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Layout */}
        <div className="bg-white/95 backdrop-blur-xs rounded border border-[#E5E5E5] overflow-hidden text-left shadow-xs">
          
          {/* Case Header */}
          <div className="p-6 sm:p-8 border-b border-[#E5E5E5] bg-[#FAFAF9]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
              <span className="text-xs text-[#003C8B] font-semibold uppercase tracking-wider">
                {currentCase.clientType}
              </span>
              <div className="flex items-center gap-2 text-xs text-[#606060]">
                <span className="font-medium text-[#111111]">STACK:</span>
                <span>{currentCase.stack.join(' · ')}</span>
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] max-w-3xl leading-snug">
              {currentCase.headline}
            </h3>
          </div>

          {/* 4 Pillars Grid */}
          <div className="p-6 sm:p-8 grid lg:grid-cols-2 gap-8">
            
            {/* Context & Architecture */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#111111] font-semibold block mb-2">
                  01. CONTEXTO E DESAFIO
                </span>
                <p className="text-[#606060] text-xs leading-relaxed bg-[#FAFAF9] p-4 rounded border border-[#E5E5E5]">
                  {currentCase.context}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#111111] font-semibold block mb-2">
                  02. ARQUITETURA PROJETADA
                </span>
                <p className="text-[#606060] text-xs leading-relaxed bg-[#FAFAF9] p-4 rounded border border-[#E5E5E5]">
                  {currentCase.architecture}
                </p>
              </div>
            </div>

            {/* Execution & Outcomes */}
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#111111] font-semibold block mb-2">
                  03. EXECUÇÃO TÉCNICA
                </span>
                <div className="space-y-2">
                  {currentCase.execution.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#111111]">
                      <span className="text-xs text-[#003C8B] font-semibold">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#003C8B] font-semibold block mb-2">
                  04. RESULTADOS ALCANÇADOS
                </span>
                <div className="space-y-2 bg-[#FAFAF9] p-4 rounded border border-[#E5E5E5]">
                  {currentCase.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#111111]">
                      <Check className="w-3.5 h-3.5 text-[#003C8B] flex-shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="bg-[#FAFAF9] px-6 sm:px-8 py-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-[#606060]">
              Projetos estruturados sob acordos estritos de confidencialidade técnica (NDA).
            </span>
            <button
              onClick={onOpenArchitectModal}
              className="text-xs text-[#003C8B] hover:text-[#002d69] font-semibold flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
            >
              Solicitar estudo de caso do seu segmento <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
