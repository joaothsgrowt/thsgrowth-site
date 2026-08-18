import { 
  ArrowRight
} from 'lucide-react';
import { INTELLIGENCE_ARTICLES } from '../data/siteData';
import { IntelligenceArticle } from '../types';

interface THSIntelligenceProps {
  onSelectArticle: (article: IntelligenceArticle) => void;
}

export default function THSIntelligence({ onSelectArticle }: THSIntelligenceProps) {
  return (
    <section className="py-24 sm:py-28 bg-[#F7F7F5]/80 backdrop-blur-xs border-b border-[#E5E5E5]" id="intelligence">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <span className="text-xs uppercase tracking-widest text-[#003C8B] font-semibold mb-4 block">
            PUBLICAÇÕES E PESQUISA TÉCNICA
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Engenharia e visão executiva para líderes de receita.
          </h2>
          
          <p className="text-base text-[#606060] font-normal leading-relaxed">
            Análises técnicas, ensaios sobre arquitetura comercial e frameworks de governança produzidos pelo nosso time de especialistas.
          </p>
        </div>

        {/* 3 Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {INTELLIGENCE_ARTICLES.map((art) => (
            <div
              key={art.id}
              onClick={() => onSelectArticle(art)}
              className="bg-white/95 backdrop-blur-xs rounded p-6 border border-[#E5E5E5] hover:border-[#CCCCCC] transition-colors cursor-pointer flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Category & Read Time */}
                <div className="flex items-center justify-between text-[11px] text-[#606060] mb-4 pb-3 border-b border-[#E5E5E5]">
                  <span className="text-[#003C8B] font-semibold uppercase tracking-wider">{art.category}</span>
                  <span className="font-medium">{art.readTime}</span>
                </div>

                <h3 className="text-base font-semibold text-[#111111] mb-2 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-[#606060] font-normal leading-relaxed mb-4">
                  {art.summary}
                </p>

                {/* Key Takeaways snippet */}
                <div className="space-y-1.5 mb-6">
                  {art.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#606060]">
                      <span className="text-[#003C8B] font-bold">·</span>
                      <span className="line-clamp-1">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-semibold text-[#003C8B] uppercase tracking-wider">
                <span>Ler ensaio completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
