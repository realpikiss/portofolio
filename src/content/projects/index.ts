import type { ProjectContent } from "@/content/types";

const projectRegistry: Record<string, Record<string, () => Promise<{ default: ProjectContent }>>> = {
  fr: {
    medcouncil: () => import("./fr/medcouncil"),
    lambdatools: () => import("./fr/lambdatools"),
  },
  en: {
    medcouncil: () => import("./en/medcouncil"),
    lambdatools: () => import("./en/lambdatools"),
  },
};

export async function getProject(locale: string, slug: string): Promise<ProjectContent | null> {
  const localeMap = projectRegistry[locale] ?? projectRegistry["en"];
  const loader = localeMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export async function getAllProjects(locale: string): Promise<ProjectContent[]> {
  const localeMap = projectRegistry[locale] ?? projectRegistry["en"];
  const projects = await Promise.all(
    Object.values(localeMap).map((loader) => loader().then((m) => m.default))
  );
  return projects;
}
