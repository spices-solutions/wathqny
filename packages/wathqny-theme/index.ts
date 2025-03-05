import defineTheme from 'astro-theme-provider'
import { z } from 'astro/zod'

export default defineTheme({
  name: 'wathqny',
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
