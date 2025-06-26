import express from "express";
const checkoutRoute = express.Router();
import authMiddleware from "../utils/authMiddleware.js";


import { _checkout } from "../controller/orderController.js";



checkoutRoute.post("/check_out", _checkout);





export default checkoutRoute 
