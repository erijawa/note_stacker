"use client";

import { createAction } from "@/lib/actions/post";

export default function PostForm() {
  return (
    <>
      <div className="w-3/4 mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">新規登録</h1>
        <form action={createAction}>
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            ></textarea>
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
