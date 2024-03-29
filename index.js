const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// Create the express server
const app = express();

// Connect to DB

connectDB();

// We should use the cors package since the ports of the backend and frontend are in different domains, so we have to use it, if not it throws an error
app.use(cors());

// Allow the server to decode JSON objects
app.use(express.json());

app.use("/api/productos", require("./routes/producto"));

app.listen(4000, () => {
  console.log("El servidor esta corriendo correctamente");
});
