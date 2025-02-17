import ArticleList from "@/components/ui/ArticleList";
import { getNews } from "@/lib/api/news";
import { getQiitaArticles } from "@/lib/api/qiita";
import { ArticleType } from "@/types/article";
import { QiitaArticleType } from "@/types/qiita";

export default async function RootPage() {
  const articles: ArticleType[] = await getNews();
  const qiitaArticles: QiitaArticleType[] = await getQiitaArticles();
  console.log(qiitaArticles)
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold my-10">ここはRoot Page!</h1>
        <ArticleList articles={articles} />
      </div>
    </>
  );
}