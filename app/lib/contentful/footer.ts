import { EntryCollection } from 'contentful';
import { TypeFooterSkeleton } from '@/app/lib/contentful/types';
import contentfulClient from '@/app/lib/contentful/client';

export type FooterItem = { href: string; label: string };

const parseFooterResult = (
  footerEntry: EntryCollection<TypeFooterSkeleton, undefined, string>,
): FooterItem[] | null => {
  if (!footerEntry) {
    return null;
  }

  return footerEntry.items[0].fields.footerItem
    .filter((item) => item && 'fields' in item)
    .map((item) => ({
      href: item.fields.href,
      label: item.fields.label,
    }));
};

export const fetchFooterContent = async (): Promise<FooterItem[] | null> => {
  const client = contentfulClient();

  const footerResult = await client.getEntries<TypeFooterSkeleton>({
    content_type: 'footer',
  });

  return parseFooterResult(footerResult);
};
