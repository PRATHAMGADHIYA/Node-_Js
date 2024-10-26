const { Router } = require("express")

const { createProduct, getProducts, getProductsWithId } = require("../controller/product.controller");

const productRouter = Router();

productRouter.post("/", createProduct);

productRouter.get("/", getProducts);
    
productRouter.get("/user/:id", getProductsWithId);

module.exports = productRouter;