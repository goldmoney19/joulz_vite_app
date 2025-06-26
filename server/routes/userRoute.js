import express from "express"
// import authenticateToken from "../utils/authMiddleware.js";
// import verifyToken from "../utils/verifyToken.js";
import authMiddleware from "../utils/authMiddleware.js";
import { restrictTo } from "../services/restrictTo.js";


import {create, getAllUsers, getUserById,updateUserByid, deleteUserById, login, addToCart, getUserCart} from "../controller/userController.js"

const route = express.Router();

route.post("/user", create);
route.get("/users",authMiddleware , restrictTo("admin"), getAllUsers);
route.get("/user/:id", getUserById);
route.delete("/delete/user/:id", deleteUserById);
route.put("/update/user/:id", updateUserByid);
route.post("/login", login);
route.post("/add_To_Cart", addToCart);
route.post("/get_user_cart", getUserCart);




export default route
