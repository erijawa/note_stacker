import { Post } from "@/types/post";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function CardList({ posts }: Props) {
  return (
    <>
      <div className="mx-auto w-3/4 mt-10">
        <div className="w-full">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}