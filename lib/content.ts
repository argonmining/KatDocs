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

type Doc = {
  slug: string;
  metadata: Metadata;
  content: string;
};

export const docs: Doc[] = [
  {
    slug: 'fundamentals',
    metadata: {
      title: 'Getting Started with Kat Pool',
      publishedAt: '2024-01-01',
      summary: 'Learn how to start mining Kaspa with Kat Pool, an open-source mining pool built by the Nacho the Kat Community.',
      topicTitle: 'Documentation',
      topicSlug: 'documentation',
      nextTitle: 'IceRiver Setup',
      nextSlug: '/documentation/mining-setup/iceriver'
    },
    content: '...'
  },
  {
    slug: 'mining-setup/iceriver',
    metadata: {
      title: 'IceRiver ASIC Setup',
      publishedAt: '2024-01-01',
      summary: 'Complete guide for setting up IceRiver KAS-X1 and KAS-X2 miners with Kat Pool',
      topicTitle: 'Documentation',
      topicSlug: 'documentation',
      prevTitle: 'Getting Started',
      prevSlug: '/documentation/fundamentals',
      nextTitle: 'Bitmain Setup',
      nextSlug: '/documentation/mining-setup/bitmain'
    },
    content: '...'
  },
  {
    slug: 'mining-setup/bitmain',
    metadata: {
      title: 'Bitmain ASIC Setup',
      publishedAt: '2024-01-01',
      summary: 'Complete guide for setting up Bitmain K1 and K2 miners with Kat Pool',
      topicTitle: 'Documentation',
      topicSlug: 'documentation',
      prevTitle: 'IceRiver Setup',
      prevSlug: '/documentation/mining-setup/iceriver',
      nextTitle: 'ASIC Optimization',
      nextSlug: '/documentation/advanced/optimization'
    },
    content: '...'
  },
  {
    slug: 'advanced/optimization',
    metadata: {
      title: 'ASIC Optimization Guide',
      publishedAt: '2024-01-01',
      summary: 'Advanced guide for optimizing your ASIC miners on Kat Pool',
      topicTitle: 'Documentation',
      topicSlug: 'documentation',
      prevTitle: 'Bitmain Setup',
      prevSlug: '/documentation/mining-setup/bitmain',
      nextTitle: 'Pool Statistics',
      nextSlug: '/documentation/advanced/monitoring'
    },
    content: '...'
  },
  {
    slug: 'advanced/monitoring',
    metadata: {
      title: 'Pool Statistics & Monitoring',
      publishedAt: '2024-01-01',
      summary: 'Understanding pool statistics and monitoring your mining performance',
      topicTitle: 'Documentation',
      topicSlug: 'documentation',
      prevTitle: 'ASIC Optimization',
      prevSlug: '/documentation/advanced/optimization'
    },
    content: '...'
  }
];

export function getDocPages(): Doc[] {
  return docs;
}
