// Routes for product

const express = require("express");
const router = express.Router();

// api/productos
router.post("/", () => {
    console.log("Creando producto...")
})

module.exports = router;