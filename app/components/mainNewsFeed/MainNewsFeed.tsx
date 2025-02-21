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

  // const getRelatedNews = (mainNews: News, allNews: News[]) => {
  //   if (!mainNews) return [];

  //   const mainTags = new Set(mainNews.tags);

  //   return allNews
  //     .filter((item) => item.id !== mainNews.id) // Aynı haberi hariç tut
  //     .map((item) => {
  //       const commonTags = item.tags.filter((tag) => mainTags.has(tag)).length;
  //       return { ...item, relevanceScore: commonTags };
  //     })
  //     .sort((a, b) => b.relevanceScore - a.relevanceScore); // En alakalı olanı en üste koy
  // };

  // // En güncel haberin ilgili haberlerini al
  // const relatedNews = news.length > 0 ? getRelatedNews(news[0], newsList) : [];

  // console.log("En alakalı haberler:", relatedNews);

  return (
    <>
      <TopicHeader />
      <div className={styles.container}>
        <div className={styles.mainNews}>
          <div className={styles.mainImage}>
            <Image src={news[0]?.image} alt="" width={664} height={373} />
          </div>
          <span className={styles.tag}>lala</span>
          <h1 className={styles.mainTitle}>lala</h1>
          <div className={styles.relatedStories}>
            <span>RELATED STORIES</span>
            <div className={styles.relatedStoriesTitles}>
              <a href="#">Calls grow for Azerbaijan, Armenia to end fighting</a>
              <a href="#">Turkish lawmakers condemn Armenian attacks</a>
              <a href="#">Azerbaijan downs Armenian drone</a>
            </div>
          </div>
        </div>

        <div className={styles.sideNews}>
          <div className={styles.newsItem}>
            <Image src="/images/biden.jpg" alt="" width={296} height={166} />
            <h3>The importance of Russia’s growing footprint in Iraq</h3>
            <p>
              The Kremlin has been building influence in the Iraqi energy
              sector...Why is Kosovo becoming a museum in honour of US
              politicians?Why is Kosovo becoming a museum in honour of US
              politicians?
            </p>
          </div>
          <div
            className={styles.newsItem}
            style={{ marginTop: "12px", border: "none" }}
          >
            <Image src="/images/biden.jpg" alt="" width={296} height={166} />
            <h3>The importance of Russia’s growing footprint in Iraq</h3>
            <p>
              The Kremlin has been building influence in the Iraqi energy
              sector...Why is Kosovo becoming a museum in honour of US
              politicians?Why is Kosovo becoming a museum in honour of US
              politicians?
            </p>
          </div>
        </div>
        <Sidebar columnists={columnists} />
      </div>
      <PopularNews />
    </>
  );
};

export default MainNewsFeed;
