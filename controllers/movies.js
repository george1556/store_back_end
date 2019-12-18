const knex = require("../db/knex");

//Gets a list of all the movies
exports.getAllMovies = function(req, res) {
  knex("movies").then(movies => res.json(movies));
};

//Retrieves a single movie
exports.getOneMovie = function(req, res) {
  knex("movies")
    .where("id", req.params.id)
    .then(movies => res.json(movies));
};

//Updates a movie
exports.updateMovie = function(req, res) {
  knex("movies")
    .update({
      ...req.body
    })
    .where("id", req.params.id)
    .returning("*")
    .then(movies => res.json(movies));
};

//Add a new movie to the database
exports.createNewMovie = function(req, res) {
  knex("movies")
    .insert(req.body)
    .returning("*")
    .then(newMovie => res.json(newMovie));
};

//Deletes movie from transactions join table first, then deletes movie from inventory complete.
exports.deleteMovie = function(req, res) {
  knex("transactions")
    .del()
    .where("movie_id", req.params.id)
    .returning("*")
    .then(
      knex("movies")
        .del()
        .where("id", req.params.id)
        .returning("*")
        .then(updatedMovieList => res.json(updatedMovieList))
    );
};
