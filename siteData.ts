import { 
  CapabilityItem, 
  MethodStep, 
  ArchitectureLayer, 
  BusinessCase, 
  IntelligenceArticle,
  IndustryItem 
} from '../types';

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: 'data-growth',
    number: '01',
    title: 'Commercial Data & Growth',
    headline: 'Consultoria de dados e Growth para transformar informação comercial em capacidade de decisão.',
    description: 'Estruturamos pipelines analíticos, higiene de bases e inteligência preditiva para que cada indicador de pipeline, conversão e CAC reflita a realidade da operação.',
    services: [
      'Data Strategy Comercial',
      'Revenue Intelligence',
      'Sales & Growth Analytics',
      'Modelagem de BI e Dashboards Executivos',
      'Forecasting e Modelos Preditivos',
      'Qualidade e Higienização de Dados',
      'Arquitetura de Dados Comerciais'
    ],
    deliverables: [
      'Single Source of Truth para o C-Level',
      'Relatórios de atribuição de receita multicamadas',
      'Governança de integridade de bases transacionais'
    ],
    iconName: 'Database',
    badge: 'Intelligence'
  },
  {
    id: 'crm-architecture',
    number: '02',
    title: 'CRM Architecture & Implementation',
    headline: 'Desenhamos e implementamos ambientes CRM preparados para escala e governança.',
    description: 'Projetamos fluxos comerciais complexos, automações estruturais e modelagem de entidades para garantir máxima aderência e velocidade operacional sem criar atrito técnico.',
    services: [
      'CRM Strategy & Blueprinting',
      'Arquitetura de Entidades e Objetos',
      'Implantação Enterprise e Migração de Dados',
      'Customização Avançada e Regras de Negócio',
      'Engenharia de Processos de Vendas (Inbound/Outbound/ABM)',
      'Rollout Estruturado e Programas de Adoção'
    ],
    deliverables: [
      'Ambientes modelados para ciclos de venda complexos',
      'Zero dependência de planilhas periféricas',
      'Taxonomia padronizada em toda a esteira'
    ],
    iconName: 'LayoutGrid',
    badge: 'Core Infrastructure'
  },
  {
    id: 'integration-engineering',
    number: '03',
    title: 'Integration Engineering',
    headline: 'Conectamos o ecossistema tecnológico completo da sua organização.',
    description: 'Eliminamos silos através de middlewares robustos, webhooks, filas e pipelines de sincronização bidirecional em tempo real entre o front comercial e os sistemas legados.',
    services: [
      'CRM ↔ ERP (SAP, Oracle, TOTVS, Protheus)',
      'CRM ↔ Data Warehouse & Data Lakes (BigQuery, Snowflake)',
      'CRM ↔ Business Intelligence (Power BI, Tableau, Looker)',
      'CRM ↔ Marketing Automation & Lead Gen',
      'CRM ↔ WhatsApp Corporativo & Omnichannel',
      'CRM ↔ APIs Proprietárias & Microserviços',
      'CRM ↔ Motores de Inteligência Artificial',
      'CRM ↔ CRM (M&A / Unificação de Instâncias)'
    ],
    deliverables: [
      'Tráfego de eventos e dados com tolerância a falhas',
      'Sincronização cadastral e financeira em tempo real',
      'Monitoramento de latência e logs de transação'
    ],
    iconName: 'Network',
    badge: 'Ecosystem'
  },
  {
    id: 'crm-governance',
    number: '04',
    title: 'CRM Governance',
    headline: 'Transformamos CRM em infraestrutura empresarial protegida e governada.',
    description: 'Estabelecemos matrizes de acesso, políticas de privacidade, documentação técnica de campos e gestão de mudanças para que o sistema não se degrade com o tempo.',
    services: [
      'Governança de Dados e Validações de Entrada',
      'Segurança, Permissionamento e Perfis de Acesso',
      'Documentação Técnica de Campos e Automações',
      'Compliance, LGPD e Auditoria de Alterações',
      'Gestão de Mudanças (Change Management)',
      'Gestão de Lifecycle e Arquivamento de Registros'
    ],
    deliverables: [
      'Dicionário de dados comercial auditável',
      'Matriz de permissionamento por perfil e hierarquia',
      'Políticas ativas contra criação desordenada de campos'
    ],
    iconName: 'ShieldCheck',
    badge: 'Security & Control'
  },
  {
    id: 'managed-crm',
    number: '05',
    title: 'Managed CRM & Technical Support',
    headline: 'A THS permanece ao seu lado depois do go-live garantindo sustentação crítica.',
    description: 'Operamos squads dedicados de sustentação técnica, atendimento sob SLA, resolução de incidentes e evolução contínua das plataformas que sustentam sua receita.',
    services: [
      'Suporte Técnico N2/N3 Especializado',
      'Sustentação Operacional e Monitoramento Ativo',
      'Gestão de Incidentes com SLA Contratual',
      'Evolução Contínua de Processos e Campos',
      'Administração Contínua de Instâncias',
      'Otimização de Performance e Auditorias Periódicas',
      'Especialistas e Arquitetos sob Demanda'
    ],
    deliverables: [
      'Garantia de uptime e integridade contínua',
      'Backlog contínuo de melhorias e novas automações',
      'Squad sênior sem custo de turnover interno'
    ],
    iconName: 'Cpu',
    badge: 'Sustained Scale'
  },
  {
    id: 'multiplatform-partner',
    number: '06',
    title: 'Multiplatform CRM Partner',
    headline: 'One partner. Multiple CRM ecosystems. A arquitetura vem antes da ferramenta.',
    description: 'Atuamos de forma independente e agnóstica para desenhar a solução ideal para a sua maturidade e orçamento, dominando os principais ecossistemas globais.',
    services: [
      'Salesforce (Sales Cloud, Service Cloud, Financial Services)',
      'HubSpot (Sales, Marketing, Operations & Service Hubs)',
      'Microsoft Dynamics 365',
      'Pipedrive Enterprise',
      'Ploomes CRM',
      'Plataformas Proprietárias e Verticais'
    ],
    deliverables: [
      'Diagnóstico de fit tecnológico sem viés de fabricante',
      'Especialistas certificados em cada tecnologia',
      'Capacidade de transição ou coexistência multiplataforma'
    ],
    iconName: 'Boxes',
    badge: 'Independence'
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: '01',
    name: 'Diagnose',
    title: 'Diagnosticar',
    description: 'Imersão técnica para entender modelo de negócio, fluxos de receita, topologia de sistemas, qualidade de dados e gargalos operacionais.',
    activities: [
      'Mapeamento da esteira comercial ponta a ponta',
      'Auditoria de qualidade e duplicação da base atual',
      'Levantamento de integrações, ERPs e sombras operacionais'
    ],
    outputs: ['Relatório de Diagnóstico de Maturidade', 'Matriz de Gaps Estruturais'],
    icon: 'Search'
  },
  {
    number: '02',
    name: 'Architect',
    title: 'Projetar',
    description: 'Desenho da arquitetura-alvo, modelagem de dados, matriz de permissionamento, diagramação de integrações e blueprint de governança.',
    activities: [
      'Modelagem do schema de entidades e campos chave',
      'Especificação de fluxos de integração e middlewares',
      'Definição dos padrões de governança e SLAs'
    ],
    outputs: ['Blueprint de Arquitetura Comercial', 'Documentação Funcional & Técnica'],
    icon: 'PenTool'
  },
  {
    number: '03',
    name: 'Implement',
    title: 'Implantar',
    description: 'Construção, configuração técnica dos ambientes, pipelines de automação, migração assistida de dados e homologação rigorosa.',
    activities: [
      'Setup dos pipelines, campos e regras de validação',
      'Configuração de automações e triggers de processo',
      'Limpeza, de-duplicação e migração segura de dados'
    ],
    outputs: ['Ambiente Configurado e Homologado', 'Scripts de Migração Validados'],
    icon: 'Server'
  },
  {
    number: '04',
    name: 'Integrate',
    title: 'Integrar',
    description: 'Conexão bidirecional entre CRM, ERP, Data Warehouse, BI, WhatsApp corporativo, Marketing e ferramentas de backoffice.',
    activities: [
      'Desenvolvimento de conectores e webhooks resilientes',
      'Sincronização de pedidos, notas, clientes e propostas',
      'Setup de monitoramento de payload e erros de sync'
    ],
    outputs: ['Pipeline de Integrações Operacional', 'Painel de Logs e Monitoramento'],
    icon: 'Network'
  },
  {
    number: '05',
    name: 'Govern',
    title: 'Governar',
    description: 'Implementação de regras de compliance, dicionário de dados, hierarquias de acesso e rituais de controle de qualidade contínua.',
    activities: [
      'Aplicação de travas e regras de preenchimento obrigatório',
      'Auditoria de segurança e matriz de perfis de usuário',
      'Treinamento imersivo e enablement por personas'
    ],
    outputs: ['Guia de Governança e Dicionário de Dados', 'Certificação de Adoção'],
    icon: 'ShieldCheck'
  },
  {
    number: '06',
    name: 'Operate',
    title: 'Operar',
    description: 'Sustentação proativa da operação, suporte especializado aos usuários, administração contínua e garantia de estabilidade sob SLA.',
    activities: [
      'Monitoramento diário de filas e pipelines',
      'Atendimento a chamados técnicos de melhoria e ajustes',
      'Acompanhamento de indicadores de adoção da equipe'
    ],
    outputs: ['Relatórios Periódicos de Sustentação', 'SLA de Atendimento Garantido'],
    icon: 'Settings'
  },
  {
    number: '07',
    name: 'Evolve',
    title: 'Evoluir',
    description: 'Otimização contínua da arquitetura, experimentação de novos canais, adoção de IA preditiva e expansão para novas áreas de negócio.',
    activities: [
      'Revisões trimestrais de arquitetura e capacidade',
      'Implementação de agentes de IA para enriquecimento',
      'Escalonamento para novas unidades de negócio'
    ],
    outputs: ['Roadmap Contínuo de Inovação', 'Modelos Preditivos de Receita'],
    icon: 'LineChart'
  }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: 'data',
    title: 'DATA',
    subtitle: 'Fundação e Higiene Analítica',
    description: 'A camada estrutural onde os registros de clientes, histórico de transações e eventos de comportamento são unificados sem duplicações.',
    components: ['Single Customer View', 'Data Cleansing', 'Dicionário de Dados', 'Auditoria de Registros'],
    businessImpact: 'Eliminação de bases frias, dados fantasmas e duplicidades cadastrais.',
    color: '#003C8B'
  },
  {
    id: 'processos',
    title: 'PROCESSOS',
    subtitle: 'Engenharia de Rituais e Playbooks',
    description: 'Mapeamento explícito das etapas de qualificação, passagem de bastão entre Marketing, Vendas, CS e Financeiro com critérios objetivos de saída.',
    components: ['SLA de Passagem de Bastão', 'Stage Gate Criteria', 'Playbooks de Conversão', 'Regras de Distribuição'],
    businessImpact: 'Previsibilidade de ciclo de vendas e clareza de responsabilidade operacional.',
    color: '#0284C7'
  },
  {
    id: 'crm',
    title: 'CRM',
    subtitle: 'Motor de Execução Comercial',
    description: 'A plataforma central configurada como fonte única da verdade para negociações, pipeline, contatos e contratos em andamento.',
    components: ['Modelagem de Objetos', 'Visualização de Pipeline', 'Visão 360° do Cliente', 'Registro de Atividades'],
    businessImpact: 'Visibilidade em tempo real de cada oportunidade sem reuniões de alinhamento manuais.',
    color: '#2563EB'
  },
  {
    id: 'integracoes',
    title: 'INTEGRAÇÕES',
    subtitle: 'Conexão Bidirecional de Sistemas',
    description: 'Middlewares e webhooks que orquestram a troca de dados entre o CRM e ERPs legados, faturamento, BI e canais de contato.',
    components: ['ERP Sync (SAP/Oracle/TOTVS)', 'Billing & Faturamento', 'WhatsApp API', 'Webhooks & APIs'],
    businessImpact: 'Zero retrabalho de digitação e faturamento automático a partir do fechamento no CRM.',
    color: '#4F46E5'
  },
  {
    id: 'automacao',
    title: 'AUTOMAÇÃO',
    subtitle: 'Gatilhos Estruturais e Eficiência',
    description: 'Regras sistêmicas que executam tarefas repetitivas, disparam notificações críticas e garantem cadências de comunicação sem esforço manual.',
    components: ['Roteamento Automático de Leads', 'Gatilhos de Reengajamento', 'Alertas de SLA Estourado', 'Geração de Contratos'],
    businessImpact: 'Aumento imediato de produtividade do time comercial e resposta em minutos a novos leads.',
    color: '#7C3AED'
  },
  {
    id: 'governanca',
    title: 'GOVERNANÇA',
    subtitle: 'Segurança, Permissões e Integridade',
    description: 'Trava técnica para garantir que apenas dados válidos entrem no sistema, com restrição de visibilidade por hierarquia e conformidade com a LGPD.',
    components: ['Matriz de Perfis e Permissões', 'Campos Obrigatórios Condicionais', 'Trilhas de Auditoria', 'Gestão de Mudanças'],
    businessImpact: 'Proteção contra degradação do sistema e blindagem de dados estratégicos da empresa.',
    color: '#059669'
  },
  {
    id: 'people',
    title: 'PEOPLE',
    subtitle: 'Enablement e Adoção Real',
    description: 'Capacitação contínua de executivos, gerentes e operadores para transformar a tecnologia em rotina natural e produtiva.',
    components: ['Treinamentos por Perfil', 'Manuais Operacionais', 'Rituais de Gestão no CRM', 'Monitoramento de Adoção'],
    businessImpact: 'Eliminação da resistência ao CRM e adesão consistente do time de ponta.',
    color: '#D97706'
  },
  {
    id: 'growth',
    title: 'GROWTH',
    subtitle: 'Inteligência e Otimização Contínua',
    description: 'Análise aprofundada de gargalos de conversão, expansão de contas (upsell/cross-sell) e testes constantes na esteira de receita.',
    components: ['Cohort Analysis', 'Detecção de Churn Precoce', 'Análise de Win/Loss', 'Expansão de LTV'],
    businessImpact: 'Decisões de investimento comercial baseadas em dados concretos de conversão.',
    color: '#DC2626'
  },
  {
    id: 'revenue',
    title: 'REVENUE',
    subtitle: 'Geração e Previsibilidade Financeira',
    description: 'O resultado final de uma arquitetura sincronizada: receita previsível, margem saudável e escala sem inflar custos fixos.',
    components: ['Forecasting de Alta Precisão', 'Redução do Ciclo Médio', 'Controle Rigoroso de CAC', 'Sustentabilidade Financeira'],
    businessImpact: 'Crescimento com governança, previsibilidade para o C-Level e valorização do negócio.',
    color: '#003C8B'
  }
];

export const BUSINESS_CASES: BusinessCase[] = [
  {
    id: 'logistica-industria',
    clientSector: 'Logística & Cadeia de Suprimentos',
    clientType: 'Empresa Enterprise Nacional',
    headline: 'Unificação da esteira de vendas B2B e integração em tempo real com ERP legado.',
    context: 'A organização operava com mais de 80 executivos de contas utilizando planilhas paralelas e sistemas descentralizados por filial. As cotações demoravam até 48 horas para serem validadas e os pedidos eram digitados manualmente no ERP, gerando erros operacionais frequentes e ausência total de forecast consolidado.',
    architecture: 'Desenho de um ecossistema centralizado em Salesforce conectado via barramento de integração com o ERP SAP e Data Lake corporativo. Modelagem de objetos customizados para cotação logística automatizada e matriz de alçadas de desconto integrada.',
    execution: [
      'Estruturação de pipeline de vendas unificado para todas as filiais do país',
      'Conector bidirecional tolerante a falhas entre CRM e SAP para sincronização de clientes e pedidos',
      'Validação automática de margem e regras de crédito antes do envio da proposta',
      'Treinamento e rollout por fases cobrindo 100% da equipe de vendas e pricing'
    ],
    results: [
      'Eliminação completa de digitação duplicada entre comercial e faturamento',
      'Previsibilidade de pipeline em tempo real para a diretoria executiva',
      'Redução drástica no tempo de resposta e emissão de cotações para clientes corporativos',
      'Adoção consistente do CRM como fonte única da verdade para comissionamento e metas'
    ],
    stack: ['Salesforce Sales Cloud', 'SAP ERP', 'Azure Integration Services', 'Power BI']
  },
  {
    id: 'servicos-financeiros',
    clientSector: 'Serviços Financeiros & Crédito B2B',
    clientType: 'Instituição Financeira em Expansão',
    headline: 'Arquitetura comercial para originação de crédito com esteira de aprovação automatizada.',
    context: 'Processo de originação comercial fragmentado entre múltiplos canais (e-mail, WhatsApp, formulários). Leads qualificados demoravam dias para serem distribuídos aos analistas e não havia controle de histórico unificado de relacionamento por grupo econômico.',
    architecture: 'Arquitetura baseada em HubSpot Enterprise integrada à plataforma interna de análise de risco e bureau de crédito via APIs seguras, com orquestração de governança e trilha de auditoria completa.',
    execution: [
      'Modelagem da estrutura de contas pai/filhas para espelhar grupos econômicos complexos',
      'Automação de enriquecimento cadastral imediato no momento da entrada do lead',
      'Roteamento inteligente de oportunidades baseado em porte, região e especialidade',
      'Governança rigorosa de dados de contato e permissões de acesso com log de auditoria'
    ],
    results: [
      'Tempo de primeiro contato reduzido de dias para minutos com distribuição automática',
      'Visão consolidada de risco e limite de crédito por grupo empresarial no CRM',
      'Eliminação de perda de oportunidades em caixas de entrada individuais',
      'Governança de dados em total conformidade com normas regulatórias e LGPD'
    ],
    stack: ['HubSpot Enterprise', 'APIs Proprietárias', 'PostgreSQL', 'Metabase']
  },
  {
    id: 'software-tech',
    clientSector: 'Tecnologia & Software Corporativo',
    clientType: 'Scale-up B2B de Grande Porte',
    headline: 'Alinhamento estrutural de RevOps: unificação de Marketing, Vendas e Customer Success.',
    context: 'Empresa com crescimento acelerado porém com três silos tecnológicos isolados: Marketing em uma ferramenta, Vendas em um CRM básico e Customer Success em planilhas. A renovação de contratos dependia da memória dos gerentes e o cálculo de expansão de receita (upsell) era inexistente.',
    architecture: 'Arquitetura integrada de Revenue Operations cobrindo toda a jornada do cliente (Aquisição → Onboarding → Retenção → Expansão), com integração ao gateway de pagamento e produto.',
    execution: [
      'Reestruturação completa da esteira de vendas e pipeline de renovação automática',
      'Integração dos dados de uso de produto e faturamento diretamente no perfil do cliente',
      'Alertas automatizados de risco de cancelamento e gatilhos para abordagem de upsell',
      'Criação de dashboards executivos de Cohort, Net Revenue Retention (NRR) e CAC Payback'
    ],
    results: [
      'Visibilidade completa do ciclo de vida do cliente desde o primeiro lead até a renovação',
      'Aumento da previsibilidade de renovação com alertas proativos 90 dias antes do vencimento',
      'Sincronização automática de dados de faturamento sem necessidade de conciliação manual',
      'Tomada de decisão da diretoria baseada em métricas financeiras integradas e confiáveis'
    ],
    stack: ['HubSpot Enterprise', 'Stripe Billing', 'Segment', 'Tableau']
  }
];

export const GOVERNANCE_PILLARS = [
  {
    title: 'Architecture & Scalability',
    subtitle: 'Estrutura técnica para crescer sem quebrar',
    desc: 'Planejamento de entidades, relacionamentos e limitações de banco para que o sistema suporte o dobro de usuários sem degradação.',
    icon: 'Boxes'
  },
  {
    title: 'Data Quality & Cleanliness',
    subtitle: 'Integridade dos dados em tempo real',
    desc: 'Regras ativas contra e-mails inválidos, duplicidades de CNPJ/CPF, campos nulos críticos e normalização cadastral contínua.',
    icon: 'Sparkles'
  },
  {
    title: 'Security & Permissions',
    subtitle: 'Proteção de ativos comerciais estratégicos',
    desc: 'Matriz granular de perfis de acesso, restrição de exportação de listas, controle de visualização por território e autenticação segura.',
    icon: 'Lock'
  },
  {
    title: 'Process Standardization',
    subtitle: 'Regras de negócio claras no sistema',
    desc: 'Travas automáticas de avanço de etapa, critérios obrigatórios de saída e padronização dos motivos de ganho e perda.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Technical Documentation',
    subtitle: 'Fim da dependência de memória individual',
    desc: 'Mapeamento completo de campos customizados, fórmulas, webhooks, regras de automação e integrações em dicionário vivo.',
    icon: 'FileText'
  },
  {
    title: 'Continuous Monitoring',
    subtitle: 'Detecção precoce de falhas e gargalos',
    desc: 'Auditorias periódicas de uso, relatórios de adoção da equipe e monitoramento proativo de filas de integração e erros de sync.',
    icon: 'Activity'
  }
];

export const INTELLIGENCE_ARTICLES: IntelligenceArticle[] = [
  {
    id: 'divida-tecnica-comercial',
    category: 'Commercial Architecture',
    title: 'Dívida Tecnológica Comercial: o custo invisível de crescer sem arquitetura',
    summary: 'Como customizações desordenadas, falta de governança e integrações frágeis desaceleram a capacidade de geração de receita em empresas de médio e grande porte.',
    readTime: '6 min de leitura',
    publishedDate: 'Junho 2026',
    keyTakeaways: [
      'A dívida técnica comercial se manifesta em lentidão no fechamento e dados não confiáveis',
      'Criar campos sem governança transforma o CRM em um formulário burocrático e sem uso',
      'A arquitetura deve preceder qualquer contratação ou customização de software'
    ],
    content: [
      'Quando uma empresa inicia seu processo de expansão, a urgência por resultados frequentemente atropela o planejamento estrutural. Vendedores demandam novos campos, gerentes criam regras pontuais e o time de marketing contrata ferramentas periféricas sem conexão com a base central.',
      'O resultado desse processo desordenado é a acumulação silenciosa de dívida técnica comercial: bases corrompidas por dados duplicados, integrações que quebram sem aviso e um CRM que passa a ser visto como um obstáculo burocrático em vez de um motor de aceleração de receita.',
      'Empresas líderes tratam sua esteira comercial com o mesmo rigor de engenharia dedicado aos seus produtos principais. Uma arquitetura comercial bem desenhada estabelece contratos de dados claros, automações testadas e governança contínua, permitindo que a operação cresça em escala mantendo governança e previsibilidade.'
    ]
  },
  {
    id: 'single-source-of-truth',
    category: 'Data',
    title: 'Por que o C-Level ainda recebe números conflitantes de Vendas e Financeiro?',
    summary: 'A anatomia dos silos entre CRM e ERP e como arquitetar pipelines de dados que unificam o forecast comercial ao faturamento real.',
    readTime: '8 min de leitura',
    publishedDate: 'Maio 2026',
    keyTakeaways: [
      'A discrepância entre vendas e faturamento nasce de regras de transição mal definidas',
      'Integrações ponto-a-ponto sem middleware criam pontos cegos operacionais',
      'A sincronização de status de pagamento deve retroalimentar a gestão de contas no CRM'
    ],
    content: [
      'Em muitas reuniões executivas, os primeiros 30 minutos são desperdiçados debatendo qual planilha contém os números corretos. Vendas reporta um volume de oportunidades ganhas, enquanto o Financeiro reporta um faturamento divergente.',
      'Essa inconsistência decorre da falta de uma arquitetura de integração robusta. Sem regras automáticas de validação e conciliação em tempo real entre o CRM e o ERP, o negócio passa a operar no escuro durante os períodos críticos de fechamento.',
      'Ao projetar um pipeline de integração com barramento estruturado e regras de auditoria bidirecionais, garantimos que o ciclo de vida do pedido seja unificado, fornecendo ao C-Level uma fonte única e inquestionável de verdade.'
    ]
  },
  {
    id: 'revops-vs-crm',
    category: 'RevOps',
    title: 'Revenue Operations além do buzzword: estruturando pessoas, processos e sistemas',
    summary: 'Como transformar a gestão de receita em uma disciplina de engenharia contínua conectando Marketing, Vendas e Customer Success.',
    readTime: '7 min de leitura',
    publishedDate: 'Abril 2026',
    keyTakeaways: [
      'RevOps não é um novo nome para vendas; é a integração holística de toda a esteira de receita',
      'O foco deve estar na eliminação de atrito nas passagens de bastão entre áreas',
      'A tecnologia deve viabilizar processos padronizados, nunca o inverso'
    ],
    content: [
      'O conceito de Revenue Operations ganhou enorme destaque no mercado, mas muitas organizações ainda o tratam apenas como um título moderno para analistas de CRM. O verdadeiro valor de RevOps está na engenharia da receita: alinhar metas, dados e sistemas de todas as áreas geradoras de valor.',
      'Quando Marketing gera leads que Vendas não aproveita, ou quando Vendas fecha contratos que Customer Success não consegue reter, o problema não está no talento das pessoas, mas sim na arquitetura dos processos.',
      'Uma operação madura conecta as três pontas em uma única infraestrutura tecnológica governada, com métricas compartilhadas e fluxos automatizados que garantem que nenhum cliente em potencial se perca pelo caminho.'
    ]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'financial',
    name: 'Serviços Financeiros & FinTech',
    headline: 'Conformidade regulatória, esteiras ágeis de crédito e visão integrada de carteira de clientes.',
    challenges: ['Silos entre análise de risco e prospecção', 'Requisitos rigorosos de auditoria e LGPD', 'Múltiplos produtos por cliente sem visão consolidada'],
    architectureFocus: ['Modelagem de contas e grupos econômicos', 'Integração segura com bureaus e backoffice', 'Trilhas de auditoria para compliance']
  },
  {
    id: 'tech',
    name: 'Tecnologia & SaaS Enterprise',
    headline: 'Escalabilidade de receita recorrente, alinhamento de RevOps e previsibilidade de expansão (NRR).',
    challenges: ['Desconexão entre produto, faturamento e CRM', 'Falta de automação em renovações contratuais', 'Gargalos no handoff de Vendas para Onboarding'],
    architectureFocus: ['Integração com gateways e telemetria de uso', 'Automação de fluxos de renovação e upsell', 'Relatórios unificados de CAC e LTV']
  },
  {
    id: 'industry',
    name: 'Indústria & Manufatura',
    headline: 'Ciclos de venda consultivos complexos, cotações multifatoriais e sincronização com ERP de chão de fábrica.',
    challenges: ['Representantes e canais externos sem padrão', 'Propostas manuais com margens incorretas', 'Pedidos represados fora do ERP principal'],
    architectureFocus: ['Matriz de aprovação de alçadas de desconto', 'Integração bidirecional com SAP/TOTVS/Oracle', 'Portal de parceiros e distribuidores']
  },
  {
    id: 'services',
    name: 'Serviços Corporativos & B2B',
    headline: 'Gestão de pipeline de alto ticket, alocação de equipe técnica e acompanhamento de contratos corporativos.',
    challenges: ['Ciclos longos de negociação sem histórico', 'Dependência de contatos pessoais de executivos', 'Dificuldade de mensurar rentabilidade por projeto'],
    architectureFocus: ['Gestão de contas estratégicas (ABM)', 'Automação de minutas e propostas contratuais', 'Dashboards de pipeline e forecast ponderado']
  }
];
