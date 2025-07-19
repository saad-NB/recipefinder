// API route to fetch recipes by ingredients (server-side, protects API key)

export async function POST(request) {
  // Parse the request body (expecting JSON with ingredients array)
  const { ingredients } = await request.json();
 

  // Build Spoonacular API URL
  const spoonacularUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&number=80&apiKey=${process.env.SPOONACULAR_API_KEY}`;

  // Make the request to Spoonacular
  const response = await fetch(spoonacularUrl);
  const data = await response.json();

  // Return the result to the client
  return Response.json(data);
}