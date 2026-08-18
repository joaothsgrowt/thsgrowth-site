import { ArrowRight } from 'lucide-react';
import { CAPABILITIES } from '../data/siteData';

interface SolutionsGridProps {
  onOpenArchitectModal: () => void;
}

export default function SolutionsGrid({ onOpenArchitectModal }: SolutionsGridProps) {
  return (
    <section id="solucoes" className="py-24 lg:py-36 border-b border-[#E5E5E5] relative">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        
        {/* Topo da Seção */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block mb-3">
            SOLUÇÕES CORPORATIVAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
            Engenharia e consultoria especializada para operações de alta complexidade
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            Desenvolvemos soluções de ponta a ponta que combinam diagnóstico rigoroso, desenho de arquitetura, integração sistêmica e sustentação contínua.
          </p>
        </div>

        {/* Grade de 3 Colunas com Divisórias Finas e Espaço Generoso */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E5E5E5]">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              onClick={onOpenArchitectModal}
              className="group border-r border-b border-[#E5E5E5] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-lg cursor-pointer relative bg-[#F7F7F5]/40"
            >
              <div>
                {/* Número da Solução */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-sm font-bold text-[#1952BE] tracking-widest">
                    {cap.number}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#888888] group-hover:text-[#1952BE] transition-colors">
                    {cap.badge}
                  </span>
                </div>

                {/* Título da Solução */}
                <h3 className="text-xl font-bold text-[#111111] mb-4 group-hover:text-[#1952BE] transition-colors leading-snug">
                  {cap.title}
                </h3>

                {/* Descrição Curta */}
                <p className="text-sm text-[#555555] font-normal leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Seta com Transição Suave no Hover */}
              <div className="pt-6 border-t border-[#EAEAEA] flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#1952BE] transition-colors">
                  Saiba mais
                </span>
                <div className="w-8 h-8 rounded-full border border-[#CCCCCC] flex items-center justify-center group-hover:border-[#1952BE] group-hover:bg-[#1952BE] group-hover:text-white transition-all duration-250">
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
