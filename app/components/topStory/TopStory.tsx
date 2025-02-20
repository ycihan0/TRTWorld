import Image from "next/image";
import styles from "./TopStory.module.css";

interface NewsItem {
  title: string;
  description?: string;
  image?: string;
}

interface FeatureNewsProps {
  mainNews: NewsItem;
  sideNews: NewsItem[];
}

const TopStory: React.FC<FeatureNewsProps> = ({ mainNews }) => {
  return (
    <div className={styles.featureNews}>
      <span className={styles.category}>COVID-19</span>
      <div className={styles.featureContainer}>
        <div className={styles.mainNews}>
          {mainNews.image && (
            <Image
              src="/images/biden.jpg"
              alt=""
              width={468}
              height={201}
              className={styles.mainImage}
            />
          )}
          <div className={styles.mainContent}>
            <h2 className={styles.title}>{mainNews.title}</h2>
            <p className={styles.description}>{mainNews.description}</p>
          </div>
        </div>
        <div className={styles.sideNews}>
          <div className={styles.sideNewsItem}>
            <Image
              src="/images/biden.jpg"
              alt=""
              width={120}
              height={120}
              className={styles.sideImage}
            />
            <div className={styles.sideContent}>
              <h3 className={styles.sideTitle}>
                Valentino Chooses Milan For Unusual Live Show, Not Paris
              </h3>
            </div>
          </div>
          <div className={styles.sideNewsItem}>
            <Image
              src="/images/biden.jpg"
              alt=""
              width={120}
              height={120}
              className={styles.sideImage}
            />
            <div className={styles.playButton}>▶</div>
            <div className={styles.sideContent}>
            <span className={styles.duration}> ▶ &nbsp; 3:59</span>
              <h3 className={styles.sideTitle}>
                Valentino Chooses Milan For Unusual Live Show, Not Paris
              </h3>
            </div>
          </div>
          <div className={styles.sideNewsItem}>
            <div className={styles.sidebarItem}>
              <div className={styles.avatar}>
                <Image src="/images/biden.jpg" alt="" width={48} height={48} />
              </div>
              <div className={styles.newsContent}>
                <span className={styles.author}>
                  Valentino Chooses 
                </span>
                <p className={styles.sidebarTitle}>    Valentino Chooses Milan For Unusual Live Show, Not Paris</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStory;
