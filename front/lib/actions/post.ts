"use server";

import { auth } from "@/auth";
import { createPost, deletePost, updatePost } from "@/lib/api/post";
import { redirect } from "next/navigation";

export async function createAction(postData: {
  url: string;
  comment: string;
  categories: string[];
}) {
  const url = postData.url;
  const comment = postData.comment;
  const categories = postData.categories;
  const session = await auth();
  const user_id = session?.user.id;
  await createPost(url, comment, categories, user_id);
}

export async function updateAction(
  id: string | undefined,
  postData: { url: string; comment: string; categories: string[] }
) {
  const url = postData.url;
  const comment = postData.comment;
  const categories = postData.categories;
  const session = await auth();
  const user_id = session?.user.id;
  await updatePost(id, url, comment, categories, user_id);
}

export async function deleteAction(id: string) {
  const session = await auth();
  try {
    await deletePost(id);
  } catch (error) {
    console.error("編集失敗:", error);
  }
  redirect(`/users/${session?.user.id}`);
}
