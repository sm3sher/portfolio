import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@/app/lib/contentful/generated/sdk';
import { endpoint, requestConfig } from '@/codegen';

const contentfulClient = new GraphQLClient(endpoint, requestConfig);

export default getSdk(contentfulClient);
