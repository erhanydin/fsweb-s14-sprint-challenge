// `/api/tasks` router buraya


const express = require("express");
const router = express.Router();

const middleware = require("../task/middleware");
const taskModel = require("../task/model");

router.get("/", async (req, res, next) => {
    try {
        let allTasks = await taskModel.getAllTasks();
        res.json(allTasks);
    } catch (error) {
        next(error);
    }
})

router.post("/", middleware.checkTasksFields ,async (req, res, next) => {
    try {
        let insertedTask = await taskModel.createTask(req.body);
        res.json(insertedTask);
    } catch (error) {
        next(error);
    }
})




module.exports = router;