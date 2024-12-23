const {Router}=require("express");
const { addProductPage, getProducts, getProductsByUserId, createProduct } = require("../controller/product.controller");
const { isLogin } = require("../middleware/isLogin");

const productRoute=Router();

// productRoute.post("/add-Product",isLogin,addProductPage);
productRoute.get("/add-Product",isLogin,addProductPage);

productRoute.get("/",getProducts);
productRoute.get("/userId",isLogin,getProductsByUserId);
productRoute.post("/",isLogin,createProduct);

module.exports=productRoute;