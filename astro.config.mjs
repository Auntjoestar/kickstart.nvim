// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  server: {
    allowedHosts: [
      "etdw4v-ip-186-77-204-197.tunnelmole.net",
      "http://localhost:4321/",
    ],
  },
});
