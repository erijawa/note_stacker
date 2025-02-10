import { Post } from "@/types/post";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function CardList({ posts }: Props) {
  return (
    <>
      <div className="mx-auto w-3/4 md:w-3/5 mt-10">
        <h1 className="text-2xl font-bold mb-4">投稿一覧</h1>
        <div className="w-full">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}