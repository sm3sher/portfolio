import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypeHomeFields {
  image: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  aboutButton: EntryFieldTypes.Symbol;
  workButton: EntryFieldTypes.Symbol;
}

export type TypeHomeSkeleton = EntrySkeletonType<TypeHomeFields, 'home'>;
export type TypeHome<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHomeSkeleton, Modifiers, Locales>;
