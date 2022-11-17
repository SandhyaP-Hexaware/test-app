const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.status(201).send("get call")
})

module.exports = app

var server = app.listen(4000, () => {
    console.log("Server is running on 4000")
})

server.close()