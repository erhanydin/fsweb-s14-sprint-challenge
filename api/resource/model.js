// `Resource` modeli buraya

const db = require("../../data/dbConfig");

const getAllResources = async function () {
    let allResources = await db("resources");
    return allResources;
}


const createResource = async function(resource) {
    const [resource_id] = await db("resources").insert(resource);
    const insertedRecord = await db("resources").where("resource_id", resource_id).first();
    return insertedRecord;
}




module.exports = {
    getAllResources,
    createResource
}

