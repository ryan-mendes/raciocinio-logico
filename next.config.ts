import type { NextConfig } from "next";

/**
 * Dois modos no mesmo código:
 *  - padrão: site completo (servidor Next), formulários enviados de verdade (Server Actions).
 *  - STATIC_EXPORT=1: prévia estática para o GitHub Pages em ./out, servida em NEXT_PUBLIC_BASE_PATH
 *    (ex.: /cliente-preview). Formulários em modo demonstração (lib/acoes.demo.ts).
 */
const estatico = process.env.STATIC_EXPORT === "1";
const basePath = estatico ? process.env.NEXT_PUBLIC_BASE_PATH ?? "" : "";

// Domínios das imagens do site atual (WordPress costuma servir via i0.wp.com / Jetpack).
// Preencha com os hosts encontrados na extração.
const remotePatterns = [
  { protocol: "https" as const, hostname: "i0.wp.com" },
  { protocol: "https" as const, hostname: "i1.wp.com" },
  { protocol: "https" as const, hostname: "i2.wp.com" },
  // { protocol: "https" as const, hostname: "www.dominio-do-cliente.com.br", pathname: "/wp-content/**" },
];

// URLs antigas que mudaram de nome (também precisam de página com meta refresh para a prévia estática)
const redirects: { source: string; destination: string; permanent: boolean }[] = [
  // { source: "/pagina-antiga", destination: "/pagina-nova", permanent: true },
];

const nextConfig: NextConfig = estatico
  ? {
      output: "export",
      basePath,
      trailingSlash: true, // gera /pagina/index.html, como o GitHub Pages espera
      images: { unoptimized: true, remotePatterns },
    }
  : {
      images: { formats: ["image/avif", "image/webp"], remotePatterns },
      experimental: {
        // Uploads (ex.: currículo) de até ~5 MB; o padrão do Next é 1 MB.
        serverActions: { bodySizeLimit: "6mb" },
      },
      async redirects() {
        return redirects;
      },
    };

export default nextConfig;
