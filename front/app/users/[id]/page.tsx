import ModalController from "@/components/ModalController";
import PostCardList from "@/components/ui/PostCardList";
import { getCategoriesByUserId } from "@/lib/api/category";
import { getPostsByUserId } from "@/lib/api/user";
import { Post } from "@/types/post";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function MyPage({ params }: Props) {
  const {id} = await params;
  const posts: Post[] = await getPostsByUserId(id);
  const categories: string[] = await getCategoriesByUserId(id);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold my-10">ここはMyPage!</h1>
        <ModalController categories={categories}/>
        <PostCardList posts={posts}/>
      </div>
    </>
  );
}