import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  /** Palavras do título que recebem o degradê da marca (comparação sem pontuação) */
  destaque?: string[];
  description?: React.ReactNode;
  breadcrumb: string;
  /** Coluna da direita: formulário, imagem, card de destaque... */
  children?: React.ReactNode;
};

/** Cabeçalho padrão das páginas internas: fundo claro, brilho suave da marca, título palavra por palavra. */
export default function PageHero({ eyebrow, title, destaque = [], description, breadcrumb, children }: Props) {
  const palavras = title.split(" ");
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="drift glow absolute -right-[15%] -top-[30%] h-[65vmax] w-[65vmax] rounded-full" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-b from-transparent to-surface" />

      <div className={`mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 ${children ? "lg:grid-cols-[1.1fr_0.9fr] lg:gap-16" : ""}`}>
        <div className={children ? "" : "max-w-4xl"}>
          <nav aria-label="Você está em" className="fade-up mb-6 flex items-center gap-1.5 text-xs text-muted" style={{ "--d": "0.1s" } as React.CSSProperties}>
            <Link href="/" className="hover:text-primary-strong">
              Início
            </Link>
            <ChevronRight size={12} />
            <span className="font-medium text-ink">{breadcrumb}</span>
          </nav>
          <p
            className="fade-up mb-5 inline-flex items-center gap-2 rounded-full bg-tint px-4 py-1.5 text-xs font-semibold text-primary-strong"
            style={{ "--d": "0.2s" } as React.CSSProperties}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" />
            {eyebrow}
          </p>
          <h1 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-ink">
            {palavras.map((w, i) => (
              <span key={i}>
                <span className="word-mask">
                  <span
                    style={{ "--i": i * 0.7 } as React.CSSProperties}
                    className={destaque.some((d) => w.replace(/[.,!?]/g, "") === d.replace(/[.,!?]/g, "")) ? "text-gradient" : undefined}
                  >
                    {w}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>
          {description && (
            <div className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg" style={{ "--d": "0.9s" } as React.CSSProperties}>
              {description}
            </div>
          )}
        </div>
        {children && (
          <div className="fade-up min-w-0" style={{ "--d": "0.7s" } as React.CSSProperties}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
