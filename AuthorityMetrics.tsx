import { useEffect, useState, useRef } from 'react';

interface MetricItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export default function AuthorityMetrics() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const metrics: MetricItem[] = [
    {
      value: 114,
      prefix: '+',
      label: 'Projetos Críticos',
      sublabel: 'Implantações e integrações em produção'
    },
    {
      value: 15,
      prefix: '+',
      suffix: ' Anos',
      label: 'Experiência Técnica',
      sublabel: 'Engenharia de dados e arquitetura de CRM'
    },
    {
      value: 43,
      prefix: '+',
      label: 'Especialistas Seniores',
      sublabel: 'Arquitetos, engenheiros de dados e consultores'
    }
  ];

  const [counts, setCounts] = useState<number[]>(metrics.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Animate counts
          const duration = 1800;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(metrics.map((m) => Math.round(m.value * easeOut)));

            if (frame >= totalFrames) {
              clearInterval(timer);
              setCounts(metrics.map((m) => m.value));
            }
          }, frameDuration);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section 
      id="autoridade"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#0A1128] text-white relative overflow-hidden border-b border-[#0F1D40]"
    >
      {/* Elementos Gráficos Sutis de Fundo */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1952BE] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#003C8B] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header do Bloco de Autoridade */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#568DF5] block mb-3">
            NÚMEROS & AUTORIDADE CORPORATIVA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight">
            Consistência técnica comprovada na esteira comercial das maiores operações do país
          </h2>
        </div>

        {/* 3 Indicadores Lado a Lado */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 border-t border-white/15 pt-12">
          {metrics.map((item, idx) => (
            <div key={item.label} className="text-left space-y-3">
              {/* Número Grande */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white flex items-baseline">
                {item.prefix && <span className="text-[#568DF5] mr-0.5">{item.prefix}</span>}
                <span>{counts[idx]}</span>
                {item.suffix && <span className="text-2xl sm:text-3xl ml-1.5 text-slate-300 font-semibold">{item.suffix}</span>}
              </div>

              {/* Rótulo e Descrição */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal mt-1 leading-relaxed">
                  {item.sublabel}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
