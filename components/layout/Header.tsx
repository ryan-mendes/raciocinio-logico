"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { links, marca, nav } from "@/lib/site";

function Wordmark() {
  return (
    <a href="#top" aria-label={`${marca.nome}, topo`} className="shrink-0 select-none">
      <span className="font-title text-2xl tracking-wide text-ink">
        NIVUN<span className="text-gold">TRA</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease-cine)] ${
        scrolled || open ? "border-b border-white/10 bg-[#070d18]/85 py-3 backdrop-blur-xl" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 sm:px-8">
        <Wordmark />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="relative py-1 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-primary-bright after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={links.ctaPrincipal}
            className="hidden whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-primary-deep shadow-cta transition hover:brightness-110 sm:inline-block"
          >
            {links.ctaPrincipalTexto}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-ink lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Menu móvel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-3 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1322] p-4 shadow-panel lg:hidden"
          >
            <ul className="space-y-0.5">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-lg text-ink/90 hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={links.ctaPrincipal}
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-gold py-3.5 text-center font-bold text-primary-deep"
            >
              {links.ctaPrincipalTexto}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
