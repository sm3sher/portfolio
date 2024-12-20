import { EntryCollection } from 'contentful';
import { TypeHomeSkeleton } from '@/app/lib/contentful/types';
import {
  ContentImage,
  parseContentfulContentImage,
} from '@/app/lib/contentful/content-image';
import contentfulClient from '@/app/lib/contentful/client';
import { Locale } from '@/i18n/routing';

type Home = {
  image: ContentImage | null;
  title: string;
  description: string;
  aboutButton: string;
  workButton: string;
};

const parseHomeResult = (
  homeEntry: EntryCollection<TypeHomeSkeleton, undefined, string>,
): Home | null => {
  if (!homeEntry) {
    return null;
  }

  return {
    image: parseContentfulContentImage(homeEntry.items[0].fields.image),
    title: homeEntry.items[0].fields.title,
    description: homeEntry.items[0].fields.description,
    aboutButton: homeEntry.items[0].fields.aboutButton,
    workButton: homeEntry.items[0].fields.workButton,
  };
};

export const fetchHomeContent = async (
  locale: Locale,
): Promise<Home | null> => {
  const client = contentfulClient();

  const homeResult = await client.getEntries<TypeHomeSkeleton>({
    locale,
    content_type: 'home',
  });

  return parseHomeResult(homeResult);
};
