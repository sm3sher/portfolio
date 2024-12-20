import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeFooterItemFields {
  label: EntryFieldTypes.Symbol;
  href: EntryFieldTypes.Symbol;
}

export type TypeFooterItemSkeleton = EntrySkeletonType<
  TypeFooterItemFields,
  'footerItem'
>;
export type TypeFooterItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeFooterItemSkeleton, Modifiers, Locales>;
