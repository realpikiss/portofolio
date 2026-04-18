import type { ProjectContent } from "@/content/types";

const medcouncil: ProjectContent = {
  slug: "medcouncil",
  title: "MedCouncil",
  tagline: "Système multi-agents souverain d'aide au diagnostic clinique",
  color: "#00ff88",
  status: "Research @ PRIME",
  highlight: true,
  tags: ["LangGraph", "Python", "LLM", "Multi-agents"],
  cardDesc:
    "Système d'aide au diagnostic clinique basé sur des agents IA souverains. Développé au laboratoire PRIME, Université de Moncton.",
  context: "Laboratoire PRIME — Université de Moncton. Détails techniques sous accord de confidentialité.",
  sections: [
    {
      type: "overview",
      content:
        "MedCouncil est un système multi-agents d'aide au diagnostic clinique, développé au laboratoire PRIME de l'Université de Moncton. Il repose sur une architecture entièrement souveraine — aucune donnée ne transite par des APIs externes. Les détails techniques de l'implémentation sont couverts par un accord de confidentialité.",
    },
    {
      type: "results",
      title: "Contexte",
      content:
        "Ce projet s'inscrit dans les travaux de recherche du PRIME Lab sur l'application des LLMs en contexte médical. L'objectif central est de concevoir des systèmes d'IA clinique qui respectent les contraintes de souveraineté des données hospitalières.",
    },
  ],
};

export default medcouncil;
