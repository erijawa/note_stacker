"use client";

import { createAction, updateAction } from "@/lib/actions/post";
import { ArticleType } from "@/types/article";
import { Post } from "@/types/post";
import { useState } from "react";

type PostFormProps = {
  post?: Post;
  article?: ArticleType;
  categories: string[];
};

export default function PostForm({ post, article, categories }: PostFormProps) {
  const updatePostWithId = updateAction.bind(null, post?.id);
  const [categoryList, setCategoryList] = useState<
    { name: string; checked: boolean }[]
  >(categories.map((cat) => ({ name: cat, checked: false })));
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
  return (
    <>
      <div className="w-3/4 mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">{` ${
          post ? "Edit" : "Create Post"
        }`}</h1>
        <form action={post ? updatePostWithId : createAction}>
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
