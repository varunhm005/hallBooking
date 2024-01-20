const bookingModel = require('../Models/bookingModel');

async function createBooking(data) {
    try {
        let payload = new bookingModel(data)
        let result =await payload.save()
        if(result){
            return { code: 200, status: true, message: "Booking created successfully", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

module.exports = { createBooking };