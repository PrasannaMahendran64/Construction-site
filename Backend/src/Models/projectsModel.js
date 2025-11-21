const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    
    image:{
        type:String
    },
    title:{
        type:String
    },
    design:{
        type:String
    },
    date:{
        type:String 
    },
    details:{
        type:String
    }


},{
    collection:"Projects"
}
)

const projectModel = mongoose.model("Projects",projectSchema)


module.exports =projectModel


