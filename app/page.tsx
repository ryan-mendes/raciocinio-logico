import { ArrowRight, Check, Layers, Target, Trophy, Quote, Sparkles, PlayCircle } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { INSCRICAO, links, marca, preco } from "@/lib/site";
import { aprovacoes, depoimentos, diferenciais, faq, inclui } from "@/lib/curso";

const TITULO = marca.slogan.split(" ");

function CtaGold({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={INSCRICAO}
      className={`group inline-flex items-center gap-3 rounded-full bg-gold py-4 pl-7 pr-5 font-bold text-primary-deep shadow-cta transition hover:brightness-110 ${className}`}
    >
      {children ?? links.ctaPrincipalTexto}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-black/15 transition-transform group-hover:translate-x-1">
        <ArrowRight size={16} />
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      {/* ───────── HERO ───────── */}
      <section className="relative isolate flex min-h-svh items-center overflow-hidden pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="drift glow absolute -right-[12%] -top-[18%] h-[70vmax] w-[70vmax] rounded-full" />
          <div className="glow-gold absolute -bottom-[20%] -left-[12%] h-[55vmax] w-[55vmax] rounded-full opacity-70" />
        </div>
        <div className="veil pointer-events-none absolute inset-0 z-40 bg-[#060a12]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p
              className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary-soft"
              style={{ "--d": "0.25s" } as React.CSSProperties}
            >
              <Sparkles size={14} className="text-cta" /> {marca.professor} · Raciocínio Lógico Matemático
            </p>
            <h1 className="font-title max-w-4xl text-[clamp(2.3rem,6vw,4.6rem)] uppercase leading-[0.98] tracking-tight text-ink">
              {TITULO.map((w, i) => (
                <span key={i}>
                  <span className="word-mask">
                    <span style={{ "--i": i } as React.CSSProperties} className={i >= TITULO.length - 1 ? "text-gold" : undefined}>
                      {w}
                    </span>
                  </span>{" "}
                </span>
              ))}
            </h1>
            <p className="fade-up mt-7 max-w-xl text-lg text-muted" style={{ "--d": "1s" } as React.CSSProperties}>
              Raciocínio Lógico + Matemática do Zero + centenas de questões comentadas, filtradas pelo seu edital — numa
              plataforma onde você assiste, baixa material e treina no mesmo lugar.
            </p>
            <div className="fade-up mt-9 flex flex-wrap items-center gap-4" style={{ "--d": "1.2s" } as React.CSSProperties}>
              <CtaGold />
              <a href="#curso" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 font-semibold text-ink transition hover:bg-white/5">
                <PlayCircle size={18} className="text-primary-bright" /> Ver o que inclui
              </a>
            </div>
            <p className="fade-up mt-5 text-sm text-muted" style={{ "--d": "1.35s" } as React.CSSProperties}>
              A partir de <strong className="text-ink">R$ {preco.parcela}</strong>/mês no cartão · ou{" "}
              <strong className="text-ink">R$ {preco.pix}</strong> à vista no Pix
            </p>
          </div>

          {/* Cartão de aprovações flutuante */}
          <Reveal delay={0.3} className="relative">
            <div className="card-dark relative rounded-3xl p-6 shadow-panel">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold text-primary-deep">
                  <Trophy size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Resultados reais</p>
                  <p className="text-xs text-muted">Aprovado e aprovando alunos</p>
                </div>
              </div>
              <ul className="space-y-3">
                {aprovacoes.map((a) => (
                  <li key={a.concurso} className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <div>
                      <p className="font-title text-xl text-gold">{a.posicao}</p>
                      <p className="text-xs text-muted">{a.nota}</p>
                    </div>
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary-strong">{a.concurso}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-xs text-muted">…e mais aprovações ao longo dos anos.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── O QUE VOCÊ RECEBE ───────── */}
      <section id="curso" className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle
            eyebrow="O que você recebe"
            title={<>Muito mais do que <span className="text-gradient">um curso</span></>}
            description="Achou que seria só mais uma aula de raciocínio lógico? Aqui você recebe um pacote completo para sair do zero e chegar pronto na prova."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {inclui.map((item, i) => (
              <Reveal as="div" key={item.titulo} delay={(i % 4) * 0.08}>
                <div className="card-dark h-full rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-card-hover">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-primary-bright">
                    <Check size={20} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── DIFERENCIAIS ───────── */}
      <section id="diferenciais" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
        <div className="bg-band absolute inset-0" />
        <div className="glow absolute -right-[10%] top-1/3 -z-0 h-[40vmax] w-[40vmax] rounded-full opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              light
              eyebrow="Por que funciona"
              title={<>Você vai receber <span className="text-gradient-light">muito mais</span></>}
              description="O foco não é acumular aula. É te fazer resolver a questão certa, do jeito certo, no tempo da prova."
            />
          </div>
          <div className="grid gap-5">
            {diferenciais.map((d, i) => (
              <Reveal as="div" key={d.titulo} delay={i * 0.1}>
                <div className={`rounded-3xl p-7 ${i === 0 ? "bg-vivid text-white shadow-card-hover" : "card-dark"}`}>
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${i === 0 ? "bg-white/20 text-white" : "bg-primary/15 text-primary-bright"}`}>
                    {i === 0 ? <Target size={22} /> : <Layers size={22} />}
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{d.titulo}</h3>
                  <p className={`mt-2 leading-relaxed ${i === 0 ? "text-white/85" : "text-muted"}`}>{d.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── DEPOIMENTOS ───────── */}
      <section id="depoimentos" className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionTitle
            center
            eyebrow="O que os alunos comentam"
            title={<>Quem estuda com ele <span className="text-gold">é chamado</span></>}
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {depoimentos.map((d, i) => (
              <Reveal as="div" key={i} delay={(i % 3) * 0.08}>
                <figure className="card-dark flex h-full flex-col rounded-3xl p-6">
                  <Quote size={28} className="text-cta" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/90">“{d.texto}”</blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-primary-strong">{d.autor}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">Mensagens reais de alunos, mantidas anônimas.</p>
        </div>
      </section>

      {/* ───────── INVESTIMENTO ───────── */}
      <section id="investimento" className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <Reveal className="card-dark overflow-hidden rounded-[2rem] p-8 text-center sm:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-strong">Tudo isso por</p>
            <div className="mt-6 flex items-end justify-center gap-1">
              <span className="brush font-title text-[clamp(3.5rem,14vw,8rem)] leading-none text-ink">
                127
                <span className="align-top text-[0.35em]">,99</span>
              </span>
            </div>
            <p className="mt-2 text-lg font-semibold text-ink">{preco.pixLabel}</p>
            <p className="mt-1 text-muted">
              ou <strong className="text-ink">{preco.parcelas}x de R$ {preco.parcela}</strong> {preco.cartaoLabel}
            </p>

            <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
              {["Curso de Raciocínio Lógico", "Curso de Matemática do Zero", "Centenas de questões comentadas", "Acesso na plataforma Nivuntra"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-ink/90">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-primary-deep">
                    <Check size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex justify-center">
              <CtaGold className="text-lg">Garanta sua vaga</CtaGold>
            </div>
            <p className="mt-4 text-xs text-muted">Pagamento com Pix ou cartão · acesso liberado automaticamente após a confirmação.</p>
          </Reveal>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-8">
          <SectionTitle center eyebrow="Dúvidas" title={<>Perguntas <span className="text-gradient">frequentes</span></>} />
          <div className="mt-10 space-y-3">
            {faq.map((f) => (
              <details key={f.p} className="card-dark group rounded-2xl p-5 [&_summary]:cursor-pointer">
                <summary className="flex list-none items-center justify-between gap-4 font-semibold text-ink">
                  {f.p}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/15 text-muted transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA FINAL ───────── */}
      <section className="relative px-4 pb-24 sm:px-8 md:pb-32">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:px-12 md:py-20">
          <div className="bg-band absolute inset-0" />
          <div className="glow-gold absolute -right-[8%] -top-[30%] h-[40vmax] w-[40vmax] rounded-full opacity-60" />
          <div className="relative">
            <h2 className="font-title mx-auto max-w-3xl text-[clamp(1.9rem,4.5vw,3.25rem)] uppercase leading-tight text-ink">
              Garanta sua vaga no <span className="text-gold">caminho da aprovação</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/80">
              Comece hoje com quem já passou — e já aprovou dezenas de alunos.
            </p>
            <div className="mt-9 flex justify-center">
              <CtaGold className="text-lg">Garanta sua vaga</CtaGold>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
