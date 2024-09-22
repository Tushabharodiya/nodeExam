let express = require("express")

let routes = express.Router();
let categoryRoute = require("./catrgory.route");
let subcategoryRoute = require("./subCategoty.route");
let productRoute = require("./product.route");
let userRoute = require("./user.route");
const { tokenVerify } = require("../middleware.js/tokenverify");


routes.use("/category", tokenVerify, categoryRoute);
routes.use("/subcategory", tokenVerify, subcategoryRoute);
routes.use("/product", tokenVerify, productRoute);
routes.use("/user", userRoute);


module.exports = routes;
