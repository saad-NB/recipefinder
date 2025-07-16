export async function fetchRecipesByIngredients(ingredients) {
  // Send request to Next.js internal API route
  const res = await fetch('/api/togetrecipes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ingredients }),
  });
  if (!res.ok) {
    throw new Error('Failed to fetch recipes file_location:spoonacular.js');
    console.log('Error fetching recipes:', res.statusText);
  }
  return res.json();
}