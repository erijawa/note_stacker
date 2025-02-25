import { ArticleType } from "@/types/article";
import Article from "./Article";

type Props = {
  articles: ArticleType[];
};

export default function ArticleList({ articles }: Props) {
  return (
    <>
      <div className="mx-auto w-3/4 md:w-3/5 mt-10">
        <h1 className="text-2xl font-bold mb-4">News</h1>
        <div className="w-full">
          {articles.map((article: ArticleType) => (
            <Article key={article.url} url={article.url} />
          ))}
        </div>
      </div>
    </>
  );
}