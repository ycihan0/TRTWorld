
import styles from "./Header.module.css";
//import { useState } from "react";

const Header: React.FC = () => {
  // const [openDropdown, setOpenDropdown] = useState(null);

  // const toggleDropdown = (menu) => {
  //   setOpenDropdown(openDropdown === menu ? null : menu);
  // };

  return (
    <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>TRT <span>WORLD</span></div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li 
            className={styles.menuItem} 
            // onMouseEnter={() => toggleDropdown('news')}
            // onMouseLeave={() => toggleDropdown(null)}
          >
            News
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
            Features
            {/* {openDropdown === 'features' && (
              <ul className={styles.dropdown}>
                <li>Analysis</li>
                <li>Opinions</li>
                <li>Investigations</li>
              </ul>
            )} */}
          </li>
          <li className={styles.menuItem}>Topics</li>
          <li className={styles.menuItem}>Video</li>
          <li className={styles.menuItemLive}>LIVE</li>
        </ul>
      </nav>
    </div>
  </header>
  )
}
export default Header;
