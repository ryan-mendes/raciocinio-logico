import { links, marca, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070d18]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="font-title text-2xl tracking-wide text-ink">
            NIVUN<span className="text-gold">TRA</span>
          </span>
          <p className="mt-4 max-w-xs text-sm text-muted">{marca.slogan}.</p>
          <p className="mt-4 text-sm text-muted">
            Curso <strong className="text-ink/90">{marca.curso}</strong>
            <br />
            {marca.professor}
          </p>
        </div>

        <nav aria-label="Navegação">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-strong">Navegar</p>
          <ul className="space-y-2.5 text-sm">
            {nav.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-muted transition hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-strong">Começar</p>
          <a
            href={links.ctaPrincipal}
            className="inline-block rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-primary-deep shadow-cta transition hover:brightness-110"
          >
            {links.ctaPrincipalTexto}
          </a>
          <a href={`mailto:${marca.email}`} className="mt-4 block text-sm text-muted hover:text-ink">
            {marca.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-muted/70">
        © {new Date().getFullYear()} {marca.nome}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
