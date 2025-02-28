import { auth } from "@/auth";
import ArticleList from "@/components/ui/ArticleList";
import SignInButton from "@/components/ui/SignInButton";
import { getNews } from "@/lib/api/news";
import { getQiitaArticles } from "@/lib/api/qiita";
import { ArticleType } from "@/types/article";

export default async function RootPage() {
  const session = await auth();
  const articles: ArticleType[] = await getNews();
  const qiitaUrls: ArticleType[] = await getQiitaArticles();
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="font-bold text-5xl my-10">Note Stacker</h1>
        <p className="font-bold text-2xl">Note stackerの使い方</p>
        <p>カルーセル</p>
        {!session && (<div className="my-10"><p className="text-center">いますぐログイン！</p><SignInButton /></div>)}
        <ArticleList articles={articles} title="TechCrunch" />
        <ArticleList articles={qiitaUrls} title="Qiita" />
      </div>
    </>
  );
}
