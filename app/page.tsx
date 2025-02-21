import { notFound } from "next/navigation";
import styles from "./page.module.css";
import MainNewsFeed from "./components/mainNewsFeed/MainNewsFeed";
import NewsCard from "./components/newsCard/NewsCard";
import NewsList from "./components/newsList/NewsList";
import Advert from "./components/advert/Advert";
import TopStory from "./components/topStory/TopStory";
import SingleNews from "./components/singleNews/SingleNews";

type News = {
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
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error fetching news");
    notFound();
  }

  const newsList: News[] = await res.json();

  const mainNews = {
    title: "Is Covid-19 ‘herd immunity’ really working in Pakistan?",
    description:
      "Surveys suggest coronavirus has infected so many people, that in some countries, immunity to the deadly virus has been developed. But experts remain sceptical.",
    image: "/images/covid-pakistan.jpg",
  };

  const sideNews = [
    {
      title: "Valentino Chooses Milan For Unusual Live Show, Not Paris",
      image: "/images/valentino.jpg",
    },
    {
      title: "Australian PM Morrison: World Needs To Know Origins Of Covid-19",
      image: "/images/morrison.jpg",
    },
    {
      title: "Why an effective vaccine is just the start of disease control",
      image: "/images/vaccine.jpg",
    },
  ];

  const newsItem = {
    category: "MAGAZINE",
    date: "5 DAYS AGO",
    title: "Centuries of tradition: Why Indonesian fishermen rescue Rohingya",
    description:
      "How local fishermen obeyed an ancient custom, defying government orders by doing so.",
    authors: ["Johanes Hutabarat", "Jennar Kiansantang"],
    image: "/images/news.jpg",
  };

  return (
    <>
      <div className={styles.container}>
        <MainNewsFeed newsList={newsList} />
      </div>
      <NewsCard />
      <div className={styles.container}>
        <div className={styles.newSectionContainer}>
          <div className={styles.newsSection}>
            <NewsList />
            <TopStory mainNews={mainNews} sideNews={sideNews} />
            <SingleNews news={newsItem} />
          </div>
          <Advert />
        </div>
      </div>
    </>
  );
}
