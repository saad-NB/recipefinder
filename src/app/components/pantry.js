'use client';
import React, { useState, useEffect } from 'react';
import { fetchRecipesByIngredients } from '../utils/spoonacular';
import Link from 'next/link'

export default function Pantry() {
  const [input, setInput] = useState('');
  const [pantry, setPantry] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load pantry from localStorage on mount
  useEffect(() => {
    const savedPantry = JSON.parse(localStorage.getItem('pantry'));
    if (savedPantry) setPantry(savedPantry);
  }, []);

  // Save pantry to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('pantry', JSON.stringify(pantry));
  }, [pantry]);

  const handleAdd = () => {
    const trimmed = input.trim().toLowerCase();
    if (trimmed && !pantry.includes(trimmed)) {
      setPantry([...pantry, trimmed]);
    }
    setInput('');
  };

  const handleRemove = (item) => {
    setPantry(pantry.filter(i => i !== item));
  };

  const handleFetchRecipes = async () => {
    if (pantry.length === 0) return;
    setLoading(true);
    try {
      const data = await fetchRecipesByIngredients(pantry);
      setRecipes(data);
    } catch (err) {
      alert("Error fetching recipes: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative z-10 px-6 py-8">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
            Ingredient Scanner
          </h1>
          <p className="text-xl text-white/80 mb-2">
            Add your ingredients to discover delicious Recipes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Input Section */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-3 border border-white/20 shadow-2xl mb-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            Your ingredients
          </h2>

          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
              className="flex-1 backdrop-blur-sm bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
              placeholder="Enter an ingredient (e.g., tomatoes, chicken, rice)..."
            />
            <button
              onClick={handleAdd}
              className="group bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              <span className="flex items-center gap-1">
                Add
                <svg className="w-0.5 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Pantry Display */}
          {pantry.length === 0 ? (
            <div className="text-center py-12 text-white/60">
              <p className="text-lg">Your ingredient list is empty</p>
              <p className="text-sm">Add some ingredients to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-semibold text-white">Ingredients Found:</span>
                <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {pantry.length}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pantry.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group animate-item-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <span className="text-white font-medium capitalize flex items-center gap-2">
                      <span className="text-green-400">•</span>
                      {item}
                    </span>
                    <button
                      onClick={() => handleRemove(item)}
                      className="text-red-400 hover:text-red-300 transition-colors duration-200 opacity-0 group-hover:opacity-100 hover:scale-110"
                      title="Remove ingredient"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Find Recipes Button */}
          <button
            onClick={handleFetchRecipes}
            disabled={loading || pantry.length === 0}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                  <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path>
                </svg>
                Scanning Universe for Recipes...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                Discover Recipes
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Recipes Section */}
        {recipes.length > 0 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Discovered Recipes
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe, index) => (
                <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
                  <div 
                    className="group backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl cursor-pointer animate-recipe-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      <img 
                        src={recipe.image} 
                        alt={recipe.title} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-bold text-white text-lg group-hover:text-green-300 transition-colors duration-300">
                        {recipe.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full border border-red-500/30">
                          Missing: {recipe.missedIngredientCount}
                        </span>
                        <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full border border-green-500/30">
                          Used: {recipe.usedIngredientCount || 0}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-white/60 text-sm">Click to view recipe</span>
                        <svg className="w-5 h-5 text-green-400 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

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
        
        @keyframes item-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes recipe-in {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        
        .animate-item-in {
          animation: item-in 0.5s ease-out both;
        }
        
        .animate-recipe-in {
          animation: recipe-in 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}