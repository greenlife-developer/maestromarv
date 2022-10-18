require('dotenv').config({
    path: './config_files/.env'
})
const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("API is working...")
})

router.post("/products/shop", (req, res) => {
    console.log(req.body.formBody.name)
})


module.exports = router