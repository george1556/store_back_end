const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const moviesController = require("../controllers/movies");

router.get("/", moviesController.getAllMovies);
router.get("/:id", moviesController.getOneMovie);
router.patch("/:id", moviesController.updateMovie);
router.delete("/:id", moviesController.deleteMovie);
router.post("/", moviesController.createNewMovie);

module.exports = router;
