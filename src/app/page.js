"use client";
import Image from "next/image";
import React, { use } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative z-10 flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Animated Main Title */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-green-200 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl animate-pulse-slow leading-tight">
              RECIPE
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-300 via-green-300 to-white bg-clip-text text-transparent drop-shadow-2xl animate-pulse-slow-delay leading-tight">
              FINDER
            </h2>
          </div>

          {/* Subtitle with typing effect */}
          <div className="mb-8 sm:mb-12 animate-slide-up px-2">
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-3 sm:mb-4 font-light tracking-wide leading-relaxed">
              Transform your pantry into a culinary cosmos
            </p>
            <p className="text-base sm:text-lg md:text-xl text-green-300/70 font-medium leading-relaxed">
              Algorithmic powered recipe generation from your ingredients
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in-delay px-2">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:scale-105 hover:bg-white/10 group">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:animate-bounce">🧠</div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">Algorithmic Analysis</h3>
              <p className="text-white/60 text-sm leading-relaxed">Advanced algorithms analyze your ingredients</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-105 hover:bg-white/10 group">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:animate-bounce">⚡</div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">Instant Results</h3>
              <p className="text-white/60 text-sm leading-relaxed">Get personalized recipes in seconds</p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:bg-white/10 group sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:animate-bounce">🌟</div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">Endless Variety</h3>
              <p className="text-white/60 text-sm leading-relaxed">Discover new flavors from the universe</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="animate-bounce-in px-4">
            <Link href="/generaterecipes">
              <button className="group relative px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full text-white font-bold text-base sm:text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-500 hover:scale-110 hover:from-green-400 hover:to-blue-500 border-2 border-white/20 hover:border-white/40 w-full max-w-xs sm:max-w-sm md:max-w-none md:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <span className="text-sm sm:text-base md:text-lg">Launch Recipe Generator</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          {/* Floating particles for extra effect */}
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float opacity-60 hidden sm:block"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float-delay opacity-40 hidden sm:block"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-slow opacity-50 hidden sm:block"></div>
        </div>
      </section>

      {/* Bottom Section - How it works */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 backdrop-blur-sm bg-black/10 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 animate-fade-in">
            How It Works
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 animate-slide-up">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 animate-pulse flex-shrink-0">
                <span className="text-lg sm:text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight text-center">Input Ingredients</h4>
              <p className="text-white/60 text-sm text-center leading-relaxed">List what you have in your pantry</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 animate-pulse-delay flex-shrink-0">
                <span className="text-lg sm:text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight text-center">Algorithmic Processing</h4>
              <p className="text-white/60 text-sm text-center leading-relaxed">Our algorithms find perfect recipe matches</p>
            </div>
            <div className="flex flex-col items-center sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-3 sm:mb-4 animate-pulse-slow flex-shrink-0">
                <span className="text-lg sm:text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight text-center">Cook & Enjoy</h4>
              <p className="text-white/60 text-sm text-center leading-relaxed">Follow detailed instructions and enjoy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.5s both;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow-delay {
          animation: pulse-slow 3s ease-in-out infinite 0.5s;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out 0.8s both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 1s;
        }
        
        .animate-pulse-delay {
          animation: pulse-slow 2s ease-in-out infinite 0.5s;
        }
      `}</style>
    </div>
  );
}