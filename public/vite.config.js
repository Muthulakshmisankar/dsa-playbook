import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import seoFiles from "vite-plugin-seo-files";
import { readFileSync } from "node:fs";

// Import route list dynamically for sitemap generation
import routes from "./src/routes-list.js";

export default defineConfig({
  plugins: [
    react(),
    seoFiles({
      siteUrl: "https://javascriptdsaplaybook.netlify.app",
      routes,                                    // SPA route list
      robots: {
        allow: "/",
        disallow: []
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: "dist",
    sourcemap: false
  }
});