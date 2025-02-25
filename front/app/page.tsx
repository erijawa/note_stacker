import ArticleList from "@/components/ui/ArticleList";
import { getNews } from "@/lib/api/news";
import { getQiitaArticles } from "@/lib/api/qiita";
import { ArticleType } from "@/types/article";

export default async function RootPage() {
  const articles: ArticleType[] = await getNews();
  const qiitaUrls: ArticleType[] = await getQiitaArticles();
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <ArticleList articles={articles} />
        <ArticleList articles={qiitaUrls} />
      </div>
    </>
  );
}