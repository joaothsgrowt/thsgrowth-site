export default function AuthoritySection() {
  const credentials = [
    {
      title: 'Arquitetura Completa',
      highlight: 'End-to-End',
      desc: 'Engenharia cobrindo da fundação de dados à governança e sustentação técnica contínua.'
    },
    {
      title: 'Agnosticismo Real',
      highlight: 'Multiplataforma',
      desc: 'Capacidade técnica independente para recomendar a melhor tecnologia para a sua organização.'
    },
    {
      title: 'SLA Contratual',
      highlight: 'Sustentação',
      desc: 'Squads dedicados de suporte de engenharia e evolução contínua após o go-live.'
    },
    {
      title: 'Engenharia Comercial',
      highlight: 'Foco em Receita',
      desc: 'Todas as decisões arquiteturais e técnicas são orientadas à geração previsível de receita.'
    }
  ];

  return (
    <section className="py-24 sm:py-28 bg-white/85 backdrop-blur-xs border-b border-[#E5E5E5]" id="autoridade">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            PADRÃO DE ENGENHARIA
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Engenharia de precisão para operações críticas.
          </h2>
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Nossos princípios arquiteturais garantem estabilidade, escalabilidade e governança para toda a infraestrutura comercial.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {credentials.map((cred, idx) => (
            <div 
              key={cred.title}
              className="bg-[#FAFAF9]/90 backdrop-blur-xs p-6 rounded border border-[#E5E5E5] flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-xs text-[#003C8B] font-semibold block mb-3">
                  0{idx + 1}
                </span>
                <span className="text-lg font-semibold text-[#111111] block mb-1">
                  {cred.highlight}
                </span>
                <h3 className="text-xs font-medium text-[#003C8B] mb-3">
                  {cred.title}
                </h3>
                <p className="text-xs text-[#606060] font-normal leading-relaxed">
                  {cred.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E5E5E5] text-[11px] uppercase tracking-wider text-[#606060] font-medium">
                Padrão THS Growth
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
