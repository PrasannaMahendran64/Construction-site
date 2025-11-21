const projectModel = require("../Models/projectsModel");

const projectDetails = async (req,res)=>{
    try {
        const projectData = req.body
        projectData.image = req.file.filename;
        const StoreData = new projectModel(projectData)
        await StoreData.save()

        res.status(201).send({message:"data uploaded successfully"})
    } catch (error) {
        return res.status(error.statusCode || 500).send({message: error.message ||"Error when regsitering user"})
    }
}

const showProjectData = async (req,res)=>{
    try {
        
        const showData = await projectModel.find()
        res.status(201).send({data:showData})
    } catch (error) {
        res.status(500).send("error",error.message)
    }
}

const showProjectDatabyID = async (req,res)=>{
    try {
        const {id} =req.params
        const showData = await projectModel.findById(id)
        res.status(201).send({data:showData})
    } catch (error) {
        res.status(500).send("error",error.message)
    }
}

const showProjectDatabyTitle = async (req,res)=>{
    try {
        const {title} =req.params
        const showData = await projectModel.findOne({title})
        res.status(201).send({data:showData})
    } catch (error) {
        res.status(500).send("error",error.message)
    }
}

const updateProjectData = async (req,res)=>{
    try {
        const id = req.params.id;
        const updateData =  req.body
        if(req.file){
            updateData.image = req.file.filename
        }

        const updateProject = await projectModel.findByIdAndUpdate(id,updateData,{new:true}) 
        res.status(201).send({date:updateProject})
    } catch (error) {
         res.status(500).send("error",error.message)
    }
}


module.exports={
    projectDetails,
    showProjectData,
    updateProjectData,
    showProjectDatabyID,
    showProjectDatabyTitle
}