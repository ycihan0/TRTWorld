import { News } from "@/types/news";
import styles from "./NewsList.module.css";
import Image from "next/image";

interface LastestNewsProps {
  lastestNews: News[];
}

const NewsList: React.FC<LastestNewsProps> = ({ lastestNews }) => {
  return (
    <div>
      {lastestNews?.map((news) => (
        <div key={news.id} className={styles.newsCard}>
          <div className={styles.imageWrapper}>
            <Image src={news.image} alt={news.title} width={406} height={234} />
          </div>

          <div className={styles.newsContent}>
            <span className={styles.category}>{news.category}</span>
            <span className={styles.time}>{news.publishedAt}</span>
            <h2 className={styles.title}>{news.title}</h2>
            <p className={styles.description}>{news.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
