import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en';

export interface Translations {
  nav: {
    solutions: string;
    services: string;
    segments: string;
    cases: string;
    about: string;
    articles: string;
    talkToArchitect: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlighted: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    sla: string;
    governance: string;
    multiplatform: string;
  };
  common: {
    contactUs: string;
    learnMore: string;
    readArticle: string;
    viewAll: string;
    scheduleDiagnosis: string;
    getStarted: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      solutions: 'Soluções',
      services: 'Serviços',
      segments: 'Segmentos',
      cases: 'Cases',
      about: 'Institucional',
      articles: 'Artigos',
      talkToArchitect: 'Falar com Arquiteto Comercial',
    },
    hero: {
      titlePrefix: 'A arquitetura comercial por trás de',
      titleHighlighted: 'empresas que querem crescer.',
      subtitle: 'Projetamos, integramos, governamos e sustentamos ecossistemas de CRM, ERP e dados para operações corporativas que exigem previsibilidade, conformidade e escala.',
      ctaPrimary: 'Falar com Arquiteto Comercial',
      ctaSecondary: 'Conhecer Método',
      sla: 'SLA N2/N3 Ativo',
      governance: 'Governança & LGPD',
      multiplatform: 'Multiplataforma',
    },
    common: {
      contactUs: 'Fale conosco',
      learnMore: 'Saber mais',
      readArticle: 'Ler artigo',
      viewAll: 'Ver todos',
      scheduleDiagnosis: 'Diagnóstico de Maturidade',
      getStarted: 'Começar agora',
    },
  },
  en: {
    nav: {
      solutions: 'Solutions',
      services: 'Services',
      segments: 'Industries',
      cases: 'Case Studies',
      about: 'About Us',
      articles: 'Articles',
      talkToArchitect: 'Talk to Commercial Architect',
    },
    hero: {
      titlePrefix: 'The commercial architecture powering',
      titleHighlighted: 'high-growth enterprises.',
      subtitle: 'We design, integrate, govern, and maintain CRM, ERP, and data ecosystems for enterprise operations demanding predictability, compliance, and scale.',
      ctaPrimary: 'Talk to Commercial Architect',
      ctaSecondary: 'Explore Method',
      sla: 'Active N2/N3 SLA',
      governance: 'Data Governance & LGPD',
      multiplatform: 'Multiplatform',
    },
    common: {
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      readArticle: 'Read Article',
      viewAll: 'View All',
      scheduleDiagnosis: 'Maturity Assessment',
      getStarted: 'Get Started',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
