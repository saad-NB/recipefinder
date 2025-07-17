'use client';

export default function BackButton({ variant = 'default' }) {
  if (variant === 'error') {
    return (
      <button 
        onClick={() => window.history.back()}
        className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
      >
        Return to Previous Page
      </button>
    );
  }

  return (
    <button 
      onClick={() => window.history.back()}
      className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
    >
      <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      Back to Recipes
    </button>
  );
}