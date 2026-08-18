export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  services: string[];
  deliverables: string[];
  iconName: string;
  badge: string;
}

export interface MethodStep {
  number: string;
  name: string;
  title: string;
  description: string;
  activities: string[];
  outputs: string[];
  icon: string;
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  components: string[];
  businessImpact: string;
  color: string;
}

export interface BusinessCase {
  id: string;
  clientSector: string;
  clientType: string;
  headline: string;
  context: string;
  architecture: string;
  execution: string[];
  results: string[];
  stack: string[];
}

export interface IntelligenceArticle {
  id: string;
  category: 'Commercial Architecture' | 'CRM' | 'Data' | 'Integration' | 'Governance' | 'RevOps' | 'AI' | 'Growth';
  title: string;
  summary: string;
  readTime: string;
  publishedDate: string;
  content: string[];
  keyTakeaways: string[];
}

export interface IndustryItem {
  id: string;
  name: string;
  headline: string;
  challenges: string[];
  architectureFocus: string[];
}
