import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-600">Recipe Finder</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/">
              <span className="hover:text-green-600 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/generaterecipes">
              <span className="hover:text-green-600 cursor-pointer">Generate Recipes</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
