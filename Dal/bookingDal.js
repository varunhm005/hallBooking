const bookingModel = require('../Models/bookingModel');
const mongoose = require('mongoose')

async function createBooking(data) {
    try {
        let payload = new bookingModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Booking created successfully", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

async function checkBookingExists(data) {
    try {
        let query = {
            $and: [
                { roomId: new mongoose.Types.ObjectId(data.roomId) }],
            $or: [{ date: { $eq: new Date(data.date) } },
            { startTime: { $eq: new Date(data.startTime) } },
            { endTime: { $eq: new Date(data.endTime) } }]
        }

        let result = await bookingModel.aggregate()
            .match(query)

        if (result.length > 0) {
            return { code: 202, status: false, message: "Data already exists", data: result }
        }
        return { code: 200, status: true, message: "Data not found", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

module.exports = { createBooking, checkBookingExists };