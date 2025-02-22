import { News } from "@/types/news";
import styles from "./NewsList.module.css";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

interface LastestNewsProps {
  lastestNews: News[];
}

const NewsList: React.FC<LastestNewsProps> = ({ lastestNews }) => {
  const getTimeAgo = (dateString: string): string =>
    formatDistanceToNow(new Date(dateString), { addSuffix: true }).replace(
      "about",
      ""
    );

  return (
    <>
      {lastestNews?.map((news) => (
        <Link
          href={`/${news.category}/${news.slug}/${news.id}`}
          key={news.id}
          className={styles.newsCard}
        >
          <div className={styles.imageWrapper}>
            <Image src={news.image} alt={news.title} width={406} height={234} />
          </div>

          <div className={styles.newsContent}>
            <span className={styles.category}>{news.category}</span>
            <span className={styles.time}>
              {getTimeAgo(news.publishedAt).charAt(0).toUpperCase() +
                getTimeAgo(news.publishedAt).slice(1)}
            </span>
            <h2 className={styles.title}>{news.title}</h2>
            <p className={styles.description}>{news.subtitle}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NewsList;
