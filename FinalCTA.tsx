import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenArchitectModal: () => void;
}

export default function FinalCTA({ onOpenArchitectModal }: FinalCTAProps) {
  return (
    <section className="py-28 lg:py-44 bg-white border-b border-[#E5E5E5] relative text-center">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 flex flex-col items-center">
        
        {/* Eyebrow */}
        <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block mb-4">
          PRÓXIMO PASSO ESTRATÉGICO
        </span>

        {/* Headline Muito Grande */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#111111] leading-[1.12] tracking-tight mb-8 max-w-4xl">
          Pronto para estruturar a arquitetura comercial da sua empresa?
        </h2>

        {/* Pouco Texto */}
        <p className="text-base sm:text-xl text-[#555555] font-normal leading-relaxed max-w-2xl mb-12">
          Agende uma conversa técnica preliminar diretamente com nossos arquitetos de dados e sistemas. Sem intermediários comerciais.
        </p>

        {/* CTA Principal */}
        <button
          onClick={onOpenArchitectModal}
          className="bg-[#1952BE] hover:bg-[#144299] text-white px-10 py-5 rounded font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl"
        >
          <span>Falar com um Arquiteto Comercial</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Nota de Confidencialidade */}
        <div className="mt-8 flex items-center gap-2 text-xs text-[#888888]">
          <ShieldCheck className="w-4 h-4 text-[#1952BE]" />
          <span>Atendimento sob NDA e confidencialidade estrita de dados</span>
        </div>

      </div>
    </section>
  );
}
