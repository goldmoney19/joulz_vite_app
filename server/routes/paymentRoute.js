import express from "express";
const paymentRoute = express.Router();
import authMiddleware from "../utils/authMiddleware.js";


import { initializePayment, verifyPayment } from "../controller/paymentController.js";



paymentRoute.post("/initialize", initializePayment);
paymentRoute.get("/callback", verifyPayment);





export default paymentRoute 
