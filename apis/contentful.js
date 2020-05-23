import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_TOKEN,
});

export const getMainPage = async () => {
  const entries = await client.getEntry(process.env.CONTENTFUL_PAGE_ID);

  return entries.fields;
};
