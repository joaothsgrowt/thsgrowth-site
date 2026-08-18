import { 
  ArrowRight
} from 'lucide-react';

interface TheProblemProps {
  onOpenAssessment: () => void;
}

export default function TheProblem({ onOpenAssessment }: TheProblemProps) {
  const challenges = [
    {
      number: '01',
      title: 'Sistemas Isolados',
      desc: 'CRM, ERP, faturamento, BI e canais de atendimento operam desconectados, gerando conciliações manuais e atrito operacional diário.'
    },
    {
      number: '02',
      title: 'Dados Inconsistentes',
      desc: 'Ausência de uma fonte única da verdade para contas, contatos e oportunidades, prejudicando a confiabilidade do histórico comercial.'
    },
    {
      number: '03',
      title: 'Falta de Governança',
      desc: 'Criação desordenada de campos, automações sem documentação e permissões mal estruturadas que corrompem o ambiente.'
    },
    {
      number: '04',
      title: 'Baixa Visibilidade',
      desc: 'Falta de relatórios em tempo real e divergência entre os números de Vendas, Marketing e Finanças nas tomadas de decisão.'
    },
    {
      number: '05',
      title: 'Crescimento Limitado',
      desc: 'A equipe comercial dedica mais tempo preenchendo planilhas e executando rotinas manuais do que gerando novas receitas.'
    }
  ];

  return (
    <section className="py-24 sm:py-28 bg-white/80 backdrop-blur-xs border-b border-[#E5E5E5]" id="problema">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            O DESAFIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Sua empresa cresceu.{' '}
            <span className="text-[#003C8B]">Sua arquitetura comercial acompanhou?</span>
          </h2>
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Sistemas isolados, dados inconsistentes e processos manuais criam complexidade justamente quando a empresa precisa ganhar escala.
          </p>
        </div>

        {/* 5 Challenges in Editorial Separated Layout (No heavy cards) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-20 text-left pt-6 border-t border-[#E5E5E5]">
          {challenges.map((item) => (
            <div 
              key={item.number}
              className="space-y-2.5 pr-2"
            >
              <span className="text-xs text-[#003C8B] font-semibold block">
                {item.number}
              </span>
              <h3 className="text-sm font-semibold text-[#111111]">
                {item.title}
              </h3>
              <p className="text-xs text-[#606060] font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Fundamental Law Statement Box (Minimalist & Clean) */}
        <div className="bg-[#FAFAF9]/90 backdrop-blur-xs border border-[#E5E5E5] rounded p-8 sm:p-12 text-left shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold block">
                LEI FUNDAMENTAL DA ESCALA COMERCIAL
              </span>
              
              <div className="space-y-2 text-xl sm:text-2xl font-semibold text-[#111111] leading-snug">
                <p>Crescimento sem arquitetura cria <span className="text-[#003C8B]">complexidade</span>.</p>
                <p>Complexidade sem governança cria <span className="text-[#003C8B]">dívida tecnológica</span>.</p>
                <p className="text-[#606060]">E dívida tecnológica comercial <span className="text-[#111111]">reduz a velocidade de expansão</span>.</p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                onClick={onOpenAssessment}
                className="w-full sm:w-auto bg-[#003C8B] hover:bg-[#002d69] text-white px-6 py-3.5 rounded font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                Avaliar minha arquitetura
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
