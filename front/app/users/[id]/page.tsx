import { getPostsByUserId } from "@/lib/api/user";
import { Post } from "@/types/post";

export default async function MyPage({ params }: { params: { id: string } }) {
  const {id} = await params;
  const posts: Post[] = await getPostsByUserId(id);
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold my-10">ここはMyPage!</h1>

      </div>
    </>
  );
}