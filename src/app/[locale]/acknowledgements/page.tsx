import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface Institution {
  name: string;
  nameUrl: string;
  university: string | null;
  universityUrl: string | null;
  role: string;
  desc: string;
  person: string | null;
  personTitle: string | null;
  personLinkedin: string | null;
}

export default async function AcknowledgementsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "acknowledgements" });
  const institutions = t.raw("institutions") as Institution[];
  const backLabel = locale === "fr" ? "← Accueil" : "← Home";

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "100px 24px 80px" }}>
        <Link href={`/${locale}`} className="mono link-dim" style={{ fontSize: "0.75rem", display: "inline-block", marginBottom: 48 }}>
          {backLabel}
        </Link>

        <div style={{ marginBottom: 56 }}>
          <span className="cmd-label">{t("command")}</span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)", marginTop: 12, marginBottom: 16 }}>
            {t("title")}
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, fontStyle: "italic" }}>
            {t("subtitle")}
          </p>
        </div>

        <div style={{ height: 1, background: "var(--border)", marginBottom: 48 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {institutions.map((inst, i) => (
            <div
              key={i}
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, padding: 32, position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: 3, bottom: 0, background: "var(--accent)", opacity: 0.4 }} />

              <div style={{ paddingLeft: 16 }}>
                {/* Institution name + role */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <a
                      href={inst.nameUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent"
                      style={{ fontWeight: 700, fontSize: "1rem", display: "inline-flex", alignItems: "center", gap: 5 }}
                    >
                      {inst.name} ↗
                    </a>
                    {inst.university && inst.universityUrl && (
                      <div style={{ marginTop: 3 }}>
                        <a
                          href={inst.universityUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mono link-dim"
                          style={{ fontSize: "0.72rem" }}
                        >
                          ↗ {inst.university}
                        </a>
                      </div>
                    )}
                  </div>
                  <span
                    className="mono"
                    style={{ fontSize: "0.65rem", color: "var(--text-dim)", background: "#111", border: "1px solid var(--border)", padding: "2px 10px", borderRadius: 3, whiteSpace: "nowrap" }}
                  >
                    {inst.role}
                  </span>
                </div>

                {/* Prof link */}
                {inst.person && (
                  <a
                    href={inst.personLinkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono link-accent"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: "0.72rem", marginBottom: 14 }}
                  >
                    ↗ {inst.person}
                    {inst.personTitle && (
                      <span style={{ color: "var(--text-dim)", fontWeight: 400 }}>— {inst.personTitle}</span>
                    )}
                  </a>
                )}

                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.75 }}>
                  {inst.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal closing note */}
        <div
          style={{ marginTop: 56, padding: "24px 28px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", lineHeight: 2 }}
        >
          <div>
            <span style={{ color: "var(--accent)" }}>~</span>
            <span style={{ color: "var(--text-dim)" }}> $ </span>
            <span style={{ color: "var(--text-muted)" }}>echo &quot;Merci.&quot;</span>
          </div>
          <div>
            <span style={{ color: "#28c840" }}>✓ </span>
            <span style={{ color: "var(--text-muted)" }}>
              {locale === "fr"
                ? "Ces institutions et ces personnes ont façonné ce que je suis en train de devenir."
                : "These institutions and people have shaped who I'm becoming."}
            </span>
          </div>
          <div style={{ marginTop: 4 }}>
            <span style={{ color: "var(--accent)" }}>~</span>
            <span style={{ color: "var(--text-dim)" }}> $ </span>
            <span className="cursor" style={{ color: "var(--text-muted)" }} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
