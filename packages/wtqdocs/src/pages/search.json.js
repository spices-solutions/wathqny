import { getCollection } from 'astro:content'

async function getPosts() {
  const posts = (await getCollection('blog')).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
  )
  const blog = posts.map((post) => ({
    title: post.data.title,
    date: post.data.pubDate,
    body: post.body,
    link: post.data.link,
  }))
  return {
    posts: blog,
  }
}

async function getDocs() {
  const docs = await getCollection('docs')

  return docs.map((doc) => ({
    title: doc.data.title,
    // body: doc.body,
    link: doc.data.link,
  }))
}

async function getPostsAndDocs() {
  const docsData = await getCollection('docs')
  const docs = docsData.map((doc) => ({
    title: doc.data.title,
    // body: doc.body,
    link: doc.data.link,
  }))

  const postsData = (await getCollection('blog')).sort(
    (a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf(),
  )

  const posts = postsData.map((post) => ({
    title: post.data.title,
    date: post.data.pubDate,
    body: post.body,
    link: post.data.link,
  }))

  return {
    posts: posts,
    docs: docs,
  }
}

export async function GET() {
  return new Response(JSON.stringify(await getPostsAndDocs()), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
