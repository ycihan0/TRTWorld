import Image from "next/image";
import styles from "./Sidebar.module.css";
import { News } from "@/types/news";
import Link from "next/link";

interface ColumnistsProps {
  columnists: News[];
  firstSevenNews: News[];
}

const Sidebar: React.FC<ColumnistsProps> = ({ columnists, firstSevenNews }) => {
  const extractNews = firstSevenNews.slice(3, 7);
  return (
    <div className={styles.sidebar}>
      {columnists.map((news) => (
        <Link
          href={`/${news.category}/${news.slug}/${news.id}`}
          key={news.id}
          className={styles.sidebarItem}
        >
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
        </Link>
      ))}

      {extractNews.map((item) => (
        <Link
          href={`/${item.category}/${item.slug}/${item.id}`}
          key={item.id}
        >
          <div className={styles.categoryItem}>
            <span className={styles.category}>{item.category}</span>
            <p className={styles.categoryTitle}>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
