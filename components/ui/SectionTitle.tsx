import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  center?: boolean;
  /** true sobre faixas escuras (bg-band) */
  light?: boolean;
  className?: string;
};

export default function SectionTitle({ eyebrow, title, description, center, light, className }: Props) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className ?? ""}`}>
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-primary-bright" : "text-primary"}`}>{eyebrow}</p>
      <h2 className={`text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mt-5 ${light ? "text-white/75" : "text-muted"}`}>{description}</p>}
    </Reveal>
  );
}
