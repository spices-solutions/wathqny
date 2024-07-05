import { defineConfig, passthroughImageService } from 'astro/config'
import { shikiBaseTransformers, wathqnyPlugin } from 'wtqdocs/plugin'
import WathqnyConfig from './wathqny.config'

// https://astro.build/config
export default defineConfig({
  site: 'https://wathqny.pages.dev/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'light-plus', dark: 'dark-plus' },
      transformers: [...shikiBaseTransformers()],
    },
  },
  prefetch: true,
  integrations: [...wathqnyPlugin(WathqnyConfig)],

})
