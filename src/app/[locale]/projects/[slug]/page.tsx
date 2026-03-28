import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProject, getAllProjects } from "@/content/projects";
import type { MetricItem, ArchitectureAgent } from "@/content/types";

export async function generateStaticParams() {
  const locales = ["fr", "en"];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const projects = await getAllProjects(locale);
    for (const p of projects) {
      params.push({ locale, slug: p.slug });
    }
  }
  return params;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = await getProject(locale, slug);
  if (!project) notFound();

  const backLabel = locale === "fr" ? "← Retour aux projets" : "← Back to projects";
  const color = project.color;
  const dimBg = `${color}10`;
  const dimBorder = `${color}30`;

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 860, margin: "0 auto", padding: "100px 24px 80px" }}>
        {/* Back */}
        <Link href={`/${locale}#projects`} className="mono link-dim" style={{ fontSize: "0.75rem", display: "inline-block", marginBottom: 48 }}>
          {backLabel}
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 48, borderLeft: `3px solid ${color}`, paddingLeft: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span className="mono" style={{ fontSize: "0.6rem", background: dimBg, color, border: `1px solid ${dimBorder}`, padding: "3px 10px", borderRadius: 3, letterSpacing: "0.1em" }}>
              {project.status}
            </span>
            {project.highlight && (
              <span className="mono" style={{ fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "0.08em" }}>FLAGSHIP</span>
            )}
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 10, lineHeight: 1.1 }}>
            {project.title}
          </h1>
          <p className="mono" style={{ fontSize: "0.85rem", color, marginBottom: 16, fontWeight: 500 }}>
            {project.tagline}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="mono" style={{ fontSize: "0.65rem", background: dimBg, color, border: `1px solid ${dimBorder}`, padding: "2px 8px", borderRadius: 3 }}>
                {tag}
              </span>
            ))}
          </div>
          {project.context && (
            <p className="mono" style={{ fontSize: "0.72rem", color: "var(--text-dim)", marginTop: 14, letterSpacing: "0.02em" }}>
              {project.context}
            </p>
          )}
        </div>

        <div style={{ height: 1, background: "var(--border)", marginBottom: 48 }} />

        {/* Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          {project.sections.map((section, i) => {
            if (section.type === "overview") {
              return (
                <div key={i} style={{ background: "var(--bg-card)", border: `1px solid ${dimBorder}`, borderRadius: 8, padding: 32, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: color }} />
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                    {section.content}
                  </p>
                </div>
              );
            }

            if (section.type === "metrics" && section.items) {
              return (
                <div key={i}>
                  {section.title && <SectionLabel title={section.title} color={color} />}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                    {(section.items as MetricItem[]).map((m) => (
                      <div key={m.value} style={{ background: "var(--bg-card)", border: `1px solid ${dimBorder}`, borderRadius: 8, padding: "24px 20px", textAlign: "center" }}>
                        <div style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 800, color, letterSpacing: "-0.03em", fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                          {m.label}
                        </div>
                        {m.context && (
                          <div style={{ fontSize: "0.65rem", color: "var(--text-dim)", marginTop: 4 }}>
                            {m.context}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (section.type === "architecture") {
              return (
                <div key={i}>
                  {section.title && <SectionLabel title={section.title} color={color} />}
                  {section.content && (
                    <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 20 }}>
                      {section.content}
                    </p>
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {(section.items as ArchitectureAgent[]).map((agent) => (
                      <div key={agent.name} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 16, alignItems: "center", background: "var(--bg-card)", border: `1px solid var(--border)`, borderRadius: 6, padding: "14px 20px" }}>
                        <span className="mono" style={{ fontSize: "0.72rem", color, fontWeight: 700, minWidth: 120 }}>
                          {agent.name}
                        </span>
                        <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                          {agent.role}
                        </span>
                        {agent.model && (
                          <span className="mono" style={{ fontSize: "0.62rem", color: "var(--text-dim)", background: "#111", border: "1px solid var(--border)", padding: "2px 8px", borderRadius: 3, whiteSpace: "nowrap" }}>
                            {agent.model}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            if (section.type === "stack" && section.items) {
              return (
                <div key={i}>
                  {section.title && <SectionLabel title={section.title} color={color} />}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {(section.items as string[]).map((item) => (
                      <span key={item} className="mono" style={{ fontSize: "0.72rem", background: dimBg, color, border: `1px solid ${dimBorder}`, padding: "5px 12px", borderRadius: 4 }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            if (section.type === "results") {
              return (
                <div key={i} style={{ background: dimBg, border: `1px solid ${dimBorder}`, borderRadius: 8, padding: 32 }}>
                  {section.title && (
                    <div className="mono" style={{ fontSize: "0.65rem", color, letterSpacing: "0.1em", marginBottom: 14, textTransform: "uppercase" }}>
                      {section.title}
                    </div>
                  )}
                  <p style={{ color: "var(--text)", fontSize: "0.92rem", lineHeight: 1.8 }}>
                    {section.content}
                  </p>
                </div>
              );
            }

            if (section.type === "text") {
              return (
                <div key={i}>
                  {section.title && <SectionLabel title={section.title} color={color} />}
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                    {section.content}
                  </p>
                </div>
              );
            }

            return null;
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

function SectionLabel({ title, color }: { title: string; color: string }) {
  return (
    <div className="mono" style={{ fontSize: "0.65rem", color, letterSpacing: "0.1em", marginBottom: 16, textTransform: "uppercase" }}>
      // {title}
    </div>
  );
}
