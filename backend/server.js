const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()
const db=require('./config/dbConfig')
app.use('/api/portfolio',require('./routes/portfolioRoute'))
app.get('/',(req,res)=>{
    res.json({msg:'hello world'})
})
app.listen(3000,()=>{
    console.log('server is listening on 3000')
})