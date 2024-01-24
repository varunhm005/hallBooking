const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/roomController');

router.post('/', roomController.createRoom);
router.get('/', roomController.getAllRoomWithBookings);

module.exports = router;