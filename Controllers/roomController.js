const roomDal = require('../Dal/roomDal');

async function createRoom(req, res) {
    try {
        let result = await roomDal.createRooms(req.body)
        if (!result.status) {
            return res.send({ code: 400, status: false, message: result.message })
        }
        return res.send({ code: 200, status: true, message: result.message, data: result.data })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createRoom };