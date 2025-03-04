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
import { minify } from '@zokki/astro-minify'
import AutoImport from 'astro-auto-import'
import compressor from 'astro-compressor'
import metaTags from 'astro-meta-tags'
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
      'injected.css': 'wtqdocs/page/injected.css',
      'search.json': 'wtqdocs/page/search.json',
      'robots.txt': 'wtqdocs/page/robots.txt',
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
          wtqdocs: ['BrowserBlock', 'Code', 'Callout'],
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
    sitemap(),
    purgecss(),
    // AstroPWA({
    //   experimental: {
    //     directoryAndTrailingSlashHandler: true,
    //   },
    //   registerType: 'autoUpdate',
    //   pwaAssets: {
    //     image: 'public/icon.svg',
    //   },
    //   workbox: {
    //     clientsClaim: true,
    //     skipWaiting: true,
    //     navigateFallback: "/404",
    //     globPatterns: undefined
    //   },
    //   manifest: {
    //     name: Wathqny.siteName,
    //     description: Wathqny.description,
    //     theme_color: '#18181B',
    //     background_color: '#fff',
    //     display: 'standalone',
    //     scope: '/',
    //     start_url: '/',
    //     orientation: 'portrait',
    //   },
    // }),
    metaTags(),
    // minify({
    //   logAllFiles: false,
    // }),
    // compressor({
    //   gzip: true,
    //   brotli: false,
    // }),
  ]
}
