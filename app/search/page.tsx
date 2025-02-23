"use client";
import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import styles from "./SearchPage.module.css";
import { News } from "@/types/news";
import NewsList from "../components/newsList/NewsList";

const Page: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<News[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 2) {
        try {
          const response = await fetch(
            `https://trtworldapi.onrender.com/news?q=${query}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data: News[] = await response.json();
          setResults(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        setResults([]);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <div className={styles.searchBarBackground}>
        <div className={styles.container}>
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <div className={styles.searchIcon}>
                <HiOutlineSearch />
              </div>
              <input
                type="text"
                className={styles.searchBar}
                placeholder="News, Podcasts and more..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.result}>
          {results.length > 0 ? <NewsList lastestNews={results} /> : ""}
        </div>
      </div>
    </>
  );
};

export default Page;
