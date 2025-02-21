import Image from "next/image";
import styles from "./SingleNews.module.css";

interface NewsItem {
  category: string;
  date: string;
  title: string;
  description: string;
  authors: string[];
  image: string;
}

const SingleNews: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <div className={styles.newsCard}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/biden.jpg"
          alt={news.title}
          width={920}
          height={400}
          className={styles.image}
        />
      </div>

      <span className={styles.category}>
        {news.category} <span className={styles.date}>{news.date}</span>
      </span>
      <h2 className={styles.title}>{news.title}</h2>
      <p className={styles.description}>{news.description}</p>
      <div className={styles.sidebarItem}>
        <div className={styles.avatar}>
          <Image src="/images/biden.jpg" alt="" width={48} height={48} />
        </div>
        <div className={styles.newsContent}>
          <span className={styles.author}>Valentino Chooses</span>
        </div>
      </div>
      <div className={styles.sidebarItem}>
        <div className={styles.avatar}>
          <Image src="/images/biden.jpg" alt="" width={48} height={48} />
        </div>
        <div className={styles.newsContent}>
          <span className={styles.author}>Valentino Chooses</span>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
