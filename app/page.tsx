import styles from "./page.module.css";

type News = {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  category: string;
  headline: boolean;
  article: string;
  chosen: boolean;
};

async function getNews(): Promise<News[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch news");
    return await res.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export default async function Home() {
  const newsList = await getNews();
  return <div className={styles.page}>{newsList[0].title}</div>;
}
