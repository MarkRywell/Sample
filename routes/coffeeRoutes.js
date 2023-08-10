const express= require('express');
const {getCoffee, addCoffee} = require('../controller/coffeeController');

const router = express.Router();


router.get('/getCoffee', getCoffee);
router.post('/', addCoffee);

module.exports = router;