import type { ProjectContent } from "@/content/types";

const lambdatools: ProjectContent = {
  slug: "lambdatools",
  title: "lambdaTools",
  tagline: "Agence IA pour l'automatisation des PMEs",
  color: "#f59e0b",
  status: "En structuration",
  highlight: false,
  tags: ["LangGraph", "Python", "Agents", "PME"],
  cardDesc:
    "Conception d'agents d'automatisation sur mesure — workflows répétitifs, intégrations API, gains de productivité concrets.",
  sections: [
    {
      type: "overview",
      content:
        "lambdaTools est une agence IA en phase de structuration, ciblant les PMEs qui veulent automatiser leurs processus sans naviguer eux-mêmes la complexité de l'IA. L'approche : agents sur mesure, déployables rapidement, avec ROI mesurable.",
    },
    {
      type: "stack",
      title: "Stack technique",
      items: ["LangGraph", "Python", "LangChain", "REST APIs", "Next.js"],
    },
  ],
};

export default lambdatools;
