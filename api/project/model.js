// `Proje` modeli buraya

const db = require("../../data/dbConfig");


const getAllProjects = async function () {

    let allProjects = await db("projects");
    let allProjects2 = allProjects.map((item) => {
        return { ...item, project_completed: item.project_completed === 1 }
    })

    return allProjects2;

};

const createProject = async function (project) {

    let [project_id] = await db("projects").insert(project);
    let insertedProject = await db("projects").where("project_id", project_id).first();
    return {
        ...insertedProject,
        project_completed: insertedProject.project_completed === 1
    }
}



module.exports = {
    getAllProjects,
    createProject
}


