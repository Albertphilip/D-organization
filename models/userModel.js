import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:true,
            //trim is used to remove white space between text
            trim: true
        },
        email: {
            type:String,
            required:true,
            unique:true
        },
        password: {
            type:String,
            required:true
        },
        phone: {
            type:String,
            required:true
        },
        role:{
            type:Number,
            default:0
        }
    },{timestamps:true}) // insert and update cheytha date ariyan 

   // user ennathu table inte name annu
    export default mongoose.model('user',userSchema) 
