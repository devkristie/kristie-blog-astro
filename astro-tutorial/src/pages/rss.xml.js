import rss, { getCollection } from 'astro:content';

export async function GET(context) {

  const posts = await getCollection("blog");

  return rss({
    title: 'Kristie Larke | Blog',
    description: 'My journey learning web development and transitioning from a different industry, along with personal life stories.',
    site: context.site,
    items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-gb</language>`,
  });
}