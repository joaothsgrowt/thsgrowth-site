import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Database, 
  Layers, 
  Network, 
  ShieldCheck, 
  Cpu, 
  Boxes,
  Building2,
  TrendingUp,
  FileCode,
  Users
} from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenArchitectModal: () => void;
  onOpenAssessmentModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function Header({
  onOpenArchitectModal,
  onOpenAssessmentModal,
  onNavigateSection
}: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E5E5E5] py-3.5 sm:py-4'
          : 'bg-[#002D7A]/40 backdrop-blur-md border-b border-white/15 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* 1. Logo à esquerda */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center text-left cursor-pointer focus:outline-none"
            aria-label="THS Growth - Página Inicial"
          >
            <Logo 
              variant={isScrolled ? 'brand' : 'light'} 
              height={isScrolled ? 34 : 38} 
            />
          </button>
        </div>

        {/* 2. Menu Principal Centralizado com Mega Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Soluções (Com Mega Menu) */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('solucoes')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={() => handleNavClick('solucoes')}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                isScrolled
                  ? activeMegaMenu === 'solucoes' ? 'text-[#1952BE]' : 'text-[#111111] hover:text-[#1952BE]'
                  : activeMegaMenu === 'solucoes' ? 'text-white' : 'text-white/90 hover:text-white'
              }`}
            >
              <span>Soluções</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeMegaMenu === 'solucoes' ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Dropdown Soluções */}
            {activeMegaMenu === 'solucoes' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white border border-[#E5E5E5] shadow-xl rounded p-6 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="space-y-4">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#1952BE] border-b border-[#E5E5E5] pb-2">
                    Arquitetura Comercial
                  </div>
                  <button
                    onClick={() => handleNavClick('solucoes')}
                    className="flex items-start gap-3 p-2 rounded hover:bg-[#F7F7F5] transition-colors text-left w-full group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#111111] group-hover:text-[#1952BE] transition-colors">
                        Data & Revenue Intelligence
                      </div>
                      <p className="text-[11px] text-[#606060] font-normal mt-0.5 leading-relaxed">
                        Pipelines analíticos, single source of truth e modelos preditivos de receita.
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('solucoes')}
                    className="flex items-start gap-3 p-2 rounded hover:bg-[#F7F7F5] transition-colors text-left w-full group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#111111] group-hover:text-[#1952BE] transition-colors">
                        CRM Architecture Enterprise
                      </div>
                      <p className="text-[11px] text-[#606060] font-normal mt-0.5 leading-relaxed">
                        Modelagem de entidades, processos de vendas complexos e implantação.
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('solucoes')}
                    className="flex items-start gap-3 p-2 rounded hover:bg-[#F7F7F5] transition-colors text-left w-full group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#111111] group-hover:text-[#1952BE] transition-colors">
                        Engenharia de Integração (ERP ↔ CRM)
                      </div>
                      <p className="text-[11px] text-[#606060] font-normal mt-0.5 leading-relaxed">
                        Conexão bidirecional entre CRM, SAP, Oracle, TOTVS, BigQuery e APIs.
                      </p>
                    </div>
                  </button>
                </div>

                <div className="space-y-4 border-l border-[#E5E5E5] pl-5">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-[#1952BE] border-b border-[#E5E5E5] pb-2">
                    Governança & Sustentação
                  </div>
                  <button
                    onClick={() => handleNavClick('solucoes')}
                    className="flex items-start gap-3 p-2 rounded hover:bg-[#F7F7F5] transition-colors text-left w-full group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#111111] group-hover:text-[#1952BE] transition-colors">
                        Governança & Qualidade de Dados
                      </div>
                      <p className="text-[11px] text-[#606060] font-normal mt-0.5 leading-relaxed">
                        Políticas de segurança, dicionário de dados, permissões e LGPD.
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('solucoes')}
                    className="flex items-start gap-3 p-2 rounded hover:bg-[#F7F7F5] transition-colors text-left w-full group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded bg-blue-50 text-[#1952BE] flex items-center justify-center shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#111111] group-hover:text-[#1952BE] transition-colors">
                        Sustentação N2/N3 & SLA Ativo
                      </div>
                      <p className="text-[11px] text-[#606060] font-normal mt-0.5 leading-relaxed">
                        Squads dedicados de suporte e evolução contínua sem rotatividade.
                      </p>
                    </div>
                  </button>

                  <div className="pt-2">
                    <button
                      onClick={onOpenAssessmentModal}
                      className="w-full bg-[#1952BE]/10 hover:bg-[#1952BE]/15 text-[#1952BE] p-3 rounded text-xs font-semibold uppercase tracking-wider flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <span>Diagnóstico de Maturidade</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Serviços */}
          <button
            onClick={() => handleNavClick('servicos')}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              isScrolled ? 'text-[#111111] hover:text-[#1952BE]' : 'text-white/90 hover:text-white'
            }`}
          >
            {t.nav.services}
          </button>

          {/* Segmentos */}
          <button
            onClick={() => handleNavClick('segmentos')}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              isScrolled ? 'text-[#111111] hover:text-[#1952BE]' : 'text-white/90 hover:text-white'
            }`}
          >
            {t.nav.segments}
          </button>

          {/* Cases */}
          <button
            onClick={() => handleNavClick('cases')}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              isScrolled ? 'text-[#111111] hover:text-[#1952BE]' : 'text-white/90 hover:text-white'
            }`}
          >
            {t.nav.cases}
          </button>

          {/* Institucional / Autoridade */}
          <button
            onClick={() => handleNavClick('autoridade')}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              isScrolled ? 'text-[#111111] hover:text-[#1952BE]' : 'text-white/90 hover:text-white'
            }`}
          >
            {t.nav.about}
          </button>

          {/* Artigos / THS Intelligence */}
          <button
            onClick={() => handleNavClick('intelligence')}
            className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              isScrolled ? 'text-[#111111] hover:text-[#1952BE]' : 'text-white/90 hover:text-white'
            }`}
          >
            {t.nav.articles}
          </button>
        </nav>

        {/* 3. Ações à Direita: Seletor de Idioma + CTA Destacado */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Seletor de Idioma (Português / English) */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                isScrolled 
                  ? 'bg-slate-100/90 hover:bg-slate-200/80 text-[#111111]' 
                  : 'bg-white/15 hover:bg-white/25 text-white border border-white/20'
              }`}
              aria-label="Selecionar idioma"
            >
              <span className="text-sm leading-none">{language === 'pt' ? '🇧🇷' : '🇺🇸'}</span>
              <span className="tracking-tight">{language === 'pt' ? 'Português' : 'English'}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-36 bg-white border border-[#E5E5E5] rounded-xl shadow-xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <button
                  onClick={() => {
                    setLanguage('pt');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-left cursor-pointer transition-colors ${
                    language === 'pt' ? 'bg-blue-50 text-[#1952BE] font-semibold' : 'text-[#333333] hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base">🇧🇷</span>
                  <span>Português</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setLangMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-left cursor-pointer transition-colors ${
                    language === 'en' ? 'bg-blue-50 text-[#1952BE] font-semibold' : 'text-[#333333] hover:bg-gray-50'
                  }`}
                >
                  <span className="text-base">🇺🇸</span>
                  <span>English</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={onOpenArchitectModal}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm ${
              isScrolled
                ? 'bg-[#1952BE] hover:bg-[#144299] text-white'
                : 'bg-white hover:bg-slate-100 text-[#002D7A] shadow-md hover:scale-[1.02]'
            }`}
          >
            <span>{t.nav.talkToArchitect}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger & Lang Switcher */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            className={`px-2 py-1 rounded text-xs font-semibold flex items-center gap-1 cursor-pointer ${
              isScrolled ? 'text-[#111111] bg-gray-100' : 'text-white bg-white/20'
            }`}
          >
            <span>{language === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none cursor-pointer transition-colors ${
              isScrolled ? 'text-[#111111] hover:text-[#1952BE]' : 'text-white hover:text-blue-200'
            }`}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E5E5] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick('solucoes')}
              className="text-left text-sm font-semibold text-[#111111] hover:text-[#1952BE] py-1 uppercase tracking-wider"
            >
              {t.nav.solutions}
            </button>
            <button
              onClick={() => handleNavClick('servicos')}
              className="text-left text-sm font-semibold text-[#111111] hover:text-[#1952BE] py-1 uppercase tracking-wider"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => handleNavClick('segmentos')}
              className="text-left text-sm font-semibold text-[#111111] hover:text-[#1952BE] py-1 uppercase tracking-wider"
            >
              {t.nav.segments}
            </button>
            <button
              onClick={() => handleNavClick('cases')}
              className="text-left text-sm font-semibold text-[#111111] hover:text-[#1952BE] py-1 uppercase tracking-wider"
            >
              {t.nav.cases}
            </button>
            <button
              onClick={() => handleNavClick('autoridade')}
              className="text-left text-sm font-semibold text-[#111111] hover:text-[#1952BE] py-1 uppercase tracking-wider"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('intelligence')}
              className="text-left text-sm font-semibold text-[#111111] hover:text-[#1952BE] py-1 uppercase tracking-wider"
            >
              {t.nav.articles}
            </button>
          </nav>

          <div className="pt-4 border-t border-[#E5E5E5] space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenArchitectModal();
              }}
              className="w-full bg-[#1952BE] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-center"
            >
              {t.nav.talkToArchitect}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
