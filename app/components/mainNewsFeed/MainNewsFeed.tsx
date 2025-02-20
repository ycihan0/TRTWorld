import Image from "next/image";
import styles from "./MainNewsFeed.module.css";
import PopularNews from "../popularNews/PopularNews";
import TopicHeader from "../topicHeader/TopicHeader";
import Sidebar from "../sidebar/Sidebar";



const MainNewsFeed: React.FC = () => {
  return (
    <>
      <TopicHeader />
      <div className={styles.container}>
        <div className={styles.mainNews}>
          <div className={styles.mainImage}>
            <Image src="/images/biden.jpg" alt="" width={664} height={373} />
          </div>
          <span className={styles.tag}>AZERBAIJAN-ARMENIA DISPUTE</span>
          <h1 className={styles.mainTitle}>
            Azerbaijan Issues Final Warning To Armenia In Karabakh Clashes
          </h1>
          <div className={styles.relatedStories}>
            <span>RELATED STORIES</span>
            <div className={styles.relatedStoriesTitles}>
              <a href="#">Calls grow for Azerbaijan, Armenia to end fighting</a>
              <a href="#">Turkish lawmakers condemn Armenian attacks</a>
              <a href="#">Azerbaijan downs Armenian drone</a>
            </div>
          </div>
        </div>

        <div className={styles.sideNews}>
          <div className={styles.newsItem}>
            <Image src="/images/biden.jpg" alt="" width={296} height={166} />
            <h3>The importance of Russia’s growing footprint in Iraq</h3>
            <p>
              The Kremlin has been building influence in the Iraqi energy
              sector...Why is Kosovo becoming a museum in honour of US
              politicians?Why is Kosovo becoming a museum in honour of US
              politicians?
            </p>
          </div>
          <div
            className={styles.newsItem}
            style={{ marginTop: "12px", border: "none" }}
          >
            <Image src="/images/biden.jpg" alt="" width={296} height={166} />
            <h3>The importance of Russia’s growing footprint in Iraq</h3>
            <p>
              The Kremlin has been building influence in the Iraqi energy
              sector...Why is Kosovo becoming a museum in honour of US
              politicians?Why is Kosovo becoming a museum in honour of US
              politicians?
            </p>
          </div>
        </div>
        <Sidebar/>
      </div>
      <PopularNews />
    </>
  );
};

export default MainNewsFeed;
