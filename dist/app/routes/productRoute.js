import express from "express";
import { productController } from "../controllers/products.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { authroleSeller } from "../middlewares/authroles.js";
const router = express.Router();
router.post('/createproduct', authMiddleware, authroleSeller, productController.createProduct);
router.get('/getallproducts', authMiddleware, authroleSeller, productController.getAllProducts);
router.get('/searchproduct', authMiddleware, authroleSeller, productController.getProductBySearch);
router.get('/:id', authMiddleware, authroleSeller, productController.getProductById);
router.put('/updateproduct/:id', authMiddleware, authroleSeller, productController.updateProduct);
router.delete('/deleteproduct/:id', authMiddleware, authroleSeller, productController.deleteProduct);
export const productRoute = router;
//# sourceMappingURL=productRoute.js.map