import { News } from "@/types/news";
import styles from "../../[category]/[slug]/[id]/NewsDetailPage.module.css";
import Image from "next/image"
import Link from "next/link"

interface relatedNewsProps {
    relatedNews: News;
}

const ContinueReading: React.FC<relatedNewsProps> = ({relatedNews}) => {
  return (
    <>
       {relatedNews ? (
              <>
                <span className={styles.continueReading}>CONTINUE READİNG</span>
                <Link
                  href={`/${relatedNews.category}/${relatedNews.slug}/${relatedNews.id}`}
                  className={styles.card}
                >
                  <div className={styles.cardBackgroundContinue}></div>
                  <div className={styles.imageContainerContinue}>
                    <Image
                      src={relatedNews.image}
                      alt={relatedNews.title}
                      width={212}
                      height={120}
                    />
                  </div>
                  <div className={styles.cardContentContinue}>
                    <span className={styles.cardTitle}>
                      {relatedNews.title}
                    </span>
                  </div>
                </Link>
              </>
            ) : (
              ""
            )}
    </>
  )
}

export default ContinueReading
