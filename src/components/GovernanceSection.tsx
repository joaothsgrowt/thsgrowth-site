import { ArrowRight } from 'lucide-react';
import { GOVERNANCE_PILLARS } from '../data/siteData';

interface GovernanceSectionProps {
  onOpenArchitectModal: () => void;
}

export default function GovernanceSection({ onOpenArchitectModal }: GovernanceSectionProps) {
  return (
    <section className="py-24 sm:py-28 bg-white/85 backdrop-blur-xs text-[#111111] border-b border-[#E5E5E5]" id="governanca">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            GOVERNANÇA E SUSTENTAÇÃO CONTÍNUA
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Tecnologia sem governança{' '}
            <span className="text-[#003C8B]">vira dívida técnica.</span>
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Uma implementação de CRM não termina no go-live. Sem governança de dados, auditoria de permissões e sustentação técnica ativa, qualquer sistema se degrada. A THS assegura a evolução e perenidade da arquitetura.
          </p>
        </div>

        {/* 6 Governance Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {GOVERNANCE_PILLARS.map((pillar, idx) => (
            <div 
              key={pillar.title}
              className="bg-[#FAFAF9]/90 backdrop-blur-xs p-6 rounded border border-[#E5E5E5] flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-xs text-[#003C8B] font-semibold uppercase tracking-wider block mb-3">
                  PILAR 0{idx + 1}
                </span>

                <h3 className="text-base font-semibold text-[#111111] mb-1">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#003C8B] font-medium mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-xs text-[#606060] font-normal leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#606060]">
                <span className="uppercase tracking-wider font-medium">Sustentação Ativa</span>
                <span className="text-[#003C8B] font-semibold uppercase tracking-wider">SLA Técnico</span>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Model Summary Box */}
        <div className="bg-[#FAFAF9]/95 backdrop-blur-xs border border-[#E5E5E5] rounded p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left shadow-xs">
          <div className="space-y-1">
            <span className="text-xs text-[#003C8B] uppercase tracking-widest font-semibold block">
              COMPROMISSO PÓS GO-LIVE
            </span>
            <h3 className="text-lg font-semibold text-[#111111]">
              Acompanhamos e evoluímos a infraestrutura comercial de forma contínua.
            </h3>
            <p className="text-xs text-[#606060] max-w-2xl leading-relaxed">
              Squads dedicados de sustentação para garantir que a tecnologia acompanhe o ritmo de expansão do seu negócio.
            </p>
          </div>

          <button
            onClick={onOpenArchitectModal}
            className="flex-shrink-0 bg-[#003C8B] hover:bg-[#002d69] text-white px-6 py-3.5 rounded font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
          >
            Squad de governança
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
