const initialRecipe = require('../models/recipe.model');

// Welcome message route
exports.welcome = (req, res) => {
  res.send("Welcome to the Recipe API.");
};

// Get all recipes
exports.getAllRecipes = (req, res) => {
  res.json(initialRecipe);
};

// Add a new recipe
exports.addRecipe = (req, res) => {
  const { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;

  // Check for missing data
  if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || veg === undefined) {
    return res.status(400).send('All fields are required');
  }

  const newRecipe = {
    name,
    description,
    preparationTime,
    cookingTime,
    imageUrl,
    country,
    veg,
    id: initialRecipe.length + 1
  };

  initialRecipe.push(newRecipe);
  res.json(initialRecipe);
};

// Update a recipe
exports.updateRecipe = (req, res) => {
  const { id } = req.params;
  const { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;

  let recipe = initialRecipe.find(r => r.id == id);

  if (!recipe) return res.status(404).send("Recipe not found");

  recipe = { ...recipe, name, description, preparationTime, cookingTime, imageUrl, country, veg };
  initialRecipe[id - 1] = recipe;

  res.json(initialRecipe);
};

// Delete a recipe
exports.deleteRecipe = (req, res) => {
  const { id } = req.params;
  const index = initialRecipe.findIndex(r => r.id == id);

  if (index === -1) return res.status(404).send("Recipe not found");

  initialRecipe.splice(index, 1);
  res.json(initialRecipe);
};

// Filter and sort recipes
exports.filterRecipes = (req, res) => {
  let filteredRecipes = initialRecipe;

  const { veg, sort, country } = req.query;

  if (veg !== undefined) {
    filteredRecipes = filteredRecipes.filter(r => r.veg === (veg === 'true'));
  }

  if (country) {
    filteredRecipes = filteredRecipes.filter(r => r.country.toLowerCase() === country.toLowerCase());
  }

  if (sort) {
    filteredRecipes = filteredRecipes.sort((a, b) => {
      if (sort === 'lth') {
        return a.preparationTime.localeCompare(b.preparationTime);
      } else if (sort === 'htl') {
        return b.preparationTime.localeCompare(a.preparationTime);
      }
      return 0;
    });
  }

  res.json(filteredRecipes);
};
