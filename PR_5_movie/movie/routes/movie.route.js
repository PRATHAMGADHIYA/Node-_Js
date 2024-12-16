const { Router } = require("express");
const { getmovie, createmovie, getmovieById, updatemovieById, deletemovieById } = require("../controller/movie.controller");

const movieRouter = Router();

movieRouter.get("/", getmovie)
movieRouter.post("/create", createmovie)
movieRouter.get("/:movieId", getmovieById)
movieRouter.patch("/update/:movieId", updatemovieById)
movieRouter.delete("/delete/:movieId", deletemovieById)

module.exports = movieRouter;