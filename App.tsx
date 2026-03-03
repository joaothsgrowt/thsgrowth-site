import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  ChevronRight, 
  Cpu, 
  Database, 
  Globe, 
  LayoutDashboard, 
  Menu, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  X,
  Zap,
  LogIn,
  Search
} from 'lucide-react';
import CRMTest from './components/CRMTest';
import Logo from './components/Logo';

// --- Components ---

const Navbar = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Método EAG', href: '#method', action: () => onNavigate('home') },
    { name: 'Teste de CRM', href: '#crm-test', action: () => onNavigate('crm-test') },
    { name: 'Login', href: 'https://crm.thsgrowth.com', icon: <LogIn className="w-4 h-4" />, action: () => window.location.href = 'https://crm.thsgrowth.com' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-2 group">
          <Logo variant={isScrolled ? 'dark' : 'light'} />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => { e.preventDefault(); link.action(); }}
              className={`text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                isScrolled ? 'text-gray-600 hover:text-[#003C8B]' : 'text-gray-200 hover:text-white'
              }`}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511977619642?text=Gostaria%20de%20implantar%20um%20CRM"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2 shadow-lg ${
              isScrolled 
                ? 'bg-[#003C8B] text-white hover:bg-[#022a61] shadow-blue-900/10' 
                : 'bg-white text-[#003C8B] hover:bg-gray-100 shadow-white/10'
            }`}
          >
            Fale Conosco <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 md:hidden flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => { 
                e.preventDefault(); 
                link.action(); 
                setIsMobileMenuOpen(false); 
              }}
              className="text-lg font-medium text-gray-600 hover:text-[#003C8B] flex items-center gap-2"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5511977619642?text=Gostaria%20de%20implantar%20um%20CRM"
            className="bg-[#003C8B] text-white px-5 py-3 rounded-lg font-medium text-center mt-2 hover:bg-[#022a61] transition-colors"
          >
            Fale Conosco
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#003C8B]">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#022a61] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium uppercase tracking-wider mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Integradores de Tecnologia Especializados em CRM
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-white leading-[1.1] mb-6 tracking-tight">
            Automação de <br />
            <span className="text-white/80">
              CRM & RevOps
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-lg leading-relaxed font-light">
            Funcionando em até 45 dias. Transforme sua operação comercial em uma máquina previsível e escalável com o método EAG.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511977619642?text=Gostaria%20de%20implantar%20um%20CRM"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-[#003C8B] rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-black/10"
            >
              Falar com Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#method"
              className="px-8 py-4 border border-white/30 text-white rounded-full font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm"
            >
              Conhecer Método
            </a>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y1 }}
          className="relative hidden lg:block"
        >
          {/* Clean Dashboard Preview */}
          <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl shadow-black/20 overflow-hidden border border-white/10">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-gray-200" />
                <div className="w-3 h-3 rounded-full bg-gray-200" />
                <div className="w-3 h-3 rounded-full bg-gray-200" />
              </div>
              <div className="text-xs text-gray-400 font-mono flex items-center gap-2 uppercase tracking-wider">
                THS Analytics
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="text-gray-500 text-sm mb-1 font-medium">Receita Mensal</div>
                  <div className="text-3xl font-bold text-[#003C8B]">R$ 1.2M</div>
                  <div className="text-emerald-600 text-xs flex items-center gap-1 mt-2 font-medium bg-emerald-50 px-2 py-1 rounded-full w-fit">
                    <ArrowRight className="w-3 h-3 -rotate-45" /> +12.5% vs mês anterior
                  </div>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                  <div className="text-gray-500 text-sm mb-1 font-medium">Ciclo de Vendas</div>
                  <div className="text-3xl font-bold text-[#003C8B]">28 Dias</div>
                  <div className="text-emerald-600 text-xs flex items-center gap-1 mt-2 font-medium bg-emerald-50 px-2 py-1 rounded-full w-fit">
                    <ArrowRight className="w-3 h-3 rotate-45" /> -5 dias vs média
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="text-gray-500 text-sm mb-6 font-medium flex justify-between items-center">
                  <span>Pipeline de Vendas</span>
                  <span className="text-[#003C8B] font-bold">Total: R$ 4.5M</span>
                </div>
                <div className="space-y-5">
                  {[
                    { label: 'Prospecção', val: 75, color: 'bg-[#003C8B]' },
                    { label: 'Qualificação', val: 50, color: 'bg-blue-500' },
                    { label: 'Proposta', val: 35, color: 'bg-blue-400' },
                    { label: 'Fechamento', val: 20, color: 'bg-emerald-500' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-2 font-medium">
                        <span>{item.label}</span>
                        <span>{item.val}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.val}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${item.color}`} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: "+114", label: "Empresas Atendidas" },
    { value: "+15", label: "Anos de Experiência" },
    { value: "+60M", label: "Impacto Anual (R$)" },
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="pt-8 md:pt-0"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-[#003C8B] mb-2">{stat.value}</div>
              <div className="text-gray-500 uppercase tracking-widest text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MethodEAG = () => {
  const steps = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Estrutura",
      desc: "Desenhamos processos comerciais alinhados à realidade do seu negócio, não apenas à tecnologia."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Automação",
      desc: "Eliminamos tarefas manuais e repetitivas, integrando CRM, ERP e BI em uma arquitetura única."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Governança",
      desc: "Estabelecemos rituais de gestão e métricas claras para garantir previsibilidade e controle."
    }
  ];

  return (
    <section id="method" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#003C8B] font-bold tracking-wider uppercase text-sm mb-4 block">Nossa Metodologia</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">O Método EAG</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Nossa metodologia proprietária para transformar operações comerciais caóticas em máquinas de vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 transition-all group border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#003C8B] mb-8 group-hover:bg-[#003C8B] group-hover:text-white transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    "Implantação de CRM",
    "Integrações Complexas (ERP/BI)",
    "Auditoria HubSpot/Agendor",
    "Sales Ops & RevOps",
    "Playbooks de Vendas",
    "Treinamento de Equipes",
    "Dashboards de Gestão",
    "Automação de Marketing"
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003C8B] text-xs font-bold uppercase tracking-wider mb-6">
              Nossas Soluções
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Soluções completas para <br />
              <span className="text-[#003C8B]">Escalar Receita</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
              A THS Growth não é apenas uma consultoria. Somos o braço direito da sua operação comercial, trazendo tecnologia de ponta e expertise de mercado.
            </p>
            <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#003C8B] flex-shrink-0" />
                  {service}
                </motion.li>
              ))}
            </ul>
            <div className="mt-12">
              <a 
                href="https://wa.me/5511977619642?text=Gostaria%20de%20implantar%20um%20CRM"
                className="inline-flex items-center gap-2 text-[#003C8B] font-bold border-b-2 border-[#003C8B]/20 pb-1 hover:border-[#003C8B] transition-colors"
              >
                Ver todos os serviços <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="absolute inset-0 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50" />
            <div className="space-y-6 mt-12">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 aspect-square flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#003C8B] transition-colors">
                  <Database className="w-8 h-8 text-[#003C8B] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-gray-900 font-bold text-lg">Data Driven</h4>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 aspect-square flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <Users className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-gray-900 font-bold text-lg">Cultura</h4>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 aspect-square flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <BarChart3 className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-gray-900 font-bold text-lg">Resultados</h4>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 aspect-square flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Globe className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-gray-900 font-bold text-lg">Escala</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-[#003C8B] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Pronto para transformar sua operação comercial?
        </h2>
        <p className="text-xl text-white/80 mb-12 font-light">
          Agende uma conversa com nossos especialistas e descubra como o método EAG pode acelerar seus resultados em 45 dias.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/5511977619642?text=Gostaria%20de%20implantar%20um%20CRM"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#003C8B] rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 fill-current" />
            Agendar Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Logo variant="dark" />
            </a>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              Empresa de tecnologia especializada em processos comerciais, automações e RevOps. Transformamos operações em máquinas previsíveis.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#003C8B] hover:text-white transition-colors cursor-pointer border border-gray-100">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#003C8B] hover:text-white transition-colors cursor-pointer border border-gray-100">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#about" className="hover:text-[#003C8B] transition-colors">Sobre Nós</a></li>
              <li><a href="#method" className="hover:text-[#003C8B] transition-colors">Método EAG</a></li>
              <li><a href="#services" className="hover:text-[#003C8B] transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-[#003C8B] transition-colors">Carreiras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-500">
              <li>joao@thsgrowth.com</li>
              <li>+55 (11) 91579-1363</li>
              <li className="text-sm">
                Av das Nações Unidas, 12995, <br />
                2º andar, Cidade Monções, <br />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 THS Growth. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#003C8B] transition-colors">Privacidade</a>
            <a href="#" className="hover:text-[#003C8B] transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'crm-test') {
    return <CRMTest onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-[#003C8B]/20 selection:text-[#003C8B]">
      <Navbar onNavigate={setCurrentPage} />
      <Hero />
      <Stats />
      <MethodEAG />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
