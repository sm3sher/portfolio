import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeFooterItemSkeleton } from './TypeFooterItem';

export interface TypeFooterFields {
  footerItem: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeFooterItemSkeleton>
  >;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, 'footer'>;
export type TypeFooter<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeFooterSkeleton, Modifiers, Locales>;
