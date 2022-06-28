export const sources = [
  { id: 1, name: 'lenta.ru' },
  { id: 2, name: 'habrahabr.ru' },
  { id: 3, name: 'other' },
];

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string
}

export interface IDataSources {
  status: string;
  sources?: Array<NewsSource>;
  totalResults?: number;
  articles?: Array<NewsText>;
}

export type NewsSource = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

export type NewsText = {
  source: {
    id?: string;
    name: string;
  };
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
};
