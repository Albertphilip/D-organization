import express from 'express';
const app = express()
import dotenv from 'dotenv'


//configure env
dotenv.config();

//rest Api


app.get('/', (req,res)=> {
    res.send('Hello World hii')
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