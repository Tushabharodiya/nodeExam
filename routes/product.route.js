let express = require("express");
const { get_product, create_product, delete_product, update_product } = require("../controller/product.controller");
let multer = require("multer");
const { tokenVerify } = require("../middleware.js/tokenverify");
let storage = multer.diskStorage({})
let upload = multer({ storage: storage }).single('image')


let route = express.Router();

route.get("/get", get_product);
route.post("/create", upload, create_product);
route.delete("/delete/:id", delete_product);
route.put("/update/:id", upload, update_product)


module.exports = route;