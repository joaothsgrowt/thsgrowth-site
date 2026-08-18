import { ArrowRight, Clock } from 'lucide-react';
import { INTELLIGENCE_ARTICLES } from '../data/siteData';
import { IntelligenceArticle } from '../types';

interface EditorialBlogProps {
  onSelectArticle: (article: IntelligenceArticle) => void;
}

export default function EditorialBlog({ onSelectArticle }: EditorialBlogProps) {
  const mainArticle = INTELLIGENCE_ARTICLES[0];
  const secondaryArticles = INTELLIGENCE_ARTICLES.slice(1, 3);

  return (
    <section id="intelligence" className="py-24 lg:py-36 border-b border-[#E5E5E5] relative bg-[#F7F7F5]/40">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1952BE] block mb-3">
              THS INTELLIGENCE & PESQUISA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-[1.15] tracking-tight">
              Análises e frameworks sobre arquitetura comercial
            </h2>
          </div>
          <p className="text-sm text-[#555555] max-w-md">
            Artigos técnicos escritos por arquitetos e consultores seniores sobre governança, RevOps e infraestrutura.
          </p>
        </div>

        {/* Grade Editorial com 3 Artigos com Gradiente Azul */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Artigo 1 Principal com Gradiente Azul (7 colunas) */}
          <div
            onClick={() => onSelectArticle(mainArticle)}
            className="lg:col-span-7 bg-white rounded border border-[#E5E5E5] overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt={mainArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradiente Azul Sofisticado */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001D4E]/80 via-[#1952BE]/35 to-transparent mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001438]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 rounded text-[11px] font-semibold uppercase tracking-wider text-[#1952BE] z-10">
                {mainArticle.category}
              </div>
            </div>

            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#888888] mb-3">
                  <span>{mainArticle.publishedDate}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {mainArticle.readTime}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-4 group-hover:text-[#1952BE] transition-colors leading-tight">
                  {mainArticle.title}
                </h3>
                <p className="text-sm text-[#555555] font-normal leading-relaxed mb-6">
                  {mainArticle.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1952BE]">
                <span>Ler artigo completo</span>
                <div className="w-8 h-8 rounded-full border border-[#CCCCCC] flex items-center justify-center group-hover:border-[#1952BE] group-hover:bg-[#1952BE] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Artigos 2 e 3 Secundários com Gradiente Azul (5 colunas - empilhados) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {secondaryArticles.map((art, idx) => (
              <div
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="bg-white rounded border border-[#E5E5E5] overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-all duration-300 flex-1"
              >
                <div className="aspect-[21/9] w-full overflow-hidden relative bg-slate-900">
                  <img
                    src={
                      idx === 0
                        ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
                    }
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradiente Azul Sofisticado */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#001D4E]/80 via-[#1952BE]/35 to-transparent mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001438]/70 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/95 rounded text-[10px] font-semibold uppercase tracking-wider text-[#1952BE] z-10">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#111111] mb-2 group-hover:text-[#1952BE] transition-colors leading-snug">
                      {art.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] line-clamp-2 mb-4">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#1952BE] font-semibold uppercase tracking-wider">
                    <span>Ler artigo</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
