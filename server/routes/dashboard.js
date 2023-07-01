const express = require("express");
const router = express.Router();
const {isLoggedIn} = require('../middleware/chechAuth');
const dashboardController = require('../controllers/dashboardController');

/* Dashboard Routes  */
router.get('/dashboard',isLoggedIn, dashboardController.dashboard);



module.exports = router