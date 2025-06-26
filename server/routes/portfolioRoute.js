import express from "express";
import authMiddleware from "../utils/authMiddleware.js";
import { restrictTo } from "../services/restrictTo.js";

const portf = express.Router();
import {create, getAllPortfolio, getPortfolioById, deletePortfolioById, updatePortfolioByid, getAllPortfolioDisplay} from "../controller/portfolioController.js"





portf.post("/portfolio", create);
portf.get("/portfolios", authMiddleware, restrictTo("admin"), getAllPortfolio);
portf.get("/portfolio/:id", getPortfolioById);
portf.delete("/delete/portfolio/:id", deletePortfolioById);
portf.put("/update/portfolio/:id", updatePortfolioByid);
portf.get("/portfolio_display",  getAllPortfolioDisplay);




export default portf
