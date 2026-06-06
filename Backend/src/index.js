const mongoose = require('mongoose')
const app = require('./app')
require('dotenv').config()

const mongodb_url = process.env.MONGODB_URL

const port = process.env.PORT || 4000

if (!mongodb_url) {
    console.error("MONGODB_URL is missing")
    process.exit(1)
}

mongoose.connect(mongodb_url).then(()=>{
    app.listen(port,()=>{
        console.log(`server is running ${port}`)
    })
    console.log("mongodb connected")
}).catch((err)=>{
    console.log("mongodb error",err)
})
