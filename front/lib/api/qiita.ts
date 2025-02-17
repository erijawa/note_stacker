import { QiitaArticleType } from "@/types/qiita";

export const getQiitaArticles = async () => {
  const API = process.env.QIITA_API_KEY;
  const response = await fetch(
    `https://qiita.com/api/v2/items?page=1&per_page=10&query=stocks:>20`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${API}`,
      },
      cache: "no-cache",
    }
  );
  const json = await response.json();
  const articles = json.map((article: QiitaArticleType) => ({
    title: article.title,
    url: article.url
  }));

  return articles;
};
