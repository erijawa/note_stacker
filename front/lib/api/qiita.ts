import { QiitaArticleType, QiitaResponseType } from "@/types/qiita";

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
  const json: QiitaResponseType = await response.json();
  const articles: QiitaArticleType[] = json.items.map(article => ({
    title: article.title,
    url: article.url
  }));

  return articles;
};
