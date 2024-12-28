import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type About = Entry & _Node & {
  __typename?: 'About';
  _id: Scalars['ID']['output'];
  age?: Maybe<Scalars['DateTime']['output']>;
  ageStatementPrefix?: Maybe<Scalars['String']['output']>;
  ageStatementSuffix?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  experienceMetricsCollection?: Maybe<AboutExperienceMetricsCollection>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<AboutLinkingCollections>;
  locationStatement?: Maybe<Scalars['String']['output']>;
  passionStatement?: Maybe<Scalars['String']['output']>;
  professionalTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutAgeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutAgeStatementPrefixArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutAgeStatementSuffixArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutExperienceMetricsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AboutExperienceMetricsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetricFilter>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutLocationStatementArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutPassionStatementArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutProfessionalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** About content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/about) */
export type AboutTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AboutCollection = {
  __typename?: 'AboutCollection';
  items: Array<Maybe<About>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AboutExperienceMetricsCollection = {
  __typename?: 'AboutExperienceMetricsCollection';
  items: Array<Maybe<Metric>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum AboutExperienceMetricsCollectionOrder {
  LabelPrefixAsc = 'labelPrefix_ASC',
  LabelPrefixDesc = 'labelPrefix_DESC',
  LabelSuffixAsc = 'labelSuffix_ASC',
  LabelSuffixDesc = 'labelSuffix_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AboutFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutFilter>>>;
  age?: InputMaybe<Scalars['DateTime']['input']>;
  ageStatementPrefix?: InputMaybe<Scalars['String']['input']>;
  ageStatementPrefix_contains?: InputMaybe<Scalars['String']['input']>;
  ageStatementPrefix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ageStatementPrefix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ageStatementPrefix_not?: InputMaybe<Scalars['String']['input']>;
  ageStatementPrefix_not_contains?: InputMaybe<Scalars['String']['input']>;
  ageStatementPrefix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ageStatementSuffix?: InputMaybe<Scalars['String']['input']>;
  ageStatementSuffix_contains?: InputMaybe<Scalars['String']['input']>;
  ageStatementSuffix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ageStatementSuffix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ageStatementSuffix_not?: InputMaybe<Scalars['String']['input']>;
  ageStatementSuffix_not_contains?: InputMaybe<Scalars['String']['input']>;
  ageStatementSuffix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  age_exists?: InputMaybe<Scalars['Boolean']['input']>;
  age_gt?: InputMaybe<Scalars['DateTime']['input']>;
  age_gte?: InputMaybe<Scalars['DateTime']['input']>;
  age_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  age_lt?: InputMaybe<Scalars['DateTime']['input']>;
  age_lte?: InputMaybe<Scalars['DateTime']['input']>;
  age_not?: InputMaybe<Scalars['DateTime']['input']>;
  age_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  experienceMetrics?: InputMaybe<CfMetricNestedFilter>;
  experienceMetricsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locationStatement?: InputMaybe<Scalars['String']['input']>;
  locationStatement_contains?: InputMaybe<Scalars['String']['input']>;
  locationStatement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  locationStatement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  locationStatement_not?: InputMaybe<Scalars['String']['input']>;
  locationStatement_not_contains?: InputMaybe<Scalars['String']['input']>;
  locationStatement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  passionStatement?: InputMaybe<Scalars['String']['input']>;
  passionStatement_contains?: InputMaybe<Scalars['String']['input']>;
  passionStatement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  passionStatement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  passionStatement_not?: InputMaybe<Scalars['String']['input']>;
  passionStatement_not_contains?: InputMaybe<Scalars['String']['input']>;
  passionStatement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  professionalTitle?: InputMaybe<Scalars['String']['input']>;
  professionalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  professionalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  professionalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  professionalTitle_not?: InputMaybe<Scalars['String']['input']>;
  professionalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  professionalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutLinkingCollections = {
  __typename?: 'AboutLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AboutLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AboutOrder {
  AgeStatementPrefixAsc = 'ageStatementPrefix_ASC',
  AgeStatementPrefixDesc = 'ageStatementPrefix_DESC',
  AgeStatementSuffixAsc = 'ageStatementSuffix_ASC',
  AgeStatementSuffixDesc = 'ageStatementSuffix_DESC',
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  LocationStatementAsc = 'locationStatement_ASC',
  LocationStatementDesc = 'locationStatement_DESC',
  PassionStatementAsc = 'passionStatement_ASC',
  PassionStatementDesc = 'passionStatement_DESC',
  ProfessionalTitleAsc = 'professionalTitle_ASC',
  ProfessionalTitleDesc = 'professionalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  aboutCollection?: Maybe<AboutCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
};


export type AssetLinkingCollectionsAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type Footer = Entry & _Node & {
  __typename?: 'Footer';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  footerItemCollection?: Maybe<FooterFooterItemCollection>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterFooterItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterFooterItemCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterItemFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  footerItem?: InputMaybe<CfFooterItemNestedFilter>;
  footerItemCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterFooterItemCollection = {
  __typename?: 'FooterFooterItemCollection';
  items: Array<Maybe<FooterItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterFooterItemCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footerItem) */
export type FooterItem = Entry & _Node & {
  __typename?: 'FooterItem';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FooterItemLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footerItem) */
export type FooterItemHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footerItem) */
export type FooterItemLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footerItem) */
export type FooterItemLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterItemCollection = {
  __typename?: 'FooterItemCollection';
  items: Array<Maybe<FooterItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterItemFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterItemFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterItemFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterItemLinkingCollections = {
  __typename?: 'FooterItemLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
};


export type FooterItemLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterItemLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterItemLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FooterItemLinkingCollectionsFooterCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterItemOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FooterOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type Home = Entry & _Node & {
  __typename?: 'Home';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaButtonLabel?: Maybe<Scalars['String']['output']>;
  greeting?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  introDescription?: Maybe<Scalars['String']['output']>;
  introHeadingHighlight?: Maybe<Scalars['String']['output']>;
  introHeadingMain?: Maybe<Scalars['String']['output']>;
  introSubheading?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HomeLinkingCollections>;
  sys: Sys;
};


/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type HomeCtaButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type HomeGreetingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type HomeImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type HomeIntroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type HomeIntroHeadingHighlightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type HomeIntroHeadingMainArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type HomeIntroSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Home content [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/home) */
export type HomeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeCollection = {
  __typename?: 'HomeCollection';
  items: Array<Maybe<Home>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HomeFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaButtonLabel?: InputMaybe<Scalars['String']['input']>;
  ctaButtonLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ctaButtonLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaButtonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaButtonLabel_not?: InputMaybe<Scalars['String']['input']>;
  ctaButtonLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaButtonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  greeting?: InputMaybe<Scalars['String']['input']>;
  greeting_contains?: InputMaybe<Scalars['String']['input']>;
  greeting_exists?: InputMaybe<Scalars['Boolean']['input']>;
  greeting_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  greeting_not?: InputMaybe<Scalars['String']['input']>;
  greeting_not_contains?: InputMaybe<Scalars['String']['input']>;
  greeting_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  introDescription?: InputMaybe<Scalars['String']['input']>;
  introDescription_contains?: InputMaybe<Scalars['String']['input']>;
  introDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  introDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introDescription_not?: InputMaybe<Scalars['String']['input']>;
  introDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  introDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introHeadingHighlight?: InputMaybe<Scalars['String']['input']>;
  introHeadingHighlight_contains?: InputMaybe<Scalars['String']['input']>;
  introHeadingHighlight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  introHeadingHighlight_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introHeadingHighlight_not?: InputMaybe<Scalars['String']['input']>;
  introHeadingHighlight_not_contains?: InputMaybe<Scalars['String']['input']>;
  introHeadingHighlight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introHeadingMain?: InputMaybe<Scalars['String']['input']>;
  introHeadingMain_contains?: InputMaybe<Scalars['String']['input']>;
  introHeadingMain_exists?: InputMaybe<Scalars['Boolean']['input']>;
  introHeadingMain_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introHeadingMain_not?: InputMaybe<Scalars['String']['input']>;
  introHeadingMain_not_contains?: InputMaybe<Scalars['String']['input']>;
  introHeadingMain_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introSubheading?: InputMaybe<Scalars['String']['input']>;
  introSubheading_contains?: InputMaybe<Scalars['String']['input']>;
  introSubheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  introSubheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introSubheading_not?: InputMaybe<Scalars['String']['input']>;
  introSubheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  introSubheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type HomeLinkingCollections = {
  __typename?: 'HomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HomeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HomeOrder {
  CtaButtonLabelAsc = 'ctaButtonLabel_ASC',
  CtaButtonLabelDesc = 'ctaButtonLabel_DESC',
  GreetingAsc = 'greeting_ASC',
  GreetingDesc = 'greeting_DESC',
  IntroHeadingHighlightAsc = 'introHeadingHighlight_ASC',
  IntroHeadingHighlightDesc = 'introHeadingHighlight_DESC',
  IntroHeadingMainAsc = 'introHeadingMain_ASC',
  IntroHeadingMainDesc = 'introHeadingMain_DESC',
  IntroSubheadingAsc = 'introSubheading_ASC',
  IntroSubheadingDesc = 'introSubheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaData) */
export type MetaData = Entry & _Node & {
  __typename?: 'MetaData';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MetaDataLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaData) */
export type MetaDataDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaData) */
export type MetaDataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaData) */
export type MetaDataTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MetaDataCollection = {
  __typename?: 'MetaDataCollection';
  items: Array<Maybe<MetaData>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MetaDataFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetaDataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetaDataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MetaDataLinkingCollections = {
  __typename?: 'MetaDataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MetaDataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MetaDataOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metric) */
export type Metric = Entry & _Node & {
  __typename?: 'Metric';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  labelPrefix?: Maybe<Scalars['String']['output']>;
  labelSuffix?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MetricLinkingCollections>;
  startYear?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metric) */
export type MetricLabelPrefixArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metric) */
export type MetricLabelSuffixArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metric) */
export type MetricLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metric) */
export type MetricStartYearArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MetricCollection = {
  __typename?: 'MetricCollection';
  items: Array<Maybe<Metric>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MetricFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetricFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetricFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  labelPrefix?: InputMaybe<Scalars['String']['input']>;
  labelPrefix_contains?: InputMaybe<Scalars['String']['input']>;
  labelPrefix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  labelPrefix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labelPrefix_not?: InputMaybe<Scalars['String']['input']>;
  labelPrefix_not_contains?: InputMaybe<Scalars['String']['input']>;
  labelPrefix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labelSuffix?: InputMaybe<Scalars['String']['input']>;
  labelSuffix_contains?: InputMaybe<Scalars['String']['input']>;
  labelSuffix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  labelSuffix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labelSuffix_not?: InputMaybe<Scalars['String']['input']>;
  labelSuffix_not_contains?: InputMaybe<Scalars['String']['input']>;
  labelSuffix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
  startYear_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startYear_gt?: InputMaybe<Scalars['Int']['input']>;
  startYear_gte?: InputMaybe<Scalars['Int']['input']>;
  startYear_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startYear_lt?: InputMaybe<Scalars['Int']['input']>;
  startYear_lte?: InputMaybe<Scalars['Int']['input']>;
  startYear_not?: InputMaybe<Scalars['Int']['input']>;
  startYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MetricLinkingCollections = {
  __typename?: 'MetricLinkingCollections';
  aboutCollection?: Maybe<AboutCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type MetricLinkingCollectionsAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetricLinkingCollectionsAboutCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MetricLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MetricLinkingCollectionsAboutCollectionOrder {
  AgeStatementPrefixAsc = 'ageStatementPrefix_ASC',
  AgeStatementPrefixDesc = 'ageStatementPrefix_DESC',
  AgeStatementSuffixAsc = 'ageStatementSuffix_ASC',
  AgeStatementSuffixDesc = 'ageStatementSuffix_DESC',
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  LocationStatementAsc = 'locationStatement_ASC',
  LocationStatementDesc = 'locationStatement_DESC',
  PassionStatementAsc = 'passionStatement_ASC',
  PassionStatementDesc = 'passionStatement_DESC',
  ProfessionalTitleAsc = 'professionalTitle_ASC',
  ProfessionalTitleDesc = 'professionalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MetricOrder {
  LabelPrefixAsc = 'labelPrefix_ASC',
  LabelPrefixDesc = 'labelPrefix_DESC',
  LabelSuffixAsc = 'labelSuffix_ASC',
  LabelSuffixDesc = 'labelSuffix_DESC',
  StartYearAsc = 'startYear_ASC',
  StartYearDesc = 'startYear_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  about?: Maybe<About>;
  aboutCollection?: Maybe<AboutCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  footerItem?: Maybe<FooterItem>;
  footerItemCollection?: Maybe<FooterItemCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  metaData?: Maybe<MetaData>;
  metaDataCollection?: Maybe<MetaDataCollection>;
  metric?: Maybe<Metric>;
  metricCollection?: Maybe<MetricCollection>;
  serviceBanner?: Maybe<ServiceBanner>;
  serviceBannerCollection?: Maybe<ServiceBannerCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAboutArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AboutOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AboutFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryFooterItemArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterItemCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterItemOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterItemFilter>;
};


export type QueryHomeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HomeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomeFilter>;
};


export type QueryMetaDataArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMetaDataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetaDataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetaDataFilter>;
};


export type QueryMetricArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMetricCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetricOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetricFilter>;
};


export type QueryServiceBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServiceBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceBannerFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/serviceBanner) */
export type ServiceBanner = Entry & _Node & {
  __typename?: 'ServiceBanner';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ServiceBannerLinkingCollections>;
  services?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/serviceBanner) */
export type ServiceBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/serviceBanner) */
export type ServiceBannerServicesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceBannerCollection = {
  __typename?: 'ServiceBannerCollection';
  items: Array<Maybe<ServiceBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceBannerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  services_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  services_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  services_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  services_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ServiceBannerLinkingCollections = {
  __typename?: 'ServiceBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServiceBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ServiceBannerOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfFooterItemNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterItemNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterItemNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_contains?: InputMaybe<Scalars['String']['input']>;
  label_exists?: InputMaybe<Scalars['Boolean']['input']>;
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_not?: InputMaybe<Scalars['String']['input']>;
  label_not_contains?: InputMaybe<Scalars['String']['input']>;
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfMetricNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMetricNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMetricNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  labelPrefix?: InputMaybe<Scalars['String']['input']>;
  labelPrefix_contains?: InputMaybe<Scalars['String']['input']>;
  labelPrefix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  labelPrefix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labelPrefix_not?: InputMaybe<Scalars['String']['input']>;
  labelPrefix_not_contains?: InputMaybe<Scalars['String']['input']>;
  labelPrefix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labelSuffix?: InputMaybe<Scalars['String']['input']>;
  labelSuffix_contains?: InputMaybe<Scalars['String']['input']>;
  labelSuffix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  labelSuffix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labelSuffix_not?: InputMaybe<Scalars['String']['input']>;
  labelSuffix_not_contains?: InputMaybe<Scalars['String']['input']>;
  labelSuffix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startYear?: InputMaybe<Scalars['Int']['input']>;
  startYear_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startYear_gt?: InputMaybe<Scalars['Int']['input']>;
  startYear_gte?: InputMaybe<Scalars['Int']['input']>;
  startYear_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startYear_lt?: InputMaybe<Scalars['Int']['input']>;
  startYear_lte?: InputMaybe<Scalars['Int']['input']>;
  startYear_not?: InputMaybe<Scalars['Int']['input']>;
  startYear_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AboutContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type AboutContentQuery = { __typename?: 'Query', aboutCollection?: { __typename?: 'AboutCollection', items: Array<{ __typename?: 'About', title?: string | null, ageStatementPrefix?: string | null, age?: any | null, ageStatementSuffix?: string | null, professionalTitle?: string | null, locationStatement?: string | null, passionStatement?: string | null, description?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null, experienceMetricsCollection?: { __typename?: 'AboutExperienceMetricsCollection', items: Array<{ __typename?: 'Metric', startYear?: number | null, labelPrefix?: string | null, labelSuffix?: string | null } | null> } | null } | null> } | null };

export type FooterContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type FooterContentQuery = { __typename?: 'Query', footerCollection?: { __typename?: 'FooterCollection', items: Array<{ __typename?: 'Footer', footerItemCollection?: { __typename?: 'FooterFooterItemCollection', items: Array<{ __typename?: 'FooterItem', label?: string | null, href?: string | null } | null> } | null } | null> } | null };

export type HomeContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type HomeContentQuery = { __typename?: 'Query', homeCollection?: { __typename?: 'HomeCollection', items: Array<{ __typename?: 'Home', greeting?: string | null, introHeadingMain?: string | null, introHeadingHighlight?: string | null, introSubheading?: string | null, introDescription?: string | null, ctaButtonLabel?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null } | null> } | null };

export type MetadataContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type MetadataContentQuery = { __typename?: 'Query', metaDataCollection?: { __typename?: 'MetaDataCollection', items: Array<{ __typename?: 'MetaData', title?: string | null, description?: string | null } | null> } | null };

export type ServiceBannerContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type ServiceBannerContentQuery = { __typename?: 'Query', serviceBannerCollection?: { __typename?: 'ServiceBannerCollection', items: Array<{ __typename?: 'ServiceBanner', services?: Array<string | null> | null } | null> } | null };


export const AboutContentDocument = gql`
    query aboutContent($locale: String) {
  aboutCollection(limit: 1, locale: $locale) {
    items {
      image {
        url
        width
        height
        description
      }
      title
      ageStatementPrefix
      age
      ageStatementSuffix
      professionalTitle
      locationStatement
      passionStatement
      description
      experienceMetricsCollection {
        items {
          ... on Metric {
            startYear
            labelPrefix
            labelSuffix
          }
        }
      }
    }
  }
}
    `;
export const FooterContentDocument = gql`
    query footerContent($locale: String) {
  footerCollection(limit: 1, locale: $locale) {
    items {
      footerItemCollection {
        items {
          label
          href
        }
      }
    }
  }
}
    `;
export const HomeContentDocument = gql`
    query homeContent($locale: String) {
  homeCollection(limit: 1, locale: $locale) {
    items {
      greeting
      introHeadingMain
      introHeadingHighlight
      introSubheading
      introDescription
      ctaButtonLabel
      image {
        url
        width
        height
        description
      }
    }
  }
}
    `;
export const MetadataContentDocument = gql`
    query metadataContent($locale: String) {
  metaDataCollection(limit: 1, locale: $locale) {
    items {
      title
      description
    }
  }
}
    `;
export const ServiceBannerContentDocument = gql`
    query serviceBannerContent($locale: String) {
  serviceBannerCollection(limit: 1, locale: $locale) {
    items {
      services
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    aboutContent(variables?: AboutContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AboutContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AboutContentQuery>(AboutContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'aboutContent', 'query', variables);
    },
    footerContent(variables?: FooterContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<FooterContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FooterContentQuery>(FooterContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'footerContent', 'query', variables);
    },
    homeContent(variables?: HomeContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<HomeContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomeContentQuery>(HomeContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'homeContent', 'query', variables);
    },
    metadataContent(variables?: MetadataContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MetadataContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetadataContentQuery>(MetadataContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metadataContent', 'query', variables);
    },
    serviceBannerContent(variables?: ServiceBannerContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServiceBannerContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServiceBannerContentQuery>(ServiceBannerContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'serviceBannerContent', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;