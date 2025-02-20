import Image from "next/image";
import styles from "./MainNewsFeed.module.css";
import PopularNews from "../popularNews/PopularNews";

const newsData = [
  {
    author: "Carel Du Marchie Sarvaas",
    title: "Why an effective vaccine is just the start of disease control",
    image: "/profile1.jpg",
  },
  {
    author: "Giorgio Cafiero",
    title:
      "This African nation could be the next to normalise ties with Israel",
    image: "/profile2.jpg",
  },
];

const categories = [
  { name: "AFRICA", title: "Hundreds Of Prisoners Escape Uganda Prison" },
  {
    name: "LIFE",
    title: "Over 30M People Infected With Covid-19 – Latest Updates",
  },
  {
    name: "ASIA",
    title: "Robot Helps India's Virus Patients Speak To Loved Ones",
  },
  {
    name: "AMERICAS",
    title: "Hurricane Sally Drenches US Gulf Coast, Trapping Hundreds",
  },
];

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
        <div className={styles.sidebar}>
          {newsData.map((news, index) => (
            <div key={index} className={styles.sidebarItem}>
              <div className={styles.avatar}>
                <Image src="/images/biden.jpg" alt="" width={48} height={48} />
              </div>
              <div className={styles.newsContent}>
                <span className={styles.author}>
                  {news.author.toUpperCase()}
                </span>
                <p className={styles.sidebarTitle}>{news.title}</p>
              </div>
            </div>
          ))}

          {categories.map((category, index) => (
            <div key={index} className={styles.categoryItem}>
              <span className={styles.category}>{category.name}</span>
              <p className={styles.categoryTitle}>{category.title}</p>
            </div>
          ))}
        </div>
      </div>
      <PopularNews />
    </>
  );
};

export default MainNewsFeed;
