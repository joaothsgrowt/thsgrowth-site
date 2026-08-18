import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface IndustrySegmentsProps {
  onOpenArchitectModal: () => void;
}

export default function IndustrySegments({ onOpenArchitectModal }: IndustrySegmentsProps) {
  const [activeSegment, setActiveSegment] = useState<number>(0);

  const segments = [
    {
      number: '01',
      name: 'Serviços Financeiros & FinTech',
      headline: 'Esteiras de crédito estruturadas, conformidade LGPD e visão consolidada por grupo econômico.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '02',
      name: 'Indústria & Manufatura',
      headline: 'Integração direta com chão de fábrica e ERP (SAP/TOTVS), alçadas de desconto e pedidos complexos.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '03',
      name: 'Tecnologia & SaaS Corporativo',
      headline: 'Alinhamento de RevOps, automação de renovações, telemetria de uso e cálculo em tempo real de NRR.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '04',
      name: 'Logística & Supply Chain',
      headline: 'Cotações dinâmicas, unificação de filiais nacionais e monitoramento de SLA de atendimento comercial.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '05',
      name: 'Saúde, Farma & Lifesciences',
      headline: 'Governança estrita de dados sensíveis, conformidade regulatória e gestão de contas institucionais.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '06',
      name: 'Serviços B2B & Consultorias',
      headline: 'Pipeline de alto ticket, gestão de contas estratégicas (ABM) e faturamento integrado por marcos.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="segmentos" className="py-24 lg:py-36 border-b border-[#E5E5E5] relative bg-white">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block mb-3">
            SEGMENTOS DE ATUAÇÃO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
            Especialização em setores com alta complexidade operacional
          </h2>
          <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            Adaptamos modelos de dados, esteiras de aprovação e regras de negócio para as particularidades regulatórias e comerciais de cada setor.
          </p>
        </div>

        {/* Layout Interativo: Grade Editorial com Preview Fotográfico em Gradiente Azul */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Lista de Segmentos (7 colunas) */}
          <div className="lg:col-span-7 border-t border-[#E5E5E5]">
            {segments.map((seg, idx) => (
              <div
                key={seg.number}
                onMouseEnter={() => setActiveSegment(idx)}
                onClick={onOpenArchitectModal}
                className={`group border-b border-[#E5E5E5] py-6 sm:py-7 px-4 sm:px-6 flex items-center justify-between transition-all duration-250 cursor-pointer ${
                  activeSegment === idx ? 'bg-[#F7F7F5] border-l-4 border-l-[#1952BE]' : 'hover:bg-[#FAFAF9]'
                }`}
              >
                <div className="flex items-center gap-6 text-left">
                  <span className={`text-xs font-bold tracking-widest ${activeSegment === idx ? 'text-[#1952BE]' : 'text-[#888888]'}`}>
                    {seg.number}
                  </span>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold transition-colors ${activeSegment === idx ? 'text-[#1952BE]' : 'text-[#111111] group-hover:text-[#1952BE]'}`}>
                      {seg.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666666] font-normal mt-0.5 line-clamp-1">
                      {seg.headline}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 ml-4">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                    activeSegment === idx ? 'border-[#1952BE] bg-[#1952BE] text-white' : 'border-[#CCCCCC] text-[#666666]'
                  }`}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preview Fotográfico Corporativo do Segmento Ativo com Gradiente Azul (5 colunas) */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="rounded overflow-hidden border border-[#E5E5E5] shadow-lg h-full relative bg-slate-900 flex flex-col justify-end">
              <img
                src={segments[activeSegment].image}
                alt={segments[activeSegment].name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500"
              />
              {/* Gradiente Azul Sofisticado */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001D4E]/85 via-[#1952BE]/40 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001438]/90 via-[#001D4E]/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-8 text-white text-left space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                  {segments[activeSegment].number} / ARQUITETURA SETORIAL
                </span>
                <h4 className="text-2xl font-bold">
                  {segments[activeSegment].name}
                </h4>
                <p className="text-xs text-blue-100/90 leading-relaxed pt-1">
                  {segments[activeSegment].headline}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
