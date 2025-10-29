import { cartItemSchema } from "../models/cart/cartValidation.js";
import type { CartItem } from "../models/cart/cartValidation.js";
import { service } from "../services/cartService.js";
import { type cartItem } from "../models/cart/cart.js";
import Product from "../models/products/productSchema.js";



const createProductForCart = async (req: any, res: any) => {
  try {
    // const userId = req.user?.id || req.body.userId;
    // if (!userId) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "User ID is required",
    //   });
    // }

    const productId: string = req.params.productId;
    const validatedProduct: CartItem = cartItemSchema.parse(req.body);

    // 1️⃣ Fetch product data from DB
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const { quantity, variantId } = req.body;

  
    const productToAdd: cartItem = {
      productId: product._id.toString(),
      variantId: variantId ?? undefined,
      brand: product.brand,
      name: product.name,          
      quantity: quantity ?? 1,     
      unitPrice: product.price,
      finalPrice: product.finalPrice,  
      ...(product.slug && { slug: product.slug }),
      ...(product.imageUrl?.length && { imageUrl: product.imageUrl[0] }), 
      ...(validatedProduct.originalPrice && { originalPrice: validatedProduct.originalPrice }),
      ...(validatedProduct.stockAtTime !== undefined && { stockAtTime: validatedProduct.stockAtTime }),
      ...(validatedProduct.maxAllowedPerOrder !== undefined && { maxAllowedPerOrder: validatedProduct.maxAllowedPerOrder }),
    };

    // 3️⃣ Pass userId also
    const result = await service.productToCart( productToAdd);

    return res.status(201).json({
      success: true,
      message: "Product added to cart successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error?.message || "Internal Server Error",
    });
  }
};

export const cartController={
createProductForCart
}


