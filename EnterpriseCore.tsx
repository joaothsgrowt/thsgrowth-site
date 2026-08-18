import { motion } from 'motion/react';
import { ArrowRight, Network, Server, Settings, ShieldCheck, LineChart, Users, Database, Bot, HeartPulse, Search, PenTool, User, Megaphone, Briefcase, DollarSign, TrendingUp } from 'lucide-react';

export const PainPoints = () => {
  const issues = [
    "Sua operação comercial perdeu previsibilidade?",
    "Seu CRM não conversa com seu ERP?",
    "Seus dados estão espalhados em múltiplas planilhas?",
    "Sua equipe comercial trabalha sem governança?",
    "Seu investimento em tecnologia não gera ROI?"
  ];
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
              O Desafio Enterprise
            </div>
             <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
               Sua operação está preparada para <span className="text-[#003C8B]">crescer?</span>
             </h2>
             <p className="text-xl text-gray-600 font-light mb-8">
               Empresas líderes precisam integrar processos, dados e tecnologia para manter eficiência, governança e previsibilidade operacional.
             </p>
          </div>
          <div className="space-y-4">
            {issues.map((issue, i) => (
              <motion.div 
                key={i} 
                initial={{opacity:0, x:20}} 
                whileInView={{opacity:1, x:0}} 
                viewport={{once: true}}
                transition={{delay: i*0.1}} 
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4"
              >
                 <div className="w-8 h-8 rounded-full bg-blue-100 text-[#003C8B] flex items-center justify-center flex-shrink-0 mt-0.5">?</div>
                 <p className="text-lg text-gray-800 font-medium leading-snug">{issue}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Lifecycle = () => {
  const steps = [
    { name: "Diagnosticar", desc: "Mapeamento aprofundado do cenário atual e gaps empresariais.", icon: <Search className="w-6 h-6" /> },
    { name: "Projetar", desc: "Design de arquitetura e processos escaláveis.", icon: <PenTool className="w-6 h-6" /> },
    { name: "Implantar", desc: "Construção e padronização sistêmica da fundação.", icon: <Server className="w-6 h-6" /> },
    { name: "Integrar", desc: "Fluxos de dados unificados conectando a operação.", icon: <Network className="w-6 h-6" /> },
    { name: "Operar", desc: "Suporte corporativo, governança e gestão.", icon: <Settings className="w-6 h-6" /> },
    { name: "Evoluir", desc: "Otimização contínua e adoção de inovações.", icon: <LineChart className="w-6 h-6" /> },
  ];
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
         <span className="text-[#003C8B] font-bold tracking-wider uppercase text-sm mb-4 block">Gestão de Ciclo de Vida</span>
         <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-6">
           Não fazemos apenas setup.<br/>Nós operamos a fundação.
         </h2>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 font-light">
           Entregamos sustentação completa. Da concepção arquitetural à evolução contínua das plataformas que movem sua receita.
         </p>
         
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-left">
           {steps.map((s, i) => (
             <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative z-10 hover:-translate-y-1 transition-transform">
                <div className="text-[#003C8B] mb-5 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">{s.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export const EnterpriseSolutions = () => {
  const solutions = [
    "Relacionamento com Clientes", "Operações Comerciais", "Integração de Sistemas", 
    "Suporte Especializado", "Inteligência Artificial", "Dados e Analytics", 
    "Governança Tecnológica"
  ];
  return (
    <section className="py-24 bg-white" id="solucoes">
       <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-[#003C8B] font-bold tracking-wider uppercase text-sm mb-4 block">Portfólio</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Soluções Corporativas</h2>
              <p className="text-xl text-gray-600 font-light max-w-xl">
                 Tecnologia de classe mundial aplicada para resolver problemas complexos de receita e eficiência estrutural.
              </p>
            </div>
         </div>
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, i) => (
               <div key={i} className="group bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:bg-[#003C8B] transition-colors duration-300 cursor-pointer">
                  <h3 className="font-bold text-gray-900 group-hover:text-white text-xl pr-4">{sol}</h3>
                  <div className="mt-8 w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-white/20 transition-colors">
                     <ArrowRight className="w-5 h-5 text-[#003C8B] group-hover:text-white" />
                  </div>
               </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export const Ecosystem = () => {
  const nodes = [
    { label: 'Cliente', desc: 'A origem do valor e da jornada de engajamento.', icon: <User className="w-7 h-7" /> },
    { label: 'Marketing', desc: 'Geração de demanda e aquisição escalável.', icon: <Megaphone className="w-7 h-7" /> },
    { label: 'Vendas', desc: 'Conversão, negociação e previsibilidade da receita.', icon: <Briefcase className="w-7 h-7" /> },
    { label: 'Financeiro', desc: 'Backoffice operacional integrado em tempo real.', icon: <DollarSign className="w-7 h-7" /> },
    { label: 'Operações', desc: 'Entrega de valor e capacidade estrutural sistêmica.', icon: <Settings className="w-7 h-7" /> },
    { label: 'Executivos', desc: 'Visão macro-diretiva, metas e governança de dados.', icon: <Users className="w-7 h-7" /> },
    { label: 'Inteligência Artificial', desc: 'Suporte à modelagem estratégica e automação.', icon: <Bot className="w-7 h-7" /> },
    { label: 'Tomada de Decisão', desc: 'Crescimento de negócio focado no uso de dados sólidos.', icon: <TrendingUp className="w-7 h-7" /> },
  ];
  return (
    <section className="py-32 bg-[#0A1128] text-white overflow-hidden relative" id="ecossistema">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
         <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Visão Integrada</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">Arquitetura de Ecossistema</h2>
            <p className="text-xl text-white/70 font-light">
               Não implantamos software isolado. Conectamos os fluxos críticos de negócio em uma arquitetura de dados unificada e segura.
            </p>
         </div>
         
         <div className="flex flex-col items-center max-w-2xl mx-auto relative">
            {/* The vertical connection line */}
            <div className="absolute top-10 bottom-10 left-[35px] md:left-1/2 md:-translate-x-1/2 w-0.5 bg-blue-500/20" />
            
            {nodes.map((node, i) => (
              <motion.div 
                key={i} 
                className={`relative z-10 bg-[#131F3D] border border-blue-500/30 p-6 rounded-2xl w-full max-w-lg mb-8 flex items-center gap-6 shadow-2xl ${
                  i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: i * 0.15}}
              >
                 <div className="w-14 h-14 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 shadow-inner">
                    {node.icon}
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-gray-100">{node.label}</h3>
                    <p className="text-white/60 text-sm mt-1">{node.desc}</p>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};
