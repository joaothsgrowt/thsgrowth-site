import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  ChevronRight, 
  AlertCircle, 
  Users, 
  MousePointerClick,
  Brain,
  RefreshCcw,
  MessageSquare,
  Lock
} from 'lucide-react';
import Logo from './Logo';

type Step = 'intro' | 'form' | 'quiz' | 'results';

interface FormData {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  password: string;
}

interface Question {
  id: number;
  category: 'Indicadores' | 'Adoção' | 'Usabilidade';
  question: string;
  context: string;
  options: {
    id: string;
    text: string;
    score: number;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    category: 'Indicadores',
    question: "Qual CRM sua empresa utiliza atualmente?",
    context: "Entender a maturidade da ferramenta adotada.",
    options: [
      { id: 'A', text: "Salesforce, HubSpot ou Dynamics 365", score: 100 },
      { id: 'B', text: "Pipedrive, RD Station CRM ou Zoho", score: 80 },
      { id: 'C', text: "Planilhas, ERP ou ferramenta interna", score: 40 },
      { id: 'D', text: "Não temos CRM definido", score: 0 }
    ]
  },
  {
    id: 2,
    category: 'Indicadores',
    question: "Você consegue responder, agora, qual é a taxa de conversão do seu funil comercial?",
    context: "C-levels com CRM bem adotado sabem este número de cabeça.",
    options: [
      { id: 'A', text: "Sim, acompanho semanalmente com dados do CRM", score: 100 },
      { id: 'B', text: "Tenho uma ideia, mas preciso consultar relatórios", score: 70 },
      { id: 'C', text: "Só sei no fechamento mensal, via planilha", score: 40 },
      { id: 'D', text: "Não temos esse indicador estruturado", score: 0 }
    ]
  },
  {
    id: 3,
    category: 'Adoção',
    question: "Quantos % dos seus vendedores registram atividades no CRM diariamente?",
    context: "A adoção real se mede pela rotina, não pela implantação.",
    options: [
      { id: 'A', text: "Acima de 80% do time", score: 100 },
      { id: 'B', text: "Entre 50% e 80%", score: 70 },
      { id: 'C', text: "Menos de 50%", score: 30 },
      { id: 'D', text: "Não tenho como medir isso", score: 0 }
    ]
  },
  {
    id: 4,
    category: 'Indicadores',
    question: "O forecast de vendas que chega na sua mesa vem do CRM ou de planilhas paralelas?",
    context: "Dados fragmentados levam a decisões erradas.",
    options: [
      { id: 'A', text: "100% do CRM — é nossa fonte única de verdade", score: 100 },
      { id: 'B', text: "Principalmente do CRM, com ajustes manuais", score: 70 },
      { id: 'C', text: "Planilha do gestor, com dados parciais do CRM", score: 40 },
      { id: 'D', text: "Planilha manual ou feeling do time", score: 0 }
    ]
  },
  {
    id: 5,
    category: 'Adoção',
    question: "Com que frequência a liderança discute a qualidade dos dados e atualização do CRM?",
    context: "O que a liderança não cobra, o time não prioriza.",
    options: [
      { id: 'A', text: "Semanalmente, em reunião de pipeline", score: 100 },
      { id: 'B', text: "Mensalmente, nas reuniões de resultado", score: 70 },
      { id: 'C', text: "Esporadicamente, quando algo dá errado", score: 30 },
      { id: 'D', text: "Nunca — não faz parte da pauta", score: 0 }
    ]
  },
  {
    id: 6,
    category: 'Usabilidade',
    question: "O que o seu time comercial mais reclama sobre o CRM?",
    context: "As queixas revelam onde está o gargalo real.",
    options: [
      { id: 'A', text: "Que é burocrático — tem campos demais pra preencher", score: 40 },
      { id: 'B', text: "Que não ajuda a vender — é só controle", score: 20 },
      { id: 'C', text: "Que ninguém usa, então não faz sentido preencher", score: 0 },
      { id: 'D', text: "Poucas reclamações — o time entende o valor", score: 100 }
    ]
  },
  {
    id: 7,
    category: 'Usabilidade',
    question: "Quais campos críticos seu time NÃO preenche no CRM?",
    context: "Campos vazios = pontos cegos na gestão.",
    options: [
      { id: 'A', text: "Motivo de perder e próximos passos", score: 40 },
      { id: 'B', text: "Valor do negócio e dados de fechamento planejados", score: 20 },
      { id: 'C', text: "Notas de reunião e atividades de acompanhamento", score: 40 },
      { id: 'D', text: "O time preenche os campos essenciais", score: 100 }
    ]
  }
];

export default function CRMTest({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<Step>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    password: ''
  });

  const handleStart = () => setStep('form');

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch('/api/capture-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setStep('quiz');
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(curr => curr + 1), 300);
    } else {
      setStep('results');
    }
  };

  const calculateResults = () => {
    const totalScore = Math.round(answers.reduce((a, b) => a + b, 0) / questions.length);
    
    const getCategoryScore = (cat: string) => {
      const catQuestions = questions.filter(q => q.category === cat);
      const catAnswers = catQuestions.map(q => answers[questions.indexOf(q)]);
      return Math.round(catAnswers.reduce((a, b) => a + b, 0) / catQuestions.length);
    };

    return {
      total: totalScore,
      indicadores: getCategoryScore('Indicadores'),
      adocao: getCategoryScore('Adoção'),
      usabilidade: getCategoryScore('Usabilidade')
    };
  };

  const results = step === 'results' ? calculateResults() : null;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
             <Logo variant="dark" compact />
            <span className="text-gray-300 mx-2">|</span>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Teste de CRM</span>
          </div>
          {step !== 'intro' && step !== 'results' && (
            <div className="text-sm text-gray-400 font-medium">
              Passo {step === 'form' ? '1' : '2'} de 2
            </div>
          )}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          
          {/* INTRO */}
          {step === 'intro' && (
            <motion.div 
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center max-w-2xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#003C8B] mb-8">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Seu CRM gera <br/>
                <span className="text-[#003C8B]">inteligência comercial?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Descubra sua operação com os indicadores certos, se o time realmente adotou a ferramenta e onde estão as lacunas que travam seu crescimento.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
                {[
                  { icon: <BarChart3 className="w-5 h-5" />, title: "KPIs e Indicadores" },
                  { icon: <Users className="w-5 h-5" />, title: "Adoção do Time" },
                  { icon: <MousePointerClick className="w-5 h-5" />, title: "Usabilidade" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3 text-gray-700 font-medium">
                    <div className="text-[#003C8B]">{item.icon}</div>
                    {item.title}
                  </div>
                ))}
              </div>

              <button 
                onClick={handleStart}
                className="bg-[#003C8B] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#022a61] transition-all shadow-xl shadow-blue-900/10 flex items-center gap-2 mx-auto"
              >
                Iniciar Diagnóstico <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {/* FORM */}
          {step === 'form' && (
            <motion.div 
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Crie seu acesso</h2>
              <p className="text-gray-500 mb-8">Preencha para iniciar o diagnóstico e receber seu relatório.</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seu Nome</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003C8B] focus:ring-2 focus:ring-blue-50 outline-none transition-all"
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003C8B] focus:ring-2 focus:ring-blue-50 outline-none transition-all"
                    placeholder="Nome da empresa"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail Corporativo</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003C8B] focus:ring-2 focus:ring-blue-50 outline-none transition-all"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Whatsapp</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003C8B] focus:ring-2 focus:ring-blue-50 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Crie uma senha</label>
                  <div className="relative">
                    <input 
                      required
                      type="password" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#003C8B] focus:ring-2 focus:ring-blue-50 outline-none transition-all"
                      placeholder="******"
                      value={formData.password}
                      onChange={e => setFormData({...formData, password: e.target.value})}
                    />
                    <Lock className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#003C8B] text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#022a61] transition-all shadow-lg mt-4 flex items-center justify-center gap-2"
                >
                  Iniciar Diagnóstico <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          )}

          {/* QUIZ */}
          {step === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-2xl mx-auto"
            >
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[#003C8B] font-bold text-sm tracking-wider uppercase">
                    {questions[currentQuestion].category}
                  </span>
                  <span className="text-gray-400 font-medium text-sm">
                    {currentQuestion + 1}/{questions.length}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    className="h-full bg-[#003C8B]"
                  />
                </div>
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {questions[currentQuestion].question}
              </h2>
              <p className="text-gray-500 text-lg mb-8 italic">
                {questions[currentQuestion].context}
              </p>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.score)}
                    className="w-full text-left p-6 rounded-xl border-2 border-gray-100 hover:border-[#003C8B] hover:bg-blue-50/50 transition-all group flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 font-bold flex items-center justify-center group-hover:bg-[#003C8B] group-hover:text-white transition-colors flex-shrink-0">
                      {option.id}
                    </div>
                    <span className="text-gray-700 font-medium text-lg pt-0.5 group-hover:text-[#003C8B]">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* RESULTS */}
          {step === 'results' && results && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
                <div className="bg-[#003C8B] p-8 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-4">
                      <Brain className="w-4 h-4" /> Diagnóstico Inteligente
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                      {results.total >= 80 ? "CRM de Alta Performance" : 
                       results.total >= 50 ? "CRM com Potencial Subutilizado" : 
                       "Operação em Risco"}
                    </h2>
                    <p className="text-blue-100 text-lg max-w-xl mx-auto">
                      {results.total >= 80 ? "Sua operação é madura, mas pequenos ajustes podem gerar ainda mais escala." : 
                       results.total >= 50 ? "A base está montada, mas há gaps que comprometem a inteligência comercial." : 
                       "Sua operação carece de dados confiáveis e processos definidos."}
                    </p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                    {/* Main Score */}
                    <div className="text-center relative">
                      <svg className="w-48 h-48 transform -rotate-90">
                        <circle cx="96" cy="96" r="88" stroke="#F1F5F9" strokeWidth="12" fill="transparent" />
                        <circle cx="96" cy="96" r="88" stroke="#003C8B" strokeWidth="12" fill="transparent" 
                          strokeDasharray={552}
                          strokeDashoffset={552 - (552 * results.total) / 100}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-display text-5xl font-bold text-[#003C8B]">{results.total}/100</span>
                        <span className="text-gray-400 text-sm font-medium uppercase tracking-wide mt-1">Score Geral</span>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="flex-1 w-full grid gap-6">
                      {[
                        { label: 'Indicadores & KPIs', val: results.indicadores, icon: <BarChart3 className="w-5 h-5" /> },
                        { label: 'Adoção pelo Time', val: results.adocao, icon: <Users className="w-5 h-5" /> },
                        { label: 'Usabilidade & Engajamento', val: results.usabilidade, icon: <MousePointerClick className="w-5 h-5" /> },
                      ].map((item) => (
                        <div key={item.label}>
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2 text-gray-700 font-bold">
                              <div className="text-[#003C8B]">{item.icon}</div>
                              {item.label}
                            </div>
                            <span className="font-bold text-[#003C8B]">{item.val}%</span>
                          </div>
                          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.val}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              className={`h-full ${item.val >= 70 ? 'bg-emerald-500' : item.val >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.val >= 70 ? "Excelente performance nesta área." : 
                             item.val >= 40 ? "Atenção: pontos de melhoria identificados." : 
                             "Crítico: necessita intervenção imediata."}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-8 mb-10 border border-blue-100">
                    <h3 className="font-bold text-[#003C8B] text-lg mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Próximos Passos Recomendados
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-[#003C8B] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <p className="text-gray-700">Elimine planilhas paralelas — centralize tudo no CRM para garantir uma fonte única de verdade.</p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-[#003C8B] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <p className="text-gray-700">Estruture rituais semanais de revisão de pipeline focados em qualidade de dados.</p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="w-8 h-8 rounded-full bg-[#003C8B] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <p className="text-gray-700">Invista em treinamento contínuo para aumentar a usabilidade e reduzir o atrito do time.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://wa.me/5511977619642?text=Gostaria%20de%20falar%20sobre%20meu%20diagnóstico%20de%20CRM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-[#003C8B] text-white rounded-full font-bold text-lg hover:bg-[#022a61] transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Falar com Especialista
                    </a>
                    <button 
                      onClick={() => {
                        setStep('intro');
                        setCurrentQuestion(0);
                        setAnswers([]);
                      }}
                      className="px-8 py-4 border-2 border-gray-200 text-gray-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                    >
                      <RefreshCcw className="w-5 h-5" />
                      Refazer Diagnóstico
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
