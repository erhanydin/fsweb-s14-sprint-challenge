//  `/api/projects` router buraya

const express = require("express");
const router = express.Router();

const projectModel = require("./model");


router.get("/", async (req, res, next) => {
    try {
        const allProjects = await projectModel.getAllProjects();
        res.json(allProjects);
    } catch (error) {
        next(error);
    }
});



router.post("/", async(req, res, next) => {
    try {
        if(!req.body.project_name) {
            res.status(400).json({message: "Project name is missing"});
        } else {
            let insertedProject = await projectModel.createProject(req.body);
            res.json(insertedProject);
        }
    } catch (error) {
        next(error);
    }
});

module.exports = router;