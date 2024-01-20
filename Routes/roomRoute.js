const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/roomController');

router.post('/', roomController.createRoom);

module.exports = router;