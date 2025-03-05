import defineTheme from 'astro-theme-provider'
import { z } from 'astro/zod'

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

export default defineTheme({
  name: 'wathqny',
  integrations: [
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
        transformers: shikiBaseTransformers as any,
      },
    }),
    sitemap(),
    purgecss(),

    metaTags(),
    minify({
      logAllFiles: false,
    }),
    compressor({
      gzip: true,
      brotli: false,
    }),
  ],
  schema: z.object({
    logo: z.string(),
    siteName: z.string().optional(),
    description: z.string().optional(),
    GSVToken: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    sidebar: z
      .array(
        z.object({
          label: z.string(),
          id: z.string().optional(),
        }),
      )
      .optional(),
    OGImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    css: z
      .union([
        z.array(
          z.object({
            href: z.string(),
            rel: z.string().optional(),
            onload: z.string().optional(),
            media: z.string().optional(),
            as: z.string().optional(),
          }),
        ),
        z.array(z.string()),
      ])
      .optional(),
    navbar: z
      .object({
        items: z.array(
          z.object({
            href: z.string().optional(),
            label: z.string().optional(),
          }),
        ),
      })
      .optional(),
    font: z
      .union([
        z.literal('/font/GeistVF.woff2'),
        z.literal('/font/RubikVF.woff2'),
        z.string(),
      ])
      .optional(),
  }),
})

export type { Props as HeadType } from './src/components/Head.astro'
export { default as Head } from './src/components/Head.astro'
export { default as Callout } from './src/components/common/Callout.astro'
export { default as Navbar } from './src/components/Navigation/Navbar.astro'
export { default as SkipLink } from './src/components/Navigation/SkipLink.astro'
export { default as BaseLayout } from './src/components/Layout/BaseLayout.astro'
export { default as DocsLayout } from './src/components/Layout/DocsLayout.astro'
export { default as BlogLayout } from './src/components/Layout/BlogLayout.astro'
export { default as Breadcrumbs } from './src/components/Navigation/breadcrumbs.astro'
export { default as CategoryCards } from './src/components/categoryCards.astro'

export { default as Code } from './src/components/Block/Code.astro'
export type { Props as CodeType } from './src/components/Block/Code.astro'
export { default as BrowserBlock } from './src/components/Block/BrowserBlock.astro'
