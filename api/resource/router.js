// `/api/resources` router buraya

const express = require("express");
const router = express.Router();

const middleware = require("../resource/middleware");
const resourceModel = require("../resource/model");

router.get("/", async (req, res, next) => {
    try {
        let allResources = await resourceModel.getAllResources();
        res.json(allResources);
    } catch (error) {
        next(error);
    }
});

router.post("/", middleware.checkUniq, async (req, res, next) => {
    try {
        if(!req.body.resource_name) {
            res.status(400).json({message: "Resource name is missing"});
        } else {
            let insertedResource = await resourceModel.createResource(req.body);
            res.json(insertedResource);
        }
    } catch (error) {
        next(error);
    }
});




module.exports = router;

