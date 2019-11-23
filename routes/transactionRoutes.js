const express = require("express");
const router = express.Router();
const knex = require("../db/knex");
const transactionController = require("../controllers/transactions");

router.get("/", transactionController.getAllTransactions);
router.get("/:id", transactionController.getOneTransaction);
router.patch("/:id", transactionController.updateTransaction);
router.post("/", transactionController.createNewTransaction);
router.delete("/:id", transactionController.deleteTransaction);

module.exports = router;
