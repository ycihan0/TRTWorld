import { News } from "@/types/news";
import { notFound } from "next/navigation";



export default async function NewsDetailPage(props: {
  params: { category: string; slug: string; id: string };
}){


  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.error("Error fetching news");
    notFound();
  }
  const newsList: News[] = await res.json();

  const params = await props.params; 
  const category = params.category;
  const slug = params.slug;
  const id = params.id;

  const newsItem = newsList.find(
    (news) => news.category === category && news.slug === slug && news.id === id
  );
 if (!newsItem) {
    notFound();
  }

  return (
    <div>
     {newsItem.subtitle}
    </div>
  );
}
