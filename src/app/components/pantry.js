'use client';
import React, { useState, useEffect } from 'react';

export default function Pantry() {
  const [input, setInput] = useState('');
  const [pantry, setPantry] = useState([]);

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
    </div>
  );
}
