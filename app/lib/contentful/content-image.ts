import { Asset, AssetLink } from 'contentful';

export type ContentImage = {
  src: string;
  alt: string;
};

export const parseContentfulContentImage = (
  asset?: Asset<undefined, string> | { sys: AssetLink },
): ContentImage | null => {
  if (!asset) {
    return null;
  }

  if (!('fields' in asset)) {
    return null;
  }

  return {
    src: asset.fields.file?.url || '',
    alt: asset.fields.description || '',
  };
};
