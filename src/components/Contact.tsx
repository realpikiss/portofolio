"use client";

import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
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
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: 16,
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            {t("subtitle")}
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.7,
              fontSize: "0.9rem",
              marginBottom: 32,
            }}
          >
            {t("availability")}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: t("email"), icon: "✉", href: "mailto:hello@vernet.dev" },
              { label: t("linkedin"), icon: "in", href: "https://www.linkedin.com/in/vernet-emmanuel-adjobi-4a491b223/" },
              { label: t("github"), icon: "gh", href: "https://github.com/realpikiss" },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  padding: "12px 16px",
                  borderRadius: 6,
                  border: "1px solid var(--border)",
                  background: "var(--bg-card)",
                  transition: "border-color 0.15s ease, color 0.15s ease",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-hover)";
                  el.style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-muted)";
                }}
              >
                <span
                  className="mono"
                  style={{
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--accent-dim)",
                    border: "1px solid rgba(0,255,136,0.15)",
                    borderRadius: 4,
                    fontSize: "0.65rem",
                    color: "var(--accent)",
                    flexShrink: 0,
                    fontWeight: 700,
                  }}
                >
                  {icon}
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Terminal input mockup */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 8,
            overflow: "hidden",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
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
              contact.sh
            </span>
          </div>
          <div style={{ padding: 24, fontSize: "0.78rem", lineHeight: 2.2 }}>
            <div>
              <span style={{ color: "var(--accent)" }}>~</span>
              <span style={{ color: "var(--text-dim)" }}> $ </span>
              <span style={{ color: "var(--text-muted)" }}>./send-message.sh</span>
            </div>
            <div style={{ color: "var(--text-dim)", paddingLeft: 0 }}>
              <span style={{ color: "#4488ff" }}>{">"}</span>
              <span style={{ color: "var(--text-muted)" }}> subject: </span>
              <span style={{ color: "var(--text)" }}>{t("terminalSubject")}</span>
            </div>
            <div>
              <span style={{ color: "#4488ff" }}>{">"}</span>
              <span style={{ color: "var(--text-muted)" }}> message: </span>
              <span style={{ color: "var(--text)" }}>{t("terminalMessage")}</span>
            </div>
            <div>
              <span style={{ color: "#28c840" }}>✓ </span>
              <span style={{ color: "var(--text-muted)" }}>{t("terminalSent")}</span>
            </div>
            <div style={{ marginTop: 8 }}>
              <span style={{ color: "var(--accent)" }}>~</span>
              <span style={{ color: "var(--text-dim)" }}> $ </span>
              <span className="cursor" style={{ color: "var(--text-muted)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
