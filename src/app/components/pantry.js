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
    <div className="max-w-xl mx-auto mt-6 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Your Ingredients</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
          placeholder="Enter an ingredient..."
        />
        <button
          onClick={handleAdd}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {pantry.length === 0 ? (
        <p className="text-gray-500">No ingredients added yet.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1">
          {pantry.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item}</span>
              <button
                onClick={() => handleRemove(item)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleFetchRecipes}
        disabled={loading || pantry.length === 0}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded mt-2"
      >
        {loading ? 'Finding Recipes...' : 'Find Recipes'}
      </button>


      <div className="mt-6 space-y-4">
        {recipes.map(recipe => (
          <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
            <div className="border rounded p-3 shadow-sm bg-gray-50 cursor-pointer hover:shadow-lg transition">
              <div className="flex gap-4 items-center">
                <img src={recipe.image} alt={recipe.title} className="w-16 h-16 rounded" />
                <div>
                  <h3 className="font-semibold">{recipe.title}</h3>
                  <p className="text-sm text-gray-600">
                    Missing Ingredients: {recipe.missedIngredientCount}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
