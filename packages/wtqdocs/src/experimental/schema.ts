import { z } from 'astro/zod';
import { slugify } from 'astro-toolkit/utils';

// Define a base schema for common content properties
const baseContentSchema = z.object({
  title: z.string().max(60, "Title can't exceed 60 characters").min(3),
  description: z.string().max(160, "Description can't exceed 160 characters").min(10),
  href: z.string().optional(),
  image: z.object({ src: z.string().url(), alt: z.string() }).optional(),
  keywords: z.union([z.string(), z.array(z.string())]).optional(),
  draft: z.boolean().default(false),
});

// Utility function to add link transformation
const withLinkTransformation = <T extends z.ZodTypeAny>(schema: T) =>
  schema.transform((data) => ({
    ...data,
    link: data.href ?? `${slugify(data.title)}`,
  }));

export const docSchema = baseContentSchema.extend({
  category: z.string(),
  position: z.number().optional(),
  authors: z.string().optional(),
}).transform(withLinkTransformation);

export const blogSchema = baseContentSchema.extend({
  pubDate: z.date().transform((str: Date) => new Date(str)),
  authors: z.string().optional(),
}).transform(withLinkTransformation);

export const authorSchema = z.object({
  name: z.string(),
  bio: z.string().optional(),
  email: z.string().email().optional(),
  role: z.string().optional(),
  profile: z.string().url(),
}).strict();
