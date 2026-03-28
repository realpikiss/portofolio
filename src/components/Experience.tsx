"use client";

import { useTranslations } from "next-intl";

interface Job {
  company: string;
  companyUrl: string;
  role: string;
  period: string;
  location: string;
  supervisor: string | null;
  supervisorLinkedin: string | null;
  desc: string;
  tags: string[];
}

export default function Experience() {
  const t = useTranslations("experience");
  const jobs = t.raw("jobs") as Job[];

  return (
    <section
      id="experience"
      style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ marginBottom: 48 }}>
        <span className="cmd-label">{t("command")}</span>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginTop: 12, color: "var(--text)" }}>
          {t("title")}
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {jobs.map((job, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "1px 1fr", gap: "0 32px", paddingBottom: 32 }}>
            {/* Timeline */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, marginTop: 6, boxShadow: "0 0 10px var(--accent-glow)" }} />
              {i < jobs.length - 1 && <div style={{ flex: 1, width: 1, background: "var(--border)", marginTop: 8 }} />}
            </div>

            {/* Card */}
            <div className="card-hover timeline-card" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, padding: 24, marginLeft: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: 4 }}>
                    {job.role}
                  </h3>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono link-accent"
                    style={{ fontSize: "0.75rem", fontWeight: 500 }}
                  >
                    ↗ {job.company}
                  </a>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="mono" style={{ fontSize: "0.7rem", color: "var(--text-dim)", background: "#111", padding: "3px 10px", borderRadius: 3, border: "1px solid var(--border)", whiteSpace: "nowrap", marginBottom: 4 }}>
                    {job.period}
                  </div>
                  {job.location && (
                    <div className="mono" style={{ fontSize: "0.65rem", color: "var(--text-dim)" }}>
                      {job.location}
                    </div>
                  )}
                </div>
              </div>

              {job.supervisor && (
                <div style={{ marginBottom: 12, marginTop: 8 }}>
                  <a
                    href={job.supervisorLinkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono link-dim"
                    style={{ fontSize: "0.7rem" }}
                  >
                    ↗ {job.supervisor}
                  </a>
                </div>
              )}

              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: 16 }}>
                {job.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {job.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
