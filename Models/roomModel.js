const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    // Define your document schema here
    seatsAvailable: { type: String, required: true },
    amneties: [{ type: String, required: true }],
    priceForHour: { type: String, required: true },
    roomName: { type: String, required: true }
});

const Room = mongoose.model('room', roomSchema);

module.exports = Room;