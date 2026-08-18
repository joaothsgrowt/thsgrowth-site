import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ArrowRight, 
  RotateCcw
} from 'lucide-react';

interface ArchitectureAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenArchitectModal: () => void;
}

export default function ArchitectureAssessmentModal({
  isOpen,
  onClose,
  onOpenArchitectModal
}: ArchitectureAssessmentModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      title: 'Integração de Sistemas',
      question: 'Como o CRM da sua empresa se comunica hoje com o ERP e sistema de faturamento?',
      options: [
        { text: 'Totalmente integrado em tempo real com webhooks/middleware e monitoramento de logs', score: 3 },
        { text: 'Integração parcial ou por lote (batch diário) com eventuais falhas manuais', score: 2 },
        { text: 'Manual (planilhas ou redigitação de pedidos pela equipe)', score: 0 }
      ]
    },
    {
      title: 'Qualidade e Higiene de Dados',
      question: 'Qual o nível de confiança da diretoria nos relatórios de pipeline e métricas comerciais?',
      options: [
        { text: 'Alta: Base padronizada, sem duplicidades e com campos obrigatórios validados', score: 3 },
        { text: 'Média: Existem divergências entre relatórios comerciais e financeiros', score: 1 },
        { text: 'Baixa: Cada gestor possui sua própria planilha paralela para tomar decisões', score: 0 }
      ]
    },
    {
      title: 'Governança e Permissões',
      question: 'Como é gerida a criação de novos campos, regras e perfis de acesso no CRM?',
      options: [
        { text: 'Governança estrita com documentação de campos, dicionário de dados e perfis granulares', score: 3 },
        { text: 'Ajustes pontuais conforme pedidos da equipe, sem documentação formal', score: 1 },
        { text: 'Sem controle: qualquer usuário cria campos ou exporta dados sensíveis', score: 0 }
      ]
    },
    {
      title: 'Sustentação e Evolução Pós Go-Live',
      question: 'Como funciona o suporte técnico e evolução da plataforma atualmente?',
      options: [
        { text: 'Squad especializado dedicado com SLA contratual e backlog contínuo de melhorias', score: 3 },
        { text: 'Dependente de um único profissional interno ou analista sobrecarregado', score: 1 },
        { text: 'Sem sustentação: o sistema está estagnado desde a implantação inicial', score: 0 }
      ]
    }
  ];

  const handleSelectOption = (score: number) => {
    const updated = [...answers, score];
    setAnswers(updated);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = 12;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let maturityLevel = 'Crítico';
  let maturityColor = 'text-red-600';
  let maturityDesc = 'Sua empresa possui alto acúmulo de dívida técnica comercial. Silos e dados inconsistentes estão desacelerando o crescimento e gerando risco operacional.';

  if (percentage >= 75) {
    maturityLevel = 'Avançado / Enterprise';
    maturityColor = 'text-emerald-700';
    maturityDesc = 'Sua operação possui boa maturidade estrutural. O foco agora deve ser automações avançadas, IA preditiva e sustentação contínua com SLA.';
  } else if (percentage >= 45) {
    maturityLevel = 'Intermediário / Em Transição';
    maturityColor = 'text-amber-700';
    maturityDesc = 'Existem bases construídas, porém faltam camadas de integração com ERP e governança de dados para garantir escalabilidade real.';
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.15 }}
          className="bg-white border border-[#E5E5E5] rounded-xl w-full max-w-lg p-6 sm:p-8 text-[#111111] relative shadow-lg my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#606060] hover:text-[#111111] p-1.5 rounded-md hover:bg-gray-100 transition-colors z-20 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {!showResult ? (
            <div className="relative z-10 text-left">
              {/* Step indicator */}
              <div className="flex items-center justify-between text-xs font-mono text-[#606060] mb-5 pb-3 border-b border-[#E5E5E5]">
                <span className="text-[#003C8B] font-semibold uppercase tracking-wider">
                  AVALIAÇÃO DE MATURIDADE
                </span>
                <span>0{currentQuestion + 1} / 0{questions.length}</span>
              </div>

              {/* Question Title */}
              <span className="text-[11px] font-mono text-[#003C8B] uppercase tracking-wider block mb-1 font-semibold">
                {questions[currentQuestion].title}
              </span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] mb-5 leading-snug">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-2.5 mb-5">
                {questions[currentQuestion].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt.score)}
                    className="w-full text-left p-3.5 rounded-lg bg-[#FAFAF9] hover:bg-white border border-[#E5E5E5] hover:border-[#003C8B] transition-all text-xs text-[#111111] cursor-pointer flex items-start gap-3 group"
                  >
                    <span className="w-5 h-5 rounded bg-white border border-[#E5E5E5] text-[#003C8B] font-mono text-[11px] font-semibold flex items-center justify-center flex-shrink-0 group-hover:border-[#003C8B]">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="leading-relaxed font-normal">{opt.text}</span>
                  </button>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-[#E5E5E5] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#003C8B] transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>
          ) : (
            /* Result Panel */
            <div className="relative z-10 text-left space-y-5">
              <div className="text-center pb-5 border-b border-[#E5E5E5]">
                <span className="text-xs font-mono text-[#003C8B] uppercase tracking-wider block mb-2 font-semibold">
                  RESULTADO DO DIAGNÓSTICO
                </span>
                <div className="inline-flex items-center gap-3 bg-[#FAFAF9] px-5 py-2.5 rounded-lg border border-[#E5E5E5] mb-2">
                  <span className="text-3xl font-display font-bold text-[#111111]">
                    {percentage}%
                  </span>
                  <div className="text-left">
                    <span className="text-[10px] text-[#606060] block font-mono uppercase">ÍNDICE DE MATURIDADE</span>
                    <span className={`text-xs font-semibold ${maturityColor}`}>{maturityLevel}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAFAF9] border border-[#E5E5E5] rounded-lg p-4">
                <h4 className="text-xs font-mono text-[#003C8B] uppercase tracking-wider font-semibold mb-1.5">
                  Diagnóstico Preliminar:
                </h4>
                <p className="text-xs text-[#606060] font-normal leading-relaxed">
                  {maturityDesc}
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenArchitectModal();
                  }}
                  className="w-full bg-[#003C8B] hover:bg-[#002d69] text-white py-3 rounded-lg font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  Receber Blueprint de Correção com Arquiteto
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleReset}
                  className="w-full bg-white hover:bg-gray-50 border border-[#E5E5E5] text-[#606060] hover:text-[#111111] py-2 rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Refazer avaliação
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
