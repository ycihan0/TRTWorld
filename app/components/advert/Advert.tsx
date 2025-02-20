import Image from "next/image";
import styles from "./Advert.module.css";

const Advert: React.FC = () => {
  return (
    <div className={styles.advertisement}>
      <h3>TRT WORLD FORUM 2020</h3>
      <Image
        src="/images/advert.jpg"
        alt="TRT World Forum"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Advert;
