const express = require("express")
const path = require("path");
const valid=require("./middleware/recipe.middleware")
const app = express();

app.set("views engine", "ejs");
app.set("viwes", path.join(__dirname, "viwes"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let initialRecipe = [
    {
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish.',
        preparationTime: '15 minutes',
        cookingTime: '15',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
        country: "India",
        veg: true,
        id: 1
    }
]

let pd = initialRecipe.length + 1

app.get("/",(req,res)=>{
    res.send("Welcome to the Recipe API.")
})

app.get("/recipe/all",(req,res)=>{
    res.send(initialRecipe)
})

app.get("/add",(req,res)=>{
    res.render("recipe")
})

app.get("/index",(req,res)=>{
    res.render("index")
})

app.post("/recipe/add",valid,(req,res)=>{
    try {
        const {
            name,
            description,
            preparationTime,
            cookingTime,
            imageUrl,
            country,
            veg
        }=req.body
    
        const newRecipe = {
            name,
            description,
            preparationTime,
            cookingTime,
            imageUrl,
            country,
            veg,
            id:pd++,
        };
        initialRecipe.push(newRecipe);
        res.status(200).send(initialRecipe);
    
    } catch (error) {
        res.status(400).send("can not add recipe");
    }
});

app.patch("/recipe/update/:id",(req,res)=>{
    const { id } = req.params;
    const updateRecipe = req.body;

    const Recipes = initialRecipe.filter((ele) => ele.id == id);

    if (Recipes.length === 0) {
        return res.status(400).send("Recipe not found");
    }
    const recipe = Recipes[0];
    if (updateRecipe.name) recipe.name = updateRecipe.name;
    if (updateRecipe.description) recipe.description = updateRecipe.description;
    if (updateRecipe.preparationTime);
    if (updateRecipe.cookingTime);
    if (updateRecipe.imageUrl) recipe.imageUrl = updateRecipe.imageUrl;
    if (updateRecipe.country) recipe.country = updateRecipe.country;
    if (updateRecipe.veg);
    res.status(200).send(initialRecipe);

})

app.delete("/recipe/delete/:id",(req,res)=>{
    const { id } = req.params;
    const index = initialRecipe.findIndex((ele) => ele.id == id);
    if (index === -1) {
        return res.status(400).send("Recipe not found");
    }
    initialRecipe.splice(index, 1);
    res.status(200).send(initialRecipe);
});

app.get("/recipe/filter",(req,res)=>{
    const { veg, sort, country } = req.query;
    let filterRecipe = [...initialRecipe];
    if (veg!== undefined) filterRecipe = filterRecipe.filter((ele) => ele.veg === veg);
    if (country) filterRecipe = filterRecipe.filter((ele) => ele.country === country);
    if (sort === "lth") filterRecipe.sort((a, b) => a.cookingTime - b.cookingTime);
    else if (sort === "htl") filterRecipe.sort((a, b) => b.cookingTime - a.cookingTime);
    res.status(200).send(filterRecipe);
});
app.listen(8090,()=>{
    console.log("listening on http://localhost:8090");
    
})
