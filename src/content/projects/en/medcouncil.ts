import type { ProjectContent } from "@/content/types";

const medcouncil: ProjectContent = {
  slug: "medcouncil",
  title: "MedCouncil",
  tagline: "Sovereign multi-agent clinical decision support system",
  color: "#00ff88",
  status: "Research @ PRIME",
  highlight: true,
  tags: ["LangGraph", "MedGemma 4B", "DeepSeek-R1", "H100", "SLURM", "Python"],
  cardDesc:
    "3 specialist agents + 1 reasoning orchestrator. +26.7% top-3 in emergency medicine. 100% local, zero commercial APIs.",
  context: "Built at PRIME lab (Université de Moncton), evaluated on Alliance Canada's H100 cluster.",
  sections: [
    {
      type: "overview",
      content:
        "MedCouncil is a fully sovereign multi-agent system for clinical diagnosis support. No external APIs — all reasoning runs locally. The goal: address gaps identified in MDAgents (NeurIPS 2024) and existing frameworks locked into proprietary APIs.",
    },
    {
      type: "metrics",
      title: "Results",
      items: [
        { value: "+26.7%", label: "top-3 accuracy", context: "emergency medicine vs. single-model baseline" },
        { value: "1,500", label: "clinical cases", context: "DDXPlus dataset — Wilcoxon statistical testing" },
        { value: "100%", label: "sovereignty", context: "zero commercial APIs, zero external data" },
        { value: "H100", label: "HPC cluster", context: "Alliance Canada — high-performance compute" },
      ],
    },
    {
      type: "architecture",
      title: "Architecture",
      content:
        "3 specialist urgency agents with differentiated cognitive profiles (MedGemma 4B, Google), supervised by a reasoning orchestrator with chain-of-thought traceability (DeepSeek-R1). Conditional routing directs each case to the appropriate medical specialty.",
      items: [
        { name: "Urgency Agent A", model: "MedGemma 4B", role: "Conservative cognitive profile" },
        { name: "Urgency Agent B", model: "MedGemma 4B", role: "Differential cognitive profile" },
        { name: "Urgency Agent C", model: "MedGemma 4B", role: "Probabilistic cognitive profile" },
        { name: "Orchestrator", model: "DeepSeek-R1", role: "Chain-of-thought reasoning + conditional routing" },
      ],
    },
    {
      type: "stack",
      title: "Tech Stack",
      items: [
        "Python",
        "LangGraph",
        "HuggingFace Transformers",
        "MedGemma 4B (Google)",
        "DeepSeek-R1",
        "SLURM",
        "H100 (Alliance Canada)",
        "DDXPlus",
        "SciPy / Wilcoxon",
        "Claude (AI-assisted dev)",
      ],
    },
    {
      type: "results",
      title: "Why it matters",
      content:
        "First publishable implementation of a fully open-source sovereign multi-agent clinical system — directly addressing gaps identified in MDAgents (NeurIPS 2024) and existing frameworks locked into proprietary APIs. No patient data leaves the hospital infrastructure.",
    },
  ],
};

export default medcouncil;
