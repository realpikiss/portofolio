import type { ProjectContent } from "@/content/types";

const medcouncil: ProjectContent = {
  slug: "medcouncil",
  title: "MedCouncil",
  tagline: "Sovereign multi-agent clinical decision support system",
  color: "#00ff88",
  status: "Research @ PRIME",
  highlight: true,
  tags: ["LangGraph", "Python", "LLM", "Multi-agent"],
  cardDesc:
    "AI-powered clinical decision support system built on a sovereign multi-agent architecture. Developed at PRIME Lab, Université de Moncton.",
  context: "PRIME Lab — Université de Moncton. Technical details under confidentiality agreement.",
  sections: [
    {
      type: "overview",
      content:
        "MedCouncil is a multi-agent clinical decision support system developed at PRIME Lab (Université de Moncton). It runs on a fully sovereign architecture — no data transits through external APIs. The technical details of the implementation are covered by a confidentiality agreement.",
    },
    {
      type: "results",
      title: "Context",
      content:
        "This project is part of PRIME Lab's research on applying LLMs in medical contexts. The core objective is to design clinical AI systems that respect hospital data sovereignty constraints.",
    },
  ],
};

export default medcouncil;
