import Image from "next/image";
import styles from "./Sidebar.module.css";
import { News } from "@/types/news";


interface ColumnistsProps {
  columnists: News[];
  firstSevenNews: News[];
}

const Sidebar: React.FC<ColumnistsProps> = ({ columnists, firstSevenNews }) => {
  const extractNews = firstSevenNews.slice(3, 7);
  return (
    <div className={styles.sidebar}>
      {columnists.map((news) => (
        <div key={news.id} className={styles.sidebarItem}>
          <div className={styles.avatar}>
            <Image
              src={news.author.image || "/images/avatar.jpg"}
              alt={news.author.name || "avatar"}
              width={48}
              height={48}
            />
          </div>
          <div className={styles.newsContent}>
            <span className={styles.author}>
              {news.author.name?.toUpperCase()}
            </span>
            <p className={styles.sidebarTitle}>{news.title}</p>
          </div>
        </div>
      ))}

      {extractNews.map((item) => (
        <div key={item.id} className={styles.categoryItem}>
          <span className={styles.category}>{item.category}</span>
          <p className={styles.categoryTitle}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
