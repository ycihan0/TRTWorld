import Image from "next/image";
import styles from "./TopStory.module.css";
import { News } from "@/types/news";
import { notFound } from "next/navigation";

export default async function TopStory() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error fetching news");
    notFound();
  }
  const data = await res.json();
  const topStory: string = data[0].topicName || "";
  const newsList: News[] = data[0].news || [];

  const author = newsList
    .filter(
      (news) => news.tags.includes(topStory) && news.author?.name !== null
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map((news) => ({
      ...news,
      title: news.title.toUpperCase(),
    }));

  const mainNews = newsList
    .filter(
      (news) => news.tags.includes(topStory) && news.author?.name === null
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map((news) => ({
      ...news,
      title: news.title.toUpperCase(),
    }));

  return (
    <div className={styles.container}>
      <div className={styles.featureNews}>
      <span className={styles.category}>{topStory}</span>
      <div className={styles.featureContainer}>
        <div className={styles.mainNews}>
          {mainNews.length > 0 && (
            <div className={styles.mainImage}>
              <Image
                src={mainNews[0].image}
                alt=""
                width={468}
                priority
                height={201}
              />
            </div>
          )}
          <div className={styles.mainContent}>
            <h2 className={styles.title}>{mainNews[0]?.title}</h2>
            <p className={styles.description}>{mainNews[0]?.subtitle}</p>
          </div>
        </div>
        <div className={styles.sideNews}>
          {mainNews.length > 0 &&
            mainNews.slice(1, 3).map((news) => (
              <div key={news.id} className={styles.sideNewsItem}>
                <Image
                  src={news.image}
                  alt={news.title}
                  width={120}
                  height={120}
                  className={styles.sideImage}
                />
                {news.video.link !== null ? (
                  <div className={styles.playButton}>▶</div>
                ) : (
                  ""
                )}
                <div className={styles.sideContent}>
                  {news.video.link !== null ? (
                    <span className={styles.duration}>
                      ▶ &nbsp; {news.video.time}
                    </span>
                  ) : (
                    ""
                  )}
                  <h3 className={styles.sideTitle}>{news.title}</h3>
                </div>
              </div>
            ))}

          <div className={styles.sideNewsItem}>
            <div className={styles.sidebarItem}>
              <div className={styles.avatar}>
                <Image
                  src={author[0]?.author?.image || "/images/avatar.jpg"}
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className={styles.newsContent}>
                <span className={styles.author}>{author[0]?.author.name}</span>
                <p className={styles.sidebarTitle}>{author[0]?.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
}
