import { resolve } from "node:path";
import { defineConfig } from "vite";

const publicRoot = resolve(import.meta.dirname, "public");

export default defineConfig({
  root: publicRoot,
  publicDir: false,
  server: {
    open: "/views/landing-page/",
  },
  build: {
    outDir: resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(publicRoot, "index.html"),
        landing: resolve(publicRoot, "views/landing-page/index.html"),
        cadastro: resolve(publicRoot, "views/cadastro/index.html"),
        dadosComplementares: resolve(
          publicRoot,
          "views/dados-complementares/index.html",
        ),
        loginPaciente: resolve(publicRoot, "views/login-paciente/index.html"),
      },
    },
  },
});
