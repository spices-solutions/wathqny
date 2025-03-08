import { getCollection } from 'astro:content'

async function getPosts() {
  const posts = await getCollection('blog')
  return posts
    .sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf())
    .map((post) => ({
      title: post.data.title,
      link: `/blog/${post.data.link}`,
    }))
}

async function getDocs() {
  const docs = await getCollection('docs')
  return docs.map((doc) => ({
    title: doc.data.title,
    link: `/docs/${doc.data.link}`,
  }))
}

async function getPostsAndDocs() {
  const [posts, docs] = await Promise.all([getPosts(), getDocs()])
  return { posts, docs }
}

export async function GET() {
  const data = await getPostsAndDocs()
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
