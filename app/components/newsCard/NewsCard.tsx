import Image from "next/image";
import styles from "./NewsCard.module.css";
import { News } from "@/types/news";
import { formatDistanceToNow } from "date-fns";

interface TopicFilteredNewsProps {
  topicNews: News[];
  topicTag: string;
}

const NewsCard: React.FC<TopicFilteredNewsProps> = ({
  topicNews,
  topicTag,
}) => {

  const getTimeAgo = (dateString: string): string => 
    formatDistanceToNow(new Date(dateString), { addSuffix: true }).replace("about", '');
  
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{topicTag}</h2>
        <div className={styles.grid}>
          {topicNews.map((news) => (
            <div key={news.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={news.image}
                  alt={news.title}
                  width={302}
                  height={240}
                  className={styles.image}
                />
                {news.video?.time && <div className={styles.playButton}>▶</div>}
              </div>
              <div className={styles.content}>
                <span className={styles.time}>
                  {getTimeAgo(news.publishedAt).charAt(0).toUpperCase() +
                    getTimeAgo(news.publishedAt).slice(1)}

                  {news.video?.link != null && (
                    <span className={styles.duration}>
                      &nbsp; ▶ &nbsp;
                      {news.video.time !== null ? news.video.time : ""}
                    </span>
                  )}
                </span>

                <p className={styles.title}>{news.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
