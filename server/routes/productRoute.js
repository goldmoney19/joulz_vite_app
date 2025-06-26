import express from "express";
import authMiddleware from "../utils/authMiddleware.js";
import { restrictTo } from "../services/restrictTo.js";


import {create, getAllProducts,getAllShop, getProductById} from "../controller/productController.js"

const produkt = express.Router();

produkt.post("/product", create);
produkt.get("/shops",  getAllShop);
produkt.get("/products", authMiddleware, restrictTo("admin"),  getAllProducts);
produkt.get("/product/:id", getProductById);
// portf.get("/portfolios", getAllPortfolio);
// portf.get("/portfolio/:id", getPortfolioById);
// portf.delete("/delete/portfolio/:id", deletePortfolioById);
// portf.put("/update/portfolio/:id", updatePortfolioByid);




export default produkt
