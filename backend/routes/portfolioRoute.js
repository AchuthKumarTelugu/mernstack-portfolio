const Router = require('express').Router()
const { Intros, About, Experience, Projects, Contact } = require('../modals/portfolioModal')

// get all portfolio data
Router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intros.find()
        const abouts = await About.find()
        const experiences = await Experience.find()
        const projects = await Projects.find()
        const contact = await Contact.find()
        res.status(200).send({
            intros: intros[0],
            projects: projects,
            contact: contact[0],
            abouts: abouts[0],
            experiences: experiences,
        })
    } catch (error) {
        console.log(error)
    }
})
Router.post("/update-intros",async(req,res)=>{
  try {
    const intros= await Intros.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    res.status(200).send({data:intros,success:true,message:"Intro updated successfully"})
        
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
console.log('req.body',req.body);
})
Router.post("/update-abouts",async(req,res)=>{
  try {
    const abouts= await About.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    res.status(200).send({data:abouts,success:true,message:"Intro updated successfully"})
        
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
console.log('abouts:req.body',req.body);
})
//add new exprience
Router.post('/add-experiences',async(req,res)=>{
   try{
       const experience=new Experience(req.body)
       await experience.save()
       res.status(200).send({
        success:true,
        data:experience,
        message:"Experience added succesfully!"
       })
   }catch(error) {
    console.log(error)
    res.status(500).send({success:false,message:error.message})
   }
})
//update the experience
Router.post('/update-experiences',async(req,res)=>{
  try {
    const experience=await Experience.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
    res.send({success:true,message:"experiences updated successfully",data:experience})
  } catch (error) {
    console.log(error)
    res.send({success:false,message:error.message})
  }
})
//delete the experience
Router.delete('/delete-experience',async(req,res)=>{
  try {
    const result=await Experience.findOneAndDelete({_id:req.body.id});
    res.send({success:true,data:result,message:'Deleted Successfully'})
  } catch (error) {
    console.log(error)
  }
})
module.exports = Router;