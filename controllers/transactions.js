const knex = require("../db/knex");

//Gets a list of all the Transactions
exports.getAllTransactions = function(req, res) {
  knex("transactions").then(transactions => res.json(transactions));
};

//Retrieves a single Transaction
exports.getOneTransaction = function(req, res) {
  knex("transactions")
    .where("id", req.params.id)
    .then(transaction => res.json(transaction));
};

//Deletes a Transaction
exports.deleteTransaction = function(req, res) {
  knex("transactions")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(updatedTransactions => res.json(updatedTransactions));
};

//Updates a Transactions information
exports.updateTransaction = function(req, res) {
  knex("transactions")
    .update({
      ...req.body
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedTransactions => res.json(updatedTransactions));
};

//Cycles through array to put each individual transaction in the transactions database.
exports.createNewTransaction = function(req, res) {
  for (let i = 0; i < req.body.length; i++) {
    knex("transactions")
      .insert(req.body[i])
      .returning("*")
      .then(newTransaction => res.json(newTransaction));
  }
};
