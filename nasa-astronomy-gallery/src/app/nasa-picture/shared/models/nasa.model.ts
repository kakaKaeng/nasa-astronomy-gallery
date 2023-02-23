export interface DailyPicture {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface ImageData {
  center: string;
  title: string;
  keywords: string[];
  nasa_id: string;
  date_created: Date;
  media_type: string;
  description: string;
  description_508: string;
  secondary_creator: string;
  location: string;
  album: string[];
  photographer: string;
}

export interface Link {
  href: string;
  rel: string;
  render: string;
}

export interface Item {
  href: string;
  data: ImageData[];
  links: Link[];
}

export interface Metadata {
  total_hits: number;
}

export interface LinkPagination {
  rel: string;
  prompt: string;
  href: string;
}

export interface Collection {
  version: string;
  href: string;
  items: Item[];
  metadata: Metadata;
  links: LinkPagination[];
}

export interface NasaImage {
  collection: Collection;
}
