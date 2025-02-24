import Image from "next/image";
import Link from "next/link";
import styles from "./RelatedNews.module.css";
import { News } from "@/types/news";

interface relatedNewsProps {
    newsItem: News;
    relatedNews: News[];
}


const RelatedNews: React.FC<relatedNewsProps> = ({newsItem, relatedNews}) => {
  return (
    <div className={styles.related}>
      <div className={styles.tagContainer}>
        {newsItem.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      {relatedNews.map((news) => (
        <Link
          href={`/${news.category}/${news.slug}/${news.id}`}
          key={news.id}
          className={styles.newsItem}
        >
          <Image
            src={news.image}
            alt={news.title}
            className={styles.image}
            width={200}
            height={200}
          />
          <p className={styles.title}>{news.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default RelatedNews;
