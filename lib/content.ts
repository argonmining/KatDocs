type Metadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary?: string;
  topicTitle?: string;
  topicSlug?: string;
  prevTitle?: string;
  prevSlug?: string;
  nextTitle?: string;
  nextSlug?: string;
};

export const docs = [
  {
    slug: 'getting-started',
    metadata: {
      title: 'Getting Started',
      publishedAt: '2023-12-27',
      summary: 'Learn how to get started with our platform',
      topicTitle: 'Introduction',
      topicSlug: 'intro',
      prevTitle: undefined,
      prevSlug: undefined,
      nextTitle: 'Next Guide',
      nextSlug: 'next-guide'
    },
    content: '...' // Your MDX content here
  },
  // ... other docs
];

export function getDocPages() {
  return docs;
}
