import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"

dotenv.config()

//piyushblog flowingfrontend
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("database is connected")).catch((err)=>console.log(err))

const app = express()

app.get('/',(req,res)=>{
  res.send("hello there")
})

const port = 8000
app.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
})


