// Dados da marca, navegação e conteúdo da LP do curso.
// Conteúdo extraído do carrossel de divulgação (nada inventado).

export const marca = {
  nome: "Nivuntra",
  slogan: "Vem estudar com quem conhece o caminho da aprovação",
  dominio: "https://sistema-aulas-two.vercel.app",
  email: "suporte.nivuntra@gmail.com",
  professor: "Prof. Paulo Felipe",
  curso: "Raciocínio Lógico Matemático",
  cursoSlug: "raciocinio-logico-matematico",
  endereco: {
    linha1: "Plataforma 100% online",
    linha2: "Ceará · Brasil",
    mapa: "",
  },
};

export const assets = {
  logo: "",
  logoLargura: 0,
  logoAltura: 0,
};

/** Link de inscrição na plataforma (onde o aluno cria a conta e paga). */
export const INSCRICAO = `${marca.dominio}/inscrever/${marca.cursoSlug}`;

export const links = {
  ctaPrincipal: INSCRICAO,
  ctaPrincipalTexto: "Garanta sua vaga",
  plataforma: marca.dominio,
};

/** Preço (do carrossel). */
export const preco = {
  pix: "127,99",
  pixLabel: "à vista no Pix",
  parcela: "12,47",
  parcelas: 12,
  cartaoLabel: "por mês no cartão",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "O curso", href: "#curso" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Investimento", href: "#investimento" },
];
