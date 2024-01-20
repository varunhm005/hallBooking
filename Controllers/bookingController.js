const bookingDal = require('../Dal/bookingDal');

async function createBooking(req, res) {
    try {
        let result = await bookingDal.createBooking(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createBooking };