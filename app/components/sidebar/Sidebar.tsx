import Image from "next/image";
import styles from "./Sidebar.module.css";

type News = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  publishedAt: string;
  newsDate: string;
  author: {
    name: string|null;
    image: string|null;
  };
  description: string;
  source: string;
  tags: string[];
  image: string;
  category: string;
  content: string;
  viewCount: number;
};
interface ColumnistsProps {
  columnists: News[];
}

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

const Sidebar: React.FC<ColumnistsProps> = ({columnists}) => {
  return (
    <div className={styles.sidebar}>
      {columnists.map((news) => (
        <div key={news.id} className={styles.sidebarItem}>
          <div className={styles.avatar}>
            <Image src={news.author.image||"/images/avatar.jpg"} alt={news.author.name||"avatar"} width={48} height={48} />
          </div>
          <div className={styles.newsContent}>
            <span className={styles.author}>{news.author.name?.toUpperCase()}</span>
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
  );
};

export default Sidebar;
