import Image from "next/image";
import styles from "./SingleNews.module.css";
import { News } from "@/types/news";
import { formatDistanceToNow } from "date-fns";

interface LastestMagazineNewsProps {
  categoryNews: News[];
}

const SingleNews: React.FC<LastestMagazineNewsProps> = ({ categoryNews }) => {
  const newsWithAuthor = categoryNews.filter((news) => news.author?.name);
  const news = categoryNews.filter((news) => !news.author?.name);

  const getTimeAgo = (dateString: string): string =>
    formatDistanceToNow(new Date(dateString), { addSuffix: true }).replace(
      "about",
      ""
    );

  return (
    <div className={styles.newsCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={news[0].image}
          alt={news[0].title}
          width={920}
          height={400}
          className={styles.image}
        />
      </div>

      <span className={styles.category}>
        {news[0].category}
        <span className={styles.date}>
          {getTimeAgo(news[0].publishedAt).charAt(0).toUpperCase() +
            getTimeAgo(news[0].publishedAt).slice(1)}
        </span>
      </span>
      <h2 className={styles.title}>{news[0].title}</h2>
      <p className={styles.description}>{news[0].subtitle}</p>
      {newsWithAuthor.map((news) => (
        <div key={news.id} className={styles.sidebarItem}>
          <div className={styles.avatar}>
            <Image
              src={news.author.image || "/images/default-avatar.jpg"}
              alt={news.author.name || "unknown author"}
              width={48}
              height={48}
            />
          </div>
          <div className={styles.newsContent}>
            <span className={styles.author}>
              {news.author.name || "Unknown Author"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleNews;
