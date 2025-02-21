"use client";

import { createAction, updateAction } from "@/lib/actions/post";
import { ArticleType } from "@/types/article";
import { Post } from "@/types/post";
import { useRouter } from "next/navigation";

import { useState } from "react";

type PostFormProps = {
  post?: Post;
  article?: ArticleType;
  categories: string[];
  closeModal: () => void;
};

export default function PostForm({
  post,
  article,
  categories,
  closeModal,
}: PostFormProps) {
  const router = useRouter();
  const updatePostWithId = updateAction.bind(null, post?.id);
  const categoryNames = post?.categories.map((category) => category.name);
  const [categoryList, setCategoryList] = useState<
    { name: string; checked: boolean }[]
  >(
    categories.map((cat) =>
      categoryNames?.includes(cat)
        ? { name: cat, checked: true }
        : { name: cat, checked: false }
    )
  );
  const [newCategory, setNewCategory] = useState("");

  const handleCategoryToggle = (category: string) => {
    setCategoryList((prev) =>
      prev.map((cat) =>
        cat.name === category ? { ...cat, checked: !cat.checked } : cat
      )
    );
  };

  const handleAddCategory = () => {
    if (newCategory && !categoryList.some((cat) => cat.name === newCategory)) {
      setCategoryList((prev) => [
        ...prev,
        { name: newCategory, checked: true },
      ]);
      setNewCategory("");
    }
  };

  // フォーム送信時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // チェックされたカテゴリーの名前を配列として取得
    const selectedCategories = categoryList
      .filter((category) => category.checked)
      .map((category) => category.name);

    const formData = new FormData(e.target as HTMLFormElement);
    const url = formData.get("url") as string;
    const comment = formData.get("comment") as string;

    const postData = {
      url,
      comment,
      categories: selectedCategories,
    };

    try {
      if (post) {
        // 既存の投稿を更新する場合
        await updatePostWithId(postData);
      } else {
        // 新しい投稿を作成する場合
        await createAction(postData);
      }
      // モーダルを閉じる
      closeModal();

      router.refresh(); // モーダルを閉じた後にリフレッシュ
    } catch (error) {
      console.error("Error submitting the post:", error);
    }
  };

  return (
    <>
      <div className="w-3/4 mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">{` ${
          post ? "Edit" : "Create Post"
        }`}</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700 my-2"
            >
              URL
            </label>
            <input
              type="url"
              name="url"
              defaultValue={post?.url || article?.url}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700 my-2"
            >
              Comment
            </label>
            <textarea
              name="comment"
              rows={3}
              defaultValue={post?.comment}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Categories
            </label>
            <div className="mt-2 space-y-2">
              {categoryList.map((category) => (
                <label
                  key={category.name}
                  className="inline-flex items-center mr-4"
                >
                  <input
                    type="checkbox"
                    checked={category.checked}
                    value={category.name}
                    onChange={() => handleCategoryToggle(category.name)}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New category"
              className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <button
              type="button"
              onClick={handleAddCategory}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              Add
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors my-8"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
