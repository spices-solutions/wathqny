import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { customRouting } from '@inox-tools/custom-routing'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import {
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'
import AstroPWA from '@vite-pwa/astro'
import AutoImport from 'astro-auto-import'
import compressor from 'astro-compressor'
import icon from 'astro-icon'
import metaTags from 'astro-meta-tags'
import min from 'astro-min'
import purgecss from 'astro-purgecss'
import type { WathqnyConfig } from './types/config'

export const shikiBaseTransformers = () => [
  transformerNotationDiff(),
  transformerNotationFocus(),
  transformerMetaHighlight(),
  transformerNotationWordHighlight(),
  transformerNotationErrorLevel(),
  transformerNotationHighlight(),
  transformerMetaWordHighlight(),
  transformerCopyButton({
    visibility: 'always',
    feedbackDuration: 3_000,
  }),
]

export function wathqnyPlugin(Wathqny: WathqnyConfig) {
  return [
    customRouting({
      'robot.txt': 'wtqdocs/page/robot.txt',
      'rss.xml': 'wtqdocs/page/rss.xml',
      docs: 'wtqdocs/page/docs',
      'docs/[...categories]': 'wtqdocs/page/docs/categories',
      'docs/[...documents]': 'wtqdocs/page/docs/documents',
      blog: 'wtqdocs/page/blog',
      'blog/[...page]': 'wtqdocs/page/blog/pages',
      'blog/[...posts]': 'wtqdocs/page/blog/posts',
      '404': 'wtqdocs/page/404',
    }),
    AutoImport({
      imports: [
        {
          'astro:assets': ['Image'],
          wtqdocs: ['BrowserBlock', 'Code'],
        },
      ],
    }),
    mdx({
      optimize: true,
      shikiConfig: {
        themes: {
          light: 'material-theme-lighter',
          dark: 'material-theme-darker',
        },
        transformers: [...shikiBaseTransformers()],
      },
    }),
    icon({
      iconDir: 'src/assets/icons',
    }),
    sitemap(),
    purgecss(),
    AstroPWA({
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false,
      },
      pwaAssets: {
        config: true,
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        navigateFallback: '/404',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      },
      manifest: {
        name: Wathqny.siteName,
        description: Wathqny.description,
        theme_color: '#18181B',
        background_color: '#fff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
      },
    }),
    metaTags(),
    compressor({
      gzip: true,
      brotli: false,
    }),
    min({
      do_not_minify_doctype: true,
      keep_html_and_head_opening_tags: true,
      minify_css: true,
      minify_js: true,
    }),
  ]
}
