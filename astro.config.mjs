// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://allysonstauffer.github.io", // GitHub Pages root
  base: "/portfolio/",                       // repo name
  vite: {
    plugins: [tailwindcss()],
  },
});
