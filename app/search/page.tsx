import { HiOutlineSearch } from "react-icons/hi";
import styles from "./SearchPage.module.css";

const page: React.FC = () => {
  return (
    <div>
      <div className={styles.searchBarBackground}>
        <div className={styles.container}>
          <input type="text" className={styles.searchBar} />
          <div className={styles.searchIcon}>
            <HiOutlineSearch />
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default page;
