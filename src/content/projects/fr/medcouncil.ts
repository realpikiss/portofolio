import type { ProjectContent } from "@/content/types";

const medcouncil: ProjectContent = {
  slug: "medcouncil",
  title: "MedCouncil",
  tagline: "Système multi-agents souverain d'aide au diagnostic clinique",
  color: "#00ff88",
  status: "Research @ PRIME",
  highlight: true,
  tags: ["LangGraph", "MedGemma 4B", "DeepSeek-R1", "H100", "SLURM", "Python"],
  cardDesc:
    "3 agents spécialistes + 1 orchestrateur raisonneur. +26.7% top-3 en urgences. 100% local, zéro API commerciale.",
  context: "Développé au laboratoire PRIME (Université de Moncton), évalué sur le cluster H100 d'Alliance Canada.",
  sections: [
    {
      type: "overview",
      content:
        "MedCouncil est un système multi-agents entièrement souverain pour l'aide au diagnostic clinique. Il ne dépend d'aucune API externe — tout le raisonnement s'effectue localement. L'objectif : combler les lacunes identifiées dans MDAgents (NeurIPS 2024) et les frameworks existants verrouillés aux APIs propriétaires.",
    },
    {
      type: "metrics",
      title: "Résultats",
      items: [
        { value: "+26.7%", label: "précision top-3", context: "médecine d'urgence vs baseline mono-modèle" },
        { value: "1 500", label: "cas cliniques", context: "dataset DDXPlus — validation statistique Wilcoxon" },
        { value: "100%", label: "souveraineté", context: "zéro API commerciale, zéro donnée externe" },
        { value: "H100", label: "cluster HPC", context: "Alliance Canada — calcul haute performance" },
      ],
    },
    {
      type: "architecture",
      title: "Architecture",
      content:
        "3 agents spécialistes d'urgence aux profils cognitifs différenciés (MedGemma 4B, Google), supervisés par un orchestrateur raisonneur avec traçabilité chain-of-thought (DeepSeek-R1). Le routage conditionnel dirige chaque cas vers la spécialité médicale appropriée.",
      items: [
        { name: "Agent Urgences A", model: "MedGemma 4B", role: "Profil cognitif conservateur" },
        { name: "Agent Urgences B", model: "MedGemma 4B", role: "Profil cognitif différentiel" },
        { name: "Agent Urgences C", model: "MedGemma 4B", role: "Profil cognitif probabiliste" },
        { name: "Orchestrateur", model: "DeepSeek-R1", role: "Raisonnement chain-of-thought + routage conditionnel" },
      ],
    },
    {
      type: "stack",
      title: "Stack technique",
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
        "Claude (dev assisté)",
      ],
    },
    {
      type: "results",
      title: "Pourquoi c'est important",
      content:
        "Première implémentation publiable d'un système multi-agents clinique open-source entièrement souverain — répondant directement aux lacunes identifiées dans MDAgents (NeurIPS 2024) et les frameworks existants verrouillés aux APIs propriétaires. Aucune donnée patient ne quitte l'infrastructure hospitalière.",
    },
  ],
};

export default medcouncil;
