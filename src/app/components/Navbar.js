import React from 'react'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-50 backdrop-blur-md bg-black/20 border-b border-white/10 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-white drop-shadow-lg">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Recipe Finder
          </span>
        </h1>
        <ul className="flex gap-8 text-white/90 font-medium">
          <li>
            <Link href="/">
              <span className="hover:text-green-400 cursor-pointer transition-all duration-300 hover:drop-shadow-lg hover:scale-105 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
          <li>
            <Link href="/generaterecipes">
              <span className="hover:text-green-400 cursor-pointer transition-all duration-300 hover:drop-shadow-lg hover:scale-105 relative group">
                Generate Recipes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}