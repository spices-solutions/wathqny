import { z } from 'astro/zod'
import type { SchemaContext } from 'astro:content'

export default function slugify(str: string | undefined) {
  return String(str)
    .normalize('NFKD') // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036F]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // remove consecutive hyphens
}


export const docSchema = ({ image }: SchemaContext) =>
  z
    .object({
      title: z.string().max(60, "it can't be more than 60 characters").min(3),
      description: z
        .string()
        .max(160, "it can't be more than 160 characters")
        .min(10),
      href: z.string().optional(),
      image: z
        .object({ src: z.union([image(), z.string().url()]), alt: z.string() })
        .optional(),
      keywords: z.union([z.string(), z.array(z.string())]).optional(),
      category: z.string(),
      position: z.number().optional(),
      authors: z.string().optional(),
      draft: z.boolean().default(false),
    })
    .strict()
    .transform((data) => ({
      ...data,
      link: data.href ?? `${data.category}/${slugify(data.title)}`,
    }))

export const 

export function authorSchema({ image }: SchemaContext) {
  z.object({
    name: z.string(),
    bio: z.string().optional(),
    email: z.string().email().optional(),
    role: z.string().optional(),
    profile: z.union([image(), z.string().url()]),
  }).strict()
}
