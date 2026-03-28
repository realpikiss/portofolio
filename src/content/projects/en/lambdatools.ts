import type { ProjectContent } from "@/content/types";

const lambdatools: ProjectContent = {
  slug: "lambdatools",
  title: "lambdaTools",
  tagline: "AI agency for SMB automation",
  color: "#f59e0b",
  status: "In development",
  highlight: false,
  tags: ["LangGraph", "Python", "Agents", "SMB"],
  cardDesc:
    "Designing custom automation agents — repetitive workflows, API integrations, measurable productivity gains.",
  sections: [
    {
      type: "overview",
      content:
        "lambdaTools is an early-stage AI agency targeting SMBs that want to automate their processes without navigating AI complexity themselves. The approach: custom agents, fast to deploy, with measurable ROI.",
    },
    {
      type: "stack",
      title: "Tech Stack",
      items: ["LangGraph", "Python", "LangChain", "REST APIs", "Next.js"],
    },
  ],
};

export default lambdatools;
