"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer style={{ borderTop: "1px solid var(--border)", width: "100%" }}>
      <div
        style={{
          padding: "24px",
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
      <span
        className="mono"
        style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}
      >
        {t("built")}
      </span>
      <span
        className="mono"
        style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}
      >
        © {new Date().getFullYear()} Vernet Adjobi — {t("rights")}
      </span>
      </div>
    </footer>
  );
}
