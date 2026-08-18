import { ArrowRight } from 'lucide-react';

interface MultiplatformSectionProps {
  onOpenArchitectModal: () => void;
}

export default function MultiplatformSection({ onOpenArchitectModal }: MultiplatformSectionProps) {
  const crmEcosystems = [
    {
      name: 'Salesforce',
      category: 'Global Enterprise CRM',
      models: 'Sales Cloud, Service Cloud, Financial Services, CPQ',
      focus: 'Operações multinacionais e estruturas de alta complexidade com centenas de usuários.'
    },
    {
      name: 'HubSpot',
      category: 'Unified Customer Platform',
      models: 'Sales Hub, Marketing Hub, Service Hub, Operations Hub Enterprise',
      focus: 'Empresas de alto crescimento que exigem alinhamento ágil de RevOps e usabilidade refinada.'
    },
    {
      name: 'Microsoft Dynamics 365',
      category: 'Microsoft Enterprise Cloud',
      models: 'Dynamics 365 Sales, Customer Service e Power Platform',
      focus: 'Organizações com infraestrutura Microsoft que demandam sinergia total com Azure e Power BI.'
    },
    {
      name: 'Pipedrive Enterprise',
      category: 'Pipeline Driven Sales',
      models: 'Pipedrive Enterprise e Automações Avançadas',
      focus: 'Times de vendas diretas focados em velocidade de execução e gestão de funil visual.'
    },
    {
      name: 'Ploomes CRM',
      category: 'B2B & Indústria Brasileira',
      models: 'Gestão de Propostas Complexas, CPQ e Vendas B2B',
      focus: 'Indústrias, distribuidoras e serviços com cotações multifatoriais e cálculo tributário.'
    },
    {
      name: 'Sistemas Proprietários & Verticais',
      category: 'Custom Architecture',
      models: 'APIs Customizadas, Backoffice Interno e Microsserviços',
      focus: 'Empresas com regras exclusivas de negócio que demandam conectores proprietários e dados protegidos.'
    }
  ];

  return (
    <section className="py-24 sm:py-28 bg-[#F7F7F5]/80 backdrop-blur-xs text-[#111111] border-b border-[#E5E5E5]" id="multiplataforma">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            AGNOSTICISMO TECNOLÓGICO
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            A arquitetura vem antes da{' '}
            <span className="text-[#003C8B]">ferramenta.</span>
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            A THS não está subordinada a um único fabricante. Nossa responsabilidade técnica é compreender a estratégia da sua organização e projetar, integrar e sustentar as tecnologias ideais para o seu momento e orçamento.
          </p>
        </div>

        {/* Multiplatform Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 text-left">
          {crmEcosystems.map((eco, idx) => (
            <div 
              key={eco.name}
              className="bg-white/95 backdrop-blur-xs p-6 rounded border border-[#E5E5E5] flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-[11px] text-[#003C8B] uppercase tracking-wider font-semibold block mb-2">
                  0{idx + 1} · {eco.category}
                </span>

                <h3 className="text-base font-semibold text-[#111111] mb-1">
                  {eco.name}
                </h3>

                <p className="text-xs text-[#606060] mb-3 pb-2.5 border-b border-[#E5E5E5]">
                  {eco.models}
                </p>

                <p className="text-xs text-[#606060] font-normal leading-relaxed">
                  {eco.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#606060]">
                <span className="uppercase tracking-wider font-medium">Especialistas Certificados</span>
                <span className="text-[#003C8B] font-semibold uppercase tracking-wider">Ativo</span>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Message Box */}
        <div className="bg-white/95 backdrop-blur-xs border border-[#E5E5E5] rounded p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left shadow-xs">
          <div className="space-y-1">
            <span className="text-xs text-[#003C8B] uppercase tracking-widest font-semibold block">
              ECOSSISTEMAS MÚLTIPLOS · PARCEIRO ÚNICO
            </span>
            <p className="text-xs text-[#606060] max-w-2xl leading-relaxed">
              Dúvidas sobre qual plataforma melhor atende ao seu estágio de crescimento? Realizamos uma avaliação comparativa de fit arquitetural e custo total de propriedade (TCO).
            </p>
          </div>

          <button
            onClick={onOpenArchitectModal}
            className="flex-shrink-0 bg-[#003C8B] hover:bg-[#002d69] text-white px-6 py-3.5 rounded font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
          >
            Avaliação de Fit Tecnológico
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
