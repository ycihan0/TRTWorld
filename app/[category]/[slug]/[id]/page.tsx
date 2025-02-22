import { News } from "@/types/news";
import { notFound } from "next/navigation";

async function getNews(): Promise<News[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch news");
    return await res.json();
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: { category: string; slug: string; id: string };
}) {
  const newsList = await getNews();

  // Haberleri kategori, slug ve id'ye göre filtrele
  const newsItem = newsList.find(
    (news) =>
      news.category === params.category &&
      news.slug === params.slug &&
      news.id === params.id
  );

  // Eğer haber bulunamazsa 404 sayfasına yönlendir
  if (!newsItem) {
    notFound();
  }

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.subtitle}</p>
      <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
    </div>
  );
}
