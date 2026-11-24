import { ExternalLink, ShieldCheck } from "lucide-react";

type Props = {
  src: string;
  title: string;
  /** Rótulo na "barra de navegador" acima do iframe */
  label: string;
  height?: number;
};

/**
 * Moldura para sistemas externos (busca de rede, boleto, agendamento...).
 * Muitos sistemas só aceitam ser exibidos no domínio do cliente (header frame-ancestors):
 * o link "Abrir em nova aba" garante o acesso na prévia. Coloque min-w-0 no item de grid pai.
 */
export default function EmbedFrame({ src, title, label, height = 820 }: Props) {
  return (
    <div className="min-w-0 overflow-hidden rounded-[2rem] border border-ink/[0.06] bg-white shadow-panel">
      <div className="flex items-center justify-between gap-4 border-b border-ink/[0.06] bg-surface px-5 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-cta/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary-bright/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary-soft/70" />
          </span>
          <span className="flex min-w-0 items-center gap-1.5 truncate rounded-full bg-white px-3 py-1 text-xs text-muted">
            <ShieldCheck size={13} className="shrink-0 text-primary" />
            <span className="truncate">{label}</span>
          </span>
        </div>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir em nova aba"
          className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-strong"
        >
          <span className="hidden sm:inline">Abrir em nova aba</span> <ExternalLink size={13} />
        </a>
      </div>
      <iframe src={src} title={title} loading="lazy" className="block w-full bg-white" style={{ height }} />
    </div>
  );
}
