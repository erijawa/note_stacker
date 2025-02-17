/**
 * モーダルの開閉制御を行うコンポーネント
 * モーダルの開閉状態を管理するstateとモーダルの内部表示を記述する
 */

"use client";

import { useState } from "react";
import Modal from "./ui/Modal";
import PostForm from "./ui/PostForm";
import { Post } from "@/types/post";
import { ArticleType } from "@/types/article";

type ModalControllerProps = {
  post?: Post;
  article?: ArticleType;
};

export default function ModalController({ post, article }: ModalControllerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`px-4 py-2 text-white rounded-md transition-colors w-1/3 md:w-1/6 ${
          post
            ? "bg-lime-500 hover:bg-lime-600"
            : "bg-emerald-500 hover:bg-emerald-600"
        }`}
      >
        {` ${post ? "Edit" : "Create Post"}`}
      </button>
      <Modal isOpen={isOpen}>
        <PostForm post={post} article={article}/>
        <button
          onClick={closeModal}
          className="w-full px-4 py-2 bg-white text-red-500 rounded-md hover:text-red-800 transition-colors my-4"
        >
          Cancel
        </button>
      </Modal>
    </>
  );
}
