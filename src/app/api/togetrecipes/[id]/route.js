export async function GET(request, { params }) {
  const { id } = params;
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch recipe details" }), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  const data = await response.json();
  return Response.json(data);
}