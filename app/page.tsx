// app/page.tsx
import styles from "./page.module.css";

type News = {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  category: string;
  headline: boolean;
  article: string;
  chosen: boolean;
};

// Server Component olarak async fonksiyon
export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
    cache: "no-store",  // Her çağrıda veri yenilensin
  });

  if (!res.ok) {
    console.error("Error fetching news");
    return (
      <div className={styles.page}>
        <p>Veri bulunamadı</p>
      </div>
    );
  }

  const newsList: News[] = await res.json();

  return (
    <div className={styles.page}>
      {newsList.length > 0 ? <h1>{newsList[0].title}</h1> : <p>Veri bulunamadı</p>}
    </div>
  );
}
