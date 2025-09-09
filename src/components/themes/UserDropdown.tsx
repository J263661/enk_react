import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-white dark:text-gray-400 dropdown-toggle"
      >
        <span className="mr-3 overflow-hidden rounded-full h-8 w-8">
          <img
            width={44}
            height={44}
            src="../../../public/users/owner.jpg"
            alt="User"
          />
        </span>

        <span className="block mr-1 font-medium text-theme-sm">001</span>

        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="15"
          height="18"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0  flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-0 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
       
        {/* Sign out */}
        <Link
          to="/signin"
          onClick={closeDropdown}
          className="flex items-center gap-2 p-2  font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
        >
        
          Sign out
        </Link>
      </Dropdown>
    </div>
  );
}
