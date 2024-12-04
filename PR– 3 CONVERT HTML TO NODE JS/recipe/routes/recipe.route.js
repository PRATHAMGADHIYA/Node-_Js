const {Router}=require("express");
const { createrecipe } = require("../controller/recipe.controller");

const recipeRoute = Router();

recipeRoute.get("/recipe/all",createrecipe);
recipeRoute.post

module.exports = recipeRoute;
