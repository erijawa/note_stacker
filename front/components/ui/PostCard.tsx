import { Post } from "@/types/post";
import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import ModalController from "../ModalController";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="rounded-lg shadow-md p-4 my-4 flex flex-col">
      <Link href={post.url} target="_blank" className="p-4 rounded-lg hover:bg-stone-100">
        <div className="flex items-start space-x-4">
          <img
            alt="Article thumbnail"
            className="w-30 h-24 object-cover rounded-md"
            height="100"
            src="/placeholder.png"
            // src={post.article.ogImage || "/placeholder.svg"}
            // style={{
            // aspectRatio: "1/1",
            //   objectFit: "cover",
            // }}
            width="120"
          />
          <div className="space-y-2">
            {/* urlから取得した記事タイトルを反映予定 */}
            <h2 className="text-xl font-bold ">タイトル</h2>
            <p className="text-gray-700">{/* {post.article.description} */}</p>
          </div>
        </div>
        {post.comment && (
          <div className="mt-4 p-2 rounded-md">
            <h3 className="text-lg font-semibold ">コメント</h3>
            <p className="text-gray-700">{post.comment}</p>
          </div>
        )}
      </Link>
      <div className="flex mt-4 justify-end">
      <ModalController post={post} />
      <DeleteBtn id={post.id} />
      </div>
    </div>
  );
}
