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
			"nstwd3-ip-190-143-254-232.tunnelmole.net",
      "http://localhost:4321/",
    ],
  },
});
