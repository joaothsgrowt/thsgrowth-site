import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServicesLinesProps {
  onOpenArchitectModal: () => void;
}

export default function ServicesLines({ onOpenArchitectModal }: ServicesLinesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const servicesList = [
    {
      number: '01',
      title: 'Consultoria de Estratégia Comercial & Revenue Intelligence',
      category: 'Data & Analytics',
      desc: 'Mapeamento de pipelines de dados, modelagem de BI executivo e eliminação de inconsistências no forecast.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '02',
      title: 'Arquitetura e Implantação Enterprise de CRM',
      category: 'Core Infrastructure',
      desc: 'Desenho de processos de vendas complexos, esteiras de aprovação, alçadas e migração segura de bases.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '03',
      title: 'Engenharia de Integração Bidirecional (ERP ↔ CRM ↔ DWH)',
      category: 'Integration Middleware',
      desc: 'Middlewares e barramentos tolerantes a falhas conectando SAP, Oracle, TOTVS, BigQuery e APIs proprietárias.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '04',
      title: 'Governança de Dados, Permissionamento & Compliance LGPD',
      category: 'Security & Control',
      desc: 'Dicionário de dados comercial, matriz de alçadas e travas automáticas contra criação desordenada de campos.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '05',
      title: 'Sustentação N2/N3 & Squads Técnicos Dedicados (SLA Ativo)',
      category: 'Managed Services',
      desc: 'Suporte de engenharia continuada, resolução de incidentes e evolução de automações sem turnover de equipe.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      number: '06',
      title: 'Consultoria Multiplataforma Independente (Agnóstica)',
      category: 'Advisory',
      desc: 'Diagnóstico de fit tecnológico para escolha e coexistência entre Salesforce, HubSpot, Dynamics e outros.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="servicos" className="py-24 lg:py-36 border-b border-[#E5E5E5] relative bg-[#F7F7F5]/50">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block mb-3">
              SERVIÇOS DE CONSULTORIA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Disciplinas integradas de engenharia comercial
            </h2>
          </div>
          <p className="text-sm text-[#555555] max-w-md">
            Atuação modular ou end-to-end com equipes seniores especializadas em arquitetura e dados.
          </p>
        </div>

        {/* Linhas Horizontais de Serviços */}
        <div className="border-t border-[#D5D5D5]">
          {servicesList.map((srv, idx) => (
            <div
              key={srv.number}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={onOpenArchitectModal}
              className="group border-b border-[#E0E0E0] py-8 sm:py-10 transition-all duration-300 hover:bg-white hover:px-6 sm:hover:px-8 cursor-pointer relative"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                
                {/* 01 Número */}
                <div className="col-span-2 sm:col-span-1 text-left">
                  <span className="text-sm sm:text-base font-bold text-[#1952BE] tracking-wider">
                    {srv.number}
                  </span>
                </div>

                {/* Título do Serviço */}
                <div className="col-span-8 sm:col-span-8 lg:col-span-7 text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#111111] group-hover:text-[#1952BE] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] font-normal mt-1 hidden sm:block">
                    {srv.desc}
                  </p>
                </div>

                {/* Categoria / Tag (Desktop) */}
                <div className="hidden lg:block lg:col-span-3 text-right">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#888888] bg-[#EAEAE8] group-hover:bg-blue-50 group-hover:text-[#1952BE] px-3 py-1 rounded transition-colors">
                    {srv.category}
                  </span>
                </div>

                {/* Seta → */}
                <div className="col-span-2 sm:col-span-3 lg:col-span-1 text-right flex justify-end">
                  <div className="w-9 h-9 rounded-full border border-[#CCCCCC] flex items-center justify-center group-hover:border-[#1952BE] group-hover:bg-[#1952BE] group-hover:text-white transition-all duration-250">
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
