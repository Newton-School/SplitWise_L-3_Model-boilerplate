const express = require('express');

const { getAllExpense } = require('../controllers/expenseControllers');

const router = express.Router();

router.get('/', getAllExpense);

module.exports = router;
