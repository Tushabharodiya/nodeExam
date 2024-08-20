const subCategory = require("../models/subcategory.model")


let get_subcategory = async (req, res) => {
    try {
        let category = await subCategory.find().populate("category");

        res.status(200).json({
            message: "category get successfully..",
            category,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let create_subcategory = async (req, res) => {
    try {

        let body = req.body;

        let category = await subCategory.create(body);

        res.status(201).json({
            message: "category added succesfully..",
            category,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let delete_subcategoty = async (req, res) => {
    try {
        let { id } = req.params;

        let category = await subCategory.findByIdAndDelete(id)

        res.status(200).json({
            message: "delete category successfully..",
            category,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


let update_subcategory = async (req, res) => {
    try {

        let { id } = req.params;;
        let body = req.body;

        let data = await subCategory.findByIdAndUpdate(id, body)

        let category = {
            id,
            ...body,
        }

        res.status(200).json({
            message: "category update succesfully..",
            category
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}


module.exports = { get_subcategory, create_subcategory, delete_subcategoty, update_subcategory }