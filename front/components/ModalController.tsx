/**
 * モーダルの開閉制御を行うコンポーネント
 * モーダルの開閉状態を管理するstateとモーダルの内部表示を記述する
 */

"use client";

import { useState } from "react";
import Modal from "./ui/Modal";
import PostForm from "./ui/PostForm";

export default function ModalController() {
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
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Open Form
      </button>
      <Modal isOpen={isOpen}>
        <PostForm />
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
