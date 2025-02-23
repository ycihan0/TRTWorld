import { HiOutlineSearch } from "react-icons/hi";
import styles from "./SearchPage.module.css";

const page: React.FC = () => {
  return (
    <div>
      <div className={styles.searchBarBackground}>
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <div className={styles.searchIcon}>
                <HiOutlineSearch />
              </div>
              <input
                type="text"
                className={styles.searchBar}
                placeholder="News, Podcasts and more..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
