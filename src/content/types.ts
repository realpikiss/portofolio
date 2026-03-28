export type SectionType =
  | "overview"
  | "metrics"
  | "architecture"
  | "stack"
  | "results"
  | "text";

export interface MetricItem {
  value: string;
  label: string;
  context?: string;
}

export interface ArchitectureAgent {
  name: string;
  model?: string;
  role: string;
}

export interface Section {
  type: SectionType;
  title?: string;
  content?: string;
  items?: MetricItem[] | string[] | ArchitectureAgent[];
}

export interface ProjectContent {
  slug: string;
  title: string;
  tagline: string;
  color: string;
  status: string;
  tags: string[];
  highlight: boolean;
  cardDesc: string;
  context?: string;
  sections: Section[];
}
