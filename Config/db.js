import mongoose from 'mongoose'

//connect database

const connectDB = async()=>{
    try {
         const conn = await mongoose.connect(process.env.mongodb_url)
         console.log(`Database connected ${conn.connection.host}`);
    } catch(error) {
        console.log(`Database connection error: ${error}`)
    }
};

export default connectDB;