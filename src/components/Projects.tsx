"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import type { ProjectContent } from "@/content/types";

interface Props {
  projects: ProjectContent[];
  title: string;
  command: string;
  viewProject: string;
}

export default function Projects({ projects, title, command, viewProject }: Props) {
  const locale = useLocale();
  const [featured, ...rest] = projects;

  return (
    <section
      id="projects"
      style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ marginBottom: 48 }}>
        <span className="cmd-label">{command}</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: 12, color: "var(--text)" }}>
          {title}
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Featured project */}
        {featured && (
          <FeaturedCard project={featured} locale={locale} viewProject={viewProject} />
        )}

        {/* Secondary projects */}
        {rest.length > 0 && (
          <div className="secondary-grid" style={{ display: "grid", gridTemplateColumns: `repeat(${rest.length}, 1fr)`, gap: 20 }}>
            {rest.map((p) => (
              <SmallCard key={p.slug} project={p} locale={locale} viewProject={viewProject} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ project, locale, viewProject }: { project: ProjectContent; locale: string; viewProject: string }) {
  const color = project.color;
  const dimBg = `${color}10`;
  const dimBorder = `${color}30`;

  return (
    <Link href={`/${locale}/projects/${project.slug}`} style={{ textDecoration: "none" }}>
      <div
        className="card-hover featured-grid"
        style={{
          background: "var(--bg-card)",
          border: `1px solid ${dimBorder}`,
          borderRadius: 8,
          padding: "36px 40px",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 40,
          alignItems: "center",
        }}
      >
        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: color, boxShadow: `0 0 24px ${color}55` }} />

        {/* Corner glow */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${color}08 0%, transparent 70%)`, pointerEvents: "none" }} />

        {/* Left: content */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span className="mono" style={{ fontSize: "0.6rem", background: dimBg, color, border: `1px solid ${dimBorder}`, padding: "3px 10px", borderRadius: 3, letterSpacing: "0.1em" }}>
              {project.status}
            </span>
            <span className="mono" style={{ fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "0.08em" }}>FLAGSHIP</span>
          </div>

          <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 10, lineHeight: 1.1 }}>
            {project.title}
          </h3>
          <p className="mono" style={{ fontSize: "0.8rem", color, marginBottom: 16, fontWeight: 500 }}>
            {project.tagline}
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 560, marginBottom: 24 }}>
            {project.cardDesc}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="mono" style={{ fontSize: "0.65rem", background: dimBg, color, border: `1px solid ${dimBorder}`, padding: "2px 8px", borderRadius: 3 }}>
                {tag}
              </span>
            ))}
          </div>

          <span className="mono" style={{ fontSize: "0.78rem", color, letterSpacing: "0.05em" }}>
            {viewProject}
          </span>
        </div>

        {/* Right: metrics preview (desktop only) */}
        <div className="metrics-panel" style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 200 }}>
          {project.sections
            .find((s) => s.type === "metrics")
            ?.items?.slice(0, 3)
            .map((item) => {
              const m = item as { value: string; label: string; context?: string };
              return (
                <div key={m.value} style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color, lineHeight: 1, letterSpacing: "-0.02em", fontFamily: "'JetBrains Mono', monospace" }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: 2 }}>{m.label}</div>
                </div>
              );
            })}
        </div>
      </div>
    </Link>
  );
}

function SmallCard({ project, locale, viewProject }: { project: ProjectContent; locale: string; viewProject: string }) {
  const color = project.color;
  const dimBg = `${color}10`;
  const dimBorder = `${color}28`;

  return (
    <Link href={`/${locale}/projects/${project.slug}`} style={{ textDecoration: "none" }}>
      <div
        className="card-hover"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: 24,
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: color, opacity: 0.6 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 4 }}>
          <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "var(--text)" }}>{project.title}</h3>
          <span className="mono" style={{ fontSize: "0.6rem", background: "#111", color: "var(--text-dim)", border: "1px solid var(--border)", padding: "2px 8px", borderRadius: 3, whiteSpace: "nowrap", flexShrink: 0 }}>
            {project.status}
          </span>
        </div>

        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.7, flex: 1 }}>
          {project.cardDesc}
        </p>

        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="mono" style={{ fontSize: "0.65rem", background: dimBg, color, border: `1px solid ${dimBorder}`, padding: "2px 8px", borderRadius: 3 }}>
                {tag}
              </span>
            ))}
          </div>
          <span className="mono" style={{ fontSize: "0.72rem", color, letterSpacing: "0.05em" }}>
            {viewProject}
          </span>
        </div>
      </div>
    </Link>
  );
}
