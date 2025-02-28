import { ArticleType } from "@/types/article";

export const getNews = async () => {
  const API = process.env.NEWS_API_KEY;
  const response = await fetch(
    `https://newsapi.org/v2/everything?domains=techcrunch.com&pageSize=5&apiKey=${API}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );
  const json = await response.json();
  const articles = json.articles.map((article: ArticleType) => ({
    url: article.url,
  }));

  return articles;
};
