const mongoose = require("mongoose")
const app = require("../src/app")
require("dotenv").config()

let connectionPromise

const connectDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return
    }

    if (!process.env.MONGODB_URL) {
        throw new Error("MONGODB_URL is missing")
    }

    if (!connectionPromise) {
        connectionPromise = mongoose.connect(process.env.MONGODB_URL)
    }

    await connectionPromise
}

module.exports = async (req, res) => {
    try {
        if (req.url === "/" || req.url.startsWith("/files/")) {
            return app(req, res)
        }

        await connectDB()
        return app(req, res)
    } catch (error) {
        console.error("Serverless API error", error)
        return res.status(500).json({ message: "Server error" })
    }
}
