import { motion } from 'motion/react';
import { Factory, HeartPulse, Laptop, Briefcase, GraduationCap, TrendingUp, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Partners = () => {
   const capabilities = ["CRM", "ERP", "Dados", "Inteligência Artificial", "Financeiro", "Customer Success", "Operações"];
   const partners = ["Salesforce", "HubSpot", "SAP", "Oracle", "Microsoft", "TOTVS", "Ploomes", "Pipedrive"];
   return (
     <section className="py-24 bg-white border-y border-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8">O que conectamos</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto px-6 mb-16">
          {capabilities.map(cap => (
            <span key={cap} className="px-5 py-2.5 bg-gray-50 text-gray-800 font-medium rounded-full text-base md:text-lg shadow-sm border border-gray-100">
              {cap}
            </span>
          ))}
        </div>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Plataformas líderes de mercado</h3>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 max-w-5xl mx-auto px-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           {partners.map(p => (
             <div key={p} className="text-xl md:text-2xl font-display font-bold text-gray-800 hover:text-[#003C8B] transition-colors cursor-default">
               {p}
             </div>
           ))}
        </div>
     </section>
   );
};

export const Industries = () => {
   const inds = [
     {name: "Indústria & Manufatura", icon: <Factory className="w-6 h-6" />},
     {name: "Healthcare", icon: <HeartPulse className="w-6 h-6" />},
     {name: "Tecnologia & SaaS", icon: <Laptop className="w-6 h-6" />},
     {name: "Serviços Financeiros", icon: <Briefcase className="w-6 h-6" />},
     {name: "Educação Superior", icon: <GraduationCap className="w-6 h-6" />},
     {name: "Private Equity", icon: <TrendingUp className="w-6 h-6" />},
   ];
   return (
     <section className="py-32 bg-gray-50" id="industrias">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <span className="text-[#003C8B] font-bold tracking-wider uppercase text-sm mb-4 block">Segmentos</span>
             <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Expertise por Indústria</h2>
             <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
               Desenhamos implementações que respeitam a lógica e a regulação específica do seu mercado.
             </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {inds.map((ind, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-xl shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 mx-auto bg-blue-50 text-[#003C8B] flex justify-center items-center rounded-xl mb-6">
                      {ind.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg">{ind.name}</h3>
                 </div>
              ))}
           </div>
        </div>
     </section>
   );
};

export const Cases = () => {
  return (
    <section className="py-32 bg-white" id="cases">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 text-center">Business Cases</h2>
        </div>
        
        <div className="bg-[#003C8B] text-white rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#022a61] rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
           
           <div className="flex-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider mb-8">
                Operação Enterprise
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-tight tracking-tight">
                Previsibilidade total de ponta a ponta: Vendas ao Financeiro.
              </h3>
              <div className="space-y-8">
                 <div className="border-l-2 border-blue-400/30 pl-4">
                   <h4 className="font-bold text-blue-300 text-sm uppercase tracking-wider mb-2">O Problema</h4>
                   <p className="text-white/80 font-light text-lg">Silos de dados entre a operação comercial e o backoffice. Forecast construído na intuição e falta de governança no CRM.</p>
                 </div>
                 <div className="border-l-2 border-blue-400/30 pl-4">
                   <h4 className="font-bold text-blue-300 text-sm uppercase tracking-wider mb-2">A Arquitetura Ofertada</h4>
                   <p className="text-white/80 font-light text-lg">Ecosistema integrado envolvendo HubSpot, ERP ERP e Data Warehouse proprietário via Middleware da THS.</p>
                 </div>
                 <div className="border-l-2 border-blue-400/30 pl-4">
                   <h4 className="font-bold text-blue-300 text-sm uppercase tracking-wider mb-2">A Solução THS</h4>
                   <p className="text-white/80 font-light text-lg">Desenho completo da governança de RevOps, padronização sistêmica dos ciclos de conversão e integração em tempo real com o financeiro.</p>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-1/3 relative z-10 flex flex-col pt-8 lg:pt-0">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 flex-1 flex flex-col justify-center">
                 <h4 className="font-bold text-white text-xl mb-8 border-b border-white/10 pb-4">Resultados Alcançados</h4>
                 <div className="space-y-6">
                    {[
                      "Redução imediata de retrabalho",
                      "Maior previsibilidade comercial",
                      "Integração operacional unificada",
                      "Governança avançada de dados",
                      "Aumento rápido da produtividade",
                      "Melhoria na tomada de decisão"
                    ].map((resultado, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                           <CheckCircle2 className="w-4 h-4" />
                         </div>
                         <span className="text-white/90 font-light text-base">{resultado}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const Insights = () => {
   const posts = [
     {title: "Como a Inteligência Artificial está remodelando o Revenue Operations em organizações Enterprise", tag: "AI & RevOps"},
     {title: "Governança de Dados no CRM Enterprise: Onde os C-levels deixam dinheiro na mesa", tag: "Data Governance"},
     {title: "Arquitetura Legacy vs Modern Stack: O momento exato e os riscos na migração sistêmica", tag: "Systems Integration"}
   ];
   return (
     <section className="py-32 bg-gray-50 border-t border-gray-100" id="insights">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                 <span className="text-[#003C8B] font-bold tracking-wider uppercase text-sm mb-4 block">Conhecimento</span>
                 <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">THS Insights</h2>
                 <p className="text-xl text-gray-600 font-light max-w-xl">
                    Conhecimento aplicado à transformação empresarial.
                 </p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[#003C8B] font-bold border-b-2 border-transparent hover:border-[#003C8B] pb-1 transition-all">
                Ver hub corporativo <ChevronRight className="w-4 h-4"/>
              </a>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {posts.map((p, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl shadow-gray-200/40 transition-all duration-300 group cursor-pointer flex flex-col h-full hover:-translate-y-1">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-6 w-fit">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-8 group-hover:text-[#003C8B] transition-colors leading-relaxed flex-1">
                      {p.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 font-medium pt-6 border-t border-gray-100">
                       <span>Ler o artigo inteiro</span>
                       <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#003C8B] group-hover:translate-x-1 transition-all" />
                    </div>
                 </div>
              ))}
           </div>
        </div>
     </section>
   );
};
