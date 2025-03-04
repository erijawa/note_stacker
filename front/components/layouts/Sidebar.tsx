"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  categories: string[];
  selectedCategory: string;
  id: string;
};

export default function Sidebar({ id, categories, selectedCategory }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md mt-20"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? "X" : "Menu"}
      </button>
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed top-0 left-0 z-10 h-full w-64 bg-slate-50 shadow-md transition-transform duration-300 ease-in-out`}
      >
        <nav className="p-4 lg:p-10">
          <h2 className="text-xl font-semibold mb-4 lg:mt-20 mt-40">
            Categories
          </h2>
          <ul>
            <li className="mb-2">
              <Link
                href={`/users/${id}?category=${encodeURIComponent("all")}`}
                className={`${
                  encodeURIComponent(selectedCategory) ===
                  encodeURIComponent("all")
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                } hover:text-gray-900`}
              >
                All
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category} className="mb-2">
                <Link
                  href={`/users/${id}?category=${encodeURIComponent(category)}`}
                  className={`${
                    encodeURIComponent(selectedCategory) ===
                    encodeURIComponent(category)
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600"
                  } hover:text-gray-900`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
