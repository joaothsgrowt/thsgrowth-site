import { 
  Plus, 
  ArrowRight, 
  Check
} from 'lucide-react';
import Logo from './Logo';

interface PartnerModelProps {
  onOpenArchitectModal: () => void;
}

export default function PartnerModel({ onOpenArchitectModal }: PartnerModelProps) {
  const squadRoles = [
    { title: 'Arquitetura Comercial', desc: 'Desenho de modelos de dados, esteiras e regras de negócio para receita.' },
    { title: 'Engenharia de Integração', desc: 'Desenvolvimento e manutenção de conectores, webhooks e middlewares.' },
    { title: 'Extensão de RevOps', desc: 'Otimização contínua de rotinas comerciais e parâmetros operacionais.' },
    { title: 'Sustentação N2/N3', desc: 'Atendimento prioritário a chamados técnicos sob SLA contratual.' },
    { title: 'Advisory C-Level', desc: 'Alinhamento periódico com a diretoria sobre governança e expansão.' }
  ];

  return (
    <section className="py-24 sm:py-28 bg-white/85 backdrop-blur-xs border-b border-[#E5E5E5]" id="parceria">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            MODELO OPERACIONAL CONJUNTO
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Não substituímos sua equipe.{' '}
            <span className="text-[#003C8B]">Multiplicamos a capacidade dela.</span>
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Atuamos integrados à liderança comercial e de TI da sua empresa. Fornecemos a profundidade técnica e a capacidade de execução para que seus gestores foquem na estratégia de negócio.
          </p>
        </div>

        {/* Visual Co-Operating Grid */}
        <div className="bg-[#FAFAF9]/90 backdrop-blur-xs rounded border border-[#E5E5E5] p-6 sm:p-8 mb-12 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            {/* Client Team Box */}
            <div className="lg:col-span-5 bg-white rounded p-6 border border-[#E5E5E5] text-left shadow-xs">
              <span className="text-xs text-[#606060] uppercase tracking-wider font-semibold block mb-1">
                SUA EMPRESA
              </span>
              <h3 className="text-base font-semibold text-[#111111] mb-4">
                Liderança de Negócio e TI
              </h3>
              <div className="space-y-2 text-xs text-[#606060]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#003C8B]" />
                  <span>Diretoria Comercial, CRO e Heads de Vendas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#003C8B]" />
                  <span>CIO, CTO e Gestores de TI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#003C8B]" />
                  <span>Equipes Comerciais e Operação de Campo</span>
                </div>
              </div>
            </div>

            {/* Sinergy Connector */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-2">
              <div className="w-8 h-8 rounded-full bg-white text-[#003C8B] border border-[#E5E5E5] flex items-center justify-center font-bold shadow-xs">
                <Plus className="w-4 h-4" />
              </div>
              <span className="text-[10px] text-[#606060] mt-1 uppercase tracking-wider font-semibold">SINERGIA</span>
            </div>

            {/* THS Squad Box */}
            <div className="lg:col-span-5 bg-white rounded p-6 border border-[#E5E5E5] text-left shadow-xs">
              <span className="text-xs text-[#003C8B] uppercase tracking-widest font-semibold block mb-1">
                ENGENHARIA & SUSTENTAÇÃO
              </span>
              <div className="mb-4">
                <Logo variant="brand" height={32} />
              </div>
              <div className="space-y-2 text-xs text-[#606060]">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#003C8B]" />
                  <span>Arquitetos de Soluções e Dados Comerciais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#003C8B]" />
                  <span>Engenheiros de Integração e Middlewares</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#003C8B]" />
                  <span>Especialistas em Governança e Operação de CRM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Summary Strip */}
          <div className="mt-6 pt-5 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#111111]">
            <div className="text-left">
              <span className="font-normal text-[#606060]">
                Uma esteira contínua de evolução técnica sem atrito de contratação ou turnover.
              </span>
            </div>

            <button
              onClick={onOpenArchitectModal}
              className="text-xs font-semibold text-[#003C8B] hover:text-[#002d69] flex items-center gap-1.5 cursor-pointer uppercase tracking-wider flex-shrink-0"
            >
              Estruturar modelo de parceria <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 5 Squad Formats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 text-left">
          {squadRoles.map((role, i) => (
            <div 
              key={role.title}
              className="bg-[#FAFAF9]/90 backdrop-blur-xs p-5 rounded border border-[#E5E5E5] flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-xs text-[#003C8B] font-semibold block mb-2">
                  0{i + 1}
                </span>
                <h4 className="font-semibold text-[#111111] text-xs mb-1.5 leading-snug">
                  {role.title}
                </h4>
                <p className="text-xs text-[#606060] font-normal leading-relaxed">
                  {role.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-[#E5E5E5] text-[10px] uppercase tracking-wider text-[#606060] font-medium">
                Dedicado / On-Demand
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
