import { defineCollection } from 'astro:content'
import { blogSchema, docSchema } from 'astro-toolkit/schema'

const docs = defineCollection({
  type: 'content',
  schema: docSchema,
})

const blog = defineCollection({
  type: 'content',
  schema: blogSchema,
})

const collections = { docs, blog }

export default collections