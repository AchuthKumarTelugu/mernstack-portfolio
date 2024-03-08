const Router = require('express').Router()
const { Intros, About, Experience, Projects, Contact } = require('../modals/portfolioModal')

Router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intros.find()
        const about = await About.find()
        const experience = await Experience.find()
        const projects = await Projects.find()
        const contact = await Contact.find()
        res.status(200).send({
            intros: intros[0],
            about: about[0],
            experience: experience,
            projects: projects,
            contact: contact[0]
        })
    } catch (error) {
        console.log(error)
    }
})
module.exports = Router;