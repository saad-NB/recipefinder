import React from "react";

// This is a server component by default (App Router)
export default async function RecipePage({ params }) {
  const { id } = params;
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
  );

  if (!res.ok) {
    return <p>Failed to load recipe details</p>;
  }

  const recipe = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full rounded mb-4" />
      
      <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc pl-6 mb-4">
        {recipe.extendedIngredients.map((ing) => (
          <li key={ing.id}>{ing.original}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Instructions:</h2>
      <div
        className="prose prose-sm text-gray-800"
        dangerouslySetInnerHTML={{ __html: recipe.instructions || "No instructions provided." }}
      />
    </div>
  );
}
