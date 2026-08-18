import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Lock
} from 'lucide-react';

interface ArchitectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ArchitectModal({ isOpen, onClose }: ArchitectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: 'Diretoria / C-Level',
    crm: 'Salesforce',
    needs: 'Arquitetura e Integração com ERP'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Error submitting architect form:', error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.15 }}
          className="bg-white border border-[#E5E5E5] rounded w-full max-w-lg p-6 sm:p-8 text-[#111111] relative shadow-lg my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#606060] hover:text-[#111111] p-1.5 rounded hover:bg-gray-100 transition-colors z-20 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#003C8B] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#111111]">Solicitação Encaminhada</h3>
              <p className="text-xs text-[#606060] font-normal max-w-sm mx-auto leading-relaxed">
                Nossos arquitetos comerciais receberam os detalhes da sua demanda e entrarão em contato em até 2 horas úteis.
              </p>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#003C8B] text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Fechar janela
                </button>
              </div>
            </div>
          ) : (
            <div className="relative z-10 text-left">
              {/* Header */}
              <div className="mb-5 pb-3 border-b border-[#E5E5E5]">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-[#003C8B] text-[11px] font-semibold uppercase tracking-wider mb-2">
                  Sessão Técnica Preliminar
                </div>
                <h3 className="text-xl font-semibold text-[#111111]">
                  Falar com um Arquiteto Comercial
                </h3>
                <p className="text-xs text-[#606060] font-normal mt-0.5">
                  Atendimento direto com especialistas seniores de arquitetura e dados da THS.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] text-[#111111] mb-1 uppercase font-medium tracking-wider">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Roberto Silveira"
                    className="w-full bg-[#FAFAF9] border border-[#E5E5E5] rounded px-3 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#003C8B]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#111111] mb-1 uppercase font-medium tracking-wider">E-mail Corporativo</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="roberto@empresa.com"
                      className="w-full bg-[#FAFAF9] border border-[#E5E5E5] rounded px-3 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#003C8B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#111111] mb-1 uppercase font-medium tracking-wider">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full bg-[#FAFAF9] border border-[#E5E5E5] rounded px-3 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#003C8B]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#111111] mb-1 uppercase font-medium tracking-wider">Nome da Empresa</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Empresa S.A."
                      className="w-full bg-[#FAFAF9] border border-[#E5E5E5] rounded px-3 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#003C8B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#111111] mb-1 uppercase font-medium tracking-wider">Seu Cargo</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#FAFAF9] border border-[#E5E5E5] rounded px-3 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#003C8B]"
                    >
                      <option value="Diretoria / C-Level">Diretoria / C-Level</option>
                      <option value="Head de Vendas / Comercial">Head de Vendas / Comercial</option>
                      <option value="TI / CIO / Engenharia">TI / CIO / Engenharia</option>
                      <option value="RevOps / Operações">RevOps / Operações</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-[#111111] mb-1 uppercase font-medium tracking-wider">Principal Desafio / Necessidade</label>
                  <select
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    className="w-full bg-[#FAFAF9] border border-[#E5E5E5] rounded px-3 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#003C8B]"
                  >
                    <option value="Arquitetura e Integração com ERP">Arquitetura e Integração com ERP (SAP/Oracle/TOTVS)</option>
                    <option value="Governança e Qualidade de Dados">Governança, Permissões e Qualidade de Dados</option>
                    <option value="Implantação ou Migração de CRM">Implantação ou Migração Enterprise de CRM</option>
                    <option value="Sustentação e Suporte Técnico Especializado (SLA)">Sustentação e Suporte Especializado (SLA)</option>
                    <option value="Unificação de Instâncias / Silos">Unificação de Instâncias / Múltiplas ferramentas</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#003C8B] hover:bg-[#002d69] text-white py-3.5 rounded font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    {isSubmitting ? 'Encaminhando...' : 'Agendar conversa técnica'}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#606060] pt-1">
                  <Lock className="w-3 h-3 text-[#003C8B]" />
                  <span>Seus dados são confidenciais e protegidos sob NDA.</span>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
