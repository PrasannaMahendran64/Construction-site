const express = require('express')

const userController = require("../Controller/contactController")

const projectController = require("../Controller/projectController")
const Uploads = require('../MiddleWare/projectsFiles')


const router = express.Router()

router.post("/contact",userController.contactController)

router.post("/usercontact",userController.mailController)


router.post("/projectData",Uploads.single("image"),projectController.projectDetails)

router.get("/showproject",projectController.showProjectData)
router.get("/showprojects/:id",projectController.showProjectDatabyID)
router.get("/showprojects/title/:title",projectController.showProjectDatabyTitle)

router.put("/updaterproject/:id",Uploads.single("image"),projectController.updateProjectData)
module.exports=router

