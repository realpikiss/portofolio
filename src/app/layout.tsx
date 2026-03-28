import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vernet Adjobi — BI Analyst & AI Builder",
  description: "Portfolio de Vernet Adjobi — BI Analyst & AI Builder. MedCouncil, LangGraph agents, Power BI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
