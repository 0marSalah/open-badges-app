import { Badge, CreateBadgeResponse } from '../types';
import { authenticateCeramic, composeDB } from './ceramicClient';

// Define your GraphQL mutation for creating a badge
const CREATE_BADGE_MUTATION = `
  mutation CreateBadge($input: CreateBadgeInput!) {
    createBadge(input: $input) {
      document {
        id
        name
        description
      }
    }
  }
`;

// Define your GraphQL query for fetching badges
const GET_BADGES_QUERY = `
  query {
    badges {
      id
      name
      description
    }
  }
`;

export const createBadge = async (badge: Badge): Promise<Badge> => {
  console.log('0');
  await authenticateCeramic();
  console.log('1');
  const variables = { input: { content: badge } };
  console.log('2');
  const response = await composeDB.execute(
    CREATE_BADGE_MUTATION as any,
    variables
  );
  console.log('3');
  const result = response.data as unknown as CreateBadgeResponse;
  if (response.errors) {
    throw new Error(response.errors[0].message);
  }
  return result.createBadge.document;
};

export const getBadges = async (): Promise<Badge[]> => {
  //   await authenticateCeramic();

  //   const response = await composeDB.execute(GET_BADGES_QUERY as any);

  //   if (response.errors) {
  //     throw new Error(response.errors[0].message);
  //   }

  //   return response?.data?.badges as Badge[];
  return [];
};
