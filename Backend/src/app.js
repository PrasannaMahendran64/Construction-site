const express = require('express')

const cors = require('cors')
const router = require('../src/Routes/routes')
const path = require('path')



const app = express()

app.use(cors())

app.use(express.json())

const fileStore = express.static(path.join(__dirname, "Uploads"))
app.use("/files",fileStore)

app.get("/", (req, res) => {
    res.status(200).json({ message: "Construction API is running" })
})

app.use(router)


module.exports = app
