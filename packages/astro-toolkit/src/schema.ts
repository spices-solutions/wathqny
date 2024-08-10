import type { SchemaContext } from "astro:content";
import { z } from "astro/zod";
import { slugify } from "./utils";

export const s = {
  // authorSchema: z
  //   .object({
  //     name: z.string(),
  //     bio: z.string().optional(),
  //     email: z.string().email().optional(),
  //     role: z.string().optional(),
  //     profile: z.string().url(),
  //   })
  //   .strict()
  //   .optional(),
  title: z.string().max(60, "Title can't exceed 60 characters").min(3),
  description: z
    .string()
    .max(160, "Description can't exceed 160 characters")
    .min(10),
  draft: z.boolean().default(false),
  keywords: z.union([z.string(), z.array(z.string())]).optional(),
  pubDate: z.date().transform((str: Date) => new Date(str)),
  OGImage: ({ image }: SchemaContext) =>
    z
      .object({ src: z.union([image(), z.string().url()]), alt: z.string() })
      .optional(),
};

export function docSchema({ image }: SchemaContext) {
  return z
    .object({
      title: s.title,
      description: s.description,
      href: z.string().optional(),
      image: s.OGImage({ image }),
      keywords: s.keywords,
      draft: s.draft,
      authors: z.string().optional(),
      category: z.string(),
      position: z.number().optional(),
    })
    .strict()
    .transform((data) => ({
      ...data,
      link: `${data.href ?? `${data.category}/${slugify(data.title)}`}`,
    }));
}

export function blogSchema({ image }: SchemaContext) {
  return z
    .object({
      title: s.title,
      description: s.description,
      image: s.OGImage({ image }),
      keywords: s.keywords,
      draft: s.draft,
      pubDate: s.pubDate,
      href: z.string().optional(),
      authors: z.string().optional(),
    })
    .strict()
    .transform((data) => ({
      ...data,
      link: data.href ?? `/${slugify(data.title)}`,
    }));
}
