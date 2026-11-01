import path from "node:path";

const sections = ["nosotros", "cobertura", "paquetes", "contacto"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: { root: path.resolve(import.meta.dirname) },
  // old multi-page routes -> anchors of the single landing
  redirects: async () =>
    sections.map((s) => ({ source: `/${s}`, destination: `/#${s}`, permanent: true })),
};

export default nextConfig;
