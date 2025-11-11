import express from "express"
import { cartController } from "../controllers/cart.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { authroleBuyer } from "../middlewares/authroles.js";
const router = express.Router();

router.post('/proforcar/:productId' ,authMiddleware,authroleBuyer, cartController.createProductForCart)
router.delete('/deleteprofromcart/:productId' ,authMiddleware,authroleBuyer, cartController.deleteProductFromCart)
router.get('/getcart' ,authMiddleware,authroleBuyer, cartController.getCart)
export const cartRoute = router;