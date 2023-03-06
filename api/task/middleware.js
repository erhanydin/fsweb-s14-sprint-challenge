const db = require("../../data/dbConfig");

const checkTasksFields = async (req, res, next) => {
    let { project_id, task_description } = req.body;
    if (project_id === undefined || task_description === undefined) {
        next({
            status: 400,
            message: "You should fill the missing fields"
        })
    } else {
        let isExistProjectID = await db("projects").where("project_id", project_id).first();
        if (!isExistProjectID) {
            next({
                status: 400,
                message: "This project does not exist"
            })
        } else {
            next();
        }
    }
}




module.exports = { checkTasksFields };