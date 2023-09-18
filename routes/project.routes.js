const router = require("express").Router();

// const mongoose = require("mongoose");

const Project = require("../models/Project.model");
const Task = require("../models/Task.model");


//  POST /api/projects  -  Creates a new project
router.post("/projects", (req, res, next) => {
    const { title, description } = req.body;

    const newProject = {
        title,
        description,
        tasks: []
    }

    Project.create(newProject)
        .then(response => res.json(response))
        .catch(err => res.json(err));
});


// GET /api/projects -  Retrieves all of the projects
router.get('/projects', (req, res, next) => {
    Project.find()
        .then( response => {
            console.log(response)
        })
        .catch(err => res.json(err));
});


module.exports = router;
