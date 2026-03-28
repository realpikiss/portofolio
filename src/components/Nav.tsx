"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Hide when scrolling down past 80px, show when scrolling up
      if (y > 80) {
        setHidden(y > lastY.current);
      } else {
        setHidden(false);
      }
      lastY.current = y;
      // Close mobile menu on scroll
      if (y > 10) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const nextLocale = locale === "fr" ? "en" : "fr";
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(segments.join("/"));
  };

  const links = [
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "experience", href: "#experience" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ] as const;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: "1px solid #1a1a1a",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(8,8,8,0.92)",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href={`/${locale}`}
            className="mono"
            style={{
              color: "var(--accent)",
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
              zIndex: 110,
            }}
          >
            VA<span style={{ color: "var(--text-dim)" }}>.dev</span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="link-muted"
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.04em",
                  fontWeight: 500,
                }}
              >
                {t(key)}
              </a>
            ))}

            <a
              href={`/${locale}/acknowledgements`}
              className="link-muted"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                fontWeight: 500,
              }}
            >
              {t("acknowledgements")}
            </a>

            <button
              onClick={switchLocale}
              className="mono"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--accent)",
                padding: "4px 10px",
                borderRadius: 4,
                fontSize: "0.7rem",
                cursor: "pointer",
                letterSpacing: "0.1em",
                fontWeight: 700,
              }}
            >
              {t("switchLang")}
            </button>
          </div>

          {/* Mobile right: lang + hamburger */}
          <div className="nav-mobile-right" style={{ display: "none", alignItems: "center", gap: 12 }}>
            <button
              onClick={switchLocale}
              className="mono"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--accent)",
                padding: "4px 10px",
                borderRadius: 4,
                fontSize: "0.7rem",
                cursor: "pointer",
                letterSpacing: "0.1em",
                fontWeight: 700,
              }}
            >
              {t("switchLang")}
            </button>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text)",
                width: 36,
                height: 36,
                borderRadius: 4,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                padding: 0,
              }}
              aria-label="Menu"
            >
              <span style={{
                display: "block", width: 16, height: 1.5,
                background: menuOpen ? "var(--accent)" : "var(--text)",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }} />
              <span style={{
                display: "block", width: 16, height: 1.5,
                background: "var(--text)",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.2s ease",
              }} />
              <span style={{
                display: "block", width: 16, height: 1.5,
                background: menuOpen ? "var(--accent)" : "var(--text)",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="nav-mobile-menu"
        style={{
          position: "fixed",
          top: 56,
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(8,8,8,0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--border)",
          padding: menuOpen ? "20px 24px 28px" : "0 24px",
          display: "none",
          flexDirection: "column",
          gap: 0,
          overflow: "hidden",
          maxHeight: menuOpen ? 400 : 0,
          transition: "max-height 0.3s ease, padding 0.3s ease",
        }}
      >
        {[...links.map(({ key, href }) => ({ label: t(key), href })), { label: t("acknowledgements"), href: `/${locale}/acknowledgements` }].map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "14px 0",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "color 0.15s ease",
            }}
          >
            <span className="mono" style={{ color: "var(--accent)", fontSize: "0.65rem" }}>→</span>
            {label}
          </a>
        ))}
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 98,
            background: "rgba(0,0,0,0.4)",
          }}
        />
      )}
    </>
  );
}
