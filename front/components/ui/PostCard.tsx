import { Post } from "@/types/post";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import ModalController from "../ModalController";
import { auth } from "@/auth";
import { getCategoriesByUserId } from "@/lib/api/category";
import { getOgp } from "@/lib/ogp";

type Props = {
  post: Post;
};

export default async function PostCard({ post }: Props) {
  const session = await auth();
  const id = session?.user.id;
  const categories: string[] = await getCategoriesByUserId(id);
  const ogp = await getOgp(`${post.url}`);

  return (
    <div className="rounded-lg shadow-md p-4 my-4 flex flex-col">
      <Link
        href={post.url}
        target="_blank"
        className="p-4 rounded-lg hover:bg-stone-100"
      >
        <div className="flex items-start space-x-4">
          <img
            alt="Article thumbnail"
            className="w-30 h-24 object-cover rounded-md"
            height="100"
            src={(ogp?.ogImage && ogp?.ogImage.length > 0 && ogp?.ogImage[0]?.url) || "/placeholder.png"}
            style={{
            aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="120"
          />
          <div className="space-y-2">
            <h2 className="text-xl font-bold ">{ogp?.ogTitle ?? "No Title"}</h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 my-2">
          {post.categories.map((category) => (
            <span key={category.name} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
              {category.name}
            </span>
          ))}
        </div>
        {post.comment && (
          <div className="mt-4 p-2 rounded-md">
            <h3 className="text-lg font-semibold ">コメント</h3>
            <p className="text-gray-700">{post.comment}</p>
          </div>
        )}
      </Link>
      <div className="flex mt-4 justify-end">
        <ModalController post={post} categories={categories} />
        <DeleteBtn id={post.id} />
      </div>
    </div>
  );
}
