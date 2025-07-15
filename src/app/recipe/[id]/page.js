import React from 'react';

// Helper function to fetch recipe details from Spoonacular API
// Takes a recipe ID and returns the detailed recipe information as JSON
async function getRecipeDetails(id) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`
  );
  if (!res.ok) throw new Error('Failed to fetch recipe details');
  return res.json();
}

// Server Component for dynamic recipe page
export default async function RecipePage({ params }) {
  // Await the params object before accessing its properties (Next.js requirement)
  const p = await params;

  // Fetch the recipe details using the dynamic route 'id'
  let recipe;
  try {
    recipe = await getRecipeDetails(p.id); // Use p.id instead of params.id
  } catch (err) {
    // Render error message if API call fails
    return (
      <div className="p-8 text-center text-red-600">
        Error loading recipe details. Please try again later.
      </div>
    );
  }

  // Render recipe details on the page
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
          {/* Map over ingredients and render each one */}
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
          {/* Render instructions as HTML if available, otherwise show a fallback */}
          {recipe.instructions
            ? <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            : <p>No instructions available.</p>}
        </div>
      </div>
    </div>
  );
}