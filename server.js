const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
require('dotenv').config()
const db=require('./config/dbConfig')
app.get('/',(req,res)=>{
    res.json({msg:'hello world'})
})
app.listen(3000,()=>{
    console.log('server is listening on 3000')
})