const UserModel = require("../Models/contactModel")
const projectModel = require("../Models/projectsModel")
const mail = require("../Utils/mailService")

const contactController = async(req,res)=>{
try {
    const user =req.body 
    const StoreData = new UserModel(user)
    await StoreData.save()

res.status(201).send("User Data Created ",{message:StoreData})
} catch (error) {
    return res.status(500).send("Error when creating user")
    
}
}

const mailController = async(req,res)=>{

    try {
        const {email,name,mobilenumber,location} =req.body

        const newUser = await UserModel({email,name,mobilenumber,location})
         await mail(email,name)
         await newUser.save()
       return res.status(201).send("User saved and mail sent successfully",{data:newUser})
    } catch (error) {
         return res.status(500).send("Error when creating user")
    }
}


module.exports={
    contactController,
    mailController
}