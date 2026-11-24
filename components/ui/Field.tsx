"use client";

import { CheckCircle2, Loader2 } from "lucide-react";

const base =
  "w-full rounded-xl border bg-white px-4 py-3.5 text-ink outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-4 focus:ring-primary-soft/20";

type Common = { id: string; name: string; label: string; error?: string; className?: string };

function Erro({ id, error }: { id: string; error?: string }) {
  return error ? (
    <p id={`${id}-err`} className="mt-1 text-xs text-cta">
      {error}
    </p>
  ) : null;
}

export function Input({ id, name, label, error, className, ...rest }: Common & Omit<React.InputHTMLAttributes<HTMLInputElement>, "id" | "name">) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`${base} ${error ? "border-cta" : "border-ink/10"}`}
        {...rest}
      />
      <Erro id={id} error={error} />
    </div>
  );
}

export function Textarea({ id, name, label, error, className, ...rest }: Common & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "name">) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={4}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`${base} resize-y ${error ? "border-cta" : "border-ink/10"}`}
        {...rest}
      />
      <Erro id={id} error={error} />
    </div>
  );
}

export function Select({
  id,
  name,
  label,
  error,
  className,
  options,
  placeholder = "Selecionar",
  ...rest
}: Common & { options: string[]; placeholder?: string } & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id" | "name">) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        className={`${base} appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='12'%20height='8'%3E%3Cpath%20d='M1%201l5%205%205-5'%20stroke='%2354595f'%20stroke-width='2'%20fill='none'/%3E%3C/svg%3E")] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10 ${error ? "border-cta" : "border-ink/10"}`}
        {...rest}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <Erro id={id} error={error} />
    </div>
  );
}

export function SubmitButton({ pending, children }: { pending: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 font-semibold text-white shadow-cta transition hover:bg-cta-soft disabled:opacity-70"
    >
      {pending && <Loader2 size={18} className="animate-spin" />}
      {pending ? "Enviando..." : children}
    </button>
  );
}

export function Sucesso({ children }: { children: React.ReactNode }) {
  return (
    <div role="status" className="flex flex-col items-center gap-4 py-10 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-tint text-primary-strong">
        <CheckCircle2 size={34} />
      </span>
      <p className="max-w-xs text-ink">{children}</p>
    </div>
  );
}

/** Máscara de celular brasileiro: (85) 99999-0000 */
export function maskCelular(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : "";
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
