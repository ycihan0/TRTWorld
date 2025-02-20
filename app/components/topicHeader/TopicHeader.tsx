import styles from "./TopicHeader.module.css";

const TopicHeader: React.FC = () => {
  return (
    <div className={styles.topicHeader}>
      <span className={styles.topicTitle}>TOPICS</span>
      <div className={styles.topics}>
      
        <a href="#">AZERBAIJAN-ARMENIA DISPUTE</a>
 
        <a href="#">COVID-19</a>
      
        <a href="#">EASTERN MEDITERRANEAN</a>
        
        <a href="#">MY TURKEY</a>
      </div>
    </div>
  );
};

export default TopicHeader;
