import React from 'react';

// Helper function to fetch recipe details from your internal API route
async function getRecipeDetails(id) {
  // Use absolute URL for server-side fetches to Next.js API
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/togetrecipes/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Failed to fetch recipe details: ${res.status}`);
  return res.json();
}

// Server Component for dynamic recipe page
export default async function RecipePage({ params }) {
  let recipe;
  try {
    recipe = await getRecipeDetails(params.id);
  } catch (err) {
    return (
      <div className="p-8 text-center text-red-600">
        Error loading recipe details. Please try again later.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Recipe Title */}
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded mb-6"
      />
      {/* Ingredients Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc ml-5">
          {recipe.extendedIngredients?.map(ing => (
            <li key={ing.id}>
              {ing.original}
            </li>
          ))}
        </ul>
      </div>
      {/* Instructions Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <div className="prose">
          {recipe.instructions
            ? <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            : <p>No instructions available.</p>}
        </div>
      </div>
    </div>
  );
}