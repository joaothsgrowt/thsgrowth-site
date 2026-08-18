import { useState } from 'react';
import { 
  Check, 
  ArrowRight
} from 'lucide-react';
import { METHOD_STEPS } from '../data/siteData';

interface MethodTimelineProps {
  onOpenArchitectModal: () => void;
}

export default function MethodTimeline({ onOpenArchitectModal }: MethodTimelineProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = METHOD_STEPS[activeStepIndex];

  return (
    <section className="py-24 sm:py-28 bg-[#F7F7F5]/80 backdrop-blur-xs text-[#111111] border-b border-[#E5E5E5]" id="metodo">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            MÉTODO DE EXECUÇÃO
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Da arquitetura à sustentação contínua.
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Uma abordagem disciplinada em sete etapas. Não começamos configurando telas; iniciamos compreendendo o negócio e permanecemos sustentando a operação pós go-live.
          </p>
        </div>

        {/* 7 Horizontal Phase Selectors */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8 text-left">
          {METHOD_STEPS.map((step, index) => {
            const isActive = index === activeStepIndex;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(index)}
                className={`p-3.5 rounded text-left border transition-colors cursor-pointer flex flex-col justify-between ${
                  isActive 
                    ? 'bg-white border-[#003C8B] text-[#111111] shadow-xs' 
                    : 'bg-white/70 border-[#E5E5E5] hover:bg-white text-[#606060]'
                }`}
              >
                <span className="text-xs font-semibold text-[#003C8B] mb-2">
                  Fase 0{index + 1}
                </span>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#606060] font-medium block">
                    {step.name}
                  </span>
                  <h4 className="text-xs font-semibold text-[#111111] truncate mt-0.5">
                    {step.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-white/95 backdrop-blur-xs border border-[#E5E5E5] rounded p-6 sm:p-10 text-left shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs text-[#003C8B] uppercase tracking-widest font-semibold block">
                FASE {activeStep.number} · {activeStep.name.toUpperCase()}
              </span>

              <h3 className="text-2xl font-semibold text-[#111111]">
                {activeStep.title}
              </h3>

              <p className="text-sm text-[#606060] font-normal leading-relaxed">
                {activeStep.description}
              </p>

              <div className="pt-2">
                <span className="text-xs text-[#111111] uppercase tracking-wider block font-semibold mb-3">
                  PRINCIPAIS ATIVIDADES
                </span>
                <div className="space-y-2">
                  {activeStep.activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#111111]">
                      <Check className="w-3.5 h-3.5 text-[#003C8B] flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Outputs */}
            <div className="lg:col-span-5 bg-[#FAFAF9] border border-[#E5E5E5] rounded p-5 sm:p-6 space-y-4">
              <div>
                <span className="text-xs text-[#606060] uppercase tracking-wider block mb-3 font-semibold">
                  ARTEFATOS E ENTREGÁVEIS
                </span>
                <div className="space-y-2">
                  {activeStep.outputs.map((out, i) => (
                    <div 
                      key={i}
                      className="p-2.5 bg-white border border-[#E5E5E5] rounded text-xs text-[#111111]"
                    >
                      {out}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <span className="text-xs text-[#606060]">Pronto para iniciar?</span>
                <button
                  onClick={onOpenArchitectModal}
                  className="text-xs text-[#003C8B] hover:text-[#002d69] font-semibold flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                >
                  Agendar kick-off técnico <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
