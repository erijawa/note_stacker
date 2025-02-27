import { auth } from "@/auth";
import Sidebar from "@/components/layouts/Sidebar";
import ModalController from "@/components/ModalController";
import PostCardList from "@/components/ui/PostCardList";
import { getCategoriesByUserId } from "@/lib/api/category";
import { getPostsByUserId } from "@/lib/api/user";
import { Post } from "@/types/post";

function filterPosts(posts: Post[], category: string): Post[] {
  if (category === "all") {
    return posts;
  }
  return posts.filter((post) =>
    post.categories.some((cat) => cat.name === category)
  );
}

export default async function MyPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchWord = await searchParams;
  const session = await auth();
  const id = session?.user.id;
  const posts: Post[] = await getPostsByUserId(id);
  const categories: string[] = await getCategoriesByUserId(id);
  const selectedCategory =
    typeof searchWord.category === "string" ? searchWord.category : "all";
  const filteredPosts = filterPosts(posts, selectedCategory);
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar
          id={id}
          categories={categories}
          selectedCategory={selectedCategory}
        />
        <main className="flex flex-col w-full items-center justify-center mt-20 lg:ml-64">
          <h1 className="text-4xl font-bold my-10">MyPage</h1>
          <ModalController categories={categories} />
          <PostCardList posts={filteredPosts} />
        </main>
      </div>
    </>
  );
}
