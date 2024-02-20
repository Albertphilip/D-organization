import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";


export const registerController= async(req,res)=>{
    try {
        const {name,email,password,phone}=req.body

        //validation

        if(!name){
            return res.send({error:'Name is Required'})
        }
        if(!email){
            return res.send({error:'Email is Required'})
        }
        if(!password){
            return res.send({error:'Password is Required'})
        }
        if(!phone){
            return res.send({error:'Phone number is Required'})
        }

        //check user
        const exisitingUser = await userModel.findOne({email})
           //esisting user
               if(exisitingUser){
                   return res.status(200).send({
                     success:true,
                      message:'Already Register please login',
                     })
                }

    //register user
    const hashedPassword = await hashPassword(password)
 
    //save
    const user = await new userModel({name,email,phone,password:hashedPassword}).save()
    res.status(201).send({
        success:true,
        message:'User Register Successfully',
        user,
    })

    } catch (error) {
        console.log(error)

        // status code 500 is a generic error response. 
        //It means that the server encountered an unexpected condition that prevented it from fulfilling the request

        res.status(500).send({
            success:false,
            message:'Error in registration',
            error
        })
        
    }
}


