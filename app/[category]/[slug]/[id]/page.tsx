import { News } from "@/types/news";
import { notFound } from "next/navigation";
import styles from "./NewsDetailPage.module.css";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import parse from "html-react-parser";

async function getNews() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error fetching news");
    return null; 
  }

  return res.json() as Promise<News[]>; 
}

export default async function NewsDetailPage({params,}: {
  params: { category: string; slug: string; id: string };
}) {
  const { category, slug, id } =  params;

  console.log(params)
  
  const newsList = await getNews();
  if (!newsList) return notFound();

 

  const newsItem = newsList.find(
    (news) => news.category === category && news.slug === slug && news.id === id
  );
  if (!newsItem) {
    notFound();
  }

  const getTimeAgo = (dateString: string): string =>
    formatDistanceToNow(new Date(dateString), { addSuffix: true }).replace(
      "about",
      ""
    );

  const getRelatedNews = (currentNews: News, allNews: News[]): News[] => {
    return allNews
      .filter((news) => news.id !== currentNews.id)
      .map((news) => ({
        ...news,
        tagMatchCount: news.tags.filter((tag) => currentNews.tags.includes(tag))
          .length,
      }))
      .filter((news) => news.tagMatchCount > 0)
      .sort((a, b) => b.tagMatchCount - a.tagMatchCount)
      .slice(0, 5);
  };

  const relatedNews = getRelatedNews(newsItem, newsList);

  return (
    <div className={styles.container}>
      <div className={styles.titleContent}>
        <p className={styles.headTitle}>
          <span>{newsItem.category} </span> &nbsp;{" "}
          {getTimeAgo(newsItem.publishedAt).charAt(0).toUpperCase() +
            getTimeAgo(newsItem.publishedAt).slice(1)}
        </p>
        <h1>{newsItem.title}</h1>
        <p className={styles.description}>{newsItem.subtitle}</p>
      </div>

      <div className={styles.bodyContainer}>
        <div className={styles.content}>
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            width={1008}
            height={567}
            priority
          />
          <p className={styles.descriptionTitle}>REUTERS</p>
          <p className={styles.description}>{newsItem.description}</p>

          <div className={styles.articleContainer}>
            <div className={styles.article}>{parse(newsItem.content)}</div>
            {relatedNews.slice(0, 2).map((news) => (
              <div key={news.id}>
                <Link
                  href={`/${news.category}/${news.slug}/${news.id}`}
                  className={styles.card}
                >
                  <div className={styles.cardBackground}></div>
                  <div className={styles.imageContainer}>
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={212}
                      height={120}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.readMore}>READ MORE</span>
                    <span className={styles.cardTitle}>{news.title}</span>
                  </div>
                </Link>
                <div className={styles.article}>{parse(news.content)}</div>
              </div>
            ))}

            {relatedNews[2] ? (
              <>
                <span className={styles.continueReading}>CONTINUE READİNG</span>
                <Link
                  href={`/${relatedNews[2].category}/${relatedNews[2].slug}/${relatedNews[2].id}`}
                  className={styles.card}
                >
                  <div className={styles.cardBackgroundContinue}></div>
                  <div className={styles.imageContainerContinue}>
                    <Image
                      src={relatedNews[2].image}
                      alt={relatedNews[2].title}
                      width={212}
                      height={120}
                    />
                  </div>
                  <div className={styles.cardContentContinue}>
                    <span className={styles.cardTitle}>
                      {relatedNews[2].title}
                    </span>
                  </div>
                </Link>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={styles.related}>
          <div className={styles.tagContainer}>
            {newsItem.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          {relatedNews.map((news) => (
            <Link
              href={`/${news.category}/${news.slug}/${news.id}`}
              key={news.id}
              className={styles.newsItem}
            >
              <Image
                src={news.image}
                alt={news.title}
                className={styles.image}
                width={200}
                height={200}
              />
              <p className={styles.title}>{news.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
