const express = require("express");
const connectDB = require('./config/db');

// Create the express server
const app = express();

// Connect to DB

connectDB();

app.use('/api/productos', require("./routes/producto"));

// Define route

// app.get('/', (req, res) => {
//     res.send("Hello world")
// })

app.listen(4000, () => {
    console.log("El servidor esta corriendo correctamente")
})