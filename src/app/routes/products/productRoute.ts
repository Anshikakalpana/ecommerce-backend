import express from "express"
import { productController } from "../../controllers/products.js";
const router = express.Router();

router.post('/' ,productController.createProduct)
router.get('/' ,productController.getAllProducts)
router.get('/search' ,productController.getProductBySearch)
router.get('/:id' ,productController.getProductById)

router.put('/:id' , productController.updateProduct)

router.delete('/:id' , productController.deleteProduct)
export const productRoute = router;