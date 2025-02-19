// "use client";
import styles from "./Header.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { HiOutlineSearch } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
// import { useState } from "react";

// type DropdownMenu = string | null;

const Header: React.FC = () => {
  // const [openDropdown, setOpenDropdown] = useState<DropdownMenu>(null);

  // const toggleDropdown = (menu: DropdownMenu) => {
  //   setOpenDropdown(openDropdown === menu ? null : menu);
  // };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            TRT <span>WORLD</span>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li
                className={styles.menuItem}
                // onMouseEnter={() => toggleDropdown("news")}
                // onMouseLeave={() => toggleDropdown(null)}
              >
                NEWS
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li
                className={styles.menuItem}
                // onMouseEnter={() => toggleDropdown("features")}
                // onMouseLeave={() => toggleDropdown(null)}
              >
                FEATURES
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li className={styles.menuItem}>
                TOPİCS
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li className={styles.menuItem}>
                VİDEO
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li className={styles.menuItem}>
                <span className={styles.menuItemLive}>
                  <TbPointFilled />
                </span>
                LIVE
              </li>
              <li className={styles.menuItemSearch}>
                <HiOutlineSearch />
              </li>
              <li className={styles.menuItemButton} >
                <RxHamburgerMenu />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* {openDropdown === "news" && (
        <ul className={styles.dropdown}>
          <li>LASTEST</li>
          <li>WORLD</li>
          <li>POLITICS</li>
        </ul>
      )}
      {openDropdown === "features" && (
        <ul className={styles.dropdown}>
          <li>Analysis</li>
          <li>Opinions</li>
          <li>Investigations</li>
        </ul>
      )} */}
    </>
  );
};
export default Header;
