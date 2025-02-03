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
  contactCollection?: Maybe<ContactCollection>;
  entryCollection?: Maybe<EntryCollection>;
  homeCollection?: Maybe<HomeCollection>;
  testimonialCollection?: Maybe<TestimonialCollection>;
};


export type AssetLinkingCollectionsAboutCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsContactCollectionArgs = {
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


export type AssetLinkingCollectionsTestimonialCollectionArgs = {
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
  avatarDescription?: Maybe<Scalars['String']['output']>;
  avatarImage?: Maybe<Asset>;
  avatarTitle?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContactLinkingCollections>;
  subTitleHighlight?: Maybe<Scalars['String']['output']>;
  subTitleMain?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type ContactAvatarDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type ContactAvatarImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/contact) */
export type ContactAvatarTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  avatarDescription?: InputMaybe<Scalars['String']['input']>;
  avatarDescription_contains?: InputMaybe<Scalars['String']['input']>;
  avatarDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  avatarDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  avatarDescription_not?: InputMaybe<Scalars['String']['input']>;
  avatarDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  avatarDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  avatarImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  avatarTitle?: InputMaybe<Scalars['String']['input']>;
  avatarTitle_contains?: InputMaybe<Scalars['String']['input']>;
  avatarTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  avatarTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  avatarTitle_not?: InputMaybe<Scalars['String']['input']>;
  avatarTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  avatarTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  AvatarDescriptionAsc = 'avatarDescription_ASC',
  AvatarDescriptionDesc = 'avatarDescription_DESC',
  AvatarTitleAsc = 'avatarTitle_ASC',
  AvatarTitleDesc = 'avatarTitle_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollection = Entry & _Node & {
  __typename?: 'DataCollection';
  _id: Scalars['ID']['output'];
  cloudflareDetails?: Maybe<Scalars['String']['output']>;
  cloudflareIntro?: Maybe<Scalars['String']['output']>;
  cloudflarePrivacyPolicy?: Maybe<Scalars['String']['output']>;
  cloudflarePrivacyPolicyLink?: Maybe<Scalars['String']['output']>;
  cloudflareTitle?: Maybe<Scalars['String']['output']>;
  contactFormIntro?: Maybe<Scalars['String']['output']>;
  contactFormSupabase?: Maybe<Scalars['String']['output']>;
  contactFormSupabasePrivacyPolicy?: Maybe<Scalars['String']['output']>;
  contactFormSupabasePrivacyPolicyLink?: Maybe<Scalars['String']['output']>;
  contactFormTitle?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  legalBasisList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  legalBasisTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<DataCollectionLinkingCollections>;
  storageDurationDetails?: Maybe<Scalars['String']['output']>;
  storageDurationTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionCloudflareDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionCloudflareIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionCloudflarePrivacyPolicyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionCloudflarePrivacyPolicyLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionCloudflareTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionContactFormIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionContactFormSupabaseArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionContactFormSupabasePrivacyPolicyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionContactFormSupabasePrivacyPolicyLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionContactFormTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionLegalBasisListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionLegalBasisTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionStorageDurationDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionStorageDurationTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/dataCollection) */
export type DataCollectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DataCollectionCollection = {
  __typename?: 'DataCollectionCollection';
  items: Array<Maybe<DataCollection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DataCollectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<DataCollectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DataCollectionFilter>>>;
  cloudflareDetails?: InputMaybe<Scalars['String']['input']>;
  cloudflareDetails_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflareDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareDetails_not?: InputMaybe<Scalars['String']['input']>;
  cloudflareDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareIntro?: InputMaybe<Scalars['String']['input']>;
  cloudflareIntro_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflareIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareIntro_not?: InputMaybe<Scalars['String']['input']>;
  cloudflareIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflarePrivacyPolicy?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflarePrivacyPolicyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflarePrivacyPolicyLink_not?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflarePrivacyPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflarePrivacyPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflarePrivacyPolicy_not?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareTitle?: InputMaybe<Scalars['String']['input']>;
  cloudflareTitle_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflareTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareTitle_not?: InputMaybe<Scalars['String']['input']>;
  cloudflareTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormIntro?: InputMaybe<Scalars['String']['input']>;
  contactFormIntro_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormIntro_not?: InputMaybe<Scalars['String']['input']>;
  contactFormIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabase?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicy?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormSupabasePrivacyPolicyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabasePrivacyPolicyLink_not?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabasePrivacyPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormSupabasePrivacyPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabasePrivacyPolicy_not?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabase_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabase_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormSupabase_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabase_not?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabase_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabase_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormTitle?: InputMaybe<Scalars['String']['input']>;
  contactFormTitle_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormTitle_not?: InputMaybe<Scalars['String']['input']>;
  contactFormTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  legalBasisList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisTitle?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisTitle_not?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageDurationDetails?: InputMaybe<Scalars['String']['input']>;
  storageDurationDetails_contains?: InputMaybe<Scalars['String']['input']>;
  storageDurationDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storageDurationDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageDurationDetails_not?: InputMaybe<Scalars['String']['input']>;
  storageDurationDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  storageDurationDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageDurationTitle?: InputMaybe<Scalars['String']['input']>;
  storageDurationTitle_contains?: InputMaybe<Scalars['String']['input']>;
  storageDurationTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storageDurationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageDurationTitle_not?: InputMaybe<Scalars['String']['input']>;
  storageDurationTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  storageDurationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DataCollectionLinkingCollections = {
  __typename?: 'DataCollectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  privacyPolicyCollection?: Maybe<PrivacyPolicyCollection>;
};


export type DataCollectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DataCollectionLinkingCollectionsPrivacyPolicyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DataCollectionLinkingCollectionsPrivacyPolicyCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DataCollectionLinkingCollectionsPrivacyPolicyCollectionOrder {
  IntroDescriptionAsc = 'introDescription_ASC',
  IntroDescriptionDesc = 'introDescription_DESC',
  LastModifiedAsc = 'lastModified_ASC',
  LastModifiedDesc = 'lastModified_DESC',
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

export enum DataCollectionOrder {
  CloudflareIntroAsc = 'cloudflareIntro_ASC',
  CloudflareIntroDesc = 'cloudflareIntro_DESC',
  CloudflarePrivacyPolicyLinkAsc = 'cloudflarePrivacyPolicyLink_ASC',
  CloudflarePrivacyPolicyLinkDesc = 'cloudflarePrivacyPolicyLink_DESC',
  CloudflarePrivacyPolicyAsc = 'cloudflarePrivacyPolicy_ASC',
  CloudflarePrivacyPolicyDesc = 'cloudflarePrivacyPolicy_DESC',
  CloudflareTitleAsc = 'cloudflareTitle_ASC',
  CloudflareTitleDesc = 'cloudflareTitle_DESC',
  ContactFormSupabasePrivacyPolicyLinkAsc = 'contactFormSupabasePrivacyPolicyLink_ASC',
  ContactFormSupabasePrivacyPolicyLinkDesc = 'contactFormSupabasePrivacyPolicyLink_DESC',
  ContactFormSupabasePrivacyPolicyAsc = 'contactFormSupabasePrivacyPolicy_ASC',
  ContactFormSupabasePrivacyPolicyDesc = 'contactFormSupabasePrivacyPolicy_DESC',
  ContactFormTitleAsc = 'contactFormTitle_ASC',
  ContactFormTitleDesc = 'contactFormTitle_DESC',
  LegalBasisTitleAsc = 'legalBasisTitle_ASC',
  LegalBasisTitleDesc = 'legalBasisTitle_DESC',
  StorageDurationDetailsAsc = 'storageDurationDetails_ASC',
  StorageDurationDetailsDesc = 'storageDurationDetails_DESC',
  StorageDurationTitleAsc = 'storageDurationTitle_ASC',
  StorageDurationTitleDesc = 'storageDurationTitle_DESC',
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
  description?: Maybe<Scalars['String']['output']>;
  followGithub?: Maybe<Scalars['String']['output']>;
  followSection?: Maybe<Scalars['String']['output']>;
  followStackOverflow?: Maybe<Scalars['String']['output']>;
  gitHubHref?: Maybe<Scalars['String']['output']>;
  gitHubHrefLabel?: Maybe<Scalars['String']['output']>;
  kofiHref?: Maybe<Scalars['String']['output']>;
  kofiHrefLabel?: Maybe<Scalars['String']['output']>;
  legalNotice?: Maybe<Scalars['String']['output']>;
  legalPrivacyPolicy?: Maybe<Scalars['String']['output']>;
  legalSection?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  stackOverflowHref?: Maybe<Scalars['String']['output']>;
  stackOverflowHrefLabel?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterFollowGithubArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterFollowSectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterFollowStackOverflowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterGitHubHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterGitHubHrefLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterKofiHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterKofiHrefLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterLegalNoticeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterLegalPrivacyPolicyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterLegalSectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterStackOverflowHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterStackOverflowHrefLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/footer) */
export type FooterTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  followGithub?: InputMaybe<Scalars['String']['input']>;
  followGithub_contains?: InputMaybe<Scalars['String']['input']>;
  followGithub_exists?: InputMaybe<Scalars['Boolean']['input']>;
  followGithub_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  followGithub_not?: InputMaybe<Scalars['String']['input']>;
  followGithub_not_contains?: InputMaybe<Scalars['String']['input']>;
  followGithub_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  followSection?: InputMaybe<Scalars['String']['input']>;
  followSection_contains?: InputMaybe<Scalars['String']['input']>;
  followSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  followSection_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  followSection_not?: InputMaybe<Scalars['String']['input']>;
  followSection_not_contains?: InputMaybe<Scalars['String']['input']>;
  followSection_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  followStackOverflow?: InputMaybe<Scalars['String']['input']>;
  followStackOverflow_contains?: InputMaybe<Scalars['String']['input']>;
  followStackOverflow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  followStackOverflow_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  followStackOverflow_not?: InputMaybe<Scalars['String']['input']>;
  followStackOverflow_not_contains?: InputMaybe<Scalars['String']['input']>;
  followStackOverflow_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gitHubHref?: InputMaybe<Scalars['String']['input']>;
  gitHubHrefLabel?: InputMaybe<Scalars['String']['input']>;
  gitHubHrefLabel_contains?: InputMaybe<Scalars['String']['input']>;
  gitHubHrefLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  gitHubHrefLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gitHubHrefLabel_not?: InputMaybe<Scalars['String']['input']>;
  gitHubHrefLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  gitHubHrefLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gitHubHref_contains?: InputMaybe<Scalars['String']['input']>;
  gitHubHref_exists?: InputMaybe<Scalars['Boolean']['input']>;
  gitHubHref_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gitHubHref_not?: InputMaybe<Scalars['String']['input']>;
  gitHubHref_not_contains?: InputMaybe<Scalars['String']['input']>;
  gitHubHref_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kofiHref?: InputMaybe<Scalars['String']['input']>;
  kofiHrefLabel?: InputMaybe<Scalars['String']['input']>;
  kofiHrefLabel_contains?: InputMaybe<Scalars['String']['input']>;
  kofiHrefLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  kofiHrefLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kofiHrefLabel_not?: InputMaybe<Scalars['String']['input']>;
  kofiHrefLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  kofiHrefLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kofiHref_contains?: InputMaybe<Scalars['String']['input']>;
  kofiHref_exists?: InputMaybe<Scalars['Boolean']['input']>;
  kofiHref_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  kofiHref_not?: InputMaybe<Scalars['String']['input']>;
  kofiHref_not_contains?: InputMaybe<Scalars['String']['input']>;
  kofiHref_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalNotice?: InputMaybe<Scalars['String']['input']>;
  legalNotice_contains?: InputMaybe<Scalars['String']['input']>;
  legalNotice_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalNotice_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalNotice_not?: InputMaybe<Scalars['String']['input']>;
  legalNotice_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalNotice_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalPrivacyPolicy?: InputMaybe<Scalars['String']['input']>;
  legalPrivacyPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  legalPrivacyPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalPrivacyPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalPrivacyPolicy_not?: InputMaybe<Scalars['String']['input']>;
  legalPrivacyPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalPrivacyPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalSection?: InputMaybe<Scalars['String']['input']>;
  legalSection_contains?: InputMaybe<Scalars['String']['input']>;
  legalSection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalSection_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalSection_not?: InputMaybe<Scalars['String']['input']>;
  legalSection_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalSection_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stackOverflowHref?: InputMaybe<Scalars['String']['input']>;
  stackOverflowHrefLabel?: InputMaybe<Scalars['String']['input']>;
  stackOverflowHrefLabel_contains?: InputMaybe<Scalars['String']['input']>;
  stackOverflowHrefLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stackOverflowHrefLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stackOverflowHrefLabel_not?: InputMaybe<Scalars['String']['input']>;
  stackOverflowHrefLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  stackOverflowHrefLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stackOverflowHref_contains?: InputMaybe<Scalars['String']['input']>;
  stackOverflowHref_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stackOverflowHref_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  stackOverflowHref_not?: InputMaybe<Scalars['String']['input']>;
  stackOverflowHref_not_contains?: InputMaybe<Scalars['String']['input']>;
  stackOverflowHref_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

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
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FollowGithubAsc = 'followGithub_ASC',
  FollowGithubDesc = 'followGithub_DESC',
  FollowSectionAsc = 'followSection_ASC',
  FollowSectionDesc = 'followSection_DESC',
  FollowStackOverflowAsc = 'followStackOverflow_ASC',
  FollowStackOverflowDesc = 'followStackOverflow_DESC',
  GitHubHrefLabelAsc = 'gitHubHrefLabel_ASC',
  GitHubHrefLabelDesc = 'gitHubHrefLabel_DESC',
  GitHubHrefAsc = 'gitHubHref_ASC',
  GitHubHrefDesc = 'gitHubHref_DESC',
  KofiHrefLabelAsc = 'kofiHrefLabel_ASC',
  KofiHrefLabelDesc = 'kofiHrefLabel_DESC',
  KofiHrefAsc = 'kofiHref_ASC',
  KofiHrefDesc = 'kofiHref_DESC',
  LegalNoticeAsc = 'legalNotice_ASC',
  LegalNoticeDesc = 'legalNotice_DESC',
  LegalPrivacyPolicyAsc = 'legalPrivacyPolicy_ASC',
  LegalPrivacyPolicyDesc = 'legalPrivacyPolicy_DESC',
  LegalSectionAsc = 'legalSection_ASC',
  LegalSectionDesc = 'legalSection_DESC',
  StackOverflowHrefLabelAsc = 'stackOverflowHrefLabel_ASC',
  StackOverflowHrefLabelDesc = 'stackOverflowHrefLabel_DESC',
  StackOverflowHrefAsc = 'stackOverflowHref_ASC',
  StackOverflowHrefDesc = 'stackOverflowHref_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type Form = Entry & _Node & {
  __typename?: 'Form';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  emailResendButtonLabel?: Maybe<Scalars['String']['output']>;
  emailVerificationDescription?: Maybe<Scalars['String']['output']>;
  emailVerificationTitle?: Maybe<Scalars['String']['output']>;
  errorButtonLabel?: Maybe<Scalars['String']['output']>;
  errorContactEmail?: Maybe<Scalars['String']['output']>;
  errorDescription?: Maybe<Scalars['String']['output']>;
  errorTitle?: Maybe<Scalars['String']['output']>;
  gdprNoticeDetails?: Maybe<Scalars['String']['output']>;
  gdprNoticeIntro?: Maybe<Scalars['String']['output']>;
  gdprNoticeLinkText?: Maybe<Scalars['String']['output']>;
  labels?: Maybe<Label>;
  linkedFrom?: Maybe<FormLinkingCollections>;
  sendMessageLabel?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  validationMessages?: Maybe<ValidationMessages>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormEmailResendButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormEmailVerificationDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormEmailVerificationTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormErrorButtonLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormErrorContactEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormErrorDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormErrorTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormGdprNoticeDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormGdprNoticeIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormGdprNoticeLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormLabelsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LabelFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormSendMessageLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/form) */
export type FormValidationMessagesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ValidationMessagesFilter>;
};

export type FormCollection = {
  __typename?: 'FormCollection';
  items: Array<Maybe<Form>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  emailResendButtonLabel?: InputMaybe<Scalars['String']['input']>;
  emailResendButtonLabel_contains?: InputMaybe<Scalars['String']['input']>;
  emailResendButtonLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  emailResendButtonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailResendButtonLabel_not?: InputMaybe<Scalars['String']['input']>;
  emailResendButtonLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  emailResendButtonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailVerificationDescription?: InputMaybe<Scalars['String']['input']>;
  emailVerificationDescription_contains?: InputMaybe<Scalars['String']['input']>;
  emailVerificationDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  emailVerificationDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailVerificationDescription_not?: InputMaybe<Scalars['String']['input']>;
  emailVerificationDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  emailVerificationDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailVerificationTitle?: InputMaybe<Scalars['String']['input']>;
  emailVerificationTitle_contains?: InputMaybe<Scalars['String']['input']>;
  emailVerificationTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  emailVerificationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailVerificationTitle_not?: InputMaybe<Scalars['String']['input']>;
  emailVerificationTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  emailVerificationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorButtonLabel?: InputMaybe<Scalars['String']['input']>;
  errorButtonLabel_contains?: InputMaybe<Scalars['String']['input']>;
  errorButtonLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  errorButtonLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorButtonLabel_not?: InputMaybe<Scalars['String']['input']>;
  errorButtonLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorButtonLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorContactEmail?: InputMaybe<Scalars['String']['input']>;
  errorContactEmail_contains?: InputMaybe<Scalars['String']['input']>;
  errorContactEmail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  errorContactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorContactEmail_not?: InputMaybe<Scalars['String']['input']>;
  errorContactEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorContactEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorDescription?: InputMaybe<Scalars['String']['input']>;
  errorDescription_contains?: InputMaybe<Scalars['String']['input']>;
  errorDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  errorDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorDescription_not?: InputMaybe<Scalars['String']['input']>;
  errorDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorTitle?: InputMaybe<Scalars['String']['input']>;
  errorTitle_contains?: InputMaybe<Scalars['String']['input']>;
  errorTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  errorTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorTitle_not?: InputMaybe<Scalars['String']['input']>;
  errorTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gdprNoticeDetails?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeDetails_contains?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  gdprNoticeDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gdprNoticeDetails_not?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gdprNoticeIntro?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeIntro_contains?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  gdprNoticeIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gdprNoticeIntro_not?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gdprNoticeLinkText?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeLinkText_contains?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeLinkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  gdprNoticeLinkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  gdprNoticeLinkText_not?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeLinkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  gdprNoticeLinkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  labels?: InputMaybe<CfLabelNestedFilter>;
  labels_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sendMessageLabel?: InputMaybe<Scalars['String']['input']>;
  sendMessageLabel_contains?: InputMaybe<Scalars['String']['input']>;
  sendMessageLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sendMessageLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sendMessageLabel_not?: InputMaybe<Scalars['String']['input']>;
  sendMessageLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  sendMessageLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  validationMessages?: InputMaybe<CfValidationMessagesNestedFilter>;
  validationMessages_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FormLinkingCollections = {
  __typename?: 'FormLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FormLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormOrder {
  EmailResendButtonLabelAsc = 'emailResendButtonLabel_ASC',
  EmailResendButtonLabelDesc = 'emailResendButtonLabel_DESC',
  EmailVerificationDescriptionAsc = 'emailVerificationDescription_ASC',
  EmailVerificationDescriptionDesc = 'emailVerificationDescription_DESC',
  EmailVerificationTitleAsc = 'emailVerificationTitle_ASC',
  EmailVerificationTitleDesc = 'emailVerificationTitle_DESC',
  ErrorButtonLabelAsc = 'errorButtonLabel_ASC',
  ErrorButtonLabelDesc = 'errorButtonLabel_DESC',
  ErrorContactEmailAsc = 'errorContactEmail_ASC',
  ErrorContactEmailDesc = 'errorContactEmail_DESC',
  ErrorDescriptionAsc = 'errorDescription_ASC',
  ErrorDescriptionDesc = 'errorDescription_DESC',
  ErrorTitleAsc = 'errorTitle_ASC',
  ErrorTitleDesc = 'errorTitle_DESC',
  GdprNoticeDetailsAsc = 'gdprNoticeDetails_ASC',
  GdprNoticeDetailsDesc = 'gdprNoticeDetails_DESC',
  GdprNoticeIntroAsc = 'gdprNoticeIntro_ASC',
  GdprNoticeIntroDesc = 'gdprNoticeIntro_DESC',
  GdprNoticeLinkTextAsc = 'gdprNoticeLinkText_ASC',
  GdprNoticeLinkTextDesc = 'gdprNoticeLinkText_DESC',
  SendMessageLabelAsc = 'sendMessageLabel_ASC',
  SendMessageLabelDesc = 'sendMessageLabel_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type Hosting = Entry & _Node & {
  __typename?: 'Hosting';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<HostingLinkingCollections>;
  netlifyContractualClauses?: Maybe<Scalars['String']['output']>;
  netlifyContractualClausesLink?: Maybe<Scalars['String']['output']>;
  netlifyDataProcessing?: Maybe<Scalars['String']['output']>;
  netlifyDataProcessingAgreement?: Maybe<Scalars['String']['output']>;
  netlifyDataProcessingAgreementLink?: Maybe<Scalars['String']['output']>;
  netlifyDataProcessingLink?: Maybe<Scalars['String']['output']>;
  netlifyHostingInfo?: Maybe<Scalars['String']['output']>;
  netlifyPrivacyPolicy?: Maybe<Scalars['String']['output']>;
  netlifyPrivacyPolicyLink?: Maybe<Scalars['String']['output']>;
  netlifyTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyContractualClausesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyContractualClausesLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyDataProcessingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyDataProcessingAgreementArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyDataProcessingAgreementLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyDataProcessingLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyHostingInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyPrivacyPolicyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyPrivacyPolicyLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingNetlifyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/hosting) */
export type HostingTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HostingCollection = {
  __typename?: 'HostingCollection';
  items: Array<Maybe<Hosting>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HostingFilter = {
  AND?: InputMaybe<Array<InputMaybe<HostingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HostingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  netlifyContractualClauses?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyContractualClausesLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyContractualClausesLink_not?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyContractualClauses_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClauses_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyContractualClauses_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyContractualClauses_not?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClauses_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClauses_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessing?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreement?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyDataProcessingAgreementLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingAgreementLink_not?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingAgreement_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyDataProcessingAgreement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingAgreement_not?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreement_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingLink?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingLink_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyDataProcessingLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingLink_not?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessing_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyDataProcessing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessing_not?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessing_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyHostingInfo?: InputMaybe<Scalars['String']['input']>;
  netlifyHostingInfo_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyHostingInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyHostingInfo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyHostingInfo_not?: InputMaybe<Scalars['String']['input']>;
  netlifyHostingInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyHostingInfo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyPrivacyPolicy?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyPrivacyPolicyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyPrivacyPolicyLink_not?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyPrivacyPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyPrivacyPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyPrivacyPolicy_not?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyTitle?: InputMaybe<Scalars['String']['input']>;
  netlifyTitle_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyTitle_not?: InputMaybe<Scalars['String']['input']>;
  netlifyTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HostingLinkingCollections = {
  __typename?: 'HostingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  privacyPolicyCollection?: Maybe<PrivacyPolicyCollection>;
};


export type HostingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HostingLinkingCollectionsPrivacyPolicyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HostingLinkingCollectionsPrivacyPolicyCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HostingLinkingCollectionsPrivacyPolicyCollectionOrder {
  IntroDescriptionAsc = 'introDescription_ASC',
  IntroDescriptionDesc = 'introDescription_DESC',
  LastModifiedAsc = 'lastModified_ASC',
  LastModifiedDesc = 'lastModified_DESC',
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

export enum HostingOrder {
  NetlifyContractualClausesLinkAsc = 'netlifyContractualClausesLink_ASC',
  NetlifyContractualClausesLinkDesc = 'netlifyContractualClausesLink_DESC',
  NetlifyDataProcessingAgreementLinkAsc = 'netlifyDataProcessingAgreementLink_ASC',
  NetlifyDataProcessingAgreementLinkDesc = 'netlifyDataProcessingAgreementLink_DESC',
  NetlifyDataProcessingAgreementAsc = 'netlifyDataProcessingAgreement_ASC',
  NetlifyDataProcessingAgreementDesc = 'netlifyDataProcessingAgreement_DESC',
  NetlifyDataProcessingLinkAsc = 'netlifyDataProcessingLink_ASC',
  NetlifyDataProcessingLinkDesc = 'netlifyDataProcessingLink_DESC',
  NetlifyHostingInfoAsc = 'netlifyHostingInfo_ASC',
  NetlifyHostingInfoDesc = 'netlifyHostingInfo_DESC',
  NetlifyPrivacyPolicyLinkAsc = 'netlifyPrivacyPolicyLink_ASC',
  NetlifyPrivacyPolicyLinkDesc = 'netlifyPrivacyPolicyLink_DESC',
  NetlifyPrivacyPolicyAsc = 'netlifyPrivacyPolicy_ASC',
  NetlifyPrivacyPolicyDesc = 'netlifyPrivacyPolicy_DESC',
  NetlifyTitleAsc = 'netlifyTitle_ASC',
  NetlifyTitleDesc = 'netlifyTitle_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/label) */
export type Label = Entry & _Node & {
  __typename?: 'Label';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  email?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LabelLinkingCollections>;
  message?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/label) */
export type LabelEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/label) */
export type LabelLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/label) */
export type LabelMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/label) */
export type LabelNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/label) */
export type LabelRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LabelCollection = {
  __typename?: 'LabelCollection';
  items: Array<Maybe<Label>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LabelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LabelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LabelFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_contains?: InputMaybe<Scalars['String']['input']>;
  message_exists?: InputMaybe<Scalars['Boolean']['input']>;
  message_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_not?: InputMaybe<Scalars['String']['input']>;
  message_not_contains?: InputMaybe<Scalars['String']['input']>;
  message_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_exists?: InputMaybe<Scalars['Boolean']['input']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type LabelLinkingCollections = {
  __typename?: 'LabelLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formCollection?: Maybe<FormCollection>;
};


export type LabelLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LabelLinkingCollectionsFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LabelLinkingCollectionsFormCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LabelLinkingCollectionsFormCollectionOrder {
  EmailResendButtonLabelAsc = 'emailResendButtonLabel_ASC',
  EmailResendButtonLabelDesc = 'emailResendButtonLabel_DESC',
  EmailVerificationDescriptionAsc = 'emailVerificationDescription_ASC',
  EmailVerificationDescriptionDesc = 'emailVerificationDescription_DESC',
  EmailVerificationTitleAsc = 'emailVerificationTitle_ASC',
  EmailVerificationTitleDesc = 'emailVerificationTitle_DESC',
  ErrorButtonLabelAsc = 'errorButtonLabel_ASC',
  ErrorButtonLabelDesc = 'errorButtonLabel_DESC',
  ErrorContactEmailAsc = 'errorContactEmail_ASC',
  ErrorContactEmailDesc = 'errorContactEmail_DESC',
  ErrorDescriptionAsc = 'errorDescription_ASC',
  ErrorDescriptionDesc = 'errorDescription_DESC',
  ErrorTitleAsc = 'errorTitle_ASC',
  ErrorTitleDesc = 'errorTitle_DESC',
  GdprNoticeDetailsAsc = 'gdprNoticeDetails_ASC',
  GdprNoticeDetailsDesc = 'gdprNoticeDetails_DESC',
  GdprNoticeIntroAsc = 'gdprNoticeIntro_ASC',
  GdprNoticeIntroDesc = 'gdprNoticeIntro_DESC',
  GdprNoticeLinkTextAsc = 'gdprNoticeLinkText_ASC',
  GdprNoticeLinkTextDesc = 'gdprNoticeLinkText_DESC',
  SendMessageLabelAsc = 'sendMessageLabel_ASC',
  SendMessageLabelDesc = 'sendMessageLabel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LabelOrder {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  MessageAsc = 'message_ASC',
  MessageDesc = 'message_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNotice = Entry & _Node & {
  __typename?: 'LegalNotice';
  _id: Scalars['ID']['output'];
  addressCity?: Maybe<Scalars['String']['output']>;
  addressJobTitle?: Maybe<Scalars['String']['output']>;
  addressName?: Maybe<Scalars['String']['output']>;
  addressPostalCode?: Maybe<Scalars['String']['output']>;
  addressStreet?: Maybe<Scalars['String']['output']>;
  contactEmail?: Maybe<Scalars['String']['output']>;
  contactEmailLabel?: Maybe<Scalars['String']['output']>;
  contactFormLabel?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  disputeLabel?: Maybe<Scalars['String']['output']>;
  disputeStatement?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LegalNoticeLinkingCollections>;
  subTitleContact?: Maybe<Scalars['String']['output']>;
  subTitleDispute?: Maybe<Scalars['String']['output']>;
  subTitleInformation?: Maybe<Scalars['String']['output']>;
  subTitleVat?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  vatId?: Maybe<Scalars['String']['output']>;
  vatLabel?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeAddressCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeAddressJobTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeAddressNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeAddressPostalCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeAddressStreetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeContactEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeContactEmailLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeContactFormLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeDisputeLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeDisputeStatementArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeSubTitleContactArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeSubTitleDisputeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeSubTitleInformationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeSubTitleVatArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeVatIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/legalNotice) */
export type LegalNoticeVatLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LegalNoticeCollection = {
  __typename?: 'LegalNoticeCollection';
  items: Array<Maybe<LegalNotice>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LegalNoticeFilter = {
  AND?: InputMaybe<Array<InputMaybe<LegalNoticeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalNoticeFilter>>>;
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCity_contains?: InputMaybe<Scalars['String']['input']>;
  addressCity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressCity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressCity_not?: InputMaybe<Scalars['String']['input']>;
  addressCity_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressCity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressJobTitle?: InputMaybe<Scalars['String']['input']>;
  addressJobTitle_contains?: InputMaybe<Scalars['String']['input']>;
  addressJobTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressJobTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressJobTitle_not?: InputMaybe<Scalars['String']['input']>;
  addressJobTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressJobTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressName?: InputMaybe<Scalars['String']['input']>;
  addressName_contains?: InputMaybe<Scalars['String']['input']>;
  addressName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressName_not?: InputMaybe<Scalars['String']['input']>;
  addressName_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode_contains?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressPostalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressPostalCode_not?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressStreet?: InputMaybe<Scalars['String']['input']>;
  addressStreet_contains?: InputMaybe<Scalars['String']['input']>;
  addressStreet_exists?: InputMaybe<Scalars['Boolean']['input']>;
  addressStreet_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  addressStreet_not?: InputMaybe<Scalars['String']['input']>;
  addressStreet_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressStreet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactEmail?: InputMaybe<Scalars['String']['input']>;
  contactEmailLabel?: InputMaybe<Scalars['String']['input']>;
  contactEmailLabel_contains?: InputMaybe<Scalars['String']['input']>;
  contactEmailLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactEmailLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactEmailLabel_not?: InputMaybe<Scalars['String']['input']>;
  contactEmailLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactEmailLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactEmail_contains?: InputMaybe<Scalars['String']['input']>;
  contactEmail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactEmail_not?: InputMaybe<Scalars['String']['input']>;
  contactEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormLabel?: InputMaybe<Scalars['String']['input']>;
  contactFormLabel_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormLabel_not?: InputMaybe<Scalars['String']['input']>;
  contactFormLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  disputeLabel?: InputMaybe<Scalars['String']['input']>;
  disputeLabel_contains?: InputMaybe<Scalars['String']['input']>;
  disputeLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  disputeLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  disputeLabel_not?: InputMaybe<Scalars['String']['input']>;
  disputeLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  disputeLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  disputeStatement?: InputMaybe<Scalars['String']['input']>;
  disputeStatement_contains?: InputMaybe<Scalars['String']['input']>;
  disputeStatement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  disputeStatement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  disputeStatement_not?: InputMaybe<Scalars['String']['input']>;
  disputeStatement_not_contains?: InputMaybe<Scalars['String']['input']>;
  disputeStatement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleContact?: InputMaybe<Scalars['String']['input']>;
  subTitleContact_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleContact_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleContact_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleContact_not?: InputMaybe<Scalars['String']['input']>;
  subTitleContact_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleContact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleDispute?: InputMaybe<Scalars['String']['input']>;
  subTitleDispute_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleDispute_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleDispute_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleDispute_not?: InputMaybe<Scalars['String']['input']>;
  subTitleDispute_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleDispute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleInformation?: InputMaybe<Scalars['String']['input']>;
  subTitleInformation_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleInformation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleInformation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleInformation_not?: InputMaybe<Scalars['String']['input']>;
  subTitleInformation_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleInformation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleVat?: InputMaybe<Scalars['String']['input']>;
  subTitleVat_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleVat_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subTitleVat_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subTitleVat_not?: InputMaybe<Scalars['String']['input']>;
  subTitleVat_not_contains?: InputMaybe<Scalars['String']['input']>;
  subTitleVat_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vatId?: InputMaybe<Scalars['String']['input']>;
  vatId_contains?: InputMaybe<Scalars['String']['input']>;
  vatId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  vatId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vatId_not?: InputMaybe<Scalars['String']['input']>;
  vatId_not_contains?: InputMaybe<Scalars['String']['input']>;
  vatId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vatLabel?: InputMaybe<Scalars['String']['input']>;
  vatLabel_contains?: InputMaybe<Scalars['String']['input']>;
  vatLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  vatLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  vatLabel_not?: InputMaybe<Scalars['String']['input']>;
  vatLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  vatLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LegalNoticeLinkingCollections = {
  __typename?: 'LegalNoticeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type LegalNoticeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LegalNoticeOrder {
  AddressCityAsc = 'addressCity_ASC',
  AddressCityDesc = 'addressCity_DESC',
  AddressJobTitleAsc = 'addressJobTitle_ASC',
  AddressJobTitleDesc = 'addressJobTitle_DESC',
  AddressNameAsc = 'addressName_ASC',
  AddressNameDesc = 'addressName_DESC',
  AddressPostalCodeAsc = 'addressPostalCode_ASC',
  AddressPostalCodeDesc = 'addressPostalCode_DESC',
  AddressStreetAsc = 'addressStreet_ASC',
  AddressStreetDesc = 'addressStreet_DESC',
  ContactEmailLabelAsc = 'contactEmailLabel_ASC',
  ContactEmailLabelDesc = 'contactEmailLabel_DESC',
  ContactEmailAsc = 'contactEmail_ASC',
  ContactEmailDesc = 'contactEmail_DESC',
  ContactFormLabelAsc = 'contactFormLabel_ASC',
  ContactFormLabelDesc = 'contactFormLabel_DESC',
  DisputeLabelAsc = 'disputeLabel_ASC',
  DisputeLabelDesc = 'disputeLabel_DESC',
  DisputeStatementAsc = 'disputeStatement_ASC',
  DisputeStatementDesc = 'disputeStatement_DESC',
  SubTitleContactAsc = 'subTitleContact_ASC',
  SubTitleContactDesc = 'subTitleContact_DESC',
  SubTitleDisputeAsc = 'subTitleDispute_ASC',
  SubTitleDisputeDesc = 'subTitleDispute_DESC',
  SubTitleInformationAsc = 'subTitleInformation_ASC',
  SubTitleInformationDesc = 'subTitleInformation_DESC',
  SubTitleVatAsc = 'subTitleVat_ASC',
  SubTitleVatDesc = 'subTitleVat_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  VatIdAsc = 'vatId_ASC',
  VatIdDesc = 'vatId_DESC',
  VatLabelAsc = 'vatLabel_ASC',
  VatLabelDesc = 'vatLabel_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataHome) */
export type MetaDataHome = Entry & _Node & {
  __typename?: 'MetaDataHome';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<MetaDataHomeLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataHome) */
export type MetaDataHomeDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataHome) */
export type MetaDataHomeKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataHome) */
export type MetaDataHomeLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataHome) */
export type MetaDataHomeTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MetaDataHomeCollection = {
  __typename?: 'MetaDataHomeCollection';
  items: Array<Maybe<MetaDataHome>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MetaDataHomeFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetaDataHomeFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetaDataHomeFilter>>>;
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

export type MetaDataHomeLinkingCollections = {
  __typename?: 'MetaDataHomeLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MetaDataHomeLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MetaDataHomeOrder {
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataLegal) */
export type MetaDataLegal = Entry & _Node & {
  __typename?: 'MetaDataLegal';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MetaDataLegalLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataLegal) */
export type MetaDataLegalDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataLegal) */
export type MetaDataLegalLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataLegal) */
export type MetaDataLegalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MetaDataLegalCollection = {
  __typename?: 'MetaDataLegalCollection';
  items: Array<Maybe<MetaDataLegal>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MetaDataLegalFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetaDataLegalFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetaDataLegalFilter>>>;
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

export type MetaDataLegalLinkingCollections = {
  __typename?: 'MetaDataLegalLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MetaDataLegalLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MetaDataLegalOrder {
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataPrivacy) */
export type MetaDataPrivacy = Entry & _Node & {
  __typename?: 'MetaDataPrivacy';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MetaDataPrivacyLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataPrivacy) */
export type MetaDataPrivacyDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataPrivacy) */
export type MetaDataPrivacyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/metaDataPrivacy) */
export type MetaDataPrivacyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MetaDataPrivacyCollection = {
  __typename?: 'MetaDataPrivacyCollection';
  items: Array<Maybe<MetaDataPrivacy>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MetaDataPrivacyFilter = {
  AND?: InputMaybe<Array<InputMaybe<MetaDataPrivacyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MetaDataPrivacyFilter>>>;
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

export type MetaDataPrivacyLinkingCollections = {
  __typename?: 'MetaDataPrivacyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MetaDataPrivacyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MetaDataPrivacyOrder {
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
  switchLanguageLabel?: Maybe<Scalars['String']['output']>;
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
export type NavbarSwitchLanguageLabelArgs = {
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
  switchLanguageLabel?: InputMaybe<Scalars['String']['input']>;
  switchLanguageLabel_contains?: InputMaybe<Scalars['String']['input']>;
  switchLanguageLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  switchLanguageLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  switchLanguageLabel_not?: InputMaybe<Scalars['String']['input']>;
  switchLanguageLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  switchLanguageLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  SwitchLanguageLabelAsc = 'switchLanguageLabel_ASC',
  SwitchLanguageLabelDesc = 'switchLanguageLabel_DESC',
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

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformation = Entry & _Node & {
  __typename?: 'NotesAndLegalInformation';
  _id: Scalars['ID']['output'];
  complaintRightDetails?: Maybe<Scalars['String']['output']>;
  complaintRightTitle?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  dataProtectionDetails?: Maybe<Scalars['String']['output']>;
  dataProtectionIntro?: Maybe<Scalars['String']['output']>;
  dataProtectionNotice?: Maybe<Scalars['String']['output']>;
  dataProtectionTitle?: Maybe<Scalars['String']['output']>;
  dataStorageDurationDetails?: Maybe<Scalars['String']['output']>;
  dataStorageDurationTitle?: Maybe<Scalars['String']['output']>;
  legalBasisDetails?: Maybe<Scalars['String']['output']>;
  legalBasisIntro?: Maybe<Scalars['String']['output']>;
  legalBasisList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  legalBasisTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NotesAndLegalInformationLinkingCollections>;
  responsiblePartyCity?: Maybe<Scalars['String']['output']>;
  responsiblePartyEmail?: Maybe<Scalars['String']['output']>;
  responsiblePartyEmailLabel?: Maybe<Scalars['String']['output']>;
  responsiblePartyInfo?: Maybe<Scalars['String']['output']>;
  responsiblePartyIntro?: Maybe<Scalars['String']['output']>;
  responsiblePartyName?: Maybe<Scalars['String']['output']>;
  responsiblePartyPostalCode?: Maybe<Scalars['String']['output']>;
  responsiblePartyRole?: Maybe<Scalars['String']['output']>;
  responsiblePartyStreet?: Maybe<Scalars['String']['output']>;
  responsiblePartyTitle?: Maybe<Scalars['String']['output']>;
  sslTlsEncryptionDetails?: Maybe<Scalars['String']['output']>;
  sslTlsEncryptionIntro?: Maybe<Scalars['String']['output']>;
  sslTlsEncryptionTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  userRightsIntro?: Maybe<Scalars['String']['output']>;
  userRightsList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  userRightsTitle?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationComplaintRightDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationComplaintRightTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationDataProtectionDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationDataProtectionIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationDataProtectionNoticeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationDataProtectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationDataStorageDurationDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationDataStorageDurationTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationLegalBasisDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationLegalBasisIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationLegalBasisListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationLegalBasisTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyEmailLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyPostalCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyStreetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationResponsiblePartyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationSslTlsEncryptionDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationSslTlsEncryptionIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationSslTlsEncryptionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationUserRightsIntroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationUserRightsListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/notesAndLegalInformation) */
export type NotesAndLegalInformationUserRightsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NotesAndLegalInformationCollection = {
  __typename?: 'NotesAndLegalInformationCollection';
  items: Array<Maybe<NotesAndLegalInformation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NotesAndLegalInformationFilter = {
  AND?: InputMaybe<Array<InputMaybe<NotesAndLegalInformationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NotesAndLegalInformationFilter>>>;
  complaintRightDetails?: InputMaybe<Scalars['String']['input']>;
  complaintRightDetails_contains?: InputMaybe<Scalars['String']['input']>;
  complaintRightDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  complaintRightDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  complaintRightDetails_not?: InputMaybe<Scalars['String']['input']>;
  complaintRightDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  complaintRightDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  complaintRightTitle?: InputMaybe<Scalars['String']['input']>;
  complaintRightTitle_contains?: InputMaybe<Scalars['String']['input']>;
  complaintRightTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  complaintRightTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  complaintRightTitle_not?: InputMaybe<Scalars['String']['input']>;
  complaintRightTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  complaintRightTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataProtectionDetails?: InputMaybe<Scalars['String']['input']>;
  dataProtectionDetails_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataProtectionDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionDetails_not?: InputMaybe<Scalars['String']['input']>;
  dataProtectionDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionIntro?: InputMaybe<Scalars['String']['input']>;
  dataProtectionIntro_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataProtectionIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionIntro_not?: InputMaybe<Scalars['String']['input']>;
  dataProtectionIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionNotice?: InputMaybe<Scalars['String']['input']>;
  dataProtectionNotice_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionNotice_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataProtectionNotice_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionNotice_not?: InputMaybe<Scalars['String']['input']>;
  dataProtectionNotice_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionNotice_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionTitle?: InputMaybe<Scalars['String']['input']>;
  dataProtectionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataProtectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataProtectionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataStorageDurationDetails?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationDetails_contains?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataStorageDurationDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataStorageDurationDetails_not?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataStorageDurationTitle?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataStorageDurationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataStorageDurationTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisDetails?: InputMaybe<Scalars['String']['input']>;
  legalBasisDetails_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisDetails_not?: InputMaybe<Scalars['String']['input']>;
  legalBasisDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisIntro?: InputMaybe<Scalars['String']['input']>;
  legalBasisIntro_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisIntro_not?: InputMaybe<Scalars['String']['input']>;
  legalBasisIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisTitle?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisTitle_not?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyCity?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyCity_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyCity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyCity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyCity_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyCity_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyCity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyEmail?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyEmailLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyEmailLabel_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyEmail_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyEmail_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyInfo?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyInfo_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyInfo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyInfo_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyInfo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyIntro?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyIntro_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyIntro_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyName?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyName_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyName_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyName_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyPostalCode?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyPostalCode_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyPostalCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyPostalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyPostalCode_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyPostalCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyPostalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyRole?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyRole_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyRole_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyRole_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyRole_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyRole_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyRole_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyStreet?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyStreet_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyStreet_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyStreet_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyStreet_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyStreet_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyStreet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyTitle?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyTitle_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionDetails?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionDetails_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sslTlsEncryptionDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionDetails_not?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionIntro?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionIntro_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sslTlsEncryptionIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionIntro_not?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionTitle?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sslTlsEncryptionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionTitle_not?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsIntro?: InputMaybe<Scalars['String']['input']>;
  userRightsIntro_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsIntro_not?: InputMaybe<Scalars['String']['input']>;
  userRightsIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsTitle?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsTitle_not?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NotesAndLegalInformationLinkingCollections = {
  __typename?: 'NotesAndLegalInformationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  privacyPolicyCollection?: Maybe<PrivacyPolicyCollection>;
};


export type NotesAndLegalInformationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NotesAndLegalInformationLinkingCollectionsPrivacyPolicyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NotesAndLegalInformationLinkingCollectionsPrivacyPolicyCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NotesAndLegalInformationLinkingCollectionsPrivacyPolicyCollectionOrder {
  IntroDescriptionAsc = 'introDescription_ASC',
  IntroDescriptionDesc = 'introDescription_DESC',
  LastModifiedAsc = 'lastModified_ASC',
  LastModifiedDesc = 'lastModified_DESC',
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

export enum NotesAndLegalInformationOrder {
  ComplaintRightDetailsAsc = 'complaintRightDetails_ASC',
  ComplaintRightDetailsDesc = 'complaintRightDetails_DESC',
  ComplaintRightTitleAsc = 'complaintRightTitle_ASC',
  ComplaintRightTitleDesc = 'complaintRightTitle_DESC',
  DataProtectionTitleAsc = 'dataProtectionTitle_ASC',
  DataProtectionTitleDesc = 'dataProtectionTitle_DESC',
  DataStorageDurationTitleAsc = 'dataStorageDurationTitle_ASC',
  DataStorageDurationTitleDesc = 'dataStorageDurationTitle_DESC',
  LegalBasisDetailsAsc = 'legalBasisDetails_ASC',
  LegalBasisDetailsDesc = 'legalBasisDetails_DESC',
  LegalBasisIntroAsc = 'legalBasisIntro_ASC',
  LegalBasisIntroDesc = 'legalBasisIntro_DESC',
  LegalBasisTitleAsc = 'legalBasisTitle_ASC',
  LegalBasisTitleDesc = 'legalBasisTitle_DESC',
  ResponsiblePartyCityAsc = 'responsiblePartyCity_ASC',
  ResponsiblePartyCityDesc = 'responsiblePartyCity_DESC',
  ResponsiblePartyEmailLabelAsc = 'responsiblePartyEmailLabel_ASC',
  ResponsiblePartyEmailLabelDesc = 'responsiblePartyEmailLabel_DESC',
  ResponsiblePartyEmailAsc = 'responsiblePartyEmail_ASC',
  ResponsiblePartyEmailDesc = 'responsiblePartyEmail_DESC',
  ResponsiblePartyInfoAsc = 'responsiblePartyInfo_ASC',
  ResponsiblePartyInfoDesc = 'responsiblePartyInfo_DESC',
  ResponsiblePartyIntroAsc = 'responsiblePartyIntro_ASC',
  ResponsiblePartyIntroDesc = 'responsiblePartyIntro_DESC',
  ResponsiblePartyNameAsc = 'responsiblePartyName_ASC',
  ResponsiblePartyNameDesc = 'responsiblePartyName_DESC',
  ResponsiblePartyPostalCodeAsc = 'responsiblePartyPostalCode_ASC',
  ResponsiblePartyPostalCodeDesc = 'responsiblePartyPostalCode_DESC',
  ResponsiblePartyRoleAsc = 'responsiblePartyRole_ASC',
  ResponsiblePartyRoleDesc = 'responsiblePartyRole_DESC',
  ResponsiblePartyStreetAsc = 'responsiblePartyStreet_ASC',
  ResponsiblePartyStreetDesc = 'responsiblePartyStreet_DESC',
  ResponsiblePartyTitleAsc = 'responsiblePartyTitle_ASC',
  ResponsiblePartyTitleDesc = 'responsiblePartyTitle_DESC',
  SslTlsEncryptionDetailsAsc = 'sslTlsEncryptionDetails_ASC',
  SslTlsEncryptionDetailsDesc = 'sslTlsEncryptionDetails_DESC',
  SslTlsEncryptionIntroAsc = 'sslTlsEncryptionIntro_ASC',
  SslTlsEncryptionIntroDesc = 'sslTlsEncryptionIntro_DESC',
  SslTlsEncryptionTitleAsc = 'sslTlsEncryptionTitle_ASC',
  SslTlsEncryptionTitleDesc = 'sslTlsEncryptionTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UserRightsIntroAsc = 'userRightsIntro_ASC',
  UserRightsIntroDesc = 'userRightsIntro_DESC',
  UserRightsTitleAsc = 'userRightsTitle_ASC',
  UserRightsTitleDesc = 'userRightsTitle_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverview = Entry & _Node & {
  __typename?: 'PrivacyOverview';
  _id: Scalars['ID']['output'];
  analysisToolsDetailsText?: Maybe<Scalars['String']['output']>;
  analysisToolsIntroText?: Maybe<Scalars['String']['output']>;
  analysisToolsTitle?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  dataAutomaticCaptureText?: Maybe<Scalars['String']['output']>;
  dataCaptureTitle?: Maybe<Scalars['String']['output']>;
  dataCollectionTitle?: Maybe<Scalars['String']['output']>;
  dataDirectCaptureText?: Maybe<Scalars['String']['output']>;
  dataPurposeDescription?: Maybe<Scalars['String']['output']>;
  dataPurposeTitle?: Maybe<Scalars['String']['output']>;
  generalInfoDescription?: Maybe<Scalars['String']['output']>;
  generalInfoTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PrivacyOverviewLinkingCollections>;
  responsiblePartyDescription?: Maybe<Scalars['String']['output']>;
  responsiblePartyTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  userRightsContactText?: Maybe<Scalars['String']['output']>;
  userRightsIntroText?: Maybe<Scalars['String']['output']>;
  userRightsList?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  userRightsTitle?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewAnalysisToolsDetailsTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewAnalysisToolsIntroTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewAnalysisToolsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewDataAutomaticCaptureTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewDataCaptureTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewDataCollectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewDataDirectCaptureTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewDataPurposeDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewDataPurposeTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewGeneralInfoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewGeneralInfoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewResponsiblePartyDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewResponsiblePartyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewUserRightsContactTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewUserRightsIntroTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewUserRightsListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyOverview) */
export type PrivacyOverviewUserRightsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PrivacyOverviewCollection = {
  __typename?: 'PrivacyOverviewCollection';
  items: Array<Maybe<PrivacyOverview>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PrivacyOverviewFilter = {
  AND?: InputMaybe<Array<InputMaybe<PrivacyOverviewFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PrivacyOverviewFilter>>>;
  analysisToolsDetailsText?: InputMaybe<Scalars['String']['input']>;
  analysisToolsDetailsText_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsDetailsText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  analysisToolsDetailsText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsDetailsText_not?: InputMaybe<Scalars['String']['input']>;
  analysisToolsDetailsText_not_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsDetailsText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsIntroText?: InputMaybe<Scalars['String']['input']>;
  analysisToolsIntroText_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsIntroText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  analysisToolsIntroText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsIntroText_not?: InputMaybe<Scalars['String']['input']>;
  analysisToolsIntroText_not_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsIntroText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsTitle?: InputMaybe<Scalars['String']['input']>;
  analysisToolsTitle_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  analysisToolsTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsTitle_not?: InputMaybe<Scalars['String']['input']>;
  analysisToolsTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataAutomaticCaptureText?: InputMaybe<Scalars['String']['input']>;
  dataAutomaticCaptureText_contains?: InputMaybe<Scalars['String']['input']>;
  dataAutomaticCaptureText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataAutomaticCaptureText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataAutomaticCaptureText_not?: InputMaybe<Scalars['String']['input']>;
  dataAutomaticCaptureText_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataAutomaticCaptureText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataCaptureTitle?: InputMaybe<Scalars['String']['input']>;
  dataCaptureTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataCaptureTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataCaptureTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataCaptureTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataCaptureTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataCaptureTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataCollectionTitle?: InputMaybe<Scalars['String']['input']>;
  dataCollectionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataCollectionTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataCollectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataCollectionTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataCollectionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataCollectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataDirectCaptureText?: InputMaybe<Scalars['String']['input']>;
  dataDirectCaptureText_contains?: InputMaybe<Scalars['String']['input']>;
  dataDirectCaptureText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataDirectCaptureText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataDirectCaptureText_not?: InputMaybe<Scalars['String']['input']>;
  dataDirectCaptureText_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataDirectCaptureText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPurposeDescription?: InputMaybe<Scalars['String']['input']>;
  dataPurposeDescription_contains?: InputMaybe<Scalars['String']['input']>;
  dataPurposeDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataPurposeDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPurposeDescription_not?: InputMaybe<Scalars['String']['input']>;
  dataPurposeDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataPurposeDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPurposeTitle?: InputMaybe<Scalars['String']['input']>;
  dataPurposeTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataPurposeTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataPurposeTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPurposeTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataPurposeTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataPurposeTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfoDescription?: InputMaybe<Scalars['String']['input']>;
  generalInfoDescription_contains?: InputMaybe<Scalars['String']['input']>;
  generalInfoDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  generalInfoDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfoDescription_not?: InputMaybe<Scalars['String']['input']>;
  generalInfoDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  generalInfoDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfoTitle?: InputMaybe<Scalars['String']['input']>;
  generalInfoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  generalInfoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  generalInfoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfoTitle_not?: InputMaybe<Scalars['String']['input']>;
  generalInfoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  generalInfoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyDescription?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyDescription_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyDescription_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyTitle?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyTitle_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsContactText?: InputMaybe<Scalars['String']['input']>;
  userRightsContactText_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsContactText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsContactText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsContactText_not?: InputMaybe<Scalars['String']['input']>;
  userRightsContactText_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsContactText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsIntroText?: InputMaybe<Scalars['String']['input']>;
  userRightsIntroText_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsIntroText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsIntroText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsIntroText_not?: InputMaybe<Scalars['String']['input']>;
  userRightsIntroText_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsIntroText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsTitle?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsTitle_not?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PrivacyOverviewLinkingCollections = {
  __typename?: 'PrivacyOverviewLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  privacyPolicyCollection?: Maybe<PrivacyPolicyCollection>;
};


export type PrivacyOverviewLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PrivacyOverviewLinkingCollectionsPrivacyPolicyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PrivacyOverviewLinkingCollectionsPrivacyPolicyCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PrivacyOverviewLinkingCollectionsPrivacyPolicyCollectionOrder {
  IntroDescriptionAsc = 'introDescription_ASC',
  IntroDescriptionDesc = 'introDescription_DESC',
  LastModifiedAsc = 'lastModified_ASC',
  LastModifiedDesc = 'lastModified_DESC',
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

export enum PrivacyOverviewOrder {
  AnalysisToolsDetailsTextAsc = 'analysisToolsDetailsText_ASC',
  AnalysisToolsDetailsTextDesc = 'analysisToolsDetailsText_DESC',
  AnalysisToolsIntroTextAsc = 'analysisToolsIntroText_ASC',
  AnalysisToolsIntroTextDesc = 'analysisToolsIntroText_DESC',
  AnalysisToolsTitleAsc = 'analysisToolsTitle_ASC',
  AnalysisToolsTitleDesc = 'analysisToolsTitle_DESC',
  DataAutomaticCaptureTextAsc = 'dataAutomaticCaptureText_ASC',
  DataAutomaticCaptureTextDesc = 'dataAutomaticCaptureText_DESC',
  DataCaptureTitleAsc = 'dataCaptureTitle_ASC',
  DataCaptureTitleDesc = 'dataCaptureTitle_DESC',
  DataCollectionTitleAsc = 'dataCollectionTitle_ASC',
  DataCollectionTitleDesc = 'dataCollectionTitle_DESC',
  DataDirectCaptureTextAsc = 'dataDirectCaptureText_ASC',
  DataDirectCaptureTextDesc = 'dataDirectCaptureText_DESC',
  DataPurposeTitleAsc = 'dataPurposeTitle_ASC',
  DataPurposeTitleDesc = 'dataPurposeTitle_DESC',
  GeneralInfoTitleAsc = 'generalInfoTitle_ASC',
  GeneralInfoTitleDesc = 'generalInfoTitle_DESC',
  ResponsiblePartyDescriptionAsc = 'responsiblePartyDescription_ASC',
  ResponsiblePartyDescriptionDesc = 'responsiblePartyDescription_DESC',
  ResponsiblePartyTitleAsc = 'responsiblePartyTitle_ASC',
  ResponsiblePartyTitleDesc = 'responsiblePartyTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UserRightsContactTextAsc = 'userRightsContactText_ASC',
  UserRightsContactTextDesc = 'userRightsContactText_DESC',
  UserRightsIntroTextAsc = 'userRightsIntroText_ASC',
  UserRightsIntroTextDesc = 'userRightsIntroText_DESC',
  UserRightsTitleAsc = 'userRightsTitle_ASC',
  UserRightsTitleDesc = 'userRightsTitle_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicy = Entry & _Node & {
  __typename?: 'PrivacyPolicy';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  dataCollection?: Maybe<DataCollection>;
  hosting?: Maybe<Hosting>;
  introDescription?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PrivacyPolicyLinkingCollections>;
  notesAndLegalInformation?: Maybe<NotesAndLegalInformation>;
  privacyOverview?: Maybe<PrivacyOverview>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicyDataCollectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DataCollectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicyHostingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HostingFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicyIntroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicyLastModifiedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicyNotesAndLegalInformationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NotesAndLegalInformationFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicyPrivacyOverviewArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PrivacyOverviewFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/privacyPolicy) */
export type PrivacyPolicyTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PrivacyPolicyCollection = {
  __typename?: 'PrivacyPolicyCollection';
  items: Array<Maybe<PrivacyPolicy>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PrivacyPolicyFilter = {
  AND?: InputMaybe<Array<InputMaybe<PrivacyPolicyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PrivacyPolicyFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataCollection?: InputMaybe<CfDataCollectionNestedFilter>;
  dataCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hosting?: InputMaybe<CfHostingNestedFilter>;
  hosting_exists?: InputMaybe<Scalars['Boolean']['input']>;
  introDescription?: InputMaybe<Scalars['String']['input']>;
  introDescription_contains?: InputMaybe<Scalars['String']['input']>;
  introDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  introDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  introDescription_not?: InputMaybe<Scalars['String']['input']>;
  introDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  introDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastModified?: InputMaybe<Scalars['String']['input']>;
  lastModified_contains?: InputMaybe<Scalars['String']['input']>;
  lastModified_exists?: InputMaybe<Scalars['Boolean']['input']>;
  lastModified_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastModified_not?: InputMaybe<Scalars['String']['input']>;
  lastModified_not_contains?: InputMaybe<Scalars['String']['input']>;
  lastModified_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notesAndLegalInformation?: InputMaybe<CfNotesAndLegalInformationNestedFilter>;
  notesAndLegalInformation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  privacyOverview?: InputMaybe<CfPrivacyOverviewNestedFilter>;
  privacyOverview_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PrivacyPolicyLinkingCollections = {
  __typename?: 'PrivacyPolicyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PrivacyPolicyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PrivacyPolicyOrder {
  IntroDescriptionAsc = 'introDescription_ASC',
  IntroDescriptionDesc = 'introDescription_DESC',
  LastModifiedAsc = 'lastModified_ASC',
  LastModifiedDesc = 'lastModified_DESC',
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
  dataCollection?: Maybe<DataCollection>;
  dataCollectionCollection?: Maybe<DataCollectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  form?: Maybe<Form>;
  formCollection?: Maybe<FormCollection>;
  home?: Maybe<Home>;
  homeCollection?: Maybe<HomeCollection>;
  hosting?: Maybe<Hosting>;
  hostingCollection?: Maybe<HostingCollection>;
  label?: Maybe<Label>;
  labelCollection?: Maybe<LabelCollection>;
  legalNotice?: Maybe<LegalNotice>;
  legalNoticeCollection?: Maybe<LegalNoticeCollection>;
  metaDataHome?: Maybe<MetaDataHome>;
  metaDataHomeCollection?: Maybe<MetaDataHomeCollection>;
  metaDataLegal?: Maybe<MetaDataLegal>;
  metaDataLegalCollection?: Maybe<MetaDataLegalCollection>;
  metaDataPrivacy?: Maybe<MetaDataPrivacy>;
  metaDataPrivacyCollection?: Maybe<MetaDataPrivacyCollection>;
  metric?: Maybe<Metric>;
  metricCollection?: Maybe<MetricCollection>;
  navbar?: Maybe<Navbar>;
  navbarCollection?: Maybe<NavbarCollection>;
  notFound?: Maybe<NotFound>;
  notFoundCollection?: Maybe<NotFoundCollection>;
  notesAndLegalInformation?: Maybe<NotesAndLegalInformation>;
  notesAndLegalInformationCollection?: Maybe<NotesAndLegalInformationCollection>;
  privacyOverview?: Maybe<PrivacyOverview>;
  privacyOverviewCollection?: Maybe<PrivacyOverviewCollection>;
  privacyPolicy?: Maybe<PrivacyPolicy>;
  privacyPolicyCollection?: Maybe<PrivacyPolicyCollection>;
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
  validationMessages?: Maybe<ValidationMessages>;
  validationMessagesCollection?: Maybe<ValidationMessagesCollection>;
  verify?: Maybe<Verify>;
  verifyCollection?: Maybe<VerifyCollection>;
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


export type QueryDataCollectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDataCollectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DataCollectionFilter>;
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


export type QueryFormArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormFilter>;
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


export type QueryHostingArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHostingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HostingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HostingFilter>;
};


export type QueryLabelArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLabelCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LabelOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LabelFilter>;
};


export type QueryLegalNoticeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLegalNoticeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LegalNoticeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LegalNoticeFilter>;
};


export type QueryMetaDataHomeArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMetaDataHomeCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetaDataHomeOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetaDataHomeFilter>;
};


export type QueryMetaDataLegalArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMetaDataLegalCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetaDataLegalOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetaDataLegalFilter>;
};


export type QueryMetaDataPrivacyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMetaDataPrivacyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MetaDataPrivacyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MetaDataPrivacyFilter>;
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


export type QueryNotesAndLegalInformationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNotesAndLegalInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NotesAndLegalInformationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NotesAndLegalInformationFilter>;
};


export type QueryPrivacyOverviewArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPrivacyOverviewCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PrivacyOverviewOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrivacyOverviewFilter>;
};


export type QueryPrivacyPolicyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPrivacyPolicyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PrivacyPolicyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PrivacyPolicyFilter>;
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


export type QueryValidationMessagesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryValidationMessagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ValidationMessagesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ValidationMessagesFilter>;
};


export type QueryVerifyArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVerifyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VerifyOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerifyFilter>;
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
 * Represents a taxonomy concept entity for finding and organizing content easily.
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
  logo?: Maybe<Asset>;
  logoInvert?: Maybe<Scalars['Boolean']['output']>;
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
export type TestimonialLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/testimonial) */
export type TestimonialLogoInvertArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
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
  logoInvert?: InputMaybe<Scalars['Boolean']['input']>;
  logoInvert_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoInvert_not?: InputMaybe<Scalars['Boolean']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
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
  LogoInvertAsc = 'logoInvert_ASC',
  LogoInvertDesc = 'logoInvert_DESC',
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
  LogoInvertAsc = 'logoInvert_ASC',
  LogoInvertDesc = 'logoInvert_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessages = Entry & _Node & {
  __typename?: 'ValidationMessages';
  _id: Scalars['ID']['output'];
  consentRequired?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  emailInvalid?: Maybe<Scalars['String']['output']>;
  emailMaxLength?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ValidationMessagesLinkingCollections>;
  messageMaxLength?: Maybe<Scalars['String']['output']>;
  messageRequired?: Maybe<Scalars['String']['output']>;
  nameMaxLength?: Maybe<Scalars['String']['output']>;
  nameRequired?: Maybe<Scalars['String']['output']>;
  roleMaxLength?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesConsentRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesEmailInvalidArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesEmailMaxLengthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesMessageMaxLengthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesMessageRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesNameMaxLengthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesNameRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/validationMessages) */
export type ValidationMessagesRoleMaxLengthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ValidationMessagesCollection = {
  __typename?: 'ValidationMessagesCollection';
  items: Array<Maybe<ValidationMessages>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ValidationMessagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<ValidationMessagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ValidationMessagesFilter>>>;
  consentRequired?: InputMaybe<Scalars['String']['input']>;
  consentRequired_contains?: InputMaybe<Scalars['String']['input']>;
  consentRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  consentRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  consentRequired_not?: InputMaybe<Scalars['String']['input']>;
  consentRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  consentRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  emailInvalid?: InputMaybe<Scalars['String']['input']>;
  emailInvalid_contains?: InputMaybe<Scalars['String']['input']>;
  emailInvalid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  emailInvalid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailInvalid_not?: InputMaybe<Scalars['String']['input']>;
  emailInvalid_not_contains?: InputMaybe<Scalars['String']['input']>;
  emailInvalid_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailMaxLength?: InputMaybe<Scalars['String']['input']>;
  emailMaxLength_contains?: InputMaybe<Scalars['String']['input']>;
  emailMaxLength_exists?: InputMaybe<Scalars['Boolean']['input']>;
  emailMaxLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailMaxLength_not?: InputMaybe<Scalars['String']['input']>;
  emailMaxLength_not_contains?: InputMaybe<Scalars['String']['input']>;
  emailMaxLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  messageMaxLength?: InputMaybe<Scalars['String']['input']>;
  messageMaxLength_contains?: InputMaybe<Scalars['String']['input']>;
  messageMaxLength_exists?: InputMaybe<Scalars['Boolean']['input']>;
  messageMaxLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  messageMaxLength_not?: InputMaybe<Scalars['String']['input']>;
  messageMaxLength_not_contains?: InputMaybe<Scalars['String']['input']>;
  messageMaxLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  messageRequired?: InputMaybe<Scalars['String']['input']>;
  messageRequired_contains?: InputMaybe<Scalars['String']['input']>;
  messageRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  messageRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  messageRequired_not?: InputMaybe<Scalars['String']['input']>;
  messageRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  messageRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameMaxLength?: InputMaybe<Scalars['String']['input']>;
  nameMaxLength_contains?: InputMaybe<Scalars['String']['input']>;
  nameMaxLength_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameMaxLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameMaxLength_not?: InputMaybe<Scalars['String']['input']>;
  nameMaxLength_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameMaxLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRequired?: InputMaybe<Scalars['String']['input']>;
  nameRequired_contains?: InputMaybe<Scalars['String']['input']>;
  nameRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRequired_not?: InputMaybe<Scalars['String']['input']>;
  nameRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roleMaxLength?: InputMaybe<Scalars['String']['input']>;
  roleMaxLength_contains?: InputMaybe<Scalars['String']['input']>;
  roleMaxLength_exists?: InputMaybe<Scalars['Boolean']['input']>;
  roleMaxLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roleMaxLength_not?: InputMaybe<Scalars['String']['input']>;
  roleMaxLength_not_contains?: InputMaybe<Scalars['String']['input']>;
  roleMaxLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ValidationMessagesLinkingCollections = {
  __typename?: 'ValidationMessagesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  formCollection?: Maybe<FormCollection>;
};


export type ValidationMessagesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ValidationMessagesLinkingCollectionsFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ValidationMessagesLinkingCollectionsFormCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ValidationMessagesLinkingCollectionsFormCollectionOrder {
  EmailResendButtonLabelAsc = 'emailResendButtonLabel_ASC',
  EmailResendButtonLabelDesc = 'emailResendButtonLabel_DESC',
  EmailVerificationDescriptionAsc = 'emailVerificationDescription_ASC',
  EmailVerificationDescriptionDesc = 'emailVerificationDescription_DESC',
  EmailVerificationTitleAsc = 'emailVerificationTitle_ASC',
  EmailVerificationTitleDesc = 'emailVerificationTitle_DESC',
  ErrorButtonLabelAsc = 'errorButtonLabel_ASC',
  ErrorButtonLabelDesc = 'errorButtonLabel_DESC',
  ErrorContactEmailAsc = 'errorContactEmail_ASC',
  ErrorContactEmailDesc = 'errorContactEmail_DESC',
  ErrorDescriptionAsc = 'errorDescription_ASC',
  ErrorDescriptionDesc = 'errorDescription_DESC',
  ErrorTitleAsc = 'errorTitle_ASC',
  ErrorTitleDesc = 'errorTitle_DESC',
  GdprNoticeDetailsAsc = 'gdprNoticeDetails_ASC',
  GdprNoticeDetailsDesc = 'gdprNoticeDetails_DESC',
  GdprNoticeIntroAsc = 'gdprNoticeIntro_ASC',
  GdprNoticeIntroDesc = 'gdprNoticeIntro_DESC',
  GdprNoticeLinkTextAsc = 'gdprNoticeLinkText_ASC',
  GdprNoticeLinkTextDesc = 'gdprNoticeLinkText_DESC',
  SendMessageLabelAsc = 'sendMessageLabel_ASC',
  SendMessageLabelDesc = 'sendMessageLabel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ValidationMessagesOrder {
  ConsentRequiredAsc = 'consentRequired_ASC',
  ConsentRequiredDesc = 'consentRequired_DESC',
  EmailInvalidAsc = 'emailInvalid_ASC',
  EmailInvalidDesc = 'emailInvalid_DESC',
  EmailMaxLengthAsc = 'emailMaxLength_ASC',
  EmailMaxLengthDesc = 'emailMaxLength_DESC',
  MessageMaxLengthAsc = 'messageMaxLength_ASC',
  MessageMaxLengthDesc = 'messageMaxLength_DESC',
  MessageRequiredAsc = 'messageRequired_ASC',
  MessageRequiredDesc = 'messageRequired_DESC',
  NameMaxLengthAsc = 'nameMaxLength_ASC',
  NameMaxLengthDesc = 'nameMaxLength_DESC',
  NameRequiredAsc = 'nameRequired_ASC',
  NameRequiredDesc = 'nameRequired_DESC',
  RoleMaxLengthAsc = 'roleMaxLength_ASC',
  RoleMaxLengthDesc = 'roleMaxLength_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/verify) */
export type Verify = Entry & _Node & {
  __typename?: 'Verify';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  errorDescription?: Maybe<Scalars['String']['output']>;
  errorTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<VerifyLinkingCollections>;
  successDescription?: Maybe<Scalars['String']['output']>;
  successTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/verify) */
export type VerifyErrorDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/verify) */
export type VerifyErrorTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/verify) */
export type VerifyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/verify) */
export type VerifySuccessDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/zb28mfcpbphv/content_types/verify) */
export type VerifySuccessTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyCollection = {
  __typename?: 'VerifyCollection';
  items: Array<Maybe<Verify>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VerifyFilter = {
  AND?: InputMaybe<Array<InputMaybe<VerifyFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VerifyFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  errorDescription?: InputMaybe<Scalars['String']['input']>;
  errorDescription_contains?: InputMaybe<Scalars['String']['input']>;
  errorDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  errorDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorDescription_not?: InputMaybe<Scalars['String']['input']>;
  errorDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorTitle?: InputMaybe<Scalars['String']['input']>;
  errorTitle_contains?: InputMaybe<Scalars['String']['input']>;
  errorTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  errorTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  errorTitle_not?: InputMaybe<Scalars['String']['input']>;
  errorTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  errorTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  successDescription?: InputMaybe<Scalars['String']['input']>;
  successDescription_contains?: InputMaybe<Scalars['String']['input']>;
  successDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  successDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  successDescription_not?: InputMaybe<Scalars['String']['input']>;
  successDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  successDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  successTitle?: InputMaybe<Scalars['String']['input']>;
  successTitle_contains?: InputMaybe<Scalars['String']['input']>;
  successTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  successTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  successTitle_not?: InputMaybe<Scalars['String']['input']>;
  successTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  successTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type VerifyLinkingCollections = {
  __typename?: 'VerifyLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VerifyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum VerifyOrder {
  ErrorDescriptionAsc = 'errorDescription_ASC',
  ErrorDescriptionDesc = 'errorDescription_DESC',
  ErrorTitleAsc = 'errorTitle_ASC',
  ErrorTitleDesc = 'errorTitle_DESC',
  SuccessDescriptionAsc = 'successDescription_ASC',
  SuccessDescriptionDesc = 'successDescription_DESC',
  SuccessTitleAsc = 'successTitle_ASC',
  SuccessTitleDesc = 'successTitle_DESC',
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

export type CfDataCollectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfDataCollectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfDataCollectionNestedFilter>>>;
  cloudflareDetails?: InputMaybe<Scalars['String']['input']>;
  cloudflareDetails_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflareDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareDetails_not?: InputMaybe<Scalars['String']['input']>;
  cloudflareDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareIntro?: InputMaybe<Scalars['String']['input']>;
  cloudflareIntro_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflareIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareIntro_not?: InputMaybe<Scalars['String']['input']>;
  cloudflareIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflarePrivacyPolicy?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflarePrivacyPolicyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflarePrivacyPolicyLink_not?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflarePrivacyPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflarePrivacyPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflarePrivacyPolicy_not?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflarePrivacyPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareTitle?: InputMaybe<Scalars['String']['input']>;
  cloudflareTitle_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cloudflareTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cloudflareTitle_not?: InputMaybe<Scalars['String']['input']>;
  cloudflareTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  cloudflareTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormIntro?: InputMaybe<Scalars['String']['input']>;
  contactFormIntro_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormIntro_not?: InputMaybe<Scalars['String']['input']>;
  contactFormIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabase?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicy?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormSupabasePrivacyPolicyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabasePrivacyPolicyLink_not?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabasePrivacyPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormSupabasePrivacyPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabasePrivacyPolicy_not?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabasePrivacyPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabase_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabase_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormSupabase_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormSupabase_not?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabase_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormSupabase_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormTitle?: InputMaybe<Scalars['String']['input']>;
  contactFormTitle_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contactFormTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contactFormTitle_not?: InputMaybe<Scalars['String']['input']>;
  contactFormTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  contactFormTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  legalBasisList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisTitle?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisTitle_not?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageDurationDetails?: InputMaybe<Scalars['String']['input']>;
  storageDurationDetails_contains?: InputMaybe<Scalars['String']['input']>;
  storageDurationDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storageDurationDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageDurationDetails_not?: InputMaybe<Scalars['String']['input']>;
  storageDurationDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  storageDurationDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageDurationTitle?: InputMaybe<Scalars['String']['input']>;
  storageDurationTitle_contains?: InputMaybe<Scalars['String']['input']>;
  storageDurationTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storageDurationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageDurationTitle_not?: InputMaybe<Scalars['String']['input']>;
  storageDurationTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  storageDurationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfHostingNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHostingNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHostingNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  netlifyContractualClauses?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyContractualClausesLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyContractualClausesLink_not?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClausesLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyContractualClauses_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClauses_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyContractualClauses_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyContractualClauses_not?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClauses_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyContractualClauses_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessing?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreement?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyDataProcessingAgreementLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingAgreementLink_not?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreementLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingAgreement_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyDataProcessingAgreement_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingAgreement_not?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreement_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingAgreement_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingLink?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingLink_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyDataProcessingLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessingLink_not?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessingLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessing_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyDataProcessing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyDataProcessing_not?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessing_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyDataProcessing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyHostingInfo?: InputMaybe<Scalars['String']['input']>;
  netlifyHostingInfo_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyHostingInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyHostingInfo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyHostingInfo_not?: InputMaybe<Scalars['String']['input']>;
  netlifyHostingInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyHostingInfo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyPrivacyPolicy?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyPrivacyPolicyLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyPrivacyPolicyLink_not?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicyLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyPrivacyPolicy_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyPrivacyPolicy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyPrivacyPolicy_not?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicy_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyPrivacyPolicy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyTitle?: InputMaybe<Scalars['String']['input']>;
  netlifyTitle_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  netlifyTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  netlifyTitle_not?: InputMaybe<Scalars['String']['input']>;
  netlifyTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  netlifyTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfLabelNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLabelNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLabelNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message?: InputMaybe<Scalars['String']['input']>;
  message_contains?: InputMaybe<Scalars['String']['input']>;
  message_exists?: InputMaybe<Scalars['Boolean']['input']>;
  message_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  message_not?: InputMaybe<Scalars['String']['input']>;
  message_not_contains?: InputMaybe<Scalars['String']['input']>;
  message_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_contains?: InputMaybe<Scalars['String']['input']>;
  role_exists?: InputMaybe<Scalars['Boolean']['input']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  role_not?: InputMaybe<Scalars['String']['input']>;
  role_not_contains?: InputMaybe<Scalars['String']['input']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type CfNotesAndLegalInformationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNotesAndLegalInformationNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNotesAndLegalInformationNestedFilter>>>;
  complaintRightDetails?: InputMaybe<Scalars['String']['input']>;
  complaintRightDetails_contains?: InputMaybe<Scalars['String']['input']>;
  complaintRightDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  complaintRightDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  complaintRightDetails_not?: InputMaybe<Scalars['String']['input']>;
  complaintRightDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  complaintRightDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  complaintRightTitle?: InputMaybe<Scalars['String']['input']>;
  complaintRightTitle_contains?: InputMaybe<Scalars['String']['input']>;
  complaintRightTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  complaintRightTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  complaintRightTitle_not?: InputMaybe<Scalars['String']['input']>;
  complaintRightTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  complaintRightTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataProtectionDetails?: InputMaybe<Scalars['String']['input']>;
  dataProtectionDetails_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataProtectionDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionDetails_not?: InputMaybe<Scalars['String']['input']>;
  dataProtectionDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionIntro?: InputMaybe<Scalars['String']['input']>;
  dataProtectionIntro_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataProtectionIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionIntro_not?: InputMaybe<Scalars['String']['input']>;
  dataProtectionIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionNotice?: InputMaybe<Scalars['String']['input']>;
  dataProtectionNotice_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionNotice_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataProtectionNotice_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionNotice_not?: InputMaybe<Scalars['String']['input']>;
  dataProtectionNotice_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionNotice_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionTitle?: InputMaybe<Scalars['String']['input']>;
  dataProtectionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataProtectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataProtectionTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataProtectionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataProtectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataStorageDurationDetails?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationDetails_contains?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataStorageDurationDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataStorageDurationDetails_not?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataStorageDurationTitle?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataStorageDurationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataStorageDurationTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataStorageDurationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisDetails?: InputMaybe<Scalars['String']['input']>;
  legalBasisDetails_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisDetails_not?: InputMaybe<Scalars['String']['input']>;
  legalBasisDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisIntro?: InputMaybe<Scalars['String']['input']>;
  legalBasisIntro_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisIntro_not?: InputMaybe<Scalars['String']['input']>;
  legalBasisIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisTitle?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  legalBasisTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalBasisTitle_not?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  legalBasisTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyCity?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyCity_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyCity_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyCity_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyCity_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyCity_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyCity_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyEmail?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyEmailLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyEmailLabel_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmailLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyEmail_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmail_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyEmail_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyEmail_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmail_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyEmail_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyInfo?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyInfo_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyInfo_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyInfo_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyInfo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyIntro?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyIntro_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyIntro_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyName?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyName_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyName_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyName_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyPostalCode?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyPostalCode_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyPostalCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyPostalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyPostalCode_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyPostalCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyPostalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyRole?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyRole_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyRole_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyRole_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyRole_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyRole_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyRole_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyStreet?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyStreet_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyStreet_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyStreet_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyStreet_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyStreet_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyStreet_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyTitle?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyTitle_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionDetails?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionDetails_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionDetails_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sslTlsEncryptionDetails_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionDetails_not?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionDetails_not_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionDetails_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionIntro?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionIntro_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sslTlsEncryptionIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionIntro_not?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionTitle?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sslTlsEncryptionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sslTlsEncryptionTitle_not?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  sslTlsEncryptionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsIntro?: InputMaybe<Scalars['String']['input']>;
  userRightsIntro_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsIntro_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsIntro_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsIntro_not?: InputMaybe<Scalars['String']['input']>;
  userRightsIntro_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsIntro_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsTitle?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsTitle_not?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPrivacyOverviewNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPrivacyOverviewNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPrivacyOverviewNestedFilter>>>;
  analysisToolsDetailsText?: InputMaybe<Scalars['String']['input']>;
  analysisToolsDetailsText_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsDetailsText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  analysisToolsDetailsText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsDetailsText_not?: InputMaybe<Scalars['String']['input']>;
  analysisToolsDetailsText_not_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsDetailsText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsIntroText?: InputMaybe<Scalars['String']['input']>;
  analysisToolsIntroText_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsIntroText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  analysisToolsIntroText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsIntroText_not?: InputMaybe<Scalars['String']['input']>;
  analysisToolsIntroText_not_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsIntroText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsTitle?: InputMaybe<Scalars['String']['input']>;
  analysisToolsTitle_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  analysisToolsTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  analysisToolsTitle_not?: InputMaybe<Scalars['String']['input']>;
  analysisToolsTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  analysisToolsTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dataAutomaticCaptureText?: InputMaybe<Scalars['String']['input']>;
  dataAutomaticCaptureText_contains?: InputMaybe<Scalars['String']['input']>;
  dataAutomaticCaptureText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataAutomaticCaptureText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataAutomaticCaptureText_not?: InputMaybe<Scalars['String']['input']>;
  dataAutomaticCaptureText_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataAutomaticCaptureText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataCaptureTitle?: InputMaybe<Scalars['String']['input']>;
  dataCaptureTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataCaptureTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataCaptureTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataCaptureTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataCaptureTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataCaptureTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataCollectionTitle?: InputMaybe<Scalars['String']['input']>;
  dataCollectionTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataCollectionTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataCollectionTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataCollectionTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataCollectionTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataCollectionTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataDirectCaptureText?: InputMaybe<Scalars['String']['input']>;
  dataDirectCaptureText_contains?: InputMaybe<Scalars['String']['input']>;
  dataDirectCaptureText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataDirectCaptureText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataDirectCaptureText_not?: InputMaybe<Scalars['String']['input']>;
  dataDirectCaptureText_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataDirectCaptureText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPurposeDescription?: InputMaybe<Scalars['String']['input']>;
  dataPurposeDescription_contains?: InputMaybe<Scalars['String']['input']>;
  dataPurposeDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataPurposeDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPurposeDescription_not?: InputMaybe<Scalars['String']['input']>;
  dataPurposeDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataPurposeDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPurposeTitle?: InputMaybe<Scalars['String']['input']>;
  dataPurposeTitle_contains?: InputMaybe<Scalars['String']['input']>;
  dataPurposeTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dataPurposeTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dataPurposeTitle_not?: InputMaybe<Scalars['String']['input']>;
  dataPurposeTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  dataPurposeTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfoDescription?: InputMaybe<Scalars['String']['input']>;
  generalInfoDescription_contains?: InputMaybe<Scalars['String']['input']>;
  generalInfoDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  generalInfoDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfoDescription_not?: InputMaybe<Scalars['String']['input']>;
  generalInfoDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  generalInfoDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfoTitle?: InputMaybe<Scalars['String']['input']>;
  generalInfoTitle_contains?: InputMaybe<Scalars['String']['input']>;
  generalInfoTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  generalInfoTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  generalInfoTitle_not?: InputMaybe<Scalars['String']['input']>;
  generalInfoTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  generalInfoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyDescription?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyDescription_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyDescription_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyTitle?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  responsiblePartyTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  responsiblePartyTitle_not?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  responsiblePartyTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsContactText?: InputMaybe<Scalars['String']['input']>;
  userRightsContactText_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsContactText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsContactText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsContactText_not?: InputMaybe<Scalars['String']['input']>;
  userRightsContactText_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsContactText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsIntroText?: InputMaybe<Scalars['String']['input']>;
  userRightsIntroText_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsIntroText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsIntroText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsIntroText_not?: InputMaybe<Scalars['String']['input']>;
  userRightsIntroText_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsIntroText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsList_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsTitle?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  userRightsTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userRightsTitle_not?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  userRightsTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  logoInvert?: InputMaybe<Scalars['Boolean']['input']>;
  logoInvert_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoInvert_not?: InputMaybe<Scalars['Boolean']['input']>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote?: InputMaybe<Scalars['String']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quote_not?: InputMaybe<Scalars['String']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  quote_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfValidationMessagesNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfValidationMessagesNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfValidationMessagesNestedFilter>>>;
  consentRequired?: InputMaybe<Scalars['String']['input']>;
  consentRequired_contains?: InputMaybe<Scalars['String']['input']>;
  consentRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  consentRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  consentRequired_not?: InputMaybe<Scalars['String']['input']>;
  consentRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  consentRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  emailInvalid?: InputMaybe<Scalars['String']['input']>;
  emailInvalid_contains?: InputMaybe<Scalars['String']['input']>;
  emailInvalid_exists?: InputMaybe<Scalars['Boolean']['input']>;
  emailInvalid_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailInvalid_not?: InputMaybe<Scalars['String']['input']>;
  emailInvalid_not_contains?: InputMaybe<Scalars['String']['input']>;
  emailInvalid_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailMaxLength?: InputMaybe<Scalars['String']['input']>;
  emailMaxLength_contains?: InputMaybe<Scalars['String']['input']>;
  emailMaxLength_exists?: InputMaybe<Scalars['Boolean']['input']>;
  emailMaxLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  emailMaxLength_not?: InputMaybe<Scalars['String']['input']>;
  emailMaxLength_not_contains?: InputMaybe<Scalars['String']['input']>;
  emailMaxLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  messageMaxLength?: InputMaybe<Scalars['String']['input']>;
  messageMaxLength_contains?: InputMaybe<Scalars['String']['input']>;
  messageMaxLength_exists?: InputMaybe<Scalars['Boolean']['input']>;
  messageMaxLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  messageMaxLength_not?: InputMaybe<Scalars['String']['input']>;
  messageMaxLength_not_contains?: InputMaybe<Scalars['String']['input']>;
  messageMaxLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  messageRequired?: InputMaybe<Scalars['String']['input']>;
  messageRequired_contains?: InputMaybe<Scalars['String']['input']>;
  messageRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  messageRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  messageRequired_not?: InputMaybe<Scalars['String']['input']>;
  messageRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  messageRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameMaxLength?: InputMaybe<Scalars['String']['input']>;
  nameMaxLength_contains?: InputMaybe<Scalars['String']['input']>;
  nameMaxLength_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameMaxLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameMaxLength_not?: InputMaybe<Scalars['String']['input']>;
  nameMaxLength_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameMaxLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRequired?: InputMaybe<Scalars['String']['input']>;
  nameRequired_contains?: InputMaybe<Scalars['String']['input']>;
  nameRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nameRequired_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nameRequired_not?: InputMaybe<Scalars['String']['input']>;
  nameRequired_not_contains?: InputMaybe<Scalars['String']['input']>;
  nameRequired_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roleMaxLength?: InputMaybe<Scalars['String']['input']>;
  roleMaxLength_contains?: InputMaybe<Scalars['String']['input']>;
  roleMaxLength_exists?: InputMaybe<Scalars['Boolean']['input']>;
  roleMaxLength_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roleMaxLength_not?: InputMaybe<Scalars['String']['input']>;
  roleMaxLength_not_contains?: InputMaybe<Scalars['String']['input']>;
  roleMaxLength_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AboutContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type AboutContentQuery = { __typename?: 'Query', aboutCollection?: { __typename?: 'AboutCollection', items: Array<{ __typename?: 'About', title?: string | null, ageStatementPrefix?: string | null, age?: any | null, ageStatementSuffix?: string | null, professionalTitle?: string | null, locationStatement?: string | null, description?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null, experienceMetricsCollection?: { __typename?: 'AboutExperienceMetricsCollection', items: Array<{ __typename?: 'Metric', startYear?: number | null, labelPrefix?: string | null, labelSuffix?: string | null } | null> } | null } | null> } | null };

export type ContactContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type ContactContentQuery = { __typename?: 'Query', contactCollection?: { __typename?: 'ContactCollection', items: Array<{ __typename?: 'Contact', title?: string | null, subTitleMain?: string | null, subTitleHighlight?: string | null, description?: string | null, avatarTitle?: string | null, avatarDescription?: string | null, avatarImage?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null } | null> } | null, formCollection?: { __typename?: 'FormCollection', items: Array<{ __typename?: 'Form', gdprNoticeIntro?: string | null, gdprNoticeLinkText?: string | null, gdprNoticeDetails?: string | null, sendMessageLabel?: string | null, errorTitle?: string | null, errorDescription?: string | null, errorContactEmail?: string | null, errorButtonLabel?: string | null, emailVerificationTitle?: string | null, emailVerificationDescription?: string | null, emailResendButtonLabel?: string | null, labels?: { __typename?: 'Label', name?: string | null, email?: string | null, role?: string | null, message?: string | null } | null, validationMessages?: { __typename?: 'ValidationMessages', nameRequired?: string | null, nameMaxLength?: string | null, emailInvalid?: string | null, emailMaxLength?: string | null, roleMaxLength?: string | null, messageRequired?: string | null, messageMaxLength?: string | null, consentRequired?: string | null } | null } | null> } | null, testimonialsCollection?: { __typename?: 'TestimonialsCollection', items: Array<{ __typename?: 'Testimonials', title?: string | null, prevSlideLabel?: string | null, nextSlideLabel?: string | null, quotesCollection?: { __typename?: 'TestimonialsQuotesCollection', items: Array<{ __typename?: 'Testimonial', quote?: string | null, author?: string | null, jobTitle?: string | null, logoInvert?: boolean | null, logo?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null } | null> } | null } | null> } | null };

export type FooterContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type FooterContentQuery = { __typename?: 'Query', footerCollection?: { __typename?: 'FooterCollection', items: Array<{ __typename?: 'Footer', title?: string | null, description?: string | null, followSection?: string | null, followGithub?: string | null, followStackOverflow?: string | null, legalSection?: string | null, legalNotice?: string | null, legalPrivacyPolicy?: string | null, gitHubHref?: string | null, gitHubHrefLabel?: string | null, stackOverflowHref?: string | null, stackOverflowHrefLabel?: string | null, kofiHref?: string | null, kofiHrefLabel?: string | null } | null> } | null };

export type HomeContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type HomeContentQuery = { __typename?: 'Query', homeCollection?: { __typename?: 'HomeCollection', items: Array<{ __typename?: 'Home', greeting?: string | null, introHeadingMain?: string | null, introHeadingHighlight?: string | null, introSubheading?: string | null, introDescription?: string | null, ctaButtonLabel?: string | null, image?: { __typename?: 'Asset', url?: string | null, width?: number | null, height?: number | null, description?: string | null } | null } | null> } | null };

export type LegalNoticeContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type LegalNoticeContentQuery = { __typename?: 'Query', legalNoticeCollection?: { __typename?: 'LegalNoticeCollection', items: Array<{ __typename?: 'LegalNotice', title?: string | null, subTitleInformation?: string | null, addressName?: string | null, addressJobTitle?: string | null, addressStreet?: string | null, addressPostalCode?: string | null, addressCity?: string | null, subTitleContact?: string | null, contactEmailLabel?: string | null, contactEmail?: string | null, contactFormLabel?: string | null, subTitleVat?: string | null, vatLabel?: string | null, vatId?: string | null, subTitleDispute?: string | null, disputeLabel?: string | null, disputeStatement?: string | null } | null> } | null };

export type MetadataHomeContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type MetadataHomeContentQuery = { __typename?: 'Query', metaDataHomeCollection?: { __typename?: 'MetaDataHomeCollection', items: Array<{ __typename?: 'MetaDataHome', title?: string | null, description?: string | null, keywords?: Array<string | null> | null } | null> } | null };

export type MetadataLegalContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type MetadataLegalContentQuery = { __typename?: 'Query', metaDataLegalCollection?: { __typename?: 'MetaDataLegalCollection', items: Array<{ __typename?: 'MetaDataLegal', title?: string | null, description?: string | null } | null> } | null };

export type MetadataPrivacyContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type MetadataPrivacyContentQuery = { __typename?: 'Query', metaDataPrivacyCollection?: { __typename?: 'MetaDataPrivacyCollection', items: Array<{ __typename?: 'MetaDataPrivacy', title?: string | null, description?: string | null } | null> } | null };

export type NavbarContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type NavbarContentQuery = { __typename?: 'Query', navbarCollection?: { __typename?: 'NavbarCollection', items: Array<{ __typename?: 'Navbar', usFlagDescription?: string | null, deFlagDescription?: string | null, switchLanguageLabel?: string | null, homeLabel?: string | null, aboutLabel?: string | null, servicesLabel?: string | null, contactLabel?: string | null, switchThemeLabel?: string | null } | null> } | null };

export type NotFoundContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type NotFoundContentQuery = { __typename?: 'Query', notFoundCollection?: { __typename?: 'NotFoundCollection', items: Array<{ __typename?: 'NotFound', title?: string | null, subTitleMain?: string | null, subTitleHighlight?: string | null, description?: string | null, ctaButtonLabel?: string | null } | null> } | null };

export type PrivacyPolicyContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type PrivacyPolicyContentQuery = { __typename?: 'Query', privacyPolicyCollection?: { __typename?: 'PrivacyPolicyCollection', items: Array<{ __typename?: 'PrivacyPolicy', title?: string | null, lastModified?: string | null, introDescription?: string | null, privacyOverview?: { __typename?: 'PrivacyOverview', title?: string | null, generalInfoTitle?: string | null, generalInfoDescription?: string | null, dataCollectionTitle?: string | null, responsiblePartyTitle?: string | null, responsiblePartyDescription?: string | null, dataCaptureTitle?: string | null, dataDirectCaptureText?: string | null, dataAutomaticCaptureText?: string | null, dataPurposeTitle?: string | null, dataPurposeDescription?: string | null, userRightsTitle?: string | null, userRightsIntroText?: string | null, userRightsList?: Array<string | null> | null, userRightsContactText?: string | null, analysisToolsTitle?: string | null, analysisToolsIntroText?: string | null, analysisToolsDetailsText?: string | null } | null, hosting?: { __typename?: 'Hosting', title?: string | null, netlifyTitle?: string | null, netlifyHostingInfo?: string | null, netlifyDataProcessing?: string | null, netlifyDataProcessingLink?: string | null, netlifyContractualClauses?: string | null, netlifyContractualClausesLink?: string | null, netlifyDataProcessingAgreement?: string | null, netlifyDataProcessingAgreementLink?: string | null, netlifyPrivacyPolicy?: string | null, netlifyPrivacyPolicyLink?: string | null } | null, notesAndLegalInformation?: { __typename?: 'NotesAndLegalInformation', title?: string | null, dataProtectionTitle?: string | null, dataProtectionIntro?: string | null, dataProtectionDetails?: string | null, dataProtectionNotice?: string | null, responsiblePartyTitle?: string | null, responsiblePartyIntro?: string | null, responsiblePartyName?: string | null, responsiblePartyRole?: string | null, responsiblePartyStreet?: string | null, responsiblePartyPostalCode?: string | null, responsiblePartyCity?: string | null, responsiblePartyEmailLabel?: string | null, responsiblePartyEmail?: string | null, responsiblePartyInfo?: string | null, dataStorageDurationTitle?: string | null, dataStorageDurationDetails?: string | null, legalBasisTitle?: string | null, legalBasisIntro?: string | null, legalBasisList?: Array<string | null> | null, legalBasisDetails?: string | null, userRightsTitle?: string | null, userRightsIntro?: string | null, userRightsList?: Array<string | null> | null, complaintRightTitle?: string | null, complaintRightDetails?: string | null, sslTlsEncryptionTitle?: string | null, sslTlsEncryptionIntro?: string | null, sslTlsEncryptionDetails?: string | null } | null, dataCollection?: { __typename?: 'DataCollection', title?: string | null, cloudflareTitle?: string | null, cloudflareIntro?: string | null, cloudflareDetails?: string | null, cloudflarePrivacyPolicy?: string | null, cloudflarePrivacyPolicyLink?: string | null, contactFormTitle?: string | null, contactFormIntro?: string | null, contactFormSupabase?: string | null, contactFormSupabasePrivacyPolicy?: string | null, contactFormSupabasePrivacyPolicyLink?: string | null, legalBasisTitle?: string | null, legalBasisList?: Array<string | null> | null, storageDurationTitle?: string | null, storageDurationDetails?: string | null } | null } | null> } | null };

export type ServiceBannerContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type ServiceBannerContentQuery = { __typename?: 'Query', serviceBannerCollection?: { __typename?: 'ServiceBannerCollection', items: Array<{ __typename?: 'ServiceBanner', services?: Array<string | null> | null } | null> } | null };

export type ServicesContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type ServicesContentQuery = { __typename?: 'Query', servicesCollection?: { __typename?: 'ServicesCollection', items: Array<{ __typename?: 'Services', title?: string | null, subTitleMain?: string | null, subTitleHighlight?: string | null, serviceEntriesCollection?: { __typename?: 'ServicesServiceEntriesCollection', items: Array<{ __typename?: 'Service', iconName?: string | null, title?: string | null, tags?: Array<string | null> | null, description?: string | null } | null> } | null } | null> } | null };

export type VerifyContentQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type VerifyContentQuery = { __typename?: 'Query', verifyCollection?: { __typename?: 'VerifyCollection', items: Array<{ __typename?: 'Verify', successTitle?: string | null, successDescription?: string | null, errorTitle?: string | null, errorDescription?: string | null } | null> } | null };


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
      avatarImage {
        url
        width
        height
        description
      }
      avatarTitle
      avatarDescription
    }
  }
  formCollection(limit: 1, locale: $locale) {
    items {
      labels {
        name
        email
        role
        message
      }
      validationMessages {
        nameRequired
        nameMaxLength
        emailInvalid
        emailMaxLength
        roleMaxLength
        messageRequired
        messageMaxLength
        consentRequired
      }
      gdprNoticeIntro
      gdprNoticeLinkText
      gdprNoticeDetails
      sendMessageLabel
      errorTitle
      errorDescription
      errorContactEmail
      errorButtonLabel
      emailVerificationTitle
      emailVerificationDescription
      emailResendButtonLabel
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
            logo {
              url
              width
              height
              description
            }
            logoInvert
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
      title
      description
      followSection
      followGithub
      followStackOverflow
      legalSection
      legalNotice
      legalPrivacyPolicy
      gitHubHref
      gitHubHrefLabel
      stackOverflowHref
      stackOverflowHrefLabel
      kofiHref
      kofiHrefLabel
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
export const LegalNoticeContentDocument = gql`
    query legalNoticeContent($locale: String) {
  legalNoticeCollection(limit: 1, locale: $locale) {
    items {
      title
      subTitleInformation
      addressName
      addressJobTitle
      addressStreet
      addressPostalCode
      addressCity
      subTitleContact
      contactEmailLabel
      contactEmail
      contactFormLabel
      subTitleVat
      vatLabel
      vatId
      subTitleDispute
      disputeLabel
      disputeStatement
    }
  }
}
    `;
export const MetadataHomeContentDocument = gql`
    query metadataHomeContent($locale: String) {
  metaDataHomeCollection(limit: 1, locale: $locale) {
    items {
      title
      description
      keywords
    }
  }
}
    `;
export const MetadataLegalContentDocument = gql`
    query metadataLegalContent($locale: String) {
  metaDataLegalCollection(limit: 1, locale: $locale) {
    items {
      title
      description
    }
  }
}
    `;
export const MetadataPrivacyContentDocument = gql`
    query metadataPrivacyContent($locale: String) {
  metaDataPrivacyCollection(limit: 1, locale: $locale) {
    items {
      title
      description
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
      switchLanguageLabel
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
export const PrivacyPolicyContentDocument = gql`
    query privacyPolicyContent($locale: String) {
  privacyPolicyCollection(limit: 1, locale: $locale) {
    items {
      title
      lastModified
      introDescription
      privacyOverview {
        title
        generalInfoTitle
        generalInfoDescription
        dataCollectionTitle
        responsiblePartyTitle
        responsiblePartyDescription
        dataCaptureTitle
        dataDirectCaptureText
        dataAutomaticCaptureText
        dataPurposeTitle
        dataPurposeDescription
        userRightsTitle
        userRightsIntroText
        userRightsList
        userRightsContactText
        analysisToolsTitle
        analysisToolsIntroText
        analysisToolsDetailsText
      }
      hosting {
        title
        netlifyTitle
        netlifyHostingInfo
        netlifyDataProcessing
        netlifyDataProcessingLink
        netlifyContractualClauses
        netlifyContractualClausesLink
        netlifyDataProcessingAgreement
        netlifyDataProcessingAgreementLink
        netlifyPrivacyPolicy
        netlifyPrivacyPolicyLink
      }
      notesAndLegalInformation {
        title
        dataProtectionTitle
        dataProtectionIntro
        dataProtectionDetails
        dataProtectionNotice
        responsiblePartyTitle
        responsiblePartyIntro
        responsiblePartyName
        responsiblePartyRole
        responsiblePartyStreet
        responsiblePartyPostalCode
        responsiblePartyCity
        responsiblePartyEmailLabel
        responsiblePartyEmail
        responsiblePartyInfo
        dataStorageDurationTitle
        dataStorageDurationDetails
        legalBasisTitle
        legalBasisIntro
        legalBasisList
        legalBasisDetails
        userRightsTitle
        userRightsIntro
        userRightsList
        complaintRightTitle
        complaintRightDetails
        sslTlsEncryptionTitle
        sslTlsEncryptionIntro
        sslTlsEncryptionDetails
      }
      dataCollection {
        title
        cloudflareTitle
        cloudflareIntro
        cloudflareDetails
        cloudflarePrivacyPolicy
        cloudflarePrivacyPolicyLink
        contactFormTitle
        contactFormIntro
        contactFormSupabase
        contactFormSupabasePrivacyPolicy
        contactFormSupabasePrivacyPolicyLink
        legalBasisTitle
        legalBasisList
        storageDurationTitle
        storageDurationDetails
      }
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
export const VerifyContentDocument = gql`
    query verifyContent($locale: String) {
  verifyCollection(limit: 1, locale: $locale) {
    items {
      successTitle
      successDescription
      errorTitle
      errorDescription
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
    legalNoticeContent(variables?: LegalNoticeContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LegalNoticeContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LegalNoticeContentQuery>(LegalNoticeContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'legalNoticeContent', 'query', variables);
    },
    metadataHomeContent(variables?: MetadataHomeContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MetadataHomeContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetadataHomeContentQuery>(MetadataHomeContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metadataHomeContent', 'query', variables);
    },
    metadataLegalContent(variables?: MetadataLegalContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MetadataLegalContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetadataLegalContentQuery>(MetadataLegalContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metadataLegalContent', 'query', variables);
    },
    metadataPrivacyContent(variables?: MetadataPrivacyContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MetadataPrivacyContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MetadataPrivacyContentQuery>(MetadataPrivacyContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'metadataPrivacyContent', 'query', variables);
    },
    navbarContent(variables?: NavbarContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NavbarContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NavbarContentQuery>(NavbarContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'navbarContent', 'query', variables);
    },
    notFoundContent(variables?: NotFoundContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<NotFoundContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NotFoundContentQuery>(NotFoundContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'notFoundContent', 'query', variables);
    },
    privacyPolicyContent(variables?: PrivacyPolicyContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<PrivacyPolicyContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PrivacyPolicyContentQuery>(PrivacyPolicyContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'privacyPolicyContent', 'query', variables);
    },
    serviceBannerContent(variables?: ServiceBannerContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServiceBannerContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServiceBannerContentQuery>(ServiceBannerContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'serviceBannerContent', 'query', variables);
    },
    servicesContent(variables?: ServicesContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ServicesContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ServicesContentQuery>(ServicesContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'servicesContent', 'query', variables);
    },
    verifyContent(variables?: VerifyContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<VerifyContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyContentQuery>(VerifyContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'verifyContent', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;