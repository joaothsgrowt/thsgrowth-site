import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, Check, ChevronDown, ChevronUp, Cookie } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CookieConsent() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('ths_cookie_consent');
    if (!consent) {
      // Small delay for smooth entry after initial page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      'ths_cookie_consent',
      JSON.stringify({
        status: 'accepted_all',
        date: new Date().toISOString(),
        preferences: { essential: true, analytics: true, marketing: true },
      })
    );
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(
      'ths_cookie_consent',
      JSON.stringify({
        status: 'essential_only',
        date: new Date().toISOString(),
        preferences: { essential: true, analytics: false, marketing: false },
      })
    );
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      'ths_cookie_consent',
      JSON.stringify({
        status: 'custom',
        date: new Date().toISOString(),
        preferences,
      })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 pointer-events-none flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="pointer-events-auto w-full max-w-4xl bg-[#00173D]/95 backdrop-blur-md text-white border border-white/15 rounded-2xl shadow-2xl p-5 sm:p-6 text-xs sm:text-sm overflow-hidden"
        >
          {/* Top Bar with Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-[#568DF5] flex items-center justify-center border border-blue-500/30">
                <Cookie className="w-4 h-4" />
              </div>
              <div className="font-semibold text-white tracking-tight">
                {language === 'pt' ? 'Privacidade & Gestão de Cookies' : 'Privacy & Cookie Management'}
              </div>
            </div>

            {/* Certifications Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px] font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO/IEC 27001</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[11px] font-medium">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>Conformidade LGPD</span>
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="py-3 text-slate-300 font-light leading-relaxed text-xs sm:text-[13px]">
            {language === 'pt' ? (
              <p>
                Utilizamos cookies e tecnologias analíticas para otimizar sua experiência de navegação, analisar fluxos de arquitetura comercial e garantir a integridade dos dados conforme as diretrizes internacionais da <strong>ISO/IEC 27001</strong> e a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>. Você pode personalizar suas preferências a qualquer momento.
              </p>
            ) : (
              <p>
                We use cookies and analytics to enhance your browsing experience, analyze commercial architecture flows, and ensure data integrity in accordance with <strong>ISO/IEC 27001</strong> standards and <strong>LGPD Compliance (General Data Protection Law)</strong>. You can customize your preferences at any time.
              </p>
            )}
          </div>

          {/* Details Accordion */}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="py-3 border-t border-white/10 space-y-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* 1. Essenciais */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">
                      {language === 'pt' ? 'Cookies Essenciais' : 'Essential Cookies'}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                      {language === 'pt' ? 'Obrigatório' : 'Required'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-light">
                    {language === 'pt'
                      ? 'Necessários para segurança, navegação e certificação ISO/IEC 27001.'
                      : 'Required for security, navigation, and ISO/IEC 27001 governance.'}
                  </p>
                </div>

                {/* 2. Analytics */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">
                      {language === 'pt' ? 'Desempenho & Métricas' : 'Performance & Metrics'}
                    </span>
                    <input
                      type="checkbox"
                      id="cookie-analytics"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="rounded bg-white/20 border-white/30 text-[#1952BE] focus:ring-0 cursor-pointer"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 font-light">
                    {language === 'pt'
                      ? 'Avaliação de tráfego anônimo e tempo de carregamento de arquitetura.'
                      : 'Anonymous traffic evaluation and architecture load timing.'}
                  </p>
                </div>

                {/* 3. Personalização */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-xs">
                      {language === 'pt' ? 'Personalização' : 'Customization'}
                    </span>
                    <input
                      type="checkbox"
                      id="cookie-marketing"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="rounded bg-white/20 border-white/30 text-[#1952BE] focus:ring-0 cursor-pointer"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 font-light">
                    {language === 'pt'
                      ? 'Conteúdos e recomendações sob medida para seu segmento de mercado.'
                      : 'Tailored recommendations for your industry segment.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-xs text-blue-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-1.5"
            >
              <span>{showDetails ? (language === 'pt' ? 'Ocultar Detalhes' : 'Hide Details') : (language === 'pt' ? 'Personalizar Preferências' : 'Customize Preferences')}</span>
              {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              {showDetails ? (
                <button
                  onClick={handleSavePreferences}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer border border-white/15"
                >
                  {language === 'pt' ? 'Salvar Selecionados' : 'Save Selected'}
                </button>
              ) : (
                <button
                  onClick={handleAcceptEssential}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white text-xs font-medium transition-colors cursor-pointer border border-white/15"
                >
                  {language === 'pt' ? 'Apenas Essenciais' : 'Essential Only'}
                </button>
              )}

              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2 rounded-xl bg-[#1952BE] hover:bg-[#1544A0] text-white text-xs font-semibold tracking-wide transition-all shadow-lg hover:shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{language === 'pt' ? 'Aceitar e Continuar' : 'Accept and Continue'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
