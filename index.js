const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const projects = require('./data/allProjects.json')
const reactProjects = require('./data/reactProjects.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Ovi Islam Abir is running')
})

app.get('/projects', (req, res) =>{
    res.send(projects)
})

app.get('/projects/:id', (req, res) => {
    const id = req.params.id
    const project = projects.find(p => p.id === id) 
    res.send(project)
})

app.get('/reactProjects', (req, res) =>{
    res.send(reactProjects)
})



app.listen(port, () => {
  console.log(`Ovi Islam Abir is running on port ${port}`)
})
