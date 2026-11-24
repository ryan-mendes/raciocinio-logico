import { links } from "@/lib/site";

// Também evita o erro "no direct app page entry found for /_not-found" no build estático.
export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[80svh] items-center overflow-hidden pt-28">
      <div className="glow pointer-events-none absolute -right-[15%] -top-[30%] -z-10 h-[65vmax] w-[65vmax] rounded-full" />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <p className="font-title text-gradient text-8xl tracking-tight md:text-9xl">404</p>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink md:text-4xl">Página não encontrada</h1>
        <p className="mt-4 text-muted">O endereço pode ter mudado. Que tal começar pela página inicial?</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="/" className="rounded-full bg-gold px-7 py-4 font-bold text-primary-deep transition hover:brightness-110">
            Ir para o início
          </a>
          <a href={links.ctaPrincipal} className="rounded-full border border-white/15 px-7 py-4 font-semibold text-ink hover:bg-white/5">
            {links.ctaPrincipalTexto}
          </a>
        </div>
      </div>
    </main>
  );
}
