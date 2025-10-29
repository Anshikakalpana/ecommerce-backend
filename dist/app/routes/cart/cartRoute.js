import express from "express";
import { cartController } from "../../controllers/cart.js";
const router = express.Router();
router.post('/:productId', cartController.createProductForCart);
// router.get('/' ,productController.getAllProducts)
// router.get('/search' ,productController.getProductBySearch)
// router.get('/:id' ,productController.getProductById)
// router.put('/:id' , productController.updateProduct)
// router.delete('/:id' , productController.deleteProduct)
export const cartRoute = router;
//# sourceMappingURL=cartRoute.js.map