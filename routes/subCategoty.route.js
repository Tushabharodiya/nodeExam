let express = require("express");
const { get_subcategory, create_subcategory, delete_subcategoty, update_subcategory } = require("../controller/subcategory.controller");


let route = express.Router();

route.get("/get", get_subcategory);
route.post("/create", create_subcategory);
route.delete("/delete/:id", delete_subcategoty);
route.put("/update/:id", update_subcategory)

module.exports = route;