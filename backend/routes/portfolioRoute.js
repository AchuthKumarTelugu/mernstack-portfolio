const Router = require('express').Router()
const { Intros, About, Experience, Projects, Contact } = require('../modals/portfolioModal')

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
module.exports = Router;