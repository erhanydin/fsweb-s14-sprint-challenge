
const db = require("../../data/dbConfig");


const checkUniq = async function(req, res, next) {
    try {
        let {resource_name} = req.body;
        let isExist = await db("resources").where("resource_name", resource_name).first();
        if(isExist) {
            next({
                status: 400,
                message: "This name is already taken"
            })
        }
        next();
    } catch (error) {
        next(error);
    }
}


module.exports = {checkUniq};

