const express = require('express');
const router = express.Router();
const bookingController = require('../Controllers/bookingController');

router.post('/', bookingController.createBooking);

module.exports = router;