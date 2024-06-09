import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, updatestatus } from "../controllers/orderController.js"
import { verifyOrder } from "../controllers/orderController.js"
import { userOrders } from "../controllers/orderController.js"
import { adminOrders } from "../controllers/orderController.js"




const orderRouter =express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.post("/adminorders",adminOrders);
orderRouter.post("/updatestatus",updatestatus);



export default orderRouter;