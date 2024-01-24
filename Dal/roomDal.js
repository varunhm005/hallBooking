const roomModel = require('../Models/roomModel');

async function createRooms(data) {
    try {
        let payload = new roomModel(data)
        let result = await payload.save()
        if (result) {
            return { code: 200, status: true, message: "Room created successfully", data: result }
        }
        return { code: 202, status: false, message: "Room created successfully", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}


async function getAllRoomWithBookings(data) {
    try {
        let result = await roomModel.aggregate()
            .match({ deleted: false })
            .lookup({
                from: "bookings",
                localField: '_id',
                foreignField: 'roomId',
                as: "bookings"
            })
            .unwind({
                path: '$bookings',
                preserveNullAndEmptyArrays: false
            })
            .project({
                roomName: 1,
                bookedStatus: "$bookings.bookedStatus",
                customerName: "$bookings.customerName",
                date: "$bookings.date",
                startTime: "$bookings.startTime",
                endTime: "$bookings.endTime"

            })
        if (result) {
            return { code: 200, status: true, message: "Success", data: result }
        }
        return { code: 202, status: false, message: "Failed", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

module.exports = { createRooms, getAllRoomWithBookings };