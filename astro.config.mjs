import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://allysonstauffer.github.io",
  base: "/portfolio/",
  integrations: [tailwind()],
});
