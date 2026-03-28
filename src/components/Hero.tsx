"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function Hero() {
  const t = useTranslations("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 24px 60px",
        maxWidth: 1100,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Prompt line */}
      <div
        className={`mono animate-in delay-1`}
        style={{
          fontSize: "0.8rem",
          color: "var(--text-dim)",
          marginBottom: 32,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ color: "var(--accent)" }}>~/portfolio</span>
        <span style={{ color: "var(--text-dim)" }}>$</span>
        <span style={{ color: "var(--text-muted)" }}>whoami</span>
      </div>

      {/* Greeting */}
      <p
        className="animate-in delay-2 mono"
        style={{
          fontSize: "1rem",
          color: "var(--text-muted)",
          marginBottom: 8,
          letterSpacing: "0.1em",
        }}
      >
        {t("greeting")}
      </p>

      {/* Name */}
      <h1
        className="animate-in delay-3 cursor"
        style={{
          fontSize: "clamp(3.5rem, 8vw, 7rem)",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          marginBottom: 16,
        }}
      >
        {t("name")}
      </h1>

      {/* Title */}
      <div
        className="animate-in delay-4"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            width: 40,
            height: 2,
            backgroundColor: "var(--accent)",
          }}
        />
        <span
          className="mono"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            color: "var(--accent)",
            letterSpacing: "0.05em",
            fontWeight: 500,
          }}
        >
          {t("title")}
        </span>
      </div>

      {/* Subtitle */}
      <p
        className="animate-in delay-5"
        style={{
          fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
          color: "var(--text-muted)",
          maxWidth: 560,
          lineHeight: 1.7,
          marginBottom: 48,
          fontWeight: 400,
        }}
      >
        {t("subtitle")}
      </p>

      {/* CTAs */}
      <div
        className="animate-in delay-6"
        style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
      >
        <a
          href="#projects"
          style={{
            background: "var(--accent)",
            color: "#080808",
            padding: "12px 28px",
            borderRadius: 4,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
            transition: "opacity 0.15s ease, transform 0.15s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.opacity = "0.85";
            (e.target as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          {t("cta")}
        </a>
        <a
          href="#contact"
          style={{
            background: "transparent",
            color: "var(--text)",
            padding: "12px 28px",
            borderRadius: 4,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
            border: "1px solid var(--border)",
            transition: "border-color 0.15s ease, transform 0.15s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.borderColor = "var(--border-hover)";
            (e.target as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.borderColor = "var(--border)";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          {t("ctaSecondary")}
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div
          className="mono"
          style={{ fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}
        >
          SCROLL
        </div>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
