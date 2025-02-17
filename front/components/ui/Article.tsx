import { auth } from "@/auth";
import { ArticleType } from "@/types/article";
import Link from "next/link";
import ModalController from "../ModalController";

type Props = {
  article: ArticleType;
};
export default async function Article({ article }: Props) {
  const session = await auth();

  return (
    <div className="rounded-lg shadow-md p-4 my-4 flex flex-col">
      <Link
        href={article.url}
        target="_blank"
        className="p-4 rounded-lg hover:bg-stone-100"
      >
        <div className="flex items-start space-x-4">
          {article.urlToImage && (
            <img
              className="w-30 h-24 object-cover rounded-md"
              height="100"
              key={article.title}
              src={article.urlToImage}
              alt={`${article.title} image`}
              width="120"
            />
          )}
          <div className="space-y-2">
            <h2 className="text-xl font-bold ">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
          </div>
        </div>
      </Link>
      {session && (
        <div className="flex mt-4 justify-end">
          <ModalController />
        </div>
      )}
    </div>
  );
}
