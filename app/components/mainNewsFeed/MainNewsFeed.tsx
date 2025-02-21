import Image from "next/image";
import styles from "./MainNewsFeed.module.css";
import PopularNews from "../popularNews/PopularNews";
import TopicHeader from "../topicHeader/TopicHeader";
import Sidebar from "../sidebar/Sidebar";

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
interface MainNewsFeedProps {
  newsList: News[];
}
const MainNewsFeed: React.FC<MainNewsFeedProps> = ({ newsList }) => {
  const news = newsList
    .filter((news) => news.author.name === null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  const columnists = newsList
    .filter((news) => news.author.name !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 2);

  const getRelatedNews = (mainNews: News, allNews: News[]) => {
    if (!mainNews) return [];

    const mainTags = new Set(mainNews.tags);

    return allNews
      .filter((item) => item.id !== mainNews.id) // Exclude the same news
      .map((item) => {
        const commonTags = item.tags.filter((tag) => mainTags.has(tag)).length;
        return { ...item, relevanceScore: commonTags };
      })
      .sort((a, b) => b.relevanceScore - a.relevanceScore); 
  };

  
  const relatedNews = news.length > 0 ? getRelatedNews(news[0], newsList) : [];



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
              {relatedNews.slice(0,3).map((item)=><a href="#" key={item.id}>{item.title}</a>)}
             
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
        <Sidebar columnists={columnists} />
      </div>
      <PopularNews />
    </>
  );
};

export default MainNewsFeed;
