// bu`Task` modeli buraya

const db = require("../../data/dbConfig");

const getAllTasks = async function () {
    let allTasks = await db("tasks as t")
                .leftJoin("projects as p", "p.project_id", "t.project_id")
                .select("t.task_id","t.task_description","t.task_notes", "t.task_completed","p.project_name","p.project_description");
    let allTasks2 = allTasks.map((item) => {
        return { ...item, task_completed: item.task_completed === 1 }
    })

    return allTasks2;
}

const createTask = async function(task) {
    const [task_id] = await db("resources").insert(task);
    let insertedTask =  await db("resources").where("resource_id", task_id).first();
    return {
        ...insertedTask,
        task_completed: insertedTask.task_completed === 1
    }
}



module.exports = {
    getAllTasks,
    createTask
}





