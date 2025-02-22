import Image from "next/image";
import styles from "./MainNewsFeed.module.css";
import PopularNews from "../popularNews/PopularNews";
import TopicHeader from "../topicHeader/TopicHeader";
import Sidebar from "../sidebar/Sidebar";
import { News } from "@/types/news";
import Link from "next/link";

interface MainNewsFeedProps {
  firstSevenNews: News[];
  columnists: News[];
  newsList: News[];
}
const MainNewsFeed: React.FC<MainNewsFeedProps> = ({
  firstSevenNews,
  columnists,
  newsList,
}) => {
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

  const relatedNews =
    firstSevenNews.length > 0
      ? getRelatedNews(firstSevenNews[0], firstSevenNews)
      : [];

  return (
    <>
      <TopicHeader />
      <div className={styles.container}>
        <div className={styles.mainNews}>
          <Link
            href={`/${firstSevenNews[0].category}/${
              firstSevenNews[0].slug
            }-${firstSevenNews[0].id.substring(0, 8)}`}
            className={styles.mainImage}
          >
            <Image
              src={firstSevenNews[0].image || "/images/TrtWorld.jpg"}
              alt={firstSevenNews[0].title || "main news image"}
              width={664}
              height={373}
            />
          </Link>
          <span className={styles.tag}>{firstSevenNews[0]?.category}</span>
          <Link
            href={`/${firstSevenNews[0].category}/${
              firstSevenNews[0].slug
            }-${firstSevenNews[0].id.substring(0, 8)}`}
          >
            <h1 className={styles.mainTitle}>{firstSevenNews[0]?.title}</h1>
          </Link>

          <div className={styles.relatedStories}>
            <span>RELATED STORIES</span>
            <div className={styles.relatedStoriesTitles}>
              {relatedNews.slice(0, 3).map((item) => (
                <Link
                  href={`/${item.category}/${item.slug}-${item.id.substring(
                    0,
                    8
                  )}`}
                  key={item.id}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.sideNews}>
          <Link
            href={`/${firstSevenNews[1].category}/${
              firstSevenNews[1].slug
            }-${firstSevenNews[1].id.substring(0, 8)}`}
            className={styles.newsItem}
          >
            <Image
              src={firstSevenNews[1].image || "/images/TrtWorld.jpg"}
              alt={firstSevenNews[1].title || ""}
              width={296}
              height={166}
            />
            <h3>{firstSevenNews[1]?.title}</h3>
            <p>{firstSevenNews[1]?.subtitle}</p>
          </Link>
          <Link
            href={`/${firstSevenNews[2].category}/${
              firstSevenNews[2].slug
            }-${firstSevenNews[2].id.substring(0, 8)}`}
            className={styles.newsItem}
            style={{ marginTop: "12px", border: "none" }}
          >
            <Image
              src={firstSevenNews[2].image || "/images/TrtWorld.jpg"}
              alt={firstSevenNews[2].title || ""}
              width={296}
              height={166}
            />
            <h3>{firstSevenNews[2]?.title}</h3>
            <p>{firstSevenNews[2]?.subtitle}</p>
          </Link>
        </div>
        <Sidebar columnists={columnists} firstSevenNews={firstSevenNews} />
      </div>
      <PopularNews newsList={newsList} />
    </>
  );
};

export default MainNewsFeed;
