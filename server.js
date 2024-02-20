import express from 'express';

import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './Config/db.js';
import authRoutes from './routes/authRouter.js';



//configure env
dotenv.config();

//database configure
connectDB();

const app = express()



//middleware
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use("/api/v1/auth",authRoutes );

//rest Api


app.get('/', (req,res)=> {
    res.send('Hello World hiiii')
  })
  
  //1. define port number from env file 
  // and if their is any error then or operation will take palce 
  // and run in port: 3000
  //2. process.env.port use cheythu annu env file ill ninnu port import cheythu port enna 
  // variable illottu assign cheyunnathu
  const port=process.env.port || 3000;

  app.listen(port,()=>{
    console.log(`server running on ${port}`)
  })