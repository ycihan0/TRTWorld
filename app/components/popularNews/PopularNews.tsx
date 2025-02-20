
import styles from "./PopularNews.module.css";
const newsItems = [
    { id: 1, category: "OPINION", title: "Nepal should stop selling its youth to the Indian and British armies" },
    { id: 2, category: "MAGAZINE", title: "Big banks moved trillions despite knowing money was illegal" },
    { id: 3, category: "LIFE", title: "Footballer Mesut Ozil requests help for infant with rare disease" },
    { id: 4, category: "MAGAZINE", title: "Why are anti-Sisi protests growing in Egypt?" },
  ];
const PopularNews: React.FC = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>POPULAR TODAY</h3>
      <div className={styles.newsList}>
        {newsItems.map((item, index) => (
          <div key={item.id} className={styles.newsItem}>
            <span className={styles.number}>{item.id}</span>
            <div className={styles.content}>
              <span className={styles.category}>{item.category}</span>
              <p className={styles.title}>{item.title}</p>
            </div>
            {index < newsItems.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularNews
