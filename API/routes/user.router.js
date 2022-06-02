const express=require("express")
const userRouter=express.Router()
const userSchema=require("../models/model")

userRouter.get("/",async(req,res)=>{

   try {
    const user=await  userSchema.find()
    return res.status(200).send(user)
   } catch (error) {
       
    return res.status(400).send(error)
       
   }

 

    
})

userRouter.post("/addUser", async(req,res)=>{

    const {email}=req.body
    try {
        const existUser= await userSchema.findOne({email:email})
        console.log(email)
        if(existUser){

                return res.status(400).send({msg:"user already exist"})

        }

        const user = new userSchema(req.body)
        await user.save()
       return  res.status(200).send({msg:"user add with success"})
    } catch (error) {

       return  res.status(500).send(error)
        
    }
})

module.exports=userRouter

