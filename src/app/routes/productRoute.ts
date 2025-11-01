import express from "express"
import { productController } from "../controllers/products.js";
const router = express.Router();

router.post('/create', productController.createProduct);
router.get('/getall', productController.getAllProducts); //working
router.get('/search', productController.getProductBySearch);
router.get('/:id', productController.getProductById); //working
router.put('/update/:id', productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);
export const productRoute = router;