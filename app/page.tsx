import { notFound } from "next/navigation";
import styles from "./page.module.css";
import MainNewsFeed from "./components/mainNewsFeed/MainNewsFeed";
import NewsCard from "./components/newsCard/NewsCard";
import NewsList from "./components/newsList/NewsList";
import Advert from "./components/advert/Advert";
import TopStory from "./components/topStory/TopStory";
import SingleNews from "./components/singleNews/SingleNews";
import { News } from "@/types/news";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error fetching news");
    notFound();
  }

  const newsList: News[] = await res.json();
  const topicTag: string = "US Elections 2020";

  const topicNews = newsList
    .filter((item) => item.tags?.includes(topicTag))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 4);

  const news = newsList
    .filter((news) => news.author?.name === null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  const columnists = newsList
    .filter((news) => news.author?.name !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 2);

  const newsItem = {
    category: "MAGAZINE",
    date: "5 DAYS AGO",
    title: "Centuries of tradition: Why Indonesian fishermen rescue Rohingya",
    description:
      "How local fishermen obeyed an ancient custom, defying government orders by doing so.",
    authors: ["Johanes Hutabarat", "Jennar Kiansantang"],
    image: "/images/news.jpg",
  };

  const firstSevenNews = news.slice(0, 7);

  const nextThreeNews = news.slice(7, 10);

  const nextFourNews = news.slice(10, 14);

  const latestSportNews = news
    .filter((news) => news.category.toUpperCase() === "SPORT")
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ).slice(0);



  return (
    <>
      <div className={styles.container}>
        <MainNewsFeed
          firstSevenNews={firstSevenNews}
          columnists={columnists}
          newsList={newsList}
        />
      </div>
      <NewsCard topicNews={topicNews} topicTag={topicTag} />
      <div className={styles.container}>
        <div className={styles.newSectionContainer}>
          <div className={styles.newsSection}>
            <NewsList lastestNews={nextThreeNews} />
            <TopStory />
            <NewsList lastestNews={nextFourNews} />
            <SingleNews news={newsItem} />
            <NewsList lastestNews={latestSportNews} />
          </div>
          <Advert />
        </div>
      </div>
    </>
  );
}
