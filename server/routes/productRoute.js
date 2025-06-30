import express from "express";
import authMiddleware from "../utils/authMiddleware.js";
import { restrictTo } from "../services/restrictTo.js";


import {create, getAllProducts,getAllShop, getProductById, updateProductByid,deleteProductById} from "../controller/productController.js"

const produkt = express.Router();

produkt.post("/product", create);
produkt.get("/shops",  getAllShop);
produkt.get("/products",  getAllProducts);
produkt.get("/product/:id", getProductById);
produkt.put("/update/product/:id", updateProductByid);
produkt.delete("/delete/product/:id", deleteProductById);



// portf.delete("/delete/portfolio/:id", deletePortfolioById);
// portf.put("/update/portfolio/:id", updatePortfolioByid);




export default produkt
