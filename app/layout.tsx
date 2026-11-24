import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { marca } from "@/lib/site";
import "./globals.css";

const corpo = Inter({ subsets: ["latin"], variable: "--font-brand", display: "swap" });
const titulo = Oswald({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-title", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(marca.dominio),
  title: `${marca.nome} — ${marca.slogan}`,
  description:
    "Curso de Raciocínio Lógico Matemático do Prof. Paulo Felipe. Aulas + Matemática do Zero + centenas de questões comentadas filtradas pelo seu edital. Vem estudar com quem conhece o caminho da aprovação.",
  openGraph: { type: "website", locale: "pt_BR", siteName: marca.nome, title: `${marca.nome} — ${marca.slogan}` },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Raciocínio Lógico Matemático",
  description: "Curso de Raciocínio Lógico e Matemática do Zero com centenas de questões comentadas por tópico.",
  provider: { "@type": "Organization", name: marca.nome, url: marca.dominio },
  instructor: { "@type": "Person", name: "Paulo Felipe" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${corpo.variable} ${titulo.variable}`}>
      <body className="bg-chalk font-sans text-ink antialiased">
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      </body>
    </html>
  );
}
