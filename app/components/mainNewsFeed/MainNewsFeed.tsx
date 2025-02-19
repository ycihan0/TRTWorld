import Image from "next/image";
import styles from "./MainNewsFeed.module.css";

const MainNewsFeed: React.FC = () => {
  return (
    <>
      <div className={styles.topicHeader}>
        <span className={styles.topicTitle}>TOPICS</span>
        <div className={styles.topics}>
          <span className={styles.separator}>|</span>
          <a href="#">AZERBAIJAN-ARMENIA DISPUTE</a>
          <span className={styles.separator}>|</span>
          <a href="#">COVID-19</a>
          <span className={styles.separator}>|</span>
          <a href="#">EASTERN MEDITERRANEAN</a>
          <span className={styles.separator}>|</span>
          <a href="#">MY TURKEY</a>
        </div>
      </div>
      <div className={styles.container}>
        {/* Sol Sütun (Ana Haber) */}
        <div className={styles.mainNews}>
          <div className={styles.mainImage}>
            <Image src="/images/biden.jpg" alt="" width={600} height={400} />
          </div>
          <span className={styles.tag}>AZERBAIJAN-ARMENIA DISPUTE</span>
          <h1 className={styles.mainTitle}>
            Azerbaijan Issues Final Warning To Armenia In Karabakh Clashes
          </h1>
          <div className={styles.relatedStories}>
            <a href="#">Calls grow for Azerbaijan, Armenia to end fighting</a>
            <a href="#">Turkish lawmakers condemn Armenian attacks</a>
            <a href="#">Azerbaijan downs Armenian drone</a>
          </div>
        </div>

        {/* Sağ Sütun (Yan Haberler) */}
        <div className={styles.sideNews}>
          <div className={styles.newsItem}>
            <h3>The importance of Russia’s growing footprint in Iraq</h3>
            <p>
              The Kremlin has been building influence in the Iraqi energy
              sector...
            </p>
          </div>
          <div className={styles.newsItem}>
            <h3>
              Why is Kosovo becoming a museum in honour of US politicians?
            </h3>
            <p>
              No matter how unpopular a US leader is, they have a home in
              Kosovo.
            </p>
          </div>
        </div>

        {/* Popüler Haberler */}
        <div className={styles.popularNews}>
          <h2>Popular Today</h2>
          <div className={styles.popularItem}>
            <span className={styles.number}>1</span>
            <div>
              <span className={styles.category}>OPINION</span>
              <p>
                Nepal should stop selling its youth to Indian and British armies
              </p>
            </div>
          </div>
          <div className={styles.popularItem}>
            <span className={styles.number}>2</span>
            <div>
              <span className={styles.category}>MAGAZINE</span>
              <p>Big banks moved trillions despite knowing money was illegal</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNewsFeed;
