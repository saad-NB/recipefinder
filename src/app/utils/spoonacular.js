const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;


export async function fetchRecipesByIngredients(ingredients) {
  const query = ingredients.join(',');
  const res = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query}&number=10&apiKey=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch recipes file_location:spoonacular.js');
  }
  return res.json();
}