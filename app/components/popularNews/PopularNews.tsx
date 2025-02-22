import { News } from "@/types/news";
import styles from "./PopularNews.module.css";
import Link from "next/link";

interface shortedNewsProps {
  newsList: News[];
}
const PopularNews: React.FC<shortedNewsProps> = ({ newsList }) => {
  //  const today = new Date().toISOString().split("T")[0];
  const today = "2025-02-21";
  const filteredNews = newsList
    .filter((item) => item.publishedAt?.split("T")[0] == today)
    .sort((a, b) => b.viewCount - a.viewCount)
    .slice(0, 4);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>POPULAR TODAY</h3>
      <div className={styles.newsList}>
        {filteredNews.slice(0, 4).map((item, index) => (
          <Link
            href={`/${item.category}/${item.slug}-${item.id.substring(0, 8)}`}
            key={item.id}
            className={styles.newsItem}
          >
            <span className={styles.number}>{index + 1}</span>
            <div className={styles.content}>
              <span className={styles.category}>{item.category}</span>
              <p className={styles.title}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularNews;
