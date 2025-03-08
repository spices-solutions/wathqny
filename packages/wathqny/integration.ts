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
import type { ShikiTransformer } from 'shiki'

export const shikiBaseTransformers: ShikiTransformer[] = [
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

export function wathqnyPlugin() {
  return [
    // customRouting({
    //   'injected.css': 'wtqdocs/page/injected.css',
    //   'search.json': 'wtqdocs/page/search.json',
    //   'robots.txt': 'wtqdocs/page/robots.txt',
    //   'rss.xml': 'wtqdocs/page/rss.xml',
    //   docs: 'wtqdocs/page/docs',
    //   'docs/[...categories]': 'wtqdocs/page/docs/categories',
    //   'docs/[...documents]': 'wtqdocs/page/docs/documents',
    //   blog: 'wtqdocs/page/blog',
    //   'blog/[...page]': 'wtqdocs/page/blog/pages',
    //   'blog/[...posts]': 'wtqdocs/page/blog/posts',
    //   '404': 'wtqdocs/page/404',
    // }),

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
  ]
}
