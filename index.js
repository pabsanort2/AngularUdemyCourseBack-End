const express = require("express");

// Create the express server
const app = express();

// Define route

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.listen(4000, () => {
    console.log("El servidor esta corriendo correctamente")
})