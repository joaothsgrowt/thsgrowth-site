import { useState } from 'react';
import { 
  Check, 
  ArrowRight
} from 'lucide-react';
import { CAPABILITIES } from '../data/siteData';

interface CapabilitiesProps {
  onOpenArchitectModal: () => void;
}

export default function Capabilities({ onOpenArchitectModal }: CapabilitiesProps) {
  const [selectedCapId, setSelectedCapId] = useState<string>(CAPABILITIES[0].id);

  const selectedCap = CAPABILITIES.find(c => c.id === selectedCapId) || CAPABILITIES[0];

  return (
    <section className="py-24 sm:py-28 bg-white/85 backdrop-blur-xs border-b border-[#E5E5E5]" id="capacidades">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            CAPACIDADES ESTRUTURAIS
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Seis disciplinas de engenharia.{' '}
            <span className="text-[#003C8B]">Uma única arquitetura comercial.</span>
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Não entregamos módulos desconexos. Cada capacidade se integra estrategicamente para compor uma infraestrutura comercial resiliente, auditável e escalável.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid (Clean, minimalist layout) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {CAPABILITIES.map((cap) => {
            const isSelected = cap.id === selectedCapId;
            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapId(cap.id)}
                className={`p-6 rounded border transition-colors cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-white border-[#003C8B] shadow-xs' 
                    : 'bg-[#FAFAF9]/80 border-[#E5E5E5] hover:border-[#CCCCCC] hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-[#003C8B]">
                      {cap.number}
                    </span>
                    <span className="text-[11px] text-[#606060] uppercase tracking-wider font-medium">
                      {cap.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#111111] mb-2 leading-snug">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-[#606060] font-normal leading-relaxed mb-4">
                    {cap.headline}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-medium text-[#003C8B]">
                  <span>{cap.services.length} serviços técnicos</span>
                  <span className="font-semibold">{isSelected ? '● Selecionado' : 'Selecionar'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Capability Deep-Dive Inspector Panel */}
        <div className="bg-[#FAFAF9]/95 backdrop-blur-xs rounded border border-[#E5E5E5] p-6 sm:p-10 text-left shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs text-[#003C8B] uppercase tracking-widest font-semibold block">
                ESPECIFICAÇÃO TÉCNICA · {selectedCap.title}
              </span>

              <h3 className="text-2xl font-semibold text-[#111111]">
                {selectedCap.title}
              </h3>

              <p className="text-sm text-[#606060] font-normal leading-relaxed">
                {selectedCap.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs text-[#111111] uppercase tracking-wider block font-semibold">
                  ENTREGÁVEIS PRINCIPAIS
                </span>
                {selectedCap.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#111111]">
                    <Check className="w-3.5 h-3.5 text-[#003C8B] flex-shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={onOpenArchitectModal}
                  className="bg-[#003C8B] hover:bg-[#002d69] text-white px-6 py-3.5 rounded font-semibold text-xs transition-colors inline-flex items-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  Consultar squad de {selectedCap.title}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Services List */}
            <div className="lg:col-span-5 bg-white border border-[#E5E5E5] rounded p-5 sm:p-6 shadow-xs">
              <span className="text-xs text-[#606060] uppercase tracking-wider block mb-4 font-semibold">
                ESCOPO DE SERVIÇOS INCLUSOS
              </span>
              <div className="space-y-2">
                {selectedCap.services.map((srv, index) => (
                  <div 
                    key={srv}
                    className="p-2.5 rounded bg-[#FAFAF9] border border-[#E5E5E5] flex items-center justify-between text-xs text-[#111111]"
                  >
                    <span className="font-normal">{srv}</span>
                    <span className="text-[11px] font-semibold text-[#003C8B]">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
