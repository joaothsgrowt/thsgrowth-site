import { useState } from 'react';
import { 
  ArrowRight,
  Check
} from 'lucide-react';
import { ARCHITECTURE_LAYERS } from '../data/siteData';

interface CommercialArchitectureProps {
  onOpenArchitectModal: () => void;
}

export default function CommercialArchitecture({ onOpenArchitectModal }: CommercialArchitectureProps) {
  const [selectedLayerId, setSelectedLayerId] = useState<string>(ARCHITECTURE_LAYERS[0].id);

  const selectedLayer = ARCHITECTURE_LAYERS.find(l => l.id === selectedLayerId) || ARCHITECTURE_LAYERS[0];

  return (
    <section className="py-24 sm:py-28 bg-[#F7F7F5]/80 backdrop-blur-xs border-b border-[#E5E5E5]" id="arquitetura">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            THS COMMERCIAL ARCHITECTURE
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Não implementamos ferramentas.{' '}
            <span className="text-[#003C8B]">Projetamos a arquitetura que sustenta a receita.</span>
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            A THS Commercial Architecture organiza nove camadas fundamentais para conectar dados, processos, tecnologia e crescimento.
          </p>
        </div>

        {/* 9 Layers Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 9 Clean Editorial Layers List */}
          <div className="lg:col-span-6 space-y-1.5 text-left">
            {ARCHITECTURE_LAYERS.map((layer, index) => {
              const isSelected = layer.id === selectedLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-3.5 rounded border transition-colors flex items-center justify-between cursor-pointer ${
                    isSelected 
                      ? 'bg-white border-[#003C8B] text-[#111111] shadow-xs' 
                      : 'bg-white/70 border-[#E5E5E5] hover:bg-white text-[#606060]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#003C8B]">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-[#111111]">
                      {layer.title}
                    </span>
                    <span className="text-xs text-[#606060] font-normal hidden sm:inline">
                      — {layer.subtitle}
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#003C8B]">
                    {isSelected ? 'Ativo' : ''}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Layer Inspector & Explanation */}
          <div className="lg:col-span-6">
            <div className="bg-white/95 backdrop-blur-xs border border-[#E5E5E5] rounded p-6 sm:p-8 text-left shadow-xs">
              
              {/* Header */}
              <div className="pb-4 mb-6 border-b border-[#E5E5E5] flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#003C8B] uppercase tracking-wider font-semibold block mb-1">
                    Camada {selectedLayer.title}
                  </span>
                  <h3 className="text-xl font-semibold text-[#111111]">
                    {selectedLayer.subtitle}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#606060] font-normal leading-relaxed mb-6">
                {selectedLayer.description}
              </p>

              {/* Subsystems & Components */}
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-[#111111] font-semibold block mb-3">
                  COMPONENTES PRINCIPAIS
                </span>
                <div className="space-y-2">
                  {selectedLayer.components.map((comp) => (
                    <div 
                      key={comp}
                      className="flex items-start gap-2.5 text-xs text-[#111111]"
                    >
                      <Check className="w-3.5 h-3.5 text-[#003C8B] flex-shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Impact Box */}
              <div className="pt-4 border-t border-[#E5E5E5] mb-6">
                <span className="text-xs uppercase tracking-wider text-[#003C8B] font-semibold block mb-1">
                  IMPACTO EM RECEITA
                </span>
                <p className="text-xs text-[#606060] leading-relaxed">
                  {selectedLayer.businessImpact}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenArchitectModal}
                className="w-full bg-[#003C8B] hover:bg-[#002d69] text-white py-3.5 rounded font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Estruturar esta camada
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
