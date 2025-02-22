import Image from "next/image";
import styles from "./MainNewsFeed.module.css";
import PopularNews from "../popularNews/PopularNews";
import TopicHeader from "../topicHeader/TopicHeader";
import Sidebar from "../sidebar/Sidebar";
import { News } from "@/types/news";

interface MainNewsFeedProps {
  news: News[];
  columnists: News[];
  newsList: News[];
}
const MainNewsFeed: React.FC<MainNewsFeedProps> = ({
  news,
  columnists,
  newsList,
}) => {
  const getRelatedNews = (mainNews: News, allNews: News[]) => {
    if (!mainNews) return [];

    const mainTags = new Set(mainNews.tags);

    return allNews
      .slice(7)
      .filter((item) => item.id !== mainNews.id) // Exclude the same news
      .map((item) => {
        const commonTags = item.tags.filter((tag) => mainTags.has(tag)).length;
        return { ...item, relevanceScore: commonTags };
      })
      .sort((a, b) => b.relevanceScore - a.relevanceScore);
  };

  const relatedNews = news.length > 0 ? getRelatedNews(news[0], news) : [];

  return (
    <>
      <TopicHeader />
      <div className={styles.container}>
        <div className={styles.mainNews}>
          <div className={styles.mainImage}>
            <Image
              src={news[0].image || "/images/TrtWorld.jpg"}
              alt={news[0].title || "main news image"}
              width={664}
              height={373}
            />
          </div>
          <span className={styles.tag}>{news[0]?.category}</span>
          <h1 className={styles.mainTitle}>{news[0]?.title}</h1>
          <div className={styles.relatedStories}>
            <span>RELATED STORIES</span>
            <div className={styles.relatedStoriesTitles}>
              {relatedNews.slice(0, 3).map((item) => (
                <a href="#" key={item.id}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.sideNews}>
          <div className={styles.newsItem}>
            <Image
              src={news[1].image || "/images/TrtWorld.jpg"}
              alt={news[1].title || ""}
              width={296}
              height={166}
            />
            <h3>{news[1]?.title}</h3>
            <p>{news[1]?.subtitle}</p>
          </div>
          <div
            className={styles.newsItem}
            style={{ marginTop: "12px", border: "none" }}
          >
            <Image
              src={news[2].image || "/images/TrtWorld.jpg"}
              alt={news[2].title || ""}
              width={296}
              height={166}
            />
            <h3>{news[2]?.title}</h3>
            <p>{news[2]?.subtitle}</p>
          </div>
        </div>
        <Sidebar columnists={columnists} news={news} />
      </div>
      <PopularNews newsList={newsList} />
    </>
  );
};

export default MainNewsFeed;
