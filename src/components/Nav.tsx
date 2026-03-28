"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function Nav() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: "1px solid #1a1a1a",
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(8,8,8,0.85)",
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
          }}
        >
          VA<span style={{ color: "var(--text-dim)" }}>.dev</span>
        </a>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {links.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.8rem",
                letterSpacing: "0.04em",
                transition: "color 0.15s ease",
                fontWeight: 500,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--text-muted)")
              }
            >
              {t(key)}
            </a>
          ))}

          <a
            href={`/${locale}/acknowledgements`}
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.8rem",
              letterSpacing: "0.04em",
              transition: "color 0.15s ease",
              fontWeight: 500,
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            {t("acknowledgements")}
          </a>

          {/* Lang switcher */}
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
              transition: "border-color 0.15s ease",
              fontWeight: 700,
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.borderColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.borderColor = "var(--border)")
            }
          >
            {t("switchLang")}
          </button>
        </div>
      </div>
    </nav>
  );
}
