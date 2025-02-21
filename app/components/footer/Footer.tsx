import styles from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <div className={styles.logo}>
          TRT <span>WORLD</span>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/trtworld">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com/trtworld">
              <FaSquareXTwitter />
            </a>
            <a href="https://www.instagram.com/trtworld/">
              <FaSquareInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UC7fWeaHhqgM4Ry-RMpM2YYw">
              <FaYoutubeSquare />
            </a>
          </div>
          <p className={styles.copyright}>2025 Created by Cihan Yüksel with ❤️</p>
        </div>

       
        <div className={styles.links}>
          <div>
            <a href="#">Watch Live</a>
            <a href="#">TV Schedule</a>
            <a href="#">Connect with TRT World</a>
            <a href="#">iOS</a>
            <a href="#">Android</a>
            <a href="#">YouTube</a>
          </div>
          <div>
            <a href="#">Satellite Coverage</a>
            <a href="#">Partner Hotels</a>
            <a href="#">About TRT World</a>
            <a href="#">Documentary Submission</a>
          </div>
          <div>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
