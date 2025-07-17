import React from 'react';
import BackButton from '@/app/components/BackButton'; // Import the client component
import './recipe-page.css'; // Import the CSS file

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
  const { id } = await params;
  let recipe;

  try {
    recipe = await getRecipeDetails(id);
  } catch (err) {
    return (
      <div className="min-h-screen relative z-10 flex items-center justify-center px-6">
        <div className="backdrop-blur-md bg-red-900/20 border border-red-500/30 rounded-2xl p-8 text-center max-w-md mx-auto">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-red-300 mb-4">Recipe Not Found</h2>
          <p className="text-red-200 mb-6">
            Unable to load recipe details. The cosmic database might be temporarily unavailable.
          </p>
          <BackButton variant="error" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative z-10 px-6 py-8">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <div className="mb-8 animate-fade-in">
          <BackButton />
        </div>

        {/* Recipe Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg leading-tight">
            {recipe.title}
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Column - Image and Quick Info */}
          <div className="space-y-6">
            {/* Recipe Image */}
            <div className="relative group animate-fade-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-2xl">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 animate-fade-in-left-delay">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Recipe Overview
                </span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {recipe.readyInMinutes || 'N/A'}
                  </div>
                  <div className="text-white/60 text-sm">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {recipe.servings || 'N/A'}
                  </div>
                  <div className="text-white/60 text-sm">Servings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {recipe.extendedIngredients?.length || 0}
                  </div>
                  <div className="text-white/60 text-sm">Ingredients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {recipe.healthScore || 'N/A'}
                  </div>
                  <div className="text-white/60 text-sm">Health Score</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Ingredients and Instructions */}
          <div className="space-y-8">

            {/* Ingredients Section */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 animate-fade-in-right">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                Ingredients:
              </h2>

              {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 ? (
                <div className="space-y-3">
                  {recipe.extendedIngredients.map((ing, index) => (
                    <div
                      key={ing.id || index}
                      className="flex items-center gap-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 group animate-ingredient-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {ing.image && (
                        <img
                          src={`https://spoonacular.com/cdn/ingredients_100x100/${ing.image}`}
                          alt={ing.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1">
                        <div className="text-white font-medium group-hover:text-green-300 transition-colors duration-300">
                          {ing.original}
                        </div>
                        {ing.measures && (
                          <div className="text-white/60 text-sm mt-1">
                            {ing.measures.metric?.amount} {ing.measures.metric?.unitShort}
                          </div>
                        )}
                      </div>
                      <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-white/60">
                  <div className="text-4xl mb-2">🔍</div>
                  <p>No ingredients data available</p>
                </div>
              )}
            </div>

            {/* Instructions Section */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 animate-fade-in-right-delay">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               Cooking Protocol
              </h2>

              <div className="prose-invert max-w-none">
                {recipe.instructions ? (
                  <div
                    className="text-white/90 leading-relaxed space-y-4 instruction-content"
                    dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                  />
                ) : (
                  <div className="text-center py-8 text-white/60">
                    <div className="text-4xl mb-2">📝</div>
                    <p className="text-lg">No instructions available</p>
                    <p className="text-sm mt-2">Check the original recipe source for detailed steps</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Additional Info Section */}
        {(recipe.summary || recipe.dishTypes || recipe.diets) && (
          <div className="mt-12 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">ℹ️</span>
              Additional Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {recipe.summary && (
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-3">Summary</h3>
                  <div
                    className="text-white/80 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: recipe.summary }}
                  />
                </div>
              )}

              <div className="space-y-4">
                {recipe.dishTypes && recipe.dishTypes.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-blue-300 mb-3">Dish Types</h3>
                    <div className="flex flex-wrap gap-2">
                      {recipe.dishTypes.map((type, index) => (
                        <span
                          key={index}
                          className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30 text-sm capitalize"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {recipe.diets && recipe.diets.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Dietary Info</h3>
                    <div className="flex flex-wrap gap-2">
                      {recipe.diets.map((diet, index) => (
                        <span
                          key={index}
                          className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 text-sm capitalize"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}