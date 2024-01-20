const roomModel = require('../Models/roomModel');

async function createRooms(data) {
    try {
        let payload = new roomModel(data)
        let result =await payload.save()
        if(result){
            return { code: 200, status: true, message: "Room created successfully", data: result }
        }
        return { code: 202, status: false, message: "Room created successfully", data: {} }

    } catch (err) {
        return { code: 500, status: false, message: err.message }
    }
}

module.exports = { createRooms };