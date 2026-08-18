import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import EditorialBlocks from './components/EditorialBlocks';
import SpotlightSection from './components/SpotlightSection';
import SolutionsGrid from './components/SolutionsGrid';
import EnterpriseCases from './components/EnterpriseCases';
import ServicesLines from './components/ServicesLines';
import IndustrySegments from './components/IndustrySegments';
import EditorialBlog from './components/EditorialBlog';
import AuthorityMetrics from './components/AuthorityMetrics';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

// Modals
import ArchitectModal from './components/ArchitectModal';
import ArchitectureAssessmentModal from './components/ArchitectureAssessmentModal';
import ArticleReaderModal from './components/ArticleReaderModal';
import CookieConsent from './components/CookieConsent';

import { IntelligenceArticle } from './types';

export default function App() {
  const [isArchitectModalOpen, setIsArchitectModalOpen] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<IntelligenceArticle | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#F7F7F5] text-[#111111] font-sans selection:bg-[#1952BE] selection:text-white antialiased">
        {/* 3D Round Blue Architectural Contour Lines Background (Logo Inspiration) */}
        <Background3D />

        {/* Enterprise Layout Structure */}
        <div className="relative z-10">
          
          {/* 1. HEADER (Horizontal, Sofisticado, Mega Menu, Sticky) */}
          <Header
            onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
            onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)}
            onNavigateSection={handleNavigateSection}
          />

          <main>
            {/* 2. HERO (Dividido Texto | Fundo Corporativo com Pessoas e Grade) */}
            <Hero
              onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
              onExploreCapacities={() => handleNavigateSection('solucoes')}
            />

            {/* 3. BLOCOS EDITORIAIS ([ TEXTO | IMAGEM ] e [ IMAGEM | TEXTO ]) */}
            <EditorialBlocks
              onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
              onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)}
            />

            {/* 4. SEÇÃO DE DESTAQUE (Fundo Diferenciado, Framework & Grande Área Visual) */}
            <SpotlightSection
              onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
            />

            {/* 5. SEÇÃO DE SOLUÇÕES (Grade 3 Colunas Minimalista com Hover Suave) */}
            <SolutionsGrid
              onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
            />

            {/* 6. SEÇÃO DE CASES (Apresentação Editorial de Grandes Projetos Corporativos) */}
            <EnterpriseCases
              onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
            />

            {/* 7. SERVIÇOS (Linhas Horizontais Minimalistas com Hover Interativo) */}
            <ServicesLines
              onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
            />

            {/* 8. SEGMENTOS (Grade Editorial de Setores com Preview Fotográfico) */}
            <IndustrySegments
              onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
            />

            {/* 9. BLOG / CONTEÚDOS (3 Artigos Editoriais com Destaque no 1º) */}
            <EditorialBlog
              onSelectArticle={(article) => setSelectedArticle(article)}
            />

            {/* 10. NÚMEROS / AUTORIDADE (Fundo Contrastante Escuro & Contadores Animados) */}
            <AuthorityMetrics />

            {/* 11. CTA FINAL (Encerramento Amplo com Headline Muito Grande) */}
            <FinalCTA
              onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
            />
          </main>

          {/* 12. FOOTER (Grande, Corporativo em 5 Colunas) */}
          <Footer
            onNavigateSection={handleNavigateSection}
            onOpenArchitectModal={() => setIsArchitectModalOpen(true)}
            onOpenAssessmentModal={() => setIsAssessmentModalOpen(true)}
          />
        </div>

        {/* Modais Interativos */}
        <ArchitectModal
          isOpen={isArchitectModalOpen}
          onClose={() => setIsArchitectModalOpen(false)}
        />

        <ArchitectureAssessmentModal
          isOpen={isAssessmentModalOpen}
          onClose={() => setIsAssessmentModalOpen(false)}
          onOpenArchitectModal={() => {
            setIsAssessmentModalOpen(false);
            setIsArchitectModalOpen(true);
          }}
        />

        <ArticleReaderModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          onOpenArchitectModal={() => {
            setSelectedArticle(null);
            setIsArchitectModalOpen(true);
          }}
        />

        {/* Banner de Consentimento de Cookies (ISO/IEC 27001 e LGPD) */}
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}
