import { ArrowRight, ShieldCheck, Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenArchitectModal: () => void;
  onOpenAssessmentModal: () => void;
}

export default function Footer({
  onNavigateSection,
  onOpenArchitectModal,
  onOpenAssessmentModal
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1424] text-white pt-20 pb-12 border-t border-[#1C2640] relative text-left">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        
        {/* Grade de 5 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Coluna 1: Logo & Missão (4 colunas) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" height={40} />
            
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-sm">
              Consultoria e engenharia de arquitetura comercial para operações enterprise. Desenhamos, integramos, governamos e sustentamos ecossistemas de CRM, ERP e dados.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#568DF5] shrink-0" />
                <span>São Paulo, SP • Atendimento Nacional e América Latina</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#568DF5] shrink-0" />
                <a href="mailto:joao@thsgrowth.com" className="hover:text-white transition-colors">
                  joao@thsgrowth.com
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/thsgrowth"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#1952BE] flex items-center justify-center text-white transition-colors"
                aria-label="LinkedIn da THS Growth"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/thsgrowth/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white/10 hover:bg-[#1952BE] flex items-center justify-center text-white transition-colors"
                aria-label="Instagram da THS Growth"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Soluções (2 colunas) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#568DF5]">
              Soluções
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigateSection('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Data & Revenue Intelligence
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  CRM Architecture Enterprise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Engenharia de Integração (ERP)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Governança & Dicionário de Dados
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('solucoes')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sustentação N2/N3 sob SLA
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços (2 colunas) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#568DF5]">
              Serviços
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigateSection('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Consultoria de Estratégia
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Implantação & Migração
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Conectores SAP / TOTVS / Oracle
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('servicos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Squads sob Demanda
                </button>
              </li>
              <li>
                <button onClick={onOpenAssessmentModal} className="text-[#568DF5] hover:text-white transition-colors cursor-pointer text-left font-medium">
                  Diagnóstico de Maturidade →
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Segmentos (2 colunas) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#568DF5]">
              Segmentos
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigateSection('segmentos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Serviços Financeiros & FinTech
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('segmentos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Indústria & Manufatura
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('segmentos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Tecnologia & SaaS B2B
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('segmentos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Logística & Supply Chain
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('segmentos')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Saúde & Farma
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 5: Institucional & Contato (2 colunas) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#568DF5]">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigateSection('cases')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Estudos de Caso
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('autoridade')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Sobre a THS Growth
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('intelligence')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Artigos & Research
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenArchitectModal}
                  className="bg-[#1952BE] hover:bg-[#144299] text-white px-4 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-wider block text-center transition-colors cursor-pointer"
                >
                  Falar com Arquiteto Comercial
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Inferior: Políticas, Compliance e Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} THS Growth. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#568DF5]" />
              Conformidade LGPD & ISO 27001
            </span>
            <button className="hover:text-white transition-colors cursor-pointer">
              Privacidade & Termos
            </button>
            <button className="hover:text-white transition-colors cursor-pointer">
              Segurança da Informação
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
