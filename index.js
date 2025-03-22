const express = require('express');
const app = express();
require('dotenv').config()


const PORT = process.env.PORT;

app.use(express.json());
require('./DBConn/conn');

const GymRoutes = require('./Routes/gym');

app.use('/auth', GymRoutes)

app.get('/', (req, res) => {
    res.send({ "message": "Congrats your server is runing on port 4000 successfully" })
})

app.listen(PORT, () => {

    console.log("server is running Port 4000")
})