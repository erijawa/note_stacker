/**
 * モーダルコンポーネント
 *
 * @param isOpen - 親コンポーネントから渡される表示状態（State)
 * @param children - モーダル内部のコンテンツ
 */
"use client";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">{children}</div>
    </div>
  );
}
