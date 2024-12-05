const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipe.controller');

// Base route
router.get('/', recipeController.welcome);

// Recipe listing route
router.get('/recipe/all', recipeController.getAllRecipes);

// Add new recipe
router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/recipe.html'));
});
router.post('/recipe/add', recipeController.addRecipe);

// Update recipe
router.patch('/recipe/update/:id', recipeController.updateRecipe);

// Delete recipe
router.delete('/recipe/delete/:id', recipeController.deleteRecipe);

// Filter recipes
router.get('/recipe/filter', recipeController.filterRecipes);

module.exports = router;
