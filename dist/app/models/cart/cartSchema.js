import mongoose, { Schema } from "mongoose";
// CartItem Schema
const cartItemSchema = new Schema({
    productId: { type: String, required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: false },
    imageUrl: { type: String, required: false },
    quantity: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    originalPrice: { type: Number, required: false },
    finalPrice: { type: Number, required: true },
    stockAtTime: { type: Number, required: false },
    maxAllowedPerOrder: { type: Number, required: false },
});
// Pricing Schema
const cartPricingSchema = new Schema({
    subTotal: { type: Number, required: true },
    tax: { type: Number, required: true },
    discount: { type: Number, required: true },
    deliveryCharge: { type: Number, required: true },
    payableAmount: { type: Number, required: true },
});
// Cart Schema
const cartSchema = new Schema({
    userId: { type: String, required: true, unique: true },
    items: { type: [cartItemSchema], required: true },
    pricing: { type: cartPricingSchema, required: true },
}, { timestamps: true });
export default mongoose.model("Cart", cartSchema);
//# sourceMappingURL=cartSchema.js.map