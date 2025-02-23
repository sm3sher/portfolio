import { getSdk } from '@/app/lib/contentful/generated/sdk';
import { endpoint, requestConfig } from '@/codegen';
import { GraphQLClient } from 'graphql-request';

const contentfulClient = new GraphQLClient(endpoint, requestConfig);

export default getSdk(contentfulClient);
