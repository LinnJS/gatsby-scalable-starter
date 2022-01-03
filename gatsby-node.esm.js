/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

export const sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const features = [
    {
      name: 'Push to Deploy',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
      icon: 'CloudUploadIcon',
    },
    {
      name: 'SSL Certificates',
      description: 'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
      icon: 'LockClosedIcon',
    },
    {
      name: 'Simple Queues',
      description: 'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
      icon: 'RefreshIcon',
    },
    {
      name: 'Advanced Security',
      description: 'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
      icon: 'ShieldCheckIcon',
    },
    {
      name: 'Powerful API',
      description:
        'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
      icon: 'CogIcon',
    },
    {
      name: 'Database Backups',
      description: 'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
      icon: 'ServerIcon',
    },
  ];

  features.forEach((feature) => {
    const node = {
      name: feature.name,
      description: feature.description,
      icon: feature.icon,
      id: createNodeId(`feature-${feature.name}`),
      internal: {
        type: 'feature',
        contentDigest: createContentDigest(feature),
      },
    };
    actions.createNode(node);
  });
};
