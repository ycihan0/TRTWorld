import Image from "next/image";
import styles from "./NewsCard.module.css";

const newsData = [
  {
    id: 1,
    image: "/biden-trump-debate.jpg", // Örnek resim yolu
    time: "1 HOUR AGO",
    duration: "3:59",
    title: "Biden, Trump in fiery first US presidential debate",
    isVideo: true,
  },
  {
    id: 2,
    image: "/trump-tax.jpg",
    time: "10 HOURS AGO",
    title:
      "Trump’s tax returns reveal a system that rewards all of America’s elite",
  },
  {
    id: 3,
    image: "/bloomberg.jpg",
    time: "13 SEP 2020",
    title: "Bloomberg to spend $100M in Florida to help Biden",
  },
  {
    id: 4,
    image: "/biden-trump.jpg",
    time: "22 AUG 2020",
    title: "Trump election victory in peril as he struggles to oppose Biden",
  },
];

const NewsCard: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2 className={styles.heading}>US ELECTIONS 2020</h2>
        <div className={styles.grid}>
          {newsData.map((news) => (
            <div key={news.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/biden.jpg"
                  alt={news.title}
                  width={302}
                  height={240}
                  className={styles.image}
                />
                {news.isVideo && <div className={styles.playButton}>▶</div>}
              </div>
              <div className={styles.content}>
                <span className={styles.time}>{news.time}{news.duration && (
                  <span className={styles.duration}> &nbsp; ▶ &nbsp;{news.duration}</span>
                )}</span>
                
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
