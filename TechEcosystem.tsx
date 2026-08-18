import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface TechEcosystemProps {
  onOpenArchitectModal: () => void;
}

export default function TechEcosystem({ onOpenArchitectModal }: TechEcosystemProps) {
  const [activeHub, setActiveHub] = useState<string>('crm');

  const hubs = [
    { id: 'crm', name: 'CRM & Pipeline', type: 'Core Comercial', desc: 'Salesforce, HubSpot, Dynamics — Gestão unificada de pipeline, contas e contatos.' },
    { id: 'erp', name: 'ERP & Faturamento', type: 'Backoffice', desc: 'SAP, Oracle, TOTVS — Emissão automática de pedidos, contratos e faturamento.' },
    { id: 'data', name: 'Data Warehouse & Lake', type: 'Repositório Central', desc: 'BigQuery, Snowflake — Armazenamento histórico de eventos e métricas de receita.' },
    { id: 'bi', name: 'Business Intelligence', type: 'Analytics C-Level', desc: 'Power BI, Looker, Tableau — Painéis consolidados de forecast e performance.' },
    { id: 'marketing', name: 'Marketing & Inbound', type: 'Originação', desc: 'Plataformas de automação, mídia paga e nutrição integradas ao funil comercial.' },
    { id: 'whatsapp', name: 'Canais & WhatsApp', type: 'Comunicação', desc: 'APIs Oficiais e telefonia com registro estruturado de conversas no CRM.' },
    { id: 'ai', name: 'Modelos de IA Aplicada', type: 'Inteligência', desc: 'Score de propensão de compra, qualificação semântica e transcrição de reuniões.' },
    { id: 'cloud', name: 'Cloud & Middlewares', type: 'Infraestrutura', desc: 'AWS, Google Cloud, Azure — Barramentos seguros e tolerantes a falhas.' },
    { id: 'apis', name: 'APIs & Conectores Custom', type: 'Conectividade', desc: 'Microsserviços distribuídos com controle de fila, retry e governança.' }
  ];

  return (
    <section className="py-24 sm:py-28 bg-white/90 backdrop-blur-xs text-[#111111] border-b border-[#E5E5E5]" id="ecossistema">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            INTEGRAÇÃO E TOPOLOGIA CORPORATIVA
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Seu ecossistema tecnológico não precisa ser simples.{' '}
            <span className="text-[#003C8B]">Precisa conversar.</span>
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Não forçamos a substituição desnecessária de sistemas legados. Criamos a camada de engenharia e middleware que conecta suas ferramentas para operarem de forma unificada e segura.
          </p>
        </div>

        {/* Integration Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12 text-left">
          
          {/* Left: 9 Integration Hubs */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-3">
            {hubs.map((hub) => {
              const isSelected = hub.id === activeHub;
              return (
                <div
                  key={hub.id}
                  onClick={() => setActiveHub(hub.id)}
                  className={`p-5 rounded border transition-colors cursor-pointer flex flex-col justify-between ${
                    isSelected 
                      ? 'bg-white border-[#003C8B] shadow-xs' 
                      : 'bg-[#FAFAF9]/80 border-[#E5E5E5] hover:border-[#CCCCCC] hover:bg-white'
                  }`}
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#606060] font-medium block mb-2">
                      {hub.type}
                    </span>

                    <h4 className="text-sm font-semibold text-[#111111] mb-2">
                      {hub.name}
                    </h4>

                    <p className="text-xs text-[#606060] font-normal leading-relaxed">
                      {hub.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-semibold text-[#003C8B]">
                    <span className="uppercase tracking-wider">Sincronia Contínua</span>
                    <span>{isSelected ? '●' : '○'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Event Pipeline Example */}
          <div className="lg:col-span-4 bg-[#FAFAF9]/90 backdrop-blur-xs border border-[#E5E5E5] rounded p-6 sm:p-7 space-y-6 shadow-xs">
            <div className="pb-3 border-b border-[#E5E5E5]">
              <span className="text-xs text-[#111111] font-semibold uppercase tracking-wider block">
                FLUXO DE DADOS EXEMPLAR
              </span>
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] text-[#003C8B] font-semibold uppercase tracking-wider block">01. Evento Disparado:</span>
                <p className="text-xs font-medium text-[#111111]">Oportunidade fechada no CRM</p>
                <span className="text-[11px] text-[#606060] block">Webhook autenticado com payload estruturado</span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] text-[#003C8B] font-semibold uppercase tracking-wider block">02. Processamento no ERP:</span>
                <p className="text-xs font-medium text-[#111111]">Cadastro de cliente e pedido criados</p>
                <span className="text-[11px] text-[#606060] block">Sem retrabalho manual ou divergência cadastral</span>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] text-[#003C8B] font-semibold uppercase tracking-wider block">03. Consolidação em BI:</span>
                <p className="text-xs font-medium text-[#111111]">Relatório de receita e forecast atualizados</p>
                <span className="text-[11px] text-[#606060] block">Visão executiva em tempo real para a diretoria</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E5E5]">
              <button
                onClick={onOpenArchitectModal}
                className="w-full bg-[#003C8B] hover:bg-[#002d69] text-white py-3.5 rounded font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Conectar seus sistemas
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
