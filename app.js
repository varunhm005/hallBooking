const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();
// Routes
const roomRoutes = require('./Routes/roomRoute');
const bookingRoutes = require('./Routes/bookingRoute');
app.use('/rooms', roomRoutes);
app.use('/booking', bookingRoutes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});