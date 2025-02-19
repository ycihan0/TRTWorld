import styles from "./Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { HiOutlineSearch } from "react-icons/hi";
//import { useState } from "react";

const Header: React.FC = () => {
  // const [openDropdown, setOpenDropdown] = useState(null);

  // const toggleDropdown = (menu) => {
  //   setOpenDropdown(openDropdown === menu ? null : menu);
  // };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          TRT <span>WORLD</span>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li
              className={styles.menuItem}
              // onMouseEnter={() => toggleDropdown('news')}
              // onMouseLeave={() => toggleDropdown(null)}
            >
              NEWS{" "}
              <span>
                <IoIosArrowDown />
              </span>
              {/* {openDropdown === 'news' && (
              <ul className={styles.dropdown}>
                <li>Latest</li>
                <li>World</li>
                <li>Politics</li>
              </ul>
            )} */}
            </li>
            <li
              className={styles.menuItem}
              // onMouseEnter={() => toggleDropdown('features')}
              // onMouseLeave={() => toggleDropdown(null)}
            >
              FEATURES
              {/* {openDropdown === 'features' && (
              <ul className={styles.dropdown}>
                <li>Analysis</li>
                <li>Opinions</li>
                <li>Investigations</li>
              </ul>
            )} */}
            </li>
            <li className={styles.menuItem}>TOPİCS</li>
            <li className={styles.menuItem}>VİDEO</li>
            <li className={styles.menuItem}>
              <span className={styles.menuItemLive}>
                <TbPointFilled />
              </span>
              LIVE
            </li>
            <li className={styles.menuItem}><HiOutlineSearch /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
