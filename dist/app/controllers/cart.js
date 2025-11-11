import { cartItemSchema } from "../models/cart/cartValidation.js";
import { service } from "../services/cartService.js";
import Product from "../models/products/productSchema.js";
const createProductForCart = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User ID missing or invalid token",
            });
        }
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
        const { quantity, variantId } = req.body;
        const productToAdd = {
            productId: product._id.toString(),
            brand: product.brand,
            name: product.name,
            quantity: quantity ?? 1,
            unitPrice: product.price,
            finalPrice: product.finalPrice,
            ...(product.slug && { slug: product.slug }),
            ...(product.imageUrl?.length && { imageUrl: product.imageUrl[0] }),
            ...(req.body.originalPrice && { originalPrice: req.body.originalPrice }),
            ...(req.body.stockAtTime !== undefined && { stockAtTime: req.body.stockAtTime }),
            ...(req.body.maxAllowedPerOrder !== undefined && { maxAllowedPerOrder: req.body.maxAllowedPerOrder }),
        };
        const validatedProduct = cartItemSchema.parse(productToAdd);
        const result = await service.productToCart(userId, validatedProduct);
        return res.status(201).json({
            success: true,
            message: "Product added to cart successfully",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error?.message || "Internal Server Error",
        });
    }
};
const deleteProductFromCart = async (req, res) => {
    try {
        const userId = req.user?.id;
        const productId = req.params.productId;
        if (!userId || !productId) {
            return res.status(400).json({ success: false, message: "User ID or Product ID missing" });
        }
        const result = await service.deleteProductFromCart(userId, productId);
        if (!result) {
            return res.status(404).json({ success: false, message: "Cart or product not found" });
        }
        return res.status(200).json({
            success: true,
            message: "Product removed from cart successfully",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "couldnt delete product" });
    }
};
export const cartController = {
    createProductForCart,
    deleteProductFromCart
};
//# sourceMappingURL=cart.js.map