const express = require('express')

const http = require('http')

const cors = require('cors')
const router = require('../src/Routes/routes')
const path = require('path')



const app = express()

app.use(cors())

app.use(express.json())
app.use(router)


const fileStore = express.static(path.join(__dirname,"Uploads"))
app.use("/files",fileStore)



const server = http.createServer(app)



module.exports= server