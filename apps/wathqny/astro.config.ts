import { defineConfig, passthroughImageService } from "astro/config";
import { shikiBaseTransformers, wathqnyPlugin } from "wtqdocs/plugin";
import WathqnyConfig from "./wathqny.config";

// https://astro.build/config
export default defineConfig({
  site: "https://wathqny.pages.dev/",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  image: {
    service: passthroughImageService(),
    domains: ["api.github.com", "avatars.githubusercontent.com"],
  },
  experimental: {
    svg: true,
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "material-theme-lighter",
        dark: "material-theme-darker",
      },
      transformers: shikiBaseTransformers() as any,
    },
  },
  integrations: [...wathqnyPlugin(WathqnyConfig)],
});
