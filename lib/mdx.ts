import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

export async function getMdxContent(slug: string) {
  try {
    const response = await fetch(`/content/docs/${slug}.mdx`)
    if (!response.ok) throw new Error('Failed to fetch MDX content')
    const source = await response.text()
    return source
  } catch (error) {
    console.error(`Error fetching MDX for ${slug}:`, error)
    return null
  }
} 