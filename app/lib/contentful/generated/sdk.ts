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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type Contact = Entry & _Node & {
  __typename?: 'Contact';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContactLinkingCollections>;
  subTitleHighlight?: Maybe<Scalars['String']['output']>;
  subTitleMain?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type ContactDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type ContactLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type ContactSubTitleHighlightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type ContactSubTitleMainArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type ContactTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContactCollection = {
  __typename?: 'ContactCollection';
  items: Array<Maybe<Contact>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContactFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleHighlight?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleHighlight_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleHighlight_not?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleMain?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleMain_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleMain_not?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactLinkingCollections = {
  __typename?: 'ContactLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ContactLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContactOrder {
  SubTitleHighlightAsc = 'subTitleHighlight_ASC',
  SubTitleHighlightDesc = 'subTitleHighlight_DESC',
  SubTitleMainAsc = 'subTitleMain_ASC',
  SubTitleMainDesc = 'subTitleMain_DESC',
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
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<MetaDataLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaData) */
export type MetaDataDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaData) */
export type MetaDataKeywordsArgs = {
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
  keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type Navbar = Entry & _Node & {
  __typename?: 'Navbar';
  _id: Scalars['ID']['output'];
  aboutLabel?: Maybe<Scalars['String']['output']>;
  contactLabel?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  deFlagDescription?: Maybe<Scalars['String']['output']>;
  homeLabel?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavbarLinkingCollections>;
  servicesLabel?: Maybe<Scalars['String']['output']>;
  switchThemeLabel?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  usFlagDescription?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type NavbarAboutLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type NavbarContactLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type NavbarDeFlagDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type NavbarHomeLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type NavbarLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type NavbarServicesLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type NavbarSwitchThemeLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/navbar) */
export type NavbarUsFlagDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NavbarCollection = {
  __typename?: 'NavbarCollection';
  items: Array<Maybe<Navbar>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavbarFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavbarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavbarFilter>>>;
  aboutLabel?: InputMaybe<Scalars['String']['input']>;
  aboutLabel_contains?: InputMaybe<Scalars['String']['input']>;
  aboutLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  aboutLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  aboutLabel_not?: InputMaybe<Scalars['String']['input']>;
  aboutLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  aboutLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactLabel?: InputMaybe<Scalars['String']['input']>;
  contactLabel_contains?: InputMaybe<Scalars['String']['input']>;
  contactLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactLabel_not?: InputMaybe<Scalars['String']['input']>;
  contactLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  deFlagDescription?: InputMaybe<Scalars['String']['input']>;
  deFlagDescription_contains?: InputMaybe<Scalars['String']['input']>;
  deFlagDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  deFlagDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  deFlagDescription_not?: InputMaybe<Scalars['String']['input']>;
  deFlagDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  deFlagDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homeLabel?: InputMaybe<Scalars['String']['input']>;
  homeLabel_contains?: InputMaybe<Scalars['String']['input']>;
  homeLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  homeLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  homeLabel_not?: InputMaybe<Scalars['String']['input']>;
  homeLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  homeLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  servicesLabel?: InputMaybe<Scalars['String']['input']>;
  servicesLabel_contains?: InputMaybe<Scalars['String']['input']>;
  servicesLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  servicesLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  servicesLabel_not?: InputMaybe<Scalars['String']['input']>;
  servicesLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  servicesLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  switchThemeLabel?: InputMaybe<Scalars['String']['input']>;
  switchThemeLabel_contains?: InputMaybe<Scalars['String']['input']>;
  switchThemeLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  switchThemeLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  switchThemeLabel_not?: InputMaybe<Scalars['String']['input']>;
  switchThemeLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  switchThemeLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  usFlagDescription?: InputMaybe<Scalars['String']['input']>;
  usFlagDescription_contains?: InputMaybe<Scalars['String']['input']>;
  usFlagDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  usFlagDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  usFlagDescription_not?: InputMaybe<Scalars['String']['input']>;
  usFlagDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  usFlagDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavbarLinkingCollections = {
  __typename?: 'NavbarLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavbarLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavbarOrder {
  AboutLabelAsc = 'aboutLabel_ASC',
  AboutLabelDesc = 'aboutLabel_DESC',
  ContactLabelAsc = 'contactLabel_ASC',
  ContactLabelDesc = 'contactLabel_DESC',
  DeFlagDescriptionAsc = 'deFlagDescription_ASC',
  DeFlagDescriptionDesc = 'deFlagDescription_DESC',
  HomeLabelAsc = 'homeLabel_ASC',
  HomeLabelDesc = 'homeLabel_DESC',
  ServicesLabelAsc = 'servicesLabel_ASC',
  ServicesLabelDesc = 'servicesLabel_DESC',
  SwitchThemeLabelAsc = 'switchThemeLabel_ASC',
  SwitchThemeLabelDesc = 'switchThemeLabel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UsFlagDescriptionAsc = 'usFlagDescription_ASC',
  UsFlagDescriptionDesc = 'usFlagDescription_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notFound) */
export type NotFound = Entry & _Node & {
  __typename?: 'NotFound';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  ctaButtonLabel?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NotFoundLinkingCollections>;
  subTitleHighlight?: Maybe<Scalars['String']['output']>;
  subTitleMain?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notFound) */
export type NotFoundCtaButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notFound) */
export type NotFoundDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notFound) */
export type NotFoundLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notFound) */
export type NotFoundSubTitleHighlightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notFound) */
export type NotFoundSubTitleMainArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notFound) */
export type NotFoundTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NotFoundCollection = {
  __typename?: 'NotFoundCollection';
  items: Array<Maybe<NotFound>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NotFoundFilter = {
  AND?: InputMaybe<Array<InputMaybe<NotFoundFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NotFoundFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaButtonLabel?: InputMaybe<Scalars['String']['input']>;
  ctaButtonLabel_contains?: InputMaybe<Scalars['String']['input']>;
  ctaButtonLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaButtonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaButtonLabel_not?: InputMaybe<Scalars['String']['input']>;
  ctaButtonLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaButtonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleHighlight?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleHighlight_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleHighlight_not?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleMain?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleMain_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleMain_not?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NotFoundLinkingCollections = {
  __typename?: 'NotFoundLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NotFoundLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NotFoundOrder {
  CtaButtonLabelAsc = 'ctaButtonLabel_ASC',
  CtaButtonLabelDesc = 'ctaButtonLabel_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SubTitleHighlightAsc = 'subTitleHighlight_ASC',
  SubTitleHighlightDesc = 'subTitleHighlight_DESC',
  SubTitleMainAsc = 'subTitleMain_ASC',
  SubTitleMainDesc = 'subTitleMain_DESC',
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

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  about?: Maybe<About>;
  aboutCollection?: Maybe<AboutCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  contact?: Maybe<Contact>;
  contactCollection?: Maybe<ContactCollection>;
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
  navbar?: Maybe<Navbar>;
  navbarCollection?: Maybe<NavbarCollection>;
  notFound?: Maybe<NotFound>;
  notFoundCollection?: Maybe<NotFoundCollection>;
  service?: Maybe<Service>;
  serviceBanner?: Maybe<ServiceBanner>;
  serviceBannerCollection?: Maybe<ServiceBannerCollection>;
  serviceCollection?: Maybe<ServiceCollection>;
  services?: Maybe<Services>;
  servicesCollection?: Maybe<ServicesCollection>;
  testimonial?: Maybe<Testimonial>;
  testimonialCollection?: Maybe<TestimonialCollection>;
  testimonials?: Maybe<Testimonials>;
  testimonialsCollection?: Maybe<TestimonialsCollection>;
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


export type QueryContactArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContactCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContactOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContactFilter>;
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


export type QueryNavbarArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavbarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavbarOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavbarFilter>;
};


export type QueryNotFoundArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNotFoundCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NotFoundOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotFoundFilter>;
};


export type QueryServiceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
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


export type QueryServiceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceFilter>;
};


export type QueryServicesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServicesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServicesFilter>;
};


export type QueryTestimonialArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialFilter>;
};


export type QueryTestimonialsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTestimonialsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/service) */
export type Service = Entry & _Node & {
  __typename?: 'Service';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  iconName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ServiceLinkingCollections>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/service) */
export type ServiceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/service) */
export type ServiceIconNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/service) */
export type ServiceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/service) */
export type ServiceTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/service) */
export type ServiceTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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

export type ServiceCollection = {
  __typename?: 'ServiceCollection';
  items: Array<Maybe<Service>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServiceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServiceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServiceFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  iconName_contains?: InputMaybe<Scalars['String']['input']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconName_not?: InputMaybe<Scalars['String']['input']>;
  iconName_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceLinkingCollections = {
  __typename?: 'ServiceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  servicesCollection?: Maybe<ServicesCollection>;
};


export type ServiceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ServiceLinkingCollectionsServicesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServiceLinkingCollectionsServicesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ServiceLinkingCollectionsServicesCollectionOrder {
  SubTitleHighlightAsc = 'subTitleHighlight_ASC',
  SubTitleHighlightDesc = 'subTitleHighlight_DESC',
  SubTitleMainAsc = 'subTitleMain_ASC',
  SubTitleMainDesc = 'subTitleMain_DESC',
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

export enum ServiceOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/services) */
export type Services = Entry & _Node & {
  __typename?: 'Services';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ServicesLinkingCollections>;
  serviceEntriesCollection?: Maybe<ServicesServiceEntriesCollection>;
  subTitleHighlight?: Maybe<Scalars['String']['output']>;
  subTitleMain?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/services) */
export type ServicesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/services) */
export type ServicesServiceEntriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ServicesServiceEntriesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/services) */
export type ServicesSubTitleHighlightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/services) */
export type ServicesSubTitleMainArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/services) */
export type ServicesTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ServicesCollection = {
  __typename?: 'ServicesCollection';
  items: Array<Maybe<Services>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ServicesFilter = {
  AND?: InputMaybe<Array<InputMaybe<ServicesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ServicesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  serviceEntries?: InputMaybe<CfServiceNestedFilter>;
  serviceEntriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleHighlight?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleHighlight_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleHighlight_not?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleHighlight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleMain?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleMain_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleMain_not?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleMain_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServicesLinkingCollections = {
  __typename?: 'ServicesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ServicesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ServicesOrder {
  SubTitleHighlightAsc = 'subTitleHighlight_ASC',
  SubTitleHighlightDesc = 'subTitleHighlight_DESC',
  SubTitleMainAsc = 'subTitleMain_ASC',
  SubTitleMainDesc = 'subTitleMain_DESC',
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

export type ServicesServiceEntriesCollection = {
  __typename?: 'ServicesServiceEntriesCollection';
  items: Array<Maybe<Service>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ServicesServiceEntriesCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IconNameAsc = 'iconName_ASC',
  IconNameDesc = 'iconName_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonial) */
export type Testimonial = Entry & _Node & {
  __typename?: 'Testimonial';
  _id: Scalars['ID']['output'];
  author?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  jobTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TestimonialLinkingCollections>;
  quote?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonial) */
export type TestimonialAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonial) */
export type TestimonialJobTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonial) */
export type TestimonialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonial) */
export type TestimonialQuoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialCollection = {
  __typename?: 'TestimonialCollection';
  items: Array<Maybe<Testimonial>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TestimonialFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialFilter>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  jobTitle_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  jobTitle_not?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TestimonialLinkingCollections = {
  __typename?: 'TestimonialLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  testimonialsCollection?: Maybe<TestimonialsCollection>;
};


export type TestimonialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TestimonialLinkingCollectionsTestimonialsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialLinkingCollectionsTestimonialsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TestimonialLinkingCollectionsTestimonialsCollectionOrder {
  NextSlideLabelAsc = 'nextSlideLabel_ASC',
  NextSlideLabelDesc = 'nextSlideLabel_DESC',
  PrevSlideLabelAsc = 'prevSlideLabel_ASC',
  PrevSlideLabelDesc = 'prevSlideLabel_DESC',
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

export enum TestimonialOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonials) */
export type Testimonials = Entry & _Node & {
  __typename?: 'Testimonials';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<TestimonialsLinkingCollections>;
  nextSlideLabel?: Maybe<Scalars['String']['output']>;
  prevSlideLabel?: Maybe<Scalars['String']['output']>;
  quotesCollection?: Maybe<TestimonialsQuotesCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonials) */
export type TestimonialsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonials) */
export type TestimonialsNextSlideLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonials) */
export type TestimonialsPrevSlideLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonials) */
export type TestimonialsQuotesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestimonialsQuotesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestimonialFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonials) */
export type TestimonialsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TestimonialsCollection = {
  __typename?: 'TestimonialsCollection';
  items: Array<Maybe<Testimonials>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TestimonialsFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  nextSlideLabel?: InputMaybe<Scalars['String']['input']>;
  nextSlideLabel_contains?: InputMaybe<Scalars['String']['input']>;
  nextSlideLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nextSlideLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nextSlideLabel_not?: InputMaybe<Scalars['String']['input']>;
  nextSlideLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  nextSlideLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  prevSlideLabel?: InputMaybe<Scalars['String']['input']>;
  prevSlideLabel_contains?: InputMaybe<Scalars['String']['input']>;
  prevSlideLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  prevSlideLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  prevSlideLabel_not?: InputMaybe<Scalars['String']['input']>;
  prevSlideLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  prevSlideLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quotes?: InputMaybe<CfTestimonialNestedFilter>;
  quotesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialsLinkingCollections = {
  __typename?: 'TestimonialsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestimonialsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TestimonialsOrder {
  NextSlideLabelAsc = 'nextSlideLabel_ASC',
  NextSlideLabelDesc = 'nextSlideLabel_DESC',
  PrevSlideLabelAsc = 'prevSlideLabel_ASC',
  PrevSlideLabelDesc = 'prevSlideLabel_DESC',
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

export type TestimonialsQuotesCollection = {
  __typename?: 'TestimonialsQuotesCollection';
  items: Array<Maybe<Testimonial>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TestimonialsQuotesCollectionOrder {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

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

export type CfServiceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfServiceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfServiceNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconName?: InputMaybe<Scalars['String']['input']>;
  iconName_contains?: InputMaybe<Scalars['String']['input']>;
  iconName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  iconName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  iconName_not?: InputMaybe<Scalars['String']['input']>;
  iconName_not_contains?: InputMaybe<Scalars['String']['input']>;
  iconName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTestimonialNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTestimonialNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTestimonialNestedFilter>>>;
  author?: InputMaybe<Scalars['String']['input']>;
  author_contains?: InputMaybe<Scalars['String']['input']>;
  author_exists?: InputMaybe<Scalars['Boolean']['input']>;
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  author_not?: InputMaybe<Scalars['String']['input']>;
  author_not_contains?: InputMaybe<Scalars['String']['input']>;
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  jobTitle_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  jobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  jobTitle_not?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  jobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AboutContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type AboutContentQuery = { __typename?: 'Query', aboutCollection?: { __typename?: 'AboutCollection', items: Array<{ __typename?: 'About', title?: string | null, ageStatementPrefix?: string | null, age?: any | null, ageStatementSuffix?: string | null, professionalTitle?: string | null, locationStatement?: string | null, passionStatement?: string | null, description?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null, experienceMetricsCollection?: { __typename?: 'AboutExperienceMetricsCollection', items: Array<{ __typename?: 'Metric', startYear?: number | null, labelPrefix?: string | null, labelSuffix?: string | null } | null> } | null } | null> } | null };

export type ContactContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type ContactContentQuery = { __typename?: 'Query', contactCollection?: { __typename?: 'ContactCollection', items: Array<{ __typename?: 'Contact', title?: string | null, subTitleMain?: string | null, subTitleHighlight?: string | null, description?: string | null } | null> } | null, testimonialsCollection?: { __typename?: 'TestimonialsCollection', items: Array<{ __typename?: 'Testimonials', title?: string | null, prevSlideLabel?: string | null, nextSlideLabel?: string | null, quotesCollection?: { __typename?: 'TestimonialsQuotesCollection', items: Array<{ __typename?: 'Testimonial', quote?: string | null, author?: string | null, jobTitle?: string | null } | null> } | null } | null> } | null };

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


export type MetadataContentQuery = { __typename?: 'Query', metaDataCollection?: { __typename?: 'MetaDataCollection', items: Array<{ __typename?: 'MetaData', title?: string | null, description?: string | null, keywords?: Array<string | null> | null } | null> } | null };

export type NavbarContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type NavbarContentQuery = { __typename?: 'Query', navbarCollection?: { __typename?: 'NavbarCollection', items: Array<{ __typename?: 'Navbar', usFlagDescription?: string | null, deFlagDescription?: string | null, homeLabel?: string | null, aboutLabel?: string | null, servicesLabel?: string | null, contactLabel?: string | null, switchThemeLabel?: string | null } | null> } | null };

export type NotFoundContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type NotFoundContentQuery = { __typename?: 'Query', notFoundCollection?: { __typename?: 'NotFoundCollection', items: Array<{ __typename?: 'NotFound', title?: string | null, subTitleMain?: string | null, subTitleHighlight?: string | null, description?: string | null, ctaButtonLabel?: string | null } | null> } | null };

export type ServiceBannerContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type ServiceBannerContentQuery = { __typename?: 'Query', serviceBannerCollection?: { __typename?: 'ServiceBannerCollection', items: Array<{ __typename?: 'ServiceBanner', services?: Array<string | null> | null } | null> } | null };

export type ServicesContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type ServicesContentQuery = { __typename?: 'Query', servicesCollection?: { __typename?: 'ServicesCollection', items: Array<{ __typename?: 'Services', title?: string | null, subTitleMain?: string | null, subTitleHighlight?: string | null, serviceEntriesCollection?: { __typename?: 'ServicesServiceEntriesCollection', items: Array<{ __typename?: 'Service', iconName?: string | null, title?: string | null, tags?: Array<string | null> | null, description?: string | null } | null> } | null } | null> } | null };


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
export const ContactContentDocument = gql`
    query contactContent($locale: String) {
  contactCollection(limit: 1, locale: $locale) {
    items {
      title
      subTitleMain
      subTitleHighlight
      description
    }
  }
  testimonialsCollection(limit: 1, locale: $locale) {
    items {
      title
      prevSlideLabel
      nextSlideLabel
      quotesCollection {
        items {
          ... on Testimonial {
            quote
            author
            jobTitle
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
      keywords
    }
  }
}
    `;
export const NavbarContentDocument = gql`
    query navbarContent($locale: String) {
  navbarCollection(limit: 1, locale: $locale) {
    items {
      usFlagDescription
      deFlagDescription
      homeLabel
      aboutLabel
      servicesLabel
      contactLabel
      switchThemeLabel
    }
  }
}
    `;
export const NotFoundContentDocument = gql`
    query notFoundContent($locale: String) {
  notFoundCollection(limit: 1, locale: $locale) {
    items {
      title
      subTitleMain
      subTitleHighlight
      description
      ctaButtonLabel
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
export const ServicesContentDocument = gql`
    query servicesContent($locale: String) {
  servicesCollection(limit: 1, locale: $locale) {
    items {
      title
      subTitleMain
      subTitleHighlight
      serviceEntriesCollection {
        items {
          ... on Service {
            iconName
            title
            tags
            description
          }
        }
      }
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
    contactContent(variables?: ContactContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ContactContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ContactContentQuery>(ContactContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'contactContent', 'query', variables);
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
    navbarContent(variables?: NavbarContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NavbarContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NavbarContentQuery>(NavbarContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'navbarContent', 'query', variables);
    },
    notFoundContent(variables?: NotFoundContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NotFoundContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NotFoundContentQuery>(NotFoundContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'notFoundContent', 'query', variables);
    },
    serviceBannerContent(variables?: ServiceBannerContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServiceBannerContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServiceBannerContentQuery>(ServiceBannerContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'serviceBannerContent', 'query', variables);
    },
    servicesContent(variables?: ServicesContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServicesContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServicesContentQuery>(ServicesContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'servicesContent', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;