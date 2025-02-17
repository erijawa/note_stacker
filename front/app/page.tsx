import { getNews } from "@/lib/api/news";
import { Article } from "@/types/article";

export default async function RootPage() {
  const articles: Article[] = await getNews();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold my-10">ここはRoot Page!</h1>
        
      </div>
    </>
  );
}