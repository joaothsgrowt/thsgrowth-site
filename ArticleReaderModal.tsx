import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { IntelligenceArticle } from '../types';

interface ArticleReaderModalProps {
  article: IntelligenceArticle | null;
  onClose: () => void;
  onOpenArchitectModal: () => void;
}

export default function ArticleReaderModal({
  article,
  onClose,
  onOpenArchitectModal
}: ArticleReaderModalProps) {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.15 }}
          className="bg-white border border-[#E5E5E5] rounded-xl w-full max-w-2xl text-[#111111] relative shadow-lg my-8 overflow-hidden max-h-[90vh] flex flex-col text-left"
        >
          {/* Top Bar */}
          <div className="bg-[#FAFAF9] p-5 sm:p-6 flex items-center justify-between border-b border-[#E5E5E5]">
            <div>
              <span className="text-xs font-mono text-[#003C8B] uppercase tracking-wider block mb-0.5 font-semibold">
                {article.category} · {article.publishedDate}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#606060] font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-[#606060] hover:text-[#111111] p-1.5 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Article Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111111] leading-tight">
              {article.title}
            </h2>

            <p className="text-sm text-[#606060] font-normal italic border-l-2 border-[#003C8B] pl-3 py-0.5">
              {article.summary}
            </p>

            {/* Key Takeaways Box */}
            <div className="bg-[#FAFAF9] border border-[#E5E5E5] rounded-lg p-4 space-y-2">
              <span className="text-xs font-mono text-[#003C8B] font-semibold uppercase tracking-wider block">
                Principais Pontos de Decisão (Takeaways):
              </span>
              {article.keyTakeaways.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#111111]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#003C8B] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-sm text-[#333333] font-normal leading-relaxed">
              {article.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Callout box */}
            <div className="bg-[#FAFAF9] border border-[#E5E5E5] rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="text-left space-y-0.5">
                <h4 className="font-display font-bold text-xs sm:text-sm text-[#111111]">
                  Precisa de uma avaliação deste cenário na sua empresa?
                </h4>
                <p className="text-xs text-[#606060] font-normal">
                  Nossos arquitetos podem analisar a arquitetura atual e mapear eventuais riscos.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenArchitectModal();
                }}
                className="flex-shrink-0 bg-[#003C8B] hover:bg-[#002d69] text-white px-4 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                Falar com um arquiteto <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
