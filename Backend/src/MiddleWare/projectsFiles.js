const multer = require('multer')

const fs = require('fs')

const path = require('path')


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        console.log("file",file)
        cb(null,"src/Uploads")
    },
    filename:function (req,file,cb){
        const extension = path.extname(file.originalname)
        const fileName = `${Date.now()}-${file.originalname}`
        cb(null,fileName)
    }
})

const Uploads = multer({storage:storage})

module.exports = Uploads