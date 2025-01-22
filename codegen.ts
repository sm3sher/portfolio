import type { CodegenConfig } from '@graphql-codegen/cli';

export const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;
export const requestConfig = {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
};

const config: CodegenConfig = {
  schema: [
    {
      [endpoint]: requestConfig,
    },
  ],
  generates: {
    'app/lib/contentful/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'app/lib/contentful/generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
    'app/lib/contentful/generated/sdk.ts': {
      documents: ['app/lib/contentful/graphql/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        rawRequest: false,
        inlineFragmentTypes: 'combine',
        skipTypename: false,
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        preResolveTypes: true,
      },
    },
  },
};
export default config;
