import { getTranslations } from "next-intl/server";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getAllProjects } from "@/content/projects";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  const projects = await getAllProjects(locale);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects
          projects={projects}
          title={t("title")}
          command={t("command")}
          viewProject={t("viewProject")}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
