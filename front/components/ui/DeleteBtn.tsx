"use client";

import { deleteAction } from "@/lib/actions/post";

type Props = {
  id: string;
};

export default function DeleteBtn({ id }: Props) {
  return (
    <>
      <button
        onClick={() => deleteAction(id)}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors w-1/3 ml-2 md:w-1/6 "
      >
        Delete
      </button>
    </>
  );
}
