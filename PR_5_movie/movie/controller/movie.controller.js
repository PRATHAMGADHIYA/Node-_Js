const movie = require("../model/movie.schema");



const createmovie=async(req,res)=>{
    try {
        const movie=await movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getmovie=async(req,res)=>{
    try {
        const movie=await movie.find();
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getmovieById=async(req,res)=>{
    try {
        const {movieId}=req.params;
        const movie=await movie.findById(movieId);
        res.status(200).json(movie);
    } catch (error) {
     res.status(500).json(error);   
    }
}

const updatemovieById=async(req,res)=>{
    try {
        const {movieId}=req.params;
        const movie=await movie.findByIdAndUpdate(movieId,req.body);
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error)
    }
}

const deletemovieById=async(req,res)=>{
   try {
     const {movieId}=req.params;
     const movie=await movie.findByIdAndDelete(movieId);
     res.status(200).json(movie)
   } catch (error) {
    res.status(500).json(error)
   }
}

module.exports={createmovie,getmovie,getmovieById,updatemovieById,deletemovieById}