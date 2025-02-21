export type News = {
    id: string;
    title: string;
    slug: string;
    subtitle: string;
    publishedAt: string;
    newsDate: string;
    author: {
      name: string | null;
      image: string | null;
    };
    description: string;
    source: string;
    tags: string[];
    image: string;
    category: string;
    content: string;
    viewCount: number;
    video:{
      "link": string | null;
      "time": string | null;
    };
  };
  