const Product = require("../models/product.model");
let cloudinary = require("../middleware.js/coludinary.config");

let get_product = async (req, res) => {
    try {
        let product = await Product.find();
        res.status(200).json({
            message: "product get successfully..",
            product,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}


let create_product = async (req, res) => {
    try {
        let body = req.body;
        let imageUrl = await cloudinary.uploader.upload(req.file.path)

        let newBody = {
            ...body,
            image: imageUrl.secure_url,
            public_id: imageUrl.public_id,
        }

        let product = await Product.create(newBody);
        res.status(201).json({
            message: "product create sucessfully",
            product
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

let delete_product = async (req, res) => {
    try {
        let { id } = req.params;

        let FindById = await Product.findById(id);
        await cloudinary.uploader.destroy(FindById.public_id)
        let product = await Product.findByIdAndDelete(id);

        res.status(200).json({
            message: "product delete sucess",
            product
        });

    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}


let update_product = async (req, res) => {
    try {

        let { id } = req.params;
        let body = req.body;
        if (req.file) {

            let old = await Product.findById(id)
            await cloudinary.uploader.destroy(old.public_id)
            let imageUrl = await cloudinary.uploader.upload(req.file.path);

            let newBody = {
                id,
                ...body,
                image: imageUrl.secure_url,
                public_id: imageUrl.public_id
            }

            let product = await Product.findByIdAndUpdate(id, {
                ...body,
                image: imageUrl.secure_url,
                public_id: imageUrl.public_id
            })

            res.status(200).json({
                message: "product update success",
                newBody,
            })
        } 
        // else {

        //     let old = await Product.findById(id);

        //     let newBody = {
        //         id,
        //         ...body,
        //         image: old.secure_url,
        //         public_id: old.public_id
        //     }
        //     console.log(newBody);

        //     let product = await Product.findByIdAndUpdate(id, {
        //         ...body,
        //         image: old.secure_url,
        //         public_id: old.public_id
        //     })

        //     res.status(200).json({
        //         message: "product update success",
        //         newBody
        //     })
        // }
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = { get_product, create_product, delete_product, update_product }