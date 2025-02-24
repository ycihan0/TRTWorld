"use client";
import styles from "./Header.module.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { HiOutlineSearch } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

const Header: React.FC = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSearch, setIsSearch] = useState(false);
  // const handleToggleSearch = () => {
  //   setIsSearch(prev => !prev); 
  // };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">
              TRT <span>WORLD</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li
                className={styles.menuItem}
                
              >
                NEWS
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li
                className={styles.menuItem}
               
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
                <Link href={"/search"}>
                  <HiOutlineSearch />
                </Link>
              </li>
              <li
                className={styles.menuItemButton}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <GrClose /> : <RxHamburgerMenu />}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {isMenuOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <ul className={styles.modalMenu}>
              <li className={styles.modalMenuItem}>
                <span className={styles.menuItemLive}>
                  <TbPointFilled />
                </span>
                LIVE
              </li>
              <li className={styles.modalMenuItem}>
                NEWS
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li className={styles.modalMenuItem}>
                FEATURES
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li className={styles.modalMenuItem}>
                TOPİCS
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
              <li className={styles.modalMenuItem}>
                VİDEO
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
      
    </>
  );
};
export default Header;
