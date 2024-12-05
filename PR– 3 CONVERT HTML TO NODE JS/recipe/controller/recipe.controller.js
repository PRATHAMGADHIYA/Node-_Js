const Recipe=require("../models/recipe.model");

const createrecipe=async(req,res)=>{
    try {
        let recipe=await Recipe.find();
        res.status(200).send(recipe)
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

module.exports={createrecipe}



