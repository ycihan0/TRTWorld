import { notFound } from "next/navigation";
import styles from "./page.module.css";
import MainNewsFeed from "./components/mainNewsFeed/MainNewsFeed";
import NewsCard from "./components/newsCard/NewsCard";

// type News = {
//   id: string;
//   title: string;
//   description: string;
//   date: string;
//   images: string[];
//   category: string;
//   headline: boolean;
//   article: string;
//   chosen: boolean;
// };

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error fetching news");
    notFound();
  }

  // const newsList: News[] = await res.json();

  return (
    <>
      <div className={styles.container}>
        <MainNewsFeed />
        
      </div>
      <NewsCard />
     
    </>
  );
}
