const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
    // Define your document schema here
    customerName: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    roomId: { type: Schema.Types.ObjectId, required: true },
    bookedStatus: { type: String, default:"Booked" }
});

const Booking = mongoose.model('booking', bookingSchema);

module.exports = Booking;