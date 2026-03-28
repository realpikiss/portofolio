"use client";

import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");

  const categories = [
    { key: "bi", icon: "📊" },
    { key: "ai", icon: "🤖" },
    { key: "dev", icon: "⚡" },
  ] as const;

  return (
    <section
      id="skills"
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
        className="grid-3col"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}
      >
        {categories.map(({ key, icon }) => {
          const label = t(`${key}.label`);
          const items = t.raw(`${key}.items`) as string[];

          return (
            <div
              key={key}
              className="card-hover"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: 28,
                cursor: "default",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 24,
                  paddingBottom: 16,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{icon}</span>
                <span
                  className="mono"
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {label}
                </span>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <span
                      className="mono"
                      style={{
                        color: "var(--accent)",
                        fontSize: "0.7rem",
                        flexShrink: 0,
                      }}
                    >
                      →
                    </span>
                    <span
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
