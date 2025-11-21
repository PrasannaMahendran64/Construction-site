
const nodemailer = require('nodemailer')
require('dotenv').config()


const user_mail =process.env.MAIL_USER

const mail_pass_key = process.env.MAIL_PASS_KEY


const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:user_mail,
        pass:mail_pass_key
    }
})

const mail = async (userEmail,name)=>{
    const mailOptions ={
        from:user_mail,
        to:userEmail,
        subject:"Send Response To User",
        text:`Thank you, ${name}.Our team will contact you soon  `

    }

    await transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log("err",err)
        }
        
    })

    }

module.exports=mail


