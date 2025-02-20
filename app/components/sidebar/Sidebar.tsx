import Image from "next/image";
import styles from "./Sidebar.module.css";

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

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      {newsData.map((news, index) => (
        <div key={index} className={styles.sidebarItem}>
          <div className={styles.avatar}>
            <Image src="/images/biden.jpg" alt="" width={48} height={48} />
          </div>
          <div className={styles.newsContent}>
            <span className={styles.author}>{news.author.toUpperCase()}</span>
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
