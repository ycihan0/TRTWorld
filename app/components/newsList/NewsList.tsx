import styles from "./NewsList.module.css";
import Image from "next/image";
const newsData = [
  {
    image: "/plaque.jpg",
    category: "ARTS & CULTURE",
    time: "2 MINUTES AGO",
    title: "UK to return looted 4,000-year-old plaque to Iraq",
    description:
      "The limestone wall plaque came from an ancient Sumerian temple...",
    className: styles.arts,
  },
  {
    image: "/trump.jpg",
    category: "AMERICAS",
    time: "15 MINUTES AGO",
    title: "NYT report says Trump paid $750 in US income taxes in 2016, 2017",
    description:
      "US President Donald Trump, who is the only president in modern times...",
    className: styles.americas,
  },
  {
    image: "/azerbaijan.jpg",
    category: "MAGAZINE",
    time: "35 MINUTES AGO",
    title: "What’s Iran’s role in the Armenia-Azerbaijan clash?",
    description: "Iran seems to be quietly backing Armenia in the conflict.",
    className: styles.magazine,
  },
];

const NewsList: React.FC = () => {
  return (
    <div>
      {newsData.map((news, index) => (
        <div key={index} className={styles.newsCard}>
          <Image src="/images/biden.jpg" alt="" width={406} height={234} />
          <div className={styles.newsContent}>
            <span className={styles.category}>{news.category}</span>
            <span className={styles.time}>{news.time}</span>
            <h2 className={styles.title}>{news.title}</h2>
            <p className={styles.description}>{news.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
