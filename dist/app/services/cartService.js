import Cart from "../models/cart/cartSchema.js";
const productToCart = async (productData) => {
    // const productToCart = async (userId: string, productData: cartItem) => {
    // let cart = await Cart.findOne({ userId });
    // if (!cart) {
    let cart = await Cart.create({
        // userId,
        items: [productData],
        pricing: {
            subTotal: productData.finalPrice,
            tax: 0,
            discount: 0,
            deliveryCharge: 0,
            payableAmount: productData.finalPrice
        }
    });
    // } else {
    // cart.items.push(productData);
    cart.pricing.subTotal += productData.finalPrice;
    cart.pricing.payableAmount += productData.finalPrice;
    await cart.save();
    // }
    return cart;
};
export const service = {
    productToCart,
};
//# sourceMappingURL=cartService.js.map