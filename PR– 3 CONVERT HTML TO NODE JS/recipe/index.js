const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const recipeRoutes = require('./routes/recipe.route');

const app = express();
const PORT = 8090;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', recipeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
