"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        maxWidth: 1100,
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <span className="cmd-label">{t("command")}</span>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            marginTop: 12,
            color: "var(--text)",
          }}
        >
          {t("title")}
        </h2>
      </div>

      <div
        className="grid-2col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            {t("p1")}
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            {t("p2")}
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1rem",
            }}
          >
            {t("p3")}
          </p>
        </div>

        {/* Terminal card */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            overflow: "hidden",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {/* Terminal header */}
          <div
            style={{
              background: "#111",
              borderBottom: "1px solid var(--border)",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
            <span style={{ marginLeft: 8, fontSize: "0.65rem", color: "var(--text-dim)" }}>
              about.json
            </span>
          </div>

          {/* Terminal body */}
          <div style={{ padding: 24, fontSize: "0.78rem", lineHeight: 2 }}>
            <div style={{ color: "var(--text-dim)" }}>{"{"}</div>
            <div style={{ paddingLeft: 16 }}>
              <span style={{ color: "#4488ff" }}>&quot;name&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>: </span>
              <span style={{ color: "var(--accent)" }}>&quot;Vernet Adjobi&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>,</span>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <span style={{ color: "#4488ff" }}>&quot;role&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>: </span>
              <span style={{ color: "#ffcc00" }}>&quot;BI Analyst &amp; AI Builder&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>,</span>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <span style={{ color: "#4488ff" }}>&quot;location&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>: </span>
              <span style={{ color: "var(--accent)" }}>&quot;{t("location")}&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>,</span>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <span style={{ color: "#4488ff" }}>&quot;status&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>: </span>
              <span style={{ color: "#28c840" }}>&quot;</span>
              <span className="status-dot" style={{ color: "#28c840" }} />
              <span style={{ color: "#28c840" }}>{t("status")}&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>,</span>
            </div>
            <div style={{ paddingLeft: 16 }}>
              <span style={{ color: "#4488ff" }}>&quot;company&quot;</span>
              <span style={{ color: "var(--text-dim)" }}>: </span>
              <span style={{ color: "var(--accent)" }}>&quot;lambdaTools&quot;</span>
            </div>
            <div style={{ color: "var(--text-dim)" }}>{"}"}</div>
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <span style={{ color: "var(--accent)" }}>▍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
