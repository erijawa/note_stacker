"use server"

import { auth } from "@/auth";
import { createPost, deletePost, updatePost } from "@/lib/api/post";
import { redirect } from "next/navigation";


export async function createAction(formData: FormData) {
  const url = formData.get("url") as string;
  console.log(url)
  const comment = formData.get("comment") as string;
  const session = await auth();
  const user_id = session?.user.id;
  try {
    await createPost(url, comment, user_id);
  } catch (error) {
    console.error("投稿失敗:", error);
  }
  redirect(`/users/${session?.user.id}`);
}

export async function updateAction(id: string | undefined, formData: FormData) {
  const url = formData.get("url") as string;
  const comment = formData.get("comment") as string;
  const session = await auth();
  const user_id = session?.user.id;
  try {
    await updatePost(id, url, comment, user_id);
  } catch (error) {
    console.error("編集失敗:", error);
  }
  redirect(`/users/${session?.user.id}`);
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